import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Png?: React.ComponentType<React.ComponentProps<"img">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Wide RFID Support",
    Png: require("@site/static/img/bambulab.png").default,
    description: (
      <>
        Read/write TigerTag tags, Creality CFS, Anycubic ACE Pro and BambuLab
        (read only) spools.
      </>
    ),
  },
  {
    title: "AMS / CFS Support",
    Png: require("@site/static/img/h.png").default,
    description: (
      <>
        Enables seamless filament management for both Bambulab AMS and Creality
        CFS systems.
      </>
    ),
  },
  {
    title: "TigerTag Format",
    Png: require("@site/static/img/c.png").default,
    description: (
      <>
        Just mount any TigerTag-equipped spool and xSpool’s reader will
        instantly pull filament type, diameter, color and other data from the
        tag.
      </>
    ),
  },
  {
    title: "Real‑Time Slicer Sync",
    Png: require("@site/static/img/xspool-sync.png").default,
    description: (
      <>
        Automatically sync your filaments with BambuStudio and OrcaSlicer in
        real-time, ensuring your data is always up-to-date.
      </>
    ),
  },
  {
    title: "On-Device Web App",
    Png: require("@site/static/img/app.png").default,
    description: (
      <>
        On-device web app—no installs; use it to create tags and read info.
        AMS/CFS slot detection runs autonomously without the app.
      </>
    ),
  },
  {
    title: "Standalone or Xtouch-Pro Ready",
    Png: require("@site/static/img/xtouch.png").default,
    description: (
      <>
        Functions independently or enhances your workflow when paired with
        Xtouch-Pro for a more integrated experience.
      </>
    ),
  },
];

function Feature({ title, Png, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={Png} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={`${styles.features} ${styles.xspoolCore}`}>
      <div className="container">
        <div
          className="row"
          style={{ justifyContent: "center", margin: "4rem", marginTop: "0" }}
        >
          <h1 style={{ color: "#8F8", borderBottom: "1px solid #8F8" }}>
            Core features
          </h1>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
