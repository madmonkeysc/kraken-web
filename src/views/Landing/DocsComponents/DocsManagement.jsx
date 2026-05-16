import React from 'react';
import { Play, Zap, Globe, MessageSquare, Info, Settings, Cpu } from 'lucide-react';
import styles from '../DocsView.module.css';

export const DocsPlayground = ({ setActiveTab }) => {
  return (
    <>
      <div className={styles.badge}>AGENT MANAGEMENT</div>
      <h1 className={styles.title}>Playground</h1>
      <p className={styles.lead}>
        The Playground is your safe space to test and debug your agent before launch. It simulates a real chat environment, but with additional developer tools to help you understand the AI's reasoning.
      </p>

      <section className={styles.section}>
        <h2>Key features</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard}>
            <h4>Real-time simulation</h4>
            <p>Test exactly how your agent will behave on your website, WhatsApp, or Messenger.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Debug mode</h4>
            <p>The AI shows "Sources" for each response. You can see the exact chunks from your documents that support the answer.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Model selector</h4>
            <p>Test the performance of different models (GPT-4o, Claude 3.5 Sonnet) with your data to find the perfect balance.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Variable viewer</h4>
            <p>Track the captured data (name, email, order ID) that the AI extracts during the conversation.</p>
          </div>
        </div>
        <div className={styles.callout}>
          <div className={styles.calloutTitle}><Play size={20} /> Instruction testing</div>
          <p className={styles.calloutText}>
            See instantly how changes to the "Personality" settings in the dashboard affect the AI's tone and behavior in real time.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Testing strategy</h2>
        <ul className={styles.list}>
          <li><strong>Ask edge case questions:</strong> Don't just ask easy questions. Try to confuse the bot to see the limits of its knowledge.</li>
          <li><strong>Verify citations:</strong> Ensure the AI cites the correct documents. If it cites the wrong page, your data may be too redundant.</li>
          <li><strong>Reset session:</strong> Use the "Clear chat" button to start fresh and test lead capture flows from the beginning.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Next steps</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('best-practices')}>
            <h4>Best practices</h4>
            <p>Tips for optimal AI performance.</p>
          </div>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('data-sources')}>
            <h4>Data sources</h4>
            <p>Learn how to manage your agent's knowledge.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export const DocsDataSources = ({ setActiveTab }) => {
  return (
    <>
      <div className={styles.badge}>KNOWLEDGE</div>
      <h1 className={styles.title}>Data sources and knowledge management</h1>
      <p className={styles.lead}>
        Your agent's intelligence is built on the data you provide. Kraken uses RAG (Retrieval-Augmented Generation) to ensure the AI stays faithful to your data, preventing hallucinations.
      </p>

      <section className={styles.section}>
        <h2>Supported types and limits</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard}>
            <h4>Files</h4>
            <p>PDF, DOCX, TXT, CSV, MD. Maximum 20 MB per file. Simultaneous uploads allowed.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Text</h4>
            <p>Paste internal policies or snippets directly that aren't in an official document.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Websites</h4>
            <p>Smart crawler that automatically indexes public pages and internal links.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Google Drive</h4>
            <p>Connect specific folders. New files will be indexed automatically.</p>
          </div>
        </div>
        <div className={styles.callout} style={{ marginTop: '1.5rem' }}>
          <div className={styles.calloutTitle}><Zap size={20} /> Q&A Pairs</div>
          <p className={styles.calloutText}>
            Q&A pairs have <strong>highest priority</strong>. If a question matches exactly, Kraken will use that manual answer instead of searching documents.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Knowledge citations</h2>
        <p className={styles.text}>
          When your agent responds, it can provide automatic bibliographic references. The user will see a link indicating <strong>"Source: [Document Name]"</strong>, which builds great trust and transparency.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Retraining loop</h2>
        <p className={styles.text}>
          When you modify a source, its status will change to "Pending". Click <strong>"Retrain agent"</strong> to update the AI's brain. This process usually takes between 30 and 90 seconds.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Next steps</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('playground')}>
            <h4>Playground</h4>
            <p>Test your new data sources in real time.</p>
          </div>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('deploy')}>
            <h4>Deploy</h4>
            <p>Take your agent to the real world in a few clicks.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export const DocsDeploy = ({ setActiveTab }) => {
  return (
    <>
      <div className={styles.badge}>LAUNCH</div>
      <h1 className={styles.title}>Deploy: Publish your agent to channels</h1>
      <p className={styles.lead}>
        Once your agent is trained, it can operate on multiple platforms simultaneously. Kraken is designed for omnichannel support: one brain, multiple interfaces.
      </p>

      <section className={styles.section}>
        <h2>Active channels</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard}>
            <h4>Web chat widget</h4>
            <p>The most common deployment. Embed it on your marketing website, app, or help center.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Messaging apps</h4>
            <p>Connect official WhatsApp Business, Facebook Messenger, Instagram, or Telegram accounts.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Collaboration</h4>
            <p>Add your bot to Slack or Microsoft Teams for internal employee support.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Email</h4>
            <p>Automate your inbox with AI-drafted responses for email support.</p>
          </div>
        </div>
        <div className={styles.callout} style={{ marginTop: '1.5rem' }}>
          <div className={styles.calloutTitle}><Globe size={20} /> Help page</div>
          <p className={styles.calloutText}>
            Kraken offers a standalone hosted page at <code>yourcompany.kraken.ai</code> for businesses that don't have their own website.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Deployment strategy</h2>
        <ul className={styles.list}>
          <li><strong>Start with web chat:</strong> Test your knowledge with real web traffic before opening higher-volume channels like WhatsApp.</li>
          <li><strong>Unified inbox:</strong> Regardless of message origin, all conversations appear in the <strong>Activity</strong> tab for human oversight.</li>
          <li><strong>Status monitoring:</strong> The "Connect" tab shows real-time status. If a WhatsApp token expires or a script is missing, you'll see an alert there.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Next steps</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('data-sources')}>
            <h4>Data sources</h4>
            <p>Make sure your knowledge base is up to date.</p>
          </div>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('settings')}>
            <h4>Settings</h4>
            <p>Configure the technical and global details of your agent.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export const DocsSettings = ({ setActiveTab }) => {
  return (
    <>
      <div className={styles.badge}>CONFIGURATION</div>
      <h1 className={styles.title}>Settings and agent personality</h1>
      <p className={styles.lead}>
        This is where you define who your agent is and how it behaves. Fine-tuning these parameters is the difference between a robotic chatbot and a premium AI assistant.
      </p>

      <section className={styles.section}>
        <h2>Character and tone</h2>
        <p className={styles.text}>
          Define your agent's visual and verbal identity so it aligns with your brand.
        </p>
        <ul className={styles.list}>
          <li><strong>Agent name:</strong> Appears in the chat header (e.g., "Sarah from Support").</li>
          <li><strong>Avatar:</strong> Upload your brand logo or a friendly person photo to represent you.</li>
          <li><strong>System instructions:</strong> The most powerful setting. Tell the AI exactly how it should behave.</li>
        </ul>

        <div className={styles.callout} style={{ marginTop: '1.5rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <div className={styles.calloutTitle} style={{ color: '#0f172a' }}><MessageSquare size={20} /> Instruction example</div>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '0.5rem' }}>❌ <strong>Bad:</strong> "Help the user."</p>
            <p style={{ color: '#10b981', fontSize: '0.9rem' }}>✅ <strong>Good:</strong> "You are a professional support agent for Acme Corp. You are friendly, concise, and never use technical jargon. If a user is frustrated, offer to connect them with a human agent immediately."</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Behavior and safety</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard}>
            <h4>Confidence threshold</h4>
            <p>If the AI is less than 70% confident (recommended), it will say "I don't know" instead of guessing.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Model selection</h4>
            <p>Choose between GPT-4o (standard), Claude 3.5 (best tone), or DeepSeek-V3 (cost-effective volume).</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Rate limiting</h4>
            <p>Prevents abuse by limiting the number of messages a user can send per minute.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Workflow tracking</h2>
        <p className={styles.text}>
          Kraken automatically tracks key milestones in a conversation called "Workflows". This helps you measure conversion, not just conversation.
        </p>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard}>
            <h4>Qualified Lead</h4>
            <p>Triggered when a user provides their email and meets your criteria.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Meeting Booked</h4>
            <p>Triggered when a slot is booked on the integrated calendar.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Payment Completed</h4>
            <p>Triggered after a successful payment process through Stripe.</p>
          </div>
        </div>
        <div className={styles.callout} style={{ marginTop: '1.5rem' }}>
          <div className={styles.calloutTitle}><Info size={20} /> CRM Integration</div>
          <p className={styles.calloutText}>
            Stages are stored in conversation metadata and can be synced with your CRM via webhooks.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Next steps</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('deploy')}>
            <h4>Deploy</h4>
            <p>Publish your agent to channels.</p>
          </div>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('behavior')}>
            <h4>Behavior</h4>
            <p>Learn more about how the AI responds.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export const DocsBehavior = ({ setActiveTab }) => {
  return (
    <>
      <div className={styles.badge}>APPLIED INTELLIGENCE</div>
      <h1 className={styles.title}>Behavior: Tools and automation</h1>
      <p className={styles.lead}>
        Actions let your agent call external APIs, fetch real-time data, and perform tasks in other applications. This transforms your agent from a simple "FAQ bot" into a fully functional "action agent".
      </p>

      <section className={styles.section}>
        <h2>How does an action work?</h2>
        <p className={styles.text}>
          The tool execution process follows a logical five-step cycle:
        </p>
        <ol className={styles.orderedList}>
          <li>
            <div className={styles.stepContent}>
              <h4>Trigger</h4>
              <p>The user asks a question that requires an action (e.g., "Where is my order?").</p>
            </div>
          </li>
          <li>
            <div className={styles.stepContent}>
              <h4>Extraction</h4>
              <p>The AI understands the intent and extracts the necessary parameters (e.g., order_id: "12345").</p>
            </div>
          </li>
          <li>
            <div className={styles.stepContent}>
              <h4>Execution</h4>
              <p>Kraken securely calls the connected API (e.g., Shopify) with that parameter.</p>
            </div>
          </li>
          <li>
            <div className={styles.stepContent}>
              <h4>Response</h4>
              <p>The API returns the requested technical data (e.g., status: "Shipped").</p>
            </div>
          </li>
          <li>
            <div className={styles.stepContent}>
              <h4>Synthesis</h4>
              <p>The AI formulates a natural language response: "Your order #12345 has shipped and will arrive this Friday!"</p>
            </div>
          </li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Native actions vs. webhooks</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard}>
            <h4>Native Actions</h4>
            <p>One-click integrations for <strong>Shopify, Stripe, Google Calendar, and Gmail</strong>. We handle the technical mapping.</p>
          </div>
          <div className={styles.pillarCard}>
            <h4>Custom Webhooks</h4>
            <p>Connect your own internal API or any CRM. You define the endpoint and the fields you want the AI to capture.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Best practices</h2>
        <ul className={styles.list}>
          <li><strong>Clear labels:</strong> Assign descriptive names to your actions so the AI knows exactly when to use them (e.g., "Check_Inventory").</li>
          <li><strong>Safety confirmation:</strong> For sensitive actions (like "Cancel subscription" or "Refund"), configure the AI to always ask: "Are you sure you want to proceed?"</li>
          <li><strong>Error handling:</strong> Define what the agent should say if the API doesn't respond or the order ID is invalid.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Next steps</h2>
        <div className={styles.pillarGrid}>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('settings')}>
            <h4>Settings</h4>
            <p>Configure your agent's global personality.</p>
          </div>
          <div className={styles.pillarCard} style={{ cursor: 'pointer' }} onClick={() => setActiveTab('activity')}>
            <h4>Activity</h4>
            <p>Monitor conversations and actions in real time.</p>
          </div>
        </div>
      </section>
    </>
  );
};
