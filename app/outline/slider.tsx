"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';

export const Slider = () => {
  return (
    <>
      <Splide
        aria-label="ルール別解説イラスト"
        options={{
          autoplay: false,
          perPage: 1,
          rewind: true,
          pagination: false
        }}
      >
        <SplideSlide>
          <img className="slide-img" src="https://www.pakutaso.com/shared/img/thumb/shikun20220402_114719-2_TP_V.jpg" alt="かわいい猫の画像 part1" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="https://www.pakutaso.com/shared/img/thumb/shikun20220402_122123_TP_V.jpg" alt="かわいい猫の画像 part2" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="https://www.pakutaso.com/shared/img/thumb/sikun_20220402-180657-2_TP_V.jpg" alt="かわいい猫の画像 part3" />
        </SplideSlide>
      </Splide>

      <style jsx>{`
        .slide-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};