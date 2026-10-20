export interface CivilizationExploration {
  civilization: string;
  era: string;
  focus: string;
  canonicalText: string;
}

export interface QuestionEvolutionStep {
  step: number;
  question: string;
  transitionRationale: string;
  subfield: string;
}

export interface SharedAssumptionItem {
  id: string;
  statement: string;
  category: 'Teleological' | 'Epistemological' | 'Ontological' | 'Axiological';
  whatIfTrue: string;
  whatIfFalse: string;
  implicitEnthymeme: string;
}

export interface PhilosophicalClusterItem {
  cluster: 'Existentialism' | 'Nihilism' | 'Humanism' | 'Theism' | 'Eastern Non-Dualism';
  tagline: string;
  stance: string;
  thinker: string;
  quote: string;
  color: string;
}

export interface InquiryNode {
  id: string;
  text: string;
  category: 'Consciousness' | 'Teleology' | 'Agency' | 'Existence' | 'Identity' | 'Cosmology';
  teleologicalDepth: number; // 0 to 1
  curiosityRating: number; // frequency index
  summary: string;

  // Section 1: Why This Question Matters
  whyItMatters: {
    whyHumansAskIt: string;
    largerQuestions: string[];
    civilizationsExplored: CivilizationExploration[];
    generatingAssumptions: string[];
  };

  // Section 2: Question Evolution
  evolutionChain: QuestionEvolutionStep[];

  // Section 3: Question Graph Links
  relatedQuestions: string[];
  sharedAssumptions: SharedAssumptionItem[];
  neighborQuestions: {
    text: string;
    shiftType: string;
    distance: number;
  }[];
  philosophicalClusters: PhilosophicalClusterItem[];

  // Section 4: Boundary Probe / Thought Experiment
  thoughtExperiment: {
    title: string;
    thinker: string;
    scenario: string;
    choiceA: { label: string; outcome: string };
    choiceB: { label: string; outcome: string };
    insight: string;
  };
}

export interface CuriosityGraphEdge {
  source: string;
  target: string;
  relationship: 'EVOLVES_INTO' | 'PRESUPPOSES' | 'NEIGHBORS' | 'TENSION_WITH';
  label: string;
}

