import React from 'react'
import twemoji from 'twemoji'
import parse from 'html-react-parser'
import {Box} from '@sanity/ui'
import styled from 'styled-components'

const EmojiBox = styled(Box)`
  min-width: 24px;
  transform: translateY(1px);
`

// const cy = () => {
//   const flagReact = parse(twemoji.parse(`🏴󠁧󠁢󠁷󠁬󠁳󠁿`, {folder: 'svg', ext: '.svg'}))
//   return <EmojiBox>{flagReact}</EmojiBox>
// }

// export default cy

const WelshFlag = () => {
  return <span>🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>
}
export default WelshFlag
