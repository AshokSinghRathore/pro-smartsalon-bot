import { useNavigate } from "react-router";

const LINKS = [
  { label: "Home", href: "/" },
  // { label: "Features", href: "/features" },
  { label: "Demo", href: "/demo" },
  { label: "Contact Us", href: "/contact" },
  { lebel: "Pricing", href: "/pricing" },
];
const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="mt-10 bg-gradient px-8 pt-12 lg:px-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <button
              onClick={() => navigate("/")}
              className="mb-4 flex items-center gap-2 text-2xl font-semibold text-white"
            >
              <img
                alt="logo"
                src={"../image/smartsalonbot-logo.jpg"}
                className="h-26 w-26"
              />
              {/* SmartSalonBot */}
            </button>
            <p className="mb-12 font-normal text-white sm:max-w-4xl">
              Smart Salon Bot is a revolutionary Salon Management software designed to simplify the operations of your salon.
            </p>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigate(link.href)}
                    className={`py-1 font-medium text-white transition-colors hover:text-gray-300 ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <h6 className="mb-3 text-lg font-semibold text-white">
              Let Connect
            </h6>
            <div className="flex flex-col gap-2">
              <a
                href={"/contact"}
                className="flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-md transition hover:shadow-lg"
              >
                Contact
              </a>
              <a
                href={
                  "/demo"
                }
                className=" flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-md transition hover:shadow-lg"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <p className="text-center text-sm font-normal text-white opacity-75">
            &copy; {CURRENT_YEAR} Made by{" "}
            <a
              href="https://www.code-aspire.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              <span className="text-blue-400">Code</span>
              <span className="text-orange-400">Aspire</span>
            </a>
            .
          </p>

          <div className="flex gap-2">
            {/* Social Icons */}
            {[
              { icon: "fa-instagram", link: "https://www.instagram.com/smartsalonbot?utm_source=qr&igsh=MzI4dXpzdzVlczE5" },
              {
                icon: "fa-youtube",
                link: "https://www.youtube.com/@smartsalonbot-l7o",
              },
              {
                icon: "fa-facebook",
                link: "https://www.facebook.com/share/19BjsKic2q/",
              },
            ].map((social) => (
              <a
                key={social.icon}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-white hover:bg-white hover:text-gray-900 transition"
              >
                <i
                  className={`fa-brands ${social.icon} text-2xl opacity-75`}
                ></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
