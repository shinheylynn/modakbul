import { useEffect, useRef } from 'react';
import * as S from './Map.style';

export default function Map() {
  const mapElement = useRef(null);
  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;
    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다. // 백엔드에서 경도를 받아서 표시
    const location = new naver.maps.LatLng(37.3595704, 127.105399);
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);
  return <S.Map ref={mapElement} />;
}
