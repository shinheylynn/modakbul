const BASE_URl = 'http://192.168.0.251:3003';

export const API = {
  LOGIN: `${BASE_URl}/users/googleLogin`,
  MYPAGE: `${BASE_URl}/users/myPage`,
  POSTING_DETAIL: `${BASE_URl}/feeds`,
  POSTING_COMMENTS: `${BASE_URl}/comments`,
};

export default API;
