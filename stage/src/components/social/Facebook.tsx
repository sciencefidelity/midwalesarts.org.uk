import React, {FC} from 'react'
// import { urlFor } from '../../lib/utils'
import {FacebookLogo, HeartIcon, ThumbIcon} from './FacebookIcons'
import s from './Facebook.module.css'
import u from './Seo.module.css'

interface Props {
  document: {
    displayed: {
      ogTitle: string
      ogDescription: string
      ogImage: any
      slug: {
        current: string
      }
    }
  }
}

const Facebook: FC<Props> = ({document}) => {
  const url = 'midwalesarts.org.uk'
  let facebookTitle = document?.displayed?.ogTitle ? document?.displayed?.ogTitle : '(untitled)'
  let facebookDescription = document?.displayed?.ogDescription
    ? document?.displayed?.ogDescription
    : ''
  return (
    <div className={u.previewPane}>
      <div className={u.previewContent}>
        <div className={s.ogContainer}>
          <div className={`${u.flex} ${u.ma3} ${u.mb2}`}>
            <span>
              <FacebookLogo />
            </span>
            <div>
              <div className={s.ogTitle}>Mid Wales Arts</div>
              <div className={s.ogTime}>12 hrs</div>
            </div>
          </div>
          <div className={`${u.flex} ${u.flexColumn} ${u.ma3} ${u.mt2}`}>
            <span className={`${s.ogDesc} ${u.w100} ${u.mb2}`}></span>
            <span className={`${s.ogDesc} ${u.w60}`}></span>
          </div>
          <div className={s.ogPreview}>
            <div className={s.ogPreviewImage}>
              {/* {document.displayed.ogImage && (
                <img
                  src={urlFor(document.displayed.ogImage)
                    .auto('format')
                    .width(952)
                    .height(496)
                    .quality(100)
                    .url()}
                  alt=""
                />
              )} */}
            </div>
            <div className={s.ogPreviewBookmark}>
              <div className={s.ogPreviewContent}>
                <div className={s.ogPreviewMeta}>{url}</div>
                <div className={s.ogPreviewTitle}>{facebookTitle}</div>
                <div className={s.ogPreviewDesc}>{facebookDescription}</div>
              </div>
            </div>
          </div>
          <div className={s.ogReactions}>
            <span className={s.ogLikes}>
              <ThumbIcon />
              <HeartIcon />
              182
            </span>
            <span className={s.ogComments}>7 comments</span>
            <span className={`${s.ogComments} ${u.ml2}`}>2 shares</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Facebook
