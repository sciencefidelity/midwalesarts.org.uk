import React, { FC } from 'react'
import moment from 'moment'
import { GoogleLogo, SearchIcon } from './GoogleIcons'
import s from './Google.module.css'
import u from './Seo.module.css'

interface Props {
  document: {
    displayed: {
      _createdAt: string
      ogTitle: string
      ogDescription: string
      ogImage: any
      publishedAt: string
      slug: {
        current: string
      }
    }
  }
}

const googleize = (url: string) => {
  const arr: string[] = url.split(/(?<!\/)\/(?!\/)/g)
  return (
    <div>
      {arr[0]}
      {arr[1] && (
        <span className={s.subdirectory}>{' › ' + arr[arr.length - 1]}</span>
      )}
    </div>
  )
}

const Google: FC<Props> = ({ document }) => {
  const url = 'https://midwalesarts.org.uk'
  let canonical = <div>{url}</div>
  if (document.displayed.slug.current) {
    canonical = googleize(`${url}/${document.displayed.slug.current}`)
  }
  let metaTitle = document?.displayed?.ogTitle
    ? document?.displayed?.ogTitle
    : '(untitled)'
  let publishedAt = moment(document.displayed._createdAt).format('DD MMM YYYY')
  if (document?.displayed?.publishedAt) {
    publishedAt = moment(document.displayed.publishedAt).format('DD MMM YYYY')
  }
  let metaDescription = document?.displayed?.ogDescription
    ? document?.displayed?.ogDescription
    : ''
  return (
    <div className={u.previewPane}>
      <div className={u.previewContent}>
        <div className={s.seoContainer}>
          <div className={`${s.seoPreview} ${u.flex}`}>
            <div className={`${u.flex} ${u.mb7}`}>
              <GoogleLogo />
              <div className={`${s.seoSearchBar} ${u.flex}`}>
                <SearchIcon />
              </div>
            </div>
            <div className={s.seoPreviewLink}>{canonical}</div>
            <div className={s.seoPreviewTitle}>{metaTitle}</div>
            <div className={s.seoPreviewDesc}>
              {publishedAt}
              {' — '}
              {metaDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Google
