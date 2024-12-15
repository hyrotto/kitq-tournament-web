import styles from "./page.module.css";
import {
  NativeImage
} from "@yamada-ui/react"


export default function Home() {
  return (
    <div className={styles.page}>
      h1
      <NativeImage
        src="大会メインイラスト_モック.png"
        h = "600"
      />
    </div>
  );
}
