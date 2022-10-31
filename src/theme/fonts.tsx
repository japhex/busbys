import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Clash';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/ClashDisplay-Regular.ttf') format('ttf'), url('./fonts/ClashDisplay-Regular.woff') format('woff'), url('./fonts/ClashDisplay-Regular.woff2') format('woff2');
      }
      @font-face {
        font-family: 'ClashMedium';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/ClashDisplay-Medium.ttf') format('ttf'), url('./fonts/ClashDisplay-Medium.woff') format('woff'), url('./fonts/ClashDisplay-Medium.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/Satoshi-Regular.ttf') format('ttf'), url('./fonts/Satoshi-Regular.woff') format('woff'), url('./fonts/Satoshi-Regular.woff2') format('woff2');
      }
      @font-face {
        font-family: 'SatoshiMedium';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/Satoshi-Medium.ttf') format('ttf'), url('./fonts/Satoshi-Medium.woff') format('woff'), url('./fonts/Satoshi-Medium.woff2') format('woff2');
      }
      @font-face {
        font-family: 'SatoshiBold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/Satoshi-Bold.ttf') format('ttf'), url('./fonts/Satoshi-Bold.woff') format('woff'), url('./fonts/Satoshi-Bold.woff2') format('woff2');
      }      
      `}
  />
)

export default Fonts
