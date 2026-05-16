import React, { useState } from 'react';
import { 
  Rocket, Zap, Shield, Activity, Share2, Settings, 
  MessageSquare, Play, Info, CheckCircle2, AlertCircle,
  Cpu, BarChart3, LayoutGrid, Smartphone, Globe, Mail,
  Send, Instagram as InstagramIcon, MessageCircle,
  Building2, ShoppingCart, GraduationCap, ShieldCheck, Home, Cloud, 
  BookOpen, Trophy, ArrowRight, Quote, ChevronLeft, Clock,
  Menu, X
} from 'lucide-react';

import styles from './DocsView.module.css';
import { useLanguage } from '../../context/LanguageContext';
import { blogPosts } from './blogData';
import { successStories } from './successStoriesData';


const DocsView = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('intro');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarSections = [
    {
      title: t('docs.sidebar.quickStart'),
      icon: <Zap size={18} />,
      items: [
        { id: 'intro', label: t('docs.sidebar.items.intro') },
        { id: 'build', label: t('docs.sidebar.items.build') },
        { id: 'best-practices', label: t('docs.sidebar.items.bestPractices') }
      ]
    },
    {
      title: t('docs.sidebar.agentManagement'),
      icon: <Cpu size={18} />,
      items: [
        { id: 'playground', label: t('docs.sidebar.items.playground') },
        { id: 'data-sources', label: t('docs.sidebar.items.dataSources') },
        { id: 'deploy', label: t('docs.sidebar.items.deploy') },
        { id: 'settings', label: t('docs.sidebar.items.settings') },
        { id: 'behavior', label: t('docs.sidebar.items.behavior') }
      ]
    },
    {
      title: t('docs.sidebar.monitoring'),
      icon: <BarChart3 size={18} />,
      items: [
        { id: 'activity', label: t('docs.sidebar.items.activity') },
        { id: 'analytics', label: t('docs.sidebar.items.analytics') }
      ]
    },
    {
      title: t('docs.sidebar.integrations'),
      icon: <LayoutGrid size={18} />,
      items: [
        { type: 'label', label: t('docs.sidebar.items.channels') },
        { id: 'web-chat', label: t('docs.sidebar.items.webChat'), indented: true },
        { id: 'help-center', label: t('docs.sidebar.items.helpCenter'), indented: true },
        { id: 'whatsapp', label: t('docs.sidebar.items.whatsapp'), indented: true },
        { id: 'messenger', label: t('docs.sidebar.items.messenger'), indented: true },
        { id: 'instagram', label: t('docs.sidebar.items.instagram'), indented: true },
        { id: 'telegram', label: t('docs.sidebar.items.telegram'), indented: true },
        { id: 'line', label: t('docs.sidebar.items.line'), indented: true }
      ]
    },
    {
      title: t('docs.sidebar.solutions'),
      icon: <Rocket size={18} />,
      items: [
        { id: 'ecommerce', label: t('docs.sidebar.items.ecommerce') },
        { id: 'saas', label: t('docs.sidebar.items.saas') },
        { id: 'education', label: t('docs.sidebar.items.education') },
        { id: 'real-estate', label: t('docs.sidebar.items.realEstate') },
        { id: 'insurance', label: t('docs.sidebar.items.insurance') },
        { id: 'condos', label: t('docs.sidebar.items.condos') }
      ]
    },
    {
      title: t('docs.sidebar.resources'),
      icon: <BookOpen size={18} />,
      items: [
        { id: 'blog', label: t('docs.sidebar.items.blog') },
        { id: 'success-stories', label: t('docs.sidebar.items.successStories') }
      ]
    }
  ];

  const renderContent = () => {
    if (selectedArticle) {
      const post = blogPosts.find(p => p.id === selectedArticle);
      return (
        <div className={styles.articleContent}>
          <div className={styles.backLink} onClick={() => setSelectedArticle(null)}>
            <ChevronLeft size={20} /> {t('docs.blog.backLink') || 'Back to blog'}
          </div>
          
          <img src={post.image} alt={post.title} className={styles.articleCoverImage} />

          <div className={styles.articleHero}>
            <div className={styles.badge}>{post.category}</div>
            <h1 className={styles.title}>{post.title}</h1>
            
            <div className={styles.readingTime}>
              <Clock size={16} /> {post.readingTime} {t('docs.readingTime') || 'read'}
            </div>

            <div className={styles.authorInfo}>
               <div className={styles.authorAvatar}>HC</div>
               <div className={styles.authorDetails}>
                  <h5>{post.author}</h5>
                  <p>{post.date}</p>
               </div>
            </div>
          </div>

          <div className={styles.articleMeta}>
            <div className={styles.articleSummary}>
              {post.summary}
            </div>
            
            <div className={styles.tocContainer}>
              <h4>{t('docs.tableOfContents') || 'In this article'}</h4>
              <ul className={styles.tocList}>
                {post.toc.map((item, index) => (
                  <li key={index} className={styles.tocItem}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div 
            className={styles.markdownBody} 
            style={{ lineHeight: 1.8 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className={styles.ctaBannerBlack} style={{ marginTop: '4rem' }}>
            <h3>{t('docs.blog.ctaArticleTitle') || 'Ready to implement these strategies?'}</h3>
            <p>{t('docs.blog.ctaArticleText') || "Don't let your competition get ahead. Start using Kraken AI today."}</p>
            <a href="#" className={styles.ctaButton}>{t('docs.blog.ctaArticleBtn') || 'Try Kraken AI Free'}</a>
          </div>
        </div>
      );
    }

    if (selectedStory) {
      const story = successStories.find(s => s.id === selectedStory);
      return (
        <div className={styles.articleContent}>
          <div className={styles.backLink} onClick={() => setSelectedStory(null)}>
            <ChevronLeft size={20} /> {t('docs.successStories.backLink') || 'Back to success stories'}
          </div>
          <div className={styles.articleHero}>
            <div className={styles.badge}>{story.label}</div>
            <h1 className={styles.title}>{story.title}</h1>
            <div className={styles.successHero} style={{ margin: '2rem 0' }}>
               <div className={styles.successStat}>{story.stat}</div>
               <div className={styles.successLabel}>{story.label}</div>
            </div>
          </div>
          <div 
            className={styles.markdownBody} 
            style={{ lineHeight: 1.8 }}
            dangerouslySetInnerHTML={{ __html: story.content }}
          />
          <div className={styles.caseQuote}>
            {story.quote}
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'intro':
        return (
          <>
            <div className={styles.badge}>{t('docs.intro.badge')}</div>
            <h1 className={styles.title}>{t('docs.intro.title')}</h1>
            
            <section className={styles.section}>
              <h2>{t('docs.intro.welcome.title')}</h2>
              <p className={styles.text}>
                {t('docs.intro.welcome.text')}
              </p>
            </section>
            
            <section className={styles.section}>
              <h2>{t('docs.intro.whatIs.title')}</h2>
              <p className={styles.text}>
                {t('docs.intro.whatIs.text')}
              </p>
            </section>

            <section className={styles.section}>
              <h2>{t('docs.intro.pillars.title')}</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>{t('docs.intro.pillars.automation.title')}</h4>
                  <p>{t('docs.intro.pillars.automation.desc')}</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>{t('docs.intro.pillars.connectivity.title')}</h4>
                  <p>{t('docs.intro.pillars.connectivity.desc')}</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>{t('docs.intro.pillars.intelligence.title')}</h4>
                  <p>{t('docs.intro.pillars.intelligence.desc')}</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>{t('docs.intro.pillars.actionability.title')}</h4>
                  <p>{t('docs.intro.pillars.actionability.desc')}</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>{t('docs.intro.impact.title')}</h2>
              <div className={styles.impactBanner}>
                <p>{t('docs.intro.impact.text')}</p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>{t('docs.intro.gettingStarted.title')}</h2>
              <p className={styles.text}>{t('docs.intro.gettingStarted.text')}</p>
              <ol className={styles.orderedList}>
                <li>
                  <div className={styles.stepContent}>
                    <h4>{t('docs.intro.gettingStarted.step1.title')}</h4>
                    <p>{t('docs.intro.gettingStarted.step1.desc')}</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <h4>{t('docs.intro.gettingStarted.step2.title')}</h4>
                    <p>{t('docs.intro.gettingStarted.step2.desc')}</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <h4>{t('docs.intro.gettingStarted.step3.title')}</h4>
                    <p>{t('docs.intro.gettingStarted.step3.desc')}</p>
                  </div>
                </li>
              </ol>
              <div className={styles.callout}>
                <div className={styles.calloutTitle}><Info size={20} /> {t('docs.intro.help.title')}</div>
                <p className={styles.calloutText}>
                  {t('docs.intro.help.text')}
                </p>
              </div>
            </section>
          </>
        );

      case 'build':
        return (
          <>
            <div className={styles.badge}>{t('docs.build.badge')}</div>
            <h1 className={styles.title}>{t('docs.build.title')}</h1>
            <p className={styles.lead}>
              {t('docs.build.intro')}
            </p>

            <section className={styles.section}>
              <h2>{t('docs.build.requirements.title')}</h2>
              <ul className={styles.list}>
                {t('docs.build.requirements.list').map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2>{t('docs.build.step1.title')}</h2>
              <ol className={styles.orderedList}>
                <li>
                  <div className={styles.stepContent}>
                    <p className={styles.text}>{t('docs.build.step1.dashboard')}</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <p className={styles.text}>{t('docs.build.step1.newAgent')}</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <p className={styles.text}>{t('docs.build.step1.nameAndLanguage')}</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <p className={styles.text}>{t('docs.build.step1.tone')}</p>
                  </div>
                </li>
              </ol>
              <div className={styles.callout}>
                <div className={styles.calloutTitle}><Info size={20} /> {t('docs.build.step1.tip.title')}</div>
                <p className={styles.calloutText}>
                  {t('docs.build.step1.tip.text')}
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>{t('docs.build.step2.title')}</h2>
              <p className={styles.text}>
                {t('docs.build.step2.text')}
              </p>
              <ol className={styles.orderedList}>
                <li>
                  <div className={styles.stepContent}>
                    <p className={styles.text}>{t('docs.build.step2.sourcesTab')}</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <p className={styles.text}>{t('docs.build.step2.addSource')}</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <p className={styles.text}>{t('docs.build.step2.sourceTypes.title')}</p>
                    <ul className={styles.list} style={{ marginTop: '1rem' }}>
                      <li>{t('docs.build.step2.sourceTypes.files')}</li>
                      <li>{t('docs.build.step2.sourceTypes.website')}</li>
                      <li>{t('docs.build.step2.sourceTypes.googleDrive')}</li>
                      <li>{t('docs.build.step2.sourceTypes.qa')}</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <p className={styles.text}>{t('docs.build.step2.trainedStatus')}</p>
                  </div>
                </li>
              </ol>
            </section>

            <section className={styles.section}>
              <h2>{t('docs.build.step3.title')}</h2>
              <p className={styles.text}>
                {t('docs.build.step3.text')}
              </p>
              <ol className={styles.orderedList}>
                <li>
                  <div className={styles.stepContent}>
                    <p className={styles.text}>{t('docs.build.step3.playgroundTab')}</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <p className={styles.text}>{t('docs.build.step3.askQuestion')}</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <p className={styles.text}>{t('docs.build.step3.debugMode')}</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <p className={styles.text}>{t('docs.build.step3.adjust')}</p>
                  </div>
                </li>
              </ol>
            </section>

            <section className={styles.section}>
              <h2>{t('docs.build.nextSteps.title')}</h2>
              <p className={styles.text}>{t('docs.build.nextSteps.text')}</p>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('deploy')}>
                  <h4>{t('docs.build.nextSteps.deploy.title')}</h4>
                  <p>{t('docs.build.nextSteps.deploy.desc')}</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('whatsapp')}>
                  <h4>{t('docs.build.nextSteps.whatsapp.title')}</h4>
                  <p>{t('docs.build.nextSteps.whatsapp.desc')}</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('playground')}>
                  <h4>{t('docs.build.nextSteps.actions.title')}</h4>
                  <p>{t('docs.build.nextSteps.actions.desc')}</p>
                </div>
              </div>
            </section>
          </>
        );

      case 'best-practices':
        return (
          <>
            <div className={styles.badge}>{t('docs.bestPractices.badge')}</div>
            <h1 className={styles.title}>{t('docs.bestPractices.title')}</h1>
            <p className={styles.lead}>
              {t('docs.bestPractices.lead')}
            </p>

            <section className={styles.section}>
              <h2>{t('docs.bestPractices.dataQuality.title')}</h2>
              <p className={styles.text}>
                {t('docs.bestPractices.dataQuality.text')}
              </p>
              <ul className={styles.list}>
                {t('docs.bestPractices.dataQuality.list').map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2>{t('docs.bestPractices.personality.title')}</h2>
              <p className={styles.text}>
                {t('docs.bestPractices.personality.text')}
              </p>
              <ul className={styles.list}>
                {t('docs.bestPractices.personality.list').map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className={styles.callout}>
                <div className={styles.calloutTitle}><Settings size={20} /> {t('docs.bestPractices.personality.note.title')}</div>
                <p className={styles.calloutText}>
                  {t('docs.bestPractices.personality.note.text')}
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>{t('docs.bestPractices.hybrid.title')}</h2>
              <p className={styles.text}>
                {t('docs.bestPractices.hybrid.text')}
              </p>
              <ul className={styles.list}>
                {t('docs.bestPractices.hybrid.list').map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2>{t('docs.bestPractices.cycle.title')}</h2>
              <div className={styles.pillarGrid}>
                {t('docs.bestPractices.cycle.steps').map((step, i) => (
                  <div key={i} className={styles.pillarCard}>
                    <h4>{t('docs.common.step') || 'Step'} {i + 1}</h4>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2>{t('docs.bestPractices.nextSteps.title')}</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('build')}>
                  <h4>{t('docs.bestPractices.nextSteps.build.title')}</h4>
                  <p>{t('docs.bestPractices.nextSteps.build.desc')}</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('playground')}>
                  <h4>{t('docs.bestPractices.nextSteps.playground.title')}</h4>
                  <p>{t('docs.bestPractices.nextSteps.playground.desc')}</p>
                </div>
              </div>
            </section>
          </>
        );

      case 'playground':
        return (
          <>
            <div className={styles.badge}>{t('docs.playground.badge')}</div>
            <h1 className={styles.title}>{t('docs.playground.title')}</h1>
            <p className={styles.lead}>
              {t('docs.playground.lead')}
            </p>

            <section className={styles.section}>
              <h2>Key Features</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>Real-Time Simulation</h4>
                  <p>Test exactly how your agent will behave on your website, WhatsApp, or Messenger.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Debug Mode</h4>
                  <p>The AI shows "Sources" for each response. You can see the exact chunks from your documents that underpin the answer.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Selector de modelos</h4>
                  <p>Pruebe el rendimiento de diferentes modelos (GPT-4o, Claude 3.5 Sonnet) con sus datos para encontrar el equilibrio perfecto.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Visor de variables</h4>
                  <p>Realice un seguimiento de los datos capturados (nombre, correo, ID de pedido) que la IA extrae durante la charla.</p>
                </div>
              </div>
              <div className={styles.callout}>
                <div className={styles.calloutTitle}><Play size={20} /> Pruebas de instrucciones</div>
                <p className={styles.calloutText}>
                  Instantly see how changes to the "Personality" settings in the dashboard affect the AI's tone and behavior in real time.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Estrategia de pruebas</h2>
              <ul className={styles.list}>
                <li><strong>Ask about edge cases:</strong> Don't just ask easy questions. Try to confuse the bot to see the limits of its knowledge.</li>
                <li><strong>Verify citations:</strong> Make sure the AI cites the correct documents. If it cites the wrong page, your data may be too redundant.</li>
                <li><strong>Reset Session:</strong> Use the "Clear Chat" button to start fresh and test lead capture flows from the beginning.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Next Steps</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('best-practices')}>
                  <h4>Best Practices</h4>
                  <p>Tips for optimal AI performance.</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('data-sources')}>
                  <h4>Fuentes de datos</h4>
                  <p>Aprende a gestionar el conocimiento de tu agente.</p>
                </div>
              </div>
            </section>
          </>
        );

      case 'data-sources':
        return (
          <>
            <div className={styles.badge}>{t('docs.dataSources.badge')}</div>
            <h1 className={styles.title}>{t('docs.dataSources.title')}</h1>
            <p className={styles.lead}>
              {t('docs.dataSources.lead')}
            </p>

            <section className={styles.section}>
              <h2>Supported Types & Limits</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>Archivos</h4>
                  <p>PDF, DOCX, TXT, CSV, MD. Max 20 MB per file. Simultaneous uploads allowed.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Texto</h4>
                  <p>Paste internal policies or snippets that aren't in an official document directly.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Sitios Web</h4>
                  <p>Smart crawler that automatically indexes public pages and internal links.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Google Drive</h4>
                  <p>Connect specific folders. New files will be indexed automatically.</p>
                </div>
              </div>
              <div className={styles.callout} style={{ marginTop: '1.5rem' }}>
                <div className={styles.calloutTitle}><Zap size={20} /> Preguntas y respuestas (Q&A)</div>
                <p className={styles.calloutText}>
                  Q&A pairs have the <strong>highest priority</strong>. If a question matches exactly, Kraken will use that manual answer instead of searching documents.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Citas de conocimiento</h2>
              <p className={styles.text}>
                When your agent responds, it can provide automatic bibliographic references. The user will see a link indicating <strong>"Source: [Document Name]"</strong>, which builds great trust and transparency.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Bucle de reentrenamiento</h2>
              <p className={styles.text}>
                When modifying a source, the status will change to "Pending". Click <strong>"Retrain Agent"</strong> to update the AI's brain. This process typically takes 30–90 seconds.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Next Steps</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('playground')}>
                  <h4>Patio de juegos</h4>
                  <p>Prueba tus nuevas fuentes de datos en tiempo real.</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('deploy')}>
                  <h4>Desplegar</h4>
                  <p>Lleva tu agente al mundo real en pocos clics.</p>
                </div>
              </div>
            </section>
          </>
        );

      case 'deploy':
        return (
          <>
            <div className={styles.badge}>{t('docs.deploy.badge')}</div>
            <h1 className={styles.title}>{t('docs.deploy.title')}</h1>
            <p className={styles.lead}>
              {t('docs.deploy.lead')}
            </p>

            <section className={styles.section}>
              <h2>Canales activos</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>Widget de chat web</h4>
                  <p>The most common deployment. Integrate it into your marketing website, app, or help center.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Messaging Apps</h4>
                  <p>Conecta cuentas oficiales de WhatsApp Business, Facebook Messenger, Instagram o Telegram.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Collaboration</h4>
                  <p>Add your bot to Slack or Microsoft Teams to provide internal employee support.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Email</h4>
                  <p>Automate your inbox with AI-drafted responses for email support.</p>
                </div>
              </div>
              <div className={styles.callout} style={{ marginTop: '1.5rem' }}>
                <div className={styles.calloutTitle}><Globe size={20} /> Help Page</div>
                <p className={styles.calloutText}>
                  Kraken offers a standalone page hosted at <code>yourcompany.kraken.ai</code> for businesses without their own website.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Estrategia de despliegue</h2>
              <ul className={styles.list}>
                <li><strong>Start with Web Chat:</strong> Test your knowledge base with real web traffic before opening higher-volume channels like WhatsApp.</li>
                <li><strong>Unified Inbox:</strong> Regardless of the message origin, all conversations appear in the <strong>Activity</strong> tab for human oversight.</li>
                <li><strong>Status Monitoring:</strong> The "Connect" tab shows real-time status. If a WhatsApp token expires or a script is missing, you'll see an alert there.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Next Steps</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('data-sources')}>
                  <h4>Fuentes de datos</h4>
                  <p>Make sure your knowledge base is up to date.</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('settings')}>
                  <h4>Ajustes</h4>
                  <p>Configure the technical and global details of your agent.</p>
                </div>
              </div>
            </section>
          </>
        );

      case 'settings':
        return (
          <>
            <div className={styles.badge}>{t('docs.settings.badge')}</div>
            <h1 className={styles.title}>{t('docs.settings.title')}</h1>
            <p className={styles.lead}>
              {t('docs.settings.lead')}
            </p>

            <section className={styles.section}>
              <h2>Personaje y tono</h2>
              <p className={styles.text}>
                Define la identidad visual y verbal de tu agente para que se alinee con tu marca.
              </p>
              <ul className={styles.list}>
                <li><strong>Nombre del agente:</strong> Aparece en el encabezado del chat (por ejemplo, "Sarah de Soporte").</li>
                <li><strong>Avatar:</strong> Sube el logotipo de tu marca o una foto de una persona que te represente de forma amigable.</li>
                <li><strong>System Instructions:</strong> The most powerful setting. Tell the AI exactly how it should behave.</li>
              </ul>
              
              <div className={styles.callout} style={{ marginTop: '1.5rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <div className={styles.calloutTitle} style={{ color: '#0f172a' }}><MessageSquare size={20} /> Ejemplo de instrucciones</div>
                <div style={{ marginTop: '1rem' }}>
                  <p style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '0.5rem' }}>❌ <strong>Malo:</strong> "Ayude al usuario."</p>
                  <p style={{ color: '#10b981', fontSize: '0.9rem' }}>✅ <strong>Good:</strong> "You are a professional support agent for Acme Corp. You are friendly, concise, and never use technical jargon. If a user is frustrated, immediately offer them the option to speak with a human agent."</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Comportamiento y seguridad</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>Umbral de confianza</h4>
                  <p>If the AI is less than 70% confident (recommended), it will say "I don't know" instead of guessing.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Model Selection</h4>
                  <p>Choose between GPT-4o (standard), Claude 3.5 (best tone), or DeepSeek-V3 (cost-effective volume).</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Rate Limiting</h4>
                  <p>Prevents abuse by limiting the number of messages a user can send per minute.</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Seguimiento del flujo de trabajo</h2>
              <p className={styles.text}>
                Kraken automatically tracks key milestones in a conversation called "Workflows". This helps you measure conversion, not just conversation.
              </p>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>Lead Cualificado</h4>
                  <p>Se activa cuando un usuario proporciona su correo y cumple con tus criterios.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Meeting Booked</h4>
                  <p>Se activa cuando se reserva un espacio en el calendario integrado.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Pago Completado</h4>
                  <p>Triggered after a successful payment process via Stripe.</p>
                </div>
              </div>
              <div className={styles.callout} style={{ marginTop: '1.5rem' }}>
                <div className={styles.calloutTitle}><Info size={20} /> CRM Integration</div>
                <p className={styles.calloutText}>
                  Stages are stored in conversation metadata and can be synced with your CRM via webhooks.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Next Steps</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('deploy')}>
                  <h4>Desplegar</h4>
                  <p>Publica tu agente en los canales.</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('behavior')}>
                  <h4>Comportamiento</h4>
                  <p>Learn more about how the AI responds.</p>
                </div>
              </div>
            </section>
          </>
        );

      case 'behavior':
        return (
          <>
            <div className={styles.badge}>{t('docs.behavior.badge')}</div>
            <h1 className={styles.title}>{t('docs.behavior.title')}</h1>
            <p className={styles.lead}>
              {t('docs.behavior.lead')}
            </p>

            <section className={styles.section}>
              <h2>How Does an Action Work?</h2>
              <p className={styles.text}>
                The tool execution process follows a logical five-step cycle:
              </p>
              <ol className={styles.orderedList}>
                <li>
                  <div className={styles.stepContent}>
                    <h4>Desencadenante</h4>
                    <p>The user asks a question that requires an action (e.g., "Where is my order?").</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <h4>Extraction</h4>
                    <p>The AI understands the intent and extracts the required parameters (e.g., order_id: "12345").</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <h4>Execution</h4>
                    <p>Kraken securely calls the connected API (e.g., Shopify) with that parameter.</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <h4>Respuesta</h4>
                    <p>The API returns the requested technical data (e.g., status: "Shipped").</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <h4>Synthesis</h4>
                    <p>The AI formulates a natural language response: "Your order #12345 has been shipped and will arrive this Friday!"</p>
                  </div>
                </li>
              </ol>
            </section>

            <section className={styles.section}>
              <h2>Acciones nativas frente a webhooks</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>Acciones Nativas</h4>
                  <p>One-click integrations for <strong>Shopify, Stripe, Google Calendar, and Gmail</strong>. We handle the technical mapping.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Webhooks Personalizados</h4>
                  <p>Connect your own internal API or any CRM. You define the endpoint and the fields you want the AI to capture.</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Best Practices</h2>
              <ul className={styles.list}>
                <li><strong>Clear Labels:</strong> Assign descriptive names to your actions so the AI knows exactly when to use them (e.g., "Check_Stock").</li>
                <li><strong>Safety Confirmation:</strong> For sensitive actions (like "Cancel Subscription" or "Refund"), configure the AI to always ask: "Are you sure you want to proceed?".</li>
                <li><strong>Error Handling:</strong> Define what the agent should say if the API doesn't respond or the order ID is invalid.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Next Steps</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('settings')}>
                  <h4>Ajustes</h4>
                  <p>Configura la personalidad global de tu agente.</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('activity')}>
                  <h4>Actividad</h4>
                  <p>Supervisa las conversaciones y acciones en tiempo real.</p>
                </div>
              </div>
            </section>
          </>
        );

      case 'activity':
        return (
          <>
            <div className={styles.badge}>{t('docs.activity.badge')}</div>
            <h1 className={styles.title}>{t('docs.activity.title')}</h1>
            <p className={styles.lead}>
              {t('docs.activity.lead')}
            </p>

            <section className={styles.section}>
              <h2>Sentiment Analysis Algorithm</h2>
              <p className={styles.text}>
                Kraken uses an advanced AI model to analyze the emotional context of each chat, based on the last 20 messages.
              </p>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4 style={{ color: '#10b981' }}>Positivo</h4>
                  <p>Detecta gratitud, elogios o entusiasmo. Ideal para identificar testimonios.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4 style={{ color: '#6b7280' }}>Neutral</h4>
                  <p>Standard queries or technical questions with no apparent emotional charge.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4 style={{ color: '#ef4444' }}>Negativo</h4>
                  <p>Frustration, complaints, or repeated requests for clarification.</p>
                </div>
              </div>
              <div className={styles.callout} style={{ marginTop: '1.5rem' }}>
                <div className={styles.calloutTitle}><Activity size={20} /> Optimization Tip</div>
                <p className={styles.calloutText}>
                  Filter your logs by "Negative" to find improvement opportunities. These chats usually reveal gaps in your knowledge base or unclear instructions.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Capacidad de transferencia humana</h2>
              <p className={styles.text}>
                La IA es el primer frente, pero Kraken facilita el paso a un humano cuando es necesario:
              </p>
              <ul className={styles.list}>
                <li><strong>"Agent Pending" Status:</strong> Automatically triggered if the customer requests it or if the AI detects critical frustration.</li>
                <li><strong>Multi-channel Notifications:</strong> Receive instant alerts in your dashboard and linked Slack channels or email.</li>
                <li><strong>Manual Control:</strong> Click <strong>"Take Control"</strong> to pause the AI and respond yourself from the interface.</li>
                <li><strong>Internal Notes:</strong> Leave comments only your team can see (e.g., "Escalating to billing") to maintain context between agents.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Next Steps</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('behavior')}>
                  <h4>Comportamiento</h4>
                  <p>Adjust how your agent responds to different scenarios.</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('analytics')}>
                  <h4>Analytics</h4>
                  <p>Mide el rendimiento global de tu flota de agentes.</p>
                </div>
              </div>
            </section>
          </>
        );

      case 'analytics':
        return (
          <>
            <div className={styles.badge}>{t('docs.analytics.badge')}</div>
            <h1 className={styles.title}>{t('docs.analytics.title')}</h1>
            <p className={styles.lead}>
              {t('docs.analytics.lead')}
            </p>

            <section className={styles.section}>
              <h2>Key Metrics</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>Volumen de conversaciones</h4>
                  <p>Records total chats over 24 hours, 7 days, or 30 days to understand demand peaks.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Deflection Rate</h4>
                  <p>Percentage of chats the AI resolved without human intervention. The goal is to maximize this value.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Uso de tokens</h4>
                  <p>Controla tus costes. Mostramos el total y el promedio por chat para ayudarte a estimar la escala.</p>
                </div>
              </div>
              <div className={styles.callout} style={{ marginTop: '1.5rem' }}>
                <div className={styles.calloutTitle}><Cpu size={20} /> Deflection Formula</div>
                <p className={styles.calloutText}>
                  <code>(Total de Chats - Chats con Agente Pendiente) / Total de Chats</code>
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Desglose por canal</h2>
              <p className={styles.text}>
                See exactly where your customers come from to prioritize resources:
              </p>
              <ul className={styles.list}>
                <li><strong>Web Widget:</strong> Direct traffic from your website or app.</li>
                <li><strong>WhatsApp:</strong> Fast, direct messaging support.</li>
                <li><strong>Email:</strong> Automatic AI-analyzed responses.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Temas principales</h2>
              <p className={styles.text}>
                Kraken uses AI to group questions into automatic semantic clusters:
              </p>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>Pricing & Billing</h4>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Technical Issues</h4>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Logistics / Shipping</h4>
                </div>
              </div>
              <p className={styles.text} style={{ marginTop: '1rem' }}>
                Use this information to decide which new help articles to write or which instructions to reinforce in your agent.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Next Steps</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('activity')}>
                  <h4>Actividad</h4>
                  <p>View the detail of each analyzed conversation.</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('web-chat')}>
                  <h4>Chat web</h4>
                  <p>Personaliza la interfaz donde ocurren las conversaciones.</p>
                </div>
              </div>
            </section>
          </>
        );

      case 'web-chat':
        return (
          <>
            <div className={styles.badge}>{t('docs.webChat.badge')}</div>
            <h1 className={styles.title}>{t('docs.webChat.title')}</h1>
            <p className={styles.lead}>
              {t('docs.webChat.lead')}
            </p>

            <section className={styles.section}>
              <h2>What Does It Do?</h2>
              <p className={styles.text}>
                El widget de chat web es una interfaz flotante ligera que permite a los visitantes del sitio chatear con tu agente de IA en tiempo real. Kraken utiliza modelos avanzados para comprender el lenguaje natural y proporcionar respuestas inteligentes y contextuales.
              </p>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>Instant Installation</h4>
                  <p>Copy a single line of code and paste it before the closing <code>&lt;/body&gt;</code>.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Marca Personalizada</h4>
                  <p>Adapt your logo, colors, fonts, and avatar to match your design.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Multilingüe</h4>
                  <p>Automatically detects the visitor's language (supports 90+ languages).</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Quick Installation</h2>
              <div className={styles.stepContent}>
                <h4>Step 1: Get Your Code</h4>
                <p>Ve a <strong>Implementar → Chat web</strong> en tu panel de control, personaliza la apariencia y copia el fragmento generado.</p>
              </div>
              <div className={styles.stepContent} style={{ marginTop: '1.5rem' }}>
                <h4>Step 2: Add It to Your Site</h4>
                <pre className={styles.codeBlock}>
{`<script 
  src="https://widget.kraken.ai/v1/loader.js" 
  data-agent-id="TU_ID_DE_AGENTE">
</script>`}
                </pre>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Instrucciones por plataforma</h2>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Plataforma</th>
                    <th>Code Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>WordPress</strong></td>
                    <td>Apariencia → Editor de temas → footer.php</td>
                  </tr>
                  <tr>
                    <td><strong>Wix</strong></td>
                    <td>Settings → Custom Code → Body - End</td>
                  </tr>
                  <tr>
                    <td><strong>Webflow</strong></td>
                    <td>Project Settings → Custom Code → Footer</td>
                  </tr>
                  <tr>
                    <td><strong>Shopify</strong></td>
                    <td>Online Store → Themes → Edit Code → theme.liquid</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className={styles.section}>
              <h2>Rendimiento y Velocidad</h2>
              <ul className={styles.list}>
                <li><strong>Lightweight:</strong> Under 30 KB (async loading).</li>
                <li><strong>Core Web Vitals:</strong> Sin impacto negativo en LCP, CLS o FID.</li>
                <li><strong>Lazy Loading:</strong> The widget loads after the main page content.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Next Steps</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('analytics')}>
                  <h4>Analytics</h4>
                  <p>Measure how many visitors interact with the widget.</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('help-center')}>
                  <h4>Help Page</h4>
                  <p>Crea un centro de ayuda independiente alojado por Kraken.</p>
                </div>
              </div>
            </section>
          </>
        );

      case 'help-center':
        return (
          <>
            <div className={styles.badge}>{t('docs.helpCenter.badge')}</div>
            <h1 className={styles.title}>{t('docs.helpCenter.title')}</h1>
            <p className={styles.lead}>
              A standalone AI support page hosted at <code>yourname.kraken.ai</code>. Perfect if you don't have a website yet, need an internal help portal, or want a dedicated support URL.
            </p>

            <section className={styles.section}>
              <h2>What Does It Do?</h2>
              <p className={styles.text}>
                The Help Page gives you an attractive, personalized support portal without building anything. Share the link anywhere (email signatures, QR codes, social media profiles, product packaging) and visitors get instant AI-powered answers.
              </p>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>No Code Required</h4>
                  <p>Up and running in 2 minutes, no technical setup.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Custom Subdomain</h4>
                  <p>Your own secure subdomain at <code>yourname.kraken.ai</code></p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Optimizado para SEO</h4>
                  <p>Pages are indexed by Google, so customers find answers through search.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>100% de tiempo de actividad</h4>
                  <p>Nos encargamos del alojamiento, el certificado SSL y el mantenimiento.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Mobile-Ready</h4>
                  <p>Works perfectly on phones and tablets.</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Setup Steps</h2>
              <div className={styles.stepContent}>
                <h4>Step 1: Create Your Page</h4>
                <p>Go to <strong>Deploy → Help Page</strong> in Kraken. Choose your subdomain, upload your logo, and set your brand colors.</p>
              </div>
              <div className={styles.stepContent} style={{ marginTop: '1.5rem' }}>
                <h4>Step 2: Add Knowledge</h4>
                <p>Upload FAQs, PDF files, documentation, or paste text content directly. You can also scrape content from your existing website.</p>
              </div>
              <div className={styles.stepContent} style={{ marginTop: '1.5rem' }}>
                <h4>Paso 3: Comparte el enlace</h4>
                <p>Your page is now live! Share the URL in your email signature, social media bio, product QR codes, or onboarding emails.</p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Casos de uso</h2>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Escenario</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>No Website Yet</strong></td>
                    <td>Your app is already live but the marketing website is under development.</td>
                  </tr>
                  <tr>
                    <td><strong>Herramienta interna</strong></td>
                    <td>Portal de soporte para un equipo interno o procesos corporativos.</td>
                  </tr>
                  <tr>
                    <td><strong>Soporte de producto</strong></td>
                    <td>The QR code on physical packaging links directly to the support page.</td>
                  </tr>
                  <tr>
                    <td><strong>Enlace social</strong></td>
                    <td>"Send a DM for help" → Link to the help page in your bio.</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className={styles.section}>
              <h2>Next Steps</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('web-chat')}>
                  <h4>Chat web</h4>
                  <p>Integra la IA directamente en tu sitio web actual.</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('whatsapp')}>
                  <h4>WhatsApp</h4>
                  <p>Connect your agents to the world's most-used messaging app.</p>
                </div>
              </div>
            </section>
          </>
        );

      case 'whatsapp':
        return (
          <>
            <div className={styles.badge}>{t('docs.whatsapp.badge')}</div>
            <h1 className={styles.title}>{t('docs.whatsapp.title')}</h1>
            <p className={styles.lead}>
              Connect your WhatsApp Business number to Kraken and automate conversations with your customers on the world's most popular messaging app.
            </p>

            <section className={styles.section}>
              <h2>What Does It Do?</h2>
              <p className={styles.text}>
                Kraken uses the official WhatsApp Cloud API (Meta's official solution) to send and receive messages. Your AI agent can answer questions, send multimedia content, and trigger template messages, all in compliance with WhatsApp policies.
              </p>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>API oficial en la nube</h4>
                  <p>Enterprise-grade, 100% aligned with Meta policies.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Contenido multimedia</h4>
                  <p>Send and receive images, PDF files, voice notes, and locations.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Template Broadcasting</h4>
                  <p>Send proactive messages like shipping updates or reminders.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Instant Replies</h4>
                  <p>Average response time under 2 seconds.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Multilingüe</h4>
                  <p>Automatically detects the customer's language and responds consistently.</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Requisitos previos</h2>
              <p className={styles.text}>Before starting the connection, make sure you have:</p>
              <ul className={styles.list}>
                <li><strong>Cuenta de Meta Business Manager:</strong> Acceso a business.facebook.com.</li>
                <li><strong>Clean Phone Number:</strong> A number not currently registered on WhatsApp.</li>
                <li><strong>Business Verification:</strong> Required for production environments and scale.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Setup Guide</h2>
              <div className={styles.stepContent}>
                <h4>Step 1: Meta Developer Setup</h4>
                <p>Visit <strong>developers.facebook.com</strong>, create a new "Business" type app, and add the WhatsApp product from the API configuration panel.</p>
              </div>
              <div className={styles.stepContent} style={{ marginTop: '1.5rem' }}>
                <h4>Paso 2: Configurar Webhook en Meta</h4>
                <p>In Kraken, go to <strong>Deploy → WhatsApp</strong> and copy the callback URL. Paste it into the Meta portal under Settings → Webhook and subscribe to messages.</p>
              </div>
              <div className={styles.stepContent} style={{ marginTop: '1.5rem' }}>
                <h4>Step 3: Connect Your Number</h4>
                <p>Add your number in the Meta portal, verify it via SMS, and copy the number ID and access token into Kraken's settings to finalize the connection.</p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Mensajes de plantilla</h2>
              <p className={styles.text}>WhatsApp requiere plantillas preaprobadas para iniciar conversaciones proactivas:</p>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Tipo de plantilla</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Order Confirmation</strong></td>
                    <td>"Your order #1234 has been confirmed!"</td>
                  </tr>
                  <tr>
                    <td><strong>Shipping Update</strong></td>
                    <td>"Your package is out for delivery and will arrive today."</td>
                  </tr>
                  <tr>
                    <td><strong>Recordatorio de cita</strong></td>
                    <td>"Reminder: Your appointment is tomorrow at 3:00 PM."</td>
                  </tr>
                  <tr>
                    <td><strong>Marketing</strong></td>
                    <td>"New arrivals just in! Check them out."</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className={styles.section} style={{ background: '#fef2f2', padding: '1.5rem', borderRadius: '12px', border: '1px solid #fee2e2' }}>
              <h2 style={{ color: '#991b1b', marginTop: 0 }}>Notas importantes</h2>
              <ul className={styles.list} style={{ color: '#b91c1c' }}>
                <li><strong>24-Hour Window:</strong> You can only reply to customers within 24 hours of their last message.</li>
                <li><strong>Message Limits:</strong> Business verification is required to send more than 1,000 messages per day.</li>
                <li><strong>Migration:</strong> If the number is already on WhatsApp, you must delete the current account before linking it to the API.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Next Steps</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('help-center')}>
                  <h4>Help Page</h4>
                  <p>Crea un portal de soporte dedicado para tu marca.</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('analytics')}>
                  <h4>Analytics</h4>
                  <p>Mide el rendimiento de tus conversaciones en WhatsApp.</p>
                </div>
              </div>
            </section>
          </>
        );
      case 'messenger':
        return (
          <>
            <div className={styles.badge}>INTEGRACIONES</div>
            <h1 className={styles.title}>Facebook Messenger</h1>
            <p className={styles.lead}>
              Automate customer support on your Facebook page with AI-powered responses.
            </p>

            <section className={styles.section}>
              <h2>What Does It Do?</h2>
              <p className={styles.text}>
                Kraken connects to your Facebook Business page and automatically responds to new Messenger conversations. The AI can answer questions using your knowledge base, handle FAQs, and escalate complex issues to your team.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Key Features</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>One-Click Connection</h4>
                  <p>Log in with Facebook, select your page, and you're done.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Automatic Replies</h4>
                  <p>La IA responde a los nuevos mensajes al instante.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Transferencia humana</h4>
                  <p>Escalada sin problemas cuando la IA no puede ayudar.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Inbox Sync</h4>
                  <p>Todas las conversaciones visibles en la bandeja de entrada unificada de Kraken.</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Setup Steps</h2>
              <div className={styles.stepContent}>
                <h4>Step 1: Start the Integration</h4>
                <p>Ve a <strong>Implementar → Messenger</strong> en tu panel de control de Kraken.</p>
              </div>
              <div className={styles.stepContent} style={{ marginTop: '1.5rem' }}>
                <h4>Step 2: Connect to Facebook</h4>
                <p>Click the "Log in with Facebook" button and select the Facebook page you want to connect.</p>
              </div>
              <div className={styles.stepContent} style={{ marginTop: '1.5rem' }}>
                <h4>Step 3: Authorization</h4>
                <p>Otorga los permisos necesarios (pages_messaging) para que el agente de IA pueda gestionar tus mensajes.</p>
              </div>
              <div className={styles.stepContent} style={{ marginTop: '1.5rem' }}>
                <h4>Step 4: Done!</h4>
                <p>Your AI agent is now active and ready to respond on Messenger.</p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Permisos necesarios</h2>
              <p className={styles.text}>Kraken solicita los siguientes permisos de Facebook para funcionar correctamente:</p>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Permiso</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>pages_messaging</code></td>
                    <td>Leer y responder a los mensajes directos.</td>
                  </tr>
                  <tr>
                    <td><code>pages_read_engagement</code></td>
                    <td>Access information for interaction analytics.</td>
                  </tr>
                  <tr>
                    <td><code>pages_manage_metadata</code></td>
                    <td>Gestionar las suscripciones de webhook en tiempo real.</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className={styles.section}>
              <h2>Pruebas</h2>
              <p className={styles.text}>After connecting, verify everything works:</p>
              <div className={styles.stepContent}>
                <ol className={styles.list}>
                  <li>Open a private or incognito browsing window.</li>
                  <li>Go to your Facebook page and click the "Send Message" button.</li>
                  <li>Send a test message related to your knowledge base.</li>
                  <li>Observe how the AI responds in real time.</li>
                </ol>
              </div>
            </section>

            <section className={styles.section} style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '12px' }}>
              <h2>Notas importantes</h2>
              <ul className={styles.list}>
                <li>Your page must be <strong>published</strong> (not in draft mode).</li>
                <li>You need the <strong>Administrator or Editor</strong> role on the Facebook page.</li>
                <li>All Messenger conversations will automatically appear in your Kraken activity log.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Next Steps</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('whatsapp')}>
                  <h4>WhatsApp</h4>
                  <p>Also connect the most popular messaging channel.</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('instagram')}>
                  <h4>Instagram</h4>
                  <p>Automatiza tus DMs de Instagram con la misma facilidad.</p>
                </div>
              </div>
            </section>
          </>
        );

      case 'instagram':
        return (
          <>
            <div className={styles.badge}>SOCIAL AUTOMATION</div>
            <h1 className={styles.title}>Instagram Direct</h1>
            <p className={styles.lead}>
              Automatiza tus mensajes directos de Instagram, menciones en historias y comentarios con IA.
            </p>

            <section className={styles.section}>
              <h2>What It Does</h2>
              <p className={styles.text}>
                Kraken connects to your Instagram Business account to manage interactions automatically. Your AI agent can answer DM questions, respond to story mentions, and even convert post comments into private sales conversations.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Capacidades principales</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>DM Automation</h4>
                  <p>Instant 24/7 responses to private inquiries.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Menciones en historias</h4>
                  <p>Automatically responds when someone tags you.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Comentario a DM</h4>
                  <p>Sends an automatic private message when someone comments a keyword (e.g., "INFO").</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Bandeja de entrada unificada</h4>
                  <p>Gestiona Instagram junto con otros canales en Kraken.</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Requisitos previos</h2>
              <ul className={styles.list}>
                <li>Cuenta de Instagram Business o Creador.</li>
                <li>Facebook page linked to the Instagram account.</li>
                <li>"Message Access" permission enabled in Instagram settings.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Setup Steps</h2>
              <div className={styles.stepContent}>
                <h4>1. Initial Connection</h4>
                <p>Ve a <strong>Implementar → Instagram</strong> en Kraken.</p>
              </div>
              <div className={styles.stepContent} style={{ marginTop: '1.5rem' }}>
                <h4>2. Authentication</h4>
                <p>Haz clic en "Conectar con Facebook" (Meta gestiona ambas plataformas).</p>
              </div>
              <div className={styles.stepContent} style={{ marginTop: '1.5rem' }}>
                <h4>3. Account Selection</h4>
                <p>Selecciona la cuenta de Instagram que deseas conectar.</p>
              </div>
              <div className={styles.stepContent} style={{ marginTop: '1.5rem' }}>
                <h4>4. Permisos</h4>
                <p>Make sure to grant all permissions requested by Meta.</p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Pruebas</h2>
              <div className={styles.stepContent}>
                <ul className={styles.list}>
                  <li>Send a direct message from a test account.</li>
                  <li>Menciona tu cuenta de empresa en una historia.</li>
                  <li>Comment on a recent post with the configured keyword.</li>
                </ul>
              </div>
            </section>

            <section className={styles.section} style={{ background: '#f9fafb', padding: '1.5rem', borderRadius: '12px' }}>
              <h2>Notas importantes</h2>
              <ul className={styles.list}>
                <li>Meta requires accounts to have the <strong>"Allow message access"</strong> option enabled in Settings → Privacy → Messages.</li>
                <li>La IA solo puede responder a mensajes de menos de 24 horas (ventana de 24 horas de Meta).</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Next Steps</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('messenger')}>
                  <h4>Messenger</h4>
                  <p>Configure automation for your Facebook page.</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('telegram')}>
                  <h4>Telegram</h4>
                  <p>Automatiza tus conversaciones en Telegram con BotFather.</p>
                </div>
              </div>
            </section>
          </>
        );

      case 'telegram':
        return (
          <>
            <div className={styles.badge}>OPEN MESSAGING</div>
            <h1 className={styles.title}>{t('docs.telegram.title')}</h1>
            <p className={styles.lead}>
              Connect your Telegram bot with Kraken to provide automated support and interactive tools through one of the most secure and versatile platforms.
            </p>

            <section className={styles.section}>
              <h2>Ventajas de Telegram</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>Sin Costos de API</h4>
                  <p>Unlike other platforms, the Telegram Bot API is completely free with no strict limits.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Comandos Personalizados</h4>
                  <p>Configura comandos como <code>/ayuda</code> o <code>/estado</code> que la IA puede interpretar y responder.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Grupos y Canales</h4>
                  <p>Kraken can moderate groups and answer FAQs in large communities automatically.</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Setup with BotFather</h2>
              <div className={styles.stepContent}>
                <h4>1. Crea tu Bot</h4>
                <p>Search for <strong>@BotFather</strong> on Telegram and send the <code>/newbot</code> command. Follow the instructions to get your username and API Token.</p>
              </div>
              <div className={styles.stepContent} style={{ marginTop: '1.5rem' }}>
                <h4>2. Linking in Kraken</h4>
                <p>Ve a Canales → Telegram en Kraken y pega el Token proporcionado por BotFather.</p>
              </div>
              <div className={styles.stepContent} style={{ marginTop: '1.5rem' }}>
                <h4>3. Configure the Menu</h4>
                <p>Usa <code>/setcommands</code> en BotFather para que los usuarios vean las opciones disponibles de tu bot de IA.</p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Next Steps</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('line')}>
                  <h4>Line</h4>
                  <p>Explore integration with Asia's leading social network.</p>
                </div>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('whatsapp')}>
                  <h4>WhatsApp</h4>
                  <p>Compare capabilities with the WhatsApp Business integration.</p>
                </div>
              </div>
            </section>
          </>
        );

      case 'line':
        return (
          <>
            <div className={styles.badge}>ASIA PACIFIC</div>
            <h1 className={styles.title}>{t('docs.line.title')}</h1>
            <p className={styles.lead}>
              Expand your reach to the Asian market by connecting Kraken with LINE. Automate customer support on one of the most popular messaging platforms in Japan, Taiwan, and Thailand.
            </p>

            <section className={styles.section}>
              <h2>Key Features</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>Mensajes Ricos</h4>
                  <p>Usa Flex Messages de LINE para mostrar productos y opciones de forma visualmente atractiva.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Cuentas Oficiales</h4>
                  <p>Native integration with LINE Official Accounts (OA) for businesses of any size.</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Connection Process</h2>
              <div className={styles.stepContent}>
                <h4>1. LINE Developers Console</h4>
                <p>Crea un proveedor y un canal de "Messaging API" en el portal de desarrolladores de LINE.</p>
              </div>
              <div className={styles.stepContent} style={{ marginTop: '1.5rem' }}>
                <h4>2. Intercambio de Secretos</h4>
                <p>Copy the "Channel Secret" and "Channel Access Token" and paste them into the LINE settings within Kraken.</p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Next Steps</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('intro')}>
                  <h4>Inicio</h4>
                  <p>Return to the general documentation introduction.</p>
                </div>
              </div>
            </section>
          </>
        );

      case 'ecommerce':
        return (
          <div className={styles.container}>
            <div className={styles.industryHeader}>
              <div className={styles.industryIcon}><ShoppingCart size={32} /></div>
              <div>
                <div className={styles.badge}>RETAIL & E-COMMERCE</div>
                <h1 className={styles.title}>{t('docs.ecommerce.title')}</h1>
              </div>
            </div>
            <p className={styles.lead}>
              Transform your online store into a 24/7 sales machine. Kraken doesn't just answer questions; it guides users to checkout, syncs inventories, and recovers sales you thought were lost.
            </p>
            
            <div className={styles.solutionGrid}>
              <div className={styles.pillarCard}>
                <h4>Rastreo de Pedidos</h4>
                <p>Native integration with Shopify, WooCommerce, and VTEX to report shipping statuses (FedEx, DHL, UPS) in real time.</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>Cart Recovery</h4>
                <p>Send smart WhatsApp reminders to users who abandoned checkout, offering dynamic coupons.</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>Recomendaciones AI</h4>
                <p>AI analyzes customer history and intent to suggest complementary products (cross-selling) with high conversion rates.</p>
              </div>
            </div>

            <section className={styles.section}>
              <h2>Flujos Automatizados de Alto Impacto</h2>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Escenario</th>
                    <th>Kraken AI Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Consulta de Stock</strong></td>
                    <td>Verifies inventory by variant and offers to notify when restocked (Back-in-stock alerts).</td>
                  </tr>
                  <tr>
                    <td><strong>Returns Management</strong></td>
                    <td>Qualifies the return reason, generates the ticket in your ERP, and sends the reverse logistics guide.</td>
                  </tr>
                  <tr>
                    <td><strong>FAQs de Producto</strong></td>
                    <td>Answers about materials, complex size guides, and technical accessory compatibility.</td>
                  </tr>
                  <tr>
                    <td><strong>Checkout Asistido</strong></td>
                    <td>Helps the user apply discount codes and resolve payment gateway errors.</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className={styles.section}>
              <div className={styles.caseQuote}>
                "Since we implemented Kraken on our Shopify, cart abandonment dropped 35% and direct WhatsApp sales increased 50% in the first quarter."
                <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>— E-commerce Director, Leading Fashion Brand</div>
              </div>
            </section>

            <div className={styles.callout}>
              <div className={styles.calloutTitle}><Zap size={20} /> Inventory Optimization</div>
              <p className={styles.calloutText}>
                Kraken can alert your purchasing team when the AI detects many users asking about an out-of-stock product.
              </p>
            </div>
          </div>
        );

      case 'saas':
        return (
          <div className={styles.container}>
            <div className={styles.industryHeader}>
              <div className={styles.industryIcon}><Cloud size={32} /></div>
              <div>
                <div className={styles.badge}>SOFTWARE AS A SERVICE</div>
                <h1 className={styles.title}>{t('docs.saas.title')}</h1>
              </div>
            </div>
            <p className={styles.lead}>
              Reduce churn and scale your technical support without increasing headcount. Kraken learns from your technical documentation, knowledge base, and API docs to resolve complex queries instantly.
            </p>

            <div className={styles.solutionGrid}>
              <div className={styles.pillarCard}>
                <h4>Living Documentation</h4>
                <p>Connect your help center (Intercom, Zendesk, Notion) and let the AI answer technical questions with engineer-level precision.</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>Onboarding Guiado</h4>
                <p>Ayuda a los nuevos usuarios a configurar su cuenta, conectar integraciones y descubrir el 'Aha! Moment' de tu software.</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>Billing Support</h4>
                <p>Stripe integration so users can check payment status, download invoices, or change plans via chat.</p>
              </div>
            </div>

            <section className={styles.section}>
              <h2>Beneficios para Equipos de Customer Success</h2>
              <ul className={styles.list}>
                <li><strong>Friction Analysis:</strong> Identifies which parts of your app generate the most frustration through Kraken's semantic analysis.</li>
                <li><strong>Automated L1 Support:</strong> Resolves 70% of repetitive tickets about passwords, permissions, and basic configurations.</li>
                <li><strong>Traspaso Contextual:</strong> La IA califica los bugs y los escala a Jira o Slack con logs y capturas enviadas por el usuario.</li>
                <li><strong>Proactive Retention:</strong> Detects language patterns indicating cancellation risk and activates rescue flows.</li>
              </ul>
            </section>

            <div className={styles.impactBanner}>
              <h3>Potencia tu Product-Led Growth (PLG)</h3>
              <p>
                Use Kraken to qualify your PQLs (Product Qualified Leads) in real time and ensure your sales team only contacts accounts with the highest expansion potential.
              </p>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className={styles.container}>
            <div className={styles.industryHeader}>
              <div className={styles.industryIcon}><GraduationCap size={32} /></div>
              <div>
                <div className={styles.badge}>EDUCATION & EDTECH</div>
                <h1 className={styles.title}>{t('docs.education.title')}</h1>
              </div>
            </div>
            <p className={styles.lead}>
              Attend to thousands of applicants simultaneously during peak seasons and provide continuous administrative support to your student community without overwhelming your offices.
            </p>

            <div className={styles.solutionGrid}>
              <div className={styles.pillarCard}>
                <h4>Admissions Management</h4>
                <p>Qualifies applicant leads through interest tests, resolves questions about requirements, and guides the digital enrollment process.</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>Virtual Secretary</h4>
                <p>Resolves questions about calendars, scholarship procedures, certificate requests, and internal regulations 24/7.</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>Agendamiento de Visitas</h4>
                <p>Syncs with your admissions team's calendars to schedule campus tours or evaluation interviews.</p>
              </div>
            </div>

            <section className={styles.section}>
              <h2>Optimization for Different Levels</h2>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>K-12 y Colegios</h4>
                  <p>Fluid communication with parents about circulars, school events, and attendance reports.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Higher Education</h4>
                  <p>Mass support for enrollments, course selection, and automated career guidance.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Plataformas EdTech</h4>
                  <p>Immediate technical assistance for LMS usage, content access, and exam question resolution.</p>
                </div>
              </div>
            </section>

            <div className={styles.callout}>
              <div className={styles.calloutTitle}><CheckCircle2 size={20} /> Enrollment Impact</div>
              <p className={styles.calloutText}>
                Institutions using Kraken have reported a 25% increase in prospect-to-enrolled-student conversion rates thanks to immediate response.
              </p>
            </div>
          </div>
        );

      case 'real-estate':
        return (
          <div className={styles.container}>
            <div className={styles.industryHeader}>
              <div className={styles.industryIcon}><Building2 size={32} /></div>
              <div>
                <div className={styles.badge}>{t('docs.realEstate.badge')}</div>
                <h1 className={styles.title}>{t('docs.realEstate.title')}</h1>
              </div>
            </div>
            <p className={styles.lead}>
              {t('docs.realEstate.lead')}
            </p>

            <div className={styles.solutionGrid}>
              <div className={styles.pillarCard}>
                <h4>Natural Language Search</h4>
                <p>Users can say: "I'm looking for a 2-bedroom apartment in Polanco for under 5M" and receive exact options instantly.</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>Perfilamiento BANT</h4>
                <p>La IA califica el presupuesto, autoridad, necesidad y tiempo (BANT) antes de agendar una cita con el broker humano.</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>Appointment Management</h4>
                <p>Integration with Calendly or Google Calendar to book physical or virtual tours without friction.</p>
              </div>
            </div>

            <section className={styles.section}>
              <h2>Omnicanalidad Inmobiliaria</h2>
              <p className={styles.text}>
                Connect Kraken with your Facebook Ads campaigns, portals (Inmuebles24, Vivanuncios), and Google so every lead is attended to in milliseconds, ensuring your inventory is always in front of the right eyes.
              </p>
              <div className={styles.table}>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2">Funcionalidad</th>
                      <th className="py-2">Beneficio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2"><strong>Brochure Sending</strong></td>
                      <td className="py-2">Entrega inmediata de PDFs y videos de la propiedad por WhatsApp.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2"><strong>Calculadora Hipotecaria</strong></td>
                      <td className="py-2">Provides basic monthly payment and down payment estimates.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2"><strong>Alertas de Precio</strong></td>
                      <td className="py-2">Notifies interested parties when a property of interest drops in price.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className={styles.callout} style={{ borderLeftColor: '#d97706' }}>
              <div className={styles.calloutTitle} style={{ color: '#d97706' }}><Activity size={20} /> Response Time</div>
              <p className={styles.calloutText}>
                In real estate, the probability of converting a lead is 100 times higher if contacted within the first 5 minutes. Kraken does it in 1 second.
              </p>
            </div>
          </div>
        );

      case 'insurance':
        return (
          <div className={styles.container}>
            <div className={styles.industryHeader}>
              <div className={styles.industryIcon}><ShieldCheck size={32} /></div>
              <div>
                <div className={styles.badge}>{t('docs.insurance.badge')}</div>
                <h1 className={styles.title}>{t('docs.insurance.title')}</h1>
              </div>
            </div>
            <p className={styles.lead}>
              {t('docs.insurance.lead')}
            </p>

            <div className={styles.solutionGrid}>
              <div className={styles.pillarCard}>
                <h4>Reporte de Siniestros</h4>
                <p>Guides the insured step-by-step to capture accident photos, GPS location, and third-party data from their phone.</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>Consulta de Coberturas</h4>
                <p>Resolves questions about deductibles, insured amounts, and policy exclusions without the customer calling the call center.</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>Renovaciones y Pagos</h4>
                <p>Notifies expirations, sends secure payment links, and confirms policy renewal instantly.</p>
              </div>
            </div>

            <section className={styles.section}>
              <h2>Seguridad de Clase Mundial</h2>
              <p className={styles.text}>
                We understand the data sensitivity in the insurance sector. Kraken implements encryption layers and regulatory compliance to ensure your customers' health and asset information is always protected.
              </p>
              <div className={styles.pillarGrid}>
                <div className={styles.pillarCard}>
                  <h4>Red de Proveedores</h4>
                  <p>Helps locate repair shops, hospitals, or adjusters near the insured's location.</p>
                </div>
                <div className={styles.pillarCard}>
                  <h4>Venta Cruzada</h4>
                  <p>Identifica momentos de vida del cliente para sugerir seguros complementarios (ej: Seguro de Vida tras un Seguro de Hogar).</p>
                </div>
              </div>
            </section>

            <div className={styles.impactBanner}>
              <h3>Human Digital Transformation</h3>
              <p>
                Free your adjusters and agents from administrative tasks so they can focus on providing the emotional and technical support that a claim requires.
              </p>
            </div>
          </div>
        );

      case 'condos':
        return (
          <div className={styles.container}>
            <div className={styles.industryHeader}>
              <div className={styles.industryIcon}><Home size={32} /></div>
              <div>
                <div className={styles.badge}>{t('docs.condos.badge')}</div>
                <h1 className={styles.title}>{t('docs.condos.title')}</h1>
              </div>
            </div>
            <p className={styles.lead}>
              {t('docs.condos.lead')}
            </p>

            <div className={styles.solutionGrid}>
              <div className={styles.pillarCard}>
                <h4>Mantenimiento 360°</h4>
                <p>Residents report breakdowns by attaching photos; Kraken creates the work ticket and assigns priority automatically.</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>Reservas de Amenidades</h4>
                <p>Smart capacity and scheduling management for gyms, event halls, and courts, eliminating scheduling conflicts.</p>
              </div>
              <div className={styles.pillarCard}>
                <h4>Cobranza Conversacional</h4>
                <p>Sending account statements, fee payment reminders, and receipt collection via chat.</p>
              </div>
            </div>

            <section className={styles.section}>
              <h2>Community Communication</h2>
              <div className={styles.orderedList}>
                <li>
                  <div className={styles.stepContent}>
                    <h4>Avisos Urgentes</h4>
                    <p>Mass broadcast of service outages, neighborhood assemblies, or security alerts via WhatsApp.</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <h4>Acceso de Visitantes</h4>
                    <p>Generation of access QR codes and guest registration directly by the resident through the bot.</p>
                  </div>
                </li>
                <li>
                  <div className={styles.stepContent}>
                    <h4>Suggestion Box</h4>
                    <p>Captures and categorizes complaints or suggestions to be reviewed by the oversight committee.</p>
                  </div>
                </li>
              </div>
            </section>

            <div className={styles.callout}>
              <div className={styles.calloutTitle}><Info size={20} /> Transparencia Total</div>
              <p className={styles.calloutText}>
                Reduce las llamadas de consulta de saldo en un 90%. El residente tiene su historial de pagos y reglamentos del edificio al alcance de un mensaje.
              </p>
            </div>
          </div>
        );

      case 'blog':
        return (
          <>
            <div className={styles.badge}>{t('docs.blog.badge')}</div>
            <h1 className={styles.title}>{t('docs.blog.title')}</h1>
            <p className={styles.lead}>{t('docs.blog.lead')}</p>
            
            <div className={styles.blogGrid}>
              {blogPosts.map(post => (
                <div key={post.id} className={styles.articleCard} onClick={() => setSelectedArticle(post.id)}>
                  <div className={styles.articleCardImage}>
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className={styles.articleCardContent}>
                    <div className={styles.articleDate}>{post.date} • {post.category} • {post.readingTime}</div>
                    <h3 className={styles.articleTitle}>{post.title}</h3>
                    <p className={styles.articleExcerpt}>{post.summary}</p>
                    <div className={styles.articleFooter}>
                      {t('docs.blog.readFull')} <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.ctaBannerBlack}>
              <h2>{t('docs.blog.cta.title')}</h2>
              <p>{t('docs.blog.cta.text')}</p>
              <a href="#" className={styles.ctaButton}>{t('docs.blog.cta.btn')}</a>
            </div>
          </>
        );

      case 'success-stories':
        return (
          <>
            <div className={styles.badge}>{t('docs.successStories.badge')}</div>
            <h1 className={styles.title}>{t('docs.successStories.title')}</h1>
            <p className={styles.lead}>{t('docs.successStories.lead')}</p>
            
            <div className={styles.pillarGrid}>
              {successStories.map(story => (
                <div key={story.id} className={styles.caseStudyCard} onClick={() => setSelectedStory(story.id)} style={{ cursor: 'pointer' }}>
                  <div className={styles.caseHeader}>
                    <div className={styles.companyLogo}>{story.company}</div>
                    <div className={styles.badge} style={{ margin: 0 }}>{story.stat} {story.label}</div>
                  </div>
                  <h4>{story.title}</h4>
                  <p>{story.summary}</p>
                  <div className={styles.articleFooter} style={{ marginTop: '1.5rem' }}>
                    {t('docs.successStories.viewFull')} <ArrowRight size={16} />
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.ctaBannerBlack}>
              <h2>{t('docs.successStories.cta.title')}</h2>
              <p>{t('docs.successStories.cta.text')}</p>
              <a href="#" className={styles.ctaButton}>{t('docs.successStories.cta.btn')}</a>
            </div>
          </>
        );

      default:
        return (
          <div style={{ padding: '4rem 0', textAlign: 'center' }}>
            <Activity size={48} color="#e5e7eb" style={{ marginBottom: '1rem' }} />
            <h2 style={{ color: '#000' }}>{t('docs.defaultContent.title')}</h2>
            <p style={{ color: '#6b7280' }}>{t('docs.defaultContent.text')}</p>
          </div>
        );
    }
  };

  return (
    <div className={styles.docsWrapper}>
      {/* Mobile Header */}
      <div className={styles.mobileHeader}>
        <div className={styles.mobileHeaderContent}>
          <button className={styles.menuToggle} onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
          <span className={styles.mobileTitle}>{t('docs.title') || 'Documentation'}</span>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.sidebarOverlay} onClick={() => setIsMobileMenuOpen(false)}>
          <aside className={styles.mobileSidebar} onClick={e => e.stopPropagation()}>
            <div className={styles.sidebarMobileHeader}>
              <span className={styles.sidebarTitle}>{t('docs.menu') || 'Menu'}</span>
              <button className={styles.closeButton} onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className={styles.mobileSidebarScroll}>
              {sidebarSections.map((section, idx) => (
                <div key={idx} className={styles.sidebarSection}>
                  <div className={styles.sidebarHeader}>
                    {section.icon}
                    <span>{section.title}</span>
                  </div>
                  <ul className={styles.sidebarList}>
                    {section.items.map((item, i) => {
                      if (item.type === 'label') {
                        return <li key={i} className={styles.subLabel}>{item.label}</li>;
                      }
                      return (
                        <li key={item.id}>
                          <button 
                            onClick={() => {
                              setActiveTab(item.id);
                              setSelectedArticle(null);
                              setSelectedStory(null);
                              setIsMobileMenuOpen(false);
                              window.scrollTo(0, 0);
                            }}
                            className={`
                              ${styles.sidebarItem} 
                              ${activeTab === item.id ? styles.sidebarItemActive : ''}
                              ${item.indented ? styles.indentedItem : ''}
                            `}
                          >
                            {item.label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className={styles.sidebar}>
        {sidebarSections.map((section, idx) => (
          <div key={idx} className={styles.sidebarSection}>
            <div className={styles.sidebarHeader}>
              {section.icon}
              <span>{section.title}</span>
            </div>
            <ul className={styles.sidebarList}>
              {section.items.map((item, i) => {
                if (item.type === 'label') {
                  return <li key={i} className={styles.subLabel}>{item.label}</li>;
                }
                return (
                  <li key={item.id}>
                    <button 
                      onClick={() => {
                        setActiveTab(item.id);
                        setSelectedArticle(null);
                        setSelectedStory(null);
                        window.scrollTo(0, 0);
                      }}
                      className={`
                        ${styles.sidebarItem} 
                        ${activeTab === item.id ? styles.sidebarItemActive : ''}
                        ${item.indented ? styles.indentedItem : ''}
                      `}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </aside>

      <main className={styles.mainContent}>
        <div className={styles.container}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default DocsView;
