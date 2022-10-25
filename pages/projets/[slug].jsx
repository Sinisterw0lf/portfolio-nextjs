import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import React from "react";
import Layout from "../../components/layout/Layout";

// 1- connect to contentful
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// 2- Generates all slugs of my project in contentful
export async function getStaticPaths() {
  // 1- récupere la data une fois que la promise success
  const res = await client.getEntries({ content_type: "projets" });

  // 2-Get all slugs
  const slugs = res.items.map((slug) => {
    return {
      params: { slug: slug.fields.slug },
    };
  });
  // 3- renvoie tous les slugs dans
  return {
    paths: slugs,
    fallback: false, // can also be true or 'blocking'
  };
}

//3- récupére la data en fonction du slug
export async function getStaticProps({params}) {
  // 1- récupere la data une fois que la promise success
  const res = await client.getEntries({
    content_type: "projets",
    "fields.slug": params.slug,
  });

  // 2- je stock la data dans variable projet
  const projet = res.items;


  return {
    // Passed to the page component as props
    props: { projet: projet[0] },
  };
}

export default function Show({projet}) {
  const {title, description, roles, skills, urlDuProjet, images} = projet.fields
  return (
    <Layout>
      <div className="px-20 pt-40">
        <div className="grid grid-cols-2 items-centers gap-6">
          <div className="pr-10">
            <p className="text-4xl font-black text-centerd pb-10">{title}</p>
            <div>{documentToReactComponents(description)}</div>
            {/* Roles */}
            <div className="pt-5">
              <p className="text-indigo-500  underline underline-offset-4">
                Rôle:
              </p>
              <ul className="italic">
                {roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>
            {/* stacks */}
            <div className="pt-5">
              <p className="text-indigo-500  underline underline-offset-4">
                Stack:
              </p>
              <ul className="italic">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="p2 mt-6">
              <a href={urlDuProjet} target="blank" className=" bg-indigo-500 rounded-lg p-2 text-white">
                Voir le projet
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {images.map((image,index) => (
              <img key={index} src={image.fields.file.url} alt="titre du projet"/>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
