import React from 'react';
import { Calendar, CheckCircle2, Circle, Clock, Rocket, Zap, Star, Shield, Sparkles } from 'lucide-react';
import styles from '../Landing.module.css';
import { useLanguage } from '../../context/LanguageContext';

const RoadmapView = () => {
  const { t } = useLanguage();

  const roadmapData = [
    {
      status: t('roadmapPage.status.now'),
      badge: 'NOW',
      items: [
        { title: 'Kraken Voice API', desc: 'Agentes que hablan con voz humana hiper-realista.', icon: <Zap size={20} /> },
        { title: 'Integración Directa con CRM', desc: 'HubSpot, Salesforce y Pipedrive sin intermediarios.', icon: <CheckCircle2 size={20} /> },
        { title: 'Kraken Multi-Agente', desc: 'Varios agentes colaborando para resolver flujos complejos.', icon: <Rocket size={20} /> }
      ]
    },
    {
      status: t('roadmapPage.status.next'),
      badge: 'NEXT',
      items: [
        { title: 'Kraken Analytics Pro', desc: 'Dashboards avanzados con predicción de churn.', icon: <Star size={20} /> },
        { title: 'Email AI Agent', desc: 'Gestión completa de bandejas de entrada y redacción.', icon: <Clock size={20} /> },
        { title: 'Self-Learning Agents', desc: 'IA que aprende de las correcciones humanas en tiempo real.', icon: <Sparkles size={20} /> }
      ]
    },
    {
      status: t('roadmapPage.status.future'),
      badge: 'FUTURE',
      items: [
        { title: 'Kraken Video AI', desc: 'Generación de video-respuestas personalizadas.', icon: <Shield size={20} /> },
        { title: 'Autonomous Enterprise', desc: 'Sistemas que gestionan departamentos enteros.', icon: <Circle size={20} /> }
      ]
    }
  ];

  return (
    <div className={styles.viewContainer}>
      <header className={styles.viewHeader}>
        <div className={styles.productBadge} style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>ROADMAP</div>
        <h1 className={styles.viewTitle}>
          {t('roadmapPage.title').split('{Roadmap}')[0]}
          <span className={styles.textGradient}>Roadmap</span>
          {t('roadmapPage.title').split('{Roadmap}')[1]}
        </h1>
        <p className={styles.viewSubtitle}>
          {t('roadmapPage.subtitle')}
        </p>
      </header>

      <div className={styles.roadmapGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
        {roadmapData.map((column, idx) => (
          <div key={idx} className={styles.roadmapColumn} style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{column.status}</h2>
              <span style={{ 
                background: idx === 0 ? 'rgba(0,102,255,0.1)' : 'rgba(255,255,255,0.05)', 
                color: idx === 0 ? '#0066ff' : '#9ca3af',
                padding: '0.25rem 0.75rem',
                borderRadius: '99px',
                fontSize: '0.75rem',
                fontWeight: 800
              }}>{column.badge}</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {column.items.map((item, iidx) => (
                <div key={iidx} style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  padding: '1.5rem', 
                  borderRadius: '1.5rem',
                  border: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  gap: '1rem'
                }}>
                  <div style={{ color: '#0066ff' }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: '#9ca3af', lineHeight: '1.4' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section style={{ marginTop: '8rem', textAlign: 'center', padding: '4rem', background: 'linear-gradient(180deg, transparent, rgba(0,102,255,0.05))', borderRadius: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>¿Quieres proponer una funcionalidad?</h2>
        <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Tu feedback es el motor de nuestra innovación. Cuéntanos qué necesitas.</p>
        <button className={styles.btnPrimary} onClick={() => window.location.href = 'mailto:feedback@krakenai.com'}>Enviar Propuesta</button>
      </section>
    </div>
  );
};

export default RoadmapView;
