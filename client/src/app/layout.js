import { Gloria_Hallelujah } from "next/font/google";
import { Indie_Flower } from "next/font/google";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
});

const IndieFlower = Indie_Flower({
  subsets: ['latin'],
  weight: '400'
})

const PatricHand = Patrick_Hand({
  subsets: ['latin'],
  weight:'400'
})


export const metadata = {
  title: "Dr Dosage",
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
      </head>
      {/* <body className={gloriaHallelujah.className}>{children}</body> */}
      {/* <body className={IndieFlower.className}>{children}</body> */}
      <body className={PatricHand.className}>{children}</body>


    </html>
  );
}
