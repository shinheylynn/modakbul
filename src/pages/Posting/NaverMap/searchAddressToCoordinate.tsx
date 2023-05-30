export default function searchAddressToCoordinate(
  address: string,
  nmap: naver.maps.Map
) {
  naver.maps.Service.geocode(
    {
      query: address,
    },
    function (
      status: naver.maps.Service.Status,
      response: naver.maps.Service.GeocodeResponse
    ) {
      if (status === naver.maps.Service.Status.ERROR) {
        return alert('naver.maps.Service.Status - Something went wrong!');
      }
      if (response.v2.meta.totalCount === 0) {
        return alert('건물명까지 입력해주세요!');
      }

      const item = response.v2.addresses[0];
      const point = new naver.maps.Point(Number(item.x), Number(item.y));
      const address = item.roadAddress ? item.roadAddress : item.jibunAddress;

      const infoWindow = new naver.maps.InfoWindow({
        content: [
          '<div style="padding:10px;"><h4>' + address + '</h4></div>',
        ].join(''),
        borderWidth: 0,
      });

      nmap.setCenter(point);
      infoWindow.open(nmap, point);
    }
  );
}
