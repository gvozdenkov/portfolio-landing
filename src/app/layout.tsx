import type { Metadata } from 'next';
import { mainFont, secondaryFont } from './shared/utils/fonts';
import Favicon from '/public/static/images/favicon.svg';

import './globals.scss';

export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'Developer portfolio landing page',
  authors: [{ name: 'Arty Gvozdenkov', url: 'https://github.com/gvozdenkov' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mainFont} ${secondaryFont}`}>{children}</body>
    </html>
  );
}
