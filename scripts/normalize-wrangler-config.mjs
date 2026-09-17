import { readFile, writeFile } from 'node:fs/promises';

const configPath = new URL('../dist/server/wrangler.json', import.meta.url);
const config = JSON.parse(await readFile(configPath, 'utf8'));

// Vinext currently emits this retired Wrangler field. Removing it preserves the
// same default behavior and keeps generated builds compatible with Wrangler 4.132+.
delete config.legacy_env;

await writeFile(configPath, `${JSON.stringify(config)}\n`);

