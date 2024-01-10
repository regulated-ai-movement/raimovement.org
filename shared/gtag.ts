export const GA_TRACKING_ID = 'G-DGYJQYJRNW'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
interface EventArguments {
  action: string
  category: string
  label: string
  value: string
}

type AnalyticsStorage = 'granted' | 'denied'

export const event = ({ action, category, label, value }: EventArguments) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}

export const updateConsent = (value: AnalyticsStorage) => {
  window.gtag('consent', 'update', {
    analytics_storage: value
  })
}
