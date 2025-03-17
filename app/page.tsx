import styles from "./page.module.css";
import {
  NativeImage
} from "@yamada-ui/react"
import NewsList from "./info/NewsList";
import newsData from "./NewsList.json";
export default function Home() {
  const eventDate = new Date('2025-3-20'); // 大会の日付
  const today = new Date();
  // それぞれの日付の 0 時 0 分 0 秒にする
  const eventDateOnly = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const diffTime = eventDateOnly.getTime() - todayOnly.getTime();
  const remainingDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className={styles.page}>
      <NativeImage
        className={styles.main_illust}
        src="Chara_main.png"
        h="600"
      />
      
      <div className={styles.infoBox}>
        <NewsList newsData={newsData} />
      </div>

      <div className={styles.countdown}>
        <h1 className={styles.text}>3月20日  大会当日まで</h1>
        <h1 className={styles.Ato}>あと</h1>
        <h1 className={styles.days}>2</h1>
        <h1 className={styles.Nichci}>日</h1>
      </div>
    </div>
  );
}