export const CURIOSITY_INQUIRIES: InquiryNode[] = [
  {
    id: 'why-do-humans-exist',
    text: 'Why do humans exist?',
    category: 'Teleology',
    teleologicalDepth: 0.95,
    curiosityRating: 98,
    summary: 'The primary teleological demand asking whether human sapience is an intentional cosmic assignment or an unguided biological emergence.',
    whyItMatters: {
      whyHumansAskIt: 'Humans possess an evolved hyper-active agency detection module. We understand the actions of other humans through motives and reasons, and naturally project that same "Why" onto the universe itself.',
      largerQuestions: [
        'Does the universe have an inherent direction or target (Telos)?',
        'Can value exist in an indifferent physical universe?',
        'Is human consciousness an accidental byproduct or a cosmic observer?'
      ],
      civilizationsExplored: [
        {
          civilization: 'Ancient Mesopotamia',
          era: 'c. 1750 BCE',
          focus: 'Humanity created from clay and divine blood to carry the burdens of the pantheon.',
          canonicalText: 'Enûma Eliš'
        },
        {
          civilization: 'Classical Greece',
          era: 'c. 350 BCE',
          focus: 'The telos of the rational animal (zoon logon echon) achieving eudaimonia.',
          canonicalText: 'Aristotle, Nicomachean Ethics'
        },
        {
          civilization: 'Medieval Islamic Golden Age',
          era: 'c. 1000 CE',
          focus: 'The human intellect as the bridge between material creation and divine active intellect.',
          canonicalText: 'Ibn Sina (Avicenna), The Book of Healing'
        },
        {
          civilization: 'Modern European Enlightenment',
          era: '1871 CE',
          focus: 'Descent with modification: humans as an unbroken branch of primate biology.',
          canonicalText: 'Charles Darwin, The Descent of Man'
        }
      ],
      generatingAssumptions: [
        'Existence has an intrinsic purpose.',
        'Humanity constitutes a discrete, privileged category in nature.',
        'The justification for human life resides outside the organism itself.'
      ]
    },
    evolutionChain: [
      {
        step: 1,
        question: 'Why do humans exist?',
        transitionRationale: 'Initial existential demand for external justification.',
        subfield: 'Teleology'
      },
      {
        step: 2,
        question: 'Why does life want to survive?',
        transitionRationale: 'De-centering from human narcissism to general biological persistence.',
        subfield: 'Biophysics'
      },
      {
        step: 3,
        question: 'What is consciousness?',
        transitionRationale: 'Realizing that "purpose" only exists because an inner observer feels and values.',
        subfield: 'Phenomenology'
      },
      {
        step: 4,
        question: 'Why does matter model itself?',
        transitionRationale: 'The ultimate reduction: how inanimate physics generates self-reflexive mind.',
        subfield: 'Cybernetics'
      }
    ],
    relatedQuestions: [
      'What is consciousness?',
      'What is meaning?',
      'Why does life exist?',
      'Is existence purposeful?'
    ],
    sharedAssumptions: [
      {
        id: 'asm-purpose-exists',
        statement: 'Existence has a purpose.',
        category: 'Teleological',
        whatIfTrue: 'Humanity’s primary task is discovery and obedience to that overarching design; deviation is existential error.',
        whatIfFalse: 'Existence is brute facticity; humans are unmoored from cosmic surveillance and utterly free to author their own values.',
        implicitEnthymeme: 'Treats the universe like an intentional artifact rather than a neutral physical process.'
      },
      {
        id: 'asm-purpose-knowable',
        statement: 'Purpose can be known.',
        category: 'Epistemological',
        whatIfTrue: 'Reason, contemplation, or revelation can decipher cosmic intent.',
        whatIfFalse: 'Even if an objective purpose exists, human cognitive faculties are too bounded to ever confirm it.',
        implicitEnthymeme: 'Presumes an epistemic correspondence between human cognition and cosmic truth.'
      }
    ],
    neighborQuestions: [
      {
        text: 'Do we have free will?',
        shiftType: 'Agency Shift',
        distance: 0.3
      },
      {
        text: 'What is identity?',
        shiftType: 'Subject Shift',
        distance: 0.4
      },
      {
        text: 'What is consciousness?',
        shiftType: 'Substrate Shift',
        distance: 0.25
      }
    ],
    philosophicalClusters: [
      {
        cluster: 'Existentialism',
        tagline: 'Existence Precedes Essence',
        stance: 'Humans are thrown into existence with no blueprint. We first exist, encounter ourselves, and only then author what we are through choice.',
        thinker: 'Jean-Paul Sartre',
        quote: 'Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.',
        color: '#b45309'
      },
      {
        cluster: 'Theism',
        tagline: 'Grounded in the Sacred',
        stance: 'Human existence is the intentional creation of a transcendent Ground of Being; purpose is written into creation and discovered through alignment.',
        thinker: 'Thomas Aquinas',
        quote: 'Grace does not destroy nature, but perfects it.',
        color: '#1e3a8a'
      },
      {
        cluster: 'Nihilism',
        tagline: 'The Cosmic Silence',
        stance: 'The universe is deaf to human yearnings. Purpose is an evolutionary fiction projected by primates onto blind, uncaring physics.',
        thinker: 'Friedrich Nietzsche',
        quote: 'Nihilism stands at the door: whence comes this uncanniest of all guests?',
        color: '#292524'
      },
      {
        cluster: 'Humanism',
        tagline: 'Terrestrial Flourishing',
        stance: 'Without supernatural backing or falling into despair, purpose is intersubjectively woven through reason, science, art, and alleviating suffering.',
        thinker: 'Carl Sagan',
        quote: 'We are a way for the cosmos to know itself.',
        color: '#14532D'
      },
      {
        cluster: 'Eastern Non-Dualism',
        tagline: 'The Dissolution of the Seeker',
        stance: 'The question "Why do I exist?" presupposes an independent ego. When the illusion of separateness dissolves, the question disappears into pure awareness.',
        thinker: 'Nāgārjuna / Adi Shankara',
        quote: 'There is no coming, no going; no destruction, no persistence; no oneness, no manyness.',
        color: '#701a75'
      }
    ],
    thoughtExperiment: {
      title: 'The Cosmic Horizon & The Pale Blue Dot',
      thinker: 'Carl Sagan (1994)',
      scenario: 'Look upon the faint pixel of Earth photographed from the edge of the solar system. All of human history, triumph, and tragedy occurred on that mote of dust. Does our tiny scale render human purpose ridiculous, or does it make our kindness the only sacred thing in the void?',
      choiceA: {
        label: 'Cosmic Insignificance (Nihilism)',
        outcome: 'Recognizes that physical vastness dwarfs human history into statistical noise.'
      },
      choiceB: {
        label: 'Terrestrial Sanctity (Humanism)',
        outcome: 'Concludes that precisely because the cosmos is silent, human love and wisdom are infinitely precious.'
      },
      insight: 'Scale does not equal significance. Significance is generated by conscious observers, not light-years.'
    }
  },
  {
    id: 'what-is-consciousness',
    text: 'What is consciousness?',
    category: 'Consciousness',
    teleologicalDepth: 0.3,
    curiosityRating: 99,
    summary: 'The mystery of subjective, first-person qualitative experience: why it feels like something from the inside to be an embodied organism.',
    whyItMatters: {
      whyHumansAskIt: 'It is the only phenomenon we know directly and indubitably (Descartes), yet the one thing physical science cannot measure with instruments from the outside.',
      largerQuestions: [
        'Can physical arrangements of matter generate subjective feeling (The Hard Problem)?',
        'Is consciousness fundamental to reality (Panpsychism/Idealism) or a biological illusion?',
        'Does consciousness provide the threshold for moral consideration?'
      ],
      civilizationsExplored: [
        {
          civilization: 'Ancient India',
          era: 'c. 800 BCE',
          focus: 'The witness consciousness (Sakshi) that remains aware during waking, dreaming, and deep sleep.',
          canonicalText: 'Mandukya Upanishad'
        },
        {
          civilization: 'Cartesian Europe',
          era: '1641 CE',
          focus: 'The thinking substance (res cogitans) distinct from extended physical matter.',
          canonicalText: 'René Descartes, Meditations'
        },
        {
          civilization: 'Contemporary Neurophilosophy',
          era: '1995 CE',
          focus: 'The explanatory gap between electrochemical neural firings and the redness of red.',
          canonicalText: 'David Chalmers, The Conscious Mind'
        }
      ],
      generatingAssumptions: [
        'First-person subjective experience is real rather than a cognitive hallucination.',
        'Brain states and mental states are connected through a causal or identity relationship.'
      ]
    },
    evolutionChain: [
      {
        step: 1,
        question: 'What is consciousness?',
        transitionRationale: 'Inquiring into the sheer existence of inner qualitative experience.',
        subfield: 'Philosophy of Mind'
      },
      {
        step: 2,
        question: 'What is the self?',
        transitionRationale: 'Recognizing that consciousness appears anchored to a localized ego/observer.',
        subfield: 'Phenomenology'
      },
      {
        step: 3,
        question: 'What is identity across time?',
        transitionRationale: 'Questioning what keeps "me" the same person across changing thoughts and cells.',
        subfield: 'Metaphysics'
      },
      {
        step: 4,
        question: 'What survives change and death?',
        transitionRationale: 'The ultimate boundary question confronting conscious mortality.',
        subfield: 'Eschatology'
      }
    ],
    relatedQuestions: [
      'Can AI become conscious?',
      'Do we have free will?',
      'What is identity?',
      'Why is there experience at all?'
    ],
    sharedAssumptions: [
      {
        id: 'asm-qualia-real',
        statement: 'Qualia (the felt texture of experience) are real.',
        category: 'Ontological',
        whatIfTrue: 'Science must expand its ontology to explain how subjective experience fits into the physical world.',
        whatIfFalse: 'Illusionism: the brain merely represents itself as having inner feelings; qualia are a cognitive user-illusion.',
        implicitEnthymeme: 'Assumes first-person introspective reports cannot be dismissed as errors.'
      }
    ],
    neighborQuestions: [
      {
        text: 'Can AI become conscious?',
        shiftType: 'Substrate Shift',
        distance: 0.2
      },
      {
        text: 'What is identity?',
        shiftType: 'Continuity Shift',
        distance: 0.35
      },
      {
        text: 'Do we have free will?',
        shiftType: 'Agency Shift',
        distance: 0.3
      }
    ],
    philosophicalClusters: [
      {
        cluster: 'Existentialism',
        tagline: 'The Void of Freedom',
        stance: 'Consciousness is a clearing of nothingness—the power to negate brute facticity and choose what does not yet exist.',
        thinker: 'Jean-Paul Sartre',
        quote: 'Consciousness is a being such that in its being, its being is in question.',
        color: '#b45309'
      },
      {
        cluster: 'Theism',
        tagline: 'The Divine Spark',
        stance: 'Consciousness is the breath of the Divine (Imago Dei), an intended gift enabling communion and moral responsibility.',
        thinker: 'Augustine of Hippo',
        quote: 'Do not go outside yourself; return into yourself. In the inner person dwells the truth.',
        color: '#1e3a8a'
      },
      {
        cluster: 'Nihilism',
        tagline: 'Evolutionary Hallucination',
        stance: 'Consciousness is an accidental neural feedback loop that cursed an ape with tragic existential dread.',
        thinker: 'Emil Cioran',
        quote: 'Consciousness is nature\'s nightmare.',
        color: '#292524'
      },
      {
        cluster: 'Humanism',
        tagline: 'The Torch of Reason & Empathy',
        stance: 'Consciousness is the universe’s most precious emergent achievement, the sole ground of compassion and culture.',
        thinker: 'Bertrand Russell',
        quote: 'The universe is vast, and men are but tiny specks on an insignificant planet. But the mind comprehends it all.',
        color: '#14532D'
      },
      {
        cluster: 'Eastern Non-Dualism',
        tagline: 'Pure Non-Dual Awareness',
        stance: 'Consciousness is not produced by the brain; the brain and world arise as transient appearances within universal consciousness.',
        thinker: 'Ramana Maharshi',
        quote: 'Your own Self-realization is the greatest service you can render the world.',
        color: '#701a75'
      }
    ],
    thoughtExperiment: {
      title: 'The Experience Machine',
      thinker: 'Robert Nozick (1974)',
      scenario: 'Neuroscientists offer to connect your brain to a tank simulating a perfect life where every wish is granted and you believe it is 100% real. You will never wake up. Do you plug in?',
      choiceA: {
        label: 'Remain in the Real World',
        outcome: 'Affirms that genuine contact with reality and authentic agency matter more than synthesized feelings.'
      },
      choiceB: {
        label: 'Plug into the Machine',
        outcome: 'Judges that value is determined by the qualitative texture of subjective experience, regardless of substrate.'
      },
      insight: 'Most humans refuse the machine, demonstrating that we desire to *be* and *do*, not merely to feel.'
    }
  },
  {
    id: 'do-we-have-free-will',
    text: 'Do we have free will?',
    category: 'Agency',
    teleologicalDepth: 0.7,
    curiosityRating: 95,
    summary: 'The conflict between deterministic physical laws, neurobiological causation, and the subjective conviction of moral authorship.',
    whyItMatters: {
      whyHumansAskIt: 'Every legal system, moral judgment, feeling of guilt, and concept of personal achievement relies on the assumption that an agent could have chosen differently.',
      largerQuestions: [
        'Is the universe causally closed under deterministic mathematical laws?',
        'Does quantum indeterminacy allow for human agency, or merely randomness?',
        'Can compatibilism rescue moral responsibility without magical uncaused causes?'
      ],
      civilizationsExplored: [
        {
          civilization: 'Hellenistic Rome',
          era: 'c. 100 CE',
          focus: 'Distinguishing between external fate (Heimarmene) and what is within our control (Ep\' hemin).',
          canonicalText: 'Epictetus, Discourses'
        },
        {
          civilization: 'Reformation Europe',
          era: '1525 CE',
          focus: 'The bondage of the human will vs. divine sovereignty.',
          canonicalText: 'Martin Luther & Erasmus'
        },
        {
          civilization: 'Modern Neuroscience',
          era: '1983 CE',
          focus: 'Readiness potentials occurring in the motor cortex before conscious intention.',
          canonicalText: 'Benjamin Libet Experiments'
        }
      ],
      generatingAssumptions: [
        'An agent can originate an action without that action being strictly determined by prior physical causes.',
        'Moral culpability requires alternative possibilities.'
      ]
    },
    evolutionChain: [
      {
        step: 1,
        question: 'Do we have free will?',
        transitionRationale: 'Initial wonder over whether choices are genuinely undetermined.',
        subfield: 'Action Theory'
      },
      {
        step: 2,
        question: 'What is the self that chooses?',
        transitionRationale: 'Examining what entity is supposed to be exercising this will.',
        subfield: 'Philosophy of Mind'
      },
      {
        step: 3,
        question: 'How does causation work at the boundary of mind and matter?',
        transitionRationale: 'Moving from moral anxiety to physical and quantum metaphysics.',
        subfield: 'Ontology'
      },
      {
        step: 4,
        question: 'How should society structure justice without retributive blame?',
        transitionRationale: 'Translating deterministic metaphysics into compassionate institutions.',
        subfield: 'Applied Ethics'
      }
    ],
    relatedQuestions: [
      'What is consciousness?',
      'Can AI make moral choices?',
      'Is morality objective?',
      'What is identity?'
    ],
    sharedAssumptions: [
      {
        id: 'asm-uncaused-agency',
        statement: 'Human will can act as an uncaused cause.',
        category: 'Ontological',
        whatIfTrue: 'Affirms libertarian free will, praise, blame, and retributive justice.',
        whatIfFalse: 'Hard determinism: human choices are the inevitable consequence of biology and physics, urging restorative rather than punitive justice.',
        implicitEnthymeme: 'Exempts human decision-making from the universal principle of causality.'
      }
    ],
    neighborQuestions: [
      {
        text: 'What is consciousness?',
        shiftType: 'Substrate Shift',
        distance: 0.3
      },
      {
        text: 'Why do humans exist?',
        shiftType: 'Teleological Shift',
        distance: 0.35
      },
      {
        text: 'Can AI make moral choices?',
        shiftType: 'Entity Shift',
        distance: 0.4
      }
    ],
    philosophicalClusters: [
      {
        cluster: 'Existentialism',
        tagline: 'Radical Condemnation to Freedom',
        stance: 'You cannot evade freedom. Even choosing not to choose is a choice. Any attempt to blame genetics or circumstance is "Bad Faith".',
        thinker: 'Jean-Paul Sartre',
        quote: 'There is no determinism; man is free, man is freedom.',
        color: '#b45309'
      },
      {
        cluster: 'Theism',
        tagline: 'Moral Agency Under Divine Order',
        stance: 'God bestowed free will so that love and virtue could be authentic choices rather than programmed mechanisms.',
        thinker: 'C.S. Lewis',
        quote: 'Free will, though it makes evil possible, is also the only thing that makes possible any love or goodness or joy.',
        color: '#1e3a8a'
      },
      {
        cluster: 'Nihilism',
        tagline: 'Deterministic Clockwork',
        stance: 'The feeling of choosing is a post-hoc biological rationalization. All events are linked in an unyielding domino chain.',
        thinker: 'Baruch Spinoza',
        quote: 'Men believe themselves free because they are conscious of their volitions, but ignorant of the causes by which they are determined.',
        color: '#292524'
      },
      {
        cluster: 'Humanism',
        tagline: 'Compatibilist Autonomy',
        stance: 'Freedom is not defying physics; it is the reflective capacity to act in harmony with reasons, empathy, and social covenants.',
        thinker: 'Daniel Dennett',
        quote: 'Freedom evolves: our brains are natural reasoning engines capable of anticipating the future and changing our trajectories.',
        color: '#14532D'
      },
      {
        cluster: 'Eastern Non-Dualism',
        tagline: 'The Witness of Actions',
        stance: 'Actions happen through the interplay of nature\'s gunas. The ego claims "I am the doer", but the true Self is the unattached witness.',
        thinker: 'Bhagavad Gita (Krishna)',
        quote: 'All actions are accomplished by the gunas of nature. He whose mind is deluded by ego thinks: "I am the doer."',
        color: '#701a75'
      }
    ],
    thoughtExperiment: {
      title: 'Laplace\'s Demon',
      thinker: 'Pierre-Simon Laplace (1814)',
      scenario: 'An intellect knowing the exact position and velocity of every atom at this instant, and the laws of physics, could calculate the entire future with zero error. Is tomorrow already written in the positions of today\'s atoms?',
      choiceA: {
        label: 'The Future is Deterministically Fixed',
        outcome: 'Embraces classical physical closure; human agency is subjective perspective within the causal stream.'
      },
      choiceB: {
        label: 'The Future is Truly Open',
        outcome: 'Appeals to quantum indeterminacy, emergence, or genuine metaphysical openness.'
      },
      insight: 'Even if the universe is deterministic, it is computationally irreducible: the only way to know the future is to live it.'
    }
  },
  {
    id: 'why-is-there-something-rather-than-nothing',
    text: 'Why is there something rather than nothing?',
    category: 'Existence',
    teleologicalDepth: 0.9,
    curiosityRating: 97,
    summary: 'The ultimate boundary of ontology: why reality exists at all rather than complete non-being.',
    whyItMatters: {
      whyHumansAskIt: 'It marks the absolute horizon of physics and metaphysics. Any scientific law we discover (gravity, quantum fields) already presupposes that something exists.',
      largerQuestions: [
        'Does existence require an external necessary ground or is it a brute fact?',
        'Is "nothing" a physically possible state or a linguistic confusion?',
        'Can quantum fluctuations out of a vacuum solve the question, or do quantum laws constitute "something"?'
      ],
      civilizationsExplored: [
        {
          civilization: 'Ancient Greece',
          era: 'c. 500 BCE',
          focus: 'Nothing can come from nothing (Ex nihilo nihil fit).',
          canonicalText: 'Parmenides'
        },
        {
          civilization: 'Enlightenment Europe',
          era: '1714 CE',
          focus: 'The Principle of Sufficient Reason: why something is simpler than nothing.',
          canonicalText: 'G.W. Leibniz'
        },
        {
          civilization: 'Modern Quantum Cosmology',
          era: '1973 CE',
          focus: 'The universe as a vacuum fluctuation with zero net energy.',
          canonicalText: 'Edward Tryon'
        }
      ],
      generatingAssumptions: [
        'Every contingent reality must have a sufficient explanation for its existence.',
        'Nothingness is a natural baseline that requires an engine to overcome.'
      ]
    },
    evolutionChain: [
      {
        step: 1,
        question: 'Why is there something rather than nothing?',
        transitionRationale: 'The primal confrontation with existence as such.',
        subfield: 'Fundamental Metaphysics'
      },
      {
        step: 2,
        question: 'What is the nature of nothingness?',
        transitionRationale: 'Interrogating whether non-being is even coherent.',
        subfield: 'Modal Logic'
      },
      {
        step: 3,
        question: 'Why does reality exhibit mathematical order rather than chaos?',
        transitionRationale: 'Moving from mere existence to intelligible structure.',
        subfield: 'Philosophy of Mathematics'
      },
      {
        step: 4,
        question: 'Can the universe be its own self-grounding cause?',
        transitionRationale: 'Investigating non-linear and self-referential cosmological models.',
        subfield: 'Cosmology'
      }
    ],
    relatedQuestions: [
      'Why do humans exist?',
      'What is consciousness?',
      'Why does order emerge?',
      'What is time?'
    ],
    sharedAssumptions: [
      {
        id: 'asm-psr',
        statement: 'Every fact has a reason.',
        category: 'Epistemological',
        whatIfTrue: 'Demands an ultimate Uncaused First Cause or self-explanatory principle.',
        whatIfFalse: 'Brute fact: existence simply is, with no why, no reason, and no author.',
        implicitEnthymeme: 'Assumes the human desire for reasons is a universal cosmic property.'
      }
    ],
    neighborQuestions: [
      {
        text: 'Why do humans exist?',
        shiftType: 'Entity Zoom',
        distance: 0.5
      },
      {
        text: 'What is consciousness?',
        shiftType: 'Witness Shift',
        distance: 0.4
      }
    ],
    philosophicalClusters: [
      {
        cluster: 'Theism',
        tagline: 'The Necessary Creator',
        stance: 'The physical universe is contingent; it cannot explain itself. It is continuously upheld by a Necessary Being whose essence is existence.',
        thinker: 'Thomas Aquinas',
        quote: 'It is necessary to arrive at a first cause, to which everyone gives the name of God.',
        color: '#1e3a8a'
      },
      {
        cluster: 'Nihilism',
        tagline: 'Brute Contingency',
        stance: 'The universe is just there, an ungrounded brute fact without reason, redemption, or justification.',
        thinker: 'Bertrand Russell',
        quote: 'I should say that the universe is just there, and that\'s all.',
        color: '#292524'
      },
      {
        cluster: 'Existentialism',
        tagline: 'The Gratuitous "De Trop"',
        stance: 'Existence precedes all reasons. Things are gratuitous, superfluous, just there without necessity.',
        thinker: 'Jean-Paul Sartre',
        quote: 'Every existing thing is born without reason, prolongs itself out of weakness, and dies by chance.',
        color: '#b45309'
      },
      {
        cluster: 'Humanism',
        tagline: 'The Magnificent Mystery',
        stance: 'A mystery to be illuminated by astrophysics and mathematical beauty, requiring no cosmic father figure to be treasured.',
        thinker: 'Richard Feynman',
        quote: 'I can live with doubt and uncertainty and not knowing. I think it\'s much more interesting to live not knowing than to have answers which might be wrong.',
        color: '#14532D'
      },
      {
        cluster: 'Eastern Non-Dualism',
        tagline: 'Form is Emptiness, Emptiness is Form',
        stance: 'Being and Non-Being are complementary sides of the same coin. Reality is unconditioned tathatā (suchness).',
        thinker: 'Heart Sutra',
        quote: 'Form does not differ from emptiness; emptiness does not differ from form.',
        color: '#701a75'
      }
    ],
    thoughtExperiment: {
      title: 'The Watchmaker on the Heath',
      thinker: 'William Paley (1802) vs. David Hume',
      scenario: 'You find a complex pocket watch in a barren field. Its gears clearly imply a designer. But if the cosmos itself is the watch, who made the watchmaker? Does complexity prove an intentional mind or blind emergent self-organization?',
      choiceA: {
        label: 'Complexity Proves Design',
        outcome: 'Teleological intuition: intricate order demands an intelligent author.'
      },
      choiceB: {
        label: 'Order Emerges Spontaneously',
        outcome: 'Evolutionary intuition: physical laws and selection ratchets generate vast order from simple rules.'
      },
      insight: 'Order does not guarantee intention. The living world generates functional elegance without foresight.'
    }
  }
];

export const CURIOSITY_GRAPH_EDGES: CuriosityGraphEdge[] = [
  {
    source: 'why-do-humans-exist',
    target: 'what-is-consciousness',
    relationship: 'PRESUPPOSES',
    label: 'Demands an inner observer to define purpose'
  },
  {
    source: 'why-do-humans-exist',
    target: 'do-we-have-free-will',
    relationship: 'EVOLVES_INTO',
    label: 'Evolves into questions of personal agency'
  },
  {
    source: 'why-do-humans-exist',
    target: 'why-is-there-something-rather-than-nothing',
    relationship: 'NEIGHBORS',
    label: 'Shares deep ontological ground'
  },
  {
    source: 'what-is-consciousness',
    target: 'do-we-have-free-will',
    relationship: 'PRESUPPOSES',
    label: 'Consciousness is required for deliberate choice'
  },
  {
    source: 'do-we-have-free-will',
    target: 'why-is-there-something-rather-than-nothing',
    relationship: 'TENSION_WITH',
    label: 'Causal closure vs uncaused agency'
  }
];
