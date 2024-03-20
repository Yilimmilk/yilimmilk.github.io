// get color scheme from system
const getThemeFromCSSMediaQuery = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// get hex color opposite color
const getOppositeHexColor = (hex: string) => {
  // check the start of the string
  if (hex.indexOf('#') === -1) {
    hex = '#' + hex;
  }
  // remove "#"
  hex = hex.replace('#', '').toUpperCase();

  // trans hex into RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // cal opposite color
  r = 255 - r;
  g = 255 - g;
  b = 255 - b;

  // trans RGB to hex
  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`;
};

export { getOppositeHexColor, getThemeFromCSSMediaQuery };
