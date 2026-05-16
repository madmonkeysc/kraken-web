import React from 'react';
import { Info, Settings } from 'lucide-react';
import styles from '../DocsView.module.css';

export const DocsBuildGuide = ({ setActiveTab }) => {
  return (
    <>
      <div className={styles.badge}>STEP-BY-STEP GUIDE</div>
      <h1 className={styles.title}>Create your first AI agent</h1>
      <p className={styles.lead}>
        In this guide, we will walk you through creating your first AI agent, training it with your data, and testing it in the sandbox environment.
      </p>

      <section className={styles.section}>
        <h2>Prerequisites</h2>
        <ul className={styles.list}>
          <li>A Kraken account. <a href="/signup" className={styles.link}>Sign up here</a> if you haven't already.</li>
          <li>Documents or a website URL you can use as an information source.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Step 1: Create a new agent</h2>
        <ol className={styles.orderedList}>
          <li>
            <div className={styles.stepContent}>
              <p className={styles.text}>Go to your <strong>Dashboard</strong>.</p>
            </div>
          </li>
          <li>
            <div className={styles.stepContent}>
              <p className={styles.text}>Click the <strong>"New agent"</strong> button in the upper-right corner.</p>
            </div>
          </li>
          <li>
            <div className={styles.stepContent}>
              <p className={styles.text}>Give your agent a name (e.g., "Support Bot") and select a primary language.</p>
            </div>
          </li>
          <li>
            <div className={styles.stepContent}>
              <p className={styles.text}>Choose an initial personality tone (e.g., professional, friendly, empathetic).</p>
            </div>
          </li>
        </ol>
        <div className={styles.callout}>
          <div className={styles.calloutTitle}><Info size={20} /> Tip</div>
          <p className={styles.calloutText}>
            You can change these settings later under the <strong>Settings</strong> tab. We recommend starting with "Professional" for business support.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Step 2: Add knowledge (the "brain")</h2>
        <p className={styles.text}>
          Your agent needs data to answer questions accurately. Kraken uses <strong>RAG (Retrieval-Augmented Generation)</strong> to ensure responses are grounded solely in your data.
        </p>
        <ol className={styles.orderedList}>
          <li>
            <div className={styles.stepContent}>
              <p className={styles.text}>Navigate to the <strong>"Data Sources"</strong> tab.</p>
            </div>
          </li>
          <li>
            <div className={styles.stepContent}>
              <p className={styles.text}>Click <strong>"Add source"</strong>.</p>
            </div>
          </li>
          <li>
            <div className={styles.stepContent}>
              <p className={styles.text}>Select a source type:</p>
              <ul className={styles.list} style={{ marginTop: '1rem' }}>
                <li><strong>File upload:</strong> PDF, DOCX, TXT, CSV, MD. Maximum 20 MB per file.</li>
                <li><strong>Website crawling:</strong> Enter your website URL. Our crawler will automatically find and extract information from public pages.</li>
                <li><strong>Google Drive:</strong> Connect and select specific folders or files.</li>
                <li><strong>Q&A pairs:</strong> Manually add specific questions and answers for 100% precision on critical topics.</li>
              </ul>
            </div>
          </li>
          <li>
            <div className={styles.stepContent}>
              <p className={styles.text}>Wait for the training status to change to <strong>"Trained"</strong>. This usually takes less than 2 minutes.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Step 3: Test in the sandbox</h2>
        <p className={styles.text}>
          Before going live, test your agent in the sandbox environment.
        </p>
        <ol className={styles.orderedList}>
          <li>
            <div className={styles.stepContent}>
              <p className={styles.text}>Go to the <strong>"Playground"</strong> tab.</p>
            </div>
          </li>
          <li>
            <div className={styles.stepContent}>
              <p className={styles.text}>Type a question related to the data you just uploaded.</p>
            </div>
          </li>
          <li>
            <div className={styles.stepContent}>
              <p className={styles.text}><strong>Debug Mode:</strong> Enable "Debug Mode" to see exactly which data chunk the AI used to generate its answer. This is essential for verifying accuracy.</p>
            </div>
          </li>
          <li>
            <div className={styles.stepContent}>
              <p className={styles.text}>Review the response. If it's not accurate, refine your data or add specific Q&A pairs.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Next steps</h2>
        <p className={styles.text}>Now that your agent is trained, it's time to let it talk to the world.</p>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('deploy')}>
            <h4>Deploy to website</h4>
            <p>Get the code for your widget.</p>
          </div>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('whatsapp')}>
            <h4>Connect to WhatsApp</h4>
            <p>Set up your WhatsApp channel.</p>
          </div>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('playground')}>
            <h4>Configure actions</h4>
            <p>Give your agent superpowers.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export const DocsBestPractices = ({ setActiveTab }) => {
  return (
    <>
      <div className={styles.badge}>BEST PRACTICES</div>
      <h1 className={styles.title}>Best practices for AI success</h1>
      <p className={styles.lead}>
        Building a great AI agent is an iterative process. Follow these guidelines to ensure high-quality responses and an exceptional customer experience.
      </p>

      <section className={styles.section}>
        <h2>1. Data quality and structure</h2>
        <p className={styles.text}>
          The quality of your agent's responses is directly linked to the quality of your data.
        </p>
        <ul className={styles.list}>
          <li><strong>Stay focused:</strong> Avoid uploading large, generic documents. Smaller, specific documents (e.g., "Refund Policy.pdf") are easier for the AI to retrieve accurately.</li>
          <li><strong>Update regularly:</strong> When your company policies change, update your data sources immediately. Enable auto-sync for websites.</li>
          <li><strong>Use Q&A for precision:</strong> For specific, high-stakes questions, use the manual Q&A section. This overrides generic documents and guarantees 100% accurate wording.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>2. Refining personality</h2>
        <p className={styles.text}>
          Under the <strong>Settings</strong> tab, provide clear "System Instructions".
        </p>
        <ul className={styles.list}>
          <li><strong>Be specific:</strong> Instead of "Help customers", use "You are a helpful support assistant for Kraken. You describe technical features concisely and always offer to connect with a human if you can't resolve an issue after two attempts."</li>
          <li><strong>Set boundaries:</strong> Tell the AI what not to do. "Never discuss pricing for custom enterprise plans; instead, capture their email for sales outreach."</li>
        </ul>
        <div className={styles.callout}>
          <div className={styles.calloutTitle}><Settings size={20} /> Technical note</div>
          <p className={styles.calloutText}>
            System instructions define the ethical and operational framework of your agent. Well-defined instructions reduce AI hallucinations.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>3. The hybrid strategy (human handoff)</h2>
        <p className={styles.text}>
          AI is powerful, but humans are essential for empathy and complex problem-solving.
        </p>
        <ul className={styles.list}>
          <li><strong>Enable automatic handoff:</strong> Set a threshold or specific triggers (e.g., "I want to talk to a person") that escalate the chat to your human team.</li>
          <li><strong>Daily monitoring:</strong> Check the <strong>Activity</strong> tab daily to see where the AI might struggle. Use the "Thumbs down" filter to find and fix poor responses.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>4. Continuous training cycle</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard}>
            <h4>Step 1</h4>
            <p>Review logs in the <strong>Activity</strong> tab.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Step 2</h4>
            <p>Identify missing knowledge or incorrect answers.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Step 3</h4>
            <p>Add new data or Q&A pairs.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Step 4</h4>
            <p>Retrain and verify in the <strong>Playground</strong>.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Next steps</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('build')}>
            <h4>Build your first agent</h4>
            <p>Follow our step-by-step guide to get started.</p>
          </div>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('playground')}>
            <h4>Playground</h4>
            <p>Test your agents in a safe environment.</p>
          </div>
        </div>
      </section>
    </>
  );
};
