import React from 'react';
import { Activity, Cpu } from 'lucide-react';
import styles from '../DocsView.module.css';

export const DocsActivity = ({ setActiveTab }) => {
  return (
    <>
      <div className={styles.badge}>MONITORING</div>
      <h1 className={styles.title}>Activity: Logs and Human Handoff</h1>
      <p className={styles.lead}>
        The Activity tab is the core of your support operations. Here you can monitor, audit, and intervene in conversations in real time to ensure the best quality of service.
      </p>

      <section className={styles.section}>
        <h2>Sentiment analysis algorithm</h2>
        <p className={styles.text}>
          Kraken uses an advanced AI model to analyze the emotional context of each conversation, based on the last 20 messages.
        </p>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard}>
            <h4 style={{ color: '#10b981' }}>Positive</h4>
            <p>Detects gratitude, praise, or enthusiasm. Ideal for identifying testimonials.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4 style={{ color: '#6b7280' }}>Neutral</h4>
            <p>Standard queries or technical questions with no apparent emotional charge.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4 style={{ color: '#ef4444' }}>Negative</h4>
            <p>Frustration, complaints, or repeated requests for clarification.</p>
          </div>
        </div>
        <div className={styles.callout} style={{ marginTop: '1.5rem' }}>
          <div className={styles.calloutTitle}><Activity size={20} /> Optimization tip</div>
          <p className={styles.calloutText}>
            Filter your logs by "Negative" to find improvement opportunities. These chats often reveal gaps in your knowledge base or unclear instructions.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Human handoff capability</h2>
        <p className={styles.text}>
          AI is the first line, but Kraken makes it easy to pass to a human when needed:
        </p>
        <ul className={styles.list}>
          <li><strong>"Agent pending" status:</strong> Activates automatically if the customer requests it or if the AI detects critical frustration.</li>
          <li><strong>Multi-channel notifications:</strong> Receive instant alerts in your dashboard and on linked Slack or email channels.</li>
          <li><strong>Manual control:</strong> Click <strong>"Take control"</strong> to pause the AI and respond yourself from the interface.</li>
          <li><strong>Internal notes:</strong> Leave comments that only your team can see (e.g., "Escalating to billing") to maintain context between agents.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Next steps</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('behavior')}>
            <h4>Behavior</h4>
            <p>Adjust how your agent responds to different scenarios.</p>
          </div>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('analytics')}>
            <h4>Analytics</h4>
            <p>Measure the overall performance of your agent fleet.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export const DocsAnalytics = ({ setActiveTab }) => {
  return (
    <>
      <div className={styles.badge}>PERFORMANCE</div>
      <h1 className={styles.title}>Analytics: Optimize your support</h1>
      <p className={styles.lead}>
        Understand your service performance and identify where to optimize your documentation. Data lets you move from assumptions to strategic decisions.
      </p>

      <section className={styles.section}>
        <h2>Core metrics</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard}>
            <h4>Conversation volume</h4>
            <p>Track total chats over 24 hours, 7 days, or 30 days to understand demand peaks.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Deflection rate</h4>
            <p>Percentage of chats the AI resolved without human intervention. The goal is to maximize this value.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Token usage</h4>
            <p>Control your costs. We show the total and average per chat to help you estimate scale.</p>
          </div>
        </div>
        <div className={styles.callout} style={{ marginTop: '1.5rem' }}>
          <div className={styles.calloutTitle}><Cpu size={20} /> Deflection formula</div>
          <p className={styles.calloutText}>
            <code>(Total Chats - Chats with Pending Agent) / Total Chats</code>
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Channel breakdown</h2>
        <p className={styles.text}>
          See exactly where your customers come from to prioritize resources:
        </p>
        <ul className={styles.list}>
          <li><strong>Web widget:</strong> Direct traffic from your website or application.</li>
          <li><strong>WhatsApp:</strong> Direct and fast messaging support.</li>
          <li><strong>Email:</strong> Automated AI-analyzed responses.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Top topics</h2>
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
        <h2>Next steps</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('activity')}>
            <h4>Activity</h4>
            <p>See the detail of each analyzed conversation.</p>
          </div>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('web-chat')}>
            <h4>Web chat</h4>
            <p>Customize the interface where conversations happen.</p>
          </div>
        </div>
      </section>
    </>
  );
};
