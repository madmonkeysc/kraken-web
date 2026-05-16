import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import styles from './Blog.module.css';
import { blogPosts } from './blogData';
import { useLanguage } from '../../context/LanguageContext';

const BlogView = ({ onPostClick }) => {
  const { t, language } = useLanguage();
  const currentPosts = blogPosts[language] || blogPosts.ES;

  return (
    <div className={styles.blogContainer}>
      <header className={styles.header}>
        <span className={styles.badge}>{t('blogPage.badge')}</span>
        <h1 className={styles.title}>
          {t('blogPage.title').split('{business}')[0]}
          <span className={styles.textGradient}>{t('blogPage.business')}</span>
          {t('blogPage.title').split('{business}')[1]}
        </h1>
        <p className={styles.subtitle}>
          {t('blogPage.subtitle')}
        </p>
      </header>

      <div className={styles.grid}>
        {currentPosts.map((post) => (
          <article 
            key={post.id} 
            className={styles.postCard}
            onClick={() => onPostClick(post.slug)}
          >
            <div className={styles.imageWrapper}>
              <img src={post.image} alt={post.title} />
              <span className={styles.categoryTag}>{post.category}</span>
            </div>
            <div className={styles.postContent}>
              <div className={styles.postDate}>
                <Calendar size={14} style={{ marginRight: '0.5rem' }} />
                {post.date}
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postSummary}>{post.summary}</p>
              <div className={styles.readMore}>
                {t('blogPage.readMore')} <ArrowRight size={16} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogView;
