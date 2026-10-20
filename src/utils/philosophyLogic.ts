import {
  COMPASS_QUESTIONS,
  MAJOR_POSITIONS,
  HIDDEN_ASSUMPTIONS,
  CLOSEST_QUESTIONS
} from '../data/philosophyData.ts';
import type {
  MajorPosition,
  HiddenAssumption
} from '../data/philosophyData.ts';

export interface AlignmentScore {
  camp: 'existentialism' | 'theism' | 'nihilism' | 'humanism';
  name: string;
  points: number;
  percentage: number;
  accent: string;
}

export interface AlignmentResult {
  totalAnswered: number;
  totalQuestions: number;
  scores: AlignmentScore[];
  dominantPosition: MajorPosition;
  secondaryPosition?: MajorPosition;
  philosophicalSynthesis: string;
  recommendedThinkers: {
    name: string;
    work: string;
    quote: string;
  }[];
}

export interface PremiseImpact {
  assumption: HiddenAssumption;
  stance: 'accepted' | 'rejected';
  immediateConsequence: string;
  metaphysicalShift: string;
  alignedWorldview: string;
  vulnerabilities: string;
}

export function calculatePhilosophicalAlignment(
  selectedOptionMap: Record<string, string>
): AlignmentResult {
  const counts: Record<'existentialism' | 'theism' | 'nihilism' | 'humanism', number> = {
    existentialism: 0,
    theism: 0,
    nihilism: 0,
    humanism: 0
  };

  let totalAnswered = 0;

  for (const q of COMPASS_QUESTIONS) {
    const selectedOptId = selectedOptionMap[q.id];
    if (selectedOptId) {
      const option = q.options.find(o => o.id === selectedOptId);
      if (option) {
        counts[option.philosophicalCamp]++;
        totalAnswered++;
      }
    }
  }

  const safeTotal = totalAnswered > 0 ? totalAnswered : 1;

  const scores: AlignmentScore[] = [
    {
      camp: 'existentialism' as const,
      name: 'Existentialism',
      points: counts.existentialism,
      percentage: Math.round((counts.existentialism / safeTotal) * 100),
      accent: '#B45309'
    },
    {
      camp: 'theism' as const,
      name: 'Theism',
      points: counts.theism,
      percentage: Math.round((counts.theism / safeTotal) * 100),
      accent: '#1E3A8A'
    },
    {
      camp: 'nihilism' as const,
      name: 'Nihilism',
      points: counts.nihilism,
      percentage: Math.round((counts.nihilism / safeTotal) * 100),
      accent: '#292524'
    },
    {
      camp: 'humanism' as const,
      name: 'Humanism',
      points: counts.humanism,
      percentage: Math.round((counts.humanism / safeTotal) * 100),
      accent: '#14532D'
    }
  ].sort((a, b) => b.points - a.points);

  const dominantCamp = scores[0].camp;
  const secondaryCamp = scores[1]?.points > 0 ? scores[1].camp : undefined;

  const dominantPos =
    MAJOR_POSITIONS.find(p => p.id === dominantCamp) || MAJOR_POSITIONS[0];
  const secondaryPos = secondaryCamp
    ? MAJOR_POSITIONS.find(p => p.id === secondaryCamp)
    : undefined;

  let synthesis = '';
  if (dominantCamp === 'existentialism') {
    synthesis =
      'Your philosophical intuition centers on sovereign agency and personal responsibility. You reject ready-made destinies, regarding purpose as a rigorous creative assignment rather than an inherited inheritance.';
  } else if (dominantCamp === 'theism') {
    synthesis =
      'Your intuition perceives a sacred architectural depth beneath physical phenomena. You ground meaning in a transcendent Source, recognizing consciousness as an aperture into divine truth and moral order.';
  } else if (dominantCamp === 'nihilism') {
    synthesis =
      'Your intuition embraces radical intellectual austerity. You strip away comforting teleological narratives, confronting the cosmos as a neutral, unguided reality without cosmic sentimentality.';
  } else {
    synthesis =
      'Your intuition combines pragmatic scientific realism with secular empathy. You locate profound sacredness in the mortal human journey, reason, knowledge, and mutual solidarity on this fragile earth.';
  }

  if (secondaryPos) {
    synthesis += ` Moderated by strong resonance with ${secondaryPos.name}, creating a nuanced dialectic between ${dominantPos.tagline.toLowerCase()} and ${secondaryPos.tagline.toLowerCase()}.`;
  }

  const recommendedThinkers = dominantPos.keyThinkers.map(k => ({
    name: k.name,
    work: k.famousWork,
    quote: k.quote
  }));

  return {
    totalAnswered,
    totalQuestions: COMPASS_QUESTIONS.length,
    scores,
    dominantPosition: dominantPos,
    secondaryPosition: secondaryPos,
    philosophicalSynthesis: synthesis,
    recommendedThinkers
  };
}

