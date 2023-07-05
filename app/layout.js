"use client";
import { useEffect } from "react";
import "/styles/scss/main.scss";
import "/styles/css/main.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  });

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
        <header className="container-fluid mb-4 mb-lg-0">
          <Navbar />
        </header>
        <main>
          <div className="container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
