import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  MessageSquare,
  Globe,
  Settings,
  Clock,
  Unlock,
  Users,
  TrendingUp,
  DollarSign,
  PieChart,
  Target,
  Layout,
  LifeBuoy,
  ChevronDown,
  ChevronUp,
  UserPlus,
  Link as LinkIcon,
  Share2,
  Gift,
  Star,
  Award
} from 'lucide-react';
import styles from './AffiliatesView.module.css';

const Reveal = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(ref.current);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} ${isVisible ? styles.revealActive : styles.reveal}`}>
      {children}
    </div>
  );
};

const FAQItem = ({ item, index, activeFaq, setActiveFaq }) => {
  const isActive = activeFaq === index;
  
  return (
    <Reveal className={`${styles.faqItem} ${isActive ? styles.faqActive : ''}`}>
      <button className={styles.faqQuestion} onClick={() => setActiveFaq(isActive ? null : index)}>
        <span>{item.q}</span>
        {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div className={styles.faqAnswer}>
        <p>{item.a}</p>
      </div>
    </Reveal>
  );
};

const AffiliatesView = ({ onLoginClick }) => {
  const { t, getTranslationObject, language } = useLanguage();
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = getTranslationObject('affiliates.faq.items') || [];
  const benefitsItems = getTranslationObject('affiliates.benefits.items') || [];
  const processSteps = getTranslationObject('affiliates.process.steps') || [];
  const targetItems = getTranslationObject('affiliates.target.items') || [];
  const commissionItems = getTranslationObject('affiliates.commissionDetail.items') || [];

  return (
    <div className={styles.container}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <Reveal className={styles.heroBadge}>
          <div className={styles.badgeDot}></div>
          <span>{t('affiliates.hero.badge')}</span>
        </Reveal>
        <Reveal>
          <h1 className={styles.heroTitle}>
            {t('affiliates.hero.title').split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h1>
        </Reveal>
        <Reveal>
          <p className={styles.heroSubtitle}>
            {t('affiliates.hero.subtitle')}
          </p>
        </Reveal>
        
        <Reveal className={styles.heroActions}>
          <button className={styles.btnPrimary} onClick={() => onLoginClick('register')}>
            {t('affiliates.hero.ctaPrimary')} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </button>
          <button className={styles.btnOutline} onClick={() => onLoginClick('login')}>
            {t('affiliates.hero.ctaSecondary')}
          </button>
        </Reveal>

        <Reveal className={styles.statsRow}>
          <StatItem value={t('affiliates.stats.commission.value')} label={t('affiliates.stats.commission.label')} />
          <StatItem value={t('affiliates.stats.cookie.value')} label={t('affiliates.stats.cookie.label')} />
          <StatItem value={t('affiliates.stats.payments.value')} label={t('affiliates.stats.payments.label')} />
          <StatItem value={t('affiliates.stats.support.value')} label={t('affiliates.stats.support.label')} />
        </Reveal>
      </section>

      {/* 2. Benefits Grid */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('affiliates.benefits.title')}</h2>
          <p className={styles.sectionSubtitle}>
            {t('affiliates.benefits.subtitle')}
          </p>
        </div>
        
        <div className={styles.grid}>
          {benefitsItems.map((item, idx) => {
            const icons = [
              <TrendingUp size={24} key="0" />,
              <Award size={24} key="1" />,
              <Layout size={24} key="2" />,
              <Gift size={24} key="3" />,
              <Star size={24} key="4" />,
              <LifeBuoy size={24} key="5" />
            ];
            return (
              <BenefitCard 
                key={idx}
                icon={icons[idx]} 
                title={item.title} 
                desc={item.desc} 
              />
            );
          })}
        </div>
      </section>

      {/* 3. Why Join (Commission Detail) */}
      <section className={styles.section}>
        <Reveal className={styles.commissionContainer}>
          <div className={styles.commissionContent}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              {t('affiliates.commissionDetail.title').split(' ').map((word, i, arr) => (
                <React.Fragment key={i}>
                  {word === 'realmente' || word === 'really' ? (
                    <span style={{ textDecoration: 'underline' }}>{word}</span>
                  ) : word}
                  {i < arr.length - 1 && ' '}
                </React.Fragment>
              ))}
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: 1.6 }}>
              {t('affiliates.commissionDetail.subtitle')}
            </p>
            
            <ul className={styles.commissionList}>
              {commissionItems.map((item, idx) => {
                const icons = [
                  <CheckCircle2 size={24} key="0" />,
                  <Clock size={24} key="1" />,
                  <ShieldCheck size={24} key="2" />
                ];
                return (
                  <li key={idx}>
                    <div className={styles.listIcon}>{icons[idx]}</div>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div className={styles.commissionVisual}>
            <div className={styles.visualCard}>
              <div className={styles.visualHeader}>
                <span style={{ fontWeight: 600 }}>{t('affiliates.commissionDetail.visual.title')}</span>
                <div className={styles.visualDot}></div>
              </div>
              <div className={styles.visualBody}>
                <div className={styles.visualStat}>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>{t('affiliates.commissionDetail.visual.total')}</span>
                  <h3>{t('affiliates.commissionDetail.visual.value')}</h3>
                </div>
                <div className={styles.visualChart}>
                  <div className={styles.chartBar} style={{ height: '40%' }}></div>
                  <div className={styles.chartBar} style={{ height: '60%' }}></div>
                  <div className={styles.chartBar} style={{ height: '50%' }}></div>
                  <div className={styles.chartBar} style={{ height: '80%' }}></div>
                  <div className={styles.chartBar} style={{ height: '70%' }}></div>
                  <div className={styles.chartBar} style={{ height: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. How it Works */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('affiliates.process.title')}</h2>
          <p className={styles.sectionSubtitle}>
            {t('affiliates.process.subtitle')}
          </p>
        </div>
        
        <div className={styles.processGrid}>
          {processSteps.map((step, idx) => {
            const icons = [
              <UserPlus size={32} key="0" />,
              <LinkIcon size={32} key="1" />,
              <Share2 size={32} key="2" />,
              <DollarSign size={32} key="3" />
            ];
            return (
              <ProcessStep 
                key={idx}
                number={idx + 1} 
                icon={icons[idx]} 
                title={step.title} 
                desc={step.desc} 
              />
            );
          })}
        </div>
      </section>

      {/* 5. Target Audience */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('affiliates.target.title')}</h2>
          <p className={styles.sectionSubtitle}>
            {t('affiliates.target.subtitle')}
          </p>
        </div>
        
        <div className={styles.targetGrid}>
          {targetItems.map((item, idx) => {
            const icons = [
              <Users size={32} key="0" />,
              <Target size={32} key="1" />,
              <Globe size={32} key="2" />,
              <Settings size={32} key="3" />
            ];
            return (
              <TargetCard 
                key={idx}
                icon={icons[idx]} 
                title={item.title} 
                desc={item.desc}
              />
            );
          })}
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('affiliates.faq.title')}</h2>
          <p className={styles.sectionSubtitle}>{t('affiliates.faq.subtitle')}</p>
        </div>
        
        <div className={styles.faqContainer}>
          {faqs.map((item, idx) => (
            <FAQItem 
              key={idx} 
              item={item} 
              index={idx} 
              activeFaq={activeFaq} 
              setActiveFaq={setActiveFaq} 
            />
          ))}
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className={styles.ctaSection}>
        <Reveal className={styles.ctaContent}>
          <div className={styles.heroBadge}>
            <div className={styles.badgeDot}></div>
            <span>{t('affiliates.cta.badge')}</span>
          </div>
          <h2 className={styles.heroTitle}>
            {t('affiliates.cta.title')}
          </h2>
          <p className={styles.heroSubtitle}>
            {t('affiliates.cta.subtitle')}
          </p>
          
          <div className={styles.ctaActions}>
            <button className={styles.btnPrimary} onClick={() => onLoginClick('register')}>
              {t('affiliates.cta.ctaPrimary')} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
            <button className={styles.btnOutline} onClick={() => onLoginClick('login')}>
              {t('affiliates.cta.ctaSecondary')}
            </button>
          </div>

          <div className={styles.ctaFooter}>
            {(t('affiliates.cta.footer') || []).map((text, idx) => {
              const icons = [
                <ShieldCheck size={18} key="0" />,
                <CheckCircle2 size={18} key="1" />,
                <Award size={18} key="2" />
              ];
              return (
                <div key={idx} className={styles.ctaFooterItem}>{icons[idx]} {text}</div>
              );
            })}
          </div>
        </Reveal>
      </section>
    </div>
  );
};

const StatItem = ({ value, label }) => (
  <div className={styles.statItem}>
    <span className={styles.statValue}>{value}</span>
    <span className={styles.statLabel}>{label}</span>
  </div>
);

const BenefitCard = ({ icon, title, desc }) => (
  <Reveal className={styles.card}>
    <div className={styles.iconWrapper}>
      {icon}
    </div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </Reveal>
);

const ProcessStep = ({ number, icon, title, desc }) => (
  <Reveal className={styles.processStep}>
    <div className={styles.stepNumber}>{number}</div>
    <div className={styles.stepIcon}>{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </Reveal>
);

const TargetCard = ({ icon, title, desc }) => (
  <Reveal className={styles.targetCard}>
    <div className={styles.targetIcon}>
      {icon}
    </div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </Reveal>
);

export default AffiliatesView;

