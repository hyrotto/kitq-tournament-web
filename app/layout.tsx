'use client';

import "./globals.css";
import { useState, useEffect } from "react";
// UIコンポーネント
import {UIProvider, 
  Box,
  Image,
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
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // コンポーネントが描画されるときに実行される処理
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 650); // 600px以下で切り替え
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="ja">
      <body>
        <UIProvider>
          <nav>
            <Box id = "logo">
              <Image 
                src="/cute_cat.png" 
                w = "8"
                h = "8" 
                alt=""
                p = "2"
              />
              KITQ杯(仮)
            </Box>
            {!isSmallScreen ? (
                <Breadcrumb className="LinkBox">
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
                    <BreadcrumbLink  href="/sche-info" className="navLink">
                      スケジュール・お知らせ
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/rule-example" className="navLink">
                      例題・ルール詳細説明
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/about" className="navLink">
                      サークル・キャラクター紹介
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
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
          </nav>
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
