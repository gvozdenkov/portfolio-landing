export const convertImagePath = (str: string) =>
  str.replace(/\$\{basePath\}/gi, 'portfolio-landing');
