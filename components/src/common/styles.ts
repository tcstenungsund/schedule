import { CSSResult, css, unsafeCSS } from "lit";

export function getStylesFromDom(): CSSResult {
  const styleSheets = document.styleSheets;

  const styles = Array.from(styleSheets)
    .map((sheet: any) => {
      return Array.from(sheet.cssRules)
        .map((rule: any) => {
          return rule.cssText;
        })
        .join("\n");
    })
    .join("\n");

  // Unsafe CSS is used here because the CSS is already in use by the browser,
  // if this can be done in a safer way, please let me know.
  return css`
    ${unsafeCSS(styles)}
  `;
}
