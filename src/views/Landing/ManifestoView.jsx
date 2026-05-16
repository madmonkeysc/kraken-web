import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Zap, 
  Layers, 
  Target, 
  Shield, 
  Users, 
  Cpu, 
  Database, 
  Sparkles, 
  Rocket, 
  Maximize,
  Clock,
  Layout,
  MessageSquare,
  Activity,
  Heart,
  Quote
} from 'lucide-react';
import styles from './ManifestoView.module.css';

const ManifestoView = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.revealActive);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(`.${styles.reveal}`);
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const decalogoIcons = [
    <Cpu size={24} />,
    <Layers size={24} />,
    <Zap size={24} />,
    <Maximize size={24} />,
    <Target size={24} />,
    <Database size={24} />,
    <Rocket size={24} />,
    <Activity size={24} />,
    <Sparkles size={24} />,
    <Users size={24} />
  ];

  const decalogo = t('manifesto.decalogue.items').map((item, index) => ({
    ...item,
    icon: decalogoIcons[index]
  }));

  const valoresIcons = [
    <Layers size={20} />,
    <Shield size={20} />,
    <Target size={20} />,
    <Layout size={20} />,
    <Clock size={20} />
  ];

  const valores = t('manifesto.values.items').map((item, index) => ({
    ...item,
    icon: valoresIcons[index]
  }));

  return (
    <div className={styles.manifestoWrapper}>
      {/* Hero Section */}
      <header className={`${styles.hero} ${styles.reveal}`}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>{t('manifesto.badge')}</div>
          <h1 className={styles.title}>{t('manifesto.titleStart')} <br /><span className={styles.textGradient}>{t('manifesto.titleHighlight')}</span> <br />{t('manifesto.titleEnd')}</h1>
          <p className={styles.subtitle}>
            {t('manifesto.subtitle')}
          </p>
        </div>
      </header>

      {/* Filosofía Section */}
      <section className={`${styles.section} ${styles.reveal}`}>
        <div className={styles.container}>
          <div className={styles.filosofiaContent}>
            <h2 className={styles.sectionTitle}>{t('manifesto.philosophy.title')}</h2>
            <p className={styles.textLarge}>
              {t('manifesto.philosophy.p1')}
            </p>
            <p className={styles.textStandard}>
              {t('manifesto.philosophy.p2')}
            </p>
            <div className={styles.highlightBox}>
              {t('manifesto.philosophy.quote')}
            </div>
          </div>
        </div>
      </section>

      {/* Decálogo Section */}
      <section className={`${styles.section} ${styles.darkBg}`}>
        <div className={`${styles.container} ${styles.reveal}`}>
          <div className={styles.centeredHeader}>
            <h2 className={styles.sectionTitle}>{t('manifesto.decalogue.title')}</h2>
            <p className={styles.sectionSubtitle}>{t('manifesto.decalogue.subtitle')}</p>
          </div>
          
          <div className={styles.decalogoGrid}>
            {decalogo.map((item, index) => (
              <div key={index} className={styles.decalogoCard}>
                <div className={styles.cardIndex}>{(index + 1).toString().padStart(2, '0')}</div>
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className={`${styles.section} ${styles.reveal}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t('manifesto.values.title')}</h2>
          <div className={styles.valoresGrid}>
            {valores.map((valor, index) => (
              <div key={index} className={styles.valorItem}>
                <div className={styles.valorHeader}>
                  <div className={styles.valorIcon}>{valor.icon}</div>
                  <h4>{valor.title}</h4>
                </div>
                <p>{valor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nota del Fundador Section */}
      <section className={`${styles.section} ${styles.founderSection} ${styles.reveal}`}>
        <div className={styles.founderContainer}>
          <div className={styles.quoteIcon}><Quote size={48} /></div>
          <h2 className={styles.sectionTitle}>{t('manifesto.founder.title')}</h2>
          <div className={styles.founderQuote}>
            <p>
              {t('manifesto.founder.p1')}
            </p>
            <p>
              {t('manifesto.founder.p2')}
            </p>
            <p>
              {t('manifesto.founder.p3')}
            </p>
          </div>
          <div className={styles.founderSignature}>
            <div className={styles.founderInfo}>
              <span className={styles.founderName}>{t('manifesto.founder.name')}</span>
              <span className={styles.founderTitle}>{t('manifesto.founder.role')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`${styles.ctaSection} ${styles.reveal}`}>
        <div className={styles.ctaContent}>
          <h2>{t('manifesto.cta.title')}</h2>
          <p>{t('manifesto.cta.subtitle')}</p>
          <button className={styles.ctaButton}>{t('manifesto.cta.button')}</button>
        </div>
      </section>
    </div>
  );
};

export default ManifestoView;
