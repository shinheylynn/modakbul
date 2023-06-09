import styled from 'styled-components';

export const MyPosting = styled.div`
  width: 101%;
  height: 375px;
  margin-bottom: 20px;
  overflow: auto;
  border: 1px solid #847a7a58;
  border-radius: 4px;
  padding: 10px;
`;

export const EmptyWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 61px;
  cursor: pointer;
`;

export const EmptyList = styled.img`
  width: 30%;
  margin-bottom: 20px;
`;

export const AddPosting = styled.span`
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  position: absolute;
  bottom: 45%;
  right: 44%;
  color: black;
  white-space: pre-wrap;
`;

export const ThumbnailWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

export const Thumbnail = styled.img`
  width: 200px;
  height: 168px;
  border-radius: 25px;
  padding: 10px;
`;
