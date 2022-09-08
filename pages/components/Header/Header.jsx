import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div>
      <figure>
        <Image src="/logo.png" alt="logo" width={50} height={50} />
      </figure>
      <div className={styles.appName}>
        <p>Loja</p>
        <p>Gratuito</p>
      </div>
    </div>
    <div className={styles.navbar}>
      <Link href="./">Produtos em destaque</Link>
      <Link href="./tycs">Termos e Condições</Link>
    </div>
  </header>
);

export default Header;
