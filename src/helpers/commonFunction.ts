export const gridCustomCss = (id: any) => {
  let css = 'lg:justify-self-start';
  if ([2, 5, 8].includes(id)) {
    css = '';
  } else if ([3, 6, 9].includes(id)) {
    css = 'lg:justify-self-end';
  }
  return css;
};
