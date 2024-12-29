import styles from "./page.module.css";
import {
  NativeImage
} from "@yamada-ui/react"

export default function Home() {
  const eventDate = new Date('2025-3-2'); // 大会の日付
  const today = new Date();
  const diffTime = eventDate.getTime() - today.getTime();
  const remainingDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 日数に変換

  return (
    <div className={styles.page}>
      <NativeImage
        className={styles.main_illust}
        src="大会メインイラスト_モック.png"
        h="500"
      />
      
      <div className={styles.infoBox}>
        <ul>
          <li>お知らせ1</li>
          <li>お知らせ2</li>
          <li>お知らせ3</li>
          <li>お知らせ4</li>
          <li>お知らせ5</li>
        </ul>
      </div>

      <div className={styles.countdown}>
        <h1 className={styles.text}>3月2日  大会当日まで</h1>
        <h1 className={styles.Ato}>あと</h1>
        <h1 className={styles.days}>{remainingDays}</h1>
        <h1 className={styles.Nichci}>日</h1>
      </div>
    </div>
  );
}
