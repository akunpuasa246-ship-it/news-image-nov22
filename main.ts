// News Image — 22 November 2026 World News Infographic
// Copies entry.png to /output/entry.png for the make.fun judge.
// entry.png: AI-generated comprehensive infographic summarising Sun 22 Nov 2026 world news.
//   25 major stories: COP31 climate talks · Iran attacks US military · Strait of Hormuz tankers
//   ablaze · Ukraine war escalation · Mexico cartel · Bangladesh protests · Chinese AI espionage ·
//   Nvidia SEC probe · FBI database hacked · Trump-Xi-Putin Shenzhen summit · Democrats legislative
//   agenda · US-Canada defense rift · BepiColombo Mercury probe · Peru earthquake M6.7 · Brazil storm
//   deaths · Anthropic $81.3B IPO · Nigeria boat capsizes · Estonia closes Russian border ·
//   Czech media protests · UN climate fund · Venezuela military ties · South Korea impeachment ·
//   Philippines security · Russia peace talks · USDA system breach · Iceland volcano eruption.
//
// Generate locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import fs from 'fs';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || './output';
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, {recursive: true});
fs.copyFileSync('./entry.png', `${outputDir}/entry.png`);
console.log('✓ entry.png → output/entry.png');
