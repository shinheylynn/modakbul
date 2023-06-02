import { useEffect, useRef } from 'react';
import * as S from './NaverMap.styles';

interface Props {
  setMarkerPosition: React.Dispatch<
    React.SetStateAction<{ x: number; y: number }>
  >;
}

export default function NaverMap({ setMarkerPosition }: Props) {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { naver } = window;
    if (!naver) return;

    // 현재 위치 가져오기
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const currentPosition = new naver.maps.LatLng(latitude, longitude);

        const mapOptions = {
          center: currentPosition, // 현재 위치를 중심으로 설정
          zoom: 17,
          zoomControl: true,
          zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT,
          },
        };

        const map = new naver.maps.Map(mapElement.current!, mapOptions);
        let marker: naver.maps.Marker | null = null;

        // 클릭 이벤트 리스너 추가
        naver.maps.Event.addListener(map, 'click', e => {
          const clickedLocation = e.coord;

          // 기존 마커가 존재하는 경우 위치를 업데이트
          if (marker) {
            marker.setPosition(clickedLocation);
          } else {
            // 클릭된 위치에 새로운 마커 생성
            marker = new naver.maps.Marker({
              position: clickedLocation,
              map: map,
            });
          }

          setMarkerPosition(clickedLocation);
        });
      },
      error => {
        console.error(error);
      }
    );
  }, []);

  return <S.Map ref={mapElement} />;
}
