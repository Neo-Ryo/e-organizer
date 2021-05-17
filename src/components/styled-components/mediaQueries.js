export const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 1800,
};

export const size = {
  xs: `${breakpoints.xs}`,
  sm: `${breakpoints.sm}`,
  md: `${breakpoints.md}`,
  lg: `${breakpoints.lg}`,
  xl: `${breakpoints.xl}`,
  xxl: `${breakpoints.xxl}`,
};

export const device = {
  xs: `(minwidth: ${size.xs})`,
  sm: `(minwidth: ${size.sm})`,
  md: `(minwidth: ${size.md})`,
  lg: `(minwidth: ${size.lg})`,
  xl: `(minwidth: ${size.xl})`,
  xxl: `(minwidth: ${size.xxl})`,
};
