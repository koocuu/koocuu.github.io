export type Lang = 'en' | 'zh';

export const languages: Lang[] = ['en', 'zh'];

export function normalizeLang(value: string | undefined): Lang {
  return value === 'zh' ? 'zh' : 'en';
}

export function alternateLang(lang: Lang): Lang {
  return lang === 'zh' ? 'en' : 'zh';
}

export const copy = {
  en: {
    nav: {
      blog: 'Blog',
      about: 'About',
      contact: 'Contact',
      switch: '中文',
    },
    home: {
      title: 'Cu',
      eyebrow: 'Full-stack / AI Engineering / Writing',
      headline: 'Building AI-aware products from Android roots to full-stack delivery.',
      note: 'A personal card for future clients, students, friends, and anyone curious about how I think about software, AI, and life.',
      readBlog: 'Read Blog',
      viewProfile: 'View Profile',
      posts: 'posts',
      categories: 'categories',
      companies: 'companies',
      writingEyebrow: 'Writing',
      writingTitle: 'Recent notes, not the whole archive.',
      writingIntro:
        'Technical signal, personal stories, travel journals, AI observations, and the occasional hard lesson. Less polished resume, more living proof of taste.',
      allPosts: 'All posts',
      next: 'Next',
      nextTitle: 'Want the fuller picture?',
      about: 'About',
      contact: 'Contact',
    },
    about: {
      title: 'About',
      description: 'About Cu, engineering focus, and work experience.',
      eyebrow: 'About',
      heading: 'From Android craft to full-stack and AI-native products.',
      profileEyebrow: 'Profile',
      profileTitle: 'A developer profile for building, teaching, consulting, and experimenting in public.',
      summary:
        'I am moving from strong client-side engineering toward full-stack and AI-native product building: mobile apps, web experiences, lightweight backend systems, LLM workflows, and ideas that can become real tools.',
      experienceEyebrow: 'Experience',
      experienceTitle: 'Engineering experience on products with tens of millions of DAU.',
    },
    blog: {
      title: 'Blog',
      description: "Cu's notes, essays, and travel writing.",
      eyebrow: 'Blog',
      heading: 'Notes from work, travel, games, AI, and the strange business of being alive.',
      back: 'Back to blog',
    },
    contact: {
      title: 'Contact',
      description: 'Contact Cu.',
      eyebrow: 'Contact',
      heading: 'Say hi, trade notes, or send a good song.',
      lede:
        'I am usually happy to talk about Android, full-stack building, AI applications, travel plans, or whatever thought refuses to leave your head.',
    },
    principles: [
      {
        title: 'Full-stack builder',
        description:
          'Android is my base, but the goal is complete product delivery: client, web, backend, deployment, analytics, and iteration.',
      },
      {
        title: 'AI engineering',
        description:
          'I treat AI as product infrastructure: prompt design, agent workflows, RAG, automation, and practical tools people can actually use.',
      },
      {
        title: 'Public notebook',
        description:
          'This blog is my proof of work: technical taste, life observations, lessons learned, and a place friends can quietly inspect my brain.',
      },
    ],
    profile: {
      skills: ['Full-stack', 'AI Engineering', 'Android', 'Android TV', 'Compose', 'Cross-end', 'LLM Apps', 'Performance', 'Writing'],
    },
    experiences: [
      {
        company: 'iQIYI',
        title: 'Software Engineer',
        time: '2025.5 - Present',
        logo: '/images/iqiyi.png',
        link: 'https://app.iqiyi.com/tv/player/',
        description:
          'Android TV and cross-end development for overseas video products, while exploring Compose adoption, AI application development, and higher-leverage engineering workflows.',
        tags: ['Android TV', 'Cross-end', 'Compose', 'AI Apps'],
      },
      {
        company: 'Meituan',
        title: 'Software Engineer',
        time: '2022.5 - 2025.4',
        logo: '/images/meituanIcon.png',
        link: 'https://www.dianping.com/',
        description:
          'Android and cross-platform development for Dianping, covering product iteration, performance work, and scalable client-side engineering.',
        tags: ['Android', 'Performance', 'Cross-platform'],
      },
    ],
  },
  zh: {
    nav: {
      blog: '博客',
      about: '关于',
      contact: '联系',
      switch: 'EN',
    },
    home: {
      title: 'Cu',
      eyebrow: '全栈 / AI 工程 / 写作',
      headline: '从 Android 出发，构建面向 AI 时代的全栈产品。',
      note: '这是我的个人名片：给未来客户、学员、朋友，也给那些好奇我如何看待软件、AI 和生活的人。',
      readBlog: '读博客',
      viewProfile: '看介绍',
      posts: '篇文章',
      categories: '个分类',
      companies: '段经历',
      writingEyebrow: '写作',
      writingTitle: '最近写了这些',
      writingIntro: '这里放一些最近的记录：技术想法、生活片段、旅行见闻、AI 观察，还有踩坑之后的复盘。',
      allPosts: '全部文章',
      next: '继续看',
      nextTitle: '想更完整地了解我？',
      about: '关于',
      contact: '联系',
    },
    about: {
      title: '关于',
      description: '关于 Cu、工程方向和工作经历。',
      eyebrow: '关于',
      heading: '从 Android 工程能力，走向全栈和 AI 原生产品。',
      profileEyebrow: '个人定位',
      profileTitle: '一个面向构建、教学、咨询和公开实验的开发者名片。',
      summary:
        '我正在从扎实的客户端工程，走向全栈和 AI 原生产品构建：移动端、Web、轻量后端、LLM 工作流，以及能真正落地的工具想法。',
      experienceEyebrow: '经历',
      experienceTitle: '千万级 DAU 产品里的工程经验。',
    },
    blog: {
      title: '博客',
      description: 'Cu 的技术笔记、随笔和旅行记录。',
      eyebrow: '博客',
      heading: '关于工作、旅行、游戏、AI，以及作为一个人活着这件怪事的笔记。',
      back: '返回博客',
    },
    contact: {
      title: '联系',
      description: '联系 Cu。',
      eyebrow: '联系',
      heading: '打个招呼，交换想法，或者发一首好歌。',
      lede: '我通常很愿意聊 Android、全栈构建、AI 应用、旅行计划，或者任何在你脑子里挥之不去的想法。',
    },
    principles: [
      {
        title: '全栈构建者',
        description: 'Android 是我的出发点，但目标是完整交付产品：客户端、Web、后端、部署、数据和持续迭代。',
      },
      {
        title: 'AI 工程化',
        description: '我把 AI 当成新的产品基础设施：提示词、Agent 工作流、RAG、自动化，以及能被普通人真正使用的工具。',
      },
      {
        title: '长期记录',
        description: '我希望这里不只是作品展示，也能留下我如何思考、如何学习、如何把一次次经历变成经验。',
      },
    ],
    profile: {
      skills: ['全栈', 'AI 工程', 'Android', 'Android TV', 'Compose', '跨端', 'LLM 应用', '性能', '写作'],
    },
    experiences: [
      {
        company: 'iQIYI',
        title: '软件工程师',
        time: '2025.5 - 至今',
        logo: '/images/iqiyi.png',
        link: 'https://app.iqiyi.com/tv/player/',
        description: '负责海外视频产品的 Android TV 与跨端开发，同时探索 Compose 落地、AI 应用开发和更高杠杆的工程工作流。',
        tags: ['Android TV', '跨端', 'Compose', 'AI 应用'],
      },
      {
        company: 'Meituan',
        title: '软件工程师',
        time: '2022.5 - 2025.4',
        logo: '/images/meituanIcon.png',
        link: 'https://www.dianping.com/',
        description: '负责大众点评 Android 与跨平台开发，覆盖产品迭代、性能优化和可规模化的客户端工程建设。',
        tags: ['Android', '性能', '跨平台'],
      },
    ],
  },
} satisfies Record<Lang, Record<string, unknown>>;
