import { useRouter } from 'next/router'

export default {
    logo: <span>{'The Regulated AI Movement'}</span>,
    project: {
      link: 'https://github.com/regulated-ai-movement/raimovement.org'
    },
    search: {
      placeholder: 'Search here...',
    },
    footer: {
      text: (
        <span>
          {new Date().getFullYear()} ©{' '}
          <a href="/licenses/ai-restrictions-for-creatives">
            {'Under AIR-C License'}
          </a>
          {' | '}
          <a href="/cookie-consent">
            {'Cookie Consent'}
          </a>
          {' | '}
          <a href="/privacy-policy">
            {'Privacy Policy'}
          </a>
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