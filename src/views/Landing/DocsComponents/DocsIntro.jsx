import React from 'react';
import { Info } from 'lucide-react';
import styles from '../DocsView.module.css';

const DocsIntro = ({ setActiveTab }) => {
  return (
    <>
      <div className={styles.badge}>INTRODUCTION</div>
      <h1 className={styles.title}>Welcome to Kraken Documentation</h1>

      <section className={styles.section}>
        <h2>Welcome to Kraken</h2>
        <p className={styles.text}>
          Kraken is the AI agent platform for customer experience. We help you create, deploy, and scale intelligent agents across all channels: WhatsApp, Messenger, Instagram, email, and more.
        </p>
      </section>

      <section className={styles.section}>
        <h2>What is Kraken?</h2>
        <p className={styles.text}>
          Kraken lets you build AI agents trained on your own data (PDFs, websites, FAQs) that can perform real actions like scheduling meetings, checking order statuses, or updating your CRM. Unlike traditional chatbots with rigid flows, Kraken uses generative AI to understand natural language and provide human-like responses.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our core pillars</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard}>
            <h4>Automation</h4>
            <p>Deflect up to 80% of repetitive customer queries instantly, 24/7.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Connectivity</h4>
            <p>Connect to your existing toolset, from CRM systems like HubSpot to communication channels like WhatsApp.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Intelligence</h4>
            <p>Leverage the most advanced LLMs (GPT-4o, Claude 3.5) grounded in your specific business data.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Actionability</h4>
            <p>Don't just talk — act. Your agents can schedule meetings, process payments, and update records.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Real-world impact</h2>
        <div className={styles.impactBanner}>
          <p>Companies using Kraken experience an average 80% reduction in support ticket volume and a 60% decrease in operational costs within the first 30 days.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Getting started</h2>
        <p className={styles.text}>To get the most out of Kraken, we recommend following this path:</p>
        <ol className={styles.orderedList}>
          <li>
            <div className={styles.stepContent}>
              <h4>Create your first agent</h4>
              <p>Build and train your first AI assistant.</p>
            </div>
          </li>
          <li>
            <div className={styles.stepContent}>
              <h4>Connect channels</h4>
              <p>Deploy your agent on WhatsApp or your website.</p>
            </div>
          </li>
          <li>
            <div className={styles.stepContent}>
              <h4>Explore actions</h4>
              <p>Give your agents superpowers with integrations.</p>
            </div>
          </li>
        </ol>
        <div className={styles.callout}>
          <div className={styles.calloutTitle}><Info size={20} /> Need help?</div>
          <p className={styles.calloutText}>
            Contact Support or join our Community.
          </p>
        </div>
      </section>
    </>
  );
};

export default DocsIntro;
