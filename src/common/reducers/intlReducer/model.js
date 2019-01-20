const enLang = {
  locale: 'en-US',
  messages: {
    activeMenu: 'home',
    menuList: [
      {
        title: 'Home',
        to: '/',
      },
      {
        title: 'Courses',
        to: '/courses',
      },
      // {
      //   title: 'Schedule',
      //   to: '/schedule',
      // },
      {
        title: 'About',
        to: '/about',
      },
      // {
      //   title: 'News',
      //   to: '/news',
      // },
      {
        title: 'Contact',
        to: '/contact',
      },
    ],
    footerServicesList: [
      {
        title: 'JLPT N5 - Level I',
        to: '/courses/n5',
      },
      {
        title: 'JLPT N4 - Level II',
        to: '/courses/n4',
      },
      {
        title: 'Business Nihongo I',
        to: '/courses/nihongo1',
      },
      {
        title: 'Business Nihongo II',
        to: '/courses/nihongo2',
      },
      {
        title: 'Translation',
        to: '/services/translation',
      },
      {
        title: 'Interpretation',
        to: '/services/interpretation',
      },
      {
        title: 'JLPT & JTest Review',
        to: '/services/jlpt-review',
      },
      {
        title: 'Career Guidance',
        to: '/services/career-guidance',
      },
    ],
    footerCompanyList: [
      {
        title: 'Schedule',
        to: '/schedule',
      },
      {
        title: 'About',
        to: '/about',
      },
      {
        title: 'Blog',
        to: '/blog',
      },
      {
        title: 'News',
        to: '/news',
      },
      {
        title: 'Contact',
        to: '/contact',
      },
    ],
    footerSupportList: [
      {
        title: 'Support Center',
        to: '/support-center',
      },
    ],
    jumbotron: {
      tagline: 'Language CONNECTS People',
      enrollLabel: 'Enroll Now',
    },
    courses: [
      {
        title: 'JLPT N5 - Level I',
        subTitle: 'Japanese Language & Culture',
        badgeTitle: 'N5 Level I',
        tag: 'Tesda Accredited',
        hours: '320 hours',
        link: '',
        content:
          'This course suits students who wish to develop the basics of Japanese Language, such as Katakana, Hiragana & list of Kanji in preparation of JLPT N5. You will able to learn about 100 kanji and about 800 vocabulary words. This is also is part of japanese language & culture courses',
      },
      {
        title: 'JLPT N4 - Level II',
        subTitle: 'Japanese Language & Culture',
        badgeTitle: 'N4 Level II',
        tag: 'Tesda Accredited',
        hours: '300 hours',
        link: '',
        content: `This course suits students who wish to develop the basics of Japanese Language, such as Katakana, Hiragana & list of Kanji in preparation of JLPT N4.
          You will able to learn about 300 kanji and about 1,500 vocabulary words. This is also is part of japanese language & culture courses`,
      },
      {
        title: 'Business Nihongo I',
        subTitle: 'Japanese Work Ethics & Culture',
        badgeTitle: 'Nihongo I',
        tag: 'Certificate Courses',
        hours: '24 hours',
        link: '',
        content:
          'This course suits students who wish to learn the Japanese Language work ethics & culture. This course contains intensive program for business nihongo I',
      },
      {
        title: 'Business Nihongo II',
        subTitle: 'Japanese Work Ethics & Culture',
        badgeTitle: 'Nihongo II',
        tag: 'Certificate Courses',
        hours: '24 hours',
        content:
          'This course suits students who wish to learn the Japanese Language work ethics & culture. This course contains intensive program for business nihongo II',
      },
    ],
    photoGallery: ['1', '2', '3', '4'],
    schedules: [
      {
        title: 'Morning Class',
        subTitle: 'Japanese Language & Culture',
        badgeTitle: 'JLPT N5 - Level I',
        hours: '8am - 3pm',
        link: '',
      },
      {
        title: 'Afternoon Class',
        subTitle: 'Japanese Language & Culture',
        badgeTitle: 'JLPT N5 - Level I',
        hours: '4pm - 9pm',
        link: '',
      },
      {
        title: 'Saturday Class',
        subTitle: 'Japanese Language & Culture',
        badgeTitle: 'N5, N4, Business Nihongo',
        hours: '8am - 5pm',
        link: '',
      },
    ],
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
  intl_ja: {
    locale: 'ja',
    messages: {
      menuList: [
        {
          title: 'ホーム',
          to: '/',
        },
        {
          title: '接触ム',
          to: '/courses',
        },
        {
          title: 'ホームム',
          to: '/schedule',
        },
        {
          title: '約',
          to: '/about',
        },
        {
          title: 'ムホーム',
          to: '/news',
        },
        {
          title: '接触',
          to: '/contact',
        },
      ],
      footerServicesList: [
        {
          title: 'Home',
          to: '/',
        },
        {
          title: 'Courses',
          to: '/courses',
        },
        {
          title: 'Schedule',
          to: '/schedule',
        },
        {
          title: 'About',
          to: '/about',
        },
        {
          title: 'News',
          to: '/news',
        },
        {
          title: 'Contact',
          to: '/contact',
        },
      ],
      footerCompanyList: [
        {
          title: 'Home',
          to: '/',
        },
        {
          title: 'Courses',
          to: '/courses',
        },
        {
          title: 'Schedule',
          to: '/schedule',
        },
        {
          title: 'About',
          to: '/about',
        },
        {
          title: 'News',
          to: '/news',
        },
        {
          title: 'Contact',
          to: '/contact',
        },
      ],
      footerSupportList: [
        {
          title: 'Home',
          to: '/',
        },
        {
          title: 'Courses',
          to: '/courses',
        },
        {
          title: 'Schedule',
          to: '/schedule',
        },
        {
          title: 'About',
          to: '/about',
        },
        {
          title: 'News',
          to: '/news',
        },
        {
          title: 'Contact',
          to: '/contact',
        },
      ],
      jumbotron: {
        tagline:
          '新しい言語は新しい人生です。サイエンスインターナショナルトレーニングセンターで日本語を学ぶ',
        enrollLabel: '今すぐ登録する',
      },
      courses: [
        {
          title: 'JLPT N5 - Level I',
          subTitle: 'Japanese Language & Culture',
          badgeTitle: 'N5 Level I',
          tag: 'Tesda Accredited',
          hours: '320 hours',
          link: '',
        },
        {
          title: 'JLPT N4 - Level II',
          subTitle: 'Japanese Language & Culture',
          badgeTitle: 'N4 Level II',
          tag: 'Tesda Accredited',
          hours: '300 hours',
          link: '',
        },
        {
          title: 'Business Nihongo I',
          subTitle: 'Japanese Work Ethics & Culture',
          badgeTitle: 'Nihongo I',
          tag: 'Certificate Courses',
          hours: '24 hours',
          link: '',
        },
        {
          title: 'Business Nihongo II',
          subTitle: 'Japanese Work Ethics & Culture',
          badgeTitle: 'Nihongo II',
          tag: 'Certificate Courses',
          hours: '24 hours',
          link: '',
        },
      ],
      schedules: [
        {
          title: 'Morning Class',
          subTitle: 'Japanese Language & Culture',
          badgeTitle: 'JLPT N5 - Level I',
          hours: '8am - 3pm',
          link: '',
        },
        {
          title: 'Afternoon Class',
          subTitle: 'Japanese Language & Culture',
          badgeTitle: 'JLPT N5 - Level I',
          hours: '4pm - 9pm',
          link: '',
        },
        {
          title: 'Saturday Class',
          subTitle: 'Japanese Language & Culture',
          badgeTitle: 'N5, N4, Business Nihongo',
          hours: '8am - 5pm',
          link: '',
        },
      ],
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
  },
};
