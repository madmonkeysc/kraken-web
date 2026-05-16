import React, { useEffect } from 'react';
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
  Users
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './IntegrationsView.module.css';

// Logos from Landing.jsx props or imports
import logoAnthropic from '../../assets/integrations/logo_anthropic.webp';
import logoDeepseek from '../../assets/integrations/logo_deepseek.webp';
import logoHubspot from '../../assets/integrations/logo_hubspot.webp';
import logoInstagram from '../../assets/integrations/logo_instagram.webp';
import logoMessenger from '../../assets/integrations/logo_messenger.webp';
import logoNotion from '../../assets/integrations/logo_notion.webp';
import logoOpenai from '../../assets/integrations/logo_openai.webp';
import logoShopify from '../../assets/integrations/logo_shopify.webp';
import logoSlack from '../../assets/integrations/logo_slack.webp';
import logoStripe from '../../assets/integrations/logo_stripe.webp';
import logoTelegram from '../../assets/integrations/logo_telegram.webp';
import logoWhatsapp from '../../assets/integrations/logo_whatsapp.webp';
import logoGmail from '../../assets/integrations/logo_gmail.svg';
import logoCalendar from '../../assets/integrations/logo_calendar.svg';
import logoSheets from '../../assets/integrations/logo_sheets.svg';
import logoAirtable from '../../assets/integrations/logo_airtable.svg';
import logoGemini from '../../assets/integrations/logo_gemini.png';

