export interface ClosestQuestion {
  id: string;
  question: string;
  traditionalField: string;
  coreDilemma: string;
  historicalContext: string;
  associatedAssumptions: string[];
  positionsBrief: Record<string, string>;
}

export interface RelatedQuestion {
  id: string;
  question: string;
  subfield: string;
  definition: string;
  whyItMatters: string;
  keyDilemmas: string[];
  intersections: string[];
  positionsAnalysis: Record<string, string>;
}

export interface HiddenAssumption {
  id: string;
  statement: string;
  philosophicalCategory: 'Teleological' | 'Epistemological' | 'Ontological' | 'Axiological';
  implicitUnderpinning: string;
  whatHappensIfTrue: string;
  whatHappensIfFalse: string;
  counterPosition: string;
  prominentDebaters: string[];
  historicalTurningPoint: string;
}

export interface MajorPosition {
  id: string;
  name: string;
  tagline: string;
  essence: string;
  colorTheme: {
    accent: string;
    badgeBg: string;
    border: string;
    text: string;
  };
  ontologicalStatusOfPurpose: string;
  epistemologyOfMeaning: string;
  viewOnConsciousness: string;
  ethicalImperative: string;
  responseToMortality: string;
  keyThinkers: {
    name: string;
    era: string;
    famousWork: string;
    quote: string;
  }[];
  primaryStrengths: string[];
  enduringCritiques: string[];
}

export interface ThoughtExperiment {
  id: string;
  title: string;
  thinker: string;
  era: string;
  premise: string;
  interactiveScenario: {
    choiceA: {
      label: string;
      positionAligned: string;
      philosophicalImplication: string;
    };
    choiceB: {
      label: string;
      positionAligned: string;
      philosophicalImplication: string;
    };
  };
  coreInsight: string;
}

export interface CompassQuestion {
  id: string;
  category: string;
  prompt: string;
  subtext: string;
  options: {
    id: string;
    label: string;
    philosophicalCamp: 'existentialism' | 'theism' | 'nihilism' | 'humanism';
    explanation: string;
  }[];
}

export const CLOSEST_QUESTIONS: ClosestQuestion[] = [
  {
    id: 'why-am-i-here',
    question: 'Why am I here?',
    traditionalField: 'Teleology & Personal Ontology',
    coreDilemma: 'Is individual human existence an intended outcome of a cosmic plan, a blank slate for autonomous creation, or a contingent byproduct of natural history?',
    historicalContext: 'From the Delphic imperative "Know Thyself" to Augustine\'s Confessions and Sartre\'s Nausea, humanity has sought to decipher whether "being here" is an assignment or an open clearing.',
    associatedAssumptions: ['human-purpose', 'purpose-discoverable'],
    positionsBrief: {
      existentialism: 'You are thrown into existence with no prior template. You are here to author yourself through unyielding choices.',
      theism: 'You are intentionally created with inherent dignity and vocation by a transcendent reality that grounds your being.',
      nihilism: 'You are here through blind, unguided evolutionary contingencies. The question itself projects purpose onto neutral physics.',
      humanism: 'You are here as a conscious participant in the human story, capable of crafting personal and collective flourishing.'
    }
  },
  {
    id: 'meaning-of-life',
    question: 'What is the meaning of life?',
    traditionalField: 'Axiology & Existential Hermeneutics',
    coreDilemma: 'Does "meaning" refer to cosmic significance, cognitive semantic coherence, or the lived experience of value and connection?',
    historicalContext: 'Historically treated as a metaphysical quest for an objective anchor, modern philosophy distinguishes between "meaning OF life" (cosmic) and "meaning IN life" (phenomenological).',
    associatedAssumptions: ['human-purpose', 'purpose-discoverable'],
    positionsBrief: {
      existentialism: 'Meaning is not a treasure hidden in the world; it is an active commitment forged against the absurd.',
      theism: 'Meaning emanates from communion with the Divine and alignment with sacred moral architecture.',
      nihilism: 'There is no objective meaning. To mourn this absence is merely nostalgia for ancient mythologies.',
      humanism: 'Meaning is generated through love, intellectual inquiry, artistic creation, and alleviating human suffering.'
    }
  },
  {
    id: 'something-rather-than-nothing',
    question: 'Why is there something rather than nothing?',
    traditionalField: 'Fundamental Metaphysics & Cosmology',
    coreDilemma: 'Why does the cosmos exist at all? Does reality require a Necessary Being, or is existence a brute cosmological fact?',
    historicalContext: 'Coined famously by Gottfried Wilhelm Leibniz in 1714, this question remains the ultimate border between physics, metaphysics, and contemplative awe.',
    associatedAssumptions: ['human-purpose'],
    positionsBrief: {
      existentialism: 'The sheer facticity of existence precedes all essence; the world is gratuitously "there" (de trop).',
      theism: 'Existence is contingent upon an uncaused, necessary Source (God) who freely wills reality into being.',
      nihilism: 'Existence is an ungrounded brute fact without reason, teleology, or cosmic redemption.',
      humanism: 'An awe-inspiring mystery elucidated by empirical astrophysics; the universe requires no transcendent justification to be treasured.'
    }
  }
];

