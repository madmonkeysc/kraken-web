import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Globe, 
  Bot,
  Layers,
  Rocket,
  Database,
  Search,
  ChevronDown,
  Layout as LayoutIcon,
  HelpCircle,
  BookOpen,
  Info,
  ShieldCheck,
  Mail,
  Calendar,
  Cpu,
  MessageCircle,
  Slack as SlackIcon,
  Sparkles,
  FileText,
  Lock,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Music2,
  Newspaper,
  Target,
  Building2,
  Building,
  Key,
  ShoppingBag,
  Home,
  Menu,
  X
} from 'lucide-react';
import FloatingAssistant from '../components/FloatingAssistant';
import styles from './Landing.module.css';
import krakenLogo from '../assets/kraken-full-navy.png';
import dashboardMockup from '../assets/dashboard-mockup.png';

import heroMockup from '../assets/presupuestos-mockup.png';
import inboxMockup from '../assets/unified-chat-mockup.png';
import builderMockup from '../assets/training-mockup.png';
import analyticsMockup from '../assets/metrics-final-mockup.png';
import crmMockup from '../assets/crm-mockup.png';
import fullShowcase from '../assets/expediente-mockup.png';
import krakenIcon from '../assets/kraken-icon-white.png';
import insomniaLogo from '../assets/insomnia-logo.png';

// Integrations Logos
import logoAnthropic from '../assets/integrations/logo_anthropic.webp';
import logoDeepseek from '../assets/integrations/logo_deepseek.webp';
import logoHubspot from '../assets/integrations/logo_hubspot.webp';
import logoInstagram from '../assets/integrations/logo_instagram.webp';
import logoMessenger from '../assets/integrations/logo_messenger.webp';
import logoNotion from '../assets/integrations/logo_notion.webp';
import logoOpenai from '../assets/integrations/logo_openai.webp';
import logoShopify from '../assets/integrations/logo_shopify.webp';
import logoSlack from '../assets/integrations/logo_slack.webp';
import logoWhatsapp from '../assets/integrations/logo_whatsapp.webp';

// Avatars and Agents
import avatar1 from '../assets/avatar_1.png';
import avatar2 from '../assets/avatar_2.png';
import avatar3 from '../assets/avatar_3.png';
import betoPhoto from '../assets/beto_realistic.png';
import anaPhoto from '../assets/ana_realistic.png';
import logoStripe from '../assets/integrations/logo_stripe.webp';
import logoTelegram from '../assets/integrations/logo_telegram.webp';
import logoGmail from '../assets/integrations/logo_gmail.svg';
import logoCalendar from '../assets/integrations/logo_calendar.svg';
import logoSheets from '../assets/integrations/logo_sheets.svg';
import logoAirtable from '../assets/integrations/logo_airtable.svg';
import logoGemini from '../assets/integrations/logo_gemini.png';

// Sub-vistas
import ProductsView from './Landing/ProductsView';
import ResourcesView from './Landing/ResourcesView';
import CompanyView from './Landing/CompanyView';
import ManifestoView from './Landing/ManifestoView';
import DetailedPricing from './Landing/DetailedPricing';
import IntegrationsView from './Landing/IntegrationsView';
import AffiliatesView from './Landing/AffiliatesView';
import TermsView from './Landing/TermsView';
import PrivacyView from './Landing/PrivacyView';
import ContactView from './Landing/ContactView';
import DPAView from './Landing/DPAView';
import DocsView from './Landing/DocsView';
import UseCasesView from './Landing/UseCasesView';
import BlogView from './Landing/BlogView';
import BlogPostView from './Landing/BlogPostView';
import IndustriasView from './Landing/IndustriasView';
import AgentesInmobiliariosView from './Landing/AgentesInmobiliariosView';
import AgentesSegurosView from './Landing/AgentesSegurosView';
import CondominiosView from './Landing/CondominiosView';
import { useLanguage } from '../context/LanguageContext';

