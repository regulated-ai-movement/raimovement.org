import type * as types from 'notion-types'
import cs from 'classnames'
import * as React from 'react'
import { Breadcrumbs, Header, Search, useNotionContext } from 'react-notion-x'

import { isSearchEnabled, navigationLinks, navigationStyle } from '@/lib/config'

import styles from './styles.module.css'

function Logo() {
  return (
    <a href='/' className={styles.logoLink}>
      <img src='/logo.svg' alt='RAI Movement' className={styles.logo} />
    </a>
  )
}

export function NotionPageHeader({
  block
}: {
  block: types.CollectionViewPageBlock | types.PageBlock
}) {
  const { components, mapPageUrl } = useNotionContext()

  if (navigationStyle === 'default') {
    return (
      <header className='notion-header'>
        <div className='notion-nav-header'>
          <div className={styles.navLeft}>
            <Logo />
            <Breadcrumbs block={block} rootOnly={true} />
          </div>

          <div className='notion-nav-header-rhs breadcrumbs'>
            {isSearchEnabled && <Search block={block} title={null} />}
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className='notion-header'>
      <div className='notion-nav-header'>
        <div className={styles.navLeft}>
          <Logo />
          <Breadcrumbs block={block} rootOnly={true} />
        </div>

        <div className='notion-nav-header-rhs breadcrumbs'>
          {navigationLinks
            ?.map((link, index) => {
              if (!link?.pageId && !link?.url) {
                return null
              }

              if (link.pageId) {
                return (
                  <components.PageLink
                    href={mapPageUrl(link.pageId)}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.PageLink>
                )
              } else {
                return (
                  <components.Link
                    href={link.url}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.Link>
                )
              }
            })
            .filter(Boolean)}

          {isSearchEnabled && <Search block={block} title={null} />}
        </div>
      </div>
    </header>
  )
}
