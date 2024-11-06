import Image from "next/image";
import "./about.css";

export default async function Home() {
    return (
      <>
        <h1>サークル・キャラクター紹介</h1>
        <div id="cute_cat">
          <Image 
            src="/cute_cat.png" 
            width={200} 
            height={400} 
            alt=""
          />
          <h4>九工大クイ研マスコット</h4>
          <h3>ジャック君</h3>
        </div>
      </>
    );
  }
  