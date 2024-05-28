import React from "react";
import Slider from "react-slick";


export default function SimpleSlider() {
  var settings = {
    dots: true, // 점 (페이지 번호) 표시
    infinite: true, // 무한 루프
    speed: 500, // 슬라이드 전환 속도
    slidesToShow: 3, // 보여지는 슬라이드 개수
    slidesToScroll: 1, // 스크롤 시 이동하는 슬라이드 개수
    initialSlide: 0, // 초기 슬라이드 설정
    autoplay: true, // 자동 재생
    autoplaySpeed: 2000, // 자동 재생 속도
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}