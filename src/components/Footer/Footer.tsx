import Head from "next/head";
// import Layout, { siteTitle } from "../componets/layout"
// import utilStyles from '../styles/utils.module.css'
// import { getSortedPostsData } from '../lib/posts'
// import Link from 'next/link'
// import Date from '../componets/date'
// import { GetStaticProps } from 'next'
// import "./index.css";
// import moduleName from './index.module.css'
import { Timeline } from "react-twitter-widgets";
import styles from "./Footer.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
        <link rel="stylesheet" href="./index.css" />
      </Head>

      <footer className={`${styles.new_footer_area} ${styles.bg_color}`}>
        <div className={styles.new_footer_top}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className={`${styles.f_widget} ${styles.company_widget} ${styles.wow} ${styles.fadeInLeft}`}
                  data-wow-delay="0.2s"
                >
                  <img
                    src="https://ik.imagekit.io/xvvhd5ujib/dsckiit_logo_colour_EB_wc01at.svg"
                    className={styles.dsc_logo}
                    alt="DSC Logo"
                  />
                  <div className={styles.twitter_timeline}>
                    <Timeline
                      dataSource={{
                        sourceType: "profile",
                        screenName: "DscKiit",
                      }}
                      options={{
                        theme: "dark",
                        width: "500",
                        height: "300",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div
                  className={`${styles.f_widget} ${styles.about_widget} ${styles.pl_70} ${styles.wow} ${styles.fadeInLeft}`}
                  data-wow-delay="0.4s"
                >
                  <h3
                    className={`${styles.f_title} ${styles.f_600} ${styles.t_color} ${styles.f_size_18}`}
                  >
                    General Guidelines
                  </h3>
                  <ul
                    className={`${styles.list_unstyled} ${styles.f_list} pb-3`}
                  >
                    <li>
                      <a className="anchor" href="#">
                        Code of Conduct
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className={`${styles.f_widget} ${styles.about_widget} ${styles.pl_70} ${styles.wow} ${styles.fadeInLeft}`}
                  data-wow-delay="0.6s"
                >
                  <h3
                    className={`${styles.f_title} ${styles.f_600} ${styles.t_color} ${styles.f_size_18}`}
                  >
                    Google Dvelopers
                  </h3>
                  <ul
                    className={`${styles.list_unstyled} ${styles.f_list} pb-3`}
                  >
                    <li>
                      <a className="anchor" href="#">
                        Google Developers Program
                      </a>
                    </li>
                    <li>
                      <a className="anchor" href="#">
                        Developer Student Clubs
                      </a>
                    </li>
                    <li>
                      <a className="anchor" href="#">
                        Tech Includes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className={`${styles.f_widget} ${styles.social_widget} ${styles.pl_70} ${styles.wow} ${styles.fadeInLeft}`}
                  data-wow-delay="0.8s"
                >
                  <h3
                    className={`${styles.f_title} ${styles.f_600} ${styles.t_color} ${styles.f_size_18}`}
                  >
                    Feel free to contact us
                  </h3>

                  <ul className={styles.dsc_info}>
                    <li>
                      <i className="fas fa-search-location"></i>&nbsp; School of
                      Computer Engineering, KIIT University, Bhubaneswar, 751024
                    </li>
                    <li>
                      <i className="far fa-envelope"></i> &nbsp;Email:{" "}
                      <a href="mailto:info@dsckiit.in">info@dsckiit.in</a>
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>&nbsp; Alt.:{" "}
                      <a href="mailto:dsckiit@gmail.com">dsckiit@gmail.com</a>
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>&nbsp; Phone:{" "}
                      <a href="tel:+91-7504417023">+917504417023</a> (Manzar
                      Hasnain)
                    </li>
                  </ul>
                  <div className={styles.f_social_icon}>
                    <a href="#" className="fab fa-facebook"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                    <a href="#" className="fab fa-instagram"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer_bg}>
            <div className={styles.footer_bg_one}></div>
            <div className={styles.footer_bg_two}></div>
          </div>
        </div>
        {/* <div className={styles.footer_bottom}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <p className={`mb-0 ${styles.f_400}`}>
                  © 2020 All rights reserved.
                </p>
              </div>
              <div className="col-lg-6 col-sm-5 text-right">
                <p>
                  Made with <i className={styles.icon_heart}></i> in
                  <a className="anchor" href="#">
                    DSC KiiT
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </footer>

      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
