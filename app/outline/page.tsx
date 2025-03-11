import React from "react";
import styles from "./page.module.css"
import {
  TableContainer,
  NativeTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@yamada-ui/react"
import SimpleCarousel from "./caroucel";
import PDFviewer from "./pdfView";

export default async function Outline() {
  const slides = [
    {
      id:1 ,
      src:"/Sign_preparing.png",
      alt:"かわいい猫の写真"
    },
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.TitleText}>大会概要</h1>
      <h1 className={styles.SubTitleText}>本大会企画書</h1>
      <div className={styles.proposal}>
        <PDFviewer/>
      </div>
      <h1 className={styles.SubTitleText}>例題</h1>
      <TableContainer className={styles.ExampleTableContainer}>
        <NativeTable
          className={styles.ExampleTable}
          size="xl"
          withColumnBorders
          withBorder
          highlightOnHover
        >
          <Thead>
            <Tr>
              <Th>問題</Th>
              <Th>解答</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td className={styles.tableTd}>
              電力が必須の楽器ではあるが発音自体に電力は使われていないため「電気楽器」には分類されない、大型の鉄琴に電気式の共鳴管を付けた楽器を何というでしょう？
              </Td>
              <Td className={styles.tableTd}>ビブラフォン</Td>
            </Tr>
            <Tr>
              <Td className={styles.tableTd}>
              特にプロスポーツでは怪我や欠場などのアクシデントにも柔軟に対応できるため重宝される、チームスポーツにおいて複数のポジションを守ることの出来る選手を何というでしょう？
              </Td>
              <Td className={styles.tableTd}>ユーティリティプレイヤー</Td>
            </Tr>
            <Tr>
              <Td className={styles.tableTd}>
              赤色や青色、茶色などの顔料を用いて筋肉や血管を大げさに表している、色によって役割や性格を表す歌舞伎の特徴的な化粧法を何というでしょう？
              </Td>
              <Td className={styles.tableTd}>隈取</Td>
            </Tr>
            <Tr>
              <Td className={styles.tableTd}>
              昨年（2024年）5月には日本平（にほんだいら）パーキングエリアに出店した、トレーニングの他にも様々なサービスを提供している、RIZAP株式会社が運営しているコンビニジムは何でしょう？
              </Td>
              <Td className={styles.tableTd}>chocoZAP
              </Td>
            </Tr>
            <Tr>
              <Td className={styles.tableTd}>
              借りたものを持ち主に戻すことを表す2 字熟語「返済」の「返（へん）」に送り仮名「す」をつけると「かえす」と読みますが、「済（さい）」に送り仮名「す」をつけると何と読むでしょう？
              </Td>
              <Td className={styles.tableTd}>わたす<br></br>【○：なす】</Td>
            </Tr>

          </Tbody>
        </NativeTable>
      </TableContainer>
    </div>
  );
}