import { themedShadeColor } from '../functions/color';

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./app.scss');
theme.input = `
  background: ${theme.bg};
  border: 1px solid ${themedShadeColor(theme.bg, -20)};
  border-radius: 5px;
  padding: 10px 3px;
`;

export default theme;
