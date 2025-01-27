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
              とある王国を治める知識豊かな王。豊富な知識と経験を生かした公正な政治で、すべての民から深く愛されている。クイーンちゃんと共に和やかで幸せな日々を送っている。<br />
              早押しボタンは親指で押す。得意ジャンルは「文学」と「音楽」。
            </Text>
          </div>
        </div>

        <div className={styles.CharacterWrapper}>
          <div className={styles.CharacterDescription}>
          <h1 className={styles.CharacterNameText}>クイーンちゃん</h1>
            <Text>
              キングくんの妻で女王。もともとは聡明なキングくんに一目惚れした王国の平民。そのはつらつとした性格は太陽のようだとも形容される。<br />
              早押しボタンは人差し指で押す。得意ジャンルは「芸能」と「雑学」。
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
  