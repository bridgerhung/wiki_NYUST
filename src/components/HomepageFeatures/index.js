import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "跳轉地區",
    //  description: <>DNS1:&nbsp;&nbsp;140.125.252.1&nbsp;&nbsp;</>,
    //  description2: <>DNS2:&nbsp;&nbsp;140.125.253.2&nbsp;&nbsp;</>,
    link1: (
      <>
        <a href={"/class/wen/Story/Love_story_V2"}>
          &nbsp;安然無恙-故事精簡版&nbsp;
        </a>
      </>
    ),
    // link2: <><a href={'/class/en/TV%20introduce'}>&nbsp;六人行&nbsp;</a></>,
    // link3: <><a href={'/class/MIS/mobile_system'}>&nbsp;行動系統&nbsp;</a></>
  },
];

function Feature({ title, link1, link2, link3 }) {
  return (
    <div className={clsx("col col--21")}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>
          <b>{link1}</b>
        </p>
        <p>
          <b>{link2}</b>
        </p>
        <p>
          <b>{link3}</b>
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
