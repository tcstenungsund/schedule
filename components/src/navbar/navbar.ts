import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getStylesFromDom } from "../common/styles";

@customElement("navbar-component")
export class NavbarComponent extends LitElement {
  static styles = css`
    ${getStylesFromDom()}

    nav {
      display: flex;
      align-items: center;
      height: max(3rem, 10vh);
      & a {
        margin: 0 min(0.5rem, 1vw);
        padding: 0.5rem;
        transition: var(--hover-transition);

        & img {
          height: min(1.5rem, 8vh);
        }
      }

      & a img[src^="resources/icons"] {
        filter: var(--icon-filter);
      }

      & a:hover:has(img[src^="resources/icons"]) {
        transition: var(--hover-transition);
        background-color: var(--hover-background-color);
        border-radius: 100vw;

        img {
          filter: var(--icon-hover-filter);
        }
      }

      & a.back {
        position: fixed;
        left: var(--back-arrow-margin-left);
        bottom: var(--back-arrow-margin-bottom);
        background-color: var(--back-arrow-background-color);
        border-radius: 100vw;
        transition: var(--hover-transition);
        box-shadow: var(--back-arrow-box-shadow);

        &.back:hover {
          transition: var(--hover-transition);
          background-color: var(--primary-color);

          & img {
            filter: invert(1);
          }
        }
      }

      & a.logo {
        margin-left: 0;
        padding-left: 0;
        margin-right: auto;
        height: 100%;
        & img {
          height: 100%;
        }
      }

      & a:last-child {
        margin-right: 0;
      }
    }
  `;

  protected render() {
    return html` <nav>
      <a href="#main" class="sr-only">Gå till huvudinnehåll</a>

      ${document.referrer
        ? html`<a class="back" .href="${document.referrer}" title="Tillbaka">
            <img src="resources/icons/arrow-left-to-line.svg" alt="Tillbaka" />
          </a>`
        : null}

      <a class="logo" href="index.html" title="Översikt">
        <img
          src="resources/images/tc-logo.svg"
          alt="Teknikcollege Stenungsund"
        />
      </a>

      <a
        href="external.html?link=https://web.skola24.se/timetable/timetable-viewer/stenungsund.skola24.se/N%C3%B6sn%C3%A4sgymnasiet/"
        title="Schema - Skola24.se"
      >
        <img
          src="resources/icons/calendar-days.svg"
          alt="Kalender - Schema - Skola24.se"
        />
      </a>

      <a
        href="external.html?link=https://www.skolmaten.se/nosnasgymnasiet/"
        title="Skolmaten - Skolmaten.se"
      >
        <img
          src="resources/icons/utensils.svg"
          alt="Skolmaten - Skolmaten.se"
        />
      </a>

      <a
        href="external.html?link=https://stenungsund.skola24.se/"
        title="Elevinformation - Skola24.se"
      >
        <i class="fa-solid fa-id-card"></i>
        <img
          src="resources/icons/user.svg"
          alt="Användare - Elevinformation - Skola24.se"
        />
      </a>

      <a
        href="external.html?link=https://tcstenungsund.github.io/digital-signage/"
        title="Skolinformation - Digital skyltning"
      >
        <img
          src="resources/icons/monitor.svg"
          alt="Skärm - Skolinformation - Digital skyltning"
        />
      </a>
    </nav>`;
  }
}
