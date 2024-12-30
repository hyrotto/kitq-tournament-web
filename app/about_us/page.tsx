import React from "react";
import styles from "./page.module.css"
import {
  NativeImage,
  Text
} from "@yamada-ui/react"

export default async function Entry() {
    return (
      <div className={styles.container}>
        <h1 className={styles.TitleText}>キャラクター紹介</h1>
        <div className={styles.CharacterWrapper}>
          <NativeImage
            src="/Character_King_transparent.png"
            className={styles.CharacterImage}
          />
          <div className={styles.CharacterDescription}>
          <h1 className={styles.CharacterNameText}>キングくん</h1>
            <Text>
              ここにKINGくんの説明テキストを追加。ここにKINGくんの説明テキストを追加。ここにKINGくんの説明テキストを追加。ここにKINGくんの説明テキストを追加。
            </Text>
          </div>
        </div>

        <div className={styles.CharacterWrapper}>
          <div className={styles.CharacterDescription}>
          <h1 className={styles.CharacterNameText}>クイーンちゃん</h1>
            <Text>
              ここにクイーンちゃんのテキストを追加。ここにクイーンちゃんのテキストを追加。ここにクイーンちゃんのテキストを追加。ここにクイーンちゃんのテキストを追加。
            </Text>
          </div>
          <NativeImage
            src="/Character_Queen_transparent.png"
            className={styles.CharacterImage}
          />
        </div>
      </div>
    );
  }
  