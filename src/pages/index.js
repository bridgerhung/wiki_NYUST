import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/category/課程檔案"
          >
            點我進入報告專案頁面
          </Link>
          
        </div> */}
        
        <h1>  </h1>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/category/最近翻譯"
          >
            點我查看最近翻譯的歌曲
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="名琮維基"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
