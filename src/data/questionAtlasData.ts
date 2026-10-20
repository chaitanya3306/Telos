export interface QuestionNode {
  id: string;
  canonicalText: string;
  category: 'ONTOLOGY' | 'TELEOLOGY' | 'CONSCIOUSNESS' | 'AGENCY' | 'EPISTEMOLOGY' | 'COSMOLOGY';
  interrogativeOperator: 'why' | 'what' | 'how' | 'can' | 'is' | 'should' | 'do';
  teleologicalDepth: number; // 0.0 (pure mechanism) to 1.0 (pure teleology)
  isCategoryMistakeCandidate: boolean;
  categoryMistakeExplanation?: string;
  summaryDescription: string;

  // Eight Dimensions (A-H)
  relatedQuestions: {
    text: string;
    relationship: 'PREREQUISITE' | 'CONCURRENT' | 'DOWNSTREAM';
    rationale: string;
  }[];

  sharedAssumptions: {
    id: string;
    proposition: string;
    type: 'TELEOLOGICAL' | 'EPISTEMOLOGICAL' | 'ONTOLOGICAL' | 'LINGUISTIC';
    implicitEnthymeme: string;
    consequenceIfAccepted: string;
    consequenceIfRejected: string;
    falsifiability: string;
  }[];

  neighboringQuestions: {
    text: string;
    shiftType: 'ENTITY_SHIFT' | 'OPERATOR_SHIFT' | 'ATTRACTOR_SHIFT';
    distanceDelta: number; // 0.1 to 0.9
    conceptualShift: string;
  }[];

  historicalVariations: {
    epoch: string;
    era: string;
    formulation: string;
    canonicalSource: string;
    paradigmNote: string;
  }[];

  philosophicalTraditions: {
    tradition: string;
    keyFigure: string;
    reconstructedProblem: string;
    epistemicLens: string;
  }[];

  scientificPerspectives: {
    discipline: string;
    framework: string;
    keyTheorist: string;
    empiricalExplanation: string;
  }[];

  rootQuestionCandidates: {
    rootId: string;
    rootQuestion: string;
    reductionChain: string[];
    explanatoryPower: number; // 0-100%
  }[];

  alternativeFramings: {
    framingType: 'EPISTEMIC_INVERSION' | 'PRAGMATIC_DEFLATION' | 'COMPUTATIONAL_CYBERNETIC';
    reframedText: string;
    epistemicShift: string;
  }[];
}

export interface RootKnot {
  id: string;
  title: string;
  question: string;
  domain: string;
  description: string;
  connectedSurfaceInquiriesCount: number;
  unresolvedAntinomy: string;
}

export const ROOT_KNOTS: RootKnot[] = [
  {
    id: 'root-order-entropy',
    title: 'The Order Knot',
    question: 'Why does self-organizing order emerge from thermodynamic chaos?',
    domain: 'Cosmology & Non-Equilibrium Thermodynamics',
    description: 'The tension between the Second Law of Thermodynamics (universal increase of entropy) and the local emergence of complex, persistent, self-replicating order.',
    connectedSurfaceInquiriesCount: 14,
    unresolvedAntinomy: 'Order is either a transient statistical fluctuation destined for cosmic erasure, or the universe possesses an inherent tendency toward dissipative complexity.'
  },
  {
    id: 'root-observer-reflexivity',
    title: 'The Reflexivity Knot',
    question: 'Can an emergent subsystem comprehend the macro-system that generated it?',
    domain: 'Philosophy of Mind & Epistemic Cybernetics',
    description: 'The measurement problem, the hard problem of consciousness, and Gödelian incompleteness: an observer composed of physical matter attempting to model the physics of matter.',
    connectedSurfaceInquiriesCount: 19,
    unresolvedAntinomy: 'Consciousness cannot step outside its own subjective qualia to verify mind-independent reality without using the very instrument under evaluation.'
  },
  {
    id: 'root-brute-contingency',
    title: 'The Contingency Knot',
    question: 'Why is there something rather than nothing?',
    domain: 'Fundamental Metaphysics & Modal Logic',
    description: 'The Leibnizian border between necessary existence and brute, ungrounded contingency. Does reality require a self-grounding principle, or is existence fundamentally without justification?',
    connectedSurfaceInquiriesCount: 12,
    unresolvedAntinomy: 'Any proposed reason for existence must itself either exist (begging the question) or not exist (lacking causal efficacy).'
  },
  {
    id: 'root-agency-determinism',
    title: 'The Agency Knot',
    question: 'Can causal closure coexist with genuine intentional authorship?',
    domain: 'Action Theory & Neurophysics',
    description: 'If physical systems are causally closed under mathematical laws, does conscious decision-making play a causal role, or is it an epiphenomenal illusion?',
    connectedSurfaceInquiriesCount: 16,
    unresolvedAntinomy: 'Either human choices are causally determined (denying moral desert), or they contain quantum indeterminacy (denying deliberate control).'
  },
  {
    id: 'root-value-normativity',
    title: 'The Normativity Knot',
    question: 'How can an "ought" emerge from an "is"?',
    domain: 'Meta-Ethics & Value Theory (Humean Is-Ought Problem)',
    description: 'Physical matter possesses mass, charge, and trajectory, but no intrinsic goodness, evil, significance, or purpose. From what source do values derive their binding force?',
    connectedSurfaceInquiriesCount: 15,
    unresolvedAntinomy: 'Values are either objective cosmic dictates (requiring mysterious non-physical facts) or subjective primate inventions (rendering them contingent and arbitrary).'
  },
  {
    id: 'root-finitude-continuation',
    title: 'The Finitude Knot',
    question: 'Does significance require permanence or does finitude create value?',
    domain: 'Phenomenology of Time & Existential Finitude',
    description: 'The confrontation between conscious beings aware of their mortal horizon and the cosmic scale that outlasts all trace of their actions.',
    connectedSurfaceInquiriesCount: 11,
    unresolvedAntinomy: 'If life lasts forever, choice loses irreversible stakes; if life ends permanently, all accomplishments are ultimately swallowed by heat death.'
  }
];

