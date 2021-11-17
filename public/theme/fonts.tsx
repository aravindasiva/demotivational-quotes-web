import { Global } from "@emotion/react"
const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Mont';
        font-style: normal;
        font-weight: bold;
        src: url('./fonts/Mont-Regular.otf') format('opentype');
      }
      @font-face {
        font-family: 'MontL';
        font-style: normal;
        font-weight: 400;
        src: url('./fonts/Mont-Light.otf') format('opentype');
      }
      @font-face {
        font-family: 'Title';
        font-style: normal;
        font-weight: bold;
        src: url('./fonts/Mont-Bold.otf') format('opentype');
      }
      `}
  />
)
export default Fonts