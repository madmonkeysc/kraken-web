import React, { useState } from 'react';
import { 
  Check, 
  Info, 
  Rocket, 
  Zap, 
  Layers, 
  Shield, 
  MessageSquare, 
  Bot, 
  Users, 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2,
  Globe,
  Database,
  Search,
  ShoppingCart,
  Mail,
  Slack,
  MessageCircle,
  HelpCircle,
  BarChart3
} from 'lucide-react';
import styles from '../Landing.module.css';
import { useLanguage } from '../../context/LanguageContext';

const DetailedPricing = ({ cycle, setCycle, onLoginClick }) => {
  const [activeFaq, setActiveFaq] = useState(null);
  const { getTranslationObject, language } = useLanguage();
  const pricingData = getTranslationObject('pricing');

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      const converted = language === 'ES' ? price * 20 : price;
      return converted.toLocaleString('en-US');
    }
    return price;
  };

  const getDisplayPrice = (monthly, yearly) => {
    return cycle === 'monthly' ? monthly : yearly;
  };

  const plans = [
    {
      name: 'Free',
      tagline: pricingData.plans.Free.tagline,
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: pricingData.plans.Free.desc,
      features: pricingData.plans.Free.features,
      buttonText: pricingData.plans.Free.cta,
      style: 'outline'
    },
    {
      name: 'Standard',
      tagline: pricingData.plans.Standard.tagline,
      monthlyPrice: 29,
      yearlyPrice: 23,
      description: pricingData.plans.Standard.desc,
      features: pricingData.plans.Standard.features,
      buttonText: pricingData.plans.Standard.cta,
      style: 'outline'
    },
    {
      name: 'Growth',
      tagline: pricingData.plans.Growth.tagline,
      monthlyPrice: 89,
      yearlyPrice: 71,
      description: pricingData.plans.Growth.desc,
      features: pricingData.plans.Growth.features,
      buttonText: pricingData.plans.Growth.cta,
      style: 'featured',
      popular: true
    },
    {
      name: 'Scale',
      tagline: pricingData.plans.Scale.tagline,
      monthlyPrice: 249,
      yearlyPrice: 199,
      description: pricingData.plans.Scale.desc,
      features: pricingData.plans.Scale.features,
      buttonText: pricingData.plans.Scale.cta,
      style: 'outline'
    },
    {
      name: 'Enterprise',
      tagline: pricingData.plans.Enterprise.tagline,
      monthlyPrice: pricingData.comparison.values.custom,
      yearlyPrice: pricingData.comparison.values.custom,
      description: pricingData.plans.Enterprise.desc,
      features: pricingData.plans.Enterprise.features,
      buttonText: pricingData.plans.Enterprise.cta,
      style: 'outline'
    }
  ];

  const tableData = [
    {
      category: pricingData.comparison.categories.config,
      features: [
        { name: pricingData.comparison.features.credits, values: ['300', '3,000', '10,000', '40,000', pricingData.comparison.values.custom] },
        { name: pricingData.comparison.features.agents, values: ['1', '5', '10', pricingData.comparison.values.unlimited, pricingData.comparison.values.unlimited] },
        { name: pricingData.comparison.features.workspaces, values: ['1', '5', '10', pricingData.comparison.values.unlimited, pricingData.comparison.values.unlimited] },
        { name: pricingData.comparison.features.seats, values: ['1', '3', '20', pricingData.comparison.values.unlimited, pricingData.comparison.values.unlimited] },
        { name: pricingData.comparison.features.storage, values: ['4 MB', '40 MB', '80 MB', '120 MB', pricingData.comparison.values.custom] },
      ]
    },
    {
      category: pricingData.comparison.categories.models,
      features: [
        { name: pricingData.comparison.features.gpt4o, values: [true, true, true, true, true] },
        { name: pricingData.comparison.features.claude, values: [false, true, true, true, true] },
        { name: pricingData.comparison.features.reasoning, values: [false, false, true, true, true] },
        { name: pricingData.comparison.features.search, values: [false, false, true, true, true] },
        { name: pricingData.comparison.features.customModels, values: [false, false, false, false, true] },
      ]
    },
    {
      category: pricingData.comparison.categories.channels,
      features: [
        { name: pricingData.comparison.features.whatsapp, values: [false, true, true, true, true] },
        { name: pricingData.comparison.features.social, values: [false, true, true, true, true] },
        { name: pricingData.comparison.features.ecommerce, values: [false, true, true, true, true] },
        { name: pricingData.comparison.features.chat, values: [false, false, true, true, true] },
        { name: pricingData.comparison.features.api, values: [false, false, true, true, true] },
      ]
    },
    {
      category: pricingData.comparison.categories.support,
      features: [
        { name: pricingData.comparison.features.analytics, values: [false, true, true, true, true] },
        { name: pricingData.comparison.features.sso, values: [false, false, false, true, true] },
        { name: pricingData.comparison.features.branding, values: [false, false, true, true, true] },
        { name: pricingData.comparison.features.supportType, values: [pricingData.comparison.values.community, 'Email', pricingData.comparison.values.priority, pricingData.comparison.values.manager, pricingData.comparison.values.vip] },
      ]
    }
  ];

  const formatAddonPrice = (price) => `$${formatPrice(price)}${pricingData.periodMonth}`;

  const addons = [
    {
      icon: <MessageSquare size={24} />,
      title: pricingData.addons.items[0].title,
      desc: pricingData.addons.items[0].desc,
      price: formatAddonPrice(pricingData.addons.items[0].price)
    },
    {
      icon: <Bot size={24} />,
      title: pricingData.addons.items[1].title,
      desc: pricingData.addons.items[1].desc,
      price: formatAddonPrice(pricingData.addons.items[1].price)
    },
    {
      icon: <Users size={24} />,
      title: pricingData.addons.items[2].title,
      desc: pricingData.addons.items[2].desc,
      price: formatAddonPrice(pricingData.addons.items[2].price)
    },
    {
      icon: <Layers size={24} />,
      title: pricingData.addons.items[3].title,
      desc: pricingData.addons.items[3].desc,
      price: formatAddonPrice(pricingData.addons.items[3].price)
    }
  ];

  const testimonials = pricingData.social.testimonials.map((t, index) => ({
    ...t,
    color: ['pink', 'blue', 'green'][index % 3]
  }));

  const faqs = pricingData.faqs.items;

  const PricingButton = ({ style, text, className }) => (
    <button 
      className={`${style === 'featured' ? styles.btnPrimary : styles.btnOutline} ${className || ''} ${styles.pricingBtnCompact}`}
      onClick={() => onLoginClick('register')}
    >
      {text}
    </button>
  );

  return (
    <div className={styles.detailedPricingContainer}>
      {/* 1. Hero Section */}
      <header className={styles.pricingHero}>
        <div className={styles.pricingBadgeSmall}>{pricingData.tag}</div>
        <h1 className={styles.pricingHeroTitle}>{pricingData.title}</h1>
        <p className={styles.pricingHeroSubtitle}>{pricingData.subtitle}</p>
        
        {/* Billing Toggle (Pill Style) */}
        <div className={styles.billingToggleWrapper}>
          <div className={styles.billingToggle}>
            <button 
              className={`${styles.toggleBtn} ${cycle === 'monthly' ? styles.toggleBtnActive : ''}`}
              onClick={() => setCycle('monthly')}
            >
              {pricingData.monthly}
            </button>
            <button 
              className={`${styles.toggleBtn} ${cycle === 'yearly' ? styles.toggleBtnActive : ''}`}
              onClick={() => setCycle('yearly')}
            >
              {pricingData.yearly} <span className={styles.saveBadge}>{pricingData.discount}</span>
            </button>
          </div>
        </div>

        <div className={styles.heroTrialText}>
          {pricingData.trial}
        </div>
      </header>

      {/* 2. Pricing Cards Grid */}
      <div className={styles.pricingGridMain}>
        {plans.map((plan, idx) => (
          <div key={idx} className={`${styles.pricingCardNew} ${plan.popular ? styles.pricingCardFeaturedNew : ''}`}>
            {plan.popular && <div className={styles.popularBadgeNew}>{pricingData.plans.Growth.tagline.toUpperCase()}</div>}
            
            <div className={styles.cardHeader}>
              <div className={styles.cardPlanName}>{plan.name}</div>
              <div className={styles.cardTagline}>{plan.tagline}</div>
            </div>

            <div className={styles.cardPrice}>
              {typeof plan.monthlyPrice === 'number' ? (
                <>
                  <span className={styles.priceSymbol}>$</span>
                  <span className={styles.priceValue}>{formatPrice(getDisplayPrice(plan.monthlyPrice, plan.yearlyPrice))}</span>
                  <span className={styles.pricePeriod}>{pricingData.periodMonth}</span>
                </>
              ) : (
                <span className={styles.priceValue}>{plan.monthlyPrice}</span>
              )}
            </div>

            <p className={styles.cardDesc}>{plan.description}</p>
            
            <PricingButton style={plan.style} text={plan.buttonText} className={styles.cardButton} />

            <div className={styles.cardFeaturesList}>
              {plan.features.map((feat, fidx) => (
                <div key={fidx} className={styles.cardFeatureItem}>
                  <CheckCircle2 size={16} className={styles.featIcon} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Comparison Table */}
      <section className={styles.tableSection}>
        <div className={styles.tableTitleArea}>
          <h2 className={styles.sectionTitleBlack}>{pricingData.comparison.title}</h2>
          <p className={styles.sectionSubtitleGrey}>{pricingData.comparison.subtitle}</p>
        </div>

        <div className={styles.comparisonTableWrapper}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr className={styles.tableHeaderRow}>
                <th className={styles.featureCol}>{pricingData.comparison.featureHead}</th>
                {plans.map((p, i) => (
                  <th key={i} className={p.popular ? styles.popularColHeader : ''}>
                    <div className={styles.thContent}>
                      <div className={styles.thName}>{p.name}</div>
                      <div className={styles.thPrice}>
                        {typeof p.monthlyPrice === 'number' ? `$${formatPrice(getDisplayPrice(p.monthlyPrice, p.yearlyPrice))}` : p.monthlyPrice}
                      </div>
                      <PricingButton style={p.style} text={pricingData.comparison.cta} className={styles.thButton} />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((cat, cidx) => (
                <React.Fragment key={cidx}>
                  <tr className={styles.tableCategoryHeader}>
                    <td colSpan="6">{cat.category}</td>
                  </tr>
                  {cat.features.map((feat, fidx) => (
                    <tr key={fidx} className={styles.tableDataRow}>
                      <td className={styles.featureNameCol}>
                        {feat.name} <Info size={14} className={styles.infoIcon} />
                      </td>
                      {feat.values.map((val, vidx) => (
                        <td key={vidx} className={plans[vidx].popular ? styles.popularColCell : ''}>
                          {typeof val === 'boolean' ? (
                            val ? <div className={styles.tableCheck}><Check size={12} strokeWidth={4} /></div> : <span className={styles.tableDash}>—</span>
                          ) : (
                            <span className={styles.tableValueText}>{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
              {/* Bottom Buttons Row */}
              <tr className={styles.tableFooterRow}>
                <td className={styles.featureCol}></td>
                {plans.map((p, i) => (
                  <td key={i} className={p.popular ? styles.popularColCell : ''}>
                    <PricingButton style={p.style} text={pricingData.comparison.cta} className={styles.tableFooterBtn} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Add-ons Section */}
      <section className={styles.addonsSectionV2}>
        <div className={styles.addonsBadge}>{pricingData.addons.tag}</div>
        <h2 className={styles.addonsTitleLarge}>{pricingData.addons.title}</h2>
        <div className={styles.addonsGridV2}>
          {addons.map((addon, aidx) => (
            <div key={aidx} className={styles.addonCardV2}>
              <div className={styles.addonIconCircle}>{addon.icon}</div>
              <div className={styles.addonContentV2}>
                <div className={styles.addonTitleV2}>{addon.title}</div>
                <div className={styles.addonDescV2}>{addon.desc}</div>
                <div className={styles.addonPriceV2}>{addon.price}</div>
              </div>
              <button className={styles.addonActionBtn} onClick={() => onLoginClick('register')}>{pricingData.addons.cta}</button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Social Proof Section */}
      <section className={styles.socialProofSection}>
        <div className={styles.socialBadge}>{pricingData.social.tag}</div>
        <h2 className={styles.socialTitle}>{pricingData.social.title}</h2>
        <div className={styles.testimonialsGridV2}>
          {/* Stats Cards */}
          <div className={`${styles.statsCard} ${styles.statsCardPink}`}>
            <div className={styles.statsValue}>200+</div>
            <div className={styles.statsLabel}>{pricingData.social.companies}</div>
          </div>
          <div className={`${styles.statsCard} ${styles.statsCardBlue}`}>
            <div className={styles.statsValue}>99.9%</div>
            <div className={styles.statsLabel}>{pricingData.social.uptime}</div>
          </div>
          {/* Actual Testimonials */}
          {testimonials.map((t, tidx) => (
            <div key={tidx} className={`${styles.testimonialCardV2} ${styles[`cardColor${t.color}`]}`}>
              <p className={styles.tQuote}>"{t.quote}"</p>
              <div className={styles.tUserArea}>
                <div className={styles.tAvatar}>{t.user}</div>
                <div>
                  <div className={styles.tName}>{t.name}</div>
                  <div className={styles.tRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className={styles.faqSectionV2}>
        <div className={styles.faqBadgeV2}>{pricingData.faqs.tag}</div>
        <h2 className={styles.faqTitleV2}>{pricingData.faqs.title}</h2>
        <div className={styles.faqAccordionV2}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={`${styles.faqItemV2} ${activeFaq === idx ? styles.faqActiveV2 : ''}`}>
              <button 
                className={styles.faqTriggerV2}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                {faq.q}
                <ChevronDown className={styles.faqChevron} size={20} />
              </button>
              <div className={styles.faqContentV2}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className={styles.finalCTASection}>
        <h2 className={styles.finalCTATitle}>
          {pricingData.final.title.split('. ')[0]}.<br />
          {pricingData.final.title.split('. ')[1]}
        </h2>
        <p className={styles.finalCTASubtitle}>{pricingData.final.subtitle}</p>
        <div className={styles.finalCTAButtons}>
          <button className={styles.btnPrimaryLarge} onClick={() => onLoginClick('register')}>{pricingData.final.ctaPrimary}</button>
          <button className={styles.btnOutlineLarge} onClick={() => window.location.href = 'https://wa.me/your_number_here'}>{pricingData.final.ctaSecondary}</button>
        </div>
        <div className={styles.finalCTABadges}>
          <div className={styles.trustBadgeFinal}><Shield size={16} /> {pricingData.final.badges[0]}</div>
          <div className={styles.trustBadgeFinal}><Zap size={16} /> {pricingData.final.badges[1]}</div>
        </div>
      </section>
    </div>
  );
};

export default DetailedPricing;
