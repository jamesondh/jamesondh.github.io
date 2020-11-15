import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import Layout from "../components/layout"

const AlbumArt = styled.img`
  width: 100px;
  margin-right: 5px;
  :hover {
    box-shadow: 6px 2px 16px 0px rgba(136, 165, 191, 0.1), -6px -2px 16px 0px rgba(255, 255, 255, 0.2);
  }
`

export default function Home() {
  return (
    <Layout>
      Home{' '}
      <Link href="/blog">
        Blog
      </Link>
      <h1>Jameson Hodge <i className="em em-mage" aria-label="MAGE"></i><i className="em em-camping" aria-label=""></i><i className="em em-musical_keyboard" aria-label="MUSICAL KEYBOARD"></i></h1>

      <p>I'm passionate about crypto, music, design, and ecology. I have experience building, designing, and documenting web applications, distributed computing systems, and crypto networks, as well as engineering several sample packs and producing electronic music, and a B.S. in CS. Some of my favorite technologies/platforms include Ethereum, React.js, REAPER, Cardano, and Linux/BSD. Please email me at <a href="mailto:contact@jamesonhodge.com">contact@jamesonhodge.com</a> to get in touch!<i className="em em-slightly_smiling_face" aria-label="SLIGHTLY SMILING FACE"></i></p>

      <div className="music">
          <a href="https://soundcloud.com/jamesonhodge/i-sought-and-found-nothing"><AlbumArt src="https://i1.sndcdn.com/artworks-zCdzqrqnSDVDZ29n-o94YlQ-t500x500.jpg" alt="I Sought and Found Nothing cover art"/></a>
          <a href="https://soundcloud.com/jamesonhodge/what-id-do"><AlbumArt src="https://i1.sndcdn.com/artworks-oo9VYObs5HE7Pm2a-0xCRHA-t500x500.jpg" alt="What I'd Do cover art"/></a>
          <a href="https://soundcloud.com/jamesonhodge/eucalyptus"><AlbumArt src="https://i1.sndcdn.com/artworks-000618258847-lp1smm-t500x500.jpg" alt="Eucalyptus cover art"/></a>
          <a href="https://soundcloud.com/jamesonhodge/cant-stand-this"><AlbumArt src="https://i1.sndcdn.com/artworks-000565029224-36mcej-t500x500.jpg" alt="Can't Stand This cover art"/></a>
          <a href="https://soundcloud.com/jamesonhodge/sets/portrait-i"><AlbumArt src="https://i1.sndcdn.com/artworks-000572869262-uzidd3-t500x500.jpg" alt="Portrait I cover art"/></a>
          <a href="https://soundcloud.com/insight-music/sets/jameson-hodge-waller-form"><AlbumArt src="https://i1.sndcdn.com/artworks-000233993896-67slcx-t500x500.jpg" alt="Form cover art"/></a>
      </div>

      <p><a href="https://twitter.com/jamesonhodge">Twitter</a> – <a href="https://github.com/jamesondh">GitHub</a> – <a href="https://audius.co/jamesonhodge">Audius</a> – <a href="https://soundcloud.com/jamesonhodge">SoundCloud</a> – <a href="https://jamesonhodge.bandcamp.com/">Bandcamp</a> – <a href="https://open.spotify.com/artist/6eoS42oBq9Et9uY0NKYAKs">Spotify</a></p>
    </Layout>
  )
}
