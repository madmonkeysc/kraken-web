import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote, BarChart3, Users, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';
import styles from '../Landing.module.css';
import { successStories } from './successStoriesData';
import { useLanguage } from '../../context/LanguageContext';

const SuccessStoriesView = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const { t, language } = useLanguage();

  const currentStories = successStories[language] || successStories.ES;

  const renderWithGradient = (text) => {
    if (!text) return null;
    return text.split(/(\{.*?\})/).map((part, i) => {
      if (part.startsWith('{') && part.endsWith('}')) {
        return <span key={i} className={styles.textGradient}>{part.slice(1, -1)}</span>;
      }
      return part;
    });
  };

  if (selectedStory) {
    return (
      <div className={styles.viewContainer}>
        <button 
          onClick={() => setSelectedStory(null)}
          className={styles.btnOutline}
          style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '12px' }}
        >
          <ArrowLeft size={16} /> {t('docs.successStories.backLink')}
        </button>

        <header className={styles.viewHeader} style={{ textAlign: 'left', alignItems: 'flex-start' }}>
          <div className={styles.productBadge} style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>{selectedStory.company}</div>
          <h1 className={styles.viewTitle} style={{ fontSize: '3.5rem', maxWidth: '900px' }}>{selectedStory.title}</h1>
          <p className={styles.viewSubtitle} style={{ marginLeft: 0, maxWidth: '800px' }}>{selectedStory.summary}</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '4rem', marginTop: '4rem' }}>
          <div className={styles.storyBody} dangerouslySetInnerHTML={{ __html: selectedStory.content }} />
          
          <aside>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: '100px' }}>
              <Quote size={40} color="#0066ff" style={{ marginBottom: '1.5rem', opacity: 0.5 }} />
              <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: '1.6', marginBottom: '2rem', fontStyle: 'italic' }}>
                "{selectedStory.quote}"
              </p>
              <hr style={{ border: 0, borderTop: '1px solid rgba(255,255,255,0.1)', marginBottom: '2rem' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: 'rgba(0,102,255,0.1)', color: '#0066ff', padding: '0.75rem', borderRadius: '1rem' }}>
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{selectedStory.stat}</div>
                    <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>{selectedStory.label}</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.viewContainer}>
      <header className={styles.viewHeader}>
        <div className={styles.productBadge} style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>{t('docs.successStories.badge')}</div>
        <h1 className={styles.viewTitle}>{renderWithGradient(t('docs.successStories.title'))}</h1>
        <p className={styles.viewSubtitle}>
          {t('docs.successStories.lead')}
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
        {currentStories.map((story) => (
          <div 
            key={story.id} 
            className={styles.resourceCard} 
            onClick={() => setSelectedStory(story)}
            style={{ cursor: 'pointer', padding: '3rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(0,102,255,0.1)', color: '#0066ff', padding: '1rem', borderRadius: '1.5rem' }}>
                <BarChart3 size={32} />
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0066ff' }}>{story.stat}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase' }}>{story.label}</div>
              </div>
            </div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{story.title}</h3>
            <p style={{ color: '#9ca3af', marginBottom: '2rem', lineHeight: '1.6' }}>{story.summary}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: '#0066ff' }}>
              {t('docs.successStories.viewFull')} <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>

      <section style={{ marginTop: '10rem', padding: '6rem', background: '#000', borderRadius: '3rem', color: '#fff', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem' }}>{t('docs.successStories.cta.title')}</h2>
        <p style={{ color: '#9ca3af', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '700px', marginInline: 'auto' }}>
          {t('docs.successStories.cta.text')}
        </p>
        <button className={styles.btnPrimary} style={{ padding: '1.5rem 4rem', fontSize: '1.25rem' }}>{t('docs.successStories.cta.btn')}</button>
      </section>
    </div>
  );
};

export default SuccessStoriesView;
