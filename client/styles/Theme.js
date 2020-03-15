import { brightnessByColor, themedShadeColor, rgbToHex, shadeColor } from '../functions/color';

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
  transition: ${theme.transition};

  &:active {
    transform: scaleX(1.05);
  }
 
  &:focus {
    // border: 1px solid ${theme.accent};
    background: ${isDarkTheme ? themedShadeColor(theme.bg, -10) : themedShadeColor(theme.bg, -5)};
  } 
`;

theme.input = buttonStyles;
theme.button = buttonStyles;

theme.LOG_THEMES = {
  info: {
    background: theme.accent,
    color: shadeColor(rgbToHex(theme.accent), -120),
  },
  debug: {
    background: theme.debug,
    color: shadeColor(rgbToHex(theme.debug), -120),
  },
  error: {
    background: theme.error,
    color: shadeColor(rgbToHex(theme.error), -120),
  },
  success: {
    background: theme.success,
    color: shadeColor(rgbToHex(theme.success), -120),
  },
  warn: {
    background: theme.warn,
    color: shadeColor(rgbToHex(theme.warn), -120),
  },
};

export default theme;
