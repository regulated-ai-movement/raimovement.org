import Script from 'next/script'
import { COOKIE_CONSENT_KEY, Consent } from './cookie-consent/cookie-consent.definitions'
import { getCookie } from 'nextjs-cookie'

interface HeadScriptProps {
  trackingID: string
}

export const HeadScript = ({ trackingID }: HeadScriptProps) => {
  const cookieConsent = getCookie(COOKIE_CONSENT_KEY);
  const analyticsStorage = cookieConsent === Consent.Accepted ? 'granted' : 'denied';
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          
          function gtag(){dataLayer.push(arguments);}
          
          gtag('js', new Date());
          gtag('config', '${trackingID}');
          gtag('consent', 'default', {
            'analytics_storage': '${analyticsStorage}'
          });
        `}
      </Script>
    </>
  )
}
