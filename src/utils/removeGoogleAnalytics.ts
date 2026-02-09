const GA_MEASUREMENT_ID = "G-HL60F3BVY4";

export const removeGoogleAnalytics = (): void => {
  // Remove gtag script
  const gtagScript = document.querySelector(
    `script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`
  );

  if (gtagScript?.parentNode) {
    gtagScript.parentNode.removeChild(gtagScript);
  }

  // Remove inline init script
  const inlineScripts = document.querySelectorAll("script");
  inlineScripts.forEach((script) => {
    if (script.innerHTML.includes(`'${GA_MEASUREMENT_ID}'`)) {
      script.parentNode?.removeChild(script);
    }
  });

  // Remove comment node
  const comments = Array.from(document.head.childNodes).filter(
    (node) =>
      node.nodeType === Node.COMMENT_NODE &&
      node.textContent?.includes("Google tag")
  );

  comments.forEach((comment) => comment.parentNode?.removeChild(comment));

  // Disable GA globally
  (window as any).gtag = undefined;
  (window as any).dataLayer = undefined;
  (window as any)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
};
