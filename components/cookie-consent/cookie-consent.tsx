import { useLocalStorage } from "../../shared/hooks"
const COOKIE_CONSENT_KEY = 'cookie-consent'

export enum Consent {
    Accepted = 'accepted',
    Declined = 'declined',
}

export const CookieConsent = (): JSX.Element | null => {
    const [cookie, setCookie] = useLocalStorage<Consent>(COOKIE_CONSENT_KEY, '')

    if (cookie) return null

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setCookie((event.target as HTMLButtonElement).value as Consent)
    }
    return (
        <div className="cookie-consent">
            <p>
                {'Hey there! We use cookies to improve the experience.'}
            </p>
            <div>
                <button onClick={handleClick} value={Consent.Accepted}>{'Accept'}</button>
                <button onClick={handleClick} value={Consent.Declined}>{'Decline'}</button>
            </div>
        </div>
    )
}