import React from 'react';
import { 
  Headphones, 
  Target, 
  Package, 
  HelpCircle, 
  Calendar, 
  Rocket, 
  Globe, 
  ShoppingCart, 
  Users, 
  Terminal, 
  Megaphone, 
  Clock,
  Home,
  Shield,
  Building,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './UseCasesView.module.css';

const UseCasesView = ({ onLoginClick }) => {
  const { t } = useLanguage();

  const useCases = [
    {
      icon: <Headphones size={28} />,
      title: t('useCasesPage.grid.support247.title'),
      desc: t('useCasesPage.grid.support247.desc'),
    },
    {
      icon: <Target size={28} />,
      title: t('useCasesPage.grid.leadGen.title'),
      desc: t('useCasesPage.grid.leadGen.desc'),
    },
    {
      icon: <Package size={28} />,
      title: t('useCasesPage.grid.orderTracking.title'),
      desc: t('useCasesPage.grid.orderTracking.desc'),
    },
    {
      icon: <HelpCircle size={28} />,
      title: t('useCasesPage.grid.faqs.title'),
      desc: t('useCasesPage.grid.faqs.desc'),
    },
    {
      icon: <Calendar size={28} />,
      title: t('useCasesPage.grid.appointments.title'),
      desc: t('useCasesPage.grid.appointments.desc'),
    },
    {
      icon: <Rocket size={28} />,
      title: t('useCasesPage.grid.onboarding.title'),
      desc: t('useCasesPage.grid.onboarding.desc'),
    },
    {
      icon: <Globe size={28} />,
      title: t('useCasesPage.grid.multilingual.title'),
      desc: t('useCasesPage.grid.multilingual.desc'),
    },
    {
      icon: <ShoppingCart size={28} />,
      title: t('useCasesPage.grid.ecommerce.title'),
      desc: t('useCasesPage.grid.ecommerce.desc'),
    },
    {
      icon: <Users size={28} />,
      title: t('useCasesPage.grid.hr.title'),
      desc: t('useCasesPage.grid.hr.desc'),
    },
    {
      icon: <Terminal size={28} />,
      title: t('useCasesPage.grid.it.title'),
      desc: t('useCasesPage.grid.it.desc'),
    },
    {
      icon: <Megaphone size={28} />,
      title: t('useCasesPage.grid.feedback.title'),
      desc: t('useCasesPage.grid.feedback.desc'),
    },
    {
      icon: <Clock size={28} />,
      title: t('useCasesPage.grid.events.title'),
      desc: t('useCasesPage.grid.events.desc'),
    },
    {
      icon: <Home size={28} />,
      title: t('useCasesPage.grid.realestate.title'),
      desc: t('useCasesPage.grid.realestate.desc'),
    },
    {
      icon: <Shield size={28} />,
      title: t('useCasesPage.grid.insurance.title'),
      desc: t('useCasesPage.grid.insurance.desc'),
    },
    {
      icon: <Building size={28} />,
      title: t('useCasesPage.grid.condos.title'),
      desc: t('useCasesPage.grid.condos.desc'),
    }
  ];

  return (
    <div className={styles.useCasesContainer}>
      <header className={styles.header}>
        <span className={styles.badge}>{t('useCasesPage.badge')}</span>
        <h1 className={styles.title}>
          {t('useCasesPage.title').split('{kraken}')[0]}
          <span className={styles.textGradient}>{t('useCasesPage.kraken')}</span>
          {t('useCasesPage.title').split('{kraken}')[1]}
        </h1>
        <p className={styles.subtitle}>
          {t('useCasesPage.subtitle')}
        </p>
      </header>

      <div className={styles.grid}>
        {useCases.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              {item.icon}
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
            <div className={styles.cardFooter}>
              {t('useCasesPage.footer.learnMore')} <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>{t('useCasesPage.cta.title')}</h2>
        <p className={styles.ctaSubtitle}>
          {t('useCasesPage.cta.subtitle')}
        </p>
        <div className={styles.ctaButtons}>
          <button 
            style={{ 
              padding: '1.25rem 3rem', 
              fontSize: '1.125rem', 
              borderRadius: '16px', 
              background: '#fff', 
              color: '#000', 
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => onLoginClick('register')}
          >
            {t('useCasesPage.cta.start')}
          </button>
          <button 
            style={{ 
              padding: '1.25rem 3rem', 
              fontSize: '1.125rem', 
              borderRadius: '16px', 
              background: 'transparent', 
              color: '#fff', 
              fontWeight: '700',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer'
            }}
            onClick={() => window.location.href = 'https://wa.me/your_number_here'}
          >
            {t('useCasesPage.cta.sales')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default UseCasesView;
