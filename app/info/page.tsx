import React from "react";
import styles from "./page.module.css";
import {
  TableContainer,
  NativeTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@yamada-ui/react"

const newsData = [
  {
    date: "25.3.05",
    link: "/outline",
    title: "大会ありがとうございました!!",
  },
  {
    date: "25.1.02",
    link: "/outline",
    title: "エントリーを開始しました",
  },
  {
    date: "24.12.25",
    link: "/outline",
    title: "クリスマスキャンペーン開催",
  },
    {
      date: "24.10.15",
      link: "/outline",
      title: "新製品発表会のご案内",
    },
];

export default async function Entry() {
  return (
    <div className={styles.container}>
      <h1 className={styles.TitleText}>大会概要</h1>
      <TableContainer className={styles.InfomationContainer}>
        <NativeTable
          className={styles.InfomationTable}
          variant="striped"
          size="lg"
        >
          <Thead>
            <Tr>
              <Th>DATE</Th>
              <Th>NEWS</Th>
            </Tr>
          </Thead>

          <Tbody>
            {newsData.map((news, index) => (
              <Tr key={index}>
                <Td className={styles.newsDate}>
                  <a href={news.link} className={styles.tableNewsItem}>
                    <time>{news.date}</time>
                  </a>
                </Td>
                <Td>
                  <a href={news.link} className={styles.tableNewsItem}>{news.title}</a>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </NativeTable>
      </TableContainer>
    </div>
  );
}