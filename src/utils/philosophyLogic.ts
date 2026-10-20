import {
  CURIOSITY_INQUIRIES
} from '../data/telosV2Data.ts';
import type {
  InquiryNode
} from '../data/telosV2Data.ts';

export interface QuestionEvolutionTrace {
  startQuestion: string;
  steps: {
    step: number;
    question: string;
    subfield: string;
    rationale: string;
  }[];
}

/**
 * Finds the closest matching inquiry node for any user query
 */
export function findInquiryNode(queryText: string): InquiryNode {
  const clean = queryText.trim().toLowerCase();
  if (!clean) return CURIOSITY_INQUIRIES[0];

  // Exact ID or text match
  const match = CURIOSITY_INQUIRIES.find(
    q => q.id === clean || q.text.toLowerCase() === clean
  );
  if (match) return match;

  // Keyword routing
  if (clean.includes('consciousness') || clean.includes('aware') || clean.includes('qualia') || clean.includes('mind')) {
    return CURIOSITY_INQUIRIES[1]; // what-is-consciousness
  }

  if (clean.includes('free will') || clean.includes('choice') || clean.includes('determinis') || clean.includes('agency')) {
    return CURIOSITY_INQUIRIES[2]; // do-we-have-free-will
  }

  if (clean.includes('nothing') || clean.includes('something') || clean.includes('universe') || clean.includes('exist at all')) {
    return CURIOSITY_INQUIRIES[3]; // why-is-there-something-rather-than-nothing
  }

  if (clean.includes('human') || clean.includes('why are we') || clean.includes('purpose') || clean.includes('meaning')) {
    return CURIOSITY_INQUIRIES[0]; // why-do-humans-exist
  }

  return CURIOSITY_INQUIRIES[0];
}

/**
 * Searches across the curiosity atlas
 */
export function searchCuriosityInquiries(queryText: string): InquiryNode[] {
  const clean = queryText.trim().toLowerCase();
  if (!clean) return CURIOSITY_INQUIRIES;

  return CURIOSITY_INQUIRIES.filter(q => {
    return (
      q.text.toLowerCase().includes(clean) ||
      q.category.toLowerCase().includes(clean) ||
      q.summary.toLowerCase().includes(clean) ||
      q.relatedQuestions.some(r => r.toLowerCase().includes(clean)) ||
      q.whyItMatters.whyHumansAskIt.toLowerCase().includes(clean)
    );
  });
}

/**
 * Retrieves the genealogical question evolution chain
 */
export function getQuestionEvolution(inquiryId: string): QuestionEvolutionTrace {
  const node = CURIOSITY_INQUIRIES.find(q => q.id === inquiryId) || CURIOSITY_INQUIRIES[0];
  return {
    startQuestion: node.text,
    steps: node.evolutionChain.map(e => ({
      step: e.step,
      question: e.question,
      subfield: e.subfield,
      rationale: e.transitionRationale
    }))
  };
}

/**
 * Simulates flipping an assumption for an inquiry
 */
export function simulateAssumptionStance(
  inquiry: InquiryNode,
  assumptionId: string,
  accepted: boolean
) {
  const asm = inquiry.sharedAssumptions.find(a => a.id === assumptionId) || inquiry.sharedAssumptions[0];
  return {
    assumption: asm.statement,
    category: asm.category,
    stance: accepted ? 'ACCEPTED' : 'REJECTED',
    consequence: accepted ? asm.whatIfTrue : asm.whatIfFalse,
    implicitEnthymeme: asm.implicitEnthymeme
  };
}
