import React from "react";
import { useSpring, animated } from "react-spring";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt
} from "react-icons/fa";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  EMAIL_ADDRESS,
  WHATSAPP,
} from "../constants/index";

const contactDetails = {
  email: EMAIL_ADDRESS,
  whatsapp: WHATSAPP,
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL,
  location: 'Lahore, Pakistan',
};

const ContactItem = ({ Icon, label, value, href }) => (
  <div className="flex items-center gap-4 group mb-4">
    <div className="flex-shrink-0 bg-goldDesert/10 p-3 rounded-full group-hover:bg-goldDesert/20 transition-colors duration-300">
      <Icon className="text-goldDesert text-2xl" />
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg text-darkDesert font-medium hover:text-goldDesert hover:underline underline-offset-2 transition-colors duration-300"
      >
        {value}
      </a>
    </div>
  </div>
);

export default function ContactMe() {
  const contactSpring = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 200, // Optional delay for the animation
  });

  return (
    <animated.section
      id="contact-me"
      className="flex flex-col items-center justify-center bg-lightDesert p-8 py-16 md:py-24 rounded-lg shadow-md min-h-screen" // Adjusted padding
      style={contactSpring}
    >
      <div className="w-full max-w-lg text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-darkDesert mb-6 text-center">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-center">
          I'm always open to discussing new projects, creative ideas, or
          opportunities. Feel free to reach out through any of the channels
          below!
        </p>
        <div className="flex flex-col items-center md:items-start">
          {/* Email */}
          {contactDetails.email && (
            <ContactItem
              Icon={FaEnvelope}
              label="Email"
              value={contactDetails.email}
            />
          )}
          {/* Phone (Optional) */}
          {contactDetails.phone && (
            <ContactItem
              Icon={FaPhoneAlt}
              label="Phone"
              value={contactDetails.phone}
            />
          )}
          {/* WhatsApp (Optional) */}
          {contactDetails.whatsapp && (
            <ContactItem
              Icon={FaWhatsapp}
              label="WhatsApp"
              value="Chat on WhatsApp"
              href={`https://wa.me/${contactDetails.whatsapp.replace(
                /[\s+()-]/g,
                ""
              )}`}
            />
          )}
          {/* LinkedIn (Optional) */}
          {contactDetails.linkedin && (
            <ContactItem
              Icon={FaLinkedin}
              label="LinkedIn"
              value="Connect on LinkedIn"
              href={contactDetails.linkedin}
            />
          )}
          {/* GitHub (Optional) */}
          {contactDetails.github && (
            <ContactItem
              Icon={FaGithub}
              label="GitHub"
              value="View on GitHub" // Generic text or your username
              href={contactDetails.github}
            />
          )}
          {/* e.g., Location */}
          {contactDetails.location && (
                 <ContactItem
                    Icon={FaMapMarkerAlt}
                    label="Location"
                    value={contactDetails.location}
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.location)}`} // Example Google Maps link
                />
            )}
        </div>
      </div>
    </animated.section>
  );
}
