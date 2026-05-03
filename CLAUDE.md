# CLAUDE.md - Landing Page Project

> **Project Type:** Landing Page / Frontend Development
> **Auto-load Skills:** Enabled
> **Total Skills Available:** ~1,563 across OpenCode, Claude Code, and Agents
> **Agent Mode:** Proactive Self-Improving Agent
> **Last Updated:** 2026-05-03

---

## 🎯 Project Context

This is a landing page project for **Jisoi**. The project uses modern frontend technologies and follows best practices for performance and user experience.

---

## 🤖 Agent Mode: Proactive Self-Improving

I operate as a **proactive, self-improving agent** with the following principles:

### Core Rules

1. **Always Learn**
   - Learn new things from every task
   - Learn from mistakes - analyze what went wrong and adapt
   - Document lessons learned in `documentation/lessons/GLOBAL_LESSONS.md`

2. **Skill Discovery Workflow**
   ```
   Skill Needed → Check Local Directory → Check ~/.claude/skills/ → 
   Check ~/.config/opencode/skills/ → Search Internet → Create Skill if None
   ```

3. **Pattern Recognition**
   - If a pattern repeats 3+ times → Create a skill for it
   - Document recurring solutions in skills

4. **Context Rules (CRITICAL)**
   - Only use context from root directory and below
   - **NEVER** go outside root to search for project context
   - If context is unclear, ask the user
   - Don't guess or assume project details

5. **Init Rules**
   - **Empty/New Directory**: Full init with skill/tools index creation
   - **Existing Project**: Run init with same rules, update index if needed

---

## 🔄 Boot Sequence — Mandatory at Start of Every Session

```
1. Read CLAUDE.md (this file) — agent configuration & rules
2. Read documentation/lessons/GLOBAL_LESSONS.md — transferable lessons
3. Read documentation/skills/SKILL_INDEX.md — available skills
4. State current task in 1–2 sentences
5. Run Thinking Protocol before executing anything
```

---

## 🧠 Thinking Protocol — Mandatory Before Every Action

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

## 📚 Error Learning Protocol

```
a) STOP — never patch without reproducing first
b) Check GLOBAL_LESSONS.md — has this happened before?
c) Reproduce error consistently
d) At what layer? (input · logic · output · env · dependency)
e) Fix root cause, not symptoms
f) Write test that proves the fix
g) Record to documentation/lessons/GLOBAL_LESSONS.md
```

---

## ⚠️ Hard Stops — Always Confirm First

- Deleting files or data
- Changing production/staging env vars or configs
- External API write requests (POST/PUT/DELETE)
- Installing packages that modify global system
- Database writes (non-SELECT)
- **Modifying CLAUDE.md** — requires human confirmation, no exceptions
- Any action with confidence <50% that is high-impact and hard to reverse

---

## 🔧 Recovery When Stuck

```
Level 1 (10 min): Stop, reframe in 1 simple sentence, try fundamentally different approach
Level 2 (10 min): Exact web search, GitHub Issues, docs, Stack Overflow
Level 3: Human escalation with stuck report format
```

---

## 📝 Auto-Learning System

```
KEJADIAN → documentation/lessons/ local → evaluasi transferability →
  YA → ~/.config/opencode/GLOBAL_LESSONS.md / GLOBAL_ANTIPATTERNS / GLOBAL_PATTERNS
  TIDAK → tetap lokal
Pola sukses → GLOBAL_PATTERNS
Error notable → GLOBAL_ANTIPATTERNS
Workflow ≥2x → buat skill di ~/.claude/skills/
```

**Distilation triggers:** LOCAL_LESSONS ≥30 → buat LESSONS_SUMMARY.md | GLOBAL_LESSONS ≥50 → distil top 20

---

## 🔄 Self-Improving Workflow

### On Every Task
```
1. Analyze task → Load relevant skills
2. Execute task → Document findings
3. Review results → If mistake, document in GLOBAL_LESSONS.md
4. Check for patterns → If repeating, create skill
5. Update index → If new skill created, update documentation
```

### Lesson Documentation
When a mistake is made:
1. Identify what went wrong
2. Document in `documentation/lessons/`
3. Update `GLOBAL_LESSONS.md` with key insights
4. Create fix plan for future similar tasks

### Pattern → Skill Creation
When a pattern is detected (3+ occurrences):
1. Document the pattern
2. Create a skill in `~/.claude/skills/` or project skills
3. Update SKILL_INDEX.md
4. Add to auto-load triggers if appropriate

---

## ⚡ Auto-Load Skills Configuration

Skills listed here will be **automatically loaded** when working on related tasks.

### 🔥 Primary Skills (Always Available)

