import React from 'react';
import { Target, Eye, Heart, Users, Shield, Zap, ArrowRight, MessageSquare, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from '../Landing.module.css';

const CompanyView = () => {
  const { t } = useLanguage();

  const renderWithGradient = (text) => {
    if (!text) return null;
    return text.split(/(\{.*?\})/).map((part, i) => {
      if (part.startsWith('{') && part.endsWith('}')) {
        return <span key={i} className={styles.textGradient}>{part.slice(1, -1)}</span>;
      }
      return part;
    });
  };

  return (
    <div className={styles.viewContainer}>
      <header className={styles.viewHeader}>
        <div className={styles.productBadge} style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>
          {t('companyPage.badge')}
        </div>
        <h1 className={styles.viewTitle}>
          {renderWithGradient(t('companyPage.title'))}
        </h1>
        <p className={styles.viewSubtitle}>
          {t('companyPage.subtitle')}
        </p>
      </header>

      <section className={styles.companySection}>
        <div className={styles.companyGrid}>
          <div className={styles.companyImage} style={{ background: '#000', borderRadius: '3rem', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
             <div style={{ position: 'absolute', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(252,242,0,0.1) 0%, transparent 70%)', animation: 'pulse 10s infinite' }}></div>
             <div style={{ fontSize: '10rem', opacity: 0.1, fontWeight: 900, color: '#fff' }}>KRAKEN</div>
             <Target size={120} color="#FCF200" strokeWidth={1} style={{ position: 'relative', zIndex: 1 }} />
          </div>
          <div className={styles.companyText}>
            <h2>{t('companyPage.mission.title')}</h2>
            <p>{t('companyPage.mission.desc1')}</p>
            <p>{t('companyPage.mission.desc2')}</p>
            <button className={styles.btnPrimary}>{t('companyPage.mission.cta')} <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection} style={{ marginTop: '10rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>{t('companyPage.values.title')}</h2>
        </div>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard} style={{ background: '#f9fafb', borderRadius: '2rem' }}>
            <span className={styles.valueIcon}><Heart color="#ff4d4d" /></span>
            <h4>{t('companyPage.values.items.0.title')}</h4>
            <p>{t('companyPage.values.items.0.desc')}</p>
          </div>
          <div className={styles.valueCard} style={{ background: '#f9fafb', borderRadius: '2rem' }}>
            <span className={styles.valueIcon}><Zap color="#FCF200" /></span>
            <h4>{t('companyPage.values.items.1.title')}</h4>
            <p>{t('companyPage.values.items.1.desc')}</p>
          </div>
          <div className={styles.valueCard} style={{ background: '#f9fafb', borderRadius: '2rem' }}>
            <span className={styles.valueIcon}><Shield color="#4d79ff" /></span>
            <h4>{t('companyPage.values.items.2.title')}</h4>
            <p>{t('companyPage.values.items.2.desc')}</p>
          </div>
        </div>
      </section>

      <section className={styles.companySection} style={{ marginTop: '10rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900 }}>
            {renderWithGradient(t('companyPage.manifesto.title'))}
          </h2>
          <p style={{ maxWidth: '800px', margin: '2rem auto', fontSize: '1.25rem', color: '#666', lineHeight: 1.8 }}>
            {t('companyPage.manifesto.desc')}
          </p>
        </div>
      </section>

      <section style={{ marginTop: '12rem', padding: '8rem 4rem', background: '#fafafa', borderRadius: '4rem', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'center' }}>
         <div>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '2rem' }}>{t('companyPage.contact.title')}</h2>
            <p style={{ color: '#666', fontSize: '1.125rem', marginBottom: '3rem' }}>{t('companyPage.contact.subtitle')}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
                  <Mail size={20} /> {t('companyPage.contact.email')}
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
                  <MessageSquare size={20} /> {t('companyPage.contact.chat')}
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600 }}>
                  <MapPin size={20} /> {t('companyPage.contact.location')}
               </div>
            </div>
         </div>
         <div style={{ background: '#fff', padding: '4rem', borderRadius: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
            <form style={{ display: 'grid', gap: '1.5rem' }}>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input type="text" placeholder={t('companyPage.contact.form.name')} style={{ padding: '1rem', borderRadius: '10px', border: '1px solid #eee' }} />
                  <input type="email" placeholder={t('companyPage.contact.form.email')} style={{ padding: '1rem', borderRadius: '10px', border: '1px solid #eee' }} />
               </div>
               <input type="text" placeholder={t('companyPage.contact.form.company')} style={{ padding: '1rem', borderRadius: '10px', border: '1px solid #eee' }} />
               <textarea placeholder={t('companyPage.contact.form.message')} style={{ padding: '1rem', borderRadius: '10px', border: '1px solid #eee', minHeight: '150px' }}></textarea>
               <button className={styles.btnPrimary} style={{ width: '100%' }}>{t('companyPage.contact.form.cta')}</button>
            </form>
         </div>
      </section>

      <footer style={{ marginTop: '8rem', padding: '4rem 0', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: '#666' }}>
         <div>{t('companyPage.footer.rights')}</div>
         <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{t('companyPage.footer.links.privacy')}</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{t('companyPage.footer.links.terms')}</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{t('companyPage.footer.links.dpa')}</a>
         </div>
      </footer>
    </div>
  );
};

export default CompanyView;
