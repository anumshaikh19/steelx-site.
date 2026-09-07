# Implementation Plan

## Goal
Deliver an original STEELX product-launch experience inspired by the cinematic structure of the Apple iPhone page, while preserving STEELX branding and making site content manageable from the live preview.

## Work
1. Preserve and refine the existing `/pvd-surfaces` launch page rather than copying Apple branding, assets, or source.
2. Add an authenticated editor mode for text, images, section visibility, ordering, duplication, and deletion.
3. Persist edits and uploaded media in Lovable Cloud, with safe defaults so the published site remains readable before customization.
4. Add preview/publish controls that fit the existing restrained STEELX visual language.
5. Validate responsive rendering, accessibility basics, content persistence, and build health.
6. Package the full source tree as a downloadable ZIP.

## Technical details
- Store page documents and section instances in Cloud tables with authenticated write policies and public read access.
- Keep editor controls out of the public presentation unless editor mode is active.
- Use the existing TanStack Start routes and STEELX motion/material components.
- Publishing from the platform remains an explicit user action; the editor will save the live content used by the published route.
