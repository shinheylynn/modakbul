import styled from 'styled-components';

export const MapContainer = styled.div`
  border: 1px solid black;
  margin-top: 30px;
  border: 1px solid #cccccc;
  position: relative;
`;

export const MapLegendWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 50px;
  top: -10px;
  margin-left: 10px;
`;

export const MapLegend = styled.legend`
  color: gray;
  font-size: large;
`;

export const InfoWrapper = styled.div`
  padding: 17px;
`;

export const MapInfo = styled.div`
  margin-bottom: 7px;
`;

export const MapSubInfo = styled.div`
  font-size: small;
  color: gray;
`;

export const Map = styled.div`
  width: 80vw;
  height: 400px;
`;
