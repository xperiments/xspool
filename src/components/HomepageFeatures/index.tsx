import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Png?: React.ComponentType<React.ComponentProps<"img">>;
  description: ReactNode;
};

/*
Seamless AMS Integration – Uses OpenBamboo Format to identify spools and automatically assign them to an AMS slot.  
Effortless Slicer Sync – Syncs spool data directly from BambuStudio and OrcaSlicer, ensuring up-to-date spool information.  
Enhanced OpenBamboo Support – Reads and writes spool data in the OpenBamboo format, which contains the same data as official BambuLab spools, plus additional augmented information for extended functionality and better spool management.  
Advanced Creality CFS Compatibility – Supports both encrypted and non-encrypted Creality CFS spool tags, making it adaptable to different Creality systems.  
BBL Spool Recognition – Reads official BambuLab spool data, allowing seamless integration with existing BBL spools.  
Standalone or Xtouch-Pro Ready – Functions independently or enhances your workflow when paired with Xtouch-Pro for a more integrated experience.
*/

const FeatureList: FeatureItem[] = [
  {
    title: "AMS Integration",
    Png: require("@site/static/img/h.png").default,
    description: (
      <>
        Uses OpenBamboo Format to identify filaments and automatically assign
        them to an AMS slot.
      </>
    ),
  },
  {
    title: "OpenBamboo",
    Png: require("@site/static/img/c.png").default,
    description: (
      <>
        Reads and writes filament data in the OpenBamboo format, containing all
        standard BambuLab filament information plus additional data for enhanced
        functionality and better filament management.
      </>
    ),
  },
  {
    title: "Slicer Sync",
    Png: require("@site/static/img/xspool-sync.png").default,
    description: (
      <>
        Syncs filament data directly from BambuStudio and OrcaSlicer, ensuring
        up-to-date filament information.
      </>
    ),
  },
  {
    title: "Creality CFS Compatibility",
    Png: require("@site/static/img/cfs.png").default,
    description: (
      <>
        Supports both encrypted and non-encrypted Creality CFS filament tags,
        making it adaptable to different Creality systems.
      </>
    ),
  },
  {
    title: "BBL Spools",
    Png: require("@site/static/img/bambulab.png").default,
    description: (
      <>
        Reads official BambuLab filament data, providing easy access to filament
        details.
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
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
