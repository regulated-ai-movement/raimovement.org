import * as React from 'react'

import * as config from '@/lib/config'
import { GitHubIcon } from '@/lib/icons/github'
import { LinkedInIcon } from '@/lib/icons/linkedin'
import { TwitterIcon } from '@/lib/icons/twitter'

import styles from './styles.module.css'

export function FooterImpl() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        Copyright {currentYear} {config.author}
      </div>


      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://x.com/${config.twitter}`}
            title={`X @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <TwitterIcon />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubIcon />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInIcon />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
