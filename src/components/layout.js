import React from "react"
import styled from '@emotion/styled'

import "./layout.css"

const Container = styled.div`
  margin: auto;
  width: 80%;
  padding: 10px;
  padding-top: 20px;
  @media (max-width: 1000px) {
    width: 95%
  }
  @media (min-width: 2000px) {
    width: 1000px
  }
`

export default function Layout({ children }) {
  return (
    <>
      <title>Jameson Hodge</title>
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"/>
      <Container>
        {children}
      </Container>
    </>
  )
}
