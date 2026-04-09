/**
 * Smoke test for @camtomlabs/eslint-plugin-malix.
 *
 * Verifies:
 *   1. The package re-exports the rules from
 *      @camtomlabs/malix-design-system/eslint-plugin.
 *   2. The two canonical rules (`no-raw-button`, `no-raw-input`) are
 *      registered and report on raw elements.
 *   3. The `recommended` config is present.
 *
 * Run with: node smoke-test.cjs
 */

'use strict';

const assert = require('node:assert/strict');
const { Linter } = require('eslint');

const plugin = require('./index.cjs');

// 1. Re-export surface
assert.ok(plugin.rules, 'plugin.rules should exist');
assert.ok(plugin.rules['no-raw-button'], 'no-raw-button rule should exist');
assert.ok(plugin.rules['no-raw-input'], 'no-raw-input rule should exist');
assert.ok(plugin.configs && plugin.configs.recommended, 'recommended config should exist');

// 2. Rule behavior — use the classic Linter API with defineRule so we don't
// depend on plugin name resolution (that is covered by the install layout).
const linter = new Linter();
linter.defineRule('malix/no-raw-button', plugin.rules['no-raw-button']);
linter.defineRule('malix/no-raw-input', plugin.rules['no-raw-input']);

const parserOptions = {
  ecmaVersion: 2022,
  sourceType: 'module',
  ecmaFeatures: { jsx: true },
};

const cases = [
  {
    name: 'raw <button> is flagged',
    code: 'const x = <button>hi</button>;',
    rule: 'malix/no-raw-button',
    expectErrors: 1,
  },
  {
    name: '<Button> is OK',
    code: 'const x = <Button hierarchy="primary">hi</Button>;',
    rule: 'malix/no-raw-button',
    expectErrors: 0,
  },
  {
    name: 'raw <input type="text"> is flagged',
    code: 'const x = <input type="text" />;',
    rule: 'malix/no-raw-input',
    expectErrors: 1,
  },
  {
    name: 'raw <input type="hidden"> is allowed',
    code: 'const x = <input type="hidden" />;',
    rule: 'malix/no-raw-input',
    expectErrors: 0,
  },
  {
    name: '<Input> is OK',
    code: 'const x = <Input placeholder="email" />;',
    rule: 'malix/no-raw-input',
    expectErrors: 0,
  },
];

let failed = 0;
for (const c of cases) {
  const messages = linter.verify(c.code, {
    parserOptions,
    rules: { [c.rule]: 'error' },
  });
  const unrelated = messages.filter((m) => m.fatal);
  if (unrelated.length > 0) {
    console.error(`  ✗ ${c.name} — parser error: ${unrelated[0].message}`);
    failed++;
    continue;
  }
  const relevant = messages.filter((m) => m.ruleId === c.rule);
  if (relevant.length !== c.expectErrors) {
    console.error(
      `  ✗ ${c.name} — expected ${c.expectErrors} error(s), got ${relevant.length}`,
    );
    failed++;
  } else {
    console.log(`  ✓ ${c.name}`);
  }
}

// 3. Classic ESLint plugin-name resolution via the fixture project.
// This is the senior-dev's explicit ask: verify that a consumer using
// classic config with `plugins: ['@camtomlabs/malix']` resolves to this
// package and that the rules fire.
const { spawnSync } = require('node:child_process');
const path = require('node:path');
const fixtureDir = path.join(__dirname, '__fixtures__', 'classic-config');
const eslintBin = path.join(fixtureDir, 'node_modules', '.bin', 'eslint');

const badRun = spawnSync(
  eslintBin,
  ['--no-eslintrc', '--config', '.eslintrc.cjs', 'bad.jsx'],
  { cwd: fixtureDir, encoding: 'utf8' },
);
if (badRun.status === 0) {
  console.error('  ✗ classic-config fixture: expected lint errors on bad.jsx, got none');
  failed++;
} else if (
  !badRun.stdout.includes('@camtomlabs/malix/no-raw-button') ||
  !badRun.stdout.includes('@camtomlabs/malix/no-raw-input')
) {
  console.error('  ✗ classic-config fixture: expected both rules to fire on bad.jsx');
  console.error(badRun.stdout);
  failed++;
} else {
  console.log('  ✓ classic-config fixture flags raw <button> and <input>');
}

const goodRun = spawnSync(
  eslintBin,
  ['--no-eslintrc', '--config', '.eslintrc.cjs', 'good.jsx'],
  { cwd: fixtureDir, encoding: 'utf8' },
);
if (goodRun.status !== 0) {
  console.error('  ✗ classic-config fixture: expected good.jsx to pass');
  console.error(goodRun.stdout);
  failed++;
} else {
  console.log('  ✓ classic-config fixture passes good.jsx');
}

if (failed > 0) {
  console.error(`\n${failed} smoke test(s) failed.`);
  process.exit(1);
}

console.log('\nAll smoke tests passed. @camtomlabs/eslint-plugin-malix is ready.');
