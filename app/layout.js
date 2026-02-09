import localFont from "next/font/local";
import "./globals.css";
import Topbar from "./Components/Topbar";
import Footer from "./Components/Footer";
import LayoutWrapper from "./LayoutWrapper";
import Script from "next/script";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "boxicons/css/boxicons.min.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Move It Solution- Best International Packers and Movers",
  description: "Move It Solution Best International Packers and Movers offers safe and secure packing and moving services. We offer the best moving abroad services packaging.",
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle",
    creator: "@creatorhandle",
    title: "Move It Solution- Best International Packers and Movers",
    description: "Move It Solution Best International Packers and Movers offers safe and secure packing and moving services. We offer the best moving abroad services packaging.",
    images: ["/Images/faicon.ico"],
  },
  other: {
    "google-site-verification": "kZs1jy7LK5hF4fSlkfIqZGgGr4LUUerh_SaBloYdJBo",
    "msvalidate.01": "0886A2B0E29A2EAEB5DD885AF107FBBF",
  },
  alternates: {
    canonical: "https://www.moveitsolution.com/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Move It Solution",
  image: "https://www.moveitsolution.com/assets/img/logo/Move-it-solution-packers-and-movers.webp",
  "@id": "",
  url: "https://www.moveitsolution.com/",
  telephone: "7056997000",
  priceRange: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sco No : 487, 1st Floor, Near SBI Bank, Dwarka Sector 26",
    addressLocality: "New Delhi",
    postalCode: "110077",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5436949,
    longitude: 77.0499221,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10812845389"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PWNG14E9QT"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZW27KXPX22"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10812845389');
            gtag('config', 'G-PWNG14E9QT');
            gtag('config', 'G-ZW27KXPX22');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1105058544316403');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1105058544316403&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Topbar />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <Footer />
      </body>
    </html>
  );
}
