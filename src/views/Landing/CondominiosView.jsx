import React, { useEffect, useRef, useState } from 'react';
import {
  Building,
  PhoneOff,
  Clock,
  TrendingDown,
  Zap,
  MessageSquare,
  Calendar,
  Target,
  BarChart2,
  CheckCircle2,
  ArrowRight,
  Star,
  AlertTriangle,
  Users,
  Shield,
  DollarSign,
  Timer,
  Bell,
} from 'lucide-react';
import styles from './CondominiosView.module.css';
import { useLanguage } from '../../context/LanguageContext';

/* ────────────────────────────────────────
   COMPONENT
──────────────────────────────────────── */
const CondominiosView = ({ onLoginClick }) => {
  const { t, getTranslationObject } = useLanguage();
  const revealRefs = useRef([]);
  const [spotsLeft] = useState(6); 

  const condosData = getTranslationObject('condos') || {};

  useEffect(() => {
    window.scrollTo({ top: 0 });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add(styles.visible);
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  /* ────────────────────────────────────────
     LOCALIZED DATA
  ──────────────────────────────────────── */
  const pains = (condosData.pains?.items || []).map((item, index) => ({
    ...item,
    icon: [
      <PhoneOff size={28} />,
      <Clock size={28} />,
      <TrendingDown size={28} />,
      <Calendar size={28} />
    ][index]
  }));

  const solutions = (condosData.solution?.items || []).map((item, index) => ({
    ...item,
    icon: [
      <Zap size={26} />,
      <Calendar size={26} />,
      <Bell size={26} />,
      <MessageSquare size={26} />,
      <BarChart2 size={26} />,
      <Users size={26} />
    ][index]
  }));

  const features = condosData.features?.items || [];

  const testimonials = (condosData.testimonials?.items || []).map((item, index) => ({
    ...item,
    stars: 5,
    avatar: item.avatar || (item.name ? item.name.split(' ').map(n => n[0]).join('') : '')
  }));

  const stats = condosData.stats || [];

  return (
    <div className={styles.page}>

      {/* ══════════════════════════════════
          URGENCY BANNER
      ══════════════════════════════════ */}
      <div className={styles.urgencyBanner}>
        <AlertTriangle size={16} />
        <span>
          {t('condos.urgency').replace('{spots}', spotsLeft)}&nbsp;
          <button onClick={() => onLoginClick && onLoginClick('register')} className={styles.urgencyLink}>
            {t('condos.urgencyLink')}
          </button>
        </span>
      </div>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroInner}>
            <div className={styles.heroTag}>
              <Building size={14} />
              {t('condos.tag')}
            </div>

            <h1 className={styles.heroTitle}>
              {t('condos.heroTitle')}<br />
              <span className={styles.heroAccent}>{t('condos.heroAccent')}</span>
            </h1>

            <p className={styles.heroSubtitle}>
              {t('condos.heroSubtitle')}
            </p>

            <div className={styles.heroActions}>
              <button
                className={styles.btnPrimary}
                onClick={() => onLoginClick && onLoginClick('register')}
              >
                {t('condos.heroCtaPrimary')}
                <ArrowRight size={18} />
              </button>
              <button
                className={styles.btnOutline}
                onClick={() => onLoginClick && onLoginClick('demo')}
              >
                {t('condos.heroCtaSecondary')}
              </button>
            </div>

            <div className={styles.heroSocial}>
              <div className={styles.avatarStack}>
                {['AG', 'LF', 'RV', 'JP'].map((a, i) => (
                  <div key={i} className={styles.avatar}>{a}</div>
                ))}
              </div>
              <span>{t('condos.heroSocial')}</span>
            </div>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.heroCardHeader}>
              <span className={styles.dot} />
              <span className={styles.dot} style={{ background: '#f59e0b' }} />
              <span className={styles.dot} style={{ background: '#10b981' }} />
            </div>
            <div className={styles.chatBubble + ' ' + styles.bubbleBot}>
              {t('condos.chatBot1')}
            </div>
            <div className={styles.chatBubble + ' ' + styles.bubbleUser}>
              {t('condos.chatUser1')}
            </div>
            <div className={styles.chatBubble + ' ' + styles.bubbleBot}>
              {t('condos.chatBot2')}
            </div>
            <div className={styles.chatTyping}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          STATS BAR
      ══════════════════════════════════ */}
      <section className={styles.statsBar}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statItem}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════════
          PAIN SECTION
      ══════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead} ref={addRef}>
            <div className={styles.sectionTag}>
              <AlertTriangle size={13} />
              {t('condos.pains.tag')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('condos.pains.title')}
            </h2>
            <p className={styles.sectionDesc}>
              {t('condos.pains.desc')}
            </p>
          </div>

          <div className={styles.painGrid}>
            {pains.map((p, i) => (
              <div key={i} className={styles.painCard} ref={addRef} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={styles.painIcon}>{p.icon}</div>
                <h3 className={styles.painTitle}>{p.title}</h3>
                <p className={styles.painDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          AGITATION
      ══════════════════════════════════ */}
      <section className={styles.agitation}>
        <div className={styles.container}>
          <div className={styles.agitationInner} ref={addRef}>
            <TrendingDown size={48} className={styles.agitationIcon} />
            <h2 className={styles.agitationTitle}>
              {t('condos.agitation.title')}<br />
              <span>{t('condos.agitation.highlight')}</span>
            </h2>
            <p className={styles.agitationDesc}>
              {t('condos.agitation.desc')}
            </p>
            <button
              className={styles.btnPrimaryLight}
              onClick={() => onLoginClick && onLoginClick('register')}
            >
              {t('condos.agitation.cta')}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SOLUTION SECTION
      ══════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead} ref={addRef}>
            <div className={styles.sectionTag}>
              <Zap size={13} />
              {t('condos.solution.tag')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('condos.solution.title')}
            </h2>
            <p className={styles.sectionDesc}>
              {t('condos.solution.desc')}
            </p>
          </div>

          <div className={styles.solutionGrid}>
            {solutions.map((s, i) => (
              <div key={i} className={styles.solutionCard} ref={addRef} style={{ transitionDelay: `${i * 70}ms` }}>
                <div className={styles.solutionCardTop}>
                  <div className={styles.solutionIcon}>{s.icon}</div>
                  <div className={styles.solutionStat}>
                    <span className={styles.solutionStatValue}>{s.stat}</span>
                    <span className={styles.solutionStatLabel}>{s.statLabel}</span>
                  </div>
                </div>
                <h3 className={styles.solutionTitle}>{s.title}</h3>
                <p className={styles.solutionDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FEATURES CHECKLIST
      ══════════════════════════════════ */}
      <section className={styles.featuresSection} ref={addRef}>
        <div className={styles.container}>
          <div className={styles.featuresInner}>
            <div className={styles.featuresLeft}>
              <div className={styles.sectionTag} style={{ marginBottom: '1.5rem' }}>
                <Shield size={13} />
                {t('condos.features.tag')}
              </div>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'left', maxWidth: '480px' }}>
                {t('condos.features.title')}
              </h2>
              <p className={styles.sectionDesc} style={{ textAlign: 'left', maxWidth: '440px' }}>
                {t('condos.features.desc')}
              </p>
              <button
                className={styles.btnPrimary}
                style={{ marginTop: '2rem' }}
                onClick={() => onLoginClick && onLoginClick('register')}
              >
                {t('condos.features.cta')}
                <ArrowRight size={18} />
              </button>
            </div>

            <ul className={styles.featuresList}>
              {features.map((f, i) => (
                <li key={i} className={styles.featureItem} ref={addRef} style={{ transitionDelay: `${i * 50}ms` }}>
                  <CheckCircle2 size={20} className={styles.featureCheck} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════ */}
      <section className={styles.section} style={{ background: '#fff' }}>
        <div className={styles.container}>
          <div className={styles.sectionHead} ref={addRef}>
            <div className={styles.sectionTag}>
              <Star size={13} />
              {t('condos.testimonials.tag')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('condos.testimonials.title')}
            </h2>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((tItem, i) => (
              <div key={i} className={styles.testimonialCard} ref={addRef} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className={styles.stars}>
                  {Array.from({ length: tItem.stars }).map((_, j) => (
                    <Star key={j} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <blockquote className={styles.quote}>"{tItem.quote}"</blockquote>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{tItem.avatar}</div>
                  <div>
                    <div className={styles.testimonialName}>{tItem.name}</div>
                    <div className={styles.testimonialRole}>{tItem.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          DECISION SECTION
      ══════════════════════════════════ */}
      <section className={styles.decisionSection}>
        <div className={styles.container}>
          <div className={styles.decisionInner} ref={addRef}>
            <div className={styles.sectionTag}>
              <Target size={13} />
              {t('condos.decision.tag')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('condos.decision.title')}
            </h2>
            <p className={styles.sectionDesc}>
              {t('condos.decision.desc')}
            </p>

            <div className={styles.decisionGrid}>
              <div className={styles.decisionCard + ' ' + styles.cardTraditional}>
                <div className={styles.cardHeader}>
                  <TrendingDown size={24} />
                  <h3>{t('condos.decision.traditional.title')}</h3>
                </div>
                <ul className={styles.cardList}>
                  {(t('condos.decision.traditional.items') || []).map((item, idx) => (
                    <li key={idx}>
                      <AlertTriangle size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.decisionCard + ' ' + styles.cardKraken}>
                <div className={styles.cardHeader}>
                  <Zap size={24} />
                  <h3>{t('condos.decision.kraken.title')}</h3>
                </div>
                <ul className={styles.cardList}>
                  {(t('condos.decision.kraken.items') || []).map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ROI CALCULATOR BAND
      ══════════════════════════════════ */}
      <section className={styles.roiBand}>
        <div className={styles.container}>
          <div className={styles.roiInner} ref={addRef}>
            <div className={styles.roiLeft}>
              <DollarSign size={40} className={styles.roiIcon} />
              <h2 className={styles.roiTitle}>{t('condos.roi.title')}</h2>
              <p className={styles.roiDesc}>
                {t('condos.roi.desc')}
              </p>
              <div className={styles.roiBadges}>
                {(t('condos.roi.badges') || []).map((badge, idx) => (
                  <div key={idx} className={styles.roiBadge}>
                    <CheckCircle2 size={14} />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.roiCalc}>
              {(t('condos.roi.rows') || []).map((row, idx) => (
                <React.Fragment key={idx}>
                  {row.total && <div className={styles.roiDivider} />}
                  <div className={`${styles.roiRow} ${row.total ? styles.roiTotal : ''}`}>
                    <span>{row.label}</span>
                    <strong className={row.highlight ? styles.roiCost : ''}>{row.value}</strong>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FINAL CTA
      ══════════════════════════════════ */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaInner} ref={addRef}>
            <div className={styles.urgencyBadge}>
              <Timer size={16} />
              {t('condos.final.badge')}
            </div>

            <h2 className={styles.finalCtaTitle}>
              {t('condos.final.title')}<br />
              <span>{t('condos.final.accent')}</span>
            </h2>

            <p className={styles.finalCtaDesc}>
              {t('condos.final.desc')}
            </p>

            <div className={styles.finalCtaActions}>
              <button
                className={styles.btnPrimaryLarge}
                onClick={() => onLoginClick && onLoginClick('register')}
              >
                {t('condos.final.ctaPrimary')}
                <ArrowRight size={20} />
              </button>
              <button
                className={styles.btnOutlineLarge}
                onClick={() => onLoginClick && onLoginClick('demo')}
              >
                {t('condos.final.ctaSecondary')}
              </button>
            </div>

            <p className={styles.finalCtaNote}>
              {t('condos.final.note')}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CondominiosView;

