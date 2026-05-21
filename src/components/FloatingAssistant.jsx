import React, { useState } from 'react';
import styles from './FloatingAssistant.module.css';
import { X, Send, Sparkles, DollarSign, Bot, MessageSquare, Layout } from 'lucide-react';
import krakenIcon from '../assets/kraken-icon-white.png';
import { useLanguage } from '../context/LanguageContext';

const FloatingAssistant = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('menu'); // 'menu' or 'chat'
  const { t } = useLanguage();
  const [messages, setMessages] = useState([
    { id: 1, text: t('docs.assistant.welcome'), sent: false }
  ]);
  const [input, setInput] = useState('');

  const menuOptions = [
    { label: t('docs.assistant.talkToAI'), action: () => setView('chat'), icon: <Bot size={20} /> },
    { label: t('docs.assistant.goToWhatsapp'), action: () => window.location.href = 'https://wa.me/your_number_here', icon: <MessageSquare size={20} /> },
    { label: t('docs.assistant.createAgent'), action: () => onLoginClick('register'), icon: <Sparkles size={20} /> },
  ];

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = { id: Date.now(), text: input, sent: true };
    setMessages([...messages, newMsg]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: t('docs.assistant.aiReply'), 
        sent: false 
      }]);
    }, 1000);
  };

  return (
    <div className={styles.wrapper}>
      {!isOpen ? (
        <button 
          onClick={() => { setIsOpen(true); setView('menu'); }}
          className={`kraken-assist-btn ${styles.assistBtn}`}
        >
          <div className={styles.glowEffect}></div>
          <img src={krakenIcon} alt="K" style={{ width: '32px', height: '32px', filter: 'none', zIndex: 1 }} />
        </button>
      ) : (
        <div className={styles.chatWindow}>
          <header className={styles.header}>
            <div className={styles.headerInner}>
              <div className={styles.headerIcon}>
                <Sparkles size={20} color="#FCF200" />
              </div>
              <div className={styles.headerText}>
                <span className={styles.headerTitle}>{t('docs.assistant.title')}</span>
                <span className={styles.headerStatus}>{t('docs.assistant.status')}</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
              <X size={18} />
            </button>
          </header>

          {view === 'menu' ? (
            <div className={styles.menuContainer}>
              <h4 style={{ marginBottom: '0.5rem', color: '#111827' }}>{t('docs.assistant.howHelp')}</h4>
              {menuOptions.map((option, idx) => (
                <button 
                  key={idx} 
                  className={styles.menuItem} 
                  onClick={option.action}
                >
                  <div>{option.icon}</div>
                  {option.label}
                </button>
              ))}
            </div>
          ) : (
            <>
              <div className={styles.messages}>
                <button 
                  onClick={() => setView('menu')} 
                  className={styles.backBtn}
                >
                  {t('docs.assistant.backToMenu')}
                </button>
                {messages.map(msg => (
                  <div key={msg.id} className={`${styles.message} ${msg.sent ? styles.sent : styles.received}`}>
                    {msg.text}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSend} className={styles.inputForm}>
                <input 
                  type="text" 
                  placeholder={t('docs.assistant.placeholder')}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  className={styles.inputField}
                />
                <button type="submit" className={styles.submitBtn}>
                  <Send size={20} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingAssistant;
