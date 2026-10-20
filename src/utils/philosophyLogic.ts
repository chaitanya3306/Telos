import {
  ATLAS_QUESTIONS,
  ROOT_KNOTS
} from '../data/questionAtlasData.ts';
import type {
  QuestionNode,
  RootKnot
} from '../data/questionAtlasData.ts';

export interface AtlasSearchResult {
  question: QuestionNode;
  confidenceScore: number;
  matchedOn: 'exact' | 'semantic_tag' | 'fallback';
}

export interface PremiseCascade {
  assumptionId: string;
  proposition: string;
  type: string;
  state: 'ACCEPTED' | 'REJECTED';
  immediateConsequence: string;
  affectedWorldviews: string[];
  epistemicBurden: string;
}

/**
 * Searches and finds the best matching question node from the atlas
 */
export function findAtlasQuestion(queryText: string): QuestionNode {
  const clean = queryText.trim().toLowerCase();
  if (!clean) return ATLAS_QUESTIONS[0];

  // Exact canonical match
  const exact = ATLAS_QUESTIONS.find(
    q => q.canonicalText.toLowerCase() === clean || q.id === clean
  );
  if (exact) return exact;

  // Keyword / Substring heuristics
  if (clean.includes('human') || clean.includes('why are we') || clean.includes('exist')) {
    if (clean.includes('something') || clean.includes('nothing') || clean.includes('universe')) {
      return ATLAS_QUESTIONS.find(q => q.id === 'why-is-there-something-rather-than-nothing') || ATLAS_QUESTIONS[0];
    }
    return ATLAS_QUESTIONS.find(q => q.id === 'why-do-humans-exist') || ATLAS_QUESTIONS[0];
  }

  if (clean.includes('consciousness') || clean.includes('aware') || clean.includes('qualia')) {
    if (clean.includes('ai') || clean.includes('machine') || clean.includes('robot')) {
      return ATLAS_QUESTIONS.find(q => q.id === 'can-ai-become-conscious') || ATLAS_QUESTIONS[1];
    }
    return ATLAS_QUESTIONS.find(q => q.id === 'what-is-consciousness') || ATLAS_QUESTIONS[1];
  }

  if (clean.includes('free will') || clean.includes('choice') || clean.includes('determinis')) {
    return ATLAS_QUESTIONS.find(q => q.id === 'do-we-have-free-will') || ATLAS_QUESTIONS[2];
  }

  if (clean.includes('survive') || clean.includes('life want') || clean.includes('alive')) {
    return ATLAS_QUESTIONS.find(q => q.id === 'why-does-life-want-to-survive') || ATLAS_QUESTIONS[3];
  }

  if (clean.includes('nothing') || clean.includes('something')) {
    return ATLAS_QUESTIONS.find(q => q.id === 'why-is-there-something-rather-than-nothing') || ATLAS_QUESTIONS[4];
  }

  if (clean.includes('ai') || clean.includes('machine') || clean.includes('artificial')) {
    return ATLAS_QUESTIONS.find(q => q.id === 'can-ai-become-conscious') || ATLAS_QUESTIONS[5];
  }

  return ATLAS_QUESTIONS[0];
}

/**
 * Returns all questions ranked by relevance to query
 */
export function searchAtlas(queryText: string): QuestionNode[] {
  const clean = queryText.trim().toLowerCase();
  if (!clean) return ATLAS_QUESTIONS;

  return ATLAS_QUESTIONS.filter(q => {
    return (
      q.canonicalText.toLowerCase().includes(clean) ||
      q.summaryDescription.toLowerCase().includes(clean) ||
      q.category.toLowerCase().includes(clean) ||
      q.relatedQuestions.some(r => r.text.toLowerCase().includes(clean)) ||
      q.sharedAssumptions.some(a => a.proposition.toLowerCase().includes(clean))
    );
  });
}

/**
 * Simulates flipping an assumption to see logical consequences
 */
export function simulatePremiseInversion(
  question: QuestionNode,
  assumptionId: string,
  accepted: boolean
): PremiseCascade {
  const asm = question.sharedAssumptions.find(a => a.id === assumptionId) || question.sharedAssumptions[0];

  if (accepted) {
    return {
      assumptionId: asm.id,
      proposition: asm.proposition,
      type: asm.type,
      state: 'ACCEPTED',
      immediateConsequence: asm.consequenceIfAccepted,
      affectedWorldviews: ['Classical Teleology', 'Theism', 'Objective Metaphysics'],
      epistemicBurden: 'Requires demonstrating why the purpose is opaque and why gratuitous entropy/suffering exists.'
    };
  } else {
    return {
      assumptionId: asm.id,
      proposition: asm.proposition,
      type: asm.type,
      state: 'REJECTED',
      immediateConsequence: asm.consequenceIfRejected,
      affectedWorldviews: ['Existentialism', 'Naturalism', 'Pragmatism', 'Nihilism'],
      epistemicBurden: 'Places the entire burden of value creation upon conscious biological agents without cosmic backing.'
    };
  }
}

/**
 * Returns root knots
 */
export function getAllRootKnots(): RootKnot[] {
  return ROOT_KNOTS;
}

/**
 * Computes topological similarity between two question nodes (0.0 to 1.0)
 */
export function calculateTopologicalProximity(q1: QuestionNode, q2: QuestionNode): number {
  if (q1.id === q2.id) return 1.0;

  let score = 0.0;
  if (q1.category === q2.category) score += 0.35;
  if (q1.interrogativeOperator === q2.interrogativeOperator) score += 0.15;

  const depthDiff = Math.abs(q1.teleologicalDepth - q2.teleologicalDepth);
  score += Math.max(0, 0.25 - depthDiff * 0.25);

  const sharedRoots = q1.rootQuestionCandidates.filter(r1 =>
    q2.rootQuestionCandidates.some(r2 => r2.rootId === r1.rootId)
  );
  score += sharedRoots.length * 0.25;

  return Math.min(1.0, Number(score.toFixed(2)));
}
