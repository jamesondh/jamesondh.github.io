import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import Layout from "../../components/layout"

import SogurImg from "../../assets/sogur.png"
import SogurEtherscanImg from "../../assets/soguretherscan.png"

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
const References = styled.ul`
  list-style-type:none;
  padding-left:0
`

export default function SogursFairTokenDistribution() {
  return (
    <Layout>
      <Link href="/">
        Home
      </Link>{' '}
      <Link href="/blog">Blog</Link>
      <div>
        <Title>Sögur's Fair Token Distribution</Title>
        <Author>By Jameson Hodge</Author>
        <Dates>Published 2020-11-14 &nbsp;&middot;&nbsp; Updated 2020-11-14</Dates>
        <center><img src={SogurImg} width={500} height={262}/></center>
        <p>Sögur aims to be a <i>global means of exchange complimenting fiat currencies</i> through its price stabilized token SGR, whose price is linked to the size of its economy via a predetermined growth curve, taking the philosophy that the currency's value should be "a function of the size of its economy and community".<sup>[1]</sup> Unlike stablecoins (i.e. USDT, DAI) which are pegged to fiat currencies, SGR's value is tied to a basket of international currencies (based on the International Monetary Fund's SDR [Special Drawing Rights] which is commonly used by central banks as a stabilization instrument) and eventually drifts from its peg as the market size grows and the value appreciates. At the center of Sögur is a smart contract which acts as a market maker with an elastic supply of SGR that buys back and destroys SGR when collateral (in Ether) is deposited or withdrawn to stabilize the price. So that users can withdraw funds at any point, Sögur implements an algorithm that acts as a liquidity buffer without being exposed to the price of Ether. This results in a decentralized (by matter of being built upon the Ethereum platform) and trust-minimized stable currency protocol.</p>
        <p>To bootstrap its economy and to incentivize growth, Sögur also implements SGN (Saga Genesis) voucher tokens that are minted during predetermined milestones based on the size of the economy, meant for investors of the system. The purpose of SGN is to reward early adopters through a predetermined and transparent mechanism that aligns the incentives of investors and speculators with all participants in the economy (i.e. SGR holders and users). As the market cap increases, the reserve ratio (the proportion of SGR market value that is backed by Sögur’s reserves) decreases from 100% to ~55% as the SDR market cap approaches 1B and so on, and the conversion ratio increases:<sup>[2]</sup></p>
        <ul>
          <li>At 2M SDR market cap, 1 SDR ~ 1 SGN</li>
          <li>At 10M SDR market cap, 1 SDR ~ 1.32 SGN</li>
          <li>At 50M SDR market cap, 1 SDR ~ 1.87 SGN</li>
          <li>At 100M SDR market cap, 1 SDR ~ 2.21 SGN</li>
          <li>At 500M SDR market cap, 1 SDR ~ 3.32 SGN</li>
          <li>At 1B SDR market cap, 1 SDR ~ 4.15 SGN</li>
        </ul>
        <p>While a satisfying definition of a "fair launch" is fleeting and hotly debated within the DeFi community, generally the term is associated with initial token distributions that behave in a way such that all actors within the system have equal opportunity and access to resources, and that incentives of founders and early investors match that of all participants. (A more extreme interpretation of "fair" might suggest founders and early investors should retain no advantage in access to resources, though what justification can be made for key contributors to crypto networks who are not rewarded the same as those with access to capital, e.g. developers?<sup>[3]</sup>). Ideally from the perspective of the community, labor contributed to the network by community members should be rewarded.<sup>[4]</sup> Because early investors and founders take on more risk than subsequent users as the Sögur economy is immature, they take on more risk and consequentially are rewarded through vesting with on-chain SGR conversion milestones. The amount of SGN tokens minted at each milestone is no more than 30% of the total SGR tokens as to prevent centralization of tokens in the hands of a few users. Furthermore, Sögur avoids many of the pitfalls of an unfair token distribution:</p>
        <ul>
        <li>No ICO (Initial Coin Offering), which often leads to misaligned incentives between early and later adopters, higher amounts of speculative investors, and possible legal hurdles<sup>[5]</sup></li>
        <li>No pre-mine (the conversion of SGN to SGR began at zero and grows as the market cap increases)<sup>[6]</sup></li>
        <li>No mismatch of incentives for early adopters and current/new participants due to vesting tied to on-chain milestones (early adopters have a vested interest in the long-term success of the system, i.e. less impact from whales dumping)</li>
        </ul>
        <p>SGR also functions as a governance token as holders can elect members to the Executive Council, which has the target function of "achieving the highest level of effective representation of Participants." The purpose of having a governing body is to uphold the social contract by means of a representative multi-branch governing structure with milestones for implementing community-focused changes based upon the market cap.<sup>[7]</sup> Robust governance is vital to the health of the system and resulting effects of the token distribution model.<sup>[8]</sup></p>
        <p>Finally, we can take a look at Etherscan to see the distribution of tokens as of the time of writing (roughly a year after launch):<sup>[9]</sup></p>
        <center><img src={SogurEtherscanImg} width={600} height={246}/></center>
        <p>Though most of the tokens are still owned by the smart contract due to the relative immaturity of the project, the rest of the tokens are distributed among many holders and exchanges. Sögur is an ambitious project with a strong team and vision promising a <i>diversity of impartially governed contracts</i><sup>[10]</sup> through its measured approach to its founding and growth as well as its partnerships, and time will tell if this approach enables a community-oriented and sustainable monetary policy that works for all participants.</p>
        <p><i><small>Written for the <a href="https://gitcoin.co/issue/SogurCurrency/Gitcoin-hackathon">Sögur Bug Bounty & Hackathon</a></small></i></p>
        <hr/>
        <h4>References</h4>
        <References>
          <li>[1] <a href="https://www.youtube.com/watch?v=Bd4BlLbW00c">https://www.youtube.com/watch?v=Bd4BlLbW00c</a></li>
          <li>[2] <a href="https://www.sogur.com/monetary/">https://www.sogur.com/monetary/</a></li>
          <li>[3] <a href="https://twitter.com/sassal0x/status/1326793997407412227">https://twitter.com/sassal0x/status/1326793997407412227</a></li>
          <li>[4] <a href="https://jammsession.substack.com/p/the-rise-of-the-fair-launch">https://jammsession.substack.com/p/the-rise-of-the-fair-launch</a></li>
          <li>[5] <a href="https://www.law.ox.ac.uk/business-law-blog/blog/2017/12/legal-challenges-initial-coin-offerings-ico">https://www.law.ox.ac.uk/business-law-blog/blog/2017/12/legal-challenges-initial-coin-offerings-ico</a></li>
          <li>[6] <a href="https://www.investopedia.com/terms/p/premining.asp">https://www.investopedia.com/terms/p/premining.asp</a></li>
          <li>[7] <a href="https://www.sogur.com/governance/">https://www.sogur.com/governance/</a></li>
          <li>[8] <a href="https://www.sogur.com/blog/blogPost/XWPHwBQAABXTG-Gi/">https://www.sogur.com/blog/blogPost/XWPHwBQAABXTG-Gi/</a></li>
          <li>[9] <a href="https://etherscan.io/token/0xAEa8e1b6CB5c05D1dAc618551C76bcD578EA3524">https://etherscan.io/token/0xAEa8e1b6CB5c05D1dAc618551C76bcD578EA3524</a></li>
          <li>[10] <a href="https://www.sogur.com/blog/blogPost/W9HS5BQAAOyk8Ny9/">https://www.sogur.com/blog/blogPost/W9HS5BQAAOyk8Ny9/</a></li>
        </References>
      </div>
    </Layout>
  )
}
