import { createClient } from "contentful";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/hero/Hero";
import Layout from "../components/layout/Layout";
import Navbar from "../components/navigation/Navbar";
import SectionAbout from "../components/section/SectionAbout";
import SectionCard from "../components/section/SectionCard";
import SectionProject from "../components/section/SectionProject";
import styles from "../styles/Home.module.css";

export default function Home({projets}) {
  console.log(projets);
  return (
    <div className="">
      <Layout>
        <Hero />
        <SectionAbout />
        <SectionCard />
        <SectionProject projets={projets}/>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  // 1- connect to contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  // 2-récupere la data une fois que la promise success
  const res = await client.getEntries({content_type: "projets"});
  // 3- On envoie la data dans le props de la page
  return {
    props: {
      projets: res.items,
    }, // will be passed to the page component as props
  };
}