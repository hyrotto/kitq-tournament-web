import React from "react";
import styles from "./page.module.css";
import { Link } from "@yamada-ui/react";

export default async function NewsSecondPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.TitleText}>King&Queen杯 エントリー開始のお知らせ</h1>
      <div className={styles.DateText}>2025年2月10日</div>
      <div className={styles.DescriptionText}>
        <p>
          お待たせいたしました！ King&Queen杯のエントリー受付を開始いたしました。
        </p>
        <p>
          みなさまのエントリー、心よりお待ちしております。
        </p>
        <p>
          詳細は以下のエントリーページをご確認ください。
        </p>
      </div>

      <div className={styles.LinkArea}>
        <Link href="/entry" color="blue.500">
          エントリーページへ
        </Link>
        <br />
        <Link href="/" color="blue.500">
           トップページへ
        </Link>
      </div>
    </div>
  );
}