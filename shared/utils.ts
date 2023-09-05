export const isSSR = (): Boolean => typeof window === 'undefined'
export const isCrawler = (): Boolean => navigator.userAgent.includes('Crawler')
export const isClient = (): Boolean => !isSSR() && !isCrawler()