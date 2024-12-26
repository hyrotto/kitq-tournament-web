'use client';

import "./globals.css";
// UIコンポーネント
import {
  UIProvider, 
  Box,
  Link,
  NativeImage,
} from "@yamada-ui/react"

// ルートコンポーネント
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <UIProvider>
          <header>
            <Link  className="header_logo" href="/" >
              <NativeImage 
                src="/大会ロゴ_モック.png" 
                w = "40" 
                alt=""
                p = "2"
              />
            </Link>
            <Box className="nav_button">
              <Link href="/outline">大会概要</Link>
              <Link href="/entry">エントリー</Link>
              <Link href="/about_us">キャラクター紹介</Link>
              <Link href="/info">お知らせ</Link>
            </Box>
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
