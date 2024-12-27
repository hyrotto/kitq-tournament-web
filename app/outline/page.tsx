import React from "react";
import styles from "./page.module.css"

export default async function Outline() {
    return (
      <div className={styles.container}>
        <h1 className={styles.TitleText}>大会概要</h1>
        <h1 className={styles.SubTitleText}>本大会企画書</h1>
        <iframe
          src="/企画書草案_モック.pdf"
        ></iframe>
        <h1 className={styles.SubTitleText}>本大会企画書</h1>

      </div>
    );
  }
  