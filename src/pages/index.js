import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import Layout from "../components/layout"

const AlbumArt = styled.img`
  width: 60px;
  margin: 14px;
  :hover {
    box-shadow: 6px 2px 16px 0px rgba(136, 165, 191, 0.1), -6px -2px 16px 0px rgba(255, 255, 255, 0.2);
  }
`
const AlbumArtContainer = styled.div`
  text-align: center;
  margin-top: 2.5em;
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

      <p>I build, research, and invest in crypto networks<sup><a href="blog/what-is-a-crypto-network">[?]</a></sup> and sometimes make music and art. I am driven by these theses:</p>

      <ol>
        <li>Realigning economic incentives by non-coercive, transparent, and permissionless institutions is key to contending with the tragedy of the commons.</li>
        <li>Value will continue to accrue primarily over the internet until nearly all things of scarcity can be represented digitally.</li>
        <li>Institutions are abstractions created to serve collections of individuals, thus they ought to be designed to maximize the autonomy of each participant.</li>
      </ol>

      <p>I am currently working with <a href="https://www.opensourcestrategies.com/">Open Source Strategies</a> developing a carbon accounting token network and DAO (decentralized autonomous organization) for the <a href="https://wiki.hyperledger.org/display/CASIG/Climate+Action+and+Accounting+SIG+Home">Hyperledger Climate Action and Accounting SIG</a> and am engaged in independent research for NFTs, DeFi and automated market makers, blockchain scaling, cryptography and zero-knowledge proofs, governance, and automated portfolio management. I am a fellow at <a href="https://kernel.community/">KERNEL</a>, an occasional <a href="https://gitcoin.co/">Gitcoin</a> hacker, and have a B.S. in Computer Science from <a href="https://ccse.kennesaw.edu/">SPSU</a>. I produce electronic music and have released a few sound design packs in the past. I like climbing trees and meditation too. <a href="mailto:contact@jamesonhodge.com">Email me</a> to get in touch!&nbsp;<i className="em em-slightly_smiling_face" aria-label="SLIGHTLY SMILING FACE"></i></p>

      <p>Tech: Ethereum, React, Hyperledger Fabric, NEAR, Sia Skynet, IPFS, JavaScript, Python, Solidity, Rust, Git, Linux, Emacs</p>

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

      <p style={{textAlign: 'center', marginTop: '3em'}}><small>Last updated March 2021</small></p>

    </Layout>
  )
}
