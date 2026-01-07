"use client";

import { motion } from "framer-motion";
import { forwardRef, useEffect, useState } from "react";

export const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  const [shadowOffset, setShadowOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight || 1;
      const scrollY = window.scrollY;

      // 현재 스크롤 위치를 "viewportHeight의 60%" 기준으로 0 ~ 1 사이 값으로 정규화
      // 화면 높이의 60%를 스크롤할 때마다 그림자가 한 바퀴(360도) 회전하도록 설계
      const cycleHeight = viewportHeight * 0.6 || 1;
      const progress = (scrollY % cycleHeight) / cycleHeight;
      const angle = progress * Math.PI * 2; // 0 ~ 2π

      // 1번 빛(주 그림자): 오른쪽 아래 방향을 도는 단일 궤적
      const amplitudeX1 = 80; // 가로 이동 범위(px)
      const amplitudeY1 = 55; // 세로 추가 이동 범위(px)
      const baseYOffset1 = 20; // 기본적으로 아래쪽으로 내리는 양(px)

      const x1 = Math.sin(angle) * amplitudeX1;
      const y1 = baseYOffset1 + Math.cos(angle) * amplitudeY1;

      setShadowOffset({ x: x1, y: y1 });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="min-h-[70vh] flex items-center justify-center pt-12"
      >
        <div
          className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-foreground font-bitcount text-center"
          style={{
            // 단일 궤적을 가진 그림자
            textShadow: `${shadowOffset.x}px ${shadowOffset.y}px 24px rgba(0, 0, 0, 0.35)`,
          }}
        >
          Vibe
          <br />
          Coding
          <br />
          Club
        </div>
      </motion.section>
      <motion.section>
        <div className="my-20 text-center">
          AI는 삶에 어떤 변화를 가져올까요?
          <br />
          새로운 기술을 함께 즐겁게 경험하고 삶에 적용하고 있습니다.
        </div>
      </motion.section>
    </div>
  );
});

HeroSection.displayName = "HeroSection";
