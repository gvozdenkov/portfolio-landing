import { DM_Sans, Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-main',
});

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-secondary' });

export const mainFont = poppins.variable;
export const secondaryFont = dmSans.variable;
