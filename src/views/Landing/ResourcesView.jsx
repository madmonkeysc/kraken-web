import React from 'react';
import { BookOpen, FileText, PlayCircle, HelpCircle, ArrowRight, MessageCircle, Github, Twitter, Rocket, Search, Bot } from 'lucide-react';
import styles from '../Landing.module.css';
import { useLanguage } from '../../context/LanguageContext';
import { blogPosts } from './blogData';

const ResourcesView = ({ onNavigate }) => {
  const { t, language } = useLanguage();

  const resources = [
    {
      icon: <BookOpen size={24} />,
      title: t('resourcesPage.grid.docs.title'),
      desc: t('resourcesPage.grid.docs.desc'),
      link: t('resourcesPage.grid.docs.link'),
      view: 'docs'
    },
    {
      icon: <FileText size={24} />,
      title: t('resourcesPage.grid.success.title'),
      desc: t('resourcesPage.grid.success.desc'),
      link: t('resourcesPage.grid.success.link'),
      view: 'success-stories'
    },
    {
      icon: <PlayCircle size={24} />,
      title: t('resourcesPage.grid.tutorials.title'),
      desc: t('resourcesPage.grid.tutorials.desc'),
      link: t('resourcesPage.grid.tutorials.link'),
      view: 'docs' // Placeholder or dedicated video view
    },
    {
      icon: <HelpCircle size={24} />,
      title: t('resourcesPage.grid.support.title'),
      desc: t('resourcesPage.grid.support.desc'),
      link: t('resourcesPage.grid.support.link'),
      view: 'contact'
    }
  ];

  const currentPosts = blogPosts[language] || blogPosts.ES;
  const latestPosts = currentPosts.slice(0, 2);

  return (
    <div className={styles.viewContainer}>
      <header className={styles.viewHeader}>
        <div className={styles.productBadge} style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>{t('resourcesPage.badge')}</div>
        <h1 className={styles.viewTitle}>
          {t('resourcesPage.title').split('{mission}')[0]}
          <span className={styles.textGradient}>{t('resourcesPage.mission')}</span>
          {t('resourcesPage.title').split('{mission}')[1]}
        </h1>
        <p className={styles.viewSubtitle}>
          {t('resourcesPage.subtitle')}
        </p>
      </header>

      <div className={styles.resourcesGrid}>
        {resources.map((res, idx) => (
          <div key={idx} className={styles.resourceCard} onClick={() => onNavigate({ view: res.view })}>
            <div className={styles.resourceIcon}>{res.icon}</div>
            <h3>{res.title}</h3>
            <p>{res.desc}</p>
            <span className={styles.resourceLink}>{res.link} <ArrowRight size={16} /></span>
          </div>
        ))}
        <div className={styles.resourceCard} onClick={() => onNavigate({ view: 'roadmap' })}>
          <div className={styles.resourceIcon}><Search size={24} /></div>
          <h3>{t('resourcesPage.grid.roadmap.title')}</h3>
          <p>{t('resourcesPage.grid.roadmap.desc')}</p>
          <span className={styles.resourceLink}>{t('resourcesPage.grid.roadmap.link')} <ArrowRight size={16} /></span>
        </div>
      </div>

      <section className={styles.blogPreview}>
        <div className={styles.blogHeader}>
          <h2>
            {t('resourcesPage.blog.title').split('{blog}')[0]}
            <span className={styles.textGradient}>Blog</span>
            {t('resourcesPage.blog.title').split('{blog}')[1]}
          </h2>
          <button 
            className={styles.btnOutline} 
            style={{ borderRadius: '12px' }}
            onClick={() => onNavigate({ view: 'blog' })}
          >
            {t('resourcesPage.blog.btn')}
          </button>
        </div>
        <div className={styles.blogGrid}>
          {latestPosts.map(post => (
            <div key={post.id} className={styles.blogCard} onClick={() => onNavigate({ view: 'blog-post', slug: post.slug })}>
              <div className={styles.blogImage}>
                 <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className={styles.blogContent}>
                <span className={styles.blogTag}>{post.category}</span>
                <h4>{post.title}</h4>
                <p>{post.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '10rem', padding: '6rem', background: '#000', borderRadius: '3rem', color: '#fff', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem' }}>{t('resourcesPage.community.title')}</h2>
        <p style={{ color: '#9ca3af', fontSize: '1.125rem', marginBottom: '3rem' }}>{t('resourcesPage.community.subtitle')}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
           <button className={styles.btnOutline} style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <Github size={20} /> {t('resourcesPage.community.github')}
           </button>
           <button className={styles.btnOutline} style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <Twitter size={20} /> {t('resourcesPage.community.twitter')}
           </button>
           <button className={styles.btnOutline} style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <MessageCircle size={20} /> {t('resourcesPage.community.discord')}
           </button>
        </div>
      </section>
    </div>
  );
};

export default ResourcesView;


