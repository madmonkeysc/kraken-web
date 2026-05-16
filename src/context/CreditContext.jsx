import React, { createContext, useContext, useState, useEffect } from 'react';

const CreditContext = createContext();

export const CreditProvider = ({ children }) => {
  const [credits, setCredits] = useState(() => {
    const saved = localStorage.getItem('kraken_credits');
    return saved ? parseInt(saved, 10) : 452;
  });

  const [maxCredits, setMaxCredits] = useState(() => {
    const saved = localStorage.getItem('kraken_max_credits');
    return saved ? parseInt(saved, 10) : 1000;
  });

  const [currentPlan, setCurrentPlan] = useState(() => {
    return localStorage.getItem('kraken_current_plan') || 'trial';
  });

  const [isAutoReload, setIsAutoReload] = useState(() => {
    return localStorage.getItem('kraken_is_auto_reload') === 'true';
  });

  const [paymentMethod, setPaymentMethod] = useState(() => {
    const saved = localStorage.getItem('kraken_payment_method');
    return saved ? JSON.parse(saved) : { last4: '4242', brand: 'Visa', expiry: '12/26' };
  });

  const [billingCycle, setBillingCycle] = useState(() => {
    return localStorage.getItem('kraken_billing_cycle') || 'monthly';
  });

  const [nextBillingDate, setNextBillingDate] = useState(() => {
    const saved = localStorage.getItem('kraken_next_billing_date');
    if (saved) return saved;
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    return date.toLocaleDateString();
  });

  useEffect(() => {
    localStorage.setItem('kraken_credits', credits);
  }, [credits]);

  useEffect(() => {
    localStorage.setItem('kraken_max_credits', maxCredits);
  }, [maxCredits]);

  useEffect(() => {
    localStorage.setItem('kraken_current_plan', currentPlan);
  }, [currentPlan]);

  useEffect(() => {
    localStorage.setItem('kraken_is_auto_reload', isAutoReload);
  }, [isAutoReload]);

  useEffect(() => {
    localStorage.setItem('kraken_payment_method', JSON.stringify(paymentMethod));
  }, [paymentMethod]);

  useEffect(() => {
    localStorage.setItem('kraken_billing_cycle', billingCycle);
  }, [billingCycle]);

  useEffect(() => {
    localStorage.setItem('kraken_next_billing_date', nextBillingDate);
  }, [nextBillingDate]);

  const addCredits = (amount) => {
    setCredits(prev => prev + amount);
    // Note: We don't always want to increase maxCredits when buying extra ones,
    // but for now let's keep it simple as "capacity".
  };

  const updatePlan = (planId, creditsLimit, cycle = 'monthly') => {
    setCurrentPlan(planId);
    setBillingCycle(cycle);
    setMaxCredits(parseInt(creditsLimit.replace(',', ''), 10));
    setCredits(parseInt(creditsLimit.replace(',', ''), 10));
    
    // Update next billing date
    const date = new Date();
    if (cycle === 'yearly') {
      date.setFullYear(date.getFullYear() + 1);
    } else {
      date.setMonth(date.getMonth() + 1);
    }
    setNextBillingDate(date.toLocaleDateString());
  };

  const cancelSubscription = () => {
    setCurrentPlan('trial');
    setBillingCycle('monthly');
    setMaxCredits(1000);
    // Keep current credits but reset limit
  };

  const toggleAutoReload = () => {
    setIsAutoReload(prev => !prev);
  }

  const updatePaymentMethod = (details) => {
    setPaymentMethod(details);
  };

  const removePaymentMethod = () => {
    setPaymentMethod({ last4: '', brand: '', expiry: '' });
  };

  const consumeCredits = (amount) => {
    setCredits(prev => Math.max(0, prev - amount));
  };

  return (
    <CreditContext.Provider value={{ 
      credits, 
      maxCredits, 
      currentPlan,
      isAutoReload,
      paymentMethod,
      billingCycle,
      nextBillingDate,
      addCredits, 
      consumeCredits, 
      updatePlan,
      toggleAutoReload,
      updatePaymentMethod,
      removePaymentMethod,
      cancelSubscription,
      setCredits,
      setMaxCredits 
    }}>
      {children}
    </CreditContext.Provider>
  );
};

export const useCredit = () => {
  const context = useContext(CreditContext);
  if (!context) {
    throw new Error('useCredit must be used within a CreditProvider');
  }
  return context;
};