const Landing = ({ onLoginClick }) => {
  const [currentView, setCurrentView] = useState('home');
  const [blogPostSlug, setBlogPostSlug] = useState(null);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'ES' ? 'EN' : 'ES';
    setLanguage(newLang);
  };

  const navItems = [
    { 
      label: t('nav.product'), 
      hasSubmenu: true,
      items: [
        { title: t('nav.productItems.0.title'), desc: t('nav.productItems.0.desc'), icon: <Sparkles size={20} />, view: 'products', anchor: 'ai-agents' },
        { title: t('nav.productItems.1.title'), desc: t('nav.productItems.1.desc'), icon: <Layers size={20} />, view: 'integrations' },
        { title: t('nav.productItems.2.title'), desc: t('nav.productItems.2.desc'), icon: <Users size={20} />, view: 'affiliates' },
      ]
    },
    { 
      label: t('nav.industry'), 
      hasSubmenu: true,
      items: [
        { title: t('nav.industryItems.0.title'), desc: t('nav.industryItems.0.desc'), icon: <Building2 size={20} />, view: 'agentes-inmobiliarios' },
        { title: t('nav.industryItems.1.title'), desc: t('nav.industryItems.1.desc'), icon: <ShieldCheck size={20} />, view: 'agentes-seguros' },
        { title: t('nav.industryItems.2.title'), desc: t('nav.industryItems.2.desc'), icon: <Building size={20} />, view: 'condominios' },
        { title: t('nav.industryItems.3.title'), desc: t('nav.industryItems.3.desc'), icon: <Home size={20} />, view: 'industrias' },
      ]
    },
    { 
      label: t('nav.resources'), 
      hasSubmenu: true,
      items: [
        { title: t('nav.resourcesItems.0.title'), desc: t('nav.resourcesItems.0.desc'), icon: <BookOpen size={20} />, view: 'docs' },
        { title: t('nav.resourcesItems.1.title'), desc: t('nav.resourcesItems.1.desc'), icon: <Zap size={20} />, view: 'use-cases' },
        { title: t('nav.resourcesItems.2.title'), desc: t('nav.resourcesItems.2.desc'), icon: <FileText size={20} />, view: 'blog' },
      ]
    },
    { 
      label: t('nav.company'), 
      hasSubmenu: true,
      items: [
        { title: t('nav.companyItems.0.title'), desc: t('nav.companyItems.0.desc'), icon: <Info size={20} />, view: 'manifesto' },
        { title: t('nav.companyItems.1.title'), desc: t('nav.companyItems.1.desc'), icon: <Shield size={20} />, view: 'privacy' },
        { title: t('nav.companyItems.2.title'), desc: t('nav.companyItems.2.desc'), icon: <FileText size={20} />, view: 'terms' },
        { title: t('nav.companyItems.3.title'), desc: t('nav.companyItems.3.desc'), icon: <Database size={20} />, view: 'dpa' },
        { title: t('nav.companyItems.4.title'), desc: t('nav.companyItems.4.desc'), icon: <HelpCircle size={20} />, view: 'contact' },
      ]
    },
    { label: t('nav.pricing'), view: 'pricing' },
  ];

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false);
    if (item.view) {
      setCurrentView(item.view);
      
      // Sync URL
      const pathMap = {
        home: '/',
        products: '/productos.html',
        integrations: '/integraciones.html',
        affiliates: '/afiliados.html',
        pricing: '/precios.html',
        resources: '/recursos.html',
        company: '/empresa.html',
        manifesto: '/manifiesto.html',
        terms: '/terminos.html',
        privacy: '/privacidad.html',
        contact: '/contacto.html',
        dpa: '/dpa.html',
        docs: '/docs/quick-start/introduction',
        'use-cases': '/casos-de-uso.html',
        blog: '/blog.html',
        industrias: '/industrias.html',
        'agentes-inmobiliarios': '/industrias/agentes-inmobiliarios.html',
        'agentes-seguros': '/industrias/agentes-seguros.html',
        'condominios': '/industrias/condominios.html'
      };
      
      if (item.view === 'blog-post') {
        window.history.pushState({ view: 'blog-post', slug: item.slug }, '', `/blog/${item.slug}`);
      } else if (pathMap[item.view]) {
        window.history.pushState({ view: item.view }, '', pathMap[item.view]);
      }

      // If there's an anchor, wait for view to switch then scroll
      if (item.anchor) {
        setTimeout(() => {
          const element = document.getElementById(item.anchor);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  };

  // Detect initial view from URL path and handle back/forward buttons
  useEffect(() => {
    const pathToView = {
      '/': 'home',
      '/productos.html': 'products',
      '/productos': 'products',
      '/integraciones.html': 'integrations',
      '/integraciones': 'integrations',
      '/afiliados.html': 'affiliates',
      '/afiliados': 'affiliates',
      '/precios.html': 'pricing',
      '/precios': 'pricing',
      '/recursos.html': 'resources',
      '/recursos': 'resources',
      '/empresa.html': 'company',
      '/empresa': 'company',
      '/manifiesto.html': 'manifesto',
      '/manifiesto': 'manifesto',
      '/terminos.html': 'terms',
      '/terminos': 'terms',
      '/privacidad.html': 'privacy',
      '/privacidad': 'privacy',
      '/contacto.html': 'contact',
      '/contacto': 'contact',
      '/dpa.html': 'dpa',
      '/dpa': 'dpa',
      '/docs/quick-start/introduction': 'docs',
      '/docs': 'docs',
      '/casos-de-uso.html': 'use-cases',
      '/casos-de-uso': 'use-cases',
      '/blog.html': 'blog',
      '/blog': 'blog',
      '/industrias.html': 'industrias',
      '/industrias': 'industrias',
      '/industrias/agentes-inmobiliarios.html': 'agentes-inmobiliarios',
      '/industrias/agentes-inmobiliarios': 'agentes-inmobiliarios',
      '/industrias/agentes-seguros.html': 'agentes-seguros',
      '/industrias/agentes-seguros': 'agentes-seguros',
      '/industrias/condominios.html': 'condominios',
      '/industrias/condominios': 'condominios'
    };

    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      
      // Handle blog post slug from URL
      if (path.startsWith('/blog/')) {
        const slug = path.split('/blog/')[1];
        if (slug) {
          setCurrentView('blog-post');
          setBlogPostSlug(slug);
          return;
        }
      }

      const view = pathToView[path] || 'home';
      setCurrentView(view);
    };

    // Initialize on mount
    handleLocationChange();

    // Listen for browser navigation
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Smooth scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }); // Use auto for instant scroll on route change
  }, [currentView]);

  // Logic for annual discount (approx 20%)
  const gearPlanPrice = (basePrice) => {
    if (billingCycle === 'monthly') return basePrice;
    return Math.floor(basePrice * 0.8);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'products': return <ProductsView onLoginClick={onLoginClick} />;
      case 'resources': return <ResourcesView />;
      case 'company': return <CompanyView />;
      case 'manifesto': return <ManifestoView />;
      case 'terms': return <TermsView />;
      case 'privacy': return <PrivacyView />;
      case 'contact': return <ContactView />;
      case 'dpa': return <DPAView />;
      case 'docs': return <DocsView />;
      case 'use-cases': return <UseCasesView onLoginClick={onLoginClick} />;
      case 'integrations': return <IntegrationsView onLoginClick={onLoginClick} />;
      case 'affiliates': return <AffiliatesView onLoginClick={onLoginClick} />;
      case 'industrias': return <IndustriasView onLoginClick={onLoginClick} onNavigate={handleNavClick} />;
      case 'agentes-inmobiliarios': return <AgentesInmobiliariosView onLoginClick={onLoginClick} />;
      case 'agentes-seguros': return <AgentesSegurosView onLoginClick={onLoginClick} />;
      case 'condominios': return <CondominiosView onLoginClick={onLoginClick} />;
      case 'blog': return <BlogView onPostClick={(slug) => {
        setBlogPostSlug(slug);
        setCurrentView('blog-post');
        window.history.pushState({ view: 'blog-post', slug }, '', `/blog/${slug}`);
      }} />;
      case 'blog-post': return <BlogPostView slug={blogPostSlug} onBack={() => {
        setCurrentView('blog');
        window.history.pushState({ view: 'blog' }, '', '/blog.html');
      }} onLoginClick={onLoginClick} />;
      case 'pricing': return <DetailedPricing cycle={billingCycle} setCycle={setBillingCycle} onLoginClick={onLoginClick} />;
      default: return <HomeView 
        onLoginClick={onLoginClick} 
        setCurrentView={setCurrentView} 
        billingCycle={billingCycle} 
        setBillingCycle={setBillingCycle}
        gearPlanPrice={gearPlanPrice}
      />;
    }
  };

  return (
    <div className={styles.landingContainer}>
      {/* Background Animated Blobs */}
      <div className={styles.backgroundBlobs}>
        <div className={`${styles.blob} ${styles.blob1}`}></div>
        <div className={`${styles.blob} ${styles.blob2}`}></div>
        <div className={`${styles.blob} ${styles.blob3}`}></div>
        <div className={`${styles.blob} ${styles.blob4}`}></div>
        <div className={`${styles.blob} ${styles.blob5}`}></div>
      </div>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.logoContainer} onClick={() => { setCurrentView('home'); setIsMobileMenuOpen(false); }}>
          <img src={krakenLogo} alt="Kraken AI" className={styles.logo} />
        </div>

        {/* Mobile Toggle */}
        <div className={styles.mobileToggle} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        
        <div className={styles.navLinks}>
          {navItems.map((item, idx) => (
            <div key={idx} className={styles.navItem}>
              <span 
                className={styles.navLink} 
                onClick={() => handleNavClick(item)}
                style={{ cursor: 'pointer' }}
              >
                {item.label} {item.hasSubmenu && <ChevronDown size={14} />}
              </span>
              
              {item.hasSubmenu && (
                <div className={styles.dropdown}>
                  {item.items.map((sub, sidx) => (
                    <div 
                      key={sidx} 
                      className={styles.dropdownItem} 
                      onClick={() => handleNavClick(sub)}
                    >
                      {sub.icon && <div className={styles.dropdownIcon}>{sub.icon}</div>}
                      <div className={styles.dropdownContent}>
                        <h4>{sub.title}</h4>
                        <p>{sub.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.navActionsWrapper}>
          <div 
            className={styles.langToggle} 
            onClick={toggleLanguage}
            title="Cambiar idioma / Change language"
          >
            <div className={`${styles.langOptionToggle} ${language === 'EN' ? styles.activeLang : ''}`}>
              EN
            </div>
            <div className={`${styles.langOptionToggle} ${language === 'ES' ? styles.activeLang : ''}`}>
              ES
            </div>
          </div>
          <div className={styles.authButtons}>
            <button className={`${styles.btnOutline} ${styles.btnNavbar}`} onClick={() => onLoginClick('login')}>{t('nav.login')}</button>
            <button className={styles.btnPrimary} onClick={() => onLoginClick('register')}>{t('nav.getStarted')}</button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileNavLinks}>
              {navItems.map((item, idx) => (
                <div key={idx} className={styles.mobileNavItem}>
                  <div 
                    className={styles.mobileNavLink}
                    onClick={() => {
                      if (!item.hasSubmenu) {
                        handleNavClick(item);
                      }
                    }}
                  >
                    {item.label}
                  </div>
                  {item.hasSubmenu && (
                    <div className={styles.mobileSubmenu}>
                      {item.items.map((sub, sidx) => (
                        <div 
                          key={sidx} 
                          className={styles.mobileSubItem}
                          onClick={() => handleNavClick(sub)}
                        >
                          <div className={styles.mobileSubIcon}>{sub.icon}</div>
                          <span>{sub.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.mobileAuth}>
              <button className={styles.btnOutline} onClick={() => onLoginClick('login')}>{t('nav.login')}</button>
              <button className={styles.btnPrimary} onClick={() => onLoginClick('register')}>{t('nav.getStarted')}</button>
            </div>
          </div>
        )}
      </nav>

      <main>
        {renderCurrentView()}
      </main>

      {/* Footer Parity with BotDesk.co */}
      <footer className={styles.footer}>
        <div className={styles.socialContainer}>
          <p className={styles.footerSocialTitle}>{t('footer.socialTitle')}</p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" className={styles.socialIcon} aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" className={styles.socialIcon} aria-label="TikTok"><Music2 size={20} /></a>
            <a href="#" className={styles.socialIcon} aria-label="YouTube"><Youtube size={20} /></a>
          </div>
        </div>
        
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <img src={krakenLogo} alt="Kraken AI" className={styles.footerLogo} onClick={() => setCurrentView('home')} />
            <p className={styles.footerDesc}>
              {t('footer.description')}
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4>{t('footer.product')}</h4>
            <div className={styles.footerLinks}>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick({ view: 'products' }); }}>{t('footer.productItems.0')}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick({ view: 'integrations' }); }}>{t('footer.productItems.1')}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick({ view: 'home', anchor: 'industries' }); }}>{t('footer.productItems.2')}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick({ view: 'pricing' }); }}>{t('footer.productItems.3')}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick({ view: 'affiliates' }); }}>{t('footer.productItems.4')}</a>
            </div>
          </div>
          <div className={styles.footerCol}>
            <h4>{t('footer.resources')}</h4>
            <div className={styles.footerLinks}>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick({ view: 'docs' }); }}>{t('footer.resourcesItems.0')}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick({ view: 'use-cases' }); }}>{t('footer.resourcesItems.1')}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick({ view: 'blog' }); }}>{t('footer.resourcesItems.2')}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick({ view: 'resources' }); }}>{t('footer.resourcesItems.4')}</a>
            </div>
          </div>
          <div className={styles.footerCol}>
            <h4>{t('footer.company')}</h4>
            <div className={styles.footerLinks}>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick({ view: 'manifesto' }); }}>{t('footer.companyItems.0')}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick({ view: 'privacy' }); }}>{t('footer.companyItems.1')}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick({ view: 'terms' }); }}>{t('footer.companyItems.2')}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick({ view: 'dpa' }); }}>{t('footer.companyItems.3')}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick({ view: 'contact' }); }}>{t('footer.companyItems.4')}</a>
            </div>
          </div>
        </div>
        
        <div className={styles.insomniaBranding}>
          <div className={styles.insomniaText}>{t('footer.copyright')}</div>
          <a href="https://www.usainsomnia.com" target="_blank" rel="noopener noreferrer" className={styles.insomniaLink}>
            <span className={styles.insomniaText}>{t('footer.developedBy')}</span>
            <img src={insomniaLogo} alt="INSOMNIA STUDIO IA" className={styles.insomniaLogo} />
          </a>
        </div>
      </footer>

      {/* Floating Assistant Component */}
      <FloatingAssistant onLoginClick={onLoginClick} />
    </div>
  );
};

