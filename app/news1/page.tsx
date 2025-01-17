import React from "react";
import styles from "./page.module.css";
import { Link } from "@yamada-ui/react";

export default async function NewsFirstPage() {
  return (
    <div className={styles.container}>
        <h1 className={styles.TitleText}>クイズ大会HP公開のお知らせ</h1>
        <div className={styles.DateText}>2024年1月26日</div>
      <div className={styles.DescriptionText}>
        <p>
        この度、King&Queen杯の会の公式ホームページを公開いたしました！
        </p>
        <p>
        大会に関する最新情報やエントリー開始など、各種情報を発信してまいります。
        </p>
        <p>
        ぜひ、今後の情報にご期待ください！
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