const Font = ({ font }: { font: string }) => (
  <link
    rel="preload"
    href={`/fonts/${font}.woff2`}
    as="font"
    crossOrigin=""
  />
)
export default Font
