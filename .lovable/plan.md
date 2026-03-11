

# Lowbyrinth Background Image Opacity Fix

## Problem
The background image (`lowbyrinth.png`) is currently at `opacity-30` (30%), which is too high. It competes visually with the node cards and reduces readability, as seen in the screenshot where the geometric pattern dominates the view.

## Proposed Options

### Option A: Restore to 7% (as per original design intent)
- Change `opacity-30` → `opacity-[0.07]`
- Very subtle, the image becomes a faint structural hint

### Option B: 12-15% — balanced middle ground
- Change to `opacity-[0.12]` or `opacity-[0.15]`
- The labyrinth pattern is visible as a background texture but doesn't compete with the cards
- Provides enough visual context without overwhelming the interface

### Option C: 5% with a subtle blur
- `opacity-[0.05]` + `blur-[1px]`
- Ultra-minimal: the image is barely perceptible, acting as atmospheric texture only

## Recommendation
**Option B at `opacity-[0.12]`** — visible enough to reinforce the labyrinth concept, subtle enough to keep focus on the navigation cards.

## Change
One line in `src/components/LowbyrinthMode.tsx` (line 166): replace `opacity-30` with the chosen value.

