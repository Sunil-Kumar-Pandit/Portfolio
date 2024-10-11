"use client"

import Image from "next/image";
import styles from "./page.module.css";
import About from "./components/About";
import Contact from "./components/Contact";
import MyNavbar from "./components/MyNavbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className={styles.page}>
     <MyNavbar/>
      <About/>
      <Skills/>
      <Experience/>
      <Contact/>
    </div>
  );
}
