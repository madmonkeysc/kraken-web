import React from 'react';
import styles from './PrivacyView.module.css';
import { useLanguage } from '../../context/LanguageContext';

const PrivacyView = () => {
  const { t } = useLanguage();
  const privacy = t('privacy');

  return (
    <div className={styles.privacyWrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.badge}>{privacy.badge}</div>
          <h1 className={styles.title}>{privacy.title}</h1>
          <p className={styles.lastUpdated}>{privacy.lastUpdated}</p>
        </header>

        <div className={styles.content}>
          {privacy.sections.map((section) => (
            <section key={section.id} className={styles.section}>
              <h2><span>{section.id}</span> {section.title}</h2>
              
              {section.content && section.content.map((paragraph, pIndex) => (
                <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}

              {section.listTitle1 && <h3 dangerouslySetInnerHTML={{ __html: section.listTitle1 }} />}
              {section.list1 && (
                <ul className={styles.list}>
                  {section.list1.map((item, iIndex) => (
                    <li key={iIndex} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )}

              {section.listTitle2 && <h3 dangerouslySetInnerHTML={{ __html: section.listTitle2 }} />}
              {section.list2 && (
                <ul className={styles.list}>
                  {section.list2.map((item, iIndex) => (
                    <li key={iIndex} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )}

              {section.list && (
                <ul className={styles.list}>
                  {section.list.map((item, iIndex) => (
                    <li key={iIndex} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )}

              {section.jurisdictions && (
                <div className={styles.jurisdictionGrid}>
                  {section.jurisdictions.map((jurisdiction, jIndex) => (
                    <div key={jIndex} className={styles.jurisdictionCard}>
                      <h4>{jurisdiction.flag} {jurisdiction.region}</h4>
                      <p>{jurisdiction.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          <div className={styles.contactBox}>
            <h3>{privacy.contact.title}</h3>
            <p>{privacy.contact.description}</p>
            <a href={`mailto:${privacy.contact.email}`} className={styles.emailLink}>{privacy.contact.email}</a>
          </div>
        </div>

        <footer className={styles.footer}>
          <p>{privacy.footer}</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyView;
