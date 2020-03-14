/**
 * Returns a readable text color based upon the passed rgb values
 * @param {object} rgb The RGB Object
 * @param {object} theme The theme object
 */
export const setContrast = (rgb, theme) =>
  (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125 ? 'white' : theme.color;

/**
 * Returns an RGB object with a proved a hex code
 * @param {string} hex The hex code
 */
export const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 * Lightens or darkens a provided hex code
 * @param {string} col The hex code
 * @param {number} amt The amount to shade by. Can be positive or negative.
 */
export const shadeColor = (col, amt) => {
  return (
    '#' +
    col
      .slice(1)
      .match(/../g)
      .map(x => ((x = +`0x${x}` + amt), x < 0 ? 0 : x > 255 ? 255 : x).toString(16).padStart(2, 0)).join``
  );
};

/**
 * Returns a hex object from a provided rgb
 * @param {string} rgb The rgb string. E.g. `rgb(0,0,0)`
 */
export const rgbToHex = rgb => {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

  return rgb && rgb.length === 4
    ? '#' +
        ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2)
    : '';
};

/**
 * Lightens or darkens a provided rgb value. Returns a hex
 * @param {string} rgb The rgb  string. E.g. `rgb(0,0,0)`;
 * @param {number} amount The amount to shade by
 */
export const themedShadeColor = (rgb, amount) => shadeColor(rgbToHex(rgb), amount);
