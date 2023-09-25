import './globals.css';
import { Inter } from 'next/font/google';

// Importing Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingContextProvider from '@/contextproviders/LoadingContextProvider';
import AlertContextProvider from '@/contextproviders/AlertContextProvider';
import Toast from '@/components/Toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Saqib Tanveer',
  description: 'This is a portfolio of saqib tanveer where he showcased his work',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingContextProvider>
          <AlertContextProvider>
            <Header />
            {children}
            <Toast />
            <Footer />
          </AlertContextProvider>
        </LoadingContextProvider>
      </body>
    </html>
  );
}