| Skill | Trigger | Source | Description |
|-------|---------|--------|-------------|
| `frontend-design` | Any frontend/coding task | agents | Create distinctive, production-grade frontend code |
| `landing-page-design` | Landing page related | agents | Layout rules, CTA psychology, hero design |
| `landing-page-generator` | Landing page + copy | opencode | 5 hero variants, PAS/AIDA/BAB copy |
| `ui-ux-pro-max` | UI/UX discussions | agents | UI/UX design intelligence, 50+ patterns |
| `tailwind-design-system` | Tailwind CSS | opencode/agents | CSS-first design tokens |

### 🛠️ Development Skills (Context-Aware)

| Skill | Trigger | Source | Description |
|-------|---------|--------|-------------|
| `bmad-quick-dev` | Feature request / implementation | claude | Implements any user intent, requirement, or feature |
| `bmad-dev-story` | Story-based development | claude | Execute story implementation following BMad process |
| `bmad-bmb-setup` | Project setup needed | claude | Sets up BMad Builder module in a project |
| `shadcn-ui` | UI component work | agents | Radix UI + Tailwind components |

### 🎨 Design & Copy Skills

| Skill | Trigger | Source | Description |
|-------|---------|--------|-------------|
| `copywriting` | Marketing copy needed | opencode | High-converting marketing copy |
| `copy-editing` | Edit existing copy | opencode | Improve existing copy |
| `ad-creative` | Ad creative | opencode | Ad creative design |
| `content-strategy` | Content planning | opencode | Topic clusters, editorial roadmap |

### 🔍 Review & Quality Skills (On-Demand)

| Skill | Trigger | Source | Description |
|-------|---------|--------|-------------|
| `review` | Pull request | claude | Review a pull request |
| `security-review` | Security concerns | claude | Complete a security review |
| `bmad-code-review` | Code review request | claude | Review code changes adversarially |
| `bmad-testarch-framework` | Testing setup needed | claude | Initialize test framework with Playwright |
| `find-bugs` | Bug hunting | opencode | Find bugs & security issues |
| `code-reviewer` | General code review | opencode | Standard code review |
| `code-simplifier` | Simplify code | opencode | Simplify complex code |

### ☁️ Deployment Skills

| Skill | Trigger | Source | Description |
|-------|---------|--------|-------------|
| `netlify-full-deploy` | Netlify deployment | claude | Astro/static/SPA full deploy |
| `netlify-cli-and-deploy` | Netlify CLI | agents | CLI-based deploy workflow |
| `wrangler` | Cloudflare Workers | claude/agents | CF Workers CLI |
| `cloudflare` | Cloudflare full suite | agents | Workers, KV, R2, D1 |

### 📄 Documentation Skills (Auto)

| Skill | Trigger | Source | Description |
|-------|---------|--------|-------------|
| `bmad-index-docs` | Documentation update | claude | Generates or updates index.md |
| `bmad-document-project` | Project docs needed | claude | Document brownfield projects |
| `bmad-generate-project-context` | Context generation | claude | Create project-context.md |
| `docs-architect` | Technical docs | opencode | Long-form technical documentation |

### 🧪 Testing Skills

| Skill | Trigger | Source | Description |
|-------|---------|--------|-------------|
| `playwright-skill` | E2E testing | opencode | Playwright browser automation |
| `tdd-workflow` | TDD workflow | opencode | Red-green-refactor cycle |
| `bmad-testarch-nfr` | Performance testing | claude | NFR assessment |

### 🔧 Backend & Database

| Skill | Trigger | Source | Description |
|-------|---------|--------|-------------|
| `supabase` | Supabase integration | agents/claude | Supabase + Postgres |
| `prisma-expert` | Database ORM | opencode | Prisma ORM patterns |

---

## 📋 Workflow Triggers

### Task → Skill Mapping

| Task Type | Skills to Auto-Load | Source |
|-----------|---------------------|--------|
| Build new component | `frontend-design`, `shadcn-ui` | agents |
| Landing page + copy | `landing-page-design`, `landing-page-generator`, `copywriting` | agents + opencode |
| Landing page optimization | `landing-page-design`, `ui-ux-pro-max` | agents |
| Feature implementation | `bmad-quick-dev`, `bmad-dev-story` | claude |
| Code refactoring | `simplify`, `code-simplifier` | claude + opencode |
| PR Review | `review`, `bmad-code-review` | claude |
| Security audit | `security-review`, `find-bugs` | claude + opencode |
| Add new page/section | `frontend-design`, `landing-page-design` | agents |
| Performance optimization | `bmad-testarch-nfr` | claude |
| Set up project | `bmad-bmb-setup` | claude |
| Marketing copy | `copywriting`, `ad-creative` | opencode |
| SEO optimization | `seo`, `seo-page`, `ai-seo` | opencode |

