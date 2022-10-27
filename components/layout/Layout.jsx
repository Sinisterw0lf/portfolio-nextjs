import React from "react";
import Head from "next/head";
import Footer from "../footer/Footer";
import Navbar from "../navigation/Navbar";

export default function Layout({
  children,
  title,
  metaContent,
  image = "vercel.svg",
}) {
  return (
    <>
      <Head>
        <title>{title} | Portfolio</title>
        <meta name="description" content={metaContent} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaContent} />
        <meta property="og:image" content={image} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
