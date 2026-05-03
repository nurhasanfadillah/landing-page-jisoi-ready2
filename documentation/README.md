# 📚 Documentation Index

> **Project:** Landing Page Jisoi - ver-3
> **Agent Mode:** Proactive Self-Improving
> **Last Updated:** 2026-05-03

---

## 🤖 Agent System - Upgraded

I now operate as a **proactive, self-improving agent** with:

### Core Capabilities
- **Always Learn** - From tasks and mistakes
- **Pattern Detection** - 3+ repeats → Auto-create skill
- **Skill Discovery** - Local → Claude → OpenCode → Internet → Create
- **Boot Sequence** - Mandatory at start of every session
- **Thinking Protocol** - Mandatory before every action

---

## 🗂️ Daftar Dokumentasi

### Agent Configuration
| File | Path | Deskripsi |
|------|------|-----------|
| CLAUDE.md | [CLAUDE.md](../CLAUDE.md) | Agent configuration, rules, protocols |

### Skills & CLI
| File | Path | Deskripsi |
|------|------|-----------|
| SKILL_INDEX.md | [skills/SKILL_INDEX.md](./skills/SKILL_INDEX.md) | Index lengkap ~1,563 skills |
| SKILL_PATHS.md | [skills/SKILL_PATHS.md](./skills/SKILL_PATHS.md) | Path absolut semua skill |

### Lessons & Learning
| File | Path | Deskripsi |
|------|------|-----------|
| GLOBAL_LESSONS.md | [lessons/GLOBAL_LESSONS.md](./lessons/GLOBAL_LESSONS.md) | Learned lessons & patterns |

---

## 🔄 Boot Sequence (Mandatory)

```
1. Read CLAUDE.md — agent configuration & rules
2. Read documentation/lessons/GLOBAL_LESSONS.md — transferable lessons
3. Read documentation/skills/SKILL_INDEX.md — available skills
4. State current task in 1–2 sentences
5. Run Thinking Protocol before executing anything
```

---

## 🧠 Thinking Protocol

```
1. What exactly is being asked? (re-read if ambiguous)
2. What could go wrong? (worst case scenarios)
3. Is there a simpler way to achieve the same goal?
4. Is this reversible? If NOT → mandatory human confirmation (Hard Stop)
5. Have GLOBAL_LESSONS been checked for similar patterns?

Then: [CONFIDENCE: XX%] — reason + calibration factors
```

**Confidence thresholds:** ≥80% proceed, 50–79% proceed with caveats, <50% stop.

---

## ⚠️ Hard Stops (Always Confirm First)

- ❌ Deleting files or data
- ❌ Changing production/staging env vars or configs
- ❌ External API write requests (POST/PUT/DELETE)
- ❌ Installing packages that modify global system
- ❌ Database writes (non-SELECT)
- ❌ **Modifying CLAUDE.md** — requires human confirmation
- ❌ Any action with confidence <50% that is high-impact and hard to reverse

---

## 📊 Skill Statistics

| Location | Skills Count |
|----------|--------------|
| OpenCode (`~/.config/opencode/skills/`) | **1,426** |
| Claude Code (`~/.claude/skills/`) | **81** |
| Agents (`~/.agents/skills/`) | **56** |
| **Grand Total** | **~1,563** |

---

## 🔌 MCP Servers (6 Total)

| Server | Status | Capabilities |
|--------|--------|-------------|
| **stitch** | ✅ Connected | UI design generation (Gemini 3.1 Pro) |
| **github** | ✅ Connected | Issues, PR, repo, comments |
| **netlify** | ✅ Connected | Site deploy, build hooks |
| **cloudflare** | ✅ Connected | DNS, Workers, KV, R2, D1 |
| **context7** | ⚠️ Needs key | Latest library docs |
| **supabase** | 🚫 Disabled | Postgres, auth, storage |

---

## ⚡ Quick Access - Skills

| Task | Skill | Command |
|------|-------|---------|
| Landing Page Design | `landing-page-design` | `/landing-page-design` |
| Landing Page + Copy | `landing-page-generator` | opencode |
| Generate UI Screen | `frontend-design` | `/frontend-design` |
| UI/UX Design | `ui-ux-pro-max` | `/ui-ux-pro-max` |
| shadcn/ui | `shadcn-ui` | `/shadcn-ui` |
| Tailwind | `tailwind-design-system` | opencode |
| Quick Dev | `bmad-quick-dev` | `/bmad-quick-dev` |
| Code Simplify | `simplify` | `/simplify` |
| Code Review | `review` | `/review` |
| Security | `security-review` | `/security-review` |
| Deploy Netlify | `netlify-full-deploy` | `/netlify-full-deploy` |
| Deploy Cloudflare | `wrangler` | `/wrangler` |

---

## 🔍 Skill Discovery Protocol

```
TASK → local skills/ → ~/.claude/skills/ → ~/.config/opencode/skills/ 
     → Internet Search → Create New Skill → Update Index
```

---

## 📁 Project Structure

```
ver-3/
├── CLAUDE.md                      # Agent configuration
└── documentation/
    ├── README.md                  # Documentation index (this file)
    ├── lessons/
    │   └── GLOBAL_LESSONS.md      # Learned lessons & patterns
    └── skills/
        ├── SKILL_INDEX.md         # Index lengkap ~1,563 skills
        └── SKILL_PATHS.md         # Path absolut semua skill
```

---

## 💡 Tips

1. **Lihat semua skills:** [SKILL_INDEX.md](./skills/SKILL_INDEX.md)
2. **Cari path skill:** [SKILL_PATHS.md](./skills/SKILL_PATHS.md)
3. **Lihat lessons:** [GLOBAL_LESSONS.md](./lessons/GLOBAL_LESSONS.md)
4. **Konfigurasi agent:** [CLAUDE.md](../CLAUDE.md)

---

*Generated: 2026-05-03*