import makePicturesArray from '../axios/pictures';

// DOM 요소
const $image = document.querySelector('.pictures__image');
const $cameraName = document.querySelector('.pictures__info__camera-name');
const $earthDate = document.querySelector('.pictures__info__earth-date');
const $roverName = document.querySelector('.pictures__info__rover-name');
const $id = document.querySelector('.pictures__info__id');
const $picturesLeftBtn = document.querySelector('.pictures__btn-left');
const $picturesRightBtn = document.querySelector('.pictures__btn-right');

// 랜덤 추출 배열을 유지하기 위해 클로저 활용
const closure = async () => {
  const picturesArray = await makePicturesArray();

  return (index) => {
    const { id, cameraName, roverName, earthDate, image } = picturesArray[
      index
    ];

    $image.style.backgroundImage = `url(${image})`;
    $cameraName.textContent = cameraName;
    $roverName.textContent = roverName;
    $earthDate.textContent = earthDate;
    $id.textContent = id;
  };
};

// 클로저 함수가 반환한 값으로 DOM 랜더링하는 함수
const renderPictures = async () => {
  const render = await closure();

  // 버튼 누르기 전 초기 인덱스 설정
  let index = 0;
  // 최초 1회 랜더링
  render(index);

  // 버튼 클릭 이벤트
  $picturesLeftBtn.onclick = () => {
    index--;
    if (index < 0) index = 9;
    render(index);
  };
  $picturesRightBtn.onclick = () => {
    index++;
    if (index > 9) index = 0;
    render(index);
  };
};

export default renderPictures;
