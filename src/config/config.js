const BASE_URl = 'http://192.168.0.2:3003';

export const API = {
  LOGIN: `${BASE_URl}/users/googleLogin`,
  MYPAGE: `${BASE_URl}/users/myPage`,
  POSTING_DETAIL: `${BASE_URl}/feeds`,
  POSTING_COMMENTS: `${BASE_URl}/comments`,
  MAIN: `${BASE_URl}/main`,
  POSTING: `${BASE_URl}/feeds`,
  GET_POSTING_COMMENTS: `${BASE_URl}/feeds/comment`,
  LIKE_POSTING: `${BASE_URl}/likes/post`,
  SCRAP_POSTING: `${BASE_URl}/scraps/post`,
};

export default API;
