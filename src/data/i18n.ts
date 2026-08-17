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
      travel: 'Travel',
      switch: '中文',
    },
    home: {
      title: 'Cu',
      eyebrow: 'Full-stack / AI / Writing',
      headline: 'Code is getting cheaper. Judgment is getting more expensive.',
      note:
        'I came up through Android, and now ship AI products that actually go live — plus the judgment, engineering, and life behind them.',
      viewWork: 'See what I built',
      readBlog: 'Read the latest',
      nowFallback: 'What I’m doing, writing, and thinking lately',
      projectsEyebrow: 'Selected work',
      projectsTitle: 'Selected work',
      recentEyebrow: 'Recently written',
      recentTitle: 'Recently written',
      allPosts: 'All posts',
      contactCta: 'Want to talk product, engineering, or a collaboration? Get in touch',
    },
    about: {
      title: 'About',
      description: 'About Cu, engineering focus, and work experience.',
      eyebrow: 'About',
      heading: 'From client engineering on massive products, to a full-stack indie builder.',
      profileEyebrow: 'Profile',
      profileTitle: 'A product-minded engineer with a client-side backbone.',
      summary:
        'I started with Android and TV engineering, and keep expanding into full-stack and AI-native products: mobile, web, lightweight backends, LLM workflows, and tools that can actually go live.',
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
      channelsEyebrow: 'Also writing',
      channelsTitle: 'WeChat accounts',
    },
    now: {
      title: 'Now',
      description: 'What Cu is doing lately.',
      eyebrow: 'Now',
      heading: 'Now',
      fallback: 'This page is being updated. Check back soon.',
      back: 'Back to home',
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
          'Android, TV, Compose, performance optimization, and cross-end engineering on large-scale consumer products.',
      },
      {
        title: 'Deepening direction',
        description:
          'RAG, MCP, agents, and AI application development: retrieval, tool protocols, and agent workflows, shipped as products for real pain points.',
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
        title: 'Lülü',
        status: 'Live',
        slug: 'lvlv',
        href: 'https://mind.koocuu.com',
        description:
          'Dump the mess; AI turns it into a readable relationship map.',
        note:
          'Not a notes app or a to-do center — a quiet sorter that turns chaos into a relationship graph.',
        access: 'Live on the Web — guest mode keeps everything in your browser.',
        visitLabel: 'Visit',
        caseLabel: 'Case study',
      },
      {
        title: 'Decision Assistant',
        status: 'Live',
        slug: 'decision-assistant',
        href: 'https://decision.koocuu.com',
        description:
          'Turn a dilemma into options, risks, and a low-regret next step you can review later.',
        note:
          'It does not choose for you — it turns overthinking into a recordable, reviewable decision process.',
        access: 'Officially live — try it on the Web, or download the Android build.',
        visitLabel: 'Visit',
        caseLabel: 'Case study',
      },
    ],
    lvlvCase: {
      title: 'Lülü',
      description:
        'Case study: a brain-dump tool that turns messy thoughts into an interactive mind map with hidden links surfaced by AI.',
      eyebrow: 'Project case',
      heading: 'Lülü',
      lede:
        'A shipped mind-clearing tool: dump whatever is in your head, let AI sort and connect it, and get back an interactive map — so the tangle becomes something you can see in five seconds.',
      status: 'Live',
      liveUrl: 'https://mind.koocuu.com',
      repoUrl: 'https://github.com/koocuu/lvlvMind',
      blogSlug: '上线了一个小工具：捋捋',
      tryLabel: 'Try the product',
      blogLabel: 'Read the full retrospective',
      repoLabel: 'View source',
      contactLabel: 'Talk about a build',
      backLabel: 'Back to home',
      problem: {
        eyebrow: 'Problem',
        title: 'The hard part is not listing things — it is seeing how they tangle.',
        body:
          'At night the brain won’t stop: todos, guilt, half-decisions, random noise, all mixed. ChatGPT can spit out a list, then the thread vanishes. What I needed was one dump box that returns a picture of the mess — especially the links between a feeling and the thing causing it.',
      },
      solution: {
        eyebrow: 'Product',
        title: 'Not another notes app — a sorter that draws relationships.',
        body:
          'Lülü wraps a quiet shell around a fixed loop: pour everything out, AI extracts six kinds of items and cross-type links, then React Flow renders an interactive map you can click, check off, and export.',
        steps: [
          'Dump freely — voice or text, no format required',
          'AI sorts into todos, emotions, dilemmas, and more — then finds links',
          'Interact on the map, save locally, export PNG or Markdown',
        ],
      },
      decisions: {
        eyebrow: 'Key calls',
        title: 'Three product judgments that shaped the build.',
        items: [
          {
            title: 'Graph over lists',
            description:
              'Competitors return categorized lists. The soul of this product is the edge: anxiety ← caused by → unfinished report. Without real links, it is just another sorting box.',
          },
          {
            title: 'Zero-friction dump first',
            description:
              'Guest mode, no signup, no forms. When the brain is noisy, typing into fields is the barrier. One big box plus voice; structure is inferred afterward.',
          },
          {
            title: 'Quiet, not preachy',
            description:
              'Copy and prompt stay non-judgmental: a sorting tool, not therapy. Wrong associations destroy trust faster than missing ones — edges stay sparse and explainable.',
          },
        ],
      },
      stack: {
        eyebrow: 'Scope',
        title: 'What I owned end to end.',
        body:
          'From positioning and the analysis prompt to the React Flow canvas and local-first history: product judgment first, then a shippable web MVP.',
        items: [
          'Product / PRD',
          'LLM extraction & link prompts',
          'React Flow mind map',
          'Local guest history',
          'Export & deploy',
        ],
      },
      outcome: {
        eyebrow: 'Outcome',
        title: 'A live dump → map loop, and a clearer bar for “worth building.”',
        body:
          'The product is live at mind.koocuu.com. The next filter is habit: when the head is noisy, will I open Lülü instead of another ChatGPT thread? Later work can connect extracted todos into the koocuu dashboard loop.',
      },
      cta: {
        eyebrow: 'Next',
        title: 'Want something similar shipped?',
        body:
          'I help turn fuzzy ideas into usable AI tools: workflow design, prototypes, LLM integration, and lightweight product delivery.',
      },
    },
    decisionCase: {
      title: 'Decision Assistant',
      description:
        'Case study: an AI low-regret decision tool that turns overthinking into a recordable, reviewable process.',
      eyebrow: 'Project case',
      heading: 'Decision Assistant',
      lede:
        'A shipped AI product for everyday dilemmas: pour out the mess, get a low-regret next step, then review it later — so decisions stop vanishing into chat history.',
      status: 'Live',
      liveUrl: 'https://decision.koocuu.com',
      blogSlug: '我用 AI Agent 做了一个低后悔决策助手，但我发现最难的不是代码',
      tryLabel: 'Try the product',
      blogLabel: 'Read the full retrospective',
      contactLabel: 'Talk about a build',
      backLabel: 'Back to home',
      problem: {
        eyebrow: 'Problem',
        title: 'The hard part is not more information — it is convergence.',
        body:
          'I often get stuck on small-but-real choices: buy or wait, keep or quit, rest or push. ChatGPT can answer once, then the thread disappears. What I needed was a process that records the dilemma, forces a low-regret action, and makes later review possible.',
      },
      solution: {
        eyebrow: 'Product',
        title: 'Not a smarter chatbot — a decision loop.',
        body:
          'Decision Assistant wraps a warm “little-lamb” shell around a fixed loop: speak the dilemma, get a structured draft, take a low-regret action, then review. Over time, those records can become an observable decision profile.',
        steps: [
          'Pour out the dilemma in one breath',
          'AI drafts options, risks, and a low-regret action',
          'Save the record and review it later',
        ],
      },
      decisions: {
        eyebrow: 'Key calls',
        title: 'Three product judgments that shaped the build.',
        items: [
          {
            title: 'Advise, don’t decide',
            description:
              'The product never picks for you. It turns a messy dilemma into options, risks, and one low-regret next step — so the user still owns the choice, just with less rumination.',
          },
          {
            title: 'Process over one-shot answers',
            description:
              'The gap versus ChatGPT is not a stronger model. It is a durable loop: draft → act → review → profile. Without review, it is just another suggestion box.',
          },
          {
            title: 'Pour-out first, forms later',
            description:
              'V1 asked for title, category, options, fears, mood. That made an already anxious person fill a spreadsheet. The default became a single freeform dump; structure is inferred afterward, and the first screen leads with the conclusion.',
          },
        ],
      },
      stack: {
        eyebrow: 'Scope',
        title: 'What I owned end to end.',
        body:
          'From positioning and prompt design to Web/Android delivery: product judgment first, then shipping with AI-assisted engineering.',
        items: ['Product / PRD', 'LLM prompts & workflow', 'Web app', 'Android build', 'Deploy & iteration'],
      },
      outcome: {
        eyebrow: 'Outcome',
        title: 'A real demo, and a clearer bar for what is worth building.',
        body:
          'The product is live on Web and Android. More importantly, the build reset my bar: in an AI-agent era, code gets cheaper, judgment gets more expensive. The next filter is habit — will I open this instead of ChatGPT when I am actually stuck?',
      },
      cta: {
        eyebrow: 'Next',
        title: 'Want something similar shipped?',
        body:
          'I help turn fuzzy ideas into usable AI tools: workflow design, prototypes, LLM integration, and lightweight product delivery.',
      },
    },
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
      travel: '足迹',
      switch: 'EN',
    },
    home: {
      title: 'Cu',
      eyebrow: '全栈 / AI / 写作',
      headline: '代码越来越便宜，判断越来越贵。',
      note: '从 Android 出发，做真正上线的 AI 产品，也记录产品背后的判断、工程和生活。',
      viewWork: '看我做的东西',
      readBlog: '读最新文章',
      nowFallback: '最近在做、写、想什么',
      projectsEyebrow: '精选作品',
      projectsTitle: '精选作品',
      recentEyebrow: '最近写下',
      recentTitle: '最近写下',
      allPosts: '查看全部文章',
      contactCta: '想聊产品、工程或合作？联系我',
    },
    about: {
      title: '关于',
      description: '关于 Cu、工程方向和工作经历。',
      eyebrow: '关于',
      heading: '从千万用户的客户端现场，走到全栈个人开发者。',
      profileEyebrow: '个人定位',
      profileTitle: '一个有客户端底色、靠近产品现场的工程师。',
      summary:
        '我从 Android / TV 工程做起，正往全栈和 AI 原生产品深耕：移动端、Web、轻量后端、LLM 工作流，以及能真正发布出来的工具。',
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
      channelsEyebrow: '也在写',
      channelsTitle: '公众号',
    },
    now: {
      title: '此刻',
      description: 'Cu 最近在做什么。',
      eyebrow: '此刻',
      heading: '此刻',
      fallback: '这一页正在更新，稍后再来看看。',
      back: '返回首页',
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
        description: 'Android、TV、Compose、性能优化和跨端工程，来自真实大规模消费产品的长期训练。',
      },
      {
        title: '深耕方向',
        description: 'RAG、MCP、Agent 和 AI 应用开发：把检索增强、工具协议和应用工作流，做成能解决真实痛点的产品。',
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
        title: '捋捋',
        status: '已上线',
        slug: 'lvlv',
        href: 'https://mind.koocuu.com',
        description: '把一团乱麻倒进去，AI 整理成能一眼看懂的关系图。',
        note:
          '不是笔记软件，也不是待办中心——安静接住一团乱麻，整理成能一眼看懂的关系图。',
        access: '已上线 Web，游客模式内容只存在本机浏览器。',
        visitLabel: '访问',
        caseLabel: '看案例',
      },
      {
        title: '决策助手',
        status: '已上线',
        slug: 'decision-assistant',
        href: 'https://decision.koocuu.com',
        description: '把纠结拆成选项、风险和低后悔行动，再事后复盘。',
        note:
          '它不替用户做选择，而是把“想太多”变成一个可记录、可复盘的决策流程。',
        access: '已正式上线，可直接 Web 在线体验，也可下载 Android 包。',
        visitLabel: '访问',
        caseLabel: '看案例',
      },
    ],
    lvlvCase: {
      title: '捋捋',
      description: '案例：一个把脑子里的乱麻倒出来、整理成可交互思维导图的工具。',
      eyebrow: '项目案例',
      heading: '捋捋',
      lede:
        '一个已上线的脑内整理工具：把脑子里的一切倒进一个输入框，AI 分拣并发现隐藏关联，用思维导图还你一个清醒的脑子。',
      status: '已上线',
      liveUrl: 'https://mind.koocuu.com',
      repoUrl: 'https://github.com/koocuu/lvlvMind',
      blogSlug: '上线了一个小工具：捋捋',
      tryLabel: '体验产品',
      blogLabel: '阅读完整复盘',
      repoLabel: '查看源码',
      contactLabel: '聊聊合作',
      backLabel: '返回首页',
      problem: {
        eyebrow: '问题',
        title: '难的不是列清单，而是看清它们怎么缠在一起。',
        body:
          '睡前脑子停不下来：待办、愧疚、半截纠结、碎念搅成一团。ChatGPT 能吐出一列清单，对话又散掉。我需要的是一个倾倒入口，还给我一张图——尤其是「这份焦虑 ← 来源于 → 那件没做完的事」。',
      },
      solution: {
        eyebrow: '产品',
        title: '不是又一个笔记软件，而是会画关联的整理器。',
        body:
          '捋捋用安静的外壳包住一套固定循环：自由倾倒 → AI 提取六类事项并发现跨类型关联 → React Flow 渲染可交互导图 → 本地保存与导出。',
        steps: ['语音或文字随便倒，无格式要求', 'AI 分拣待办、情绪、纠结等，并连出关联', '在图上勾选、点开详情，导出 PNG / Markdown'],
      },
      decisions: {
        eyebrow: '关键取舍',
        title: '决定产品形状的三个判断。',
        items: [
          {
            title: '关系图优先于分类列表',
            description:
              '竞品多半输出分类清单。本产品的灵魂是连线：情绪归因到具体事项、多个 todo 归到同一条线。没有真关联，它就只是又一个分拣盒子。',
          },
          {
            title: '先倾倒，零摩擦',
            description:
              '游客模式、不注册、不填表。脑子乱时，表单本身就是障碍。默认就是一个大输入框加语音；结构交给 AI 事后解析。',
          },
          {
            title: '安静接住，不说教',
            description:
              '文案与 Prompt 明确：整理工具，不是心理咨询。错误关联比没有关联更伤信任——连线宁缺毋滥，且每条可解释。',
          },
        ],
      },
      stack: {
        eyebrow: '范围',
        title: '我端到端负责的部分。',
        body: '从定位与分析 Prompt，到 React Flow 画布与本地历史：先做产品判断，再把 Web MVP 真正上线。',
        items: ['产品 / PRD', 'LLM 提取与关联 Prompt', 'React Flow 导图', '游客本地历史', '导出与部署'],
      },
      outcome: {
        eyebrow: '结果',
        title: '一条可用的「倾倒 → 出图」闭环，以及更高的验证门槛。',
        body:
          '产品已在 mind.koocuu.com 上线。下一步的检验是习惯——脑子乱时，我会打开捋捋，而不是再开一次 ChatGPT 吗？后续可把提取出的 todo 接到 koocuu dashboard 闭环。',
      },
      cta: {
        eyebrow: '下一步',
        title: '想把类似的想法做成可用产品？',
        body: '我可以帮忙把模糊想法做成可用的 AI 工具：工作流设计、原型验证、LLM 接入，以及轻量产品交付。',
      },
    },
    decisionCase: {
      title: '决策助手',
      description: '案例：一个把纠结变成可记录、可复盘流程的 AI 低后悔决策工具。',
      eyebrow: '项目案例',
      heading: '决策助手',
      lede:
        '一个已上线的日常决策工具：把脑子里的乱麻倒出来，收敛成低后悔行动，再事后复盘——让决策不再消失在聊天记录里。',
      status: '已上线',
      liveUrl: 'https://decision.koocuu.com',
      blogSlug: '我用 AI Agent 做了一个低后悔决策助手，但我发现最难的不是代码',
      tryLabel: '体验产品',
      blogLabel: '阅读完整复盘',
      contactLabel: '聊聊合作',
      backLabel: '返回首页',
      problem: {
        eyebrow: '问题',
        title: '难的不是更多信息，而是如何收敛。',
        body:
          '我经常卡在那些真实却琐碎的选择上：买还是等、留还是走、休息还是硬撑。ChatGPT 能答一次，但对话会散掉。我需要的是一套能记录纠结、逼出低后悔行动、并支持事后复盘的流程。',
      },
      solution: {
        eyebrow: '产品',
        title: '不是更聪明的聊天机器人，而是决策闭环。',
        body:
          '决策助手用“小羊暖外壳”包住一套固定循环：倾诉纠结 → 得到结构化草稿 → 采取低后悔行动 → 事后复盘。时间久了，这些记录可以沉淀成可观察的决策画像。',
        steps: ['一句话把纠结倒出来', 'AI 整理选项、风险和低后悔行动', '保存记录，之后回来复盘'],
      },
      decisions: {
        eyebrow: '关键取舍',
        title: '决定产品形状的三个判断。',
        items: [
          {
            title: '给建议，不替你做决定',
            description:
              '产品从不替用户拍板。它只是把一团纠结整理成选项、风险和一步低后悔行动——选择权仍在用户手里，只是少一些内耗。',
          },
          {
            title: '流程优先于一次性回答',
            description:
              '和 ChatGPT 的差距不在模型更强，而在可延续的闭环：草稿 → 行动 → 复盘 → 画像。没有复盘，它就只是又一个建议盒子。',
          },
          {
            title: '先倾诉，再结构化',
            description:
              '第一版要求填标题、分类、选项、害怕结果、情绪。本来就纠结的人，更不想填表。默认入口改成自由倾诉，结构由 AI 解析；分析页也改成先结论、后展开。',
          },
        ],
      },
      stack: {
        eyebrow: '范围',
        title: '我端到端负责的部分。',
        body: '从定位和 Prompt 设计，到 Web / Android 交付：先做产品判断，再用 AI 辅助工程把东西真正上线。',
        items: ['产品 / PRD', 'LLM Prompt 与工作流', 'Web 应用', 'Android 包', '部署与迭代'],
      },
      outcome: {
        eyebrow: '结果',
        title: '一个真实 Demo，以及更高的“值不值得做”门槛。',
        body:
          '产品已在 Web 和 Android 上线。更重要的是，这次构建重置了我的标准：AI Agent 时代，代码越来越便宜，判断越来越贵。下一步的检验是习惯——真纠结时，我会打开它，而不是再开一次 ChatGPT 吗？',
      },
      cta: {
        eyebrow: '下一步',
        title: '想把类似的想法做成可用产品？',
        body: '我可以帮忙把模糊想法做成可用的 AI 工具：工作流设计、原型验证、LLM 接入，以及轻量产品交付。',
      },
    },
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
