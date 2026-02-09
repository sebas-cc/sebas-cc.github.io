import { useCallback, useEffect, useState } from "react";
import { loadGoogleAnalytics } from "../utils/loadGoogleAnalytics";
import type { AnalyticsConsent } from "../types/consent";
import { removeGoogleAnalytics } from "../utils/removeGoogleAnalytics";

const CONSENT_KEY = "analytics_consent";

interface UseCookieConsentReturn {
  consent: AnalyticsConsent;
  grantConsent: () => void;
  denyConsent: () => void;
  resetConsent: () => void;
}

export const useCookieConsent = (): UseCookieConsentReturn => {
  const [consent, setConsent] = useState<AnalyticsConsent>(null);

  // Read stored consent on mount
  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_KEY);
    if (storedConsent === "granted" || storedConsent === "denied") {
      setConsent(storedConsent);
      if (storedConsent === "granted") {
        loadGoogleAnalytics();
      }
    } else {
      setConsent(null);
    }
  }, []);

  const grantConsent = useCallback((): void => {
    localStorage.setItem(CONSENT_KEY, "granted");
    setConsent("granted");
    loadGoogleAnalytics();
  }, []);

  const denyConsent = useCallback((): void => {
    localStorage.setItem(CONSENT_KEY, "denied");
    setConsent("denied");
    removeGoogleAnalytics();
  }, []);

  const resetConsent = useCallback((): void => {
    localStorage.removeItem(CONSENT_KEY);
    setConsent(null);
  }, []);

  return {
    consent,
    grantConsent,
    denyConsent,
    resetConsent,
  };
};