import {defineConfig} from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

/*const reactSvgPlugin = require("vite-plugin-react-svg");

module.exports = {
  plugins: [reactRefresh(), reactSvgPlugin()],
};*/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: "./",
});
