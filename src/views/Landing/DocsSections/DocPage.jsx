import React from 'react';
import styles from '../DocsView.module.css';

const DocPage = ({ badge, title, children, container = false }) => {
  return (
    <div className={container ? styles.container : ''}>
      {badge && <div className={styles.badge}>{badge}</div>}
      {title && <h1 className={styles.title}>{title}</h1>}
      {children}
    </div>
  );
};

export default DocPage;
