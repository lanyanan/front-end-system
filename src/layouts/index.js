import React from 'react';
import styles from './index.css';
import Header from './Header';
import SildBar from './sildBar';
import withRouter from 'umi/withRouter';

function Layout({ children, location }) {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <SildBar location={location} />
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Layout);