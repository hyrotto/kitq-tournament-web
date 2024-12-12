'use client';

import "./globals.css";
import { useState, useEffect } from "react";
// UIコンポーネント
import {UIProvider, 
  Box,
  Link,
  Button,
  ButtonGroup,
  Image,
  NativeImage,
  Menu,
  MenuButton, 
  MenuItem, 
  MenuList
} from "@yamada-ui/react"
// ナビゲーションパスを表示に関するコンポーネント
import {
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink,
  BreadcrumbEllipsis
} from "@yamada-ui/react"

// ルートコンポーネント
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // clientでの初期レンダリングを実行するために、初期値にnullを設定
  const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(null); 

  // 画面のリサイズに応じて状態を更新
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 650);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isSmallScreen === null) {
    return null; 
  }

  return (
    <html lang="ja">
      <body>
        <UIProvider>
          <header>
            <Link href="/">
              <NativeImage 
                src="/大会ロゴ_モック.png" 
                w = "40" 
                alt=""
                p = "2"
              />
            </Link>
            {!isSmallScreen ? (
                <Box bg = "orange">
                  <Link href="/outline">大会概要</Link>
                  <Link href="/entry">エントリー</Link>
                  <Link href="/about_us">キャラクター紹介</Link>
                  <Link href="/info">お知らせ</Link>
                </Box>
              ) : (
                <Box className="LinkBox">
                  <Breadcrumb>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/" className="navLink">
                        Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/doc-entry" className="navLink">
                        企画書・エントリー
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <Menu>
                        <MenuButton>
                          <BreadcrumbEllipsis />
                        </MenuButton>
                        <MenuList>
                          <MenuItem as="a" href="/sche-info" className="navLink">
                            スケジュール・お知らせ
                          </MenuItem>
                          <MenuItem as="a" href="/rule-example" className="navLink">
                            例題・ルール詳細説明
                          </MenuItem>
                          <MenuItem as="a" href="/about" className="navLink">
                            サークル・キャラクター紹介
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </BreadcrumbItem>
                  </Breadcrumb>
                </Box>
              )}
          </header>
          {children}
          <footer>
              <Box className="footer" p="4" bg="gray.200" textAlign="center">
                  <p>九州工業大学 クイズサークル Q-thch</p>
              </Box>
          </footer>
        </UIProvider>
      </body>
    </html>
  );
}
