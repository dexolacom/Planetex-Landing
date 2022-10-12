import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header'
import FirstSection from '../components/FirstSection/FirstSection'
import CountdownSection from '../components/CountdownSection/CountdownSection'
import BenefitsSection from '../components/BenefitsSection/BenefitsSection'
import ProductSlider from '../components/ProductSlider/ProductSlider'
import RoadmapSlider from '../components/RoadmapSlider/RoadmapSlider'
import TeamSlider from '../components/TeamSlider/TeamSlider'
import SaleSlider from '../components/SaleSlider/SaleSlider'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planetex</title>
        <meta name="description" content="Planetex app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <FirstSection />
        <CountdownSection />
        <BenefitsSection />

        <section className={styles.product_section}>
          <div className={styles.product_container}>
            <h2 className={styles.section_title}>
              Product Suite
            </h2>
            <div className={styles.product_content}>
              <div className={styles.product_left_content}>
                <p className={styles.product_left_text}>
                  Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                  future, Starfish aims to be collaborative, convenient and 
                  communal to build our product suites and become the one-stop-shop 
                  on Astar Network to provide you with DeFi, NFT-Fi and new project 
                  discovery.
                </p>
                <div className={styles.desctop_version}>
                  <div className={styles.buy_button}>
                    Buy Token
                  </div>
                </div>
              </div>
              <div className={styles.mobile_slider}>
                <ProductSlider />
              </div>
              <div className={styles.mobile_version}>
                  <div className={styles.buy_button}>
                    Buy Token
                  </div>
                </div>
              <div className={styles.product_right_content}>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/swap.png"
                      width={55}
                      height={52}
                      alt="Swap icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Swap</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/staking.png"
                      width={59}
                      height={56}
                      alt="Staking icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Staking</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/trading.png"
                      width={49}
                      height={49}
                      alt="Trading icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Trading</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/launchpad.png"
                      width={52}
                      height={52}
                      alt="Launchpad icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Launchpad</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/swap.png"
                      width={55}
                      height={52}
                      alt="Swap icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Swap</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/staking.png"
                      width={59}
                      height={56}
                      alt="Staking icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Staking</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/trading.png"
                      width={49}
                      height={49}
                      alt="Trading icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Trading</p>
                </div>
                <div className={styles.product_right_item}>
                  <div className={styles.product_right_icon}>
                    <Image 
                      src="/images/launchpad.png"
                      width={52}
                      height={52}
                      alt="Launchpad icon"
                    />
                  </div>
                  <p className={styles.product_right_caption}>Launchpad</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.p2egame_section}>
          <h2 className={styles.section_title}>
            Game
          </h2>
          <div className={styles.p2egame_section_content}>
            <div className={styles.p2egame_text_block}>
              <h3 className={styles.p2egame_text_title}>
                New dynamic P2E game!<br/>
                Be the winner among the rest!
              </h3>
              <div className={styles.p2egame_image_block_mobile}>
                <Image 
                  src="/images/P2Egame.png"
                  width={579}
                  height={579}
                  alt="P2E game illustration"
                />
              </div>
              <p className={styles.p2egame_text_paragraph}>
                A spaceship that was transporting heroes from different planets 
                crashes on the planet Supreme X-132 as a result of an unsuccessful 
                Intergalactic hyper-jump and a malfunction of the spacecraft engine. 
                The spaceship is on fire and only one working capsule remains on 
                board for an emergency return. The goal of your hero is to find 
                weapons, defeat rivals in the royal battle and return alive, taking 
                Planetex tokens with them in each of their rounds!<br/>
                <br/>
                10 characters from the NFT collection have additional upgrades that 
                will give you an edge over your opponents, and therefore an 
                increased chance of winning in this exciting P2E game!<br/>
                <br/>
                Get your own card!
              </p>
              <div className={styles.buy_button}>
                Buy Token
              </div>
            </div>
            <div className={styles.p2egame_image_block}>
              <Image 
                src="/images/P2Egame.png"
                width={579}
                height={579}
                alt="P2E game illustration"
              />
            </div>
          </div>
        </section>
        <section className={styles.roadmap_section}>
          <h2 className={`${styles.section_title} ${styles.roadmap_title}`}>
            Roadmap
          </h2>
          <div className={styles.roadmap_content}>
            <div className={styles.roadmap_text_block}>
              <div className={styles.roadmap_text_subtitle}>
                NFT
              </div>
              <div className={styles.roadmap_text}>
                <p>
                Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                future, Starfish aims Echoing Astar Network&apos;s vision to be the 
                heart of the multi-chain future, Starfish aims Echoing Astar 
                Network&apos;s vision to be the heart of the, Starfish aims Echoing 
                Astar Network&apos;s vision to be the heart of the multi-chain future, 
                Starfish aims Echoing Astar Network&apos;s vision to be the heart of 
                the multi-chain future, Starfish aimsing Astar Network&apos;s vision 
                to be the heart of the multi-chain future, Starfish aims 
                </p>
              </div>
            </div>
          </div>
          <div className={styles.mobile_slider}>
            <RoadmapSlider />
          </div>
          <div className={styles.roadmap_scale_container}>
            <div className={styles.roadmap_quarters}>
              <div className={styles.roadmap_quarter}>
                Quarter 1 2023
              </div>
              <div className={styles.roadmap_quarter}>
                Quarter 2 2023
              </div>
              <div className={styles.roadmap_quarter}>
                Quarter 3 2023
              </div>
              <div className={styles.roadmap_quarter}>
                Quarter 4 2023
              </div>
            </div>
            <div className={styles.roadmap_scale}>
              <div className={styles.roadmap_internal}>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.tokenomics_section}>
          <h2 className={styles.section_title}>
            Tokenomics
          </h2>
          <div className={styles.tokenomics_container}>
          </div>
        </section>
        <section className={styles.team_section}>
          <h2 className={styles.section_title}>
            The Team
          </h2>
          <div className={styles.team_persons_container}>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
            <div className={styles.team_person}>
              <div className={styles.team_person_caption}>
                <div className={styles.team_person_name}>
                  Dmitriy
                </div>
                <div className={styles.team_person_position}>
                  Chief Executive Officer
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mobile_slider}>
            <TeamSlider />
          </div>
        </section>
        <section className={styles.sale_section}>
          <h2 className={styles.section_title}>
            Sale Details
          </h2>
          <div className={styles.sale_cards}>
            <div className={styles.sale_presale}>
              <div className={styles.sale_presale_left}>
                <h3 className={styles.sale_presale_title}>Pre-Sale</h3>
                <div className={styles.sale_presale_paragr}>
                  Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                  future, Starfish aims to be collaborative, convenient and communal 
                  to build our product suites and become the one-stop-shop on Astar 
                  Network to provide you with DeFi, NFT-Fi and new project discovery.
                </div>
              </div>
              <div className={styles.sale_presale_divider}></div>
              <div className={styles.sale_presale_tokensinfo}>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div># OF TOKENS</div>
                  <div>150.000.000</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div>PRICE IN USD</div>
                  <div>0,009</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div>FUNDING</div>
                  <div>1.350.000</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div>SALE DATE</div>
                  <div>20 January</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div>LOCKED</div>
                  <div>6 months</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_button}>
                  <div className={styles.buy_button}>
                    Buy Token
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sale_NFTSale}>
              <div className={styles.sale_presale_left}>
                <h3 className={styles.sale_presale_title}>NFT Sale</h3>
                <div className={styles.sale_presale_paragr}>
                Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                future, Starfish aims to be collaborative, convenient and 
                communal to build our product suites and become the one-stop-shop 
                on Astar Network to provide you with DeFi, NFT-Fi and new project 
                discovery.
                </div>
              </div>
              <div className={styles.sale_divider}></div>
              <div className={styles.sale_NFTSale_tokensinfo}>
                <div className={styles.sale_presale_tokensinfo_button}>
                  <div className={styles.buy_button}>
                    Buy Token
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sale_MainSale}>
              <div className={styles.sale_presale_left}>
                <h3 className={styles.sale_presale_title}>Main Sale</h3>
                <div className={styles.sale_presale_paragr}>
                  Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                  future, Starfish aims to be collaborative, convenient and communal 
                  to build our product suites and become the one-stop-shop on Astar 
                  Network to provide you with DeFi, NFT-Fi and new project discovery.
                </div>
              </div>
              <div className={styles.sale_divider}></div>
              <div className={styles.sale_presale_tokensinfo}>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div># OF TOKENS</div>
                  <div>150.000.000</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div>PRICE IN USD</div>
                  <div>0,009</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div>FUNDING</div>
                  <div>1.350.000</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div>SALE DATE</div>
                  <div>20 January</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div>LOCKED</div>
                  <div>6 months</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_button}>
                  <div className={styles.buy_button}>
                    Buy Token
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sale_PrivateSale}>
              <div className={styles.sale_presale_left}>
                <h3 className={styles.sale_presale_title}>Private Sale</h3>
                <div className={styles.sale_presale_paragr}>
                  Echoing Astar Network&apos;s vision to be the heart of the multi-chain 
                  future, Starfish aims to be collaborative, convenient and communal 
                  to build our product suites and become the one-stop-shop on Astar 
                  Network to provide you with DeFi, NFT-Fi and new project discovery.
                </div>
              </div>
              <div className={styles.sale_divider}></div>
              <div className={styles.sale_presale_tokensinfo}>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div># OF TOKENS</div>
                  <div>150.000.000</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div>PRICE IN USD</div>
                  <div>0,009</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div>FUNDING</div>
                  <div>1.350.000</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div>SALE DATE</div>
                  <div>20 January</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_item}>
                  <div>LOCKED</div>
                  <div>6 months</div>
                </div>
                <div className={styles.sale_presale_tokensinfo_button}>
                  <div className={styles.buy_button}>
                    Buy Token
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sale_listing}>
              <h3 className={styles.sale_listing_title}>Listing on DEX</h3>
              <div className={styles.sale_listing_timer_block}>
                <div className={styles.sale_listing_timer_item}>
                  <div className={styles.sale_listing_timer_cell}>1</div>
                  <div className={styles.sale_listing_timer_caption}>Days</div>
                </div>
                <div className={styles.sale_listing_timer_item}>
                  <div className={styles.sale_listing_timer_cell}>21</div>
                  <div className={styles.sale_listing_timer_caption}>Hours</div>
                </div>
                <div className={styles.sale_listing_timer_item}>
                  <div className={styles.sale_listing_timer_cell}>46</div>
                  <div className={styles.sale_listing_timer_caption}>Minutes</div>
                </div>
                <div className={styles.sale_listing_timer_item}>
                  <div className={styles.sale_listing_timer_cell}>11</div>
                  <div className={styles.sale_listing_timer_caption}>Seconds</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mobile_slider}>
            <SaleSlider />
          </div>
        </section>

        <section className={styles.partners_section}>
          <h2 className={styles.partners_title}>
            Partners
          </h2>
          <div className={styles.partners_block}>
            <div className={styles.partners_item}>
              <div className={styles.partners_logo}>
                <Image 
                  src="/images/image195.png"
                  height={64}
                  width={64}
                  alt="Partners icon"
                />
              </div>
              <div className={styles.partners_name}>
                DATE LOIF
              </div>
            </div>
            <div className={styles.partners_item}>
              <div className={styles.partners_logo}>
                <Image 
                  src="/images/image196.png"
                  height={64}
                  width={64}
                  alt="Partners icon"
                />
              </div>
              <div className={styles.partners_name}>
                DATE LOIF
              </div>
            </div>
            <div className={styles.partners_item}>
              <div className={styles.partners_logo}>
                <Image 
                  src="/images/image197.png"
                  height={64}
                  width={64}
                  alt="Partners icon"
                />
              </div>
              <div className={styles.partners_name}>
                DATE LOIF
              </div>
            </div>
            <div className={styles.partners_item}>
              <div className={styles.partners_logo}>
                <Image 
                  src="/images/image198.png"
                  height={64}
                  width={64}
                  alt="Partners icon"
                />
              </div>
              <div className={styles.partners_name}>
                DATE LOIF
              </div>
            </div>
            <div className={styles.partners_item}>
              <div className={styles.partners_logo}>
                <Image 
                  src="/images/image199.png"
                  height={64}
                  width={64}
                  alt="Partners icon"
                />
              </div>
              <div className={styles.partners_name}>
                DATE LOIF
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.footer_contacts}>
            <h3 className={styles.footer_title}>
              Contact us
            </h3>
            <div className={styles.footer_text_medium}>
              <div>
                Listing: listing@planetex.io
              </div>
              <div>
                Support: support@planetex.io
              </div>
              <div>
                Parthership: info@planetex.io
              </div>
            </div>
          </div>
          <div className={styles.footer_products_about}>
            <div className={styles.footer_products}>
              <h3 className={styles.footer_title}>
                Products
              </h3>
              <div className={styles.footer_text_regular}>
                <div>
                Trading
                </div>
                <div>
                Exchange
                </div>
                <div>
                Launchpad
                </div>
                <div>
                Stake Box
                </div>
              </div>
            </div>
            <div className={styles.footer_products}>
              <h3 className={styles.footer_title}>
                About us
              </h3>
              <div className={styles.footer_text_regular}>
                <div>
                  About Planetex
                </div>
                <div>
                  Blog
                </div>
                <div>
                  Terms
                </div>
                <div>
                  Privacy
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
