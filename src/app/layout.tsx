import type { Metadata } from "next";
import Script from "next/script";
import { Bebas_Neue, Great_Vibes } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.welcomeceylontours.lk'),
  title: "Welcome Ceylon Tours | #1 Travel Agency in Sri Lanka",
  description: "Welcome Ceylon Tours is the premier travel agency in Sri Lanka. Book your dream holiday with Welcome Ceylon Tours today for the best tour packages, wildlife safaris, and beach holidays across the island.",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  keywords: [
    "Welcome Ceylon Tours", "welcome ceylon", "best tour agency in sri lanka", "tour agency in sri lanka", "tours sri lanka", "sri lankan travels", "sri lanka tours", "sri lanka tour package", "sri lanka holiday packages", "sri lanka holidays", "sri lanka trip", "best sri lanka tour package", "sri lanka tour and beach holiday", "sri lanka private tours", "srilanka tour", "sri lanka group tours", "sri lanka tours from colombo", "sri lanka tour package for couple", "sri lanka and maldives package", "sri lanka travel packages", "sri lanka package", "sri lanka vacation", "sri lanka travel agents", "visit sri lanka", "tours to sri lanka from uk", "sri lanka tour holidays", "sri lanka vacation packages", "sri lanka itinerary", "sri lanka tour packages price", "sri lanka guided tours", "sri lanka maldives package", "sri lanka family holiday", "srilanka package", "top 10 travel agencies in sri lanka", "small group tours sri lanka", "maldives and sri lanka", "tours in sri lanka from colombo", "sri lanka luxury tour packages", "sri lanka travel guide", "sri lanka excursions", "sri lanka and maldives 2 week itinerary", "sri lanka group tour packages", "luxury sri lanka holidays", "sri lanka 7 days tour package", "trip a deal sri lanka", "luxury sri lanka tours", "sri lanka tour guide", "sri lanka tour packages for family", "best sri lanka tours", "sri lanka family holiday packages", "sri lanka itinerary 10 days", "sri lanka holiday deals", "sri lanka tour operators", "sri lanka itinerary 7 days", "tour packages from sri lanka", "sri lanka private tours with driver", "explore sri lanka", "sri lanka guided tour holidays", "sri lanka itinerary 5 days", "sri lanka specialist tour operators", "get your guide sri lanka", "luxury travel sri lanka", "best sri lanka tour operators", "sri lanka holiday tours package", "india and sri lanka tours", "best sri lanka holiday packages", "private tour guide sri lanka", "walkers tours sri lanka", "sri lanka family tour packages", "sri lanka 5 days tour package", "5 days tour package sri lanka", "colombo tour package", "tailor made tours sri lanka", "sri lanka trip budget", "sri lanka tour itinerary", "sri lanka local tour packages", "sri lanka tour package with flight", "sri lanka itinerary 14 days", "india to sri lanka tour package", "maldives tour packages from sri lanka", "escorted tours sri lanka", "sri lanka sightseeing", "tailor made holidays to sri lanka", "tour companies in sri lanka", "sri lanka family tour", "sri lanka tours from india", "sri lanka beach holiday", "sri lanka trip cost from india", "sri lanka travel itinerary", "sri lanka tour package cost", "sri lanka travel tours", "trips in sri lanka", "sri lanka travel deals", "sri lanka trip package", "sri lanka trip cost", "thailand tour packages from sri lanka", "sri lanka destinations", "maldives package from sri lanka", "sri lanka 10 days package", "sri lanka trip a deal", "sri lanka tours and travels", "sri lanka trip itinerary", "sri lanka tour packages for couple", "sri lanka adventure holidays", "srilanka trip packages", "sri lanka guide", "colombo tours", "private guide sri lanka", "sri lanka 3 days tour package", "sri lanka where to go", "best tours in sri lanka", "tours around sri lanka", "sri lanka wildlife tour packages", "travel agents in colombo sri lanka", "on the go tours sri lanka", "experience travel group sri lanka", "holidays to sri lanka from uk", "sri lanka day tours", "sri lanka holiday destinations", "sri lanka 10 day tour", "tours from colombo sri lanka", "sri lanka tour operators in colombo", "sri lanka to thailand tour packages", "sri lanka tour packages from sri lanka", "group travel sri lanka", "sri lanka travel agency list", "family trip to sri lanka", "place to visit in sri lanka", "experience travel sri lanka", "sri lanka round trip", "local travel agents in sri lanka", "sri lanka tour guide and driver", "solo holidays to sri lanka", "best sri lanka holidays", "travel companies sri lanka", "sri lanka 7 day tour", "explore holidays sri lanka", "sri lanka vacation tours", "sri lanka beach holiday packages", "sri lanka wildlife holidays", "sri lanka adventure", "7 days in sri lanka", "make my trip sri lanka", "sri lanka tour and stay", "sri lanka get your guide", "best sri lanka itinerary", "5 days in sri lanka", "solo travel tours sri lanka", "sri lanka tour and beach", "classic travels sri lanka", "travel agents in colombo", "sri lanka package deals", "sri lanka holiday itinerary", "sri lanka cheap tour packages", "tours from colombo", "sri lanka 8 day tour", "sri lanka solo tours", "india and sri lanka holiday", "5 days sri lanka tour package", "travel around sri lanka", "sri lanka wildlife tour", "14 days in sri lanka", "planning a trip to sri lanka", "3 nights 4 days sri lanka package", "sri lanka tourism website", "tours for sri lanka", "sri lanka adventure tours", "day trips in sri lanka", "tours from sri lanka", "sri lanka budget tour packages", "travels in sri lanka", "lanka tours and travels", "sri lanka sightseeing tours", "sri lanka and the maldives holidays", "tours lanka", "sri lanka 1 week itinerary", "best travel agency in sri lanka", "travel packages from sri lanka", "sri lanka singles holidays", "sri lanka travel group", "sri lanka itinerary 4 days", "sri lanka itinerary 8 days", "sri lanka 12 day itinerary", "holidaying in sri lanka", "inbound travel agents in sri lanka", "sri lanka 4 nights 5 days itinerary", "sri lanka tour package from colombo", "sri lanka tailor made tours", "sri lanka tour packages from colombo", "sri lanka travel websites", "tour for sri lanka", "4 days in sri lanka", "sri lanka tailor made holidays", "on the go sri lanka", "sri lanka 6 days itinerary", "sri lanka packages from india", "sri lanka short tours", "blue lanka tours owner", "travels in colombo", "top travel agents in sri lanka", "cheap holiday packages to sri lanka", "india sri lanka tours", "maldives tours from sri lanka", "book sri lanka holiday", "best sri lanka packages", "sri lanka tour package price", "cheap sri lanka tours", "discover sri lanka", "sri lanka package trip", "short sri lanka tours", "colombo day tours", "luxury trips to sri lanka", "travel agents sri lanka tour packages", "colombo trip", "sri lanka tour cost", "10 days sri lanka", "sri lanka travel holidays", "trip to sri lanka from india", "colombo sri lanka tour", "sri lanka tourism packages from india", "tours in colombo", "sri lanka 5 day tour package", "sri lanka b2b travel agents", "visit lanka tours", "day tours from colombo", "sri lanka trip package from india", "tour packages for sri lanka from india", "budget tours sri lanka", "sri lanka beach tour packages", "srilanka tour guide", "sri lanka 2 days tour package", "sri lanka flight and hotel deals", "travel local sri lanka", "thailand tours from sri lanka", "tour operators in colombo", "sri lanka tourism site", "go lanka tours", "sri lanka vacation packages from india", "lanka travels", "adventure travel sri lanka", "lanka tour driver", "sri lanka package for 5 days", "negombo travel agents", "srilanka tour operators", "5 day sri lanka tour", "best travel agency for sri lanka", "sri lanka tourist information", "travel and tourism companies in sri lanka", "sri lanka safari tour", "8 days in sri lanka", "srilanka holidays", "tourist travel agency in sri lanka", "beauty lanka travels", "scenic tours sri lanka", "sri lanka travel and tourism", "north sri lanka itinerary", "sri lanka 3 day tour", "sri lanka trip cost from india for couple", "inbound tour operators in sri lanka", "5 day trip to sri lanka", "sri lanka luxury itinerary", "aitken spence travels sri lanka", "travel sites in sri lanka", "make my trip sri lanka package", "india and sri lanka trip", "sri lanka 6 nights 7 days itinerary", "7 day trip to sri lanka", "ceylon classic tours", "sri lanka wide tours", "ceylon travels", "sri lanka couple package", "sri lanka tour driver", "sri lanka 3 day itinerary", "round trip to sri lanka", "5 days sri lanka itinerary", "jaffna tour packages", "north sri lanka tour", "colombo holiday packages", "kandy tours", "srilanka trip", "local guide sri lanka", "7 days itinerary for sri lanka", "sri lanka 9 day itinerary", "tour operators in sri lanka list", "srilanka tourism", "best holidays in sri lanka", "jaffna tours", "sri lanka tour drivers", "tripadeal sri lanka", "sri lanka local tour operators", "sri lanka nature tours", "tourist spots in sri lanka", "best tour company sri lanka", "10 day trip to sri lanka", "travel colombo", "9 days in sri lanka", "best place to visit sri lanka", "outbound tour operators in sri lanka", "one week sri lanka itinerary", "sri lanka private tour driver", "6 days in sri lanka", "sri lanka holiday guide", "colombo tour guide", "12 days in sri lanka", "walking holidays sri lanka", "top tour operators in sri lanka", "solo sri lanka", "best travel companies in sri lanka", "best tourism company in sri lanka", "srilanka holiday package", "trip to srilanka", "srilanka travel package", "travel to sri lanka from us", "srilanka travel", "visit srilanka", "sri lanka tourism now", "travel to srilanka", "srilanka vacation", "sri lanka tours 2022", "travel srilanka", "sri lanka when to go", "tour srilanka", "maldives travel packages from sri lanka", "srilanka itinerary", "sri lanka hiking tours", "colombo day trips", "maldives travel agents in sri lanka", "sri lanka solo trip cost", "srilanka visit", "getting around sri lanka", "sri lanka tour holidays 2022", "sri lanka 14 days tour", "getyourguide sri lanka", "tours in srilanka", "srilanka trip cost", "travel agents in sri lanka to india", "maldives tour packages price from sri lanka", "sri lanka tourist destinations", "colombo day tour package", "srilanka trip budget", "tourism in sri lanka now", "visit colombo", "colombo sri lanka holidays", "holidays srilanka", "a tourist destination in sri lanka", "best destinations in sri lanka", "best holiday destinations in sri lanka", "best travel websites in sri lanka", "ceylon travel and tourism", "colombo travel guide", "go vacation sri lanka", "sri lanka cost of travel", "sri lanka for tourists now", "sri lanka travel destination", "sri lanka travel now", "sri lanka when to visit", "srilanka tourism now", "srilanka travel agent", "thailand tour packages from sri lanka price", "tourism in srilanka", "tourism srilanka", "travel agent in srilanka", "travel in sri lanka now", "travel lk", "travel to maldives from sri lanka", "travel to sri lanka now", "visit sri lanka now", "www srilanka travel", "tour to srilanka", "4 day sri lanka tours", "4 day trip to sri lanka", "4 days sri lanka itinerary", "4 days tour packages sri lanka", "4 nights 5 days sri lanka itinerary", "5 nights sri lanka itinerary", "6 nights sri lanka itinerary", "8 days tour in sri lanka", "a trip to sri lanka", "adventure tour packages in sri lanka", "adventure tourism in sri lanka", "adventure trip in sri lanka", "beach tours in sri lanka", "bespoke tour sri lanka", "best beach holiday in sri lanka", "best day trips from colombo", "best one day trips in sri lanka", "budget for sri lanka trip", "budget for sri lanka trip from india", "budget tour operators in sri lanka", "budget trip to sri lanka from india", "colombo excursions", "colombo one day trip", "colombo tourism packages", "colombo travel packages", "colombo trip packages", "colombo vacation packages", "cost for sri lanka trip", "cost of sri lanka trip", "cost of trip to sri lanka from india", "day tour operator sri lanka", "family adventure holidays sri lanka", "green lanka tours", "holiday package to srilanka", "holiday packages from sri lanka", "holiday travel sri lanka", "holiday trip to sri lanka", "india and sri lanka itinerary", "india sri lanka holiday", "india sri lanka itinerary", "india sri lanka travel", "india sri lanka trip", "india to sri lanka tourism packages", "india tours from sri lanka", "india travel packages from sri lanka", "lanka excursions holidays", "lanka holiday", "lanka package", "lanka tour", "lanka travels and tours", "lanka trip", "luxury tours in sri lanka", "north sri lanka tourism", "one day adventure trip in sri lanka", "one day tour packages in sri lanka", "one day tours in sri lanka", "one day trip around colombo", "one day trip from colombo", "one day trip in sri lanka", "one day trip in sri lanka from colombo", "one day trip in srilanka", "one day trip sri lanka", "package holidays to sri lanka 2022", "package tour to srilanka", "private travel sri lanka", "round tour in srilanka", "round tour sri lanka", "see sri lanka tours", "sl tours", "sri lanka adventure tour packages", "sri lanka beach itinerary", "sri lanka bespoke holidays", "sri lanka day excursions", "sri lanka day tour package", "sri lanka green tours", "sri lanka group holiday", "sri lanka holiday packages from india", "sri lanka itinerary 6 days from india", "sri lanka luxury private tours", "sri lanka luxury tour itinerary", "sri lanka package holidays 2022", "sri lanka package with flight", "sri lanka round tour packages", "sri lanka sightseeing packages", "sri lanka tailored tours", "sri lanka to india travel packages", "sri lanka tour itinerary from india", "sri lanka tour of sri lanka", "sri lanka tour package itinerary", "sri lanka tour packages for family with flight", "sri lanka tour packages with flight", "sri lanka tourism cost", "sri lanka tourism cost from india", "sri lanka tourism from india", "sri lanka tours online", "sri lanka tours with flights", "sri lanka travel and tourism colombo", "sri lanka trip 5 days", "sri lanka visit from india", "sri lankan tour guide", "srilanka round tours", "srilanka round trip", "srilanka tour cost", "srilanka tour itinerary", "srilanka tour package cost", "srilanka tourism package", "srilanka travel and tourism", "srilanka travel guide", "tailor made tours to sri lanka", "the visit lanka tours", "tour in lanka", "tour of srilanka", "tour packages from sri lanka to india", "tour packages to srilanka", "tours for srilanka", "tours of sri lanka 2022", "travel lanka tours", "travel packages to india from sri lanka", "travel packages to sri lanka from india", "travels in srilanka", "trip cost to sri lanka from india", "trip for sri lanka", "trip lanka", "trip packages in sri lanka", "trip to india from sri lanka", "trip to sri lanka cost from india", "uk tour packages from sri lanka", "vacation lanka tours", "visit in lanka tours", "visit sri lanka holidays", "visit sri lanka tour", "wildlife tourism in sri lanka", "sri lanka tripadeal"
  ],
  openGraph: {
    title: "Welcome Ceylon Tours",
    description: "Welcome Ceylon Tours is the #1 travel agency in Sri Lanka, offering the best experiences across the island. Discover the wonders of Sri Lanka with Welcome Ceylon Tours, your trusted partner for unforgettable journeys.",
    url: "https://www.welcomeceylontours.lk",
    siteName: "Welcome Ceylon Tours",
    images: [
      {
        url: "/images/sigiriya12.webp",
        width: 1200,
        height: 630,
        alt: "Sigiriya Rock Fortress, Sri Lanka",
      },
      {
        url: "/images/9arch2.jpg",
        width: 1200,
        height: 630,
        alt: "Nine Arch Bridge, Sri Lanka",
      },
      {
        url: "/images/beach.jpg",
        width: 1200,
        height: 630,
        alt: "Beautiful Beaches of Sri Lanka",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome Ceylon Tours",
    description: "Welcome Ceylon Tours offers the best experiences in Sri Lanka.",
    images: ["/images/sigiriya12.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        {/* Meta Pixel Code */}
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
            var pixelId = 'YOUR_PIXEL_ID';
            if (pixelId && pixelId !== 'YOUR_PIXEL_ID') {
              fbq('init', pixelId);
              fbq('track', 'PageView');
            }
          `}
        </Script>
      </head>
      <body className={`${bebasNeue.variable} ${greatVibes.variable}`}>
        {children}
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="lazyOnload" />
        <Script src="https://unpkg.com/swiper@7/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/js/script.js" strategy="lazyOnload" />
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" alt="" />
        </noscript>
      </body>
    </html>
  );
}
