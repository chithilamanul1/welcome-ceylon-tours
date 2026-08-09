const fs = require('fs');
const path = require('path');

// 1. Update layout.tsx
const layoutPath = path.join(__dirname, 'src', 'app', 'layout.tsx');
let layoutContent = fs.readFileSync(layoutPath, 'utf8');

const fbPixelScript = `
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {\`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          \`}
        </Script>
`;

const fbPixelNoScript = `
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" alt="" />
        </noscript>
`;

if (!layoutContent.includes('facebook-pixel')) {
    layoutContent = layoutContent.replace('</head>', fbPixelScript + '      </head>');
    layoutContent = layoutContent.replace('</body>', fbPixelNoScript + '      </body>');
    fs.writeFileSync(layoutPath, layoutContent, 'utf8');
}

// 2. Update page.tsx
const pagePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Replace "read more" with "Book Now" or "Inquire Now" in the Services section
// We can just replace all "read more" links that go to /book or /tours with "Book Now"
pageContent = pageContent.replace(/<Link href="\\/tours" className="btn" style={{ marginTop: 'auto' }}>read more<\\/Link>/g, '<Link href=" / tours" className="btn" style={{ marginTop: \\'auto\\' }}>Book Now</Link>');
pageContent = pageContent.replace(/<Link href="\\/book" className="btn" style={{ marginTop: 'auto' }}>read more<\\/Link>/g, '<Link href=" / book" className="btn" style={{ marginTop: \\'auto\\' }}>Book Now</Link>');

// Also replace the hero section "book now" to "Book Now" for consistency
pageContent = pageContent.replace(/<Link href="\\/book" className="hbtn">book now<\\/Link>/g, '<Link href=" / book" className="hbtn">Book Now</Link>');

fs.writeFileSync(pagePath, pageContent, 'utf8');
console.log('Done');