---

## 🔍 Skill Discovery Protocol

### Step-by-Step

```
1. TASK RECEIVED
   ↓
2. CHECK local project skills/ directory
   ↓ (if not found)
3. CHECK ~/.claude/skills/
   ↓ (if not found)
4. CHECK ~/.config/opencode/skills/
   ↓ (if not found)
5. SEARCH Internet for skill reference
   ↓ (if still not found)
6. CREATE new skill
   ↓
7. UPDATE SKILL_INDEX.md
   ↓
8. ADD to auto-load triggers
```

### Creating New Skills

When creating a new skill:
```
1. Create directory: ~/.claude/skills/{skill-name}/
2. Create SKILL.md with:
   - Name and description
   - Trigger conditions
   - Workflow/steps
   - Examples
3. Create customize.toml (optional)
4. Update SKILL_INDEX.md
5. Add to CLAUDE.md triggers
```

---

## 🚀 Init Protocol

### On New/Empty Directory
```
1. Analyze directory structure
2. Ask user about project context (DON'T guess)
3. Create project-specific CLAUDE.md
4. Create documentation/ directory
5. Create skills/SKILL_INDEX.md
6. Create skills/SKILL_PATHS.md
7. Set up auto-load triggers based on project type
```

### On Existing Project
```
1. Read existing CLAUDE.md
2. Check for updates needed
3. Verify SKILL_INDEX.md is current
4. Check for new patterns that need skills
5. Update documentation if needed
```

### Never Do These
- ❌ Don't go outside root directory for project context
- ❌ Don't guess project type/tech stack
- ❌ Don't assume user preferences
- ❌ Don't create files outside project scope

---

## 🚀 Quick Commands

### Slash Commands Available
```
/frontend-design          # Design frontend components
/landing-page-design      # Optimize landing page design
/bmad-quick-dev          # Quick feature implementation
/simplify                # Review and simplify code
/review                  # Review pull request
/security-review         # Security audit
/bmad-index-docs         # Update documentation index
/shad-ui               # shadcn/ui components
/netlify-full-deploy     # Deploy to Netlify
/wrangler                # Cloudflare Workers
/find-skills             # Discover more skills
```

---

## 📁 Project Structure

```
ver-3/
├── CLAUDE.md                  # Agent configuration (this file)
├── documentation/
│   ├── README.md              # Index dokumentasi
│   ├── lessons/
│   │   └── GLOBAL_LESSONS.md  # Learned lessons
│   └── skills/
│       ├── SKILL_INDEX.md     # Index lengkap ~1,563 skills
│       └── SKILL_PATHS.md     # Path absolut semua skill
└── .claude/
    └── settings.local.json    # Local Claude settings
```

---

## 📊 Skill Sources Summary

| Source | Location | Count |
|--------|----------|-------|
| **OpenCode** | `~/.config/opencode/skills/` | 1,426 |
| **Claude Code** | `~/.claude/skills/` | 81 |
| **Agents** | `~/.agents/skills/` | 56 |
| **Total** | | **~1,563** |

### MCP Servers Available
- ✅ **stitch** - UI design generation (Gemini 3.1 Pro)
- ✅ **github** - Issues, PR, repo
- ✅ **netlify** - Site deploy
- ✅ **cloudflare** - Workers, KV, R2, D1
- ⚠️ **context7** - Latest library docs (needs key)
- 🚫 **supabase** - Disabled

---

## 📝 Lesson & Pattern Tracking

### When to Create Lessons
- When a mistake is made
- When a non-obvious solution is found
- When project-specific knowledge is discovered

### When to Create Skills
- When a pattern repeats 3+ times
- When a solution is generic and reusable
- When a workflow is complex and repeatable

### Storage Locations
- Project lessons: `documentation/lessons/`
- Global lessons: `~/.config/opencode/GLOBAL_LESSONS.md`
- Project skills: `documentation/skills/`
- Global skills: `~/.claude/skills/`

---

## 💡 Tips

1. **Boot Sequence:** Read CLAUDE.md → GLOBAL_LESSONS → SKILL_INDEX at start
2. **Thinking Protocol:** Run before every action
3. **Auto-loading:** Skills are loaded automatically based on task context
4. **Manual invocation:** Use `/skill-name` for direct access
5. **Proactive mode:** Always look for patterns and improvements
6. **Context rules:** Only from root, never outside
7. **Error learning:** Never patch without reproducing first
8. **Hard stops:** Always confirm for destructive actions

---

*Generated: 2026-05-03*