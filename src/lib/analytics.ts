export type AnalyticsEvent =
  | "page_view"
  | "cta_click"
  | "contact_submit"
  | "integration_click"
  | "compare_click"
  | "article_view"
  | "scroll_depth";

export type AnalyticsProps = Record<string, string | number | boolean | undefined>;

export function track(event: AnalyticsEvent, props?: AnalyticsProps): void {
  if (typeof window === "undefined") {
    return;
  }
  window.dispatchEvent(
    new CustomEvent("nudgeio:analytics", {
      detail: { event, props: props ?? {}, ts: Date.now() },
    }),
  );
}
