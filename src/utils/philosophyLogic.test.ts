import test from 'node:test';
import assert from 'node:assert/strict';
import {
  findInquiryNode,
  searchCuriosityInquiries,
  getQuestionEvolution,
  simulateAssumptionStance
} from './philosophyLogic.ts';
import { CURIOSITY_INQUIRIES } from '../data/telosV2Data.ts';

test('findInquiryNode correctly matches "Why do humans exist?"', () => {
  const result = findInquiryNode('Why do humans exist?');
  assert.equal(result.id, 'why-do-humans-exist');
  assert.equal(result.relatedQuestions.length, 4);
  assert.equal(result.sharedAssumptions.length, 2);
  assert.ok(result.philosophicalClusters.length >= 4);
});

test('findInquiryNode matches "What is consciousness?"', () => {
  const result = findInquiryNode('What is consciousness?');
  assert.equal(result.id, 'what-is-consciousness');
  assert.equal(result.category, 'Consciousness');
});

test('getQuestionEvolution returns step-by-step genealogical pipeline', () => {
  const evolution = getQuestionEvolution('what-is-consciousness');
  assert.equal(evolution.steps.length, 4);
  assert.equal(evolution.steps[0].question, 'What is consciousness?');
  assert.equal(evolution.steps[1].question, 'What is the self?');
  assert.equal(evolution.steps[2].question, 'What is identity across time?');
  assert.equal(evolution.steps[3].question, 'What survives change and death?');
});

test('simulateAssumptionStance gives distinct consequences for accepted vs rejected', () => {
  const node = CURIOSITY_INQUIRIES[0];
  const accepted = simulateAssumptionStance(node, 'asm-purpose-exists', true);
  const rejected = simulateAssumptionStance(node, 'asm-purpose-exists', false);

  assert.equal(accepted.stance, 'ACCEPTED');
  assert.equal(rejected.stance, 'REJECTED');
  assert.notEqual(accepted.consequence, rejected.consequence);
});
