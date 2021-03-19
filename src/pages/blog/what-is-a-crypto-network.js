import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import Layout from "../../components/layout"

const Title = styled.h2`
  margin-bottom: 7px;
`
const Author = styled.p`
  margin: 2px 0;
`
const Dates = styled.h5`
  margin-top: 5px;
  margin-bottom: 15px;
`

export default function WhatIsACryptoNetwork() {
  return (
    <Layout>
      <Link href="/">
        Home
      </Link>{' '}
      <Link href="/blog">Blog</Link>
      <div>
        <Title>What is a Crypto Network?</Title>
        <Author>By Jameson Hodge</Author>
        <Dates>Published 2021-03-19 &nbsp;&middot;&nbsp; Updated 2021-03-19</Dates>
        <p>A crypto network provides participants a <i>shared language for representing value and data</i> in a <i>trust-minimized environment</i> using cryptography and a consensus mechanism.</p>
        <p>They can be used to store and transfer money, art, and all types of digital assets in a highly flexible and programmable way. I prefer to use the more abstract term "crypto network" instead of the more common "blockchain" when referring to something like Bitcoin or Ethereum and I will explain why.</p>
        <p>"Blockchain" refers to the underlying data structure that serves as the database part of a crypto network. It can be thought of as a public Excel spreadsheet that updates every few seconds with some strict rules so that nobody can easily cheat. On public blockchains, interactions that change the state of the blockchain are called transactions since they all involve gas as a spam-reducing mechanism (so you must hold some of this "gas" token to interact with the blockchain). All participants in the network have a private key and public key and use the private key to verify proof of ownership of assets and transaction confirmation.</p>
        <p>The same asset that gas is paid in is also usually used to reward those who create new blocks. Blocks are chained together when a batch of new transactions is made, and the consensus mechanism determines which transactions are included and when. Consensus occurs through a lottery where participants compete to win the block reward. The two most common consensus mechanisms are proof-of-work (PoW) and proof-of-stake (PoS), and both are a bit complicated so I won't go into them in this post. However, consensus mechanisms have different trade-offs and security considerations.</p>
        <p>Currency is a shared belief in the value of something intrinsically valueless. The value of a crypto network comes not merely from the technology, but the shared belief among participants in the value of the network. Fortunately, strong cryptography to verify the ownership of one's assets and a robust consensus mechanism that dissuades malicious actors from manipulating the system minimizes friction to trust (though trust is never entirely eliminated).</p>
        <p>"Crypto network" can also be applied to institutions using different layers of abstraction. For example, I can call both Ethereum mainnet (the blockchain where most smart contract activity is currently taking place) and Uniswap (currently the most active decentralized exchange on Ethereum) crypto networks, even though Uniswap's back-end is a set of smart contracts deployed to Ethereum. Some major projects in crypto don't use a blockchain at all -- IPFS, IOTA, etc.</p>
    <p>Crypto networks are bigger than blockchain because they challenge how we view socioeconomic concepts like value, trust, and scarcity. They are one of the most powerful tools invented by humanity during the Information Age.</p>
      </div>
    </Layout>
  )
}
