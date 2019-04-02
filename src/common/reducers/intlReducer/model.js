import menuList from './data/menuList';
import footerServicesList from './data/footerServicesList';
import footerCompanyList from './data/footerCompanyList';
import footerSupportList from './data/footerSupportList';
import courses from './data/courses';
import schedules from './data/schedules';

const enLang = {
  locale: 'en-US',
  messages: {
    activeMenu: 'home',
    menuList,
    footerServicesList,
    footerCompanyList,
    footerSupportList,
    jumbotron: {
      tagline: 'Language CONNECTS People',
      enrollLabel: 'Enroll Now',
    },
    courses,
    photoGallery: ['1', '2', '3', '4'],
    schedules,
    featuredSensei: {
      tagline:
        'Students don’t care how much you know until they know how much you care.',
      name: 'Reina Sensei',
      content:
        'Every Kanji has a story, and from there step by step the students will learn not just the Japanese language but also the culture',
      subContent:
        'Come and visit us at Saijou International Japanese Training Center, see you there.',
      seeMore: 'see more...',
      link: '',
    },
  },
};

export default {
  default: {
    ...enLang,
  },
  [`intl_${'en-US'}`]: {
    ...enLang,
  },
};
