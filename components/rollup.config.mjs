import typescript from "@rollup/plugin-typescript";
import resolve from "rollup-plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "esm",
      sourcemap: false,
    },

    plugins: [
      resolve(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      terser({
        output: {
          comments: false,
        },
      }),
    ],
  },
];
