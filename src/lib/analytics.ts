const EVENT_TYPE = ['link', 'navigate', 'recommend'] as const;
type EventType = (typeof EVENT_TYPE)[number];

type TrackEvent = (
  event_name: string,
  event_data?: { type?: EventType } & { [key: string]: string | number }
) => void;

export const trackEvent: TrackEvent = (event_name, event_data) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event_name, event_data ?? {});
  }
};
