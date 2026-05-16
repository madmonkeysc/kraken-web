import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import styles from './Blog.module.css';
import { blogPosts } from './blogData';
import { useLanguage } from '../../context/LanguageContext';

const BlogPostView = ({ slug, onBack, onLoginClick }) => {
  const { t, language } = useLanguage();
  const currentPosts = blogPosts[language] || blogPosts.ES;
  const post = currentPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className={styles.blogContainer}>
        <div className={styles.header}>
          <h1>{t('blogPage.notFound')}</h1>
          <button className={styles.backBtn} onClick={onBack}>
            <ArrowLeft size={20} /> {t('blogPage.back')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.postView}>
      <button className={styles.backBtn} onClick={onBack}>
        <ArrowLeft size={20} /> {t('blogPage.back')}
      </button>

      <header className={styles.postHeader}>
        <span className={styles.postCategory}>{post.category}</span>
        <h1 className={styles.fullTitle}>{post.title}</h1>
        
        <div className={styles.postMeta}>
          <div className={styles.author}>
            <User size={18} />
            <span>{post.author}</span>
          </div>
          <div className={styles.author}>
            <Calendar size={18} />
            <span>{post.date}</span>
          </div>
        </div>
      </header>

      <img src={post.image} alt={post.title} className={styles.featuredImage} />

      <article className={styles.articleBody} dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className={styles.ctaBox}>
        <h4>{t('blogPage.cta.title')}</h4>
        <p>{t('blogPage.cta.subtitle')}</p>
        <button className={styles.btnPrimary} onClick={() => onLoginClick('register')}>
          {t('blogPage.cta.btn')}
        </button>
      </div>
    </div>
  );
};

export default BlogPostView;
