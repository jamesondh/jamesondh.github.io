import React from "react"
import styled from '@emotion/styled'

import "./layout.css"

const Container = styled.div`
  margin: auto;
  width: 80%;
  padding: 10px;
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
