import React from "react";
import {Global} from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Proxima Nova';
        font-style: normal;
        font-weight: 100;
        src: url('../fonts/proximanova-light.woff2') format('woff2');
      }
      /* latin */
      @font-face {
        font-family: 'Proxima Nova';
        font-style: normal;
        font-weight: normal;
        src: url('../fonts/proximanova-regular.woff2') format('woff2');
      }
      /* latin */
      @font-face {
        font-family: 'Proxima Nova';
        font-style: normal;
        font-weight: 500;
        src: url('../fonts/proximanova-semibold.woff2') format('woff2');
      }
      `}
  />
);

export default Fonts;
