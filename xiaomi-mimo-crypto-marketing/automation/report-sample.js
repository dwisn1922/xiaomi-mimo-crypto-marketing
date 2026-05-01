import fs from 'fs';

const report = `# Sample Weekly Report\n\nWeek: sample\n\n## Summary\n\n- Community setup completed.\n- Content calendar drafted.\n- KOL CRM ready for outreach.\n\n## Next Actions\n\n1. Fill official links.\n2. Add 50 KOL prospects.\n3. Launch MiMo Genesis Community Sprint.\n`;

fs.writeFileSync('../analytics/sample-weekly-report.md', report);
console.log('Generated ../analytics/sample-weekly-report.md');
