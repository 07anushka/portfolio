import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef(null);

  const [loading, setLoading] = useState(false);

  console.log(import.meta.env);

  const sendEmail = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("FORM SUBMITTED");

    if (loading) return;

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email Sent:", result);

      toast.success("🎉 Message sent successfully!", {
        duration: 4000,
      });

      form.current.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);

      toast.error("❌ Failed to send message.", {
        duration: 4000,
      });
    } finally {
      setLoading(false);
    }

    return false;
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="uppercase tracking-[8px] text-purple-400">
            CONTACT
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-6">
            Let's Work
            <br />

            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-gray-400 leading-8">
            I'm always open to internships,
            freelance projects,
            collaborations and full-time opportunities.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-[35px]
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              p-10
            "
          >

            <h3 className="text-3xl font-bold mb-10">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-400">
                    anushkanaik0705@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Phone
                  </h4>

                  <p className="text-gray-400">
                    +91 6361603196
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Location
                  </h4>

                  <p className="text-gray-400">
                    Bangalore, Karnataka
                  </p>
                </div>

              </div>

            </div>

            <div className="flex gap-5 mt-12">

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/07anushka"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-violet-500"
              >
                <FaGithub size={22} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/anushka-a-naik-965593253/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-500"
              >
                <FaLinkedin size={22} />
              </motion.a>

            </div>

          </motion.div>
                    {/* RIGHT */}

                    <form
            ref={form}
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className="
              rounded-[35px]
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              p-10
              space-y-6
            "
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="
                w-full
                p-5
                rounded-2xl
                bg-[#111827]
                border
                border-white/10
                outline-none
                transition
                focus:border-violet-500
              "
            />

            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              required
              className="
                w-full
                p-5
                rounded-2xl
                bg-[#111827]
                border
                border-white/10
                outline-none
                transition
                focus:border-violet-500
              "
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="
                w-full
                p-5
                rounded-2xl
                bg-[#111827]
                border
                border-white/10
                outline-none
                transition
                focus:border-violet-500
              "
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Your Message"
              required
              className="
                w-full
                p-5
                rounded-2xl
                bg-[#111827]
                border
                border-white/10
                outline-none
                resize-none
                transition
                focus:border-violet-500
              "
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{
                scale: loading ? 1 : 1.03,
              }}
              whileTap={{
                scale: loading ? 1 : 0.96,
              }}
              className="
                w-full
                py-5
                rounded-2xl
                bg-gradient-to-r
                from-violet-600
                via-purple-600
                to-cyan-500
                text-white
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                shadow-[0_0_35px_rgba(168,85,247,.35)]
                transition-all
                disabled:opacity-70
                disabled:cursor-not-allowed
              "
            >
              <FaPaperPlane />

              {loading ? "Sending..." : "Send Message"}

            </motion.button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;