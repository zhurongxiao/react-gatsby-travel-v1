import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"


const IndexPage = () => (
  <Layout>

    <Hero />

  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
