import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

const mainImage = require("@site/static/img/home.png").default;
const mainImage1 = require("@site/static/img/d.png").default;

import styles from "./index.module.css";
import HowItWorks from "../components/HowItWorks";
import Supporters from "../components/Supporters";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{ textAlign: "left" }}>
          <svg
            height="130"
            fill="none"
            viewBox="0 0 193 79"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: "drop-shadow(2px 4px 6px rgba(0,0,0,.2)" }}
          >
            <path
              d="M20.604 33.08c3.776 0 6.976.704 9.6 2.112 2.624 1.408 4.608 3.04 5.952 4.896 1.728 1.984 2.88 4.16 3.456 6.528.64 2.176.96 4.32.96 6.432 0 1.664-.608 3.072-1.824 4.224C37.532 58.424 36.188 59 34.716 59c-1.664 0-3.072-.576-4.224-1.728-1.152-1.344-1.728-2.752-1.728-4.224l-.288-2.304a6.08 6.08 0 0 0-1.056-2.688c-.512-.896-1.344-1.632-2.496-2.208-1.088-.64-2.528-.96-4.32-.96-1.792 0-3.488-.192-5.088-.576-1.6-.384-3.04-.864-4.32-1.44-2.624-1.472-4.736-3.2-6.336-5.184-1.536-1.984-2.624-4.096-3.264-6.336A20.51 20.51 0 0 1 .54 24.824c0-1.6.576-2.976 1.728-4.128 1.344-1.152 2.752-1.728 4.224-1.728 1.6 0 2.976.608 4.128 1.824 1.152 1.216 1.728 2.56 1.728 4.032.128.512.192 1.28.192 2.304.32 1.216.704 2.144 1.152 2.784.704 1.024 1.568 1.824 2.592 2.4 1.024.512 2.464.768 4.32.768ZM6.492 47.192c1.6 0 2.976.608 4.128 1.824 1.152 1.216 1.728 2.56 1.728 4.032 0 1.664-.608 3.072-1.824 4.224C9.308 58.424 7.964 59 6.492 59c-1.664 0-3.072-.576-4.224-1.728C1.116 55.928.54 54.52.54 53.048c0-1.6.576-2.976 1.728-4.128 1.344-1.152 2.752-1.728 4.224-1.728Zm28.224-28.224c1.6 0 2.976.608 4.128 1.824 1.152 1.216 1.728 2.56 1.728 4.032 0 1.664-.608 3.072-1.824 4.224-1.216 1.152-2.56 1.728-4.032 1.728-1.664 0-3.072-.576-4.224-1.728-1.152-1.344-1.728-2.752-1.728-4.224 0-1.6.576-2.976 1.728-4.128 1.344-1.152 2.752-1.728 4.224-1.728ZM46.615 29.48c0-3.04 1.014-5.573 3.04-7.6 2.08-2.027 5.147-3.04 9.2-3.04 4.107 0 7.254 1.013 9.44 3.04 2.187 1.973 3.28 4.907 3.28 8.8 0 .427-.16.8-.48 1.12-.266.267-.613.4-1.04.4h-.72c-.426 0-.8-.133-1.12-.4-.267-.32-.4-.667-.4-1.04 0-5.387-3.013-8.08-9.04-8.08-2.773 0-4.88.667-6.32 2-1.386 1.333-2.08 3.013-2.08 5.04s.667 3.653 2 4.88c1.387 1.173 3.974 2.133 7.76 2.88 3.787.747 6.747 1.92 8.88 3.52 2.133 1.6 3.2 4 3.2 7.2 0 3.147-1.173 5.787-3.52 7.92-2.293 2.08-5.52 3.12-9.68 3.12-4.107 0-7.44-1.04-10-3.12-2.56-2.133-3.84-5.253-3.84-9.36 0-1.12.534-1.68 1.6-1.68h.64c1.014 0 1.52.533 1.52 1.6 0 5.813 3.44 8.72 10.32 8.72 3.093 0 5.387-.693 6.88-2.08 1.547-1.44 2.32-3.2 2.32-5.28s-.8-3.573-2.4-4.48c-1.6-.96-4.4-1.867-8.4-2.72-3.947-.853-6.773-2.213-8.48-4.08-1.706-1.867-2.56-4.293-2.56-7.28ZM76.861 32.04c0-4.16 1.254-7.387 3.76-9.68 2.56-2.347 5.867-3.52 9.92-3.52 4.107 0 7.44 1.147 10 3.44 2.56 2.293 3.84 5.547 3.84 9.76v13.92c0 4.107-1.28 7.333-3.84 9.68-2.56 2.347-5.893 3.52-10 3.52-4.053 0-7.36-1.093-9.92-3.28v21.6c0 1.013-.506 1.52-1.52 1.52h-.72c-1.013 0-1.52-.507-1.52-1.52V32.04Zm20.88-6.96c-1.866-1.6-4.24-2.4-7.12-2.4s-5.28.827-7.2 2.48c-1.866 1.6-2.8 3.92-2.8 6.96v19.44c3.254 2.507 6.454 3.76 9.6 3.76 3.147 0 5.654-.827 7.52-2.48 1.92-1.653 2.88-4 2.88-7.04V32.12c0-3.093-.96-5.44-2.88-7.04ZM110.803 32.04c0-4.213 1.28-7.467 3.84-9.76 2.56-2.293 5.893-3.44 10-3.44 4.106 0 7.413 1.173 9.92 3.52 2.506 2.293 3.76 5.52 3.76 9.68v13.92c0 4.16-1.254 7.413-3.76 9.76-2.507 2.293-5.814 3.44-9.92 3.44-4.054 0-7.387-1.147-10-3.44-2.56-2.347-3.84-5.6-3.84-9.76V32.04Zm23.76 0c0-3.04-.934-5.36-2.8-6.96-1.867-1.653-4.24-2.48-7.12-2.48s-5.28.827-7.2 2.48c-1.92 1.6-2.88 3.92-2.88 6.96v13.92c0 3.04.96 5.387 2.88 7.04 1.92 1.6 4.32 2.4 7.2 2.4s5.253-.8 7.12-2.4c1.866-1.653 2.8-4 2.8-7.04V32.04ZM144.315 32.04c0-4.213 1.28-7.467 3.84-9.76 2.56-2.293 5.894-3.44 10-3.44 4.107 0 7.414 1.173 9.92 3.52 2.507 2.293 3.76 5.52 3.76 9.68v13.92c0 4.16-1.253 7.413-3.76 9.76-2.506 2.293-5.813 3.44-9.92 3.44-4.053 0-7.386-1.147-10-3.44-2.56-2.347-3.84-5.6-3.84-9.76V32.04Zm23.76 0c0-3.04-.933-5.36-2.8-6.96-1.866-1.653-4.24-2.48-7.12-2.48s-5.28.827-7.2 2.48c-1.92 1.6-2.88 3.92-2.88 6.96v13.92c0 3.04.96 5.387 2.88 7.04 1.92 1.6 4.32 2.4 7.2 2.4s5.254-.8 7.12-2.4c1.867-1.653 2.8-4 2.8-7.04V32.04ZM180.428.6h.64c1.013 0 1.52.507 1.52 1.52v44.56c0 5.707 2.426 8.56 7.28 8.56h1.28c.426 0 .773.16 1.04.48.32.32.48.667.48 1.04v.64c0 1.067-.96 1.6-2.88 1.6-3.627 0-6.374-1.04-8.24-3.12-1.867-2.08-2.774-5.12-2.72-9.12V2.12c0-1.013.533-1.52 1.6-1.52ZM134.509 69.634c-4.819 2.532-9.375 2.377-9.856 2.357-.419.02-4.982.175-9.801-2.357 0 0-.723-.66-.289-1.64.433-.98 1.589-.641 1.589-.641s3.797 2.052 8.46 1.998h.072c4.664.054 8.525-1.998 8.525-1.998s1.156-.34 1.589.64c.434.981-.289 1.64-.289 1.64Zm-2.167-4.912c-3.612 2.066-7.208 1.925-7.689 1.905-.419.02-3.87.16-7.775-1.902 0 0-.723-.66-.289-1.64.433-.98 1.589-.64 1.589-.64s1.81 1.327 6.434 1.542h.072c4.624-.14 6.358-1.546 6.358-1.546s1.156-.339 1.589.641c.434.98-.289 1.64-.289 1.64ZM114.852 8.358c4.819-2.533 9.376-2.378 9.857-2.358.418-.02 4.981-.175 9.8 2.358 0 0 .723.66.289 1.64-.433.98-1.589.64-1.589.64s-3.796-2.052-8.46-1.998h-.072c-4.664-.054-8.525 1.998-8.525 1.998s-1.156.34-1.589-.64c-.434-.98.289-1.64.289-1.64Zm2.167 4.911c3.612-2.065 7.209-1.925 7.69-1.905.418-.02 3.87-.16 7.774 1.903 0 0 .723.66.289 1.64-.433.98-1.589.64-1.589.64s-1.81-1.328-6.434-1.543h-.072c-4.624.14-6.357 1.546-6.357 1.546s-1.156.34-1.59-.64c-.433-.981.289-1.64.289-1.64Z"
              fill="#8F8"
            />
          </svg>
        </h1>

        <div className={clsx("xspoolHero", styles.xspoolHero)}>
          <div style={{ textAlign: "left", flexGrow: 1 }}>
            <div
              style={{
                fontSize: "50px",
                color: "#8F8",
                lineHeight: "1",
                marginBottom: "16px",
                fontWeight: "800",
              }}
              className="text-me-one-regular"
            >
              {/* Automate Your
              <br />
              3D‑Printing
              <br />
              Filament Workflow */}
              Automate your Printer
              <br />
              Filament Workflow
            </div>
            <div style={{ fontSize: "18px", color: "#8F8", lineHeight: "1" }}>
              <ul>
                <li>Effortlessly identify and manage spools</li>
                <li>
                  Works with BambuLab, Creality, Anycubic, TigerTag and more.
                </li>
              </ul>
            </div>
          </div>
          {/* <img
            src={mainImage1}
            alt="Main Image"
            style={{
              height: "300px",
              filter: "drop-shadow(2px 4px 6px rgba(0,0,0,.2)",
              display: "inline-block",
            }}
          /> */}
          <div style={{ flexGrow: 1 }}>
            <img
              src={mainImage}
              alt="Main Image"
              width={"100%"}
              style={{
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,.2)",
                maxWidth: "800px",
              }}
            />
          </div>
        </div>
        <div>
          <button
            className="button button--secondary button--outline button--lg"
            style={{ color: "#42AE00", borderColor: "#42AE00" }}
            onClick={() => {
              window.location.href = "/install";
            }}
          >
            Install
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="xspool is a spool management tool designed to simplify 3D printing filament handling. It supports BambuLab AMS, Creality CFS, Anycubic ACE PRO and TigerTag spools, allowing easy tracking, organization, and integration with your printing workflow."
    >
      <HomepageHeader />
      <main>
        <HowItWorks />
        <HomepageFeatures />
        <Supporters />
      </main>
    </Layout>
  );
}
