import styled from 'styled-components';

export const MyPosting = styled.div`
  width: 120%;
  height: 27.5%;
  margin-bottom: 20px;
  //width: 400px;
  overflow: auto;
  border: 1px solid #847a7a58; //** 레이아웃 작업 완료시 삭제 **/
  border-radius: 4px;
  padding: 10px;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const EmptyWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const EmptyList = styled.img`
  width: 25%;
  margin-bottom: 20px;
`;

export const AddPosting = styled.span`
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  position: absolute;
  bottom: 45%;
  right: 42%;
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
  /* border: 1px solid #b1b1b159; */
  border-radius: 10px;
  padding: 10px;
`;
