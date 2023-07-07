import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './pricing.css'

const Pricing = (props) => {
  return (
    <div className="pricing-container">
      <Helmet>
        <title>Pricing - Blue Dear Porpoise</title>
        <meta property="og:title" content="Pricing - Blue Dear Porpoise" />
      </Helmet>
      <footer className="pricing-footer">
        <Link to="/" className="pricing-navlink">
          <img
            alt="logo"
            src="/logo-wtih-bg-1500h.png"
            className="pricing-image"
          />
        </Link>
        <span className="pricing-text">
          © 2022 officialDomains.in, All Rights Reserved.
        </span>
        <div className="pricing-icon-group">
          <svg viewBox="0 0 950.8571428571428 1024" className="pricing-icon">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="pricing-icon02">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="pricing-icon04">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </footer>
      <header data-thq="thq-navbar" className="pricing-navbar-interactive">
        <Link to="/" className="pricing-navlink1">
          <img
            alt="logo"
            src="/logo-wtih-bg-1500h.png"
            className="pricing-logo"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="pricing-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="pricing-nav"
          >
            <Link to="/">Home</Link>
            <Link to="/about" className="pricing-navlink3">
              About
            </Link>
            <Link to="/pricing" className="pricing-navlink4">
              Pricing
            </Link>
            <Link to="/team" className="pricing-navlink5">
              Team
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="pricing-burger-menu">
          <svg viewBox="0 0 1024 1024" className="pricing-icon06">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="pricing-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="pricing-nav1"
          >
            <div className="pricing-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="pricing-image1"
              />
              <div data-thq="thq-close-menu" className="pricing-menu-close">
                <svg viewBox="0 0 1024 1024" className="pricing-icon08">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="pricing-nav2"
            >
              <span className="pricing-text01">About</span>
              <span className="pricing-text02">Features</span>
              <span className="pricing-text03">Pricing</span>
              <span className="pricing-text04">Team</span>
              <span className="pricing-text05">Blog</span>
            </nav>
            <div className="pricing-container2">
              <button className="pricing-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="pricing-icon-group1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="pricing-icon10"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="pricing-icon12"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="pricing-icon14"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="pricing-pricing">
        <div className="pricing-container3">
          <div className="pricing-container4">
            <h1>Pricing Plans</h1>
            <span className="pricing-text07">
              <span>
                At OfficialDomains.in, we strive to provide the best possible
                service and resources to our users. While our basic access to
                official government websites is available free of charge, we
                offer additional premium features to enhance your experience and
                provide added value. Choose the plan that suits your needs and
                take advantage of the benefits that come with it.
              </span>
              <br className="pricing-text09"></br>
              <br className="pricing-text10"></br>
              <span className="pricing-text11">
                NOTE: Currently, we are not accepting money for subscription.
                OfficialDomains.in&apos;s services are free of charge until
                notified.
              </span>
              <br className="pricing-text12"></br>
              <br></br>
              <br className="pricing-text14"></br>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div className="pricing-container5">
            <div className="pricing-container6">
              <span className="pricing-text18">Free</span>
              <span className="pricing-text19">$0</span>
              <span className="pricing-text20">
                <span className="pricing-text21">100</span>
                <span> Queries per month</span>
              </span>
              <span className="pricing-text23">
                Access to our extensive database of official Indian government
                websites
              </span>
              <span className="pricing-text24">
                <span>
                  Regular updates to ensure the accuracy and reliability of our
                  information.
                </span>
                <br></br>
                <br className="pricing-text27"></br>
              </span>
              <button className="pricing-button button">Get</button>
            </div>
            <div className="pricing-container7">
              <span className="pricing-text28">Pro</span>
              <span className="pricing-text29">$0.99</span>
              <span className="pricing-text30">
                <span className="pricing-text31">Unlimited</span>
                <span> Queries</span>
              </span>
              <span className="pricing-text33">
                Exclusive access to official government websites from additional
                countries beyond India
              </span>
              <span className="pricing-text34">
                Regular updates to ensure the accuracy and reliability of our
                information.
              </span>
              <button className="pricing-button1 button">Get</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
