const axios = require('axios');
import getRandomIndex from '../utils/random-index';

// 3일 전 날짜를 가져와서 yyyy-mm-dd 포맷으로 변환
const aWeekAgo = () =>
  new Date(Date.now() - 86400000 * 7).toISOString().slice(0, 10);

// Rover Images 가져오기
const getRoverImages = async () => {
  const { data } = await axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${aWeekAgo()}&api_key=cUgR2SIJprvsJ1TzLiL8jobMJxMOhCj7J1JJHIsM`
  );

  return data;
};

// Rover Images 데이터에서 10개의 랜덤 이미지를 추출하여 배열로 반환
const makePicturesArray = async () => {
  const { photos } = await getRoverImages();

  let picturesArray = [];

  for (let i = 0; i < 10; i++) {
    picturesArray.push(photos[getRandomIndex(photos.length)]);
  }

  return picturesArray.map((picture) => ({
    id: picture.id,
    cameraName: picture.camera.name,
    roverName: picture.rover.name,
    earthDate: picture.earth_date,
    image: picture.img_src,
  }));
};

export default makePicturesArray;