export const RELATED_QUESTIONS: RelatedQuestion[] = [
  {
    id: 'what-is-consciousness',
    question: 'What is consciousness?',
    subfield: 'Philosophy of Mind & Phenomenology',
    definition: 'Subjective qualitative experience ("what it is like to be"), inner awareness, and the hard problem of how physical substrate generates phenomenal experience.',
    whyItMatters: 'Without consciousness, "meaning" and "purpose" cannot exist. It is the very aperture through which the universe perceives, questions, and assigns worth.',
    keyDilemmas: [
      'The Hard Problem: How does matter give rise to subjective feeling?',
      'Is consciousness fundamental (panpsychism/idealism) or emergent (physicalism)?',
      'Does consciousness confer moral standing and existential responsibility?'
    ],
    intersections: ['What is meaning?', 'Why am I here?'],
    positionsAnalysis: {
      existentialism: 'Consciousness is the "Nothingness" at the heart of being—the clearing of freedom that refuses to be reduced to pure deterministic matter.',
      theism: 'Consciousness is the Imago Dei—a spark of divine reflection enabling communion with the creator and moral discernment.',
      nihilism: 'An accidental evolutionary adaptation; an ephemeral neural hallucination that creates the illusion of a centralized "self".',
      humanism: 'The precious, fragile engine of empathy, reason, and culture; humanity is the cosmos awakening to conscious self-understanding.'
    }
  },
  {
    id: 'what-is-meaning',
    question: 'What is meaning?',
    subfield: 'Semantics, Semiotics & Value Theory',
    definition: 'The quality of significance, coherence, and relational value connecting an agent to actions, symbols, people, and the broader tapestry of reality.',
    whyItMatters: 'Understanding what constitutes "meaning" reveals whether we are searching for an external object or practicing an internal art of valuation.',
    keyDilemmas: [
      'Semantic meaning (representation) vs. Existential meaning (felt significance).',
      'Is meaning mind-independent (realism) or mind-dependent (constructivism)?',
      'Can subjective meaning suffice if the universe remains fundamentally indifferent?'
    ],
    intersections: ['What is purpose?', 'Why am I here?'],
    positionsAnalysis: {
      existentialism: 'Meaning is radically constructivist: you are the sole author and judge of what holds authentic weight.',
      theism: 'Meaning is realist and teleological: grounded in an eternal, benevolent reality that transcends human subjectivity.',
      nihilism: 'Meaning is a cognitive construct lacking any objective referent outside human linguistic conventions.',
      humanism: 'Meaning is intersubjective: woven through social bonds, shared knowledge, artistic beauty, and moral solidarity.'
    }
  },
  {
    id: 'what-is-purpose',
    question: 'What is purpose?',
    subfield: 'Teleology & Action Theory',
    definition: 'The end, goal, or orientation (telos) toward which an entity, process, or deliberate human action is directed.',
    whyItMatters: 'Distinguishes between biological utility, social conditioning, divine destiny, and autonomous personal agency.',
    keyDilemmas: [
      'Intrinsic telos (built into nature) vs. Extrinsic projection (invented goals).',
      'Does human life have a single unifying purpose or plural, evolving projects?',
      'Can one live a purposeful life without believing in an objective cosmic blueprint?'
    ],
    intersections: ['What is consciousness?', 'What is meaning?'],
    positionsAnalysis: {
      existentialism: 'Purpose is self-assigned through commitment. Action precedes essence; purpose is proven through deeds.',
      theism: 'Purpose is ordained: loving God, serving others, and participating in cosmic redemption.',
      nihilism: 'Nature operates strictly through causality, not teleology. Purpose is an evolutionary fiction.',
      humanism: 'Purpose is pragmatic and cooperative: cultivating human flourishing, justice, scientific insight, and planetary care.'
    }
  }
];

