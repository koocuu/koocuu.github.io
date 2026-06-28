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
      headline: 'From Android to AI, building full-stack products that actually ship.',
      note: 'A personal card for future clients, students, friends, and anyone curious about how I think about software, AI, and life.',
      readBlog: 'Read Blog',
      viewProfile: 'About Me',
      servicesEyebrow: 'Work with me',
      servicesTitle: 'Useful engineering, from idea to shipped product.',
      servicesIntro:
        'I care about products with real needs: clear product judgment, solid client-side engineering, and AI workflows that reduce repetitive work.',
      projectsEyebrow: 'Projects',
      projectsTitle: 'Small products, real problems.',
      projectsIntro:
        'A place for tools I am building myself: AI-native experiments, product ideas, and workflows that turn vague friction into usable systems.',
      writingEyebrow: 'Writing',
      writingTitle: 'Writing and public notes',
      writingIntro:
        'Besides code and projects, I keep a few long-running places for ideas: technical notes, real-world observations, and AI-assisted fiction experiments.',
      allPosts: 'All posts',
      about: 'About',
      contact: 'Contact',
    },
    about: {
      title: 'About',
      description: 'About Cu, engineering focus, and work experience.',
      eyebrow: 'About',
      heading: 'From Android to AI, building products that actually ship.',
      profileEyebrow: 'Profile',
      profileTitle: 'A product-minded engineer with a client-side backbone.',
      summary:
        'I started with Android and TV engineering, and keep expanding into full-stack and AI-native products: mobile apps, web experiences, lightweight backend systems, LLM workflows, and tools that can actually ship.',
      cardsEyebrow: 'Why me',
      cardsTitle: 'The capabilities I bring.',
      experienceEyebrow: 'Experience',
      experienceTitle: 'Engineering experience on products with tens of millions of DAU.',
    },
    blog: {
      title: 'Blog',
      description: "Cu's notes, essays, and travel writing.",
      eyebrow: 'Blog',
      heading: 'Notes from work, travel, games, and AI.',
      lede: 'Also, the strange business of being alive.',
      back: 'Back to blog',
    },
    contact: {
      title: 'Contact',
      description: 'Contact Cu.',
      eyebrow: 'Contact',
      heading: 'Say hi, trade notes, or send a good song.',
      lede:
        'I am usually happy to talk about Android, full-stack building, AI applications, travel plans, astronomy, or whatever thought refuses to leave your head.',
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
    aboutCards: [
      {
        title: 'Developer base',
        description:
          'Android, TV, Compose, performance, and cross-end engineering on large-scale consumer products.',
      },
      {
        title: 'Deepening direction',
        description:
          'Full-stack delivery and AI application building: web, lightweight backend, LLM workflows, and product delivery for real pain points.',
      },
      {
        title: 'Long-term signal',
        description:
          'Writing, travel, product judgment, and retrospectives are how I keep taste, thinking, and growth visible in public.',
      },
    ],
    services: [
      {
        title: 'AI application builds',
        description:
          'Turn fuzzy ideas into usable AI tools: workflow design, prototypes, LLM integration, RAG, and lightweight product delivery.',
      },
      {
        title: 'Android client, TV, and cross-platform',
        description:
          'Product-facing client engineering across Android apps, Android TV, and cross-platform surfaces: interaction quality, Compose adoption, performance, and maintainable architecture.',
      },
      {
        title: 'Consulting and collaboration',
        description:
          'Available for technical direction, architecture review, course collaboration, and helping individuals plan learning paths and career growth.',
      },
    ],
    projects: [
      {
        title: 'Low-Regret Decision Assistant',
        status: 'Live',
        href: 'https://decision.koocuu.com',
        description:
          'An AI decision tool wrapped in a warm, friendly shell: break a dilemma into options, risks, and a low-regret action, then review it later so personal decisions gradually settle into an observable profile.',
        note:
          'It does not choose for you — it turns overthinking into a recordable, reviewable process. Live on Web, mobile Web, and Android.',
        access: 'Publicly live — try it online or download the Android build.',
      },
    ],
    writingChannels: [
      {
        title: 'Blog',
        label: 'Personal Blog',
        description: 'Technical notes, AI, investing, reading notes, and thoughts worth keeping.',
        href: '/blog/',
        action: 'Read posts',
      },
      {
        title: '棱角计划',
        label: 'WeChat Official Account',
        description: 'Real-world growth, career choices, AI, investing frameworks, and an engineer’s view of the times.',
        action: 'Scan on WeChat',
        qr: '/images/wechat-lengjiao-qr.jpg',
      },
      {
        title: '碳基灵感收容所',
        label: 'WeChat Official Account',
        description: 'An AI co-creation fiction lab for cosmic short stories, strange premises, and carbon-based imagination.',
        action: 'Scan on WeChat',
        qr: '/images/wechat-carbon-qr.jpg',
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
          'Android TV and cross-platform development for overseas business products, while exploring Compose adoption, AI application development, and higher-leverage engineering workflows.',
        tags: ['Android TV', 'Cross-platform', 'Compose', 'AI Apps'],
      },
      {
        company: 'Meituan',
        title: 'Software Engineer',
        time: '2022.5 - 2025.4',
        logo: '/images/meituanIcon.png',
        link: 'https://www.dianping.com/',
        description:
          'Android and cross-platform development for Dianping, covering product iteration, performance work, and scalable client-side engineering.',
        tags: ['Android', 'Performance optimization', 'Cross-platform'],
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
      headline: '从 Android 到 AI，构建能落地的全栈产品。',
      note: '这是我的个人名片：给未来客户、学员、朋友，也给那些好奇我如何看待软件、AI 和生活的人。',
      readBlog: '读博客',
      viewProfile: '关于我',
      servicesEyebrow: '可以合作',
      servicesTitle: '从想法到落地，做真正能用的工程。',
      servicesIntro: '我关注有真实需求的产品：清晰的产品判断、扎实的客户端工程，以及能减少重复劳动的 AI 工作流。',
      projectsEyebrow: '项目',
      projectsTitle: '小产品，解决真实问题。',
      projectsIntro: '这里放我自己做的工具：AI 原生实验、产品想法，以及把模糊痛点整理成可用流程的小系统。',
      writingEyebrow: '写作',
      writingTitle: '内容创作与公开记录',
      writingIntro: '除了代码和项目，我也在写一些长期内容：技术笔记、现实观察，以及 AI 共创的幻想实验。',
      allPosts: '全部文章',
      about: '关于',
      contact: '联系',
    },
    about: {
      title: '关于',
      description: '关于 Cu、工程方向和工作经历。',
      eyebrow: '关于',
      heading: '从 Android 到 AI，做能落地的产品。',
      profileEyebrow: '个人定位',
      profileTitle: '一个有客户端底色、靠近产品现场的工程师。',
      summary:
        '我以 Android 和 TV 工程为起点，正不断往全栈和 AI 原生产品深耕：移动端、Web、轻量后端、LLM 工作流，以及能真正发布出来的工具。',
      cardsEyebrow: '为什么是我',
      cardsTitle: '我带来的组合能力。',
      experienceEyebrow: '经历',
      experienceTitle: '千万级 DAU 产品里的工程经验。',
    },
    blog: {
      title: '博客',
      description: 'Cu 的技术笔记、随笔和旅行记录。',
      eyebrow: '博客',
      heading: '关于工作、旅行、游戏和 AI 的笔记。',
      lede: '以及，作为一个人活着这件怪事。',
      back: '返回博客',
    },
    contact: {
      title: '联系',
      description: '联系 Cu。',
      eyebrow: '联系',
      heading: '打个招呼，交换想法，或者分享一首好歌。',
      lede: '我通常很愿意聊 Android、全栈构建、AI 应用、旅行计划、天文，或者任何在你脑子里挥之不去的想法。',
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
    aboutCards: [
      {
        title: '开发者底色',
        description: 'Android、TV、Compose、性能和跨端工程，来自真实大规模消费产品的长期训练。',
      },
      {
        title: '深耕方向',
        description: '全栈交付和 AI 应用构建：Web、轻量后端、LLM 工作流，以及能解决真实痛点的产品落地。',
      },
      {
        title: '长期信号',
        description: '写作、旅行、产品判断和复盘，是我把品味、思考和成长轨迹持续留在公开处的方式。',
      },
    ],
    services: [
      {
        title: 'AI 应用开发',
        description: '把模糊想法做成可用工具：工作流设计、原型验证、LLM 接入、RAG 和轻量产品交付。',
      },
      {
        title: 'Android / TV / 跨平台',
        description: '面向产品体验的客户端工程：Android App、Android TV、跨平台场景、交互质量、Compose 落地、性能优化和可维护架构。',
      },
      {
        title: '咨询与合作',
        description: '接受技术方向咨询、架构评审、课程合作，帮助个人规划学习路径和职业发展。',
      },
    ],
    projects: [
      {
        title: '决策助手',
        status: '已上线',
        href: 'https://decision.koocuu.com',
        description:
          '一个带“小羊暖外壳”的 AI 低后悔决策工具：把一段纠结拆成选项、风险和低后悔行动，再通过事后复盘，让个人决策逐步沉淀成可观察的画像。',
        note:
          '它不替用户做选择，而是把“想太多”变成一个可记录、可复盘的决策流程。',
        access: '已正式上线，可直接 Web 在线体验，也可下载 Android 包。',
      },
    ],
    writingChannels: [
      {
        title: 'Blog',
        label: '个人博客',
        description: '技术、AI、投资、读书笔记，以及值得长期沉淀的想法。',
        href: '/blog/',
        action: '阅读博客',
      },
      {
        title: '棱角计划',
        label: '微信公众号',
        description: '现实成长、职业选择、AI 时代观察、投资框架和工程师视角。',
        action: '微信扫码',
        qr: '/images/wechat-lengjiao-qr.jpg',
      },
      {
        title: '碳基灵感收容所',
        label: '微信公众号',
        description: '由人类灵感种子与 AI 共创的幻想短篇实验室，收容宇宙感和奇异设定。',
        action: '微信扫码',
        qr: '/images/wechat-carbon-qr.jpg',
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
        description: '负责海外事业部产品的 Android TV 与跨平台开发，同时探索 Compose 落地、AI 应用开发和更高杠杆的工程工作流。',
        tags: ['Android TV', '跨平台', 'Compose', 'AI 应用'],
      },
      {
        company: 'Meituan',
        title: '软件工程师',
        time: '2022.5 - 2025.4',
        logo: '/images/meituanIcon.png',
        link: 'https://www.dianping.com/',
        description: '负责大众点评 Android 与跨平台开发，覆盖产品迭代、性能优化和可规模化的客户端工程建设。',
        tags: ['Android', '性能优化', '跨平台'],
      },
    ],
  },
} satisfies Record<Lang, Record<string, unknown>>;