const HomeView = ({ onLoginClick, setCurrentView, billingCycle, setBillingCycle, gearPlanPrice }) => {
  const { t, getTranslationObject } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const steps = [
    { image: inboxMockup },
    { image: builderMockup },
    { image: crmMockup },
    { image: heroMockup },
    { image: fullShowcase },
  ];

  // Intersection Observer for Reveal Animations
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

  return (
    <div className={styles.homeWrapper}>
      {/* 1. SECTION: HERO EXPLOSIVE */}
      <section className={styles.heroV2}>
        <div className={`${styles.heroContent} ${styles.reveal}`}>
          <div className={styles.heroTag}>
            <Sparkles size={14} /> <span>{t('hero.badge')}</span>
          </div>
          <h1 className={styles.heroHeadline}>
            {t('hero.titleStart')} <span className={styles.textGradient}>{t('hero.titleHighlight')}</span> {t('hero.titleEnd')}
          </h1>
          <p className={styles.heroDescription}>
            {t('hero.description')}
          </p>
          <div className={styles.heroActions}>
            <button className={`${styles.btnPrimary} ${styles.btnLarge}`} onClick={() => onLoginClick('register')}>
              {t('hero.ctaPrimary')}
            </button>
            <button className={`${styles.btnOutline} ${styles.btnLarge}`} onClick={() => window.location.href = 'https://wa.me/your_number_here'}>
              {t('hero.ctaSecondary')}
            </button>
          </div>

          <div className={styles.heroBenefits}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Zap size={18} /></div>
              <div className={styles.benefitText}>
                <h4>{t('hero.benefits.fast.title')}</h4>
                <p>{t('hero.benefits.fast.desc')}</p>
              </div>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Shield size={18} /></div>
              <div className={styles.benefitText}>
                <h4>{t('hero.benefits.secure.title')}</h4>
                <p>{t('hero.benefits.secure.desc')}</p>
              </div>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}><Globe size={18} /></div>
              <div className={styles.benefitText}>
                <h4>{t('hero.benefits.global.title')}</h4>
                <p>{t('hero.benefits.global.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className={`${styles.trustedSection} ${styles.reveal}`}>
        <div className={styles.trustedContainer}>
          <p className={styles.trustedTitle}>{t('trusted.title')}</p>
          <div className={styles.logoCloud}>
            <div className={styles.logoCloudTrack}>
              {/* First Set */}
              <img src={logoOpenai} alt="OpenAI" className={styles.trustedLogo} />
              <img src={logoAnthropic} alt="Anthropic" className={styles.trustedLogo} />
              <img src={logoGemini} alt="Google Gemini" className={styles.trustedLogo} />
              <img src={logoDeepseek} alt="DeepSeek" className={styles.trustedLogo} />
              <img src={logoHubspot} alt="Hubspot" className={styles.trustedLogo} />
              <img src={logoShopify} alt="Shopify" className={styles.trustedLogo} />
              <img src={logoSlack} alt="Slack" className={styles.trustedLogo} />
              <img src={logoStripe} alt="Stripe" className={styles.trustedLogo} />
              {/* Duplicate Set for Seamless Loop */}
              <img src={logoOpenai} alt="OpenAI" className={styles.trustedLogo} />
              <img src={logoAnthropic} alt="Anthropic" className={styles.trustedLogo} />
              <img src={logoGemini} alt="Google Gemini" className={styles.trustedLogo} />
              <img src={logoDeepseek} alt="DeepSeek" className={styles.trustedLogo} />
              <img src={logoHubspot} alt="Hubspot" className={styles.trustedLogo} />
              <img src={logoShopify} alt="Shopify" className={styles.trustedLogo} />
              <img src={logoSlack} alt="Slack" className={styles.trustedLogo} />
              <img src={logoStripe} alt="Stripe" className={styles.trustedLogo} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: SHOWCASE V2 (User Requested) */}
      <section className={`${styles.showcaseV2} ${styles.reveal}`}>
        <div className={styles.topPill} onClick={() => onLoginClick('register')}>
          <div className={styles.pillAvatars}>
            <img src={avatar1} alt="Avatar 1" className={styles.pillAvatar} />
            <img src={avatar2} alt="Avatar 2" className={styles.pillAvatar} />
            <img src={avatar3} alt="Avatar 3" className={styles.pillAvatar} />
          </div>
          <span>{t('showcase.startFree')}</span>
          <ArrowRight size={14} />
        </div>

        <div className={styles.cardsGridV2}>
          {/* Card 1: Unified Inbox */}
          <div className={styles.cardV2}>
            <div className={styles.cardHeaderV2}>
              <div className={`${styles.cardIconV2} ${styles.iconPurple}`}>
                <MessageSquare size={24} />
              </div>
              <h3>{t('showcase.inbox.title')}</h3>
              <p>{t('showcase.inbox.desc')}</p>
            </div>
            <div className={styles.inboxList}>
              <div className={styles.inboxItem}>
                <div className={`${styles.inboxIcon} ${styles.iconWhatsapp}`}>
                  <img src={logoWhatsapp} alt="WA" className={styles.brandLogo} />
                </div>
                <div className={styles.inboxInfo}>
                  <h5>WhatsApp</h5>
                  <p>{t('showcase.inbox.wa')}</p>
                </div>
                <span className={styles.inboxTime}>2m</span>
              </div>
              <div className={styles.inboxItem}>
                <div className={`${styles.inboxIcon} ${styles.iconMessenger}`}>
                  <img src={logoMessenger} alt="MS" className={styles.brandLogo} />
                </div>
                <div className={styles.inboxInfo}>
                  <h5>Messenger</h5>
                  <p>{t('showcase.inbox.ms')}</p>
                </div>
                <span className={styles.inboxTime}>5m</span>
              </div>
              <div className={styles.inboxItem}>
                <div className={`${styles.inboxIcon} ${styles.iconInstagram}`}>
                  <img src={logoInstagram} alt="IG" className={styles.brandLogo} />
                </div>
                <div className={styles.inboxInfo}>
                  <h5>Instagram</h5>
                  <p>{t('showcase.inbox.ig')}</p>
                </div>
                <span className={styles.inboxTime}>8m</span>
              </div>
            </div>
          </div>

          {/* Card 2: AI Automation */}
          <div className={styles.cardV2}>
            <div className={styles.cardHeaderV2}>
              <div className={`${styles.cardIconV2} ${styles.iconBlue}`}>
                <Zap size={24} />
              </div>
              <h3>{t('showcase.automation.title')}</h3>
              <p>{t('showcase.automation.desc')}</p>
            </div>
            <div className={styles.automationStats}>
              {getTranslationObject('showcase.automation.stats').map((stat, idx) => (
                <div key={idx} className={styles.automationRow}>
                  <div className={styles.rowLabel}>
                    <span>{stat.label}</span>
                    <span className={styles.rowScore}>{stat.score}</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${stat.score}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Live Insights */}
          <div className={styles.cardV2}>
            <div className={styles.cardHeaderV2}>
              <div className={`${styles.cardIconV2} ${styles.iconOrange}`}>
                <BarChart3 size={24} />
              </div>
              <h3>{t('showcase.insights.title')}</h3>
              <p>{t('showcase.insights.desc')}</p>
            </div>
            <div className={styles.insightsVisual}>
              <div className={styles.barChartV2}>
                <div className={`${styles.chartBar} ${styles.bar1}`}></div>
                <div className={`${styles.chartBar} ${styles.bar2}`}></div>
                <div className={`${styles.chartBar} ${styles.bar3}`}></div>
                <div className={`${styles.chartBar} ${styles.bar4}`}></div>
                <div className={`${styles.chartBar} ${styles.bar5}`}></div>
                <div className={`${styles.chartBar} ${styles.bar6}`}></div>
              </div>
              <div className={styles.insightsStats}>
                <div className={styles.insightStatItem}>
                  <h4>3,429</h4>
                  <p>{t('showcase.insights.req')}</p>
                </div>
                <div className={styles.insightStatItem}>
                  <h4>12.8k</h4>
                  <p>{t('showcase.insights.act')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.kpiSectionV2}>
          <div className={styles.kpiItemV2}>
            <span className={styles.kpiValueV2}>80%</span>
            <span className={styles.kpiLabelV2}>{t('showcase.kpis.0.label')}</span>
          </div>
          <div className={styles.kpiItemV2}>
            <span className={styles.kpiValueV2}>24/7</span>
            <span className={styles.kpiLabelV2}>{t('showcase.kpis.1.label')}</span>
          </div>
          <div className={styles.kpiItemV2}>
            <span className={styles.kpiValueV2}>80+</span>
            <span className={styles.kpiLabelV2}>{t('showcase.kpis.2.label')}</span>
          </div>
          <div className={styles.kpiItemV2}>
            <span className={styles.kpiValueV2}>&lt;2s</span>
            <span className={styles.kpiLabelV2}>{t('showcase.kpis.3.label')}</span>
          </div>
        </div>
      </section>

      {/* Logo Marquee (Restored as the 'Movement Bar') */}
      <section className={`${styles.marqueeSection} ${styles.reveal}`}>
        <div className={styles.marquee}>
          <div className={styles.marqueeContent}>
            <img src={logoWhatsapp} alt="WhatsApp" className={styles.marqueeLogo} />
            <img src={logoMessenger} alt="Messenger" className={styles.marqueeLogo} />
            <img src={logoInstagram} alt="Instagram" className={styles.marqueeLogo} />
            <img src={logoTelegram} alt="Telegram" className={styles.marqueeLogo} />
            <img src={logoShopify} alt="Shopify" className={styles.marqueeLogo} />
            <img src={logoStripe} alt="Stripe" className={styles.marqueeLogo} />
            <img src={logoNotion} alt="Notion" className={styles.marqueeLogo} />
            <img src={logoSlack} alt="Slack" className={styles.marqueeLogo} />
            <img src={logoHubspot} alt="Hubspot" className={styles.marqueeLogo} />
            <img src={logoOpenai} alt="OpenAI" className={styles.marqueeLogo} />
            <img src={logoAnthropic} alt="Anthropic" className={styles.marqueeLogo} />
            <img src={logoDeepseek} alt="Deepseek" className={styles.marqueeLogo} />
            {/* Duplicate for seamless loop */}
            <img src={logoWhatsapp} alt="WhatsApp" className={styles.marqueeLogo} />
            <img src={logoMessenger} alt="Messenger" className={styles.marqueeLogo} />
            <img src={logoInstagram} alt="Instagram" className={styles.marqueeLogo} />
            <img src={logoTelegram} alt="Telegram" className={styles.marqueeLogo} />
            <img src={logoShopify} alt="Shopify" className={styles.marqueeLogo} />
            <img src={logoStripe} alt="Stripe" className={styles.marqueeLogo} />
            <img src={logoNotion} alt="Notion" className={styles.marqueeLogo} />
            <img src={logoSlack} alt="Slack" className={styles.marqueeLogo} />
          </div>
        </div>
      </section>

      {/* 3. SECTION: MODERN SUPPORT TEAMS (User Requested) */}
      <section className={`${styles.modernSupport} ${styles.reveal}`}>
        <div className={styles.modernHeader}>
          <h2>{t('landingSupport.title')}</h2>
          <p>{t('landingSupport.desc')}</p>
        </div>

        <div className={styles.modernGrid}>
          {/* Card 1: Unified Inbox */}
          <div className={styles.modernCard}>
            <div className={styles.orbitContainer}>
              <div className={styles.orbitCenter}>
                <Globe size={32} />
              </div>
              <div className={`${styles.orbitIcon} ${styles.pos1}`} title="WhatsApp"><img src={logoWhatsapp} alt="WA" /></div>
              <div className={`${styles.orbitIcon} ${styles.pos2}`} title="Gmail"><img src={logoGmail} alt="Gmail" /></div>
              <div className={`${styles.orbitIcon} ${styles.pos3}`} title="Messenger"><img src={logoMessenger} alt="MS" /></div>
              <div className={`${styles.orbitIcon} ${styles.pos4}`} title="Instagram"><img src={logoInstagram} alt="IG" /></div>
              <div className={`${styles.orbitIcon} ${styles.pos5}`} title="Telegram"><img src={logoTelegram} alt="Telegram" /></div>
              <div className={`${styles.orbitIcon} ${styles.pos6}`} title="Slack"><img src={logoSlack} alt="Slack" /></div>
              <div className={styles.orbitRing}></div>
              <div className={styles.orbitRingOuter}></div>
            </div>
            <div className={styles.modernCardContent}>
              <h3>{t('landingSupport.cards.0.title')}</h3>
              <p>{t('landingSupport.cards.0.desc')}</p>
            </div>
          </div>

          {/* Card 2: Powerful Integrations */}
          <div className={styles.modernCard}>
            <div className={styles.integrationsGrid}>
              <div className={styles.intIcon}><img src={logoShopify} alt="Shopify" /></div>
              <div className={styles.intIcon}><img src={logoHubspot} alt="Hubspot" /></div>
              <div className={styles.intIcon}><img src={logoSlack} alt="Slack" /></div>
              <div className={styles.intIcon}><img src={logoStripe} alt="Stripe" /></div>
              <div className={styles.intIcon}><img src={logoCalendar} alt="Calendar" /></div>
              <div className={styles.intIcon}><img src={logoGmail} alt="Gmail" /></div>
              <div className={styles.intIcon}><img src={logoNotion} alt="Notion" /></div>
              <div className={styles.intIcon}><img src={logoSheets} alt="Sheets" /></div>
              <div className={styles.intIcon}><img src={logoAirtable} alt="Airtable" /></div>
            </div>
            <div className={styles.modernCardContent}>
              <h3>{t('landingSupport.cards.1.title')}</h3>
              <p>{t('landingSupport.cards.1.desc')}</p>
            </div>
          </div>

          {/* Card 3: AI-Powered Automation */}
          <div className={styles.modernCard}>
            <div className={styles.orbitContainer}>
              <div className={`${styles.orbitCenter} ${styles.orbitCenterDark}`}>
                <img src={krakenIcon} alt="Kraken" className={styles.orbitKrakenIcon} />
              </div>
              <div className={`${styles.orbitIcon} ${styles.pos1}`} title="ChatGPT"><img src={logoOpenai} alt="ChatGPT" className={styles.orbitBrandLogo} /></div>
              <div className={`${styles.orbitIcon} ${styles.pos3}`} title="Gemini"><img src={logoGemini} alt="Gemini" className={styles.orbitBrandLogo} /></div>
              <div className={`${styles.orbitIcon} ${styles.pos4}`} title="Anthropic"><img src={logoAnthropic} alt="Anthropic" className={styles.orbitBrandLogo} /></div>
              <div className={`${styles.orbitIcon} ${styles.pos6}`} title="DeepSeek"><img src={logoDeepseek} alt="Deepseek" className={styles.orbitBrandLogo} /></div>
              <div className={styles.orbitRing}></div>
              <div className={styles.orbitRingOuter}></div>
            </div>
            <div className={styles.modernCardContent}>
              <h3>{t('landingSupport.cards.2.title')}</h3>
              <p>{t('landingSupport.cards.2.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: PREMIUM HIGHLIGHTS */}
      <section className={`${styles.highlightsSection} ${styles.reveal}`}>
        <div className={styles.highlightsHeader}>
          <div className={styles.highlightTag}>{t('highlights.tag')}</div>
          <h2 className={styles.highlightTitle}>{t('highlights.title')}</h2>
        </div>
        
        <div className={styles.highlightsGrid}>
          <div className={styles.highlightCardFull}>
            <div className={styles.highlightContent}>
              <h3>{t('highlights.cards.0.title')}</h3>
              <p>{t('highlights.cards.0.desc')}</p>
              <button className={styles.btnPrimary} onClick={() => onLoginClick('register')}>{t('highlights.cards.0.cta')}</button>
            </div>
            <img src={inboxMockup} alt="Inbox" className={styles.highlightMockup} />
          </div>

          <div className={styles.highlightCard}>
            <div className={styles.highlightContent}>
              <h3>{t('highlights.cards.1.title')}</h3>
              <p>{t('highlights.cards.1.desc')}</p>
            </div>
            <img src={builderMockup} alt="Training" className={styles.highlightMockup} />
          </div>

          <div className={styles.highlightCard}>
            <div className={styles.highlightContent}>
              <h3>{t('highlights.cards.2.title')}</h3>
              <p>{t('highlights.cards.2.desc')}</p>
            </div>
            <img src={crmMockup} alt="CRM" className={styles.highlightMockup} />
          </div>

          <div className={styles.highlightCard}>
            <div className={styles.highlightContent}>
              <h3>{t('highlights.cards.3.title')}</h3>
              <p>{t('highlights.cards.3.desc')}</p>
            </div>
            <img src={analyticsMockup} alt="Metrics" className={styles.highlightMockup} />
          </div>
        </div>
      </section>

      {/* 5. SECTION: INTERACTIVE STEPPER */}
      <section className={`${styles.stepperSection} ${styles.reveal}`}>
        <div className={styles.stepperContainer}>
          <div className={styles.stepperList}>
            <h2 className={styles.sectionTitle}>{t('stepper.title')}</h2>
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`${styles.stepperItem} ${activeStep === index ? styles.stepperItemActive : ''}`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={styles.stepNumber}>{index + 1}</div>
                <h4>{t(`stepper.steps.${index}.title`)}</h4>
                <p>{t(`stepper.steps.${index}.desc`)}</p>
              </div>
            ))}
          </div>
          <div className={styles.stepperVisual}>
            <img src={steps[activeStep].image} alt="Step" className={styles.stepperImage} />
          </div>
        </div>
        <div className={styles.flexCenter}>
          <button className={`${styles.btnPrimary} ${styles.btnLarge}`} onClick={() => onLoginClick('register')}>{t('stepper.ctaPrimary')}</button>
          <button className={`${styles.btnOutline} ${styles.btnLarge}`} onClick={() => window.location.href = 'https://wa.me/your_number_here'}>{t('stepper.ctaSecondary')}</button>
        </div>
      </section>

      {/* 6. SECTION: ENTERPRISE SECURITY */}
      <section className={`${styles.securitySection} ${styles.reveal}`}>
        <div className={styles.securityGrid}>
          <div className={styles.securityLeft}>
            <div className={styles.securityTag}>
              <span className={styles.redDot}></span>
              {t('security.tag')}
            </div>
            <h2 className={styles.securityTitle}>{t('security.title')}</h2>
            <p className={styles.securitySubtitle}>
              {t('security.subtitle')}
            </p>
            <div className={styles.securityShieldWrapper}>
               <ShieldCheck size={180} strokeWidth={0.5} className={styles.shieldIconLarge} />
            </div>
          </div>
          
          <div className={styles.securityRight}>
            {(getTranslationObject('security.cards') || []).map((card, idx) => (
              <div key={idx} className={styles.securityCard}>
                <div className={styles.securityCardIcon}>
                  {idx === 0 ? <Database size={24} /> : idx === 1 ? <Lock size={24} /> : <ShieldCheck size={24} />}
                </div>
                <div className={styles.securityCardContent}>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION: UNIFIED HUB */}
      <section className={`${styles.hubSection} ${styles.reveal}`}>
        <div className={styles.hubHeader}>
          <h2 className={styles.hubTitle}>{t('hub.title')}</h2>
          <p className={styles.hubCaption}>{t('hub.caption')}</p>
        </div>
        <div className={styles.hubMockupContainer}>
          <img src={fullShowcase} alt="Hub" className={styles.hubMockupMain} />
        </div>
        <div className={styles.sectionHeader}>
          <p className={styles.hubFooterText}>{t('hub.footer')}</p>
          <button className={`${styles.btnPrimary} ${styles.btnExtraLarge}`} onClick={() => onLoginClick('register')}>{t('hub.cta')}</button>
        </div>
      </section>

      {/* 8. SECTION: PASTEL SOLUTIONS */}
      <section className={`${styles.solutionsSection} ${styles.reveal}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('solutions.title')}</h2>
        </div>
        <div className={styles.solutionsGrid}>
          {(getTranslationObject('solutions.items') || []).map((item, idx) => {
            const colors = [styles.bgIce, styles.bgAmber, styles.bgRose, styles.bgLavender, styles.bgMint];
            return (
              <div key={idx} className={`${styles.solutionCard} ${colors[idx % colors.length]}`}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <button className={styles.btnText}>{t('solutions.cta')} <ArrowRight size={16} /></button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. SECTION: MASONRY TESTIMONIALS */}
      <section className={`${styles.masonrySection} ${styles.reveal}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('testimonials.title')}</h2>
        </div>
        <div className={styles.masonryGrid}>
          {(getTranslationObject('testimonials.items') || []).map((testimonial, idx) => {
            const avatarStyles = [
              {}, // placeholder for betoPhoto
              { background: '#fef3c7', color: '#b45309' },
              { background: '#dcfce7', color: '#15803d' },
              { background: '#f3f4f6', color: '#1f2937' },
              { background: '#fae8ff', color: '#a21caf' },
              {}, // placeholder for anaPhoto
              { background: '#f1f5f9', color: '#334155' }
            ];
            
            const initials = testimonial.name.split(' ').map(n => n[0]).join('');

            return (
              <div key={idx} className={styles.masonryItem}>
                <p>{testimonial.text}</p>
                <div className={styles.masonryUser}>
                  <div className={styles.masonryAvatar} style={avatarStyles[idx]}>
                    {idx === 0 ? <img src={betoPhoto} alt="Beto" className={styles.avatarImg} /> : 
                     idx === 5 ? <img src={anaPhoto} alt="Ana" className={styles.avatarImg} /> : 
                     initials}
                  </div>
                  <div className={styles.masonryInfo}>
                    <h5>{testimonial.name}</h5>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.flexCenter}>
          <button className={`${styles.btnPrimary} ${styles.btnLarge}`} onClick={() => onLoginClick('register')}>{t('testimonials.cta')}</button>
        </div>
      </section>

      {/* Workflow Section */}
      <section className={`${styles.workflowSection} ${styles.reveal}`}>
        <div className={styles.workflowContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t('workflow.title')}</h2>
            <p className={styles.sectionSubtitle}>{t('workflow.subtitle')}</p>
          </div>
          
          <div className={styles.workflowGrid}>
            {(getTranslationObject('workflow.steps') || []).map((step, idx) => (
              <div key={idx} className={styles.workflowItem}>
                <div className={styles.workflowIcon}>
                  {idx === 0 ? <Target size={32} /> : idx === 1 ? <Cpu size={32} /> : <Rocket size={32} />}
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SECTION: FAQ ACCORDION */}
      <section className={`${styles.faqSection} ${styles.reveal}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('faq.title')}</h2>
          <p className={styles.sectionSubtitle}>{t('faq.subtitle')}</p>
        </div>
        <div className={styles.faqContainer}>
          {(getTranslationObject('faq.items') || []).map((item, idx) => (
            <div 
              key={idx} 
              className={`${styles.faqItem} ${activeFaq === idx ? styles.faqItemActive : ''}`}
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
            >
              <div className={styles.faqQuestion}>
                <h4>{item.q}</h4>
                <div className={styles.faqIcon}>
                  <ChevronDown size={20} />
                </div>
              </div>
              <div className={styles.faqAnswer}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. SECTION: FINAL CTA V2 */}
      <section className={`${styles.ctaV2Final} ${styles.reveal}`}>
        <h2 className={styles.ctaV2FinalHeadline}>
          {t('finalCta.title')}
        </h2>
        <div className={styles.ctaV2Actions}>
          <button className={styles.btnV2Primary} onClick={() => onLoginClick('register')}>{t('finalCta.ctaPrimary')}</button>
          <button className={styles.btnV2Outline} onClick={() => window.location.href = 'https://wa.me/your_number_here'}>{t('finalCta.ctaSecondary')}</button>
        </div>
        <div className={styles.ctaV2Trust}>
          <div className={styles.trustItem}><CheckCircle2 size={20} /> {t('finalCta.trust.0')}</div>
          <div className={styles.trustItem}><CheckCircle2 size={20} /> {t('finalCta.trust.1')}</div>
          <div className={styles.trustItem}><CheckCircle2 size={20} /> {t('finalCta.trust.2')}</div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
