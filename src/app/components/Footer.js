import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-noir via-mauve-dark to-taupe text-creme pt-12 pb-6 shadow-inner border-t border-rose-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 fleur-bg" />
      <div className="eiffel-motif top-10 left-10 opacity-30" />
      <div className="eiffel-motif bottom-10 right-10 opacity-30 transform scale-y-[-1]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between px-8 gap-12 pb-8 relative z-10">
        {/* Left: Logo & Contact */}
        <div className="flex flex-col gap-6 min-w-[250px] items-center md:items-start">
          <div className="relative">
            <Image
              src="/images/sugarmuse-logo.png"
              alt="SugarMuse"
              width={100}
              height={100}
              className="w-24 mb-2 rounded-full shadow-lg ring-2 ring-gold p-1 bg-creme/90"
            />
            <div className="absolute -bottom-2 -right-2 bg-gold text-noir text-xs font-bold px-2 py-1 rounded-full">
              Paris
            </div>
          </div>
          <h3 className="text-2xl parisienne-font font-bold text-rose mb-2 text-center md:text-left drop-shadow-sm">
            SugarMuse Paris
          </h3>
          <div className="flex flex-col gap-2 text-taupe text-sm">
            <span>
              <FontAwesomeIcon icon={faPhone} className="text-rose-dark mr-2" />
              <b>Tel:</b>{" "}
              <a
                href="tel:+913340838688"
                className="hover:text-gold transition"
              >
                +91-33-40838688
              </a>{" "}
              (9AM–9PM)
            </span>
            <span>
              <FontAwesomeIcon icon={faPhone} className="text-rose-dark mr-2" />
              <b>WhatsApp:</b>{" "}
              <a
                href="https://wa.me/9836034567"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition"
              >
                9836034567
              </a>{" "}
              (9AM–9PM)
            </span>
            <span>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-rose-dark mr-2"
              />
              <b>Email:</b>{" "}
              <a
                href="mailto:sugarmusecares@support.com"
                className="hover:text-gold transition"
              >
                sugarmusecares@support.com
              </a>
            </span>
          </div>
          {/* Social Media */}
          <div className="flex gap-4 mt-3">
            <a
              href="https://instagram.com/"
              target="_blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-rose text-2xl hover:text-gold transition"
              />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              aria-label="Facebook"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-rose-dark text-2xl hover:text-gold transition"
              />
            </a>
            <a href="https://youtube.com/" target="_blank" aria-label="YouTube">
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-rose-darker text-2xl hover:text-gold transition"
              />
            </a>
            <a href="https://x.com/" target="_blank" aria-label="X">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-noir text-2xl hover:text-gold transition"
              />
            </a>
          </div>
        </div>

        {/* Right: Links */}
        <div className="grid grid-cols-2 gap-8 md:gap-20 md:text-left text-center">
          <div>
            <h4 className="text-rose font-bold mb-3 text-lg">Company</h4>
            <ul className="flex flex-col gap-2 text-taupe text-sm">
              <li>
                <a href="#" className="hover:text-gold transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Parisian Inspiration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Boutique Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-rose font-bold mb-3 text-lg">Useful Links</h4>
            <ul className="flex flex-col gap-2 text-taupe text-sm">
              <li>
                <a href="#" className="hover:text-gold transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition">
                  Delivery Areas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="w-full text-center text-taupe/80 text-xs border-t border-rose-dark/30 py-4 mt-1 relative z-10">
        <span className="block font-semibold text-gold mb-1">
          FSSAI Certified | Parisian Inspired
        </span>
        &copy; {new Date().getFullYear()}{" "}
        <span className="parisienne-font text-rose">SugarMuse Paris</span>. All
        rights reserved.
      </div>
    </footer>
  );
}
