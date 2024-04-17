import NavBar from "./components/navbar";
import "./globals.css";
import SmoothScrolling from "./components/smoothScrolling";

export const metadata = {
  title: "Tulsi Vanstone Ceramics",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
