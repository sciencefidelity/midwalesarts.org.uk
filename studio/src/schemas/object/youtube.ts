import { RiYoutubeLine } from 'react-icons/ri'
import YouTubePreview from '../../components/YouTubePreview'

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube',
  icon: RiYoutubeLine,
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL'
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: YouTubePreview
  }
}
