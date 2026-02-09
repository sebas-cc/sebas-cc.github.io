import { useEffect, useState } from "react";
import { useCookieConsent } from "../hooks/useCookieConsent";
import "./CookieBanner.css";

export const CookieBanner: React.FC = () => {
  const { consent, grantConsent, denyConsent } = useCookieConsent();
  const [isClose, setisClose] = useState(false);

  const handleConsent = () => {
    setisClose(true);
    grantConsent();
  }

  const handleDeny = () => {
    setisClose(true);
    denyConsent();
  }

  useEffect(() => {
    if (consent !== null) {
      setisClose(true);
    }
  }, [consent]);


  // Show reopen button if banner is closed
  if (isClose) {
    return (
      <button
        className="cookie-settings-button"
        type="button"
        aria-label="Open cookie preferences"
        onClick={() => setisClose(false)}
      >
        <svg
          aria-hidden="true"
          width="48"
          height="48"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <mask id="cookie-bite">
              {/* <!-- Everything visible by default --> */}
              <rect width="100%" height="100%" fill="white" />

              {/* <!-- Bite taken out --> */}
              <circle cx="100" cy="36" r="18" fill="black" />
            </mask>
          </defs>

          {/* <!-- Cookie base with bite --> */}
          <circle
            cx="64"
            cy="64"
            r="48"
            fill="currentColor"
            opacity="0.15"
            mask="url(#cookie-bite)"
          />

          {/* <!-- Chocolate chips --> */}
          <circle cx="44" cy="52" r="5" fill="currentColor" />
          <circle cx="68" cy="44" r="4" fill="currentColor" />
          <circle cx="80" cy="68" r="5" fill="currentColor" />
          <circle cx="56" cy="76" r="4" fill="currentColor" />
          <circle cx="72" cy="88" r="3.5" fill="currentColor" />
        </svg>
      </button>
    );
  }

  return (
    <aside
      className="cookie-banner"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
      aria-live="polite"
    >
      <h2 id="cookie-title" className="sr-only">
        Cookie preferences
      </h2>

      <p id="cookie-description">
        We use <strong>analytics cookies</strong> to understand how visitors
        interact with our site and to improve performance. These cookies do not
        identify you personally.
      </p>

      <div className="cta-buttons">
        <button
          type="button"
          onClick={handleConsent}
          className="btn btn-primary"
        >
          Accept cookies
        </button>

        <button
          type="button"
          onClick={handleDeny}
          className="btn btn-secondary"
        >
          Decline
        </button>
      </div>
    </aside>
  );
};
