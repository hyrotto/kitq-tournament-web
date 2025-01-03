import React from "react";
import styles from "./page.module.css";
import NewsList from "./NewsList";
import newsData from "../NewsList.json";


export default async function Entry() {
  return (
    <div className={styles.container}>
      <h1 className={styles.TitleText}>お知らせ</h1>
      <NewsList newsData={newsData} />
    </div>
  );
}