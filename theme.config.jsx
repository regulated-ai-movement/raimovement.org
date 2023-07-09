import { useRouter } from 'next/router'
import { NavbarExtraContent } from './components/navbar-extra-content'
import { MainLogo } from './components/main-logo'

export default {
    head: () => {
      return (
        <>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </>
      )
    },
    logo: (<MainLogo width={250} title={'The Regulated AI Movement'} />),
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