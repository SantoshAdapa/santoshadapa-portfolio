
# Hero Section Enhancements Plan

## Overview
Enhance the Hero section with your professional avatar, typing animation for roles, and LinkedIn button - keeping your original tagline.

---

## What You'll Get

### 1. Professional Avatar
- Your headshot displayed in a circular frame above your name
- Subtle ring/border effect with hover scale animation
- Size: ~128px mobile, ~160px desktop

### 2. Typing Animation for Role Title
- Animated text cycling through: "AI Engineer", "ML Developer", "Software Developer", "Problem Solver"
- Smooth typing and deleting effect with blinking cursor
- Replaces static "AI/ML Engineer • Software Developer"

### 3. LinkedIn Button
- Added alongside GitHub button
- Links to: linkedin.com/in/santoshadapa

### 4. Tagline (Unchanged)
- Keeping: "I build AI-driven systems — voice-interactive assistants and real-time computer vision applications."

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/assets/profile-pic.webp` | Add your uploaded headshot |
| `src/hooks/use-typewriter.tsx` | New hook for typing animation |
| `tailwind.config.ts` | Add cursor blink animation |
| `src/components/Hero.tsx` | Integrate avatar, typewriter, LinkedIn |

---

## Technical Details

### New Typewriter Hook
- Cycles through role strings with typing/deleting effect
- Configurable speeds for typing, deleting, and pause between words
- Returns current displayed text

### New Animation (tailwind.config.ts)
```text
"blink" keyframe: cursor blinking effect (opacity toggle)
```

### Hero Layout (Top to Bottom)
1. "Open to opportunities" badge
2. **NEW**: Professional headshot (circular with ring)
3. Name: "Adapa Sai Santosh"
4. **NEW**: Typing animation for roles
5. Tagline (unchanged)
6. CTA Buttons: View Projects | GitHub | **LinkedIn** | Contact | Resume
7. Tech badges: Python, Machine Learning
8. Brain icon indicator

---

## Button Order
```text
[View Projects] [GitHub] [LinkedIn] [Contact Me] [Download Resume]
```
