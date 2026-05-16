import React, { useEffect } from 'react';
import { 
  Bot, 
  MessageSquare, 
  Globe, 
  Zap, 
  Database, 
  Shield, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Code, 
  FileText, 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Smile,
  CheckCircle2,
  Sparkles,
  Users,
  ShieldCheck,
  Rocket,
  Inbox,
  Brain,
  Cloud,
  RefreshCcw,
  Search,
  Target,
  ZapOff,
  Download
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './ProductsView.module.css';

const ProductsView = ({ onLoginClick }) => {
  const { t } = useLanguage();

  // Reveal animations logic
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

    const revealElements = document.querySelectorAll(`.${styles.reveal}`);
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`${styles.badge} ${styles.reveal}`}>
          <div className={styles.badgeDot}></div>
          <span>{t('productsPage.badge')}</span>
        </div>
        <h1 className={`${styles.heroTitle} ${styles.reveal}`}>
          {renderWithGradient(t('productsPage.title'))}
        </h1>
        <p className={`${styles.heroSubtitle} ${styles.reveal}`}>
          {t('productsPage.subtitle')}
        </p>
      </section>

      {/* Main Features Grid */}
      <section className={styles.featuresGrid}>
        <div className={`${styles.featureCard} ${styles.reveal}`}>
          <div className={styles.featureIcon}><Inbox size={32} /></div>
          <h3>{t('productsPage.grid.inbox.title')}</h3>
          <p>{t('productsPage.grid.inbox.desc')}</p>
        </div>
        <div className={`${styles.featureCard} ${styles.reveal}`}>
          <div className={styles.featureIcon}><Zap size={32} /></div>
          <h3>{t('productsPage.grid.automation.title')}</h3>
          <p>{t('productsPage.grid.automation.desc')}</p>
        </div>
        <div className={`${styles.featureCard} ${styles.reveal}`}>
          <div className={styles.featureIcon}><Brain size={32} /></div>
          <h3>{t('productsPage.grid.brain.title')}</h3>
          <p>{t('productsPage.grid.brain.desc')}</p>
        </div>
        <div className={`${styles.featureCard} ${styles.reveal}`}>
          <div className={styles.featureIcon}><BarChart3 size={32} /></div>
          <h3>{t('productsPage.grid.insights.title')}</h3>
          <p>{t('productsPage.grid.insights.desc')}</p>
        </div>
      </section>

      {/* Feature Sections */}
      
      {/* 1. Inbox Section */}
      <section className={styles.detailSection}>
        <div className={`${styles.detailContent} ${styles.reveal}`}>
          <h2 className={styles.sectionTitle}>
            {renderWithGradient(t('productsPage.sections.inbox.title'))}
          </h2>
          <p className={styles.sectionDescription}>
            {t('productsPage.sections.inbox.desc')}
          </p>
          <ul className={styles.featureList}>
            <li><MessageSquare size={20} /> {t('productsPage.sections.inbox.items.0')}</li>
            <li><Cloud size={20} /> {t('productsPage.sections.inbox.items.1')}</li>
            <li><Inbox size={20} /> {t('productsPage.sections.inbox.items.2')}</li>
          </ul>
        </div>
        <div className={`${styles.detailImage} ${styles.reveal}`}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.mockupInterface}>
              <div className={styles.mockupSidebar}></div>
              <div className={styles.mockupMain}>
                <div className={styles.mockupHeader}></div>
                <div className={styles.mockupChat}>
                  <div className={styles.chatBubble}></div>
                  <div className={styles.chatBubble} style={{alignSelf: 'flex-end', backgroundColor: '#000'}}></div>
                  <div className={styles.chatBubble}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Training Section */}
      <section className={`${styles.detailSection} ${styles.reverse}`}>
        <div className={`${styles.detailContent} ${styles.reveal}`}>
          <h2 className={styles.sectionTitle}>
            {renderWithGradient(t('productsPage.sections.training.title'))}
          </h2>
          <p className={styles.sectionDescription}>
            {t('productsPage.sections.training.desc')}
          </p>
          <ul className={styles.featureList}>
            <li><FileText size={20} /> {t('productsPage.sections.training.items.0')}</li>
            <li><Search size={20} /> {t('productsPage.sections.training.items.1')}</li>
            <li><RefreshCcw size={20} /> {t('productsPage.sections.training.items.2')}</li>
          </ul>
        </div>
        <div className={`${styles.detailImage} ${styles.reveal}`}>
          <div className={styles.imagePlaceholder} style={{ background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)' }}>
             <div className={styles.trainingVisual}>
                <div className={styles.fileNode} style={{top: '20%', left: '20%'}}><FileText size={24} /></div>
                <div className={styles.fileNode} style={{top: '60%', left: '15%'}}><Database size={24} /></div>
                <div className={styles.fileNode} style={{top: '40%', right: '20%'}}><Brain size={40} color="#000" /></div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Sales Section */}
      <section className={styles.detailSection}>
        <div className={`${styles.detailContent} ${styles.reveal}`}>
          <h2 className={styles.sectionTitle}>
            {renderWithGradient(t('productsPage.sections.sales.title'))}
          </h2>
          <p className={styles.sectionDescription}>
            {t('productsPage.sections.sales.desc')}
          </p>
          <ul className={styles.featureList}>
            <li><Zap size={20} /> {t('productsPage.sections.sales.items.0')}</li>
            <li><Target size={20} /> {t('productsPage.sections.sales.items.1')}</li>
            <li><ShieldCheck size={20} /> {t('productsPage.sections.sales.items.2')}</li>
          </ul>
        </div>
        <div className={`${styles.detailImage} ${styles.reveal}`}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.salesMockup}>
               <div className={styles.salesCard}>
                  <div className={styles.salesCardHeader}></div>
                  <div className={styles.salesPrice}>$1,200.00</div>
                  <div className={styles.salesStatus}>Pending AI Approval</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Analytics Section */}
      <section className={`${styles.detailSection} ${styles.reverse}`}>
        <div className={`${styles.detailContent} ${styles.reveal}`}>
          <h2 className={styles.sectionTitle}>
            {renderWithGradient(t('productsPage.sections.analytics.title'))}
          </h2>
          <p className={styles.sectionDescription}>
            {t('productsPage.sections.analytics.desc')}
          </p>
          <ul className={styles.featureList}>
            <li><TrendingUp size={20} /> {t('productsPage.sections.analytics.items.0')}</li>
            <li><ZapOff size={20} /> {t('productsPage.sections.analytics.items.1')}</li>
            <li><Download size={20} /> {t('productsPage.sections.analytics.items.2')}</li>
          </ul>
        </div>
        <div className={`${styles.detailImage} ${styles.reveal}`}>
          <div className={styles.imagePlaceholder} style={{ background: '#000' }}>
            <div className={styles.analyticsMockup}>
               <div className={styles.chartBar} style={{height: '40%'}}></div>
               <div className={styles.chartBar} style={{height: '70%'}}></div>
               <div className={styles.chartBar} style={{height: '50%'}}></div>
               <div className={styles.chartBar} style={{height: '90%'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={`${styles.ctaContent} ${styles.reveal}`}>
          <h2 className={styles.heroTitle}>
            {renderWithGradient(t('productsPage.cta.title'))}
          </h2>
          <p className={styles.heroSubtitle}>
            {t('productsPage.cta.subtitle')}
          </p>
          <div className={styles.ctaActions}>
            <button className={styles.btnPrimary} onClick={() => onLoginClick('register')}>
              {t('productsPage.cta.start')}
            </button>
            <button className={styles.btnOutline} onClick={() => onLoginClick('demo')}>
              {t('productsPage.cta.demo')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsView;
