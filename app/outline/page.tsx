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
        <iframe src="/企画書草案_モック.pdf"></iframe>
      </div>
      <span>企画書準備中</span>
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
                「鼠径」「大腿」「椎間板」などの種類がある、体内の臓器などが本来あるべき位置から突出した状態のことを、ラテン語で「飛び出す」という意味の言葉で何というでしょう？
              </Td>
              <Td className={styles.tableTd}>ヘルニア</Td>
            </Tr>
            <Tr>
              <Td className={styles.tableTd}>
                1895年に「ヒトの心電図の形」を発表し、1924年には「心電図法の発見」の功績によりノーベル生理学・医学賞を受賞したオランダの生理学者は誰でしょう？
              </Td>
              <Td className={styles.tableTd}>ウィレム・アイントホーフェン</Td>
            </Tr>
            <Tr>
              <Td className={styles.tableTd}>
                1980年代にモトローラ社の技術者ビル・スミスによって開発された、100万回の作業を実施しても不良品の発生率を3.4回に抑えるという品質管理手法を何というでしょう？
              </Td>
              <Td className={styles.tableTd}>シックス・シグマ</Td>
            </Tr>
            <Tr>
              <Td className={styles.tableTd}>
              イエス・キリストが礫にされた時にその釘を引き抜こうとしたという伝承があり、その嘴の形状は物事が食い違って思うようにならないことの喩えに使われる鳥は何でしょう？
              </Td>
              <Td className={styles.tableTd}>イスカ
              </Td>
            </Tr>
            <Tr>
              <Td className={styles.tableTd}>
              ウェブブラウザ「Google Chrome」のアイコンにおいて、真ん中の丸の色は何色でしょう？
              </Td>
              <Td className={styles.tableTd}>青</Td>
            </Tr>
            <Tr>
              <Td className={styles.tableTd}>
              クマリ寺が位置することから「カニヤー・クマリ」とも呼ばれ、ベンガル湾、アラビア海、インド洋を一望することができる、インド最南端の岬は何でしょう？
              </Td>
              <Td className={styles.tableTd}>コモリン岬
              </Td>
            </Tr>
          </Tbody>
        </NativeTable>
      </TableContainer>

      <h1 className={styles.SubTitleText}>各ラウンドのルール</h1>
      <div className={styles.sliderContainer}>
        <SimpleCarousel 
          slides={slides}
          autoPlayInterval={1000000} // 自動再生の間隔（ミリ秒）
          showArrows={true}      // 矢印ナビゲーションの表示
          showIndicators={true}  // インジケーターの表示
        />
      </div>
    </div>
  );
}