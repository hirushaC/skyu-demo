import config from "@config/config.json";
import theme from "@config/theme.json";
import ChatBot from "@layouts/components/ChatBot";
import Head from "next/head";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { ThemeProvider } from "@layouts/ThemeContext";
import "styles/style.scss";
import { useRouter } from "next/router";
import Script from "next/script";
import Hotjar from "@hotjar/browser";
import LoadingPage from "@layouts/components/LoadingPage";
import { InitialLoad } from "@layouts/components/InitialLoad";
import Image from "next/image";

const App = ({ Component, pageProps }) => {
  // import google font css
  const router = useRouter();
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  const [fontcss, setFontcss] = useState();
  const [countdownComplete, setCountdownComplete] = useState(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const showInitialLoaders = process.env.NEXT_PUBLIC_SHOW_INITIAL_LOADERS === 'true';

  useEffect(() => {
    // Check if the countdown completion state is stored (e.g., in localStorage)
    const storedCountdownComplete =
      localStorage.getItem("countdownComplete") === "true";
    setCountdownComplete(storedCountdownComplete);
  }, []);

  const handleCountdownComplete = () => {
    localStorage.setItem("countdownComplete", "true");
    setCountdownComplete(true);
  };

  const handleInitialLoadComplete = () => {
    setInitialLoadComplete(true);
    setShowWelcome(true);

    setTimeout(() => {
      setShowWelcome(false);
    }, 2000);
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css2?family=${pf}${
      sf ? "&family=" + sf : ""
    }&display=swap`;
    link.rel = "preload";
    link.as = "style";

    document.head.appendChild(link);

    link.onload = () => {
      link.rel = "stylesheet";
    };

    // handling an error for a critical resource
    link.onerror = () => {
      if (!sessionStorage.getItem("hasReloaded")) {
        sessionStorage.setItem("hasReloaded", "true");
        console.error("Critical resource failed to load, reloading the page.");
        window.location.reload(true); // Force reload without cache
      } else {
        console.error("Critical resource failed again after reload.");
      }
    };
  }, [pf, sf]);

  // Hotjar initialization
  useEffect(() => {
    if (typeof window !== "undefined") {
      const siteId = 3873265;
      const hotjarVersion = 6;

      Hotjar.init(siteId, hotjarVersion);
    }
  }, []);

  // google tag manager (gtm)
  const tagManagerArgs = {
    gtmId: config.params.tag_manager_id,
  };
  useEffect(() => {
    setTimeout(() => {
      process.env.NODE_ENV === "production" &&
        config.params.tag_manager_id &&
        TagManager.initialize(tagManagerArgs);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Google Analytics page view tracking
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", config.params.google_analytics_id, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Reload when styles are not loading
  useEffect(() => {
    const checkStylesLoaded = () => {
      const marker = window.getComputedStyle(document.body, ":after").content;

      if (marker !== '"style-loaded"') {
        console.warn("Styles not loaded, reloading...");
        if (!sessionStorage.reloadCount || sessionStorage.reloadCount < 1) {
          sessionStorage.reloadCount = Number(sessionStorage.reloadCount) + 1;
          window.location.reload();
        } else {
          console.warn("Reload attempted; still failing to load styles.");
        }
      } else {
        sessionStorage.reloadCount = 0;
      }
    };

    window.addEventListener("load", checkStylesLoaded);
    return () => window.removeEventListener("load", checkStylesLoaded);
  }, []);

  if (!countdownComplete && showInitialLoaders) {
    return <LoadingPage onComplete={handleCountdownComplete} />;
  }

  if (!initialLoadComplete && showInitialLoaders) {
    return <InitialLoad onComplete={handleInitialLoadComplete} />;
  }

  if (showWelcome && showInitialLoaders) {
    return (
      <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "24px", textAlign: "center" }}>
        <Image src='/images/logo.svg' width={200} height={200} alt='logo'/>
      </div>
    );
  }

  return (
    <>
      <Head>
        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `${fontcss}`,
          }}
        />
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        <meta
          name="google-site-verification"
          content="12648AqXB4i3B_VyasHCwLl-H0ryDDFDdF3ZAX2WtyQ"
        />
      </Head>

      {/* Google Analytics Scripts */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${config.params.google_analytics_id}`}
      />
      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.params.google_analytics_id}');
          `,
        }}
      />

      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      <ChatBot />
    </>
  );
};

export default App;
