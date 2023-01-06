import * as React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"

const IndexPage = () => (
  <Layout>
    <h1>Hello world!</h1>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
