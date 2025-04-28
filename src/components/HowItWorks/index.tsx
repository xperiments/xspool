import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Png?: React.ComponentType<React.ComponentProps<"img">>;
  description: ReactNode;
  size?: string;
};

const IntroList: FeatureItem[] = [
  {
    title: "Write Your Own Tags",
    Png: require("@site/static/img/app.png").default,
    description: (
      <>
        Use the xspool web app to input the required details and write them to
        your tag. Attach the tag to your spool, and you’re ready to go!
      </>
    ),
  },
];

const FeatureList: FeatureItem[] = [
  {
    title: "Scan Your Spool",
    Png: require("@site/static/img/f.png").default,
    description: (
      <>
        Tap any filament spool to the XSpool reader. Instantly read
        metadata—material, color, and more.
      </>
    ),
  },
  {
    title: "Load Your Spool",
    Png: require("@site/static/img/ams.png").default,
    description: (
      <>
        Insert the spool into the AMS or CFS slot. The printer will
        automatically recognize the spool and update its status. No need to
        manually enter details.
      </>
    ),
  },
  {
    title: "Print with Confidence",
    Png: require("@site/static/img/xtouch.png").default,
    description: (
      <>
        Your slicing software and touchscreen controller always know exactly
        which filament you’ve loaded, eliminating guesswork.
      </>
    ),
  },
];

function Feature({ title, Png, description, size }: FeatureItem) {
  size = size || "4";
  return (
    <div className={clsx("col col--" + size, styles.feature)}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={Png} role="img" />
      </div>
    </div>
  );
}

export default function HowItWorks(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div
          className="row"
          style={{ justifyContent: "center", margin: "4rem" }}
        >
          <h1 style={{ color: "#8F8", fontSize: "50px" }}>How it works</h1>
        </div>

        <div className="row" style={{ marginBottom: "4rem" }}>
          {IntroList.map((props, idx) => (
            <Feature key={idx} {...props} size="12" />
          ))}
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
