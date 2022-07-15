import { FC } from "react"
import { ExhibitionPreview } from "components/exhibitionPreview"
import { Image, Label, Exhibition } from "lib/interfaces"
import s from "styles/exhibitions.module.scss"
import u from "styles/utils.module.scss"

interface Props {
  exhibitions: Exhibition[]
  fallbackImage: Image
  labels: Label[]
  postsPerPage: number
}

export const PastExhibitionsList: FC<Props> = ({
  exhibitions,
  fallbackImage,
  labels,
  postsPerPage,
}) => {
  return (
    <section className={`${s.exhibitionGrid} ${s.pastExhibitions} ${u.grid}`}>
      {exhibitions &&
        exhibitions.map((exhibition, idx) => (
          <div
            key={exhibition._id}
            className={`${idx >= postsPerPage ? u.hidden : null}`}
          >
            <ExhibitionPreview
              exhibition={exhibition}
              fallbackImage={fallbackImage}
              heading={idx === 0 && labels[17].text}
              idx={idx}
              label={labels[56].text}
              postsPerPage={postsPerPage}
              top={false}
            />
          </div>
        ))}
    </section>
  )
}
