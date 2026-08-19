export enum SiteMotion {
  Enabled = "enabled",
  Disabled = "disabled",
}

/**
 * Master switch for all site motion: Framer Motion entrances, stagger delays,
 * header transitions, and CSS hover/transition effects.
 *
 * Set to `SiteMotion.Disabled` to turn everything off instantly.
 */
export const SITE_MOTION: SiteMotion = SiteMotion.Enabled;

export function isSiteMotionEnabled(): boolean {
  return SITE_MOTION === SiteMotion.Enabled;
}

/** Stagger delay for grid/list reveals. Returns 0 when motion is disabled. */
export function motionStagger(index: number, step = 0.15): number {
  return isSiteMotionEnabled() ? index * step : 0;
}
