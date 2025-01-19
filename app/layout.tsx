import "./globals.css";
import { TwitterIcon } from "@yamada-ui/lucide";
// UIコンポーネント
import {
  UIProvider,
  Box,
  Link,
  NativeImage,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  ChevronIcon,
} from "@yamada-ui/react";

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
            <Link className="header_logo" href="/">
              <NativeImage
                className="header_logo_image"
                src="/大会ロゴ_モック.png"
                w="40"
                alt=""
                p="2"
              />
            </Link>
            <Box className="nav_button">
              <Link href="/outline">大会概要</Link>
              <Link href="/entry">エントリー</Link>
              <Link href="/about_us">キャラクター紹介</Link>
              <Link href="/info">お知らせ</Link>
            </Box>
            <span className="nav_menu">
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronIcon fontSize="xl" />}
                >
                  メニュー
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link href="/outline">大会概要</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/entry">エントリー</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/about_us">キャラクター紹介</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/info">お知らせ</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </span>
          </header>
          {children}
          <footer>
            <Box className="footer" p="4" bg="gray.200" textAlign="center">
              <p>九州工業大学 クイズサークル Q-thch</p>
              <div className="icon">
                <Link href="https://x.com/KingQueenCup">
                  <img src="/TwitterIcon.png" />
                </Link>
              </div>
            </Box>
          </footer>
        </UIProvider>
      </body>
    </html>
  );
}
