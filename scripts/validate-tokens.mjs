import { readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const root = resolve(process.cwd());
const registryPath = join(root, 'packages', 'tokens', 'tokens.registry.json');
const scanTargets = [
  join(root, 'packages', 'ui', 'src'),
  join(root, 'apps', 'storybook', 'src')
];

const codeExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.css', '.mdx']);
const tokenRegex = /var\(\s*(--malix-[a-z0-9-]+)\s*\)/g;

function collectFiles(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const filePath = join(dir, name);
    const stats = statSync(filePath);
    if (stats.isDirectory()) {
      collectFiles(filePath, files);
      continue;
    }
    if (codeExtensions.has(extname(filePath))) {
      files.push(filePath);
    }
  }
  return files;
}

const registry = JSON.parse(readFileSync(registryPath, 'utf8'));
const allowed = new Set(registry.tokens);
const violations = [];

for (const target of scanTargets) {
  const files = collectFiles(target);
  for (const filePath of files) {
    const content = readFileSync(filePath, 'utf8');
    for (const match of content.matchAll(tokenRegex)) {
      const token = match[1];
      if (!allowed.has(token)) {
        violations.push({ filePath, token });
      }
    }
  }
}

if (violations.length > 0) {
  console.error('Found tokens not present in tokens.registry.json:');
  for (const violation of violations) {
    console.error(`- ${violation.token} in ${violation.filePath}`);
  }
  process.exit(1);
}

console.log('Token validation passed. No surprise tokens found.');
