# Xiaomi MiMo Crypto Marketing OS

An open-source operating system for building, educating, and managing a crypto community around **Xiaomi MiMo**: community operations, content engine, KOL pipeline, campaign tracking, and reporting.

> Disclaimer: This project is a marketing/community toolkit. It is not financial advice, not an invitation to buy or sell any token, and is not officially affiliated with Xiaomi unless explicitly stated by the brand owner.

## Goals

- Build an organized, active, and educational community.
- Run daily/weekly content to grow awareness and trust.
- Manage KOLs/influencers in a structured way.
- Create a funnel from awareness → education → community → conversion.
- Measure campaign performance with a simple dashboard.

## Common Stack

- **Docs & planning:** Markdown, Google Sheets / CSV
- **Community:** Telegram, Discord, X/Twitter
- **Design:** Canva/Figma
- **Light automation:** Node.js + npm scripts
- **Tracking:** UTM links, CSV trackers, weekly reports

## Repository Structure

```text
.
├── strategy/                 # brand strategy, positioning, funnel
├── community/                # Telegram/Discord SOP, moderation, events
├── content/                  # content pillars, calendar, templates
├── kols/                     # KOL CRM, scoring, outreach scripts
├── campaigns/                # campaign plan and launch checklist
├── analytics/                # KPI dashboard template and reports
├── automation/               # helper scripts to generate calendar/report
├── brand-kit/                # tone of voice, visual guide, copy rules
└── legal-compliance/         # disclaimers and compliance checklist
```

## Quick Start

1. Read `strategy/positioning.md`
2. Fill in `kols/kol-crm.csv`
3. Use `content/monthly-calendar.csv` for content scheduling
4. Run the first campaign from `campaigns/launch-campaign.md`
5. Update the weekly report in `analytics/weekly-report-template.md`

## Weekly Workflow

```text
Monday    : content planning + previous week KPI update
Tuesday   : education thread + community prompt
Wednesday : KOL outreach + partner follow-up
Thursday  : live AMA / mini event
Friday    : meme/community challenge
Saturday  : recap + user-generated content
Sunday    : community audit + next week planning
```

## Key KPIs

- Community growth: new Telegram/Discord members
- Engagement: replies, reactions, comments, active members
- Content: impressions, CTR, saves, shares
- KOL: reach, engagement rate, cost per engagement
- Conversion: whitelist/signup/wallet connect/link clicks based on campaign goals

## Automation Commands

```bash
cd automation
npm install
npm run generate:week
npm run report:sample
```

## License

MIT — free to use and modify.
