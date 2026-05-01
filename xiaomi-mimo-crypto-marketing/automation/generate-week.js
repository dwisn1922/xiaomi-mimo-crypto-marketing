import fs from 'fs';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const pillars = ['Education', 'Community', 'Narrative', 'KOL', 'Trust'];
const formats = ['Thread', 'Prompt', 'Short', 'AMA', 'Meme'];

const rows = ['day,channel,pillar,format,topic,cta,status'];
for (let i = 0; i < days.length; i++) {
  const pillar = pillars[i % pillars.length];
  const format = formats[i % formats.length];
  rows.push(`${days[i]},X/Telegram,${pillar},${format},MiMo ${pillar} content idea,Join community,draft`);
}

fs.writeFileSync('../content/generated-week.csv', rows.join('\n') + '\n');
console.log('Generated ../content/generated-week.csv');
