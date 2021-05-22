import './App.css';

import { styled } from "solid-styled-components";

const Container = styled("div")`
  margin: auto;
  width: 80%;
  max-width: 1000px;
  padding: 10px;
  padding-top: 20px;
`;
const Centered = styled("div")`
  text-align:center;
`;
const AlbumArt = styled("img")`
  width: 80px;
  height: 80px;
  margin: 14px;
  :hover {
    box-shadow: 6px 2px 16px 0px rgba(136, 165, 191, 0.1), -6px -2px 16px 0px rgba(255, 255, 255, 0.2);
  }
`;
const ProfileArt = styled("img")`
  width: 200px;
  height: 200px;
  margin-right: 30px;
  @media (max-width: 800px) {
    display: none;
  }
`;
const AlbumArtContainer = styled("div")`
text-align: center;
  margin-top: 2.5em;
`;
const FooterText = styled("div")`
  text-align: center;
  margin-top: 2em;
  p { color: grey  }
`;
const FlexContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 2em;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

function App() {
  return (
      <Container>

          <FlexContainer>
              <ProfileArt src="https://i1.sndcdn.com/artworks-zCdzqrqnSDVDZ29n-o94YlQ-t500x500.jpg" alt="The cover art of a song of mine called I Sought And Found Nothing (find it in my links)"/>
              <div>
                  <h1>Jameson Hodge 🧙</h1>
                  <p><a href="https://twitter.com/jamesonhodge">Twitter</a> – <a href="https://github.com/jamesondh">GitHub</a> – <a href="https://audius.co/jamesonhodge">Audius</a> – <a href="https://soundcloud.com/jamesonhodge">SoundCloud</a> – <a href="https://jamesonhodge.bandcamp.com/">Bandcamp</a> – <a href="https://open.spotify.com/artist/6eoS42oBq9Et9uY0NKYAKs">Spotify</a></p>
              </div>
          </FlexContainer>

          <p>Hi 👋 I'm an engineer at <a href="https://fluxprotocol.org/">Flux</a> and a music producer. I spend a lot of my time on crypto, electronic music, computers, and hiking.</p>
          <p>Some topics I'm actively researching are governance, automated market makers, blockchain scaling and optimization, cryptography and zero-knowledge proofs, and mechanism design. Previously, I worked with <a href="https://www.opensourcestrategies.com/">OSS</a> and the <a href="https://wiki.hyperledger.org/display/CASIG/">Hyperledger Climate Action SIG</a> on a DAO and carbon offset NFTs deployed to xDai, participated in the KB2 security track for the <a href="https://kernel.community/">KERNEL</a> fellowship, and graduated with a B.S. in Computer Science from <a href="https://ccse.kennesaw.edu/">SPSU</a>. I produce electronic music and have released a few sound design packs in the past, mostly on <a href="https://www.noiiz.com/">Noiiz</a>. Talk to me at contact@jamesonhodge.com (and sign your message with my <a href="jh-pgp-key.txt">key</a> if you'd like)! 🙂</p>

          <p>Tech: Ethereum, NEAR, Rust, TypeScript, Python, Solidity, React, Sia Skynet, IPFS, Git, Linux, Emacs, REAPER, Ableton Live, XFER Serum</p>

          <AlbumArtContainer>
              <a href="https://audius.co/jamesonhodge/purple-moss-408167"><AlbumArt src="https://creatornode2.audius.co/ipfs/QmUk5pGMhyvtT3zcpkBmMCtbVvBDgvDdhh49SgapmkxGrx/1000x1000.jpg" alt="Purple Moss cover art"/></a>
              <a href="https://audius.co/jamesonhodge/i-sought-and-found-nothing-84589"><AlbumArt src="https://i1.sndcdn.com/artworks-zCdzqrqnSDVDZ29n-o94YlQ-t500x500.jpg" alt="I Sought and Found Nothing cover art"/></a>
              <a href="https://audius.co/jamesonhodge/eucalyptus-102823"><AlbumArt src="https://i1.sndcdn.com/artworks-000618258847-lp1smm-t500x500.jpg" alt="Eucalyptus cover art"/></a>
              <a href="https://audius.co/jamesonhodge/losing-control-389704"><AlbumArt src="https://creatornode2.audius.co/ipfs/QmRkrsRvxyGM7v46G3BTn73pmNooR5eB6TtW9jgsqvtdsD/1000x1000.jpg" alt="Losing Control cover art"/></a>
              <a href="https://soundcloud.com/insight-music/sets/jameson-hodge-waller-form"><AlbumArt src="https://i1.sndcdn.com/artworks-000233993896-67slcx-t500x500.jpg" alt="Form cover art"/></a>
              <a href="https://audius.co/jamesonhodge/cant-stand-this-9861"><AlbumArt src="https://i1.sndcdn.com/artworks-000565029224-36mcej-t500x500.jpg" alt="Can't Stand This cover art"/></a>
          </AlbumArtContainer>

          <Centered>
              <p>---</p>
              <p><small>jamesonhodge.eth &emsp; jamesonhodge.near &emsp; y.at/🍄🦌🔮🕸️</small></p>
              <p><small>Last updated May 2021</small></p>
          </Centered>

      </Container>
  );
}

export default App;