export const ATLAS_QUESTIONS: QuestionNode[] = [
  {
    id: 'why-do-humans-exist',
    canonicalText: 'Why do humans exist?',
    category: 'TELEOLOGY',
    interrogativeOperator: 'why',
    teleologicalDepth: 0.95,
    isCategoryMistakeCandidate: true,
    categoryMistakeExplanation: 'Applying the purposive question "Why?" (which functions inside conscious human agent choices) to biological evolution, which operates via blind reproductive selection without foresight.',
    summaryDescription: 'The quintessential teleological inquiry demanding justification for human consciousness within cosmic history.',
    relatedQuestions: [
      {
        text: 'What distinguishes biological persistence from inert physical matter?',
        relationship: 'PREREQUISITE',
        rationale: 'Before addressing why humans specifically exist, one must account for why living dissipative structures exist at all.'
      },
      {
        text: 'Is human consciousness an evolutionary spandrel or an adaptive driver?',
        relationship: 'CONCURRENT',
        rationale: 'Determines whether our reflective nature was actively selected for or is an accidental byproduct of neural complexity.'
      },
      {
        text: 'Does purpose exist outside the minds of conscious observers?',
        relationship: 'PREREQUISITE',
        rationale: 'Tests whether the question assumes an objective cosmic blueprint or an internal psychological projection.'
      }
    ],
    sharedAssumptions: [
      {
        id: 'asm-existential-teleology',
        proposition: 'Human existence is the kind of event that has an intended purpose.',
        type: 'TELEOLOGICAL',
        implicitEnthymeme: 'Assumes the universe operates under Aristotelian final causes rather than pure mechanistic causality.',
        consequenceIfAccepted: 'Human life becomes an assignment to be deciphered; deviation implies existential failure, sin, or misalignment.',
        consequenceIfRejected: 'Humanity has no pre-existing template; existence is brute facticity, liberating humans to author their own values.',
        falsifiability: 'Non-falsifiable through physical experiments; belongs to metaphysical commitment.'
      },
      {
        id: 'asm-species-essentialism',
        proposition: 'Homo sapiens constitutes a discrete, metaphysically privileged category in nature.',
        type: 'ONTOLOGICAL',
        implicitEnthymeme: 'Treats human biological classification as an absolute metaphysical boundary rather than a continuous evolutionary gradient.',
        consequenceIfAccepted: 'Justifies anthropocentric ethics and cosmic importance for the human species.',
        consequenceIfRejected: 'Humans are one branch of a four-billion-year-old unbroken continuum of self-replicating carbon polymers.',
        falsifiability: 'Refuted by evolutionary biology and comparative genomics.'
      },
      {
        id: 'asm-external-grounding',
        proposition: 'The justification for a system must reside outside that system.',
        type: 'EPISTEMOLOGICAL',
        implicitEnthymeme: 'Presumes an entity cannot be its own self-sufficient justification; requires a transcendent anchor.',
        consequenceIfAccepted: 'Demands a God, Cosmic Plan, or higher meta-level to ratify human worth.',
        consequenceIfRejected: 'Meaning can be intrinsic, intersubjective, and self-validating in the living moment.',
        falsifiability: 'Epistemological axiom susceptible to infinite regress.'
      }
    ],
    neighboringQuestions: [
      {
        text: 'Why does life exist?',
        shiftType: 'ENTITY_SHIFT',
        distanceDelta: 0.25,
        conceptualShift: 'Broadens the inquiry from anthropocentric sapience to general biological self-replication.'
      },
      {
        text: 'How did humans come to exist?',
        shiftType: 'OPERATOR_SHIFT',
        distanceDelta: 0.45,
        conceptualShift: 'Shifts from teleological justification ("Why") to mechanistic and evolutionary etiology ("How").'
      },
      {
        text: 'What are humans evolving toward?',
        shiftType: 'ATTRACTOR_SHIFT',
        distanceDelta: 0.35,
        conceptualShift: 'Shifts from historical origin (past causes) to future cybernetic and evolutionary attractors.'
      }
    ],
    historicalVariations: [
      {
        epoch: 'Bronze Age Mythic',
        era: 'c. 1750 BCE',
        formulation: 'From what primordial divine struggle were humans molded to relieve the gods of labor?',
        canonicalSource: 'Enûma Eliš (Babylonian Creation Myth)',
        paradigmNote: 'Humanity created as subservient physical custodians within a mythic divine conflict.'
      },
      {
        epoch: 'Classical Hellenic',
        era: 'c. 350 BCE',
        formulation: 'What is the telos and proper function (ergon) of the rational human being?',
        canonicalSource: 'Aristotle, Nicomachean Ethics & Physics',
        paradigmNote: 'Teleological essentialism: every natural substance possesses an inherent goal.'
      },
      {
        epoch: 'Scholastic Theological',
        era: 'c. 1270 CE',
        formulation: 'What is humanity’s beatific orientation within divine providence?',
        canonicalSource: 'Thomas Aquinas, Summa Theologiae',
        paradigmNote: 'Human existence is ordained by God to know, love, and enter eternal communion with the Divine.'
      },
      {
        epoch: 'Post-Darwinian Naturalist',
        era: 'c. 1871 CE',
        formulation: 'What selective ecological and social pressures conserved the human lineage?',
        canonicalSource: 'Charles Darwin, The Descent of Man',
        paradigmNote: 'Dissolves cosmic purpose into descent with modification and natural selection.'
      },
      {
        epoch: 'Post-Humanist / Cybernetic',
        era: 'c. 2026 CE',
        formulation: 'Are humans an intermediate biological substrate for digital and artificial intelligence?',
        canonicalSource: 'Contemporary Information Philosophy',
        paradigmNote: 'Frames humanity as a temporary phase in the universe’s computational evolution.'
      }
    ],
    philosophicalTraditions: [
      {
        tradition: 'Phenomenological Existentialism',
        keyFigure: 'Martin Heidegger / Jean-Paul Sartre',
        reconstructedProblem: 'The human is Dasein—the entity whose very being is in question for itself. Asking "Why" is the constitutive structure of human freedom.',
        epistemicLens: 'Existence precedes essence. There is no pre-given reason; the questioner must invent the answer through action.'
      },
      {
        tradition: 'Madhyamaka Buddhism',
        keyFigure: 'Nāgārjuna (c. 150–250 CE)',
        reconstructedProblem: 'Dissolves the inquiry through Śūnyatā (Emptiness). "Human" and "purpose" lack independent inherent existence (Svabhāva).',
        epistemicLens: 'The inquiry is an artifact of reification—projecting an ego onto interdependent, fleeting phenomena.'
      },
      {
        tradition: 'Linguistic / Analytic Philosophy',
        keyFigure: 'Ludwig Wittgenstein (1889–1951)',
        reconstructedProblem: 'Diagnoses the question as a misuse of grammar: applying "Why?" (valid inside everyday tasks) to the whole of existence where it lacks context.',
        epistemicLens: 'The riddle does not exist. If a question can be put at all, then it can also be answered; here grammar is idling.'
      }
    ],
    scientificPerspectives: [
      {
        discipline: 'Non-Equilibrium Thermodynamics',
        framework: 'Dissipative Structures & Entropy Acceleration',
        keyTheorist: 'Ilya Prigogine / Jeremy England',
        empiricalExplanation: 'Humans are self-organizing thermodynamic engines that dissipate chemical energy and accelerate the universe’s overall entropy production.'
      },
      {
        discipline: 'Evolutionary Biology',
        framework: 'Selfish Gene & Multilevel Selection',
        keyTheorist: 'W.D. Hamilton / Richard Dawkins',
        empiricalExplanation: 'Humans exist as transient somatic survival vehicles assembled by self-replicating genes to maximize reproductive fitness.'
      },
      {
        discipline: 'Cognitive Neurophysics',
        framework: 'Free Energy Principle & Predictive Processing',
        keyTheorist: 'Karl Friston',
        empiricalExplanation: 'Humans are active inference systems that continually minimize prediction errors (surprisal) to avoid physical dissolution.'
      }
    ],
    rootQuestionCandidates: [
      {
        rootId: 'root-order-entropy',
        rootQuestion: 'Why does self-organizing order emerge from thermodynamic chaos?',
        reductionChain: [
          'Why do humans exist?',
          'Why do complex living organisms persist?',
          'How does matter form dissipative structures far from equilibrium?',
          'Why does self-organizing order emerge from thermodynamic chaos?'
        ],
        explanatoryPower: 88
      },
      {
        rootId: 'root-observer-reflexivity',
        rootQuestion: 'Can an emergent subsystem comprehend the macro-system that generated it?',
        reductionChain: [
          'Why do humans exist?',
          'Why did reflective self-awareness evolve?',
          'Can an emergent subsystem comprehend the macro-system that generated it?'
        ],
        explanatoryPower: 76
      }
    ],
    alternativeFramings: [
      {
        framingType: 'EPISTEMIC_INVERSION',
        reframedText: 'Why does a primate brain have an intense cognitive drive to ask why it exists?',
        epistemicShift: 'Shifts attention from searching the cosmos for an answer to investigating our evolved psychological compulsion for narrative closure.'
      },
      {
        framingType: 'PRAGMATIC_DEFLATION',
        reframedText: 'What concrete empirical difference would it make to human actions if our existence had an objective cosmic purpose versus none?',
        epistemicShift: 'Demonstrates that ethical obligations to alleviate suffering remain identical regardless of metaphysical teleology.'
      },
      {
        framingType: 'COMPUTATIONAL_CYBERNETIC',
        reframedText: 'Is human culture a distributed computational algorithm compressing reality into symbolic models?',
        epistemicShift: 'Replaces romantic purpose with information theory and algorithmic complexity.'
      }
    ]
  },
  {
    id: 'what-is-consciousness',
    canonicalText: 'What is consciousness?',
    category: 'CONSCIOUSNESS',
    interrogativeOperator: 'what',
    teleologicalDepth: 0.3,
    isCategoryMistakeCandidate: false,
    summaryDescription: 'The hard problem of subjective qualia: how physical neurochemistry produces the first-person felt texture of experience.',
    relatedQuestions: [
      {
        text: 'Can physical brain states fully account for subjective qualia?',
        relationship: 'CONCURRENT',
        rationale: 'Directly addresses the explanatory gap between 3rd-person neural data and 1st-person feeling.'
      },
      {
        text: 'Does an organism without consciousness possess moral standing?',
        relationship: 'DOWNSTREAM',
        rationale: 'Consciousness is the primary foundation for sentience, suffering, and ethical concern.'
      },
      {
        text: 'Is consciousness fundamental or emergent?',
        relationship: 'PREREQUISITE',
        rationale: 'Dictates whether consciousness is a cosmic primitive (Panpsychism/Idealism) or complex biology (Physicalism).'
      }
    ],
    sharedAssumptions: [
      {
        id: 'asm-qualia-reality',
        proposition: 'Subjective qualitative experiences (qualia) are real phenomena rather than cognitive illusions.',
        type: 'ONTOLOGICAL',
        implicitEnthymeme: 'Assumes first-person introspective reports cannot be dismissed as mere user-illusion.',
        consequenceIfAccepted: 'Forces science to expand beyond physicalism or solve the Hard Problem.',
        consequenceIfRejected: 'Illusionism: consciousness is a user-interface trick played by the brain on itself.',
        falsifiability: 'Empirically contested between phenomenal realists and illusionists (Dennett, Frankish).'
      },
      {
        id: 'asm-brain-mind-dependence',
        proposition: 'Conscious states are directly correlated with and generated by neural substrates.',
        type: 'ONTOLOGICAL',
        implicitEnthymeme: 'Rejects Cartesian substance dualism in favor of embodied neurobiology.',
        consequenceIfAccepted: 'Altering or destroying neural tissues directly modifies or ends conscious experience.',
        consequenceIfRejected: 'Mind is non-local or transcendent (dualism, idealism, cosmopsychism).',
        falsifiability: 'Strongly corroborated by clinical pharmacology, neuroimaging, and brain lesion data.'
      }
    ],
    neighboringQuestions: [
      {
        text: 'Why does consciousness exist?',
        shiftType: 'OPERATOR_SHIFT',
        distanceDelta: 0.3,
        conceptualShift: 'Moves from descriptive definition ("What") to evolutionary function ("Why").'
      },
      {
        text: 'Can AI become conscious?',
        shiftType: 'ENTITY_SHIFT',
        distanceDelta: 0.35,
        conceptualShift: 'Tests whether consciousness depends on biological carbon or substrate-independent computation.'
      },
      {
        text: 'What makes something alive?',
        shiftType: 'ENTITY_SHIFT',
        distanceDelta: 0.4,
        conceptualShift: 'Distinguishes between biological animation/metabolism and subjective experience.'
      }
    ],
    historicalVariations: [
      {
        epoch: 'Vedic / Upanishadic',
        era: 'c. 800 BCE',
        formulation: 'What is the innermost Witness (Sakshi) that illuminates waking, dreaming, and deep sleep?',
        canonicalSource: 'Mandukya Upanishad',
        paradigmNote: 'Pure consciousness (Brahman/Atman) is fundamental, prior to mind and matter.'
      },
      {
        epoch: 'Cartesian Dualist',
        era: '1641 CE',
        formulation: 'How does the thinking, non-extended substance (res cogitans) interact with the physical body (res extensa)?',
        canonicalSource: 'René Descartes, Meditations on First Philosophy',
        paradigmNote: 'Absolute bifurcation between physical matter and mental spirit.'
      },
      {
        epoch: 'Contemporary Analytical',
        era: '1995 CE',
        formulation: 'Why is the performance of brain functions accompanied by an inner experienced life?',
        canonicalSource: 'David Chalmers, The Conscious Mind',
        paradigmNote: 'Formulates the Hard Problem of Consciousness distinct from easy functional problems.'
      }
    ],
    philosophicalTraditions: [
      {
        tradition: 'Illusionism / Eliminativism',
        keyFigure: 'Daniel Dennett / Keith Frankish',
        reconstructedProblem: 'The brain produces a rich schema of its own perceptual states; we do not have qualia, we only *believe* we have qualia.',
        epistemicLens: 'Introspection is an unreliable evolutionary user-interface, not a direct metaphysical pipe to truth.'
      },
      {
        tradition: 'Panpsychism',
        keyFigure: 'Philip Goff / Galen Strawson',
        reconstructedProblem: 'Physical science describes only what matter *does* (relational math), not what matter *is* intrinsically. Consciousness is the intrinsic nature of matter.',
        epistemicLens: 'Avoids the miraculous emergence of mind from mindless matter by placing proto-experience at the foundation.'
      }
    ],
    scientificPerspectives: [
      {
        discipline: 'Integrated Information Theory (IIT)',
        framework: 'Phi (Φ) Complexity Metric',
        keyTheorist: 'Giulio Tononi / Christof Koch',
        empiricalExplanation: 'Consciousness is an intrinsic, irreducible property of any physical system with high integrated cause-effect power (Φ).'
      },
      {
        discipline: 'Global Neuronal Workspace Theory (GNWT)',
        framework: 'Frontoparietal Broadcast Network',
        keyTheorist: 'Stanislas Dehaene / Jean-Pierre Changeux',
        empiricalExplanation: 'Consciousness corresponds to the global ignition and broadcasting of sensory representations across cortical workspace neurons.'
      }
    ],
    rootQuestionCandidates: [
      {
        rootId: 'root-observer-reflexivity',
        rootQuestion: 'Can an emergent subsystem comprehend the macro-system that generated it?',
        reductionChain: [
          'What is consciousness?',
          'How does physical substrate yield first-person subjective perspective?',
          'Can an emergent subsystem comprehend the macro-system that generated it?'
        ],
        explanatoryPower: 94
      }
    ],
    alternativeFramings: [
      {
        framingType: 'COMPUTATIONAL_CYBERNETIC',
        reframedText: 'How does a self-monitoring recurrent neural network compress high-bandwidth sensory telemetry into a coherent narrative dashboard?',
        epistemicShift: 'Demystifies subjective experience into functional self-modeling and resource allocation.'
      },
      {
        framingType: 'EPISTEMIC_INVERSION',
        reframedText: 'What would a universe look like if physical laws operated identically, but without any observer to perceive it?',
        epistemicShift: 'Probes whether the concept of an unobserved universe is intelligible or an ungrounded abstraction.'
      }
    ]
  },
  {
    id: 'do-we-have-free-will',
    canonicalText: 'Do we have free will?',
    category: 'AGENCY',
    interrogativeOperator: 'do',
    teleologicalDepth: 0.7,
    isCategoryMistakeCandidate: true,
    categoryMistakeExplanation: 'Conceiving "free will" as an uncaused cause operating outside physics, while simultaneously requiring reasons and deliberation (which are causal).',
    summaryDescription: 'The antinomy between deterministic physical causality, neurobiological readiness potentials, and the lived experience of intentional moral authorship.',
    relatedQuestions: [
      {
        text: 'Is the universe deterministically closed under mathematical laws?',
        relationship: 'PREREQUISITE',
        rationale: 'If every state is strictly determined by past state + laws, libertarian free will is physically impossible.'
      },
      {
        text: 'Does moral responsibility require libertarian free will or compatibilist autonomy?',
        relationship: 'DOWNSTREAM',
        rationale: 'Justice, punishment, and praise depend on whether agents could have chosen otherwise.'
      }
    ],
    sharedAssumptions: [
      {
        id: 'asm-uncaused-agency',
        proposition: 'An agent can originate an action without that action being wholly determined by prior physical states.',
        type: 'ONTOLOGICAL',
        implicitEnthymeme: 'Assumes the human self is an uncaused cause exempted from the universal causal web.',
        consequenceIfAccepted: 'Affirms libertarian agency and traditional retributive justice.',
        consequenceIfRejected: 'Hard Determinism: decisions are the necessary outcomes of genetics, environment, and physics.',
        falsifiability: 'Challenged by Benjamin Libet’s readiness potentials and fMRI decision-prediction experiments.'
      }
    ],
    neighboringQuestions: [
      {
        text: 'Can AI make autonomous moral decisions?',
        shiftType: 'ENTITY_SHIFT',
        distanceDelta: 0.35,
        conceptualShift: 'Applies questions of deterministic computation and agency to synthetic agents.'
      },
      {
        text: 'Why do humans experience the sensation of deciding?',
        shiftType: 'OPERATOR_SHIFT',
        distanceDelta: 0.4,
        conceptualShift: 'Explains the evolutionary psychology of feeling in control regardless of determinism.'
      }
    ],
    historicalVariations: [
      {
        epoch: 'Hellenistic Stoic',
        era: 'c. 100 CE',
        formulation: 'How can humans achieve virtue when all events are woven into cosmic fate (Logos)?',
        canonicalSource: 'Epictetus, Enchiridion',
        paradigmNote: 'Compatibilism: we cannot choose external events, only our internal judgment of them.'
      },
      {
        epoch: 'Enlightenment Spinozist',
        era: '1677 CE',
        formulation: 'Is human will merely a stone thrown through the air believing it flies by its own choice?',
        canonicalSource: 'Baruch Spinoza, Ethics',
        paradigmNote: 'Radical determinism: humans believe themselves free only because they are conscious of desires but ignorant of causes.'
      }
    ],
    philosophicalTraditions: [
      {
        tradition: 'Compatibilism / Soft Determinism',
        keyFigure: 'Daniel Dennett / Harry Frankfurt',
        reconstructedProblem: 'Free will does not mean defying physics; it means acting in alignment with higher-order desires without external coercion.',
        epistemicLens: 'Redefines freedom from magical uncaused choice to sophisticated biological self-regulation.'
      }
    ],
    scientificPerspectives: [
      {
        discipline: 'Behavioral Neurobiology',
        framework: 'Unconscious Readiness Potentials',
        keyTheorist: 'Robert Sapolsky / Benjamin Libet',
        empiricalExplanation: 'Neural circuits initiate motor actions hundreds of milliseconds before the conscious brain registers the "feeling of deciding".'
      }
    ],
    rootQuestionCandidates: [
      {
        rootId: 'root-agency-determinism',
        rootQuestion: 'Can causal closure coexist with genuine intentional authorship?',
        reductionChain: [
          'Do we have free will?',
          'Are conscious deliberations causally efficacious or epiphenomenal?',
          'Can causal closure coexist with genuine intentional authorship?'
        ],
        explanatoryPower: 92
      }
    ],
    alternativeFramings: [
      {
        framingType: 'PRAGMATIC_DEFLATION',
        reframedText: 'How would a legal and social system function if punishment was treated as quarantine and rehabilitation rather than moral retribution?',
        epistemicShift: 'Focuses on the societal utility of holding agents accountable without needing metaphysical free will.'
      }
    ]
  },
  {
    id: 'why-does-life-want-to-survive',
    canonicalText: 'Why does life want to survive?',
    category: 'TELEOLOGY',
    interrogativeOperator: 'why',
    teleologicalDepth: 0.85,
    isCategoryMistakeCandidate: true,
    categoryMistakeExplanation: 'Projecting human psychological desire ("want") onto a statistical tautology: chemical replicators that didn’t replicate no longer exist.',
    summaryDescription: 'Deconstructing the teleonomic illusion: how molecular persistence mimics intentional desire through evolutionary selection.',
    relatedQuestions: [
      {
        text: 'What makes something alive versus inert?',
        relationship: 'PREREQUISITE',
        rationale: 'Clarifies autopoiesis and boundary maintenance.'
      },
      {
        text: 'Is survival an intrinsic goal or an evolutionary sorting filter?',
        relationship: 'CONCURRENT',
        rationale: 'Exposes the anthropic selection filter of replicating systems.'
      }
    ],
    sharedAssumptions: [
      {
        id: 'asm-vital-conatus',
        proposition: 'Living matter possesses an intrinsic drive or will to persist (Spinozist Conatus).',
        type: 'TELEOLOGICAL',
        implicitEnthymeme: 'Treats natural selection’s aftermath as an active driving desire inside the organism.',
        consequenceIfAccepted: 'Life is seen as an intentional struggle against cosmic death.',
        consequenceIfRejected: 'Life is an automatic sorting algorithm; persistence is the passive result of stable configurations surviving.',
        falsifiability: 'Empirically resolved in molecular biology: molecules possess chemical affinities, not desires.'
      }
    ],
    neighboringQuestions: [
      {
        text: 'What makes something alive?',
        shiftType: 'OPERATOR_SHIFT',
        distanceDelta: 0.25,
        conceptualShift: 'Shifts from teleological drive to definitional boundaries.'
      },
      {
        text: 'Why do humans exist?',
        shiftType: 'ENTITY_SHIFT',
        distanceDelta: 0.35,
        conceptualShift: 'Narrows the lens from all organic matter to human sapience.'
      }
    ],
    historicalVariations: [
      {
        epoch: 'Spinozist Metaphysics',
        era: '1677 CE',
        formulation: 'Each thing, in so far as it is in itself, endeavors to persist in its own being.',
        canonicalSource: 'Baruch Spinoza, Ethics (Conatus)',
        paradigmNote: 'Metaphysical impulse toward preservation inherent in all modes of reality.'
      },
      {
        epoch: 'Modern Cybernetics & Autopoiesis',
        era: '1972 CE',
        formulation: 'How do living systems continuously regenerate their own organizational boundaries?',
        canonicalSource: 'Humberto Maturana & Francisco Varela, Autopoiesis and Cognition',
        paradigmNote: 'Defines life as self-producing chemical networks whose operation maintains their identity.'
      }
    ],
    philosophicalTraditions: [
      {
        tradition: 'Evolutionary Teleonomy',
        keyFigure: 'Ernst Mayr / Jacques Monod',
        reconstructedProblem: 'Life exhibits teleonomy (apparent purpose directed by a genetic program) without teleology (cosmic purpose).',
        epistemicLens: 'Natural selection replaces the conscious designer with a blind statistical ratchet.'
      }
    ],
    scientificPerspectives: [
      {
        discipline: 'Thermodynamics of Biogenesis',
        framework: 'Kinetic Stability vs Thermodynamic Stability',
        keyTheorist: 'Addy Pross',
        empiricalExplanation: 'Life operates under Dynamic Kinetic Stability: systems persist not by resting in thermodynamic equilibrium, but by consuming energy to duplicate faster than they degrade.'
      }
    ],
    rootQuestionCandidates: [
      {
        rootId: 'root-order-entropy',
        rootQuestion: 'Why does self-organizing order emerge from thermodynamic chaos?',
        reductionChain: [
          'Why does life want to survive?',
          'How does self-replication outpace entropy degradation?',
          'Why does self-organizing order emerge from thermodynamic chaos?'
        ],
        explanatoryPower: 91
      }
    ],
    alternativeFramings: [
      {
        framingType: 'PRAGMATIC_DEFLATION',
        reframedText: 'Any replicating pattern that failed to maintain its boundary ceased to exist; hence we only observe the patterns that persist.',
        epistemicShift: 'Replaces romantic "will to live" with anthropic survival filter.'
      }
    ]
  },
  {
    id: 'why-is-there-something-rather-than-nothing',
    canonicalText: 'Why is there something rather than nothing?',
    category: 'COSMOLOGY',
    interrogativeOperator: 'why',
    teleologicalDepth: 0.9,
    isCategoryMistakeCandidate: true,
    categoryMistakeExplanation: 'Demanding a causal explanation for existence itself, when "causation" is a relation that only exists between things that already exist.',
    summaryDescription: 'The primordial mystery of existence: whether reality is grounded in an uncaused Necessary Being or is an ungrounded brute fact.',
    relatedQuestions: [
      {
        text: 'Is "nothing" a physically possible state or a linguistic abstraction?',
        relationship: 'PREREQUISITE',
        rationale: 'Quantum vacuums are full of quantum fields; absolute philosophical nothingness may be an impossible fiction.'
      },
      {
        text: 'Does reality require an ultimate explanation?',
        relationship: 'CONCURRENT',
        rationale: 'Tests the Principle of Sufficient Reason (PSR).'
      }
    ],
    sharedAssumptions: [
      {
        id: 'asm-principle-sufficient-reason',
        proposition: 'Every contingent fact must have a sufficient reason why it is thus and not otherwise.',
        type: 'EPISTEMOLOGICAL',
        implicitEnthymeme: 'Assumes the universe is rationally intelligible to its roots.',
        consequenceIfAccepted: 'Forces an infinite regress, a circular loop, or a Necessary Being (God).',
        consequenceIfRejected: 'Brute fact: the universe simply is, without reason, ground, or justification.',
        falsifiability: 'Unprovable axiom; central battleground between rationalism and empiricism.'
      }
    ],
    neighboringQuestions: [
      {
        text: 'What is the universe expanding into?',
        shiftType: 'OPERATOR_SHIFT',
        distanceDelta: 0.5,
        conceptualShift: 'Category mistake assuming spacetime is inside another space.'
      },
      {
        text: 'Why do humans exist?',
        shiftType: 'ENTITY_SHIFT',
        distanceDelta: 0.6,
        conceptualShift: 'Zooms in from cosmic existence to localized biological awareness.'
      }
    ],
    historicalVariations: [
      {
        epoch: 'Enlightenment Metaphysics',
        era: '1714 CE',
        formulation: 'Why is there something rather than nothing? For nothing is simpler and easier than something.',
        canonicalSource: 'Gottfried Wilhelm Leibniz, Principles of Nature and Grace',
        paradigmNote: 'Formulates the question as the ultimate test of the Principle of Sufficient Reason.'
      },
      {
        epoch: '20th Century Analytic',
        era: '1948 CE',
        formulation: 'I should say that the universe is just there, and that’s all.',
        canonicalSource: 'Bertrand Russell (BBC Debate with Copleston)',
        paradigmNote: 'Asserts the universe as a brute, ungrounded fact.'
      }
    ],
    philosophicalTraditions: [
      {
        tradition: 'Classical Theism',
        keyFigure: 'Thomas Aquinas / Leibniz',
        reconstructedProblem: 'Contingent things cannot explain their own existence; there must exist a Necessary Being whose essence is existence.',
        epistemicLens: 'Metaphysical realism affirming the rational foundation of reality.'
      },
      {
        tradition: 'Epistemic Deflationism',
        keyFigure: 'Adolf Grünbaum / Lawrence Krauss',
        reconstructedProblem: '"Nothingness" is not a default baseline that requires an engine to overcome. Spontaneous quantum fluctuation is natural.',
        epistemicLens: 'Dissolves the mystery by questioning why we assume Nothing is simpler than Something.'
      }
    ],
    scientificPerspectives: [
      {
        discipline: 'Quantum Cosmology',
        framework: 'Zero-Energy Universe Hypothesis',
        keyTheorist: 'Edward Tryon / Alan Guth',
        empiricalExplanation: 'The positive energy of matter is exactly balanced by the negative gravitational potential energy; the total energy of the universe is zero.'
      }
    ],
    rootQuestionCandidates: [
      {
        rootId: 'root-brute-contingency',
        rootQuestion: 'Why is there something rather than nothing?',
        reductionChain: [
          'Why is there something rather than nothing?'
        ],
        explanatoryPower: 100
      }
    ],
    alternativeFramings: [
      {
        framingType: 'EPISTEMIC_INVERSION',
        reframedText: 'Why do human beings assume that "Nothing" is the default state of reality that requires an explanation to exist?',
        epistemicShift: 'Questions the unexamined assumption that non-existence is natural and existence is abnormal.'
      }
    ]
  },
  {
    id: 'can-ai-become-conscious',
    canonicalText: 'Can AI become conscious?',
    category: 'CONSCIOUSNESS',
    interrogativeOperator: 'can',
    teleologicalDepth: 0.2,
    isCategoryMistakeCandidate: false,
    summaryDescription: 'Testing substrate-independence: can algorithmic computation generate phenomenal experience or only functional mimicry?',
    relatedQuestions: [
      {
        text: 'What is consciousness?',
        relationship: 'PREREQUISITE',
        rationale: 'We cannot verify machine consciousness without a metric for biological consciousness.'
      },
      {
        text: 'Does intelligence imply sentience?',
        relationship: 'CONCURRENT',
        rationale: 'Decouples problem-solving computation from first-person subjective experience.'
      }
    ],
    sharedAssumptions: [
      {
        id: 'asm-computational-substrate-independence',
        proposition: 'Consciousness is a software property of information processing, independent of biological substrate.',
        type: 'ONTOLOGICAL',
        implicitEnthymeme: 'Assumes neurons do nothing computationally magical that silicon cannot replicate.',
        consequenceIfAccepted: 'Sufficiently complex neural networks will inevitably awaken into sentience.',
        consequenceIfRejected: 'Biological naturalism (Searle): biology has unique biochemical properties needed for feeling.',
        falsifiability: 'Testable through IIT phi metrics and behavioral/neuromorphic engineering.'
      }
    ],
    neighboringQuestions: [
      {
        text: 'What is consciousness?',
        shiftType: 'ENTITY_SHIFT',
        distanceDelta: 0.3,
        conceptualShift: 'Broadens from artificial systems to universal phenomenology.'
      },
      {
        text: 'Do we have free will?',
        shiftType: 'OPERATOR_SHIFT',
        distanceDelta: 0.45,
        conceptualShift: 'Compares machine determinism with human agency.'
      }
    ],
    historicalVariations: [
      {
        epoch: 'Early Computing Era',
        era: '1950 CE',
        formulation: 'Can machines think?',
        canonicalSource: 'Alan Turing, Computing Machinery and Intelligence',
        paradigmNote: 'Operationalized mind into the imitation game.'
      },
      {
        epoch: 'Chinese Room Debate',
        era: '1980 CE',
        formulation: 'Can syntactic symbol manipulation ever produce semantic understanding?',
        canonicalSource: 'John Searle, Minds, Brains, and Programs',
        paradigmNote: 'Argues syntax is not sufficient for semantics.'
      }
    ],
    philosophicalTraditions: [
      {
        tradition: 'Functionalism & Computational Theory of Mind',
        keyFigure: 'Hilary Putnam / Jerry Fodor',
        reconstructedProblem: 'Mental states are defined by their functional roles, not the hardware running them.',
        epistemicLens: 'If a machine performs identical internal causal transformations, it possesses the same mental state.'
      }
    ],
    scientificPerspectives: [
      {
        discipline: 'Embodied Cognitive Science',
        framework: 'Enactivism & Autopoietic Embodiment',
        keyTheorist: 'Evan Thompson / Francisco Varela',
        empiricalExplanation: 'Consciousness requires a living biological body in continuous metabolic homeostasis with an environment, which disembodied LLMs lack.'
      }
    ],
    rootQuestionCandidates: [
      {
        rootId: 'root-observer-reflexivity',
        rootQuestion: 'Can an emergent subsystem comprehend the macro-system that generated it?',
        reductionChain: [
          'Can AI become conscious?',
          'Can computation generate an internal observer?',
          'Can an emergent subsystem comprehend the macro-system that generated it?'
        ],
        explanatoryPower: 86
      }
    ],
    alternativeFramings: [
      {
        framingType: 'PRAGMATIC_DEFLATION',
        reframedText: 'If a machine convincingly claims it is suffering, what ethical precautions are required regardless of whether it "truly" feels?',
        epistemicShift: 'Replaces unverifiable metaphysical qualia with moral risk management.'
      }
    ]
  }
];
