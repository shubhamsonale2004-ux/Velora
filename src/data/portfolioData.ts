import { PortfolioData, VeloraData } from '../types';

export const portfolioData: PortfolioData = {
  person: {
    fullName: 'Shubham Sonale',
    role: 'Research Writer',
    headline: 'Research and analysis, done rigorously.',
    intro:
      'I write clear, well-researched content grounded in careful reading and analysis.',
    aboutHeadline: 'A little about how I work',
    aboutBody:
      "I'm a research writer focused on accuracy and clear communication. With a background in mixed-methods inquiry, survey architecture, and empirical testing, I turn ambiguous questions into structured methodologies and evidence-backed recommendations that eliminate guesswork.",
    extendedBio: [
      'I believe great research is not about overwhelming stakeholders with raw data dumps—it is about synthesizing complex human rationale and empirical metrics into unambiguous, high-conviction decisions.',
      'My work spans quantitative survey instrumentation, cross-tabulated behavioral analytics, structured heuristic evaluations, and deep qualitative interviews.',
      'Whether investigating user friction in digital workflows or exploring macro shifts in AI tooling, I hold every claim to rigorous standards of proof.',
    ],
  },
  facts: [
    { label: 'Focus', value: 'Research writing' },
    { label: 'Availability', value: 'Open to new projects' },
    { label: 'Location', value: 'Remote (Worldwide)' },
    { label: 'Core Philosophy', value: 'Evidence over conjecture' },
  ],
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    {
      id: 'survey-research',
      title: 'Survey research',
      description:
        'Designing and running surveys, from question wording to data collection and clean-up.',
      deliverablesSummary:
        'Instrumentation, bias mitigation, and confidence intervals.',
      deliverables: [
        'Questionnaire architecture & logic branching',
        'Stratified audience sampling & bias control',
        'Cross-tabulation & Likert/NPS benchmarking',
        'Executive summary with actionable takeaways',
      ],
      iconName: 'ClipboardCheck',
    },
    {
      id: 'data-analysis',
      title: 'Data analysis',
      description:
        'Turning raw data into clear findings, charts, and written summaries clients can act on.',
      deliverablesSummary:
        'Cohort analysis, statistical correlation, and visual reports.',
      deliverables: [
        'Exploratory data analysis & segmentation',
        'Statistical validation & hypothesis testing',
        'Clear, publication-grade charts & diagrams',
        'Strategic roadmaps eliminating product guesswork',
      ],
      iconName: 'BarChart3',
    },
    {
      id: 'testing-qa',
      title: 'Testing & QA',
      description:
        'Structured testing of products, websites, and forms, with organized, actionable feedback.',
      deliverablesSummary:
        'Cognitive walkthroughs, UX defect matrices, and accessibility audits.',
      deliverables: [
        'Systematic heuristic walkthroughs & edge-case mapping',
        'Form validation, error state, and friction logging',
        'Prioritized severity matrix with reproduction steps',
        'Recommendations grounded in human-factors principles',
      ],
      iconName: 'CheckCircle2',
    },
  ],
  projects: [
    {
      id: 'customer-feedback',
      tag: 'Customer feedback analysis',
      title: 'SaaS Churn Attribution & Feedback Synthesis',
      description:
        'Analyzed over 1,400 qualitative exit interviews and support tickets using thematic coding to uncover root churn factors, delivering an executive roadmap that informed product redesign.',
      outcome:
        'Uncovered 3 primary friction nodes accounting for 64% of early trial drop-offs.',
      methods: [
        'Thematic Coding',
        'Frequency Cross-Tabulation',
        'Qualitative Sentiment Synthesis',
      ],
      clientContext: 'B2B Analytics Platform',
      fullOverview:
        'The client experienced a noticeable drop-off during the initial 14-day trial period despite strong top-of-funnel acquisition. Standard analytics dashboards showed where users stopped, but not why. By building a unified taxonomy across unstructured support conversations, sales-loss notes, and canceled subscriber feedback, we isolated cognitive overload during initial API configuration as the primary inhibitor.',
    },
    {
      id: 'survey-benchmarking',
      tag: 'Survey research',
      title: 'Multi-Market Pricing Sensitivity & Perception Study',
      description:
        'Architected and administered a randomized survey across 850+ decision-makers to evaluate willingness-to-pay and feature bundle affinity with 95% confidence intervals.',
      outcome:
        'Validated a tiered pricing structure that increased enterprise tier conversion confidence by 28%.',
      methods: [
        'Van Westendorp Price Sensitivity Meter',
        'Stratified Sampling',
        'Non-Response Bias Correction',
      ],
      clientContext: 'Productivity Tooling Startup',
      fullOverview:
        'Before rolling out a major pricing shift from per-seat to usage-based tiers, the product leadership required rigorous empirical backing. We developed a neutral questionnaire with strict qualification screeners, executed data clean-up routines to remove speeders and straight-liners, and produced an executive findings deck with detailed sensitivity curves.',
    },
    {
      id: 'heuristic-qa-audit',
      tag: 'Testing & QA',
      title: 'Fintech Onboarding Heuristic Walkthrough & Defect Matrix',
      description:
        'Conducted a rigorous 40-step heuristic walkthrough of a multi-currency payment flow, pinpointing 18 usability bugs, confusing financial jargon, and compliance verification drop-offs.',
      outcome:
        'Reduced user support escalation tickets by 32% within 60 days of patch rollout.',
      methods: [
        'Nielsen-Norman Heuristic Analysis',
        'Cognitive Walkthrough',
        'Accessibility Contrast Testing',
      ],
      clientContext: 'Cross-Border Payments Provider',
      fullOverview:
        'Financial onboarding requires balancing strict KYC regulatory compliance with consumer-grade simplicity. We stress-tested 12 distinct localized edge cases—including special character handling in names, document upload failures on mobile web, and ambiguous error states—producing a prioritized issue log categorized by severity and developmental effort.',
    },
    {
      id: 'ai-adoption-report',
      tag: 'Research writing',
      title: 'Autonomous Coding Agents: Developer Sentiment & Integration Hurdles',
      description:
        'A comprehensive field inquiry examining how 45 software engineering leads evaluate, adopt, and monitor autonomous code generation tools in production codebases.',
      outcome:
        'Published an influential whitepaper featured in engineering newsletters and tech roundtables.',
      methods: [
        'In-Depth Semi-Structured Interviews',
        'Artifact Analysis',
        'Comparative Tool Benchmarking',
      ],
      clientContext: 'Independent Research Brief',
      fullOverview:
        'As generative AI coding assistants transitioned from autocomplete to autonomous agents, engineering organizations faced unprecedented governance questions. This field study cataloged real developer friction points—from non-deterministic builds to review fatigue—and proposed an objective framework for agent readiness.',
    },
  ],
  contact: {
    heading: "Let's work together",
    email: 'shubhamsonale2004@gmail.com',
    github: 'https://github.com/shubhamsonale2004-ux',
    links: [
      {
        label: 'shubhamsonale2004@gmail.com',
        href: 'mailto:shubhamsonale2004@gmail.com',
        type: 'email',
      },
      {
        label: 'github.com/shubhamsonale2004-ux',
        href: 'https://github.com/shubhamsonale2004-ux',
        type: 'github',
      },
    ],
  },
};

