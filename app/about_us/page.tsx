import {
  UIProvider,
  NativeImage
} from "@yamada-ui/react"

export default async function AboutUs() {
    return (
      <div>
        <h1>キャラクター紹介</h1>
        <NativeImage
          src="/cute_cat.png" 
          h = "300"
        />
        <p>ジャック君 (17)</p>
      </div>
    );
  }
  