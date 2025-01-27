import React from 'react';
import styles from '@/app/info/page.module.css';
import {
    TableContainer,
    NativeTable,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from "@yamada-ui/react"

type News = {
    date: string;
    link: string;
    title: string;
};

type Props = {
    newsData: News[];
};


const NewsList: React.FC<Props> = ({newsData}) => {
  return (
    <div className={styles.InfomationContainer}>
        <TableContainer className={styles.InfomationContainer}>
        <NativeTable
          className={styles.InfomationTable}
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
};


export default NewsList;