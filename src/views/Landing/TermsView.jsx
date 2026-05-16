import React from 'react';
import { Shield, Lock, Scale, Globe, Mail, FileText, AlertCircle } from 'lucide-react';
import styles from './TermsView.module.css';
import { useLanguage } from '../../context/LanguageContext';

const TermsView = () => {
  const { t, getTranslationObject } = useLanguage();
  
  const sections = getTranslationObject('terms.sections') || [];

  return (
    <div className={styles.termsWrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.badge}>{t('terms.badge')}</div>
          <h1 className={styles.title}>{t('terms.title')}</h1>
          <p className={styles.lastUpdated}>{t('terms.lastUpdated')}</p>
        </header>

        <div className={styles.content}>
          {sections.map((section) => (
            <section key={section.id} className={styles.section}>
              <h2><span>{section.id}</span> {section.title}</h2>
              
              {section.content && section.content.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
              
              {section.list && (
                <ul className={styles.list}>
                  {section.list.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              )}
              
              {section.notice && (
                <div className={styles.legalNotice}>
                  <p dangerouslySetInnerHTML={{ __html: section.notice }} />
                </div>
              )}
              
              {section.jurisdictions && (
                <div className={styles.jurisdictionGrid}>
                  {section.jurisdictions.map((j, i) => (
                    <div key={i} className={styles.jurisdictionCard}>
                      <h4>{j.icon} {j.title}</h4>
                      <p>{j.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          <div className={styles.contactBox}>
            <h3>{t('terms.contact.title')}</h3>
            <p>{t('terms.contact.desc')}</p>
            <a href={`mailto:${t('terms.contact.email')}`} className={styles.emailLink}>{t('terms.contact.email')}</a>
          </div>
        </div>

        <footer className={styles.footer}>
          <p>{t('terms.footer')}</p>
        </footer>
      </div>
    </div>
  );
};

export default TermsView;
