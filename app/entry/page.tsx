import React from "react";
import styles from "./page.module.css"
import {
  Link
} from "@yamada-ui/react"

export default async function Entry() {
    return (
      <div className={styles.container}>
        <h1 className={styles.TitleText}>エントリー</h1>
        <div className={styles.DescriptionText}>
          エントリーは<span>XX月XX日(金)21:30</span>より開始いたします。
        </div>
        ↓エントリーフォームはこちら
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSe_ToH3hv9i6y6NI0ajJ9fAj2xTYJRLwMEqZeRAo2XeptMXQA/viewform?usp=header"
          target="_blank"
          className={styles.EntryButton}
          >
          エントリーフォーム
        </Link>
        <div className={styles.EntryListText}>
          エントリーリストは
          <Link
            href="https://docs.google.com/spreadsheets/d/1VEu7CzN9mjwQEcQcd3rNAJojxx6lh-nLl2yT6H2_Aa8/edit?usp=drive_link"
            target="_blank"
            className={styles.EntryListURL}
          >
            こちら
          </Link>
        </div>
      </div>
    );
  }
  