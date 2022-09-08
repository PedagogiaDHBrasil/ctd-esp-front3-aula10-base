import { NextPage } from "next";
import React from "react";
import { TyC, TyCsAPIResponse } from "../types";
import styles from "../styles/TYC.module.css";
import Head from "next/head";

type IProps = {
  data: TyCsAPIResponse;
};

const TermosCondicoes: NextPage<IProps> = ({ data }) => {
  if (!data) return null;

  const { version, tycs } = data;

  const renderTyc: (tyc: TyC) => JSX.Element = ({ id, description, title }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className={styles.tycContainer}>
      <Head>
        <title>Loja Gratuito - Termos e Condições</title>
        <meta
          name="description"
          content="termos e condições de Loja Gratuito"
        />
      </Head>
      <h2>Termos e Condições</h2>
      <p>Versão: {version}</p>
      {tycs.map(renderTyc)}
    </div>
  );
};

export async function getStaticProps() {
  const baseUrl = "http://localhost:3000/"; // Mude para o URL do projeto depois que a API for implantada

  const response = await fetch(`${baseUrl}/api/tycs`);

  const data = await response.json();

  return {
    props: { data },
  };
}

export default TermosCondicoes;
