import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { styles } from "../../constants/styles";
import { mascara3 } from "../../assets/index";
import Zoom from "@mui/material/Zoom";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
          phone_number: form.phone,
        },
        emailjsConfig.publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Merci. Je vous répondrai dans les plus brefs délais.");

          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Quelque chose s'est mal passé.");
        }
      );
  };

  return (
    <div className="relative pt-60 md:pt-10 mt-[-11rem] md:mb-[-10rem]">
      <div className="absolute top-0 left-0 w-full h-full"></div>
      <div className="relative z-10 md:p-8">
        <div className="relative min-h-screen w-full">
          <div className="absolute top-0 left-0 w-full h-full "></div>
          <div className="relative z-10 pt-40 md:pt-8 mt:p-8 ">
            <div
              className={`flex flex-col-reverse gap-10 overflow-hidden xl:flex-row`}
            >
              <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] rounded-2xl md:p-8 -pt-24 md:pt-24"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.012061346524!2d2.8220508680527487!3d36.47677258882691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0d690e821db7%3A0xe7347b066a229aec!2sSarl%20Crystal%20fountain!5e0!3m2!1sen!2sdz!4v1720563054825!5m2!1sen!2sdz"
                  width="100%"
                  height="325"
                  allowFullScreen
                  loading="lazy"
                  style={{ borderRadius: "20px", border: "none" }}
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
              <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="md:h-[370px] md:h-[600px] relative md:top-[100px] xl:h-auto xl:flex-1"
              >
                <img src={mascara3} alt="" style={{ borderRadius: "10px" }} />
              </motion.div>
            </div>
            <Zoom in={true} timeout={1250}>
              <div className="relative top-8 md:top-0 bg-[#023F92] rounded-2xl">
                <motion.div
                  variants={slideIn("up", "tween", 0.2, 1)}
                  className="bg-black-100 flex-[0.75] rounded-2xl p-8 mb-16 md:mb-0"
                >
                  <h2
                    style={{ fontSize: "30px" }}
                    className={styles.sectionHeadText}
                  >
                    Réservez un Rendez-Vous
                  </h2>
                  <p className={styles.sectionSubText}>
                    Remplissez le formulaire et nous vous contacterons pour un
                    devis personnalisé.
                  </p>
                  <form
                    // @ts-expect-error
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                  >
                    <div className="flex flex-wrap gap-4">
                      {Object.keys(config.contact.form).map((input) => {
                        const { span, placeholder } =
                          config.contact.form[
                            input as keyof typeof config.contact.form
                          ];
                        const Component =
                          input === "message" ? "textarea" : "input";
                        if (input === "message") return null;
                        return (
                          <label
                            key={input}
                            className="flex flex-col flex-1 min-w-[200px]"
                          >
                            <span className="mb-4 font-medium text-white">
                              {span}
                            </span>
                            <Component
                              type={input === "email" ? "email" : "text"}
                              name={input}
                              required
                              value={form[input as keyof typeof form]}
                              onChange={handleChange}
                              placeholder={placeholder}
                              style={{ background: "#EFF1F3" }}
                              className="placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-black outline-none"
                            />
                          </label>
                        );
                      })}
                    </div>
                    <label className="flex flex-col">
                      <span className="mb-4 font-medium text-white">
                        Message
                      </span>
                      <textarea
                        required
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Votre message"
                        style={{ background: "#EFF1F3" }}
                        className="bg-white placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-black outline-none"
                        rows={3}
                      />
                    </label>
                    <button
                      type="submit"
                      className="contact w-fit rounded-xl px-8 py-3 font-bold w-full text-white shadow-md shadow-primary outline-none hover:animation-none"
                    >
                      {loading ? "Envoi..." : "Envoyer"}
                    </button>
                  </form>
                </motion.div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
