import CoursesItem from '../images/course-item.png';
import BirdImg from '../images/course-thumb-bird.jpg';
import KoiImg from '../images/course-thumb-koi.jpg';
import BonsaiImg from '../images/course-thumb-bonsai.jpg';
import ShrineImg from '../images/course-thumb-shrine.jpg';

import BirdImg500 from '../images/course-bird500.jpg';
import KoiImg500 from '../images/course-koi500.jpg';
import BonsaiImg500 from '../images/course-bonsai500.jpg';
import ShrineImg500 from '../images/course-shrine500.jpg';

export const getCourseSquareImg = badgeTitle => {
  let imgSrc = CoursesItem;
  switch (badgeTitle) {
    case 'N5 Level I':
      imgSrc = BirdImg500;
      break;
    case 'N4 Level II':
      imgSrc = KoiImg500;
      break;
    case 'Nihongo I':
      imgSrc = BonsaiImg500;
      break;
    case 'Nihongo II':
      imgSrc = ShrineImg500;
      break;

    default:
      imgSrc = CoursesItem;
      break;
  }
  return imgSrc;
};

const getCourseImg = badgeTitle => {
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
