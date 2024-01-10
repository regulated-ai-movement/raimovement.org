import { StaticRoutes } from '../../shared/config'
import { getCookie, setCookie } from 'nextjs-cookie'
import { useCallback, useEffect, useState } from 'react'
import { COOKIE_CONSENT_KEY, Consent } from './cookie-consent.definitions'
import { updateConsent } from '../../shared/gtag'
import { usePathname } from 'next/navigation'

export const CookieConsent = (): JSX.Element | null => {
  const [cookieConsent, setCookieConsent] = useState<boolean>(true)
  const pathname = usePathname()
  const hideConsent =
    pathname.includes(StaticRoutes.PrivacyPolicy) ||
    pathname.includes(StaticRoutes.CookieConsent)

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const consentValue = (event.target as HTMLButtonElement).value as Consent
      setCookie(COOKIE_CONSENT_KEY, consentValue)
      setCookieConsent(true)
      if (consentValue === Consent.Accepted) {
        updateConsent('granted')
      }
    },
    []
  )

  useEffect(() => {
    const cookieConsent = getCookie(COOKIE_CONSENT_KEY)
    if (cookieConsent) {
      setCookieConsent(true)
    } else {
      setCookieConsent(false)
    }
  }, [])

  if (cookieConsent || hideConsent) {
    return null
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-theme-blue bg-opacity-80">
      <div className="shadow-lg bg-theme-white text-theme-blue text-center p-10 h-auto">
        <p>
          {
            'Welcome 👋! Is it ok if we use cookies to improve your experience? '
          }
          <a className="underline" href={StaticRoutes.CookieConsent}>
            {'Read more'}
          </a>
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <button
            className="p-2 m-2 bg-green-600 text-theme-white rounded-md"
            onClick={handleClick}
            value={Consent.Accepted}
          >
            {'Accept'}
          </button>
          <button
            className="p-2 m-2 border-solid border-2 border-theme-red text-theme-red rounded-md"
            onClick={handleClick}
            value={Consent.Declined}
          >
            {'Decline'}
          </button>
        </div>
      </div>
    </div>
  )
}
