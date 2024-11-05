import { Gloria_Hallelujah } from "next/font/google";
import { Indie_Flower } from "next/font/google";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
});

const IndieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

const PatricHand = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Dr Dosage - pediatrician doses",
  description: "pediatrician doses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta name="description" content="Pediatric common drugs dose helper" />

        <meta property="og:title" content="DrDosage - Pediatric dose helper" />
        <meta
          property="og:description"
          content="Pediatric common drugs dose helper"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Cris3h/dosis/main/client/src/app/favicon.ico"
        />
        <meta property="og:url" content="https://drhelper.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="DrDosage - Pediatric dose helper" />
        <meta
          name="twitter:description"
          content="Pediatric common drugs dose helper"
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/Cris3h/dosis/main/client/src/app/favicon.ico"
        />
        <meta name="twitter:card" content="DrDosage - dosage helper" />
        <script
        async src="https://ackee.fly.dev/tracker.js"
        data-ackee-server="https://ackee.fly.dev"
        data-ackee-domain-id="16fb5d57-3f82-4e5e-baf6-098f4af01f11"


        data-ackee-opts-ignore-dnt="false"
        data-ackee-opts-detailed="true"
        data-ackee-opts="{'ignoreLocalhost'='false', detailed: 'true'}"


        data-ackee-options="{'ignoreLocalhost'=false}"
        data-ackee-detailed="true"
        data-ackee-ignore-localhost="false"
        data-ackee-ignore-own-visits="false"
        data-ackee-detailed-device="true"
        data-ackee-with-credentials="true"

        ></script>

      </head>
      <body className={PatricHand.className}>{children}</body>
    </html>
  );
}
