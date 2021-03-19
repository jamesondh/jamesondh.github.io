import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"

export default function Blog() {
  return (
    <Layout>
      <Link href="/">
        Home
      </Link>{' '}
      Blog
      <div>
        <ul>
          <li>2021-03-19 // <Link href="what-is-a-crypto-network">What is a Crypto Network?</Link></li>
          <li>2020-11-14 // <Link href="sogurs-fair-token-distribution">Sögur's Fair Token Distribution</Link></li>
        </ul>
      </div>
    </Layout>
  )
}
