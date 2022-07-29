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

export function PastExhibitionsList({
  exhibitions,
  fallbackImage,
  labels,
  postsPerPage,
}: Props) {
  return (
    <section className={`${s.exhibitionGrid} ${s.pastExhibitions} ${u.grid}`}>
      {exhibitions &&
        exhibitions.map((exhibition, idx) => (
          <div
            key={exhibition._id}
            className={`${idx >= postsPerPage ? u.hidden : ""}`}
          >
            <ExhibitionPreview
              exhibition={exhibition}
              fallbackImage={fallbackImage}
              heading={idx === 0 ? labels[17].text : undefined}
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
