import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Mypage from './pages/Mypage/Mypage';
import Posting from './pages/Posting/Posting';
import PostingDetail from './pages/PostingDetail/PostingDetail';
import KakaoRedirect from './pages/Login/KakaoRedirect';
import Container from './components/Container/Container';
import MainMap from './pages/Main/MainMap/MainMap';
import About from './pages/Main/About/About';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Main />} />
          <Route path="/map" element={<MainMap />} />
          <Route path="/about" element={<About />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/posting" element={<Posting />} />
          <Route path="/postingdetail/:id" element={<PostingDetail />} />
        </Route>
        <Route path="/auth/kakao/callback" element={<KakaoRedirect />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
