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
        src="大会メインイラスト_モック.png"
        h="600"
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

      <h1>大会まで残り: {remainingDays}日</h1>
    </div>
  );
}