export const HIDDEN_ASSUMPTIONS: HiddenAssumption[] = [
  {
    id: 'human-purpose',
    statement: 'Human existence has a purpose.',
    philosophicalCategory: 'Teleological',
    implicitUnderpinning: 'Presupposes that human life cannot simply be a neutral biological occurrence; it presumes reality possesses an inherent intentionality or goal-directedness (Aristotelian telos).',
    whatHappensIfTrue: 'If true, humanity’s primary task is discovery, alignment, and obedience to that overarching design. Straying from it implies existential failure or sin.',
    whatHappensIfFalse: 'If false, the universe is purposeless, liberating humans to either descend into despair or joyfully author their own values without cosmic surveillance.',
    counterPosition: 'Dys-teleology / Cosmic Indifference: Physical systems evolve through undirected mechanistic forces (entropy, natural selection) without intrinsic goals or moral destinies.',
    prominentDebaters: ['Aristotle vs. Epicurus', 'Thomas Aquinas vs. Friedrich Nietzsche', 'Jean-Paul Sartre vs. C.S. Lewis'],
    historicalTurningPoint: 'The Scientific Revolution (Galileo, Newton, Darwin) replaced final causes (telos) with efficient causes (mechanisms), shattering the teleological consensus.'
  },
  {
    id: 'purpose-discoverable',
    statement: 'Purpose is discoverable.',
    philosophicalCategory: 'Epistemological',
    implicitUnderpinning: 'Presupposes an epistemic bridge: that human reason, divine revelation, scientific inquiry, or mystical intuition possesses sufficient clarity to discern cosmic meaning.',
    whatHappensIfTrue: 'Knowledge of the good is accessible. Disagreements arise from cognitive bias, moral failing, or incomplete revelation, but an answer exists in principle.',
    whatHappensIfFalse: 'Even if an objective purpose exists, human faculties are either too limited, conditioned, or isolated to reliably confirm it (Kantian Noumenon, Pyrrhonian Skepticism).',
    counterPosition: 'Epistemic Opacity & Constructivism: We do not discover meaning as one discovers a geological stratum; we manufacture meaning through language, culture, and choice.',
    prominentDebaters: ['Plato (Forms) vs. David Hume (Is-Ought problem)', 'Immanuel Kant vs. Soren Kierkegaard (Leap of Faith)'],
    historicalTurningPoint: 'Kant’s Critique of Pure Reason established that the human mind shapes reality through its own perceptual categories, barring direct access to things-in-themselves.'
  }
];

