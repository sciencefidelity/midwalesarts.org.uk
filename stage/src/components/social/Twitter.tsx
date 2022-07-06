import React, {FC} from 'react'
// import { urlFor } from '../../lib/utils'
import {CommentIcon, LikeIcon, RetweetIcon, ShareIcon, TwitterLogo} from './TwitterIcons'
import s from './Twitter.module.css'
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

const Twitter: FC<Props> = ({document}) => {
  const url = 'midwalesarts.org.uk'
  let twitterTitle = document?.displayed?.ogTitle ? document?.displayed?.ogTitle : '(untitled)'
  let twitterDescription = document?.displayed?.ogDescription
    ? document?.displayed?.ogDescription
    : ''
  return (
    <div className={u.previewPane}>
      <div className={u.previewContent}>
        <div className={s.twitterContainer}>
          <div className={`${u.flex} ${u.ma4}`}>
            <span>
              <TwitterLogo />
            </span>
            <div className={u.w100}>
              <span className={s.twitterTitle}>Mid Wales Arts</span>{' '}
              <span className={s.twitterTime}>@MidWalesArts &bull; 12 hrs</span>
              <div className={`${u.flex} ${u.flexColumn} ${u.mt2} ${u.mb3}`}>
                <span className={`${s.twitterDesc} ${u.w100} ${u.mb2}`}></span>
                <span className={`${s.twitterDesc} ${u.w60}`}></span>
              </div>
              <div className={s.twitterPostPreview}>
                <div className={s.twitterPreviewImage}>
                  {/* {document.displayed.ogImage && (
                    <img
                      src={urlFor(document.displayed.ogImage)
                        .auto('format')
                        .width(1014)
                        .height(532)
                        .quality(80)
                        .url()}
                      alt=""
                    />
                  )} */}
                </div>
                <div className={s.twitterPreviewContent}>
                  <div className={s.twitterPreviewMeta}>{url}</div>
                  <div className={s.twitterPreviewTitle}>{twitterTitle}</div>
                  <div className={s.twitterPreviewDesc}>{twitterDescription}</div>
                </div>
              </div>
              <div className={s.twitterReactions}>
                <div className={`${u.flex} ${s.itemsCenter}`}>
                  <CommentIcon />2
                </div>
                <div className={`${u.flex} ${u.itemsCenter}`}>
                  <RetweetIcon />
                  11
                </div>
                <div className={`${u.flex} ${u.itemsCenter}`}>
                  <LikeIcon />
                  32
                </div>
                <div className={`${u.flex} ${u.itemsCenter}`}>
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Twitter
