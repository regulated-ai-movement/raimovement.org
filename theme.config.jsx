import { useRouter } from 'next/router'
import { NavbarExtraContent } from './components/navbar-extra-content'
import { NavigationIconLinks } from './shared/config'

export default {
    logo: <span>{'The Regulated AI Movement'}</span>,
    navbar: {
      extraContent: (<NavbarExtraContent />),
    },
    search: {
      placeholder: 'Search here...',
    },
    footer: {
      text: (
        <span style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center' }}>
          <span>
            {new Date().getFullYear()} ©{' '}
            <a href="/licenses/ai-restrictions-for-creatives">
              {'Under AIR-C License'}
            </a>
            {' - '}
            <a href="https://nextra.site/" target="_blank">
              {'Built with Nextra ❤️'}
            </a>
          </span>
          <span>
            <a href="/cookie-consent">
                {'Cookie Consent'}
              </a>
              {' | '}
              <a href="/privacy-policy">
                {'Privacy Policy'}
              </a>
          </span>
        </span>
      )
    },
    useNextSeoProps() {
      const { asPath } = useRouter()
      if (asPath !== '/') {
        return {
          titleTemplate: '%s – The Regulated AI Movement',
        }
      } else {
        return {
          titleTemplate: 'The Regulated AI Movement',
        }
      }
    }
}