export const MAJOR_POSITIONS: MajorPosition[] = [
  {
    id: 'existentialism',
    name: 'Existentialism',
    tagline: 'Existence Precedes Essence',
    essence: 'Humans are not manufactured with a predetermined nature. We first exist, encounter ourselves in the world, and only then define who we are through radical freedom and personal responsibility.',
    colorTheme: {
      accent: '#B45309', // Amber-700
      badgeBg: '#FEF3C7',
      border: '#D97706',
      text: '#92400E'
    },
    ontologicalStatusOfPurpose: 'Subjective & Created. Purpose does not pre-exist human consciousness; it is forged by conscious commitments in a silent world.',
    epistemologyOfMeaning: 'Phenomenological. Discovered not in abstract universal laws, but in authentic, courageous engagement with lived reality.',
    viewOnConsciousness: 'Radical awareness of freedom. Consciousness is defined by its ability to detach from given circumstances and envision what might be.',
    ethicalImperative: 'Authenticity & Bad Faith rejection. Refusing to evade freedom by blaming fate, biology, or social conditioning.',
    responseToMortality: 'Finitude gives urgency to choice. Mortality is the boundary condition that renders every authentic commitment precious.',
    keyThinkers: [
      {
        name: 'Jean-Paul Sartre',
        era: '1905–1980',
        famousWork: 'Being and Nothingness (1943)',
        quote: 'Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.'
      },
      {
        name: 'Simone de Beauvoir',
        era: '1908–1986',
        famousWork: 'The Ethics of Ambiguity (1947)',
        quote: 'To will oneself free is also to will others free. Existence is an open horizon of action.'
      },
      {
        name: 'Albert Camus',
        era: '1913–1960',
        famousWork: 'The Myth of Sisyphus (1942)',
        quote: 'One must imagine Sisyphus happy. The struggle itself toward the heights is enough to fill a man\'s heart.'
      }
    ],
    primaryStrengths: [
      'Empowers uncompromised individual agency and moral accountability.',
      'Refuses dogmatic consolations in the face of suffering.',
      'Recognizes the unique dignity of self-determination.'
    ],
    enduringCritiques: [
      'Can lead to moral relativism if there are no objective criteria to evaluate choices.',
      'Can induce paralyzing anxiety (angst) without providing structural solace.',
      'Underestimates socioeconomic and biological determinism.'
    ]
  },
  {
    id: 'theism',
    name: 'Theism',
    tagline: 'Grounded in the Transcendent',
    essence: 'Existence is the deliberate creation of a transcendent, personal, or divine Ground of Being. Meaning, purpose, and consciousness are rooted in a sacred cosmic order and relationship with the divine.',
    colorTheme: {
      accent: '#1E3A8A', // Blue-900 / Deep Lapis
      badgeBg: '#DBEAFE',
      border: '#3B82F6',
      text: '#1E40AF'
    },
    ontologicalStatusOfPurpose: 'Objective & Bestowed. Purpose is written into the foundation of creation by the divine architect.',
    epistemologyOfMeaning: 'Revelatory & Contemplative. Discerned through sacred scripture, rational reflection on the order of nature, and spiritual communion.',
    viewOnConsciousness: 'The divine spark or breath of life (Imago Dei). Consciousness is an intended gift enabling moral agency and relational love.',
    ethicalImperative: 'Covenantal Obedience & Love. Emulating divine justice, compassion, and participating in cosmic reconciliation.',
    responseToMortality: 'Transition rather than termination. Death is not the final word; earthly life is part of an eternal narrative.',
    keyThinkers: [
      {
        name: 'Thomas Aquinas',
        era: '1225–1274',
        famousWork: 'Summa Theologiae',
        quote: 'To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.'
      },
      {
        name: 'Søren Kierkegaard',
        era: '1813–1855',
        famousWork: 'Fear and Trembling (1843)',
        quote: 'Faith is the highest passion in a human being. Many in every generation may not reach it, but none goes further.'
      },
      {
        name: 'Rumi',
        era: '1207–1273',
        famousWork: 'The Masnavi',
        quote: 'You are not a drop in the ocean. You are the entire ocean in a drop.'
      }
    ],
    primaryStrengths: [
      'Provides an objective foundation for human dignity, justice, and moral duty.',
      'Furnishes profound communal solace and hope in the face of tragedy.',
      'Answers the Leibnizian question: existence springs from divine grace.'
    ],
    enduringCritiques: [
      'The Problem of Evil: The presence of gratuitous suffering challenges omnipotence/benevolence.',
      'Epistemic reliance on faith or contested historical revelations.',
      'Historical risk of dogmatism, sectarian conflict, and metaphysical rigidity.'
    ]
  },
  {
    id: 'nihilism',
    name: 'Nihilism',
    tagline: 'The Silence of the Void',
    essence: 'Life and the universe lack objective meaning, intrinsic purpose, or ultimate value. The cosmos is indifferent to human hopes, and all teleological narratives are comforting anthropocentric myths.',
    colorTheme: {
      accent: '#292524', // Stone-800 / Deep Charcoal
      badgeBg: '#E7E5E4',
      border: '#78716C',
      text: '#1C1917'
    },
    ontologicalStatusOfPurpose: 'Non-Existent / Illusory. Teleology is a cognitive artifact of pattern-seeking primates.',
    epistemologyOfMeaning: 'Critical Deconstruction. Exposes the historical, psychological, and physiological roots of value systems.',
    viewOnConsciousness: 'An evolutionary byproduct. A localized biological complexity that produces subjective qualia without cosmic resonance.',
    ethicalImperative: 'Active Nihilism (Nietzsche) to overcome illusions, or Pessimistic Resignation (Cioran/Schopenhauer).',
    responseToMortality: 'Permanent cessation. The state after death is identical to the unremembered void before birth.',
    keyThinkers: [
      {
        name: 'Friedrich Nietzsche',
        era: '1844–1900',
        famousWork: 'Thus Spoke Zarathustra (1883)',
        quote: 'He who has a why to live can bear almost any how. Nihilism stands at the door; whence comes this uncanniest of all guests?'
      },
      {
        name: 'Emil Cioran',
        era: '1911–1995',
        famousWork: 'The Trouble with Being Born (1973)',
        quote: 'It is not worth the bother of killing yourself, since you always kill yourself too late.'
      },
      {
        name: 'Ray Brassier',
        era: '1965–Present',
        famousWork: 'Nihil Unbound (2007)',
        quote: 'The earth will die and the cosmos will burn out. Philosophy should be the organ of extinction.'
      }
    ],
    primaryStrengths: [
      'Unflinching intellectual honesty and dismantling of self-serving delusions.',
      'Inoculates against moral fanaticism and celestial totalitarianism.',
      'Paves the way for creative revaluation (Nietzschean Amor Fati).'
    ],
    enduringCritiques: [
      'Risk of paralysis, despair, and psychological demoralization.',
      'Struggles to provide positive normative grounds to oppose cruelty or injustice.',
      'Self-referential paradox: making the truth claim that no truth claims hold value.'
    ]
  },
  {
    id: 'humanism',
    name: 'Humanism',
    tagline: 'Flourishing in the Here and Now',
    essence: 'Without needing supernatural sanctions or falling into despair, humanism locates purpose in reason, empathy, science, art, and the progressive enhancement of human and planetary flourishing.',
    colorTheme: {
      accent: '#14532D', // Green-900 / Forest Ink
      badgeBg: '#DCFCE7',
      border: '#22C55E',
      text: '#166534'
    },
    ontologicalStatusOfPurpose: 'Intersubjective & Evolutionary. Purpose is an emergent property of conscious social beings seeking good lives together.',
    epistemologyOfMeaning: 'Empirical & Rational. Grounded in critical inquiry, the scientific method, and democratic dialogue.',
    viewOnConsciousness: 'The universe’s rarest accomplishment: an organic system capable of comprehending its own origins.',
    ethicalImperative: 'The Golden Rule & Global Stewardship. Minimizing suffering, advancing justice, and expanding knowledge.',
    responseToMortality: 'The catalyst for legacy. Our brevity urges us to leave the world gentler and more enlightened for posterity.',
    keyThinkers: [
      {
        name: 'Bertrand Russell',
        era: '1872–1970',
        famousWork: 'The Conquest of Happiness (1930)',
        quote: 'The good life is one inspired by love and guided by knowledge.'
      },
      {
        name: 'John Dewey',
        era: '1859–1952',
        famousWork: 'A Common Faith (1934)',
        quote: 'The ideal is not a distant goal toward which we blindly grope; it is the active transformer of present experience.'
      },
      {
        name: 'Carl Sagan',
        era: '1934–1996',
        famousWork: 'Cosmos (1980)',
        quote: 'We are a way for the cosmos to know itself. In our obscurity, in all this vastness, there is no hint that help will come from elsewhere to save us from ourselves.'
      }
    ],
    primaryStrengths: [
      'Synthesizes scientific realism with deep compassion and optimistic ethics.',
      'Fosters democratic responsibility, human rights, and environmental stewardship.',
      'Demands practical action in the physical world rather than waiting for an afterlife.'
    ],
    enduringCritiques: [
      'Can be anthropocentric, prioritizing human desires over broader ecological reality.',
      'Relies heavily on optimism regarding human rationality despite historical atrocities.',
      'Cosmic finitude: does human flourishing matter if the universe ultimately succumbs to heat death?'
    ]
  }
];

