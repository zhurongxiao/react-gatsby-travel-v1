import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"


const IndexPage = () => (
  <Layout>

    <Hero />
    <Trips heading="Our Favorite Destinations" />
    <Testimonials />
    <Stats />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
