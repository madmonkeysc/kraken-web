import React, { useState } from 'react';
import { Paperclip, Send, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './ContactView.module.css';

const ContactView = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: '',
    account: '',
    agent: '',
    problemType: 'general',
    severity: 'low',
    subject: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ticket submitted:', formData);
    alert(t('support.form.messages.success'));
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <header className={styles.header}>
            <h1 className={styles.title}>{t('support.title')}</h1>
            <p className={styles.subtitle}>{t('support.subtitle')}</p>
          </header>

          <form onSubmit={handleSubmit} className={styles.formGrid}>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>{t('support.form.email')}</label>
              <input 
                type="email" 
                className={styles.input} 
                placeholder={t('support.form.placeholders.email')}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>{t('support.form.account')}</label>
              <select 
                className={styles.select}
                value={formData.account}
                onChange={(e) => setFormData({...formData, account: e.target.value})}
              >
                <option value="">{t('support.form.placeholders.account')}</option>
                <option value="standard">{t('support.form.options.accounts.standard')}</option>
                <option value="pro">{t('support.form.options.accounts.pro')}</option>
                <option value="enterprise">{t('support.form.options.accounts.enterprise')}</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>{t('support.form.agent')}</label>
              <select 
                className={styles.select}
                value={formData.agent}
                onChange={(e) => setFormData({...formData, agent: e.target.value})}
              >
                <option value="">{t('support.form.placeholders.agent')}</option>
                <option value="support">{t('support.form.options.agents.support')}</option>
                <option value="sales">{t('support.form.options.agents.sales')}</option>
                <option value="legal">{t('support.form.options.agents.legal')}</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>{t('support.form.problem')}</label>
              <select 
                className={styles.select}
                value={formData.problemType}
                onChange={(e) => setFormData({...formData, problemType: e.target.value})}
              >
                <option value="general">{t('support.form.options.problems.general')}</option>
                <option value="technical">{t('support.form.options.problems.technical')}</option>
                <option value="billing">{t('support.form.options.problems.billing')}</option>
                <option value="feature">{t('support.form.options.problems.feature')}</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>{t('support.form.severity')}</label>
              <select 
                className={styles.select}
                value={formData.severity}
                onChange={(e) => setFormData({...formData, severity: e.target.value})}
              >
                <option value="low">{t('support.form.options.severities.low')}</option>
                <option value="medium">{t('support.form.options.severities.medium')}</option>
                <option value="high">{t('support.form.options.severities.high')}</option>
                <option value="critical">{t('support.form.options.severities.critical')}</option>
              </select>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>{t('support.form.subject')}</label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder={t('support.form.placeholders.subject')}
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
              />
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label}>{t('support.form.description')}</label>
              <textarea 
                className={styles.textarea} 
                placeholder={t('support.form.placeholders.description')}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
              ></textarea>
            </div>

            <div className={`${styles.footer} ${styles.fullWidth}`}>
              <button type="button" className={styles.attachmentBtn}>
                <Paperclip size={18} />
                {t('support.form.buttons.attach')}
              </button>
              <button type="submit" className={styles.submitBtn}>
                {t('support.form.buttons.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