export const THOUGHT_EXPERIMENTS: ThoughtExperiment[] = [
  {
    id: 'experience-machine',
    title: 'The Experience Machine',
    thinker: 'Robert Nozick (1974)',
    era: 'Contemporary Epistemology',
    premise: 'Suppose neuroscientists built a tank that could stimulate your brain to give you any pleasurable, meaningful experience you desire—writing a masterpiece, being loved, or curing disease. You would believe it is 100% real. Once plugged in, you cannot leave. Do you plug in for life?',
    interactiveScenario: {
      choiceA: {
        label: 'Remain in the Real World',
        positionAligned: 'Existentialism & Humanism',
        philosophicalImplication: 'You value authentic contact with reality, agency, and genuine impact over merely synthetic psychological states. Meaning requires real stakes.'
      },
      choiceB: {
        label: 'Plug into the Machine',
        positionAligned: 'Hedonic Utilitarianism / Skeptical Pragmatism',
        philosophicalImplication: 'You judge value by the qualitative texture of subjective experience. If lived perception is identical, the metaphysical substrate is secondary.'
      }
    },
    coreInsight: 'Most people refuse the machine, showing that we care about doing certain things and being a certain way, not just feeling as if we have done them.'
  },
  {
    id: 'myth-of-sisyphus',
    title: 'The Myth of Sisyphus',
    thinker: 'Albert Camus (1942)',
    era: 'Mid-20th Century Absurdism',
    premise: 'Condemned by the gods to ceaselessly roll a boulder up a mountain, only to watch it roll back down for eternity. Does Sisyphus despair, or does he conquer the gods by scorning his punishment?',
    interactiveScenario: {
      choiceA: {
        label: 'Sisyphus Conquers the Rock',
        positionAligned: 'Existential Absurdism',
        philosophicalImplication: 'By consciously embracing his fate without appealing to divine mercy or illusory hope, Sisyphus renders his struggle an act of supreme revolt.'
      },
      choiceB: {
        label: 'Sisyphus Suffers Cosmic Tragedy',
        positionAligned: 'Pessimistic Nihilism',
        philosophicalImplication: 'Repetitive exertion without progress or resolution is the definition of cruelty. Life is a cyclical treadmill of biological maintenance.'
      }
    },
    coreInsight: 'The Absurd is born of the collision between the human demand for meaning and the unreasonable silence of the world.'
  },
  {
    id: 'the-watchmaker',
    title: 'The Watchmaker & Teleology',
    thinker: 'William Paley (1802) vs. David Hume & Darwin',
    era: 'Enlightenment & Natural Theology',
    premise: 'In crossing a heath, you strike your foot against a stone, and think little of it. But if you find a pocket watch upon the ground, its intricate gears compel you to deduce an intelligent maker. Is the living cell or conscious eye a watch or a stone?',
    interactiveScenario: {
      choiceA: {
        label: 'Nature is a Watch (Design)',
        positionAligned: 'Theism & Teleology',
        philosophicalImplication: 'The extraordinary mathematical elegance and fine-tuning of natural constants point toward a transcendent Mind.'
      },
      choiceB: {
        label: 'Nature is an Unplanned Process (Evolution)',
        positionAligned: 'Humanism & Scientific Naturalism',
        philosophicalImplication: 'Complex order emerges naturally from simple rules through natural selection over deep time without forethought or intent.'
      }
    },
    coreInsight: 'Tests whether order implies purpose, or whether order can emerge spontaneously from mechanical constraints.'
  }
];

