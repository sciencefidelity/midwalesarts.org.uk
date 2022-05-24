import React from 'react'
import twemoji from 'twemoji'
import parse from 'html-react-parser'
import { Box } from '@sanity/ui'
import styled from 'styled-components'

const EmojiBox = styled(Box)`
  min-width: 24px;
  transform: translateY(1px);
`

export const cy = () => {
  const flagReact = parse(twemoji.parse(`🏴󠁧󠁢󠁷󠁬󠁳󠁿`, {folder: 'svg', ext: '.svg'}))
  return (
    <EmojiBox>{flagReact}</EmojiBox>
  )
}
