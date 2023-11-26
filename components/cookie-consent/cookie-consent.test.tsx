import { CookieConsent } from './cookie-consent'
import { ConsentLabel } from './cookie-consent.definitions'
import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { setCookie } from 'nextjs-cookie'
import { updateConsent } from '../../shared/gtag'
import { StaticRoutes } from '../../shared/config'
import { usePathname } from 'next/navigation'

vi.mock('nextjs-cookie', () => ({
  getCookie: vi.fn(),
  setCookie: vi.fn()
}))

vi.mock('../../shared/gtag', () => ({
  updateConsent: vi.fn()
}))

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(() => 'other-route')
}))

describe('CookieConsent', () => {
  beforeAll(() => {
    vi.clearAllMocks()
  })

  test('should render', () => {
    const wrapper = render(<CookieConsent />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should render with accept button', () => {
    render(<CookieConsent />)

    expect(screen.getByText(ConsentLabel.Accept)).toBeVisible()
    expect(screen.getByText(ConsentLabel.Decline)).toBeVisible()
  })

  test('should disappear on click and set cookie', () => {
    render(<CookieConsent />)

    const acceptButton = screen.getByText(ConsentLabel.Accept)

    fireEvent.click(acceptButton)

    expect(acceptButton).not.toBeVisible()
    expect(setCookie).toHaveBeenCalled()
    expect(updateConsent).toHaveBeenCalled()
  })

  test('should disappear on privacy and terms pages', () => {
    vi.mocked(usePathname).mockReturnValue(`/${StaticRoutes.CookieConsent}`)

    render(<CookieConsent />)

    const acceptButton = screen.queryByText(ConsentLabel.Accept)

    expect(acceptButton).toBeNull()
  })
})
