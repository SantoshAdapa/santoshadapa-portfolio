

# Fix Interactive Background & Custom Cursor

## Issues Identified

### 1. Particle Background Not Visible
**Root Cause**: The CSS animation (`particle-float`) sets `transform` properties that conflict with the inline `transform` set for mouse interaction. CSS animation transforms override inline transforms, preventing both from working together.

Additionally:
- Particles are very small (2-6px) and low opacity (20%)
- The animation keyframes set opacity values that may make particles too faint

### 2. Custom Cursor Ring Misaligned
**Root Cause**: The animation `useEffect` has `isHovering` in its dependency array. Every time hover state changes, it restarts the animation loop. Combined with:
- Ring position refs start at `{ x: 0, y: 0 }` 
- The slow lerp factor (0.15) means the ring takes a long time to catch up
- When `isHovering` changes, the centering calculation changes (size 40 vs 60), causing jumps

## Fixes

### ParticleBackground.tsx
1. **Remove CSS animation conflicts** - Use only CSS animations OR only JS-driven transforms, not both
2. **Increase visibility** - Larger particles (4-10px) with higher opacity (30-40%)
3. **Use CSS variables** for mouse-reactive offset that doesn't conflict with animation

### CustomCursor.tsx  
1. **Remove `isHovering` from animation useEffect dependency** - Use a ref instead to prevent animation restarts
2. **Fix centering calculation** - Always use consistent centering regardless of hover state
3. **Initialize positions** from first mouse event to prevent starting from (0,0)

## Implementation

### File: `src/components/ParticleBackground.tsx`
- Increase particle size: `Math.random() * 8 + 4` (4-12px)
- Increase opacity: `bg-primary/30 dark:bg-primary/40`
- Remove `particle-float` class to avoid transform conflicts (use only JS-driven movement)
- Add subtle CSS animation for glow pulsing instead

### File: `src/components/CustomCursor.tsx`
- Use `useRef` for `isHovering` state to avoid animation restart
- Keep hover detection but use ref value in animation loop
- Fix ring centering to always use base size (40px) in transform, use CSS for size change

### File: `src/index.css`
- Add new `particle-glow` animation for opacity/glow pulsing (no transform)
- Keep `particle-float` but mark as optional

## Technical Details

**Particle Transform Fix:**
```tsx
// Instead of CSS animation + inline transform conflict:
// Use only the inline transform for position, add separate glow animation
className="absolute rounded-full bg-primary/35 particle-glow"
style={{
  transform: `translate(${offset.x}px, ${offset.y}px)`,
}}
```

**Cursor Ref Fix:**
```tsx
const isHoveringRef = useRef(false);
// Update ref in hover detection, read from ref in animation loop
// Remove isHovering from useEffect dependency array
```

