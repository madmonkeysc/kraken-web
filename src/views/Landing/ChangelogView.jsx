import React from 'react';
import { Calendar, Package, Zap, Shield, Bug, Star, ArrowRight } from 'lucide-react';
import styles from '../Landing.module.css';
import { useLanguage } from '../../context/LanguageContext';

const ChangelogView = () => {
  const { t, getTranslationObject } = useLanguage();

  const updates = getTranslationObject('changelogPage.updates') || [];

  const renderWithGradient = (text) => {
    if (!text) return null;
    return text.split(/(\{.*?\})/).map((part, i) => {
      if (part.startsWith('{') && part.endsWith('}')) {
        return <span key={i} className={styles.textGradient}>{part.slice(1, -1)}</span>;
      }
      return part;
    });
  };

  const getTypeStyle = (type) => {
    switch (type) {
      case 'major': return { background: 'rgba(0,102,255,0.1)', color: '#0066ff' };
      case 'feature': return { background: 'rgba(16,185,129,0.1)', color: '#10b981' };
      case 'fix': return { background: 'rgba(245,158,11,0.1)', color: '#f59e0b' };
      default: return { background: 'rgba(255,255,255,0.05)', color: '#9ca3af' };
    }
  };

  return (
    <div className={styles.viewContainer}>
      <header className={styles.viewHeader}>
        <div className={styles.productBadge} style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>CHANGELOG</div>
        <h1 className={styles.viewTitle}>
          {renderWithGradient(t('changelogPage.title'))}
        </h1>
        <p className={styles.viewSubtitle}>
          {t('changelogPage.subtitle')}
        </p>
      </header>

      <div className={styles.changelogTimeline} style={{ maxWidth: '800px', margin: '4rem auto 0' }}>
        {updates.map((update, idx) => (
          <div key={idx} style={{ position: 'relative', paddingBottom: '4rem', paddingLeft: '3rem', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ 
              position: 'absolute', 
              left: '-9px', 
              top: '0', 
              width: '17px', 
              height: '17px', 
              borderRadius: '50%', 
              background: '#0066ff', 
              border: '4px solid #000' 
            }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ 
                ...getTypeStyle(update.type), 
                padding: '0.25rem 0.75rem', 
                borderRadius: '99px', 
                fontSize: '0.75rem', 
                fontWeight: 800,
                textTransform: 'uppercase'
              }}>{update.type}</span>
              <span style={{ color: '#6b7280', fontSize: '0.9rem' }}><Calendar size={14} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} /> {update.date}</span>
            </div>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>{t('changelogPage.version')} {update.version} — {update.title}</h2>
            
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {update.items.map((item, iidx) => (
                <li key={iidx} style={{ color: '#9ca3af', display: 'flex', gap: '0.75rem', lineHeight: '1.6' }}>
                  <Zap size={16} style={{ color: '#0066ff', flexShrink: 0, marginTop: '0.25rem' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChangelogView;
