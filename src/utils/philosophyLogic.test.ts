import test from 'node:test';
import assert from 'node:assert/strict';
import {
  findAtlasQuestion,
  searchAtlas,
  simulatePremiseInversion,
  calculateTopologicalProximity,
  getAllRootKnots
} from './philosophyLogic.ts';
import { ATLAS_QUESTIONS } from '../data/questionAtlasData.ts';

test('findAtlasQuestion correctly matches "Why do humans exist?"', () => {
  const result = findAtlasQuestion('Why do humans exist?');
  assert.equal(result.id, 'why-do-humans-exist');
  assert.equal(result.interrogativeOperator, 'why');
  assert.ok(result.sharedAssumptions.length >= 2);
  assert.ok(result.rootQuestionCandidates.length >= 1);
});

test('findAtlasQuestion matches "Can AI become conscious?"', () => {
  const result = findAtlasQuestion('Can AI become conscious?');
  assert.equal(result.id, 'can-ai-become-conscious');
  assert.equal(result.interrogativeOperator, 'can');
});

test('simulatePremiseInversion returns diverging consequences for ACCEPTED vs REJECTED', () => {
  const question = ATLAS_QUESTIONS[0];
  const accepted = simulatePremiseInversion(question, 'asm-existential-teleology', true);
  const rejected = simulatePremiseInversion(question, 'asm-existential-teleology', false);

  assert.equal(accepted.state, 'ACCEPTED');
  assert.equal(rejected.state, 'REJECTED');
  assert.notEqual(accepted.immediateConsequence, rejected.immediateConsequence);
  assert.match(accepted.immediateConsequence, /assignment|purpose/i);
  assert.match(rejected.immediateConsequence, /template|facticity/i);
});

test('calculateTopologicalProximity scores related inquiries higher than distant ones', () => {
  const qHumans = ATLAS_QUESTIONS[0]; // why-do-humans-exist
  const qLife = ATLAS_QUESTIONS[3]; // why-does-life-want-to-survive
  const qAi = ATLAS_QUESTIONS[4]; // can-ai-become-conscious

  const proxHumansLife = calculateTopologicalProximity(qHumans, qLife);
  assert.ok(proxHumansLife > 0.4, 'Teleological human and life survival inquiries should have high proximity');
});

test('getAllRootKnots returns foundational reduction knots', () => {
  const roots = getAllRootKnots();
  assert.ok(roots.length >= 4);
  const orderKnot = roots.find(r => r.id === 'root-order-entropy');
  assert.ok(orderKnot);
  assert.match(orderKnot.title, /Order Knot/);
});