export const COMPASS_QUESTIONS: CompassQuestion[] = [
  {
    id: 'q1-origin-of-meaning',
    category: 'Ontology of Meaning',
    prompt: 'Where does the primary value or significance of a human life originate?',
    subtext: 'Consider what gives your daily pursuits their ultimate weight.',
    options: [
      {
        id: 'opt-existentialism',
        label: 'Forged from within: I author my own values through conscious choices.',
        philosophicalCamp: 'existentialism',
        explanation: 'Reflects the existential stance that human existence precedes any predefined essence.'
      },
      {
        id: 'opt-theism',
        label: 'Bestowed from above: Grounded in a transcendent, divine purpose for creation.',
        philosophicalCamp: 'theism',
        explanation: 'Reflects the theistic stance that meaning is rooted in divine order and eternal goodness.'
      },
      {
        id: 'opt-nihilism',
        label: 'Nowhere: Ultimate value is an illusion projected onto an indifferent universe.',
        philosophicalCamp: 'nihilism',
        explanation: 'Reflects the nihilistic diagnosis that cosmic purpose is an anthropomorphic myth.'
      },
      {
        id: 'opt-humanism',
        label: 'Cultivated together: Intersubjectively created through reason, art, and empathy.',
        philosophicalCamp: 'humanism',
        explanation: 'Reflects the humanist commitment to secular flourishing and shared solidarity.'
      }
    ]
  },
  {
    id: 'q2-nature-of-consciousness',
    category: 'Philosophy of Mind',
    prompt: 'How do you understand your inner subjective experience (consciousness)?',
    subtext: 'The mystery of the inner observer looking out at the cosmos.',
    options: [
      {
        id: 'opt-c-existentialism',
        label: 'The clearing of radical freedom: An active awareness that cannot be reduced to clockwork.',
        philosophicalCamp: 'existentialism',
        explanation: 'Consciousness as transcendence—the ability to say no to given facticity.'
      },
      {
        id: 'opt-c-theism',
        label: 'A sacred spark: A gift enabling moral discernment and connection to the divine.',
        philosophicalCamp: 'theism',
        explanation: 'Consciousness as reflective of a higher metaphysical origin.'
      },
      {
        id: 'opt-c-nihilism',
        label: 'A biological accident: An ephemeral neural mechanism with no cosmic destiny.',
        philosophicalCamp: 'nihilism',
        explanation: 'Consciousness as an evolutionary quirk that generates unnecessary existential suffering.'
      },
      {
        id: 'opt-c-humanism',
        label: 'The universe knowing itself: A wondrous evolutionary emergence to be cherished.',
        philosophicalCamp: 'humanism',
        explanation: 'Consciousness as humanity’s greatest responsibility to illuminate reality.'
      }
    ]
  },
  {
    id: 'q3-cosmic-silence',
    category: 'The Absurd & Cosmic Scale',
    prompt: 'When you gaze at the night sky or consider the heat death of the universe, what is your intuition?',
    subtext: 'How you reconcile the human heart with astronomical silence.',
    options: [
      {
        id: 'opt-s-existentialism',
        label: 'The silence liberates me: Because the universe is silent, I am utterly free to define my worth.',
        philosophicalCamp: 'existentialism',
        explanation: 'Camusian defiance: confronting the silent void with dignified personal creation.'
      },
      {
        id: 'opt-s-theism',
        label: 'The cosmos is a temple: Physical vastness reflects the grandeur of its transcendent Creator.',
        philosophicalCamp: 'theism',
        explanation: 'Theism views cosmic scale as a testament to divine majesty, not human irrelevance.'
      },
      {
        id: 'opt-s-nihilism',
        label: 'Uncompromising bleakness: It proves our total cosmic insignificance and inevitable erasure.',
        philosophicalCamp: 'nihilism',
        explanation: 'Cosmic nihilism: all achievements will be consumed by entropy.'
      },
      {
        id: 'opt-s-humanism',
        label: 'The Pale Blue Dot: Our fragility makes every ounce of human kindness more vital, not less.',
        philosophicalCamp: 'humanism',
        explanation: 'Sagan’s insight: our isolation demands that we cherish our only planetary home.'
      }
    ]
  },
  {
    id: 'q4-suffering-mortality',
    category: 'Ethics & Finitude',
    prompt: 'What role do suffering and mortality play in the architecture of life?',
    subtext: 'The universal boundaries that shape every human life.',
    options: [
      {
        id: 'opt-m-existentialism',
        label: 'Death gives life its sharp deadline: Finitude makes authentic choice matter urgently.',
        philosophicalCamp: 'existentialism',
        explanation: 'Heidegger’s being-toward-death: mortality rescues life from trivial procrastination.'
      },
      {
        id: 'opt-m-theism',
        label: 'A crucible for soul-making: Part of a greater divine redemptive journey beyond this world.',
        philosophicalCamp: 'theism',
        explanation: 'Irenaean theodicy: trials nurture virtue, leading into eternal life.'
      },
      {
        id: 'opt-m-nihilism',
        label: 'Senseless biological friction: Pain has no redemptive purpose; death is simply nullity.',
        philosophicalCamp: 'nihilism',
        explanation: 'Refusal to sanctify suffering or imagine celestial compensation.'
      },
      {
        id: 'opt-m-humanism',
        label: 'The moral catalyst for solidarity: Shared vulnerability demands medical progress and compassion.',
        philosophicalCamp: 'humanism',
        explanation: 'Secular ethics: recognizing common mortality creates the universal duty of care.'
      }
    ]
  },
  {
    id: 'q5-epistemic-path',
    category: 'Discovery vs Invention',
    prompt: 'Can human beings truly discover their ultimate purpose?',
    subtext: 'Testing the hidden assumption that purpose is discoverable.',
    options: [
      {
        id: 'opt-e-existentialism',
        label: 'No: Because there is nothing to discover. Purpose must be invented through action.',
        philosophicalCamp: 'existentialism',
        explanation: 'Radical rejection of pre-existing templates.'
      },
      {
        id: 'opt-e-theism',
        label: 'Yes: Through prayer, contemplation, moral obedience, and divine revelation.',
        philosophicalCamp: 'theism',
        explanation: 'Affirms that purpose is real, transcendent, and accessible to faithful seekers.'
      },
      {
        id: 'opt-e-nihilism',
        label: 'No: The search is a fool’s errand chasing a mirage generated by primate brains.',
        philosophicalCamp: 'nihilism',
        explanation: 'Categorical denial of teleological reality.'
      },
      {
        id: 'opt-e-humanism',
        label: 'Partially: We uncover the conditions for human thriving through science and ethical dialogue.',
        philosophicalCamp: 'humanism',
        explanation: 'Pragmatic discovery of what helps conscious organisms flourish.'
      }
    ]
  }
];
