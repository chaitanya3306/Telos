import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculatePhilosophicalAlignment,
  testAssumptionPremise,
  deconstructQuery
} from './philosophyLogic.ts';

test('calculatePhilosophicalAlignment handles existential choices properly', () => {
  const result = calculatePhilosophicalAlignment({
    'q1-origin-of-meaning': 'opt-existentialism',
    'q2-nature-of-consciousness': 'opt-c-existentialism',
    'q3-cosmic-silence': 'opt-s-existentialism'
  });

  assert.equal(result.totalAnswered, 3);
  assert.equal(result.dominantPosition.id, 'existentialism');
  assert.equal(result.scores[0].camp, 'existentialism');
  assert.equal(result.scores[0].points, 3);
  assert.ok(result.scores[0].percentage > 0);
  assert.ok(result.philosophicalSynthesis.length > 20);
});

test('calculatePhilosophicalAlignment handles theism choices properly', () => {
  const result = calculatePhilosophicalAlignment({
    'q1-origin-of-meaning': 'opt-theism',
    'q2-nature-of-consciousness': 'opt-c-theism',
    'q3-cosmic-silence': 'opt-s-theism'
  });

  assert.equal(result.dominantPosition.id, 'theism');
  assert.equal(result.scores[0].camp, 'theism');
  assert.ok(result.recommendedThinkers.length > 0);
});

test('testAssumptionPremise yields distinct consequences for accepted vs rejected', () => {
  const accepted = testAssumptionPremise('human-purpose', 'accepted');
  const rejected = testAssumptionPremise('human-purpose', 'rejected');

  assert.notEqual(accepted.immediateConsequence, rejected.immediateConsequence);
  assert.match(accepted.alignedWorldview, /Theism|Aristotelian/);
  assert.match(rejected.alignedWorldview, /Existentialism|Nihilism/);
});

test('deconstructQuery parses queries and matches closest core philosophical question', () => {
  const resultMeaning = deconstructQuery('Does my life have any meaning or point?');
  assert.equal(resultMeaning.closestQuestionMatch.id, 'meaning-of-life');
  assert.equal(resultMeaning.positionsAnalysis.length, 4);

  const resultCosmos = deconstructQuery('Why does the universe exist rather than nothingness?');
  assert.equal(resultCosmos.closestQuestionMatch.id, 'something-rather-than-nothing');
});
