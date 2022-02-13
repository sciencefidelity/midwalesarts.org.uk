import { render, screen } from "@testing-library/react"
import sanityClient from "lib/sanityClient"
import { frontPageQuery } from "lib/queries"
import { mockUseRouter } from "./__helpers__/router.test"
import Home from "pages/index"
import { IndexData } from "lib/interfaces"

const router = mockUseRouter()

test("renders a heading", async () => {
  const data: IndexData = await sanityClient.fetch(frontPageQuery)
  const { featured, frontPage, site, socialLinks, menu } = data
  render(<Home data={{ featured, frontPage, site, socialLinks, menu }} />)

  screen.debug()
})
