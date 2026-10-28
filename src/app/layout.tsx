import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#08080A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "RedlineMD — Physician Contract Review in 24 Hours | Flat $199",
  description:
    "RedlineMD reviews your physician employment contract in under 24 hours. Tail insurance, non-competes and hidden liabilities surfaced and priced in dollars. Flat $199.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20rx%3D%2214%22%20fill%3D%22%2308080A%22%2F%3E%3Cpath%20d%3D%22M20%2014h26v14a13%2013%200%200%201-13%2013h-3v9h-10V14z%22%20fill%3D%22%23E03A2F%22%2F%3E%3C%2Fsvg%3E",
  },
  openGraph: {
    title: "RedlineMD — Physician Contract Review in 24 Hours | Flat $199",
    description:
      "The $10,000 clause on page 14. AI-powered contract redlining for physicians — flat $199, back in 24 hours.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RedlineMD — Physician Contract Review in 24 Hours | Flat $199",
    description:
      "The $10,000 clause on page 14. AI-powered contract redlining for physicians — flat $199, back in 24 hours.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Inter+Tight:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundColor: "#08080A", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
