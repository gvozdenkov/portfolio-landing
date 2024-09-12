import { DM_Sans, Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--ff-primary',
});

const dmSans = DM_Sans({ weight: ['400', '500'], subsets: ['latin'], variable: '--ff-secondary' });

export const mainFont = poppins.variable;
export const secondaryFont = dmSans.variable;
