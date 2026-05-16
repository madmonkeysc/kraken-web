import React from 'react';
import { Zap, Info, Settings, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import styles from '../DocsView.module.css';
import DocPage from './DocPage';

const QuickStart = ({ activeTab, setActiveTab }) => {
  const { t } = useLanguage();

  switch (activeTab) {
    case 'intro':
      return (
        <DocPage 
          badge={t('docs.quickStart.intro.badge')} 
          title={t('docs.quickStart.intro.title')}
        >
          <section className={styles.section}>
            <h2>{t('docs.quickStart.intro.welcomeTitle')}</h2>
            <p className={styles.text}>{t('docs.quickStart.intro.welcomeText')}</p>
          </section>

          <section className={styles.section}>
            <h2>{t('docs.quickStart.intro.whatIsTitle')}</h2>
            <p className={styles.text}>{t('docs.quickStart.intro.whatIsText')}</p>
          </section>

          <section className={styles.section}>
            <h2>{t('docs.quickStart.intro.pillarsTitle')}</h2>
            <div className={styles.pillarGrid}>
              <div className={styles.pillarCard}>
                <h4>{t('docs.quickStart.intro.pillars.auto.title')}</h4>
                <p>{t('docs.quickStart.intro.pillars.auto.desc')}</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>{t('docs.quickStart.intro.pillars.conn.title')}</h4>
                <p>{t('docs.quickStart.intro.pillars.conn.desc')}</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>{t('docs.quickStart.intro.pillars.intel.title')}</h4>
                <p>{t('docs.quickStart.intro.pillars.intel.desc')}</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>{t('docs.quickStart.intro.pillars.action.title')}</h4>
                <p>{t('docs.quickStart.intro.pillars.action.desc')}</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>{t('docs.quickStart.intro.impactTitle')}</h2>
            <div className={styles.impactBanner}>
              <p>{t('docs.quickStart.intro.impactText')}</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>{t('docs.quickStart.intro.gettingStartedTitle')}</h2>
            <p className={styles.text}>{t('docs.quickStart.intro.gettingStartedText')}</p>
            <ol className={styles.orderedList}>
              <li>
                <div className={styles.stepContent}>
                  <h4>{t('docs.quickStart.intro.steps.step1.title')}</h4>
                  <p>{t('docs.quickStart.intro.steps.step1.desc')}</p>
                </div>
              </li>
              <li>
                <div className={styles.stepContent}>
                  <h4>{t('docs.quickStart.intro.steps.step2.title')}</h4>
                  <p>{t('docs.quickStart.intro.steps.step2.desc')}</p>
                </div>
              </li>
              <li>
                <div className={styles.stepContent}>
                  <h4>{t('docs.quickStart.intro.steps.step3.title')}</h4>
                  <p>{t('docs.quickStart.intro.steps.step3.desc')}</p>
                </div>
              </li>
            </ol>
            <div className={styles.callout}>
              <div className={styles.calloutTitle}><Info size={20} /> {t('docs.quickStart.intro.helpTitle')}</div>
              <p className={styles.calloutText}>{t('docs.quickStart.intro.helpText')}</p>
            </div>
          </section>
        </DocPage>
      );

    case 'build':
      return (
        <DocPage 
          badge={t('docs.quickStart.build.badge')} 
          title={t('docs.quickStart.build.title')}
        >
          <p className={styles.lead}>{t('docs.quickStart.build.lead')}</p>

          <section className={styles.section}>
            <h2>{t('docs.quickStart.build.reqsTitle')}</h2>
            <ul className={styles.list}>
              <li>{t('docs.quickStart.build.reqs.account')} <a href="/signup" className={styles.link}>{t('docs.quickStart.build.reqs.signup')}</a></li>
              <li>{t('docs.quickStart.build.reqs.data')}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{t('docs.quickStart.build.step1Title')}</h2>
            <ol className={styles.orderedList}>
              <li>
                <div className={styles.stepContent}>
                  <p className={styles.text}>{t('docs.quickStart.build.step1.goDashboard')}</p>
                </div>
              </li>
              <li>
                <div className={styles.stepContent}>
                  <p className={styles.text}>{t('docs.quickStart.build.step1.clickNew')}</p>
                </div>
              </li>
              <li>
                <div className={styles.stepContent}>
                  <p className={styles.text}>{t('docs.quickStart.build.step1.nameLang')}</p>
                </div>
              </li>
              <li>
                <div className={styles.stepContent}>
                  <p className={styles.text}>{t('docs.quickStart.build.step1.tone')}</p>
                </div>
              </li>
            </ol>
            <div className={styles.callout}>
              <div className={styles.calloutTitle}><Info size={20} /> {t('docs.quickStart.build.tipTitle')}</div>
              <p className={styles.calloutText}>{t('docs.quickStart.build.tipText')}</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>{t('docs.quickStart.build.step2Title')}</h2>
            <p className={styles.text}>{t('docs.quickStart.build.step2.intro')}</p>
            <ol className={styles.orderedList}>
              <li>
                <div className={styles.stepContent}>
                  <p className={styles.text}>{t('docs.quickStart.build.step2.tab')}</p>
                </div>
              </li>
              <li>
                <div className={styles.stepContent}>
                  <p className={styles.text}>{t('docs.quickStart.build.step2.add')}</p>
                </div>
              </li>
              <li>
                <div className={styles.stepContent}>
                  <p className={styles.text}>{t('docs.quickStart.build.step2.selectType')}</p>
                  <ul className={styles.list} style={{ marginTop: '1rem' }}>
                    <li>{t('docs.quickStart.build.step2.types.file')}</li>
                    <li>{t('docs.quickStart.build.step2.types.web')}</li>
                    <li>{t('docs.quickStart.build.step2.types.drive')}</li>
                    <li>{t('docs.quickStart.build.step2.types.qa')}</li>
                  </ul>
                </div>
              </li>
              <li>
                <div className={styles.stepContent}>
                  <p className={styles.text}>{t('docs.quickStart.build.step2.wait')}</p>
                </div>
              </li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>{t('docs.quickStart.build.step3Title')}</h2>
            <p className={styles.text}>{t('docs.quickStart.build.step3.intro')}</p>
            <ol className={styles.orderedList}>
              <li>
                <div className={styles.stepContent}>
                  <p className={styles.text}>{t('docs.quickStart.build.step3.tab')}</p>
                </div>
              </li>
              <li>
                <div className={styles.stepContent}>
                  <p className={styles.text}>{t('docs.quickStart.build.step3.ask')}</p>
                </div>
              </li>
              <li>
                <div className={styles.stepContent}>
                  <p className={styles.text}>{t('docs.quickStart.build.step3.debug')}</p>
                </div>
              </li>
              <li>
                <div className={styles.stepContent}>
                  <p className={styles.text}>{t('docs.quickStart.build.step3.observe')}</p>
                </div>
              </li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>{t('docs.quickStart.build.nextStepsTitle')}</h2>
            <p className={styles.text}>{t('docs.quickStart.build.nextStepsIntro')}</p>
            <div className={styles.pillarGrid}>
              <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('deploy')}>
                <h4>{t('docs.quickStart.build.next.web.title')}</h4>
                <p>{t('docs.quickStart.build.next.web.desc')}</p>
              </div>
              <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('whatsapp')}>
                <h4>{t('docs.quickStart.build.next.wa.title')}</h4>
                <p>{t('docs.quickStart.build.next.wa.desc')}</p>
              </div>
              <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('playground')}>
                <h4>{t('docs.quickStart.build.next.actions.title')}</h4>
                <p>{t('docs.quickStart.build.next.actions.desc')}</p>
              </div>
            </div>
          </section>
        </DocPage>
      );

    case 'best-practices':
      return (
        <DocPage 
          badge={t('docs.quickStart.bestPractices.badge')} 
          title={t('docs.quickStart.bestPractices.title')}
        >
          <p className={styles.lead}>{t('docs.quickStart.bestPractices.lead')}</p>

          <section className={styles.section}>
            <h2>{t('docs.quickStart.bestPractices.dataTitle')}</h2>
            <p className={styles.text}>{t('docs.quickStart.bestPractices.dataIntro')}</p>
            <ul className={styles.list}>
              <li>{t('docs.quickStart.bestPractices.data.focus')}</li>
              <li>{t('docs.quickStart.bestPractices.data.update')}</li>
              <li>{t('docs.quickStart.bestPractices.data.qa')}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{t('docs.quickStart.bestPractices.personalityTitle')}</h2>
            <p className={styles.text}>{t('docs.quickStart.bestPractices.personalityIntro')}</p>
            <ul className={styles.list}>
              <li>{t('docs.quickStart.bestPractices.personality.beSpecific')}</li>
              <li>{t('docs.quickStart.bestPractices.personality.setLimits')}</li>
            </ul>
            <div className={styles.callout}>
              <div className={styles.calloutTitle}><Settings size={20} /> {t('docs.quickStart.bestPractices.techNoteTitle')}</div>
              <p className={styles.calloutText}>{t('docs.quickStart.bestPractices.techNoteText')}</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>{t('docs.quickStart.bestPractices.hybridTitle')}</h2>
            <p className={styles.text}>{t('docs.quickStart.bestPractices.hybridIntro')}</p>
            <ul className={styles.list}>
              <li>{t('docs.quickStart.bestPractices.hybrid.auto')}</li>
              <li>{t('docs.quickStart.bestPractices.hybrid.monitor')}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{t('docs.quickStart.bestPractices.cycleTitle')}</h2>
            <div className={styles.pillarGrid}>
              <div className={styles.pillarCard}>
                <h4>{t('docs.quickStart.bestPractices.cycle.step1.title')}</h4>
                <p>{t('docs.quickStart.bestPractices.cycle.step1.desc')}</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>{t('docs.quickStart.bestPractices.cycle.step2.title')}</h4>
                <p>{t('docs.quickStart.bestPractices.cycle.step2.desc')}</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>{t('docs.quickStart.bestPractices.cycle.step3.title')}</h4>
                <p>{t('docs.quickStart.bestPractices.cycle.step3.desc')}</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>{t('docs.quickStart.bestPractices.cycle.step4.title')}</h4>
                <p>{t('docs.quickStart.bestPractices.cycle.step4.desc')}</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>{t('docs.quickStart.bestPractices.nextStepsTitle')}</h2>
            <div className={styles.pillarGrid}>
              <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('build')}>
                <h4>{t('docs.quickStart.bestPractices.next.build.title')}</h4>
                <p>{t('docs.quickStart.bestPractices.next.build.desc')}</p>
              </div>
              <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('playground')}>
                <h4>{t('docs.quickStart.bestPractices.next.play.title')}</h4>
                <p>{t('docs.quickStart.bestPractices.next.play.desc')}</p>
              </div>
            </div>
          </section>
        </DocPage>
      );

    default:
      return null;
  }
};

export default QuickStart;
