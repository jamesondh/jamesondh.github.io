import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import Layout from "../components/layout"

const AlbumArt = styled.img`
  width: 100px;
  margin-right: 7px;
  margin-left: 7px;
  :hover {
    box-shadow: 6px 2px 16px 0px rgba(136, 165, 191, 0.1), -6px -2px 16px 0px rgba(255, 255, 255, 0.2);
  }
`
const AlbumArtContainer = styled.div`
  text-align: center;
  margin-top: 3em;
`
const Socials = styled.p`
  text-align: center;
  margin-top: 2.4em;
`

export default function Home() {
  return (
    <Layout>
      Home{' '}
      <Link href="/blog">
        Blog
      </Link>
      <h1>Jameson Hodge <i className="em em-mage" aria-label="MAGE"></i><i className="em em-camping" aria-label=""></i><i className="em em-musical_keyboard" aria-label="MUSICAL KEYBOARD"></i></h1>

      <p>I invest myself in solving socioeconomic problems with crypto networks, and spend some of my free time writing music and creating art. I am currently working with <a href="https://www.opensourcestrategies.com/">Open Source Strategies</a> developing climate action networks, DAO (decentralized autonomous organization), and carbon accounting tokens, and am actively enaged in research for NFTs, DeFi and automated market makers, cryptography and zero-knowledge proofs, governance, and portfolio management. I am a fellow at <a href="https://kernel.community/">KERNEL</a>, currently engaged in block 2 in the security track. My alma mater is SPSU, from which I have a B.S. in computer science. Hiking and meditation are cool too. <a href="mailto:contact@jamesonhodge.com">Email me</a> to get in touch!&nbsp;<i className="em em-slightly_smiling_face" aria-label="SLIGHTLY SMILING FACE"></i></p>

      <p>Tech: Ethereum, React.js, Optimism, Cardano, Hyperledger Fabric, NEAR, JavaScript, Python, Solidity, Rust, Git, Linux, Gentoo, Emacs</p>

      <AlbumArtContainer>
          <a href="https://soundcloud.com/jamesonhodge/i-sought-and-found-nothing"><AlbumArt src="https://i1.sndcdn.com/artworks-zCdzqrqnSDVDZ29n-o94YlQ-t500x500.jpg" alt="I Sought and Found Nothing cover art"/></a>
          <a href="https://soundcloud.com/jamesonhodge/what-id-do"><AlbumArt src="https://i1.sndcdn.com/artworks-oo9VYObs5HE7Pm2a-0xCRHA-t500x500.jpg" alt="What I'd Do cover art"/></a>
          <a href="https://soundcloud.com/jamesonhodge/eucalyptus"><AlbumArt src="https://i1.sndcdn.com/artworks-000618258847-lp1smm-t500x500.jpg" alt="Eucalyptus cover art"/></a>
          <a href="https://soundcloud.com/jamesonhodge/cant-stand-this"><AlbumArt src="https://i1.sndcdn.com/artworks-000565029224-36mcej-t500x500.jpg" alt="Can't Stand This cover art"/></a>
          <a href="https://soundcloud.com/jamesonhodge/sets/portrait-i"><AlbumArt src="https://i1.sndcdn.com/artworks-000572869262-uzidd3-t500x500.jpg" alt="Portrait I cover art"/></a>
          <a href="https://soundcloud.com/insight-music/sets/jameson-hodge-waller-form"><AlbumArt src="https://i1.sndcdn.com/artworks-000233993896-67slcx-t500x500.jpg" alt="Form cover art"/></a>
      </AlbumArtContainer>

      <Socials>
        <a href="https://twitter.com/jamesonhodge">Twitter</a> – <a href="https://github.com/jamesondh">GitHub</a> – <a href="https://audius.co/jamesonhodge">Audius</a> – <a href="https://soundcloud.com/jamesonhodge">SoundCloud</a> – <a href="https://jamesonhodge.bandcamp.com/">Bandcamp</a> – <a href="https://open.spotify.com/artist/6eoS42oBq9Et9uY0NKYAKs">Spotify</a>
      </Socials>
    </Layout>
  )
}
