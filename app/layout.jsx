'use client'
import '../styles/globals.css';
import {useEffect} from 'react'
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {

    useEffect(() => {
    const scriptText = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PXG87RF6');`;

    const scriptElement = document.createElement('script');
    scriptElement.async = true;
    scriptElement.text = scriptText;
    document.body.appendChild(scriptElement);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(scriptElement);
    };
  }, []); // Empty array means this effect runs only once after the initial render

    return (
        <html lang="en" data-theme="lofi">
            <head>
           
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXG87RF6"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <div className="grow">{children}</div>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
