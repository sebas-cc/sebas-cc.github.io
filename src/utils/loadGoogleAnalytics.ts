const GA_MEASUREMENT_ID = "G-HL60F3BVY4";

export const loadGoogleAnalytics = (): void => {
  if (window.gtag) return;
  const comment = document.createComment(" Google tag (gtag.js) ");

  // Load gtag.js
  const script1 = document.createElement("script");
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script1.async = true;

  // Init GA
  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      anonymize_ip: true
    });
  `;
  document.head.appendChild(comment);
  document.head.appendChild(script1);
  document.head.appendChild(script2);
};
