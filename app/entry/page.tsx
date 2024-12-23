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
          href="https://docs.google.com/forms/d/1fAGluT52B6bY1E9g1r4hZh7JZjYaeGWC2rJblkl0Z-c/edit"
          target="_blank"
          className={styles.EntryButton}
          >
          エントリーフォーム
        </Link>
      </div>
    );
  }
  