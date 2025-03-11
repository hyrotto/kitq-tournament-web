import React from "react";
import styles from "./page.module.css";
import { Link } from "@yamada-ui/react";

export default async function NewsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.TitleText}>大会エントリーを締め切りました</h1>
      <div className={styles.DateText}>2025年3月11日</div>
      <div className={styles.DescriptionText}>
        <p>
          3月10日の24時をもって大会エントリーを締め切りました。
        </p>
        <p>
          46名ものエントリー、本当にありがとうございます。
        </p>
        <p>
          大会当日皆さんにお会いできることを、キングくんとクイーンちゃんをはじめ運営一同楽しみにしております！ 
        </p>
      </div>

      <div className={styles.LinkArea}>
        <Link href="/" color="blue.500">
           トップページへ
        </Link>
      </div>
    </div>
  );
}