"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "/styles/scss/main.scss";
import "/styles/css/main.css";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setLoading] = useState(isHome);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");

    if (isLoading) return;
  }, [isLoading]);

  return (
    <html lang="es">
      <head>
        <title>Tralodi</title>
        <meta
          title="description"
          content="Página web comercial para Inversiones Tralodi"
        />
        <link rel="icon" href="/svg/favicon.svg" />
      </head>
      <body className="bg-primary text-secondary">
          <>
            <header className="container-fluid">
              <Navbar />
            </header>
            <div className="container">
                {children}
            </div>
          </>
      </body>
    </html>
  );
}
