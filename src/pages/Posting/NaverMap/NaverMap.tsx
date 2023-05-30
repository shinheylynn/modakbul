import React, { useEffect, useState, useRef } from 'react';
import { Coord } from '../../../lib/types';
import * as S from './NaverMap.styles';

export default function NaverMap() {
  const mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 15,
    mapTypeControl: true,
  };

  const map = new naver.maps.Map('map', mapOptions);

  return <S.MapContainer id="map" />;
}
