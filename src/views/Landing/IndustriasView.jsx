import React, { useEffect, useRef } from 'react';
import {
  Building2,
  ShieldCheck,
  Key,
  ShoppingBag,
  Cpu,
  Landmark,
  Scale,
  Users,
  Car,
  HeartPulse,
  GraduationCap,
  Plane,
  Activity,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './IndustriasView.module.css';

const IndustriasView = ({ onLoginClick, onNavigate }) => {
  const { t } = useLanguage();
  const cardsRef = useRef([]);

  const industries = [
    {
      icon: <Building2 size={32} />,
      title: t('industriesPage.list.realEstate.title'),
      desc: t('industriesPage.list.realEstate.desc'),
      tag: t('industriesPage.list.realEstate.tag'),
      view: 'agentes-inmobiliarios'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: t('industriesPage.list.insurance.title'),
      desc: t('industriesPage.list.insurance.desc'),
      tag: t('industriesPage.list.insurance.tag'),
      view: 'agentes-seguros'
    },
    {
      icon: <Key size={32} />,
      title: t('industriesPage.list.condos.title'),
      desc: t('industriesPage.list.condos.desc'),
      tag: t('industriesPage.list.condos.tag'),
      view: 'condominios'
    },
    {
      icon: <ShoppingBag size={32} />,
      title: t('industriesPage.list.ecommerce.title'),
      desc: t('industriesPage.list.ecommerce.desc'),
      tag: t('industriesPage.list.ecommerce.tag'),
    },
    {
      icon: <Cpu size={32} />,
      title: t('industriesPage.list.saas.title'),
      desc: t('industriesPage.list.saas.desc'),
      tag: t('industriesPage.list.saas.tag'),
    },
    {
      icon: <Plane size={32} />,
      title: t('industriesPage.list.travel.title'),
      desc: t('industriesPage.list.travel.desc'),
      tag: t('industriesPage.list.travel.tag'),
    },
    {
      icon: <GraduationCap size={32} />,
      title: t('industriesPage.list.education.title'),
      desc: t('industriesPage.list.education.desc'),
      tag: t('industriesPage.list.education.tag'),
    },
    {
      icon: <HeartPulse size={32} />,
      title: t('industriesPage.list.health.title'),
      desc: t('industriesPage.list.health.desc'),
      tag: t('industriesPage.list.health.tag'),
    },
    {
      icon: <Landmark size={32} />,
      title: t('industriesPage.list.fintech.title'),
      desc: t('industriesPage.list.fintech.desc'),
      tag: t('industriesPage.list.fintech.tag'),
    },
    {
      icon: <Scale size={32} />,
      title: t('industriesPage.list.legal.title'),
      desc: t('industriesPage.list.legal.desc'),
      tag: t('industriesPage.list.legal.tag'),
    },
    {
      icon: <Users size={32} />,
      title: t('industriesPage.list.recruitment.title'),
      desc: t('industriesPage.list.recruitment.desc'),
      tag: t('industriesPage.list.recruitment.tag'),
    },
    {
      icon: <Car size={32} />,
      title: t('industriesPage.list.automotive.title'),
      desc: t('industriesPage.list.automotive.desc'),
      tag: t('industriesPage.list.automotive.tag'),
    },
    {
      icon: <ShieldCheck size={32} />,
      title: t('industriesPage.list.security.title'),
      desc: t('industriesPage.list.security.desc'),
      tag: t('industriesPage.list.security.tag'),
    },
    {
      icon: <Activity size={32} />,
      title: t('industriesPage.list.fitness.title'),
      desc: t('industriesPage.list.fitness.desc'),
      tag: t('industriesPage.list.fitness.tag'),
    },
  ];

  const stats = [
    { value: '80%', label: t('industriesPage.stats.automated') },
    { value: '24/7', label: t('industriesPage.stats.available') },
    { value: '< 2s', label: t('industriesPage.stats.response') },
    { value: '95+', label: t('industriesPage.stats.languages') },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.cardVisible);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTag}>
            <span className={styles.heroDot} />
            {t('industriesPage.hero.tag')}
          </div>
          <h1 className={styles.heroTitle}>
            {t('industriesPage.hero.title')}<br />
            <span className={styles.heroAccent}>{t('industriesPage.hero.accent')}</span>
          </h1>
          <p className={styles.heroSubtitle}>
            {t('industriesPage.hero.subtitle')}
          </p>
          <div className={styles.heroActions}>
            <button
              className={styles.btnPrimary}
              onClick={() => onLoginClick && onLoginClick('register')}
            >
              {t('industriesPage.hero.buttons.trial')}
            </button>
            <button
              className={styles.btnOutline}
              onClick={() => onLoginClick && onLoginClick('demo')}
            >
              {t('industriesPage.hero.buttons.demo')}
            </button>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className={styles.statsBar}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statItem}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </section>

      {/* ─── INTRO BLOCK ─── */}
      <section className={styles.intro}>
        <div className={styles.introTag}>
          <span className={styles.heroDot} />
          {t('industriesPage.intro.tag')}
        </div>
        <h2 className={styles.introTitle}>
          {t('industriesPage.intro.title')}
        </h2>
        <p className={styles.introDesc}>
          {t('industriesPage.intro.description')}
        </p>
      </section>

      {/* ─── CARDS GRID ─── */}
      <section className={styles.grid}>
        {industries.map((ind, i) => (
          <div
            key={i}
            className={styles.card}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div className={styles.cardIcon}>{ind.icon}</div>
            <h3 className={styles.cardTitle}>{ind.title}</h3>
            <p className={styles.cardDesc}>{ind.desc}</p>
            <button
              className={styles.cardCta}
              onClick={() => {
                if (ind.view && onNavigate) {
                  onNavigate({ view: ind.view });
                } else if (onLoginClick) {
                  onLoginClick('register');
                }
              }}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            {t('industriesPage.cta.title')}
          </h2>
          <p className={styles.ctaDesc}>
            {t('industriesPage.cta.description')}
          </p>
          <div className={styles.ctaActions}>
            <button
              className={styles.btnPrimaryDark}
              onClick={() => onLoginClick && onLoginClick('register')}
            >
              {t('industriesPage.cta.buttons.start')}
            </button>
            <button
              className={styles.btnOutlineDark}
              onClick={() =>
                (window.location.href = 'https://wa.me/your_number_here')
              }
            >
              {t('industriesPage.cta.buttons.expert')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriasView;

