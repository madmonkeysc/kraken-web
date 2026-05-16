import React, { useEffect, useRef, useState } from 'react';
import {
  Building2,
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
  Home,
  DollarSign,
  Timer,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './AgentesInmobiliariosView.module.css';

/* ────────────────────────────────────────
   COMPONENT
──────────────────────────────────────── */
const AgentesInmobiliariosView = ({ onLoginClick }) => {
  const { t } = useLanguage();
  const revealRefs = useRef([]);
  const [spotsLeft] = useState(7); // urgency counter

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
  const painIcons = [<PhoneOff size={28} />, <Clock size={28} />, <TrendingDown size={28} />, <Calendar size={28} />];
  const solutionIcons = [<Zap size={26} />, <Target size={26} />, <Calendar size={26} />, <MessageSquare size={26} />, <BarChart2 size={26} />, <Users size={26} />];

  return (
    <div className={styles.page}>

      {/* ══════════════════════════════════
          URGENCY BANNER
      ══════════════════════════════════ */}
      <div className={styles.urgencyBanner}>
        <AlertTriangle size={16} />
        <span>
          {t('realEstate.urgency').replace('{spots}', spotsLeft)}&nbsp;
          <button onClick={() => onLoginClick && onLoginClick('register')} className={styles.urgencyLink}>
            {t('realEstate.urgencyLink')}
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
              <Building2 size={14} />
              {t('realEstate.tag')}
            </div>

            <h1 className={styles.heroTitle}>
              {t('realEstate.heroTitle')}<br />
              <span className={styles.heroAccent}>{t('realEstate.heroAccent')}</span>
            </h1>

            <p className={styles.heroSubtitle}>
              {t('realEstate.heroSubtitle')}
            </p>

            <div className={styles.heroActions}>
              <button
                className={styles.btnPrimary}
                onClick={() => onLoginClick && onLoginClick('register')}
              >
                {t('realEstate.heroCtaPrimary')}
                <ArrowRight size={18} />
              </button>
              <button
                className={styles.btnOutline}
                onClick={() => onLoginClick && onLoginClick('demo')}
              >
                {t('realEstate.heroCtaSecondary')}
              </button>
            </div>

            <div className={styles.heroSocial}>
              <div className={styles.avatarStack}>
                {['CM', 'SR', 'RT', 'AL'].map((a, i) => (
                  <div key={i} className={styles.avatar}>{a}</div>
                ))}
              </div>
              <span>{t('realEstate.heroSocial')}</span>
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
              {t('realEstate.chatBot1')}
            </div>
            <div className={styles.chatBubble + ' ' + styles.bubbleUser}>
              {t('realEstate.chatUser1')}
            </div>
            <div className={styles.chatBubble + ' ' + styles.bubbleBot}>
              {t('realEstate.chatBot2')}
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
        {(t('realEstate.stats') || []).map((s, i) => (
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
              {t('realEstate.pains.tag')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('realEstate.pains.title')}
            </h2>
            <p className={styles.sectionDesc}>
              {t('realEstate.pains.desc')}
            </p>
          </div>

          <div className={styles.painGrid}>
            {(t('realEstate.pains.items') || []).map((p, i) => (
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
              {t('realEstate.agitation.title')}
            </h2>
            <p className={styles.agitationDesc}>
              {t('realEstate.agitation.desc')}
            </p>
            <button
              className={styles.btnPrimaryLight}
              onClick={() => onLoginClick && onLoginClick('register')}
            >
              {t('realEstate.agitation.cta')}
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
              {t('realEstate.solution.tag')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('realEstate.solution.title')}
            </h2>
            <p className={styles.sectionDesc}>
              {t('realEstate.solution.desc')}
            </p>
          </div>

          <div className={styles.solutionGrid}>
            {(t('realEstate.solution.items') || []).map((s, i) => (
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
                <Home size={13} />
                {t('realEstate.features.tag')}
              </div>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'left', maxWidth: '480px' }}>
                {t('realEstate.features.title')}
              </h2>
              <p className={styles.sectionDesc} style={{ textAlign: 'left', maxWidth: '440px' }}>
                {t('realEstate.features.desc')}
              </p>
              <button
                className={styles.btnPrimary}
                style={{ marginTop: '2rem' }}
                onClick={() => onLoginClick && onLoginClick('register')}
              >
                {t('realEstate.features.cta')}
                <ArrowRight size={18} />
              </button>
            </div>

            <ul className={styles.featuresList}>
              {(t('realEstate.features.items') || []).map((f, i) => (
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
              {t('realEstate.testimonials.tag')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('realEstate.testimonials.title')}
            </h2>
          </div>

          <div className={styles.testimonialsGrid}>
            {(t('realEstate.testimonials.items') || []).map((testimonial, i) => (
              <div key={i} className={styles.testimonialCard} ref={addRef} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <blockquote className={styles.quote}>"{testimonial.quote}"</blockquote>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{testimonial.name.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <div className={styles.testimonialName}>{testimonial.name}</div>
                    <div className={styles.testimonialRole}>{testimonial.role}</div>
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
              {t('realEstate.decision.tag')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('realEstate.decision.title')}
            </h2>
            <p className={styles.sectionDesc}>
              {t('realEstate.decision.desc')}
            </p>

            <div className={styles.decisionGrid}>
              <div className={styles.decisionCard + ' ' + styles.cardTraditional}>
                <div className={styles.cardHeader}>
                  <TrendingDown size={24} />
                  <h3>{t('realEstate.decision.traditional.title')}</h3>
                </div>
                <ul className={styles.cardList}>
                  {(t('realEstate.decision.traditional.items') || []).map((item, i) => (
                    <li key={i}>
                      <AlertTriangle size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.cardResult}>
                  <strong>{t('common.result')}:</strong> {t('realEstate.decision.traditional.result')}
                </div>
              </div>

              <div className={styles.decisionCard + ' ' + styles.cardKraken}>
                <div className={styles.cardHeader}>
                  <Zap size={24} />
                  <h3>{t('realEstate.decision.kraken.title')}</h3>
                </div>
                <ul className={styles.cardList}>
                  {(t('realEstate.decision.kraken.items') || []).map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.cardResult + ' ' + styles.resultSuccess}>
                  <strong>{t('common.result')}:</strong> {t('realEstate.decision.kraken.result')}
                </div>
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
              <h2 className={styles.roiTitle}>{t('realEstate.roi.title')}</h2>
              <p className={styles.roiDesc}>
                {t('realEstate.roi.desc')}
              </p>
              <div className={styles.roiBadges}>
                {(t('realEstate.roi.badges') || []).map((badge, i) => (
                  <div key={i} className={styles.roiBadge}>
                    <CheckCircle2 size={14} />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.roiCalc}>
              <div className={styles.roiRow}>
                <span>{t('realEstate.roi.calc.commission')}</span>
                <strong>$8,000 USD</strong>
              </div>
              <div className={styles.roiRow}>
                <span>{t('realEstate.roi.calc.extra')}</span>
                <strong>+2 a 4</strong>
              </div>
              <div className={styles.roiRow}>
                <span>{t('realEstate.roi.calc.investment')}</span>
                <strong className={styles.roiCost}>{t('realEstate.roi.calc.from')} $97 USD</strong>
              </div>
              <div className={styles.roiDivider} />
              <div className={styles.roiRow + ' ' + styles.roiTotal}>
                <span>{t('realEstate.roi.calc.roi')}</span>
                <strong>+1,500%</strong>
              </div>
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
              {t('realEstate.final.badge').replace('{spots}', spotsLeft)}
            </div>

            <h2 className={styles.finalCtaTitle}>
              {t('realEstate.final.title')}
            </h2>

            <p className={styles.finalCtaDesc}>
              {t('realEstate.final.desc')}
            </p>

            <div className={styles.finalCtaActions}>
              <button
                className={styles.btnPrimaryLarge}
                onClick={() => onLoginClick && onLoginClick('register')}
              >
                {t('realEstate.final.ctaPrimary')}
                <ArrowRight size={20} />
              </button>
              <button
                className={styles.btnOutlineLarge}
                onClick={() => onLoginClick && onLoginClick('demo')}
              >
                {t('realEstate.final.ctaSecondary')}
              </button>
            </div>

            <p className={styles.finalCtaNote}>
              {(t('realEstate.final.footer') || []).join('  ·  ')}
            </p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AgentesInmobiliariosView;
