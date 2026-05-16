import React from 'react';
import styles from './DPAView.module.css';
import { useLanguage } from '../../context/LanguageContext';

const DPAView = () => {
  const { t } = useLanguage();
  const dpa = t('dpa');

  return (
    <div className={styles.dpaWrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.badge}>{dpa.badge}</div>
          <h1 className={styles.title}>{dpa.title}</h1>
          <p className={styles.lastUpdated}>{dpa.lastUpdated}</p>
        </header>

        <div className={styles.content}>
          {dpa.sections.map((section) => (
            <section key={section.id} className={styles.section}>
              <h2><span>{section.id}</span> {section.title}</h2>
              
              {section.content && section.content.map((paragraph, pIndex) => (
                <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}

              {section.list && (
                <ul className={styles.list}>
                  {section.list.map((item, iIndex) => (
                    <li key={iIndex} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )}

              {section.subprocessorBox && (
                <div className={styles.subprocessorBox}>
                  <ul className={styles.list}>
                    {section.subprocessorBox.list.map((item, iIndex) => (
                      <li key={iIndex} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                  {section.subprocessorBox.note && (
                    <p><small dangerouslySetInnerHTML={{ __html: section.subprocessorBox.note }} /></p>
                  )}
                </div>
              )}
            </section>
          ))}

          <div className={styles.contactBox}>
            <h3>{dpa.contact.title}</h3>
            <p>{dpa.contact.description}</p>
            <a href={`mailto:${dpa.contact.email}`} className={styles.emailLink}>{dpa.contact.email}</a>
          </div>
        </div>

        <footer className={styles.footer}>
          <p>{dpa.footer}</p>
        </footer>
      </div>
    </div>
  );
};

export default DPAView;

