import React, { useEffect, useRef, useState } from 'react';
import {
  Shield,
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
  Heart,
  Car,
  Umbrella,
  DollarSign,
  Timer,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './AgentesSegurosView.module.css';

/* ────────────────────────────────────────
   COMPONENT
──────────────────────────────────────── */
const AgentesSegurosView = ({ onLoginClick }) => {
  const { t } = useLanguage();
  const revealRefs = useRef([]);
  const [spotsLeft] = useState(5); // urgency counter

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

  // Helper icons mapping for translated data
  const painIcons = [
    <PhoneOff size={28} />,
    <Clock size={28} />,
    <TrendingDown size={28} />,
    <Umbrella size={28} />,
  ];

  const solutionIcons = [
    <Zap size={26} />,
    <Target size={26} />,
    <Heart size={26} />,
    <MessageSquare size={26} />,
    <BarChart2 size={26} />,
    <Shield size={26} />,
  ];

  return (
    <div className={styles.page}>

      {/* ══════════════════════════════════
          URGENCY BANNER
      ══════════════════════════════════ */}
      <div className={styles.urgencyBanner}>
        <AlertTriangle size={16} />
        <span>
          {t('insurance.urgency.badge').replace('{{spots}}', spotsLeft)}&nbsp;
          <button onClick={() => onLoginClick && onLoginClick('register')} className={styles.urgencyLink}>
            {t('insurance.urgency.link')}
          </button>
        </span>
      </div>

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Left: copy */}
          <div className={styles.heroInner}>
            <div className={styles.heroTag}>
              <Shield size={14} />
              {t('insurance.hero.tag')}
            </div>

            <h1 className={styles.heroTitle}>
              {t('insurance.hero.title')}<br />
              <span className={styles.heroAccent}>{t('insurance.hero.accent')}</span>
            </h1>

            <p className={styles.heroSubtitle}>
              {t('insurance.hero.subtitle')}
            </p>

            <div className={styles.heroActions}>
              <button
                className={styles.btnPrimary}
                onClick={() => onLoginClick && onLoginClick('register')}
              >
                {t('insurance.hero.ctaPrimary')}
                <ArrowRight size={18} />
              </button>
              <button
                className={styles.btnOutline}
                onClick={() => onLoginClick && onLoginClick('demo')}
              >
                {t('insurance.hero.ctaSecondary')}
              </button>
            </div>

            <div className={styles.heroSocial}>
              <div className={styles.avatarStack}>
                {['JV', 'MR', 'RS', 'AL'].map((a, i) => (
                  <div key={i} className={styles.avatar}>{a}</div>
                ))}
              </div>
              <span>{t('insurance.hero.social')}</span>
            </div>
          </div>

          {/* Right: floating chat card */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardHeader}>
              <span className={styles.dot} />
              <span className={styles.dot} style={{ background: '#f59e0b' }} />
              <span className={styles.dot} style={{ background: '#10b981' }} />
            </div>
            <div className={styles.chatBubble + ' ' + styles.bubbleBot}>
              {t('insurance.hero.chat.bot1')}
            </div>
            <div className={styles.chatBubble + ' ' + styles.bubbleUser}>
              {t('insurance.hero.chat.user1')}
            </div>
            <div className={styles.chatBubble + ' ' + styles.bubbleBot}>
              {t('insurance.hero.chat.bot2')}
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
        {(t('insurance.stats') || []).map((s, i) => (
          <div key={i} className={styles.statItem}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════════
          PAIN SECTION — "¿Te identificas?"
      ══════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead} ref={addRef}>
            <div className={styles.sectionTag}>
              <AlertTriangle size={13} />
              {t('insurance.pains.tag')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('insurance.pains.title')}
            </h2>
            <p className={styles.sectionDesc}>
              {t('insurance.pains.desc')}
            </p>
          </div>

          <div className={styles.painGrid}>
            {(t('insurance.pains.items') || []).map((p, i) => (
              <div key={i} className={styles.painCard} ref={addRef} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={styles.painIcon}>{painIcons[i]}</div>
                <h3 className={styles.painTitle}>{p.title}</h3>
                <p className={styles.painDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          AGITATION — Dark band
      ══════════════════════════════════ */}
      <section className={styles.agitation}>
        <div className={styles.container}>
          <div className={styles.agitationInner} ref={addRef}>
            <TrendingDown size={48} className={styles.agitationIcon} />
            <h2 className={styles.agitationTitle}>
              {t('insurance.agitation.title')}<br />
              <span>{t('insurance.agitation.subtitle')}</span>
            </h2>
            <p className={styles.agitationDesc}>
              {t('insurance.agitation.desc')}
            </p>
            <button
              className={styles.btnPrimaryLight}
              onClick={() => onLoginClick && onLoginClick('register')}
            >
              {t('insurance.agitation.cta')}
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
              {t('insurance.solutions.tag')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('insurance.solutions.title')}
            </h2>
            <p className={styles.sectionDesc}>
              {t('insurance.solutions.desc')}
            </p>
          </div>

          <div className={styles.solutionGrid}>
            {(t('insurance.solutions.items') || []).map((s, i) => (
              <div key={i} className={styles.solutionCard} ref={addRef} style={{ transitionDelay: `${i * 70}ms` }}>
                <div className={styles.solutionCardTop}>
                  <div className={styles.solutionIcon}>{solutionIcons[i]}</div>
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
                {t('insurance.features.tag')}
              </div>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'left', maxWidth: '480px' }}>
                {t('insurance.features.title')}
              </h2>
              <p className={styles.sectionDesc} style={{ textAlign: 'left', maxWidth: '440px' }}>
                {t('insurance.features.desc')}
              </p>
              <button
                className={styles.btnPrimary}
                style={{ marginTop: '2rem' }}
                onClick={() => onLoginClick && onLoginClick('register')}
              >
                {t('insurance.features.cta')}
                <ArrowRight size={18} />
              </button>
            </div>

            <ul className={styles.featuresList}>
              {(t('insurance.features.items') || []).map((f, i) => (
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
              {t('insurance.testimonials.tag')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('insurance.testimonials.title')}
            </h2>
          </div>

          <div className={styles.testimonialsGrid}>
            {(t('insurance.testimonials.items') || []).map((t, i) => (
              <div key={i} className={styles.testimonialCard} ref={addRef} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <blockquote className={styles.quote}>"{t.quote}"</blockquote>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{t.avatar}</div>
                  <div>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          DECISION SECTION — Traditional vs AI
      ══════════════════════════════════ */}
      <section className={styles.decisionSection}>
        <div className={styles.container}>
          <div className={styles.decisionInner} ref={addRef}>
            <div className={styles.sectionTag}>
              <Target size={13} />
              {t('insurance.decision.tag')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('insurance.decision.title')}
            </h2>
            <p className={styles.sectionDesc}>
              {t('insurance.decision.desc')}
            </p>

            <div className={styles.decisionGrid}>
              <div className={styles.decisionCard + ' ' + styles.cardTraditional}>
                <div className={styles.cardHeader}>
                  <TrendingDown size={24} />
                  <h3>{t('insurance.decision.traditional.title')}</h3>
                </div>
                <ul className={styles.cardList}>
                  {(t('insurance.decision.traditional.items') || []).map((item, i) => (
                    <li key={i}>
                      <AlertTriangle size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.cardResult}>
                  <div className={styles.resultLabel}>{t('insurance.decision.traditional.resultLabel')}</div>
                  <div className={styles.resultValue}>{t('insurance.decision.traditional.resultValue')}</div>
                </div>
              </div>

              <div className={styles.decisionCard + ' ' + styles.cardKraken}>
                <div className={styles.cardHeader}>
                  <Zap size={24} />
                  <h3>{t('insurance.decision.kraken.title')}</h3>
                </div>
                <ul className={styles.cardList}>
                  {(t('insurance.decision.kraken.items') || []).map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.cardResult + ' ' + styles.resultSuccess}>
                  <div className={styles.resultLabel}>{t('insurance.decision.kraken.resultLabel')}</div>
                  <div className={styles.resultValue}>{t('insurance.decision.kraken.resultValue')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          RESULTADOS REALES
      ══════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead} ref={addRef}>
            <div className={styles.sectionTag}>
              <BarChart2 size={13} />
              {t('insurance.metrics.tag')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('insurance.metrics.title')}
            </h2>
            <p className={styles.sectionDesc}>
              {t('insurance.metrics.desc')}
            </p>
          </div>

          <div className={styles.metricsGrid}>
            {(t('insurance.metrics.items') || []).map((item, i) => (
              <div key={i} className={styles.metricCard} ref={addRef}>
                <div className={styles.metricValue}>{item.value}</div>
                <div className={styles.metricLabel}>{item.label}</div>
                <p className={styles.metricInfo}>{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          REINFORCEMENT — The Choice
      ══════════════════════════════════ */}
      <section className={styles.choiceSection}>
        <div className={styles.container}>
          <div className={styles.choiceGrid}>
            <div className={styles.choiceContent} ref={addRef}>
              <h2 className={styles.choiceTitle}>
                {t('insurance.choice.title')}
              </h2>
              <p className={styles.choiceText}>
                {t('insurance.choice.text1')}
              </p>
              <p className={styles.choiceText}>
                <strong>{t('insurance.choice.text2').split('. ')[0]}.</strong> {t('insurance.choice.text2').split('. ')[1]}
              </p>
              <div className={styles.choiceActions}>
                <button 
                  className={styles.btnPrimaryLarge} 
                  onClick={() => onLoginClick && onLoginClick('register')}
                >
                  {t('insurance.choice.cta')}
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
            <div className={styles.choiceVisual} ref={addRef}>
              <div className={styles.visualCard}>
                <div className={styles.visualHeader}>{t('insurance.choice.visual.before')}</div>
                <div className={styles.visualBar + ' ' + styles.barNegative} style={{ width: '100%' }}>{t('insurance.choice.visual.beforeBar1')}</div>
                <div className={styles.visualBar + ' ' + styles.barNegative} style={{ width: '80%' }}>{t('insurance.choice.visual.beforeBar2')}</div>
              </div>
              <div className={styles.visualCard + ' ' + styles.visualPremium}>
                <div className={styles.visualHeader}>{t('insurance.choice.visual.after')}</div>
                <div className={styles.visualBar + ' ' + styles.barPositive} style={{ width: '100%' }}>{t('insurance.choice.visual.afterBar1')}</div>
                <div className={styles.visualBar + ' ' + styles.barPositive} style={{ width: '90%' }}>{t('insurance.choice.visual.afterBar2')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.roiBand}>
        <div className={styles.container}>
          <div className={styles.roiInner} ref={addRef}>
            <div className={styles.roiLeft}>
              <div className={styles.roiIconContainer}>
                <DollarSign size={40} className={styles.roiIcon} />
              </div>
              <div>
                <h2 className={styles.roiTitle}>{t('insurance.roi.title')}</h2>
                <p className={styles.roiDesc}>
                  {t('insurance.roi.desc')}
                </p>
                <div className={styles.roiBadges}>
                  {(t('insurance.roi.badges') || []).map((badge, i) => (
                    <div key={i} className={styles.roiBadge}>
                      <CheckCircle2 size={14} />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.roiCalc}>
              {(t('insurance.roi.rows') || []).map((row, i) => (
                <React.Fragment key={i}>
                  <div className={styles.roiRow + (row.total ? ' ' + styles.roiTotal : '')}>
                    <span>{row.label}</span>
                    <strong className={row.highlight ? styles.roiCost : ''}>{row.value}</strong>
                  </div>
                  {i === 2 && <div className={styles.roiDivider} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          URGENCY + FINAL CTA
      ══════════════════════════════════ */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaInner} ref={addRef}>
            <div className={styles.urgencyBadge}>
              <Timer size={16} />
              {t('insurance.final.badge')}
            </div>

            <h2 className={styles.finalCtaTitle}>
              {t('insurance.final.title')}<br />
              <span>{t('insurance.final.accent')}</span>
            </h2>

            <p className={styles.finalCtaDesc}>
              {t('insurance.final.desc')}
            </p>

            <div className={styles.finalCtaActions}>
              <button
                className={styles.btnPrimaryLarge}
                onClick={() => onLoginClick && onLoginClick('register')}
              >
                {t('insurance.final.ctaPrimary')}
                <ArrowRight size={20} />
              </button>
              <button
                className={styles.btnOutlineLarge}
                onClick={() => onLoginClick && onLoginClick('demo')}
              >
                {t('insurance.final.ctaSecondary')}
              </button>
            </div>

            <p className={styles.finalCtaNote}>
              {t('insurance.final.note')}
            </p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AgentesSegurosView;
