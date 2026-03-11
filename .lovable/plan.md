

## Language Switcher — Dual-Option with Active Highlight

Replace the single toggle button with a segmented `PT | EN` control where both options are always visible and the active language is highlighted.

### Design

```text
┌──────────────────────────────────────────────────┐
│  LOWBYRINTH   MANUAL DO MÉTODO        [PT│EN]    │
│                                        ^^        │
│                              active = primary    │
│                              inactive = muted    │
└──────────────────────────────────────────────────┘
```

### Implementation — `src/components/Layout.tsx`

Replace the single `<button>` (lines 42-48) with two adjacent buttons inside a shared border container:

```tsx
<div className="ml-auto flex items-center border border-border/50 rounded overflow-hidden">
  <button
    onClick={() => i18n.changeLanguage("pt")}
    className={cn(
      "text-[11px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 transition-colors",
      i18n.language === "pt"
        ? "bg-primary/20 text-primary"
        : "text-muted-foreground hover:text-foreground"
    )}
  >
    PT
  </button>
  <div className="w-px h-4 bg-border/50" />
  <button
    onClick={() => i18n.changeLanguage("en")}
    className={cn(
      "text-[11px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 transition-colors",
      i18n.language === "en"
        ? "bg-primary/20 text-primary"
        : "text-muted-foreground hover:text-foreground"
    )}
  >
    EN
  </button>
</div>
```

The active language gets `bg-primary/20 text-primary` (subtle magenta background + magenta text). The inactive one stays `text-muted-foreground`. Both are always visible. The `toggleLang` function can be removed since each button calls `changeLanguage` directly.

One file changed, no new dependencies.

