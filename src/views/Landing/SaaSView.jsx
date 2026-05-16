import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './UseCasesView.module.css';

const SaaSView = ({ onLoginClick }) => {
  const { t } = useLanguage();

  return (
    <div style={{ padding: '100px 20px', textAlign: 'center', background: '#000', color: '#fff', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{t('saasPage.title')}</h1>
      <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto 2rem' }}>
        {t('saasPage.description')}
      </p>
      <button 
        style={{ padding: '1rem 2rem', fontSize: '1.1rem', background: '#fff', color: '#000', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        onClick={() => onLoginClick && onLoginClick('register')}
      >
        {t('saasPage.cta')}
      </button>
    </div>
  );
};

export default SaaSView;
