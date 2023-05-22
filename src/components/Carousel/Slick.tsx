import { useMemo, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideWrapper = styled.section`
  position: relative;
`;

interface sliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
}

export default function Slick({
  children,
  className,
  //autoplay = true,
  speed = 300,
  loop = true,
}: sliderProps) {
  const [slider, setSlider] = useState<Slider | null>(null);

  const nextSlide = () => {
    if (slider) {
      slider.slickNext();
    }
  };

  const prevSlide = () => {
    if (slider) {
      slider.slickPrev();
    }
  };

  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      infinite: loop,
      speed: speed,
      slidesToShow: 1,
      // autoplay: Boolean(autoplay),
      // autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
      arrows: true, // 화살표 버튼 표시
      prevArrow: (
        <DivPre onClick={prevSlide}>
          <ArrowImg
            src="/images/postingDetail/leftArrows.png"
            alt="prevArrow"
          />
        </DivPre>
      ), // 이전 버튼 클릭 시
      nextArrow: (
        <Div onClick={nextSlide}>
          <ArrowImg
            src="/images/postingDetail/rightArrows.png"
            alt="nextArrow"
          />
        </Div>
      ), // 다음 버튼 클릭 시
    }),
    [loop, speed, prevSlide, nextSlide]
  );
  return (
    <SlideWrapper className={className}>
      <StyledSlider ref={slider => setSlider(slider)} {...settings}>
        {children}
      </StyledSlider>
    </SlideWrapper>
  );
}

const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    //슬라이더  컨텐츠
    cursor: pointer;
  }
  .slick-dots {
    // dots 스타일
    // 원하는 스타일 추가
    bottom: 5px;
  }
`;
const Div = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 16px;
  z-index: 99;
  text-align: right;
  line-height: 30px;
`;
const ArrowImg = styled.img`
  width: 30px;
`;
const DivPre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
`;