const IntegrationsView = ({ onLoginClick }) => {
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
          <span>{t('integrationsPage.badge')}</span>
        </div>
        <h1 className={`${styles.heroTitle} ${styles.reveal}`}>
          {renderWithGradient(t('integrationsPage.title'))}
        </h1>
        <p className={`${styles.heroSubtitle} ${styles.reveal}`}>
          {t('integrationsPage.subtitle')}
        </p>
      </section>

      {/* Channels Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('integrationsPage.channels.title')}</h2>
          <p className={styles.sectionSubtitle}>
            {t('integrationsPage.channels.subtitle')}
          </p>
        </div>
        <div className={`${styles.grid} ${styles.channelsGrid}`}>
          <ChannelCard 
            logo={logoWhatsapp} 
            name="WhatsApp" 
            desc={t('integrationsPage.channels.cards.whatsapp')}
            color="#25D366"
            officialText={t('integrationsPage.channels.official')}
          />
          <ChannelCard 
            logo={logoInstagram} 
            name="Instagram" 
            desc={t('integrationsPage.channels.cards.instagram')}
            color="#E4405F"
            officialText={t('integrationsPage.channels.official')}
          />
          <ChannelCard 
            logo={logoMessenger} 
            name="Messenger" 
            desc={t('integrationsPage.channels.cards.messenger')}
            color="#0084FF"
            officialText={t('integrationsPage.channels.official')}
          />
        </div>
      </section>

      {/* Business Tools Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('integrationsPage.tools.title')}</h2>
          <p className={styles.sectionSubtitle}>
            {t('integrationsPage.tools.subtitle')}
          </p>
        </div>
        <div className={`${styles.grid} ${styles.toolsGrid}`}>
          <ToolCard logo={logoCalendar} name="Google Calendar" desc={t('integrationsPage.tools.cards.calendar')} />
          <ToolCard logo={logoGmail} name="Gmail" desc={t('integrationsPage.tools.cards.gmail')} />
          <ToolCard logo={logoSheets} name="Google Sheets" desc={t('integrationsPage.tools.cards.sheets')} />
          <ToolCard logo={logoStripe} name="Stripe" desc={t('integrationsPage.tools.cards.stripe')} />
          <ToolCard logo={logoHubspot} name="HubSpot" desc={t('integrationsPage.tools.cards.hubspot')} />
          <ToolCard logo={logoShopify} name="Shopify" desc={t('integrationsPage.tools.cards.shopify')} />
          <ToolCard logo={logoSlack} name="Slack" desc={t('integrationsPage.tools.cards.slack')} />
          <ToolCard logo={logoNotion} name="Notion" desc={t('integrationsPage.tools.cards.notion')} />
          <ToolCard logo={logoAirtable} name="Airtable" desc={t('integrationsPage.tools.cards.airtable')} />
        </div>
      </section>

      {/* AI Models Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('integrationsPage.models.title')}</h2>
          <p className={styles.sectionSubtitle}>
            {t('integrationsPage.models.subtitle')}
          </p>
        </div>
        <div className={`${styles.grid} ${styles.modelsGrid}`}>
          <ModelCard logo={logoOpenai} name="OpenAI" badge="GPT-4o / o1" />
          <ModelCard logo={logoAnthropic} name="Anthropic" badge="Claude 3.5" />
          <ModelCard logo={logoGemini} name="Google Gemini" badge="1.5 Pro" />
          <ModelCard logo={logoDeepseek} name="DeepSeek" badge="V3 / R1" />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.ctaSection}>
        <div className={`${styles.ctaContent} ${styles.reveal}`}>
          <div className={styles.badge} style={{ backgroundColor: '#fff' }}>
            <span>{t('integrationsPage.cta.badge')}</span>
          </div>
          <h2 className={styles.heroTitle}>
            {renderWithGradient(t('integrationsPage.cta.title'))}
          </h2>
          <p className={styles.heroSubtitle}>
            {t('integrationsPage.cta.subtitle')}
          </p>
          
          <div className={styles.ctaActions}>
            <button className={styles.btnPrimary} onClick={() => onLoginClick('register')}>
              {t('integrationsPage.cta.start')}
            </button>
            <button className={styles.btnOutline} onClick={() => onLoginClick('login')}>
              {t('integrationsPage.cta.demo')}
            </button>
          </div>

          <div className={styles.ctaFooter}>
            <div className={styles.ctaFooterItem}><ShieldCheck size={18} /> {t('integrationsPage.cta.footer.encryption')}</div>
            <div className={styles.ctaFooterItem}><CheckCircle2 size={18} /> {t('integrationsPage.cta.footer.support')}</div>
            <div className={styles.ctaFooterItem}><Clock size={18} /> {t('integrationsPage.cta.footer.setup')}</div>
            <div className={styles.ctaFooterItem}><Unlock size={18} /> {t('integrationsPage.cta.footer.cancel')}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ChannelCard = ({ logo, name, desc, color, officialText }) => (
  <div className={`${styles.card} ${styles.reveal}`}>
    <div className={styles.iconWrapper} style={{ backgroundColor: `${color}15`, color }}>
      <img src={logo} alt={name} className={styles.logoImg} />
    </div>
    <h3>{name}</h3>
    <p>{desc}</p>
    <div className={styles.cardBadge}>{officialText}</div>
  </div>
);

const ToolCard = ({ logo, name, desc }) => (
  <div className={`${styles.card} ${styles.reveal}`}>
    <div className={styles.iconWrapper} style={{ backgroundColor: '#f9fafb' }}>
      <img src={logo} alt={name} className={styles.logoImg} />
    </div>
    <h3>{name}</h3>
    <p>{desc}</p>
    <div className={styles.cardBadge}>v1.0</div>
  </div>
);

const ModelCard = ({ logo, name, badge }) => (
  <div className={`${styles.card} ${styles.reveal}`} style={{ alignItems: 'center', textAlign: 'center' }}>
    <div className={styles.iconWrapper} style={{ backgroundColor: '#fff', border: '1px solid #f3f4f6', marginBottom: '1rem' }}>
      <img src={logo} alt={name} className={styles.logoImg} />
    </div>
    <h3 style={{ marginBottom: '0.25rem' }}>{name}</h3>
    <div className={styles.cardBadge} style={{ backgroundColor: '#000', color: '#fff' }}>{badge}</div>
  </div>
);

export default IntegrationsView;
