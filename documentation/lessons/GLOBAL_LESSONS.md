# GLOBAL_LESSONS.md - Learned Lessons

> **Project:** Landing Page Jisoi
> **Location:** `documentation/lessons/GLOBAL_LESSONS.md`
> **Last Updated:** 2026-05-03

---

## 🔑 TOP LESSONS — Selalu Relevan

> Sorted by: frekuensi relevansi, bukan tanggal.

1. **Skill mandatory sebelum mulai task** — Sebelum setiap task baru: cek available_skills. Jika tidak ada → cari / install / buat. Skill adalah default approach, bukan backup opsional.
2. **MCP/Tool untuk task eksternal WAJIB** — Jangan manual jika ada tool otomatis. Web search → MCP, docs → Context7, GitHub → MCP.
3. **Progress check setiap 5 task** — Evaluasi: apakah error yang sama terulang? Apakah lesson dari session sebelumnya diterapkan?
4. **Reproduce dulu sebelum fix** — Jangan patch error yang belum bisa direproduksi secara konsisten.
5. **Secrets tidak pernah hardcode** — Environment variable untuk semua credential, URL, key.
6. **Selesai = test hijau, bukan kode berjalan** — Kode yang berjalan tanpa test bukan selesai.
7. **Baca FULL file sebelum edit, jangan parsial** — Edit parsial tanpa konteks utuh menyebabkan bug.

---

## 📚 Arsip Lengkap

### 🔄 Lesson Categories

| Symbol | Category | Description |
|--------|----------|-------------|
| 🟢 | Discovery | New knowledge gained |
| 🔵 | Pattern | Repeated patterns identified |
| 🟣 | Project-Specific | Jisoi-specific learnings |
| 🔴 | Mistake | Errors made and how to avoid |

---

## 🟢 Discoveries (2026-05-03)

| ID | Lesson | Impact |
|----|--------|--------|
| D001 | OpenCode memiliki 1,426 skills di `~/.config/opencode/skills/` | Know where to find more skills |
| D002 | Claude Code memiliki 81 skills di `~/.claude/skills/` | BMad suite + built-in tools |
| D003 | Agents memiliki 56 skills di `~/.agents/skills/` | Frontend, cloud, database skills |
| D004 | MCP servers: stitch, github, netlify, cloudflare aktif | Can use these tools without setup |
| D005 | Skill discovery workflow: local → claude → opencode → internet → create | Systematic approach to find skills |

---

## 🔵 Patterns Identified

| ID | Pattern | Action |
|----|---------|--------|
| P001 | Landing page → auto-load `landing-page-design`, `frontend-design` | Already in auto-load |
| P002 | Skill not found → search opencode → create if needed | Follow discovery protocol |
| P003 | New project → check for CLAUDE.md → init if missing | Init protocol established |
| P004 | Dark theme → section-based color system dengan light islands | Gaya Jisoi |
| P005 | Stats → monospace + count-up animation + accent color = premium feel | Implementasi Jisoi |
| P006 | UI icons → SVG > Emoji untuk commercial web | Standard Jisoi |

---

## 🟣 Project-Specific (Jisoi)

| ID | Lesson | Date |
|----|--------|------|
| JS001 | Jisoi is a landing page project | 2026-05-03 |
| JS002 | Uses modern frontend technologies | 2026-05-03 |
| JS003 | Context should only come from root directory | 2026-05-03 |
| JS004 | Dark Premium Industrial theme dengan section-based color system | 2026-05-03 |
| JS005 | Font stack: Syne (display), Plus Jakarta Sans (title), Inter (body), Space Mono (numbers) | 2026-05-03 |

---

## 🔴 Mistakes & Fixes (from Global)

| ID | Mistake | Fix | Date |
|----|---------|-----|------|
| M001 | Opacity modifier Tailwind di dark bg = WCAG trap | Verifikasi kontras aktual, minimum 4.5:1 | 2026-05-02 |
| M002 | Unicode escapes (\uXXXX) tidak bekerja di HTML text | Gunakan HTML entities (`&ndash;`, `&mdash;`) | 2026-05-02 |
| M003 | ARIA tab pattern tidak lengkap | Wajib implementasi WAI-ARIA Tabs pattern | 2026-05-02 |
| M004 | Button mobile responsive sizing | Mobile override: btn-md → 44px, btn-lg → 48px | 2026-05-02 |
| M005 | Section padding 2× lipat antar section | Gunakan adjacent sibling combinator untuk same-bg sections | 2026-05-02 |

---

## 📝 Add New Lesson

```markdown
### YYYY-MM-DD

| ID | Lesson | Category | Impact |
|----|--------|----------|--------|
| XXX | Description | 🟢/🔵/🟣/🔴 | Impact description |
```

---

## 🔗 Related Files

- [SKILL_INDEX.md](./skills/SKILL_INDEX.md) - All available skills
- [SKILL_PATHS.md](./skills/SKILL_PATHS.md) - Skill paths
- [CLAUDE.md](../CLAUDE.md) - Agent configuration
- `~/.config/opencode/GLOBAL_LESSONS.md` - Global cross-project lessons
- `~/.config/opencode/GLOBAL_PATTERNS.md` - Global patterns

---

*Generated: 2026-05-03*