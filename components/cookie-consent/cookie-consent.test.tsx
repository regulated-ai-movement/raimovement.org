import { CookieConsent } from './cookie-consent'
import { ConsentLabel } from './cookie-consent.definitions'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

vi.mock('nextjs-cookie', () => ({
  getCookie: vi.fn()
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
})
