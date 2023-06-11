import { useRouter } from 'next/router'

export default {
    logo: <span>The Regulated AI Movement</span>,
    project: {
      link: 'https://github.com/regulated-ai-movement/raimovement.org'
    },
    search: {
      placeholder: 'Search here...',
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