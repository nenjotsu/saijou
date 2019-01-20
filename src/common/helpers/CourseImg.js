import CoursesItem from '../images/course-item.png';
import BirdImg from '../images/course-thumb-bird.png';
import KoiImg from '../images/course-thumb-koi.png';
import BonsaiImg from '../images/course-thumb-bonsai.png';
import ShrineImg from '../images/course-thumb-shrine.png';

const getCourseImg = badgeTitle => {
  console.log('badgeTitle', badgeTitle);
  let imgSrc = CoursesItem;
  switch (badgeTitle) {
    case 'N5 Level I':
      imgSrc = BirdImg;
      break;
    case 'N4 Level II':
      imgSrc = KoiImg;
      break;
    case 'Nihongo I':
      imgSrc = BonsaiImg;
      break;
    case 'Nihongo II':
      imgSrc = ShrineImg;
      break;

    default:
      imgSrc = CoursesItem;
      break;
  }
  return imgSrc;
};

export default getCourseImg;
