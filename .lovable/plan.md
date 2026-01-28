

# Interactive Design Enhancements

This plan adds two major interactive design features to make your portfolio more engaging and memorable:

## Overview

### 1. Interactive Particle Background
A dynamic particle system that creates floating, glowing dots across the page. The particles will:
- Float gently across the screen with smooth animations
- React to mouse movement (particles move away from cursor)
- Match your color scheme (primary blue tones)
- Work beautifully in both light and dark modes

### 2. Custom Interactive Cursor
Replace the default cursor with a custom animated one featuring:
- A main cursor dot that follows the mouse with slight delay (smooth trailing effect)
- An outer ring that expands when hovering over clickable elements (buttons, links)
- Color changes to match your primary accent color
- Magnetic effect that pulls toward interactive elements

## Implementation Details

### Files to Create

**`src/components/ParticleBackground.tsx`**
- Creates ~50 floating particles using CSS animations
- Particles have randomized positions, sizes, and animation durations
- Uses your existing primary color with varying opacities
- Performance optimized with CSS transforms

**`src/components/CustomCursor.tsx`**
- Tracks mouse position using `requestAnimationFrame` for smooth performance
- Inner dot (8px) follows cursor precisely
- Outer ring (40px) has slight delay for fluid feel
- Detects hover on interactive elements (`a`, `button`, `[role="button"]`)
- Expands and changes opacity on hover
- Hidden on mobile/touch devices

### Files to Modify

**`src/pages/Index.tsx`**
- Add `ParticleBackground` component as a fixed layer behind all content
- Add `CustomCursor` component at the root level

**`src/index.css`**
- Add `cursor: none` to body to hide default cursor
- Add keyframes for particle floating animation
- Add styles for cursor elements

## Visual Preview

The result will be:
- Subtle floating particles creating depth and movement
- A sleek, custom cursor that responds to your interactions
- Professional polish that matches the Stripe/Linear aesthetic you're going for

## Technical Notes

- No external dependencies needed - pure React + CSS
- Performance optimized using CSS transforms and `will-change`
- Responsive - cursor hidden on touch devices, particles scale appropriately
- Dark mode compatible - colors adjust automatically

