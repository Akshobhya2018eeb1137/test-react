import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Blue Dear Porpoise</title>
        <meta property="og:title" content="About - Blue Dear Porpoise" />
      </Helmet>
      <header data-thq="thq-navbar" className="about-navbar-interactive">
        <Link to="/" className="about-navlink">
          <img
            alt="logo"
            src="/logo-wtih-bg-1500h.png"
            className="about-logo"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="about-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="about-nav"
          >
            <Link to="/">Home</Link>
            <Link to="/about" className="about-navlink2">
              About
            </Link>
            <Link to="/pricing" className="about-navlink3">
              Pricing
            </Link>
            <Link to="/team" className="about-navlink4">
              Team
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="about-burger-menu">
          <svg viewBox="0 0 1024 1024" className="about-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="about-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="about-nav1"
          >
            <div className="about-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="about-image"
              />
              <div data-thq="thq-close-menu" className="about-menu-close">
                <svg viewBox="0 0 1024 1024" className="about-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="about-nav2"
            >
              <span className="about-text">About</span>
              <span className="about-text01">Features</span>
              <span className="about-text02">Pricing</span>
              <span className="about-text03">Team</span>
              <span className="about-text04">Blog</span>
            </nav>
            <div className="about-container2">
              <button className="about-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="about-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="about-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="about-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="about-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="about-banner">
        <h1 className="about-text05">Our Mission</h1>
        <span className="about-text06">
          <span className="about-text07">Welcome to OfficialDomains.in!</span>
          <br className="about-text08"></br>
          <br></br>
          <span>
            At OfficialDomains.in, our mission is to provide you with a
            comprehensive directory of official government websites from around
            the world. Whether you&apos;re an individual seeking information or
            a business looking to collaborate with government agencies, we aim
            to be your go-to resource for accessing official online portals. Our
            focus is currently on providing a curated list of Indian government
            websites, ensuring that you have easy access to the official
            platforms and services offered by various government departments,
            ministries, and agencies in India. We understand the importance of
            reliable and accurate information, and we strive to maintain an
            up-to-date database of official Indian government websites.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            Using our intuitive keyword search functionality, you can enter
            specific keywords related to the services or information you
            require. Our intelligent algorithms will scan our vast database and
            present you with a comprehensive list of official Indian government
            websites relevant to your search. Whether you&apos;re looking for
            information on taxation, healthcare, education, public services, or
            any other government-related topic, we&apos;ve got you covered.
          </span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            We created OfficialDomains.in out of a genuine concern for the
            well-being of internet users in India. It has come to our attention
            that individuals often fall victim to scams and fraudulent
            activities due to being redirected to fake websites masquerading as
            official government portals. This not only leads to financial loss
            but also compromises sensitive personal information. To combat this
            issue and ensure the safety and security of users, I launched
            OfficialDomains.in as a reliable platform that exclusively provides
            links to verified official government websites. By offering a
            trusted source for accessing official domains, we aim to protect
            users from potential scams and empower them with accurate
            information directly from the authorized sources. Your online safety
            and peace of mind are our top priorities, and we are committed to
            serving you with utmost integrity and diligence.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>
            While we&apos;re currently focused on India, our vision extends
            beyond borders. In the near future, we plan to expand our reach and
            include official government websites from countries around the
            globe. Our goal is to create a centralized platform where users can
            access official government resources from diverse nations, promoting
            transparency, accessibility, and efficiency in public services
            worldwide. At OfficialDomains.in, we are committed to ensuring that
            the information we provide is accurate, reliable, and constantly
            updated. We understand that navigating the vast landscape of
            government websites can be overwhelming, which is why we&apos;re
            here to simplify the process for you. Our user-friendly interface
            and powerful search capabilities make it effortless for you to find
            the official websites you need.
          </span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            We value user feedback and suggestions, as they play a crucial role
            in enhancing our platform. If you have any recommendations or would
            like to see specific features implemented, please don&apos;t
            hesitate to reach out to us. We&apos;re dedicated to continually
            improving OfficialDomains.in to meet the evolving needs of our
            users. Thank you for choosing OfficialDomains.in as your trusted
            resource for official government websites. We&apos;re excited to
            assist you in your quest for accurate information and convenient
            access to government services. Together, let&apos;s explore the
            world of official domains, one nation at a time!
          </span>
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
      <footer className="about-footer">
        <Link to="/" className="about-navlink5">
          <img
            alt="logo"
            src="/logo-wtih-bg-1500h.png"
            className="about-image1"
          />
        </Link>
        <span className="about-text27">
          © 2022 officialDomains.in, All Rights Reserved.
        </span>
        <div className="about-icon-group1">
          <svg viewBox="0 0 950.8571428571428 1024" className="about-icon10">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="about-icon12">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
          <svg viewBox="0 0 602.2582857142856 1024" className="about-icon14">
            <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
          </svg>
        </div>
      </footer>
    </div>
  )
}

export default About
