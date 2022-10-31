import Image from 'next/image'
import React, { Component } from "react"
import Slider from "react-slick"
import styles from './SaleSlider.module.css'
import { Buy_Button_1, Buy_Button_2, Soon_Button } from '../buttons/buttons'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class SaleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div className={styles.sale_slider_container_mobile}>
        <div className={styles.sale_slider_caption_wrapper}>
          <div className={styles.sale_slider_left_arrow}>
            <Image 
              src="/images/landing/leftArrow.png"
              height={18}
              width={34}
              alt="Left arrow"
            />
          </div>
          <div className={styles.sale_slider_right_arrow}>
            <Image 
              src="/images/landing/rightArrow.png"
              height={18}
              width={34}
              alt="Right arrow"
            />
          </div>
        </div>
        <Slider {...settings}>
          <div style={{"height": "672px"}}>
            <div className={`${styles.sale_PreSale} ${styles.sale_slide}`}>
              <div className={styles.sale_presale_left}>
                <h3 className={styles.sale_presale_title}>Pre-Sale</h3>
                <div className={styles.sale_presale_paragr}>
                Participation in the Pre-Sale will give you the opportunity to 
                invest in our project at an early stage, get tokens at a lower 
                price and have an undeniable advantage over other users of the 
                platform in the future.
                </div>
              </div>
              <div className={styles.sale_presale_divider_wrapper}>
                <div className={styles.sale_presale_divider}></div>
              </div>
              <div className={styles.sale_NFTSale_tokensinfo}>
                <div className={styles.sale_NFTSale_tokensinfo_cotent}>
                  <div className={styles.sale_presale_tokensinfo_item}>
                    <div className={styles.sale_presale_name}>Number of tokens</div>
                    <div className={styles.sale_presale_value}>28,000,000</div>
                  </div>
                  <div className={styles.sale_presale_tokensinfo_item}>
                    <div className={styles.sale_presale_name}>Price in USDT</div>
                    <div className={styles.sale_presale_value}>$0.04</div>
                  </div>
                  <div className={styles.sale_presale_tokensinfo_item}>
                    <div className={styles.sale_presale_value}>[Min 10$-Max 1000$]</div>
                  </div>
                  <div className={styles.sale_presale_tokensinfo_item}>
                    <div className={styles.sale_presale_value}>Start - 01.11.2022</div>
                  </div>
                </div>
                <div className={styles.sale_presale_tokensinfo_button}>
                  <a className={styles.join_ido_button} href="https://app.planetex.io/presale" target="blank">
                    <Buy_Button_1 />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{"height": "672px"}}>
            <div className={`${styles.sale_NFTSale} ${styles.sale_slide}`}>
              <div className={styles.sale_presale_left}>
                <h3 className={styles.sale_presale_title}>NFT Sale</h3>
                <div className={styles.sale_presale_paragr}>
                Mint your character and get the opportunity to participate in 
                our game with an advantage over other players!
                </div>
              </div>
              <div className={styles.sale_NFTSale_divider_wrapper}>
                <div className={styles.sale_presale_divider}></div>
              </div>
              <div className={styles.sale_NFTSale_tokensinfo}>
                <div className={styles.sale_presale_tokensinfo_button}>
                  <a className={styles.join_ido_button} href="https://app.planetex.io/nft-sale" target="blank">
                    <Buy_Button_2 />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{"height": "672px"}}>
            <div className={`${styles.sale_MainSale} ${styles.sale_slide}`}>
              <div className={styles.sale_presale_left}>
                <h3 className={styles.sale_presale_title}>Main Sale</h3>
                <div className={styles.sale_presale_paragr}>
                  The Main Sale will be the last chance to invest in our project 
                  at an early stage before the release of our token on the DEX 
                  platforms. Better take part!
                </div>
              </div>
              <div className={styles.sale_presale_divider_wrapper}>
                <div className={styles.sale_presale_divider}></div>
              </div>
              <div className={styles.sale_NFTSale_tokensinfo}>
                <div className={styles.sale_NFTSale_tokensinfo_cotent}>
                  <div className={styles.sale_presale_tokensinfo_item}>
                    <div className={styles.sale_presale_name}>Number of tokens</div>
                    <div className={styles.sale_presale_value}>24,000,000</div>
                  </div>
                  <div className={styles.sale_presale_tokensinfo_item}>
                    <div className={styles.sale_presale_name}>Price in USDT</div>
                    <div className={styles.sale_presale_value}>$0.07</div>
                  </div>
                  <div className={styles.sale_presale_tokensinfo_item}>
                    <div className={styles.sale_presale_value}>[Min 25$-Max 2500$]</div>
                  </div>
                  <div className={styles.sale_presale_tokensinfo_item}>
                    <div className={styles.sale_presale_value}>Start - 08.01.2023</div>
                  </div>
                </div>
                <div className={styles.sale_presale_tokensinfo_button}>
                  <Soon_Button />
                </div>
              </div>
            </div>
          </div>
          <div style={{"height": "672px"}}>
            <div className={`${styles.sale_PrivateSale} ${styles.sale_slide}`}>
              <div className={styles.sale_presale_left}>
                <h3 className={styles.sale_presale_title}>Private Sale</h3>
                <div className={styles.sale_presale_paragr}>
                  Private Sale will allow you to invest more significant amounts 
                  in our project at an attractive price. To participate in the 
                  Private Sale, you will need to get into the whitelist, which 
                  will appear during the Main Sale.
                </div>
              </div>
              <div className={styles.sale_presale_divider_wrapper}>
                <div className={styles.sale_presale_divider}></div>
              </div>
              <div className={styles.sale_NFTSale_tokensinfo}>
                <div className={styles.sale_NFTSale_tokensinfo_cotent}>
                  <div className={styles.sale_presale_tokensinfo_item}>
                    <div className={styles.sale_presale_name}>Number of tokens</div>
                    <div className={styles.sale_presale_value}>12,000,000</div>
                  </div>
                  <div className={styles.sale_presale_tokensinfo_item}>
                    <div className={styles.sale_presale_name}>Price in USDT</div>
                    <div className={styles.sale_presale_value}>$0.0</div>
                  </div>
                  <div className={styles.sale_presale_tokensinfo_item}>
                    <div className={styles.sale_presale_value}>[Min 100$-Max 25000$]</div>
                  </div>
                  <div className={styles.sale_presale_tokensinfo_item}>
                    <div className={styles.sale_presale_value}>Start - 15.02.2023</div>
                  </div>
                </div>
                <div className={styles.sale_presale_tokensinfo_button}>
                  <Soon_Button />
                </div>
              </div>
            </div>
          </div>
          <div style={{"height": "672px"}}>
          <div className={`${styles.sale_PrivateSale} ${styles.sale_slide}`}>
              <div className={styles.sale_listiong_tokensinfo}>
                <h3 className={styles.sale_listing_title}>Listing on DEX</h3>
                {/* <div className={styles.sale_listing_timer_block}>
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
                </div> */}
                <div className={styles.sale_listing_text_block}>
                  <p className={styles.sale_listing_text}>Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}