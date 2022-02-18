# Mid Wales Arts

[midwalesarts.org.uk](https://midwalesarts.org.uk)

This is a multilingual site with English and Welsh for Mid Wales Arts, an arts center in Wales, UK. The main focus of the arts centre is a programme of Exhibitions across three exhibition spaces, a sculture trail, an events programme including music, gallery talks, concerts, and one off workshops, and a regular weekly workshop programme. The commercial activities of the centre also include a café and bed and breakfast. The site is built to reflect this vaied and ambitious programme, while keeping a record of what has happened, a curatied list of represented artists, and an exhibitions programme that can be experienced online.

The content is managed by staff at the centre using [Sanity Studio](https://sanity.io/), which has proved much more friendly for inexperienced content editors than other systems. The customisability of Sanity Studio has allowed the data to be modeled in a more robust way, allowing us, for example, to keep a long list of artworks for sale, and add these artworks to exhibitions as required. Originally this site was built with [Gatsby](https://www.gatsbyjs.com/), using the graphQL layer provided by the Sanity API. Later I refactored the site to [Next.js](https://www.nextjs.org/), to take adventage of superior i18n handling. This allowed me to rewrite all API queries in [GROQ](https://groq.dev), which has simplified the query process and saved some overhead.

The frontend is a static site built with [Next.js](https://www.nextjs.org/).
the backend API is a headless CMS the uses [Sanity Studio](https://sanity.io/).
