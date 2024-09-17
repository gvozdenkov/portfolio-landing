export const convertImagePath = (str: string) =>
  str.replace(
    /\$\{basePath\}/gi,
    process.env.NODE_ENV === 'production' ? '/portfolio-landing' : ''
  );
