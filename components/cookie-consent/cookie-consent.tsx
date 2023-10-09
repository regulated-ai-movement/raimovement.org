import Link from 'next/link'
import { PageLinks } from '../../shared/config'
import { getCookie, setCookie } from 'nextjs-cookie'
import { useEffect, useState } from 'react'
import { COOKIE_CONSENT_KEY, Consent } from './cookie-consent.definitions'

export const CookieConsent = (): JSX.Element | null => {
  const [cookieConsent, setCookieConsent] = useState<boolean>(true)

  useEffect(() => {
    const cookieConsent = getCookie(COOKIE_CONSENT_KEY)
    if (cookieConsent) {
      setCookieConsent(true)
    } else {
      setCookieConsent(false)
    }
  }, [])

  if (cookieConsent) {
    return null
  }

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCookie(
      COOKIE_CONSENT_KEY,
      (event.target as HTMLButtonElement).value as Consent
    )
    setCookieConsent(true)
  }

  return (
    <div className="shadow-lg fixed bottom-0 left-0 right-0 bg-theme-white text-theme-blue text-center p-5">
      <p>
        {'Hello 👋, is it ok if we use cookies to improve your experience? '}
        <a
          className="text-theme-red hover:underline"
          href={PageLinks.CookieConsent}
        >
          {'Read more'}
        </a>
      </p>
      <div className="flex justify-center gap-5">
        <button
          className="p-2 m-2 bg-green-600 text-theme-white rounded-md"
          onClick={handleClick}
          value={Consent.Accepted}
        >
          {'Accept'}
        </button>
        <button
          className="p-2 m-2 border-1 border-solid border-theme-red text-theme-red rounded-md"
          onClick={handleClick}
          value={Consent.Declined}
        >
          {'Decline'}
        </button>
      </div>
    </div>
  )
}
