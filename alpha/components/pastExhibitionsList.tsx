import { FC, Fragment } from "react"
import { ExhibitionPreview } from "components/exhibitionPreview"
import { Label, Exhibition, Settings } from "lib/interfaces"
import s from "styles/exhibitions.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  exhibitions: Exhibition[]
  labels:Label[]
  settings: Settings
}

export const PastExhibitionsList: FC<Props> = ({ exhibitions, labels, settings }) => {
  return (
    <section className={`${s.exhibitionGrid} ${s.pastExhibitions} ${u.grid}`}>
      {exhibitions && exhibitions.map((exhibition, idx) =>
        <Fragment key={exhibition._id}>
          <ExhibitionPreview
            fallbackImage={settings.ogImage}
            heading={idx === 0 && labels[17].text}
            exhibition={exhibition}
            label={labels[56].text}
          />
        </Fragment>
      )}
    </section>
  )
}
