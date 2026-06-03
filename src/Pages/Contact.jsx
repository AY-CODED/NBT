import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, X } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_xxxxxxx", // Replace with your Service ID
        "template_xxxxxxx", // Replace with your Template ID
        e.target,
        "public_key_xxxxxxx" // Replace with your Public Key
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        e.target.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="relative bg-slate-950 text-white min-h-screen overflow-hidden">
      {/* Background Lights */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600 opacity-20 blur-3xl rounded-full top-20 left-10 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      {/* Hero */}
      <div className="text-center py-20 px-4 relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          Contact <span className="text-blue-500">Norex Brain Tech</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Start your tech journey today. Reach out to our team and we'll guide you.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20 grid md:grid-cols-2 gap-14 relative z-10">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-center gap-5 bg-slate-900 p-6 rounded-xl border border-slate-800">
            <Phone className="text-blue-500" size={32} />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-400">+234 XXX XXX XXXX</p>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-slate-900 p-6 rounded-xl border border-slate-800">
            <Mail className="text-blue-500" size={32} />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-400">info@norexbraintech.com</p>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-slate-900 p-6 rounded-xl border border-slate-800">
            <MapPin className="text-blue-500" size={32} />
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-400">Lagos, Nigeria</p>
            </div>
          </div>

          <a
            href="https://wa.me/234000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 transition p-4 rounded-xl font-semibold"
          >
            <MessageCircle />
            Chat on WhatsApp
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-xl border border-slate-800 shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <form onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-3 rounded bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 rounded bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
        <div className="rounded-xl overflow-hidden border border-slate-800">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=lagos%20nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px]"
          ></iframe>
        </div>
      </div>

      {/* Success Popup */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          <div className="relative bg-slate-900 border border-blue-500 rounded-xl p-10 max-w-md w-full text-center animate-fadeIn">
            <X
              size={24}
              className="absolute top-4 right-4 cursor-pointer hover:text-red-500"
              onClick={() => setSuccess(false)}
            />

            <h2 className="text-2xl font-bold text-blue-500 mb-4">
              Thank You!
            </h2>

            <p className="text-gray-300">
              Thanks for reaching out to <span className="font-semibold text-white">Norex Brain Tech</span>.
              <br />
              We will get back to you shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}