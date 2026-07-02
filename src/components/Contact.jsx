import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Phone, MessageCircle, Mail, MapPin, Globe, Check } from "lucide-react";
import Reveal from "./Reveal";
import { CONTACT } from "../data";
import { EMAILJS_CONFIG } from "../emailjs.config";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Web Development",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSending(true);
    setError(false);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          type: form.type,
          message: form.message,
        },
        { publicKey: EMAILJS_CONFIG.publicKey }
      );
      setSent(true);
    } catch (err) {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section sec-dark">
      <div className="container contact-grid">
        <div>
          <Reveal className="eyebrow">
            <span className="pip" /> Contact Us
          </Reveal>
          <Reveal as="h2" className="h2" style={{ marginTop: 18 }}>
            Let's build something that <span className="accent">works</span>.
          </Reveal>
          <Reveal as="p" className="lead" style={{ marginTop: 20 }}>
            Tell us about your project and we'll get back to you with a scope and
            a quote — usually within a day.
          </Reveal>

          <Reveal className="cinfo">
            <a href={CONTACT.landlineHref}>
              <span className="ci">
                <Phone size={18} />
              </span>
              <span>
                <span className="ct">Landline</span>
                <span className="cv">{CONTACT.landline}</span>
              </span>
            </a>
            <a href={CONTACT.hotlineHref} target="_blank" rel="noreferrer">
              <span className="ci">
                <MessageCircle size={18} />
              </span>
              <span>
                <span className="ct">Hotline &amp; WhatsApp</span>
                <span className="cv">{CONTACT.hotline}</span>
              </span>
            </a>
            <a href={"mailto:" + CONTACT.email}>
              <span className="ci">
                <Mail size={18} />
              </span>
              <span>
                <span className="ct">Email</span>
                <span className="cv">{CONTACT.email}</span>
              </span>
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <span className="ci">
                <MapPin size={18} />
              </span>
              <span>
                <span className="ct">Address</span>
                <span className="cv">{CONTACT.address}</span>
              </span>
            </a>
            <a href={CONTACT.websiteHref} target="_blank" rel="noreferrer">
              <span className="ci">
                <Globe size={18} />
              </span>
              <span>
                <span className="ct">Website</span>
                <span className="cv">{CONTACT.website}</span>
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="form">
            {sent ? (
              <div className="thanks">
                <div className="tk">
                  <Check size={30} />
                </div>
                <h3 className="h3">Message received</h3>
                <p>Thanks, {form.name || "there"} — we'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="two">
                  <div className="field">
                    <label htmlFor="cf-name">Name</label>
                    <input
                      id="cf-name"
                      className="input"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-email">Email</label>
                    <input
                      id="cf-email"
                      className="input"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="two">
                  <div className="field">
                    <label htmlFor="cf-phone">Phone</label>
                    <input
                      id="cf-phone"
                      className="input"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="Optional"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="cf-type">Project Type</label>
                    <select id="cf-type" value={form.type} onChange={update("type")}>
                      <option>Design &amp; Branding</option>
                      <option>Web Development</option>
                      <option>Mobile App</option>
                      <option>CRM &amp; Infrastructure</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="cf-msg">Message</label>
                  <textarea
                    id="cf-msg"
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your project…"
                  />
                </div>
                <button className="btn btn-primary" type="submit" disabled={sending}>
                  {sending ? "Sending…" : "Send Message"}{" "}
                  <ArrowUpRight size={17} className="ic" />
                </button>
                {error && (
                  <p style={{ color: "#f87171", marginTop: 12 }}>
                    Something went wrong sending your message. Please try again or
                    email us directly at {CONTACT.email}.
                  </p>
                )}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
