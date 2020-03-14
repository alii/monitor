import { brightnessByColor, themedShadeColor, rgbToHex } from '../functions/color';

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./theme.scss');

const isDarkTheme = brightnessByColor(rgbToHex(theme.bg)) < 200;
console.log(`Dark theme:`, isDarkTheme);

const inputBackground = isDarkTheme ? themedShadeColor(theme.bg, -10) : themedShadeColor(theme.bg, 5);

const buttonStyles = `
  background: ${inputBackground};
  border: 1px solid ${themedShadeColor(theme.bg, -10)};
  color: ${theme.color};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    
  border-radius: 5px;
  padding: 10px 3px;

  &:active {
    border: 1px solid ${theme.accent};
  }
 
  &:focus {
    background: ${isDarkTheme ? themedShadeColor(theme.bg, -10) : themedShadeColor(theme.bg, -5)};
  } 
`;

theme.input = buttonStyles;
theme.button = buttonStyles;

export default theme;
