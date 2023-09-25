import { Inter } from 'next/font/google';

// css files
import './globals.css';

// Importing Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';

// Importing Context Providers
import LoadingContextProvider from '@/contextproviders/LoadingContextProvider';
import AlertContextProvider from '@/contextproviders/AlertContextProvider';

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
