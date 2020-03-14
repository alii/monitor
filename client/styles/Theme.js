import { brightnessByColor, themedShadeColor, rgbToHex } from '../functions/color';

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./theme.scss');

const isDarkTheme = brightnessByColor(rgbToHex(theme.bg)) < 200;
console.log(`Dark theme:`, isDarkTheme);

const inputBackground = isDarkTheme ? themedShadeColor(theme.bg, -10) : themedShadeColor(theme.bg, 5);

theme.input = `
  background: ${inputBackground};
  border: 1px solid ${themedShadeColor(theme.bg, -10)};
  color: #${(Number(`0x1${theme.color}`) ^ 0xffffff).toString(16)};
    
  border-radius: 5px;
  padding: 10px 3px;

  &:active {
    border: 1px solid ${theme.accent};
  }
 
  &:focus {
    background: ${isDarkTheme ? themedShadeColor(theme.bg, -10) : themedShadeColor(theme.bg, -5)};
  } 
`;

export default theme;
