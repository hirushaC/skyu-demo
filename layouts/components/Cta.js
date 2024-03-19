import config from "@config/config.json";
import ImageFallback from "./ImageFallback";
import { useEffect, useState } from "react";
import { FiCheckSquare, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@layouts/ThemeContext";

const SlideInNotifications = ({ notifications, removeNotif }) => {
  return (
    <div className="justify-right pointer-events-none bottom-8 z-50 float-right flex w-full flex-col gap-1 overscroll-y-auto">
      <AnimatePresence>
        {notifications.map((n) => (
          <Notification removeNotif={removeNotif} {...n} key={n.id} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const NOTIFICATION_TTL = 5000;

const Notification = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, []);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`flex items-start gap-2 rounded p-2 text-xs font-medium text-white shadow-lg ${
        text === "Email subscribed successfully" ? "bg-green-500" : "bg-red-500"
      }  pointer-events-auto`}
    >
      <FiCheckSquare className=" mt-0.5" />
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        <FiX />
      </button>
    </motion.div>
  );
};

const generateSentNotif = () => {
  return {
    id: Math.random(),
    text: "Email subscribed successfully",
  };
};

const generateUnsentNotif = () => {
  return {
    id: Math.random(),
    text: "Error while subscribing email",
  };
};

function Cta() {
  const { enable } = config.call_to_action;
  if (!enable) return;


  return (
    <div className="">
      <section
        className={`animate box-shadow lg:grid grid-cols-3 auto-cols-auto items-center justify-center p-5 rounded-[16px] bg-[#0368B1]  sm:flex-row sm:px-16 sm:py-12`}
      >
        <div className="lg:col-span-2 text-center lg:text-left lg:pb-0 pb-36">
          <h2 className={`xs:text-[48px] xs:leading-[76.8px] w-full lg:text-[40px] text-35px font-medium text-white`}>
            Subscribe for the Beta Release
          </h2>
          <p
            className={`mt-2 lg:font-normal font-light text-slate-100`}
          >
            Be the first to experience SkyU! Subscribe now for exclusive access
            to the beta release. 
            Don&apos;t miss out on cutting-edge features and
            exciting updates. Join us on this journey!
          </p>

          <div className={`justify-left mt-8 `}>
            <div className="banner-btn">
              <Link className="btn bg-white text-[#0368B1] rounded-md shadow-lg font-medium" href="/contact">
                Request Access
              </Link>
            </div>
          </div>
          <div className={`absolute -bottom-[2px] -right-[2px] justify-right flex`}>
          <ImageFallback
            src="/images/vectors/cta-vector.svg"
            width={400}
            height={300}
            alt="cta-image"
            style={{ weight: "auto" }}
          />
        </div>
        </div>

      </section>
    </div>
  );
}

export default Cta;