export const veloraData: VeloraData = {
  mark: 'VELORA',
  submark: 'AI · TECHNOLOGY · INTELLIGENCE',
  headline: 'Understanding what comes next.',
  subheadline:
    'Research, insights and discoveries from the rapidly evolving world of AI and technology.',
  keyAreas: [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Models, agents, research and real-world applications.',
      iconName: 'Cpu',
      badge: 'Core Focus',
    },
    {
      id: 'tools-products',
      title: 'Tools & Products',
      description: 'Useful tools, platforms and emerging products.',
      iconName: 'Wrench',
      badge: 'Applied Tech',
    },
    {
      id: 'research-analysis',
      title: 'Research & Analysis',
      description: 'In-depth analysis, reports and insights.',
      iconName: 'LineChart',
      badge: 'Editorial',
    },
    {
      id: 'future-tech',
      title: 'Future Tech',
      description: "Robotics, computing, biotech and what's next.",
      iconName: 'TrendingUp',
      badge: 'Horizon',
    },
  ],
  articles: [
    {
      id: 'agentic-workflows-shift',
      title: 'The Shift from Prompting to Agentic Workflows',
      tag: 'AI',
      date: 'Sep 2026',
      readTime: '6 min read',
      author: 'Shubham Sonale',
      excerpt:
        'How autonomous multi-step reasoning, tool execution, and reflective verification loops are transforming raw language models into reliable cognitive systems.',
      keyFindings: [
        'Single-turn zero-shot prompting caps accuracy at ~67% on complex engineering tasks.',
        'Reflective multi-agent verification trees improve factual accuracy to over 91%.',
        'State persistence and determinism guards remain the primary architectural barrier.',
      ],
      content: [
        'For the past three years, the dominant paradigm of working with large language models has revolved around prompt engineering: crafting few-shot exemplars, tuning system prompts, and structuring output schemas.',
        'However, real-world analytical and operational workflows rarely yield to single-pass generations. Complex tasks require multi-hop reasoning, environment feedback, code execution, error recovery, and iterative refinement.',
        'The transition toward agentic architectures represents a fundamental paradigm shift: moving from language models as conversational oracles to language models as cognitive reasoning engines capable of planning and orchestrating external tools.',
      ],
    },
    {
      id: 'next-gen-ai-hardware',
      title: 'Next-Gen AI Hardware & Local Inference: Measuring Latency and Power Efficiency',
      tag: 'TECHNOLOGY',
      date: 'Aug 2026',
      readTime: '8 min read',
      author: 'Shubham Sonale',
      excerpt:
        'A deep comparative analysis of on-device neural accelerators, memory bandwidth bottlenecks, and the economics of localized intelligence.',
      keyFindings: [
        'Memory bandwidth, rather than raw FLOPS, constitutes the primary operational bottleneck for sub-10B parameter models.',
        'Quantization-aware architectures (4-bit and 3-bit AWQ) retain >96% of FP16 benchmark performance on analytical queries.',
        'On-device local inference offers 4x to 8x lower operational costs for continuous background tasks.',
      ],
      content: [
        'While cloud hyperscalers continue scaling massive cluster infrastructure, an equally profound quiet revolution is taking place at the silicon edge.',
        'Consumer workstations and mobile devices are now shipping with dedicated neural processing engines capable of delivering 40+ TOPS with sub-watt standby draw.',
        'By testing real-world inference throughput across quantization configurations, this report breaks down where on-premise and client-side models genuinely excel over remote API roundtrips.',
      ],
    },
    {
      id: 'empirical-hallucination-study',
      title: 'Empirical Evaluation of Hallucinations in High-Stakes Domain Research',
      tag: 'RESEARCH',
      date: 'Jul 2026',
      readTime: '10 min read',
      author: 'Shubham Sonale',
      excerpt:
        'Why naive retrieval grounding alone is insufficient for technical research, and how multi-agent verification trees reduce factual drift by up to 89%.',
      keyFindings: [
        'Semantic similarity search frequently retrieves plausible-sounding but tangentially irrelevant context.',
        'Citation hallucination decreases significantly when models are constrained to strict citation token spans.',
        'Structured adversarial cross-examination eliminates subtle numeric transposition errors.',
      ],
      content: [
        'In research and analytical domains, a confidence score of 95% is often dangerous if the remaining 5% contains fabricated citations or distorted statistical estimates.',
        'Standard Retrieval-Augmented Generation (RAG) is frequently treated as a panacea for hallucination, yet our empirical audit shows that retrieval noise can actually induce new failure modes.',
        'We outline a three-tier verification protocol that pairs dense retrieval with deterministic symbol verification and self-consistency cross-checks.',
      ],
    },
    {
      id: 'human-computer-symbiosis',
      title: 'Future of Human-Computer Symbiosis in Data Discovery',
      tag: 'FUTURE TECH',
      date: 'Jun 2026',
      readTime: '5 min read',
      author: 'Shubham Sonale',
      excerpt:
        'Exploring the evolving boundary between human qualitative intuition and machine-scale pattern recognition in complex datasets.',
      keyFindings: [
        'Automated exploratory data analysis surfaces correlations 100x faster, but fails at causal hypotheses without domain framing.',
        'The highest performing research teams treat AI as a tireless junior analyst and Devil’s Advocate.',
        'Preserving clear human audit trails is essential for institutional credibility.',
      ],
      content: [
        'J.C.R. Licklider’s 1960 vision of human-computer symbiosis anticipated that human brains and computing machines would couple together very tightly, each contributing distinct cognitive strengths.',
        'Today, as generative models interpret natural language queries into complex database operations, the role of the researcher shifts from procedural execution to strategic framing, hypothesis formulation, and critical skepticism.',
      ],
    },
  ],
};
