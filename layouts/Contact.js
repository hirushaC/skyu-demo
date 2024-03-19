import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiCheckSquare, FiX } from "react-icons/fi";
import ImageFallback from "./components/ImageFallback";
import Cta from "./components/Cta";
import Script from "next/script";
import Logo from "./components/Logo";

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
  }, [id, removeNotif]);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`flex items-start gap-2 rounded p-2 text-xs font-medium text-white shadow-lg ${
        text === "Thank you for your submission" ? "bg-green-500" : "bg-red-500"
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
    text: "Thank you for your submission",
  };
};

const generateUnsentNotif = () => {
  return {
    id: Math.random(),
    text: "Error while submitting",
  };
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    help: "",
    message: "",
  });

  const [notifications, setNotifications] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendEmailPayload = {
      formData: {
        firstname: formData.fname,
        lastname: formData.lname,
        email: formData.email,
        help: formData.help,
        message: formData.message,
      },
      sendgridTemplateId: "d-b937b41de4be40efb4495ab020c87a4d",
      senderNamePlaceholder: "{{Sender_Name}}",
    };

    const hubSpotPayload = {
      submittedAt: Date.now(),
      fields: [
        { name: "firstname", value: formData.fname },
        { name: "lastname", value: formData.lname },
        { name: "email", value: formData.email },
        { name: "help", value: formData.help },
        { name: "message", value: formData.message },
      ],
      context: {},
    };

    try {
      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendEmailPayload),
      });

      const hubSpotResponse = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hubSpotPayload),
      });

      if (emailResponse.ok && hubSpotResponse.ok) {
        setFormData({
          fname: "",
          lname: "",
          email: "",
          help: "",
          message: "",
        });
        setNotifications((prev) => [generateSentNotif(), ...prev]);
      } else {
        throw new Error("Error with submission");
      }
    } catch (error) {
      console.error("Submission error:", error.message);
      setNotifications((prev) => [
        generateUnsentNotif("Error while sending email"),
        ...prev,
      ]);
    }
  };

  const removeNotif = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((n) => n.id !== id)
    );
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNotifications([]);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutId);
  }, [notifications]);

  return (
    <>
      <div className="grid md:grid-cols-2">
        <div className="bg-theme-light">
          <header className={`relative left-0 top-0 z-50 py-[10px]`}>
            <nav className="navbar container">
              {/* logo */}
              <div className="order-0 flex items-start">
                <Logo />
              </div>
            </nav>
          </header>
          <section className="section">
            <div className="container">
              <div className="relative">
                <div className="text-center">
                  <h1>Book a demo!</h1>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="section">
          <div className="container">
            <div className="relative">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/skyu-io/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=1695f1"
                style={{ minWidth: "320px", height: "700px" }}
              ></div>
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
              />
            </div>
          </div>
        </section>

        {/* <section className="lg:pb-32">
        <div className=" container">
          <div className="relative">
            <div className="py-10 text-center">
              <p className="text-[#878B9E]">How can we help?</p>
              <h1>Send us a message !</h1>
            </div>
            
            <div className="grid grid-cols-1 gap-10">
              <div className="grid auto-rows-auto">
                <div>
                  <form method="POST" onSubmit={handleSubmit} netlify="true">
                    <div className="mb-6 grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-medium" htmlFor="name">
                          First Name
                        </label>
                        <input
                          className="form-input w-full"
                          name="fname"
                          placeholder="Enter First Name"
                          type="text"
                          required
                          value={formData.fname}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="block font-medium" htmlFor="name">
                          Last Name
                        </label>
                        <input
                          className="form-input w-full"
                          name="lname"
                          placeholder="Enter Last Name"
                          type="text"
                          required
                          value={formData.lname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block font-medium" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="form-input w-full"
                        name="email"
                        placeholder="Enter Email Address"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block font-medium" htmlFor="help">
                        What can we help you with?
                      </label>
                      <select
                        className="form-input w-full"
                        id="help"
                        name="help"
                        value={formData.help}
                        onChange={handleChange}
                        required
                      >
                        <option disabled value="">
                          Select
                        </option>
                        <option value="option 1">Option 1</option>
                        <option value="option 2">Option 2</option>
                        <option value="option 3">Option 3</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label className="block font-medium" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="form-textarea w-full"
                        rows="5"
                        placeholder="Im Interested in learning more about..."
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary block w-full"
                    >
                      Submit
                    </button>
                  </form>

                  <SlideInNotifications
                    notifications={notifications}
                    removeNotif={removeNotif}
                  />
                </div>

                <div className="my-4 flex items-center justify-center">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-600">or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <Link href={`mailto:support@skyu.com`}>
                  <div className="flex items-center justify-center rounded-md border border-[#C9CCD9] bg-white text-center hover:border-[#424B66]">
                    <button className="flex items-center justify-center py-1">
                      <ImageFallback
                        src={"/icons/skyu-community.svg"}
                        width={39}
                        height={39}
                        alt="slack"
                      />
                      Connect via Slack
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section> */}
      </div>

      {/* <section className="section bg-theme-light">
        <div className="container text-center">
          <div className="relative">
            <Cta />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Contact;