export function testAssumptionPremise(
  assumptionId: string,
  stance: 'accepted' | 'rejected'
): PremiseImpact {
  const assumption =
    HIDDEN_ASSUMPTIONS.find(a => a.id === assumptionId) || HIDDEN_ASSUMPTIONS[0];

  if (assumption.id === 'human-purpose') {
    if (stance === 'accepted') {
      return {
        assumption,
        stance,
        immediateConsequence:
          'Existence has an intrinsic target or ideal configuration (Telos). Deviation constitutes a failure of alignment or moral rupture.',
        metaphysicalShift:
          'The cosmos is normative: things are not merely "how they are" (physics), but "how they ought to be" (metaphysics).',
        alignedWorldview: 'Theism, Aristotelian Virtue Ethics, Classical Teleology',
        vulnerabilities:
          'Requires explaining why the purpose is opaque and why gratuitous suffering exists in a purposed cosmos.'
      };
    } else {
      return {
        assumption,
        stance,
        immediateConsequence:
          'Existence is brute facticity. Biology and physics do not have intentions; only conscious minds do.',
        metaphysicalShift:
          'Complete freedom from cosmic surveillance. The burden of generating value rests entirely upon mortal agents.',
        alignedWorldview: 'Existentialism, Nihilism, Secular Humanism',
        vulnerabilities:
          'Leaves values without an external cosmic anchor, risking existential anxiety or nihilistic vertigo.'
      };
    }
  } else {
    // purpose-discoverable
    if (stance === 'accepted') {
      return {
        assumption,
        stance,
        immediateConsequence:
          'The true meaning of life is an epistemological puzzle that can be solved through reason, revelation, contemplation, or empirical investigation.',
        metaphysicalShift:
          'Truth is objective and discoverable. Pluralism is either an approximation of one truth or a sign of cognitive limitation.',
        alignedWorldview: 'Platonic Realism, Traditional Theism, Natural Law',
        vulnerabilities:
          'Cannot explain why centuries of brilliant thinkers hold mutually irreconcilable answers without consensus.'
      };
    } else {
      return {
        assumption,
        stance,
        immediateConsequence:
          'Purpose cannot be unburied like archaeological artifacts. It is an act of creation, linguistic framing, or cultural negotiation.',
        metaphysicalShift:
          'Epistemic constructivism: humans are authors of meaning rather than passive decoders of cosmic text.',
        alignedWorldview: 'Existentialism, Pragmatism, Post-Modern Epistemology',
        vulnerabilities:
          'Can collapse into radical subjectivism where no choice is objectively more noble than any other.'
      };
    }
  }
}

export interface DialecticDeconstruction {
  originalQuery: string;
  closestQuestionMatch: typeof CLOSEST_QUESTIONS[0];
  implicitAssumptions: string[];
  ontologicalPrerequisites: string[];
  positionsAnalysis: {
    camp: string;
    stance: string;
  }[];
}

export function deconstructQuery(queryText: string): DialecticDeconstruction {
  const lower = queryText.toLowerCase();

  let closest = CLOSEST_QUESTIONS[0]; // default 'Why am I here?'
  if (lower.includes('meaning') || lower.includes('worth') || lower.includes('point')) {
    closest = CLOSEST_QUESTIONS[1];
  } else if (
    lower.includes('nothing') ||
    lower.includes('universe') ||
    lower.includes('exist') ||
    lower.includes('something')
  ) {
    closest = CLOSEST_QUESTIONS[2];
  }

  const implicitAssumptions = [
    'Presumes that questions formulated by human language have corresponding metaphysical answers.',
    'Assumes that existence requires justification or external validation beyond its brute occurrence.',
    'Implies that the questioner possesses reflective agency capable of acting on the answer.'
  ];

  const ontologicalPrerequisites = [
    'Consciousness: A subjective vantage point capable of evaluating states of affairs.',
    'Temporality: A lived sense of past origin, present action, and future orientation.',
    'Value-discernment: The capacity to experience things as matters of concern rather than mere neutral matter.'
  ];

  const positionsAnalysis = [
    {
      camp: 'Existentialism',
      stance: closest.positionsBrief.existentialism
    },
    {
      camp: 'Theism',
      stance: closest.positionsBrief.theism
    },
    {
      camp: 'Nihilism',
      stance: closest.positionsBrief.nihilism
    },
    {
      camp: 'Humanism',
      stance: closest.positionsBrief.humanism
    }
  ];

  return {
    originalQuery: queryText.trim() || closest.question,
    closestQuestionMatch: closest,
    implicitAssumptions,
    ontologicalPrerequisites,
    positionsAnalysis
  };
}
