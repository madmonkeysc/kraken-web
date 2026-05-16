import React, { useState } from 'react';
import styles from './FloatingAssistant.module.css';
import { X, Send, Sparkles, DollarSign, Bot, MessageSquare, Layout } from 'lucide-react';
import krakenIcon from '../assets/kraken-icon-white.png';

const FloatingAssistant = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('menu'); // 'menu' or 'chat'
  const [messages, setMessages] = useState([
    { id: 1, text: '¡Hola! Soy tu asistente KRAKEN.', sent: false }
  ]);
  const [input, setInput] = useState('');

  const menuOptions = [
    { label: 'Hablar con agente de IA', action: () => setView('chat'), icon: <Bot size={20} /> },
    { label: 'Ir directo a WhatsApp', action: () => window.location.href = 'https://wa.me/your_number_here', icon: <MessageSquare size={20} /> },
    { label: 'Empezar a crear sus agente IA', action: () => onLoginClick('register'), icon: <Sparkles size={20} /> },
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
        text: 'Esa es una excelente pregunta. Estamos trabajando en integrar más capacidades de resolución automática. ¿Deseas que contacte a un humano?', 
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
                <span className={styles.headerTitle}>Asistente KRAKEN</span>
                <span className={styles.headerStatus}>IA Activa • Soporte 24/7</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
              <X size={18} />
            </button>
          </header>

          {view === 'menu' ? (
            <div className={styles.menuContainer}>
              <h4 style={{ marginBottom: '0.5rem', color: '#111827' }}>¿Cómo podemos ayudarte hoy?</h4>
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
                  ← Volver al menú
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
                  placeholder="Escribe tu duda..."
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
