import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Heart,
  Instagram,
  Facebook,
  ArrowUpRight,
  Mail,
} from "lucide-react";

const SocialIcon = ({ icon: Icon, href = "#", className = "" }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors ${className}`}
  >
    <Icon className="w-6 h-6" />
  </Link>
);

const socialIcons = [
  { icon: Linkedin, platform: "https://www.linkedin.com/company/nplcoder/" },
  { icon: Instagram, platform: "https://www.instagram.com/nplcoder/" },
  { icon: Facebook, platform: 'https://www.facebook.com/people/NPLCoder/61576287650990/' },
  { icon: Mail, platform: "mailto:work@nplcoder.org" },
];

const Footer = () => {
  const quickLinks = [
    { href: "/", text: "Home" },
    { href: "/courses", text: "Courses" },
    { href: "/dashboard", text: "Dashboard" },
    { href: "/about", text: "About" },
  ];
  
  const contactInfo = [
   "NPLCoder",
   "Kathmandu, Nepal",
   "work@nplcoder.org",  
   "Empowering Nepali Students",
  ];
  
  return (
    <footer className="relative border-t border-gray-300 dark:border-gray-800 bg-white dark:bg-[#24293d] text-gray-800 dark:text-gray-300">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-white dark:bg-[#24293d]" />
      </div>
      <div className="relative">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
               Join Our Learning Community
              </h1>

              <a
                href="https://discord.com/invite/kJrvdhmzVd"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <button className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-white bg-gradient-to-r from-[#DC143C] to-[#003893] font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.317 4.369a19.791 19.791 0 0 0-4.884-1.528.075.075 0 0 0-.079.037c-.211.375-.447.864-.608 1.25-1.844-.276-3.68-.276-5.486 0-.162-.4-.41-.875-.625-1.25a.075.075 0 0 0-.079-.037A19.736 19.736 0 0 0 3.68 4.369a.07.07 0 0 0-.032.027C.533 9.174-.319 13.874.098 18.511a.081.081 0 0 0 .031.052A19.933 19.933 0 0 0 6.184 21.95a.076.076 0 0 0 .082-.027c.631-.86 1.18-1.767 1.641-2.695a.076.076 0 0 0-.041-.104 13.06 13.06 0 0 1-1.884-.905.076.076 0 0 1-.008-.125c.126-.094.252-.193.373-.295a.075.075 0 0 1 .077-.01c3.952 1.803 8.228 1.803 12.11 0a.075.075 0 0 1 .078.009c.12.102.247.201.374.295a.076.076 0 0 1-.007.125c-.597.35-1.244.657-1.887.905a.076.076 0 0 0-.04.104c.483.928 1.033 1.835 1.641 2.695a.076.076 0 0 0 .082.027 19.89 19.89 0 0 0 6.055-2.908.077.077 0 0 0 .031-.052c.5-5.14-.823-9.795-3.55-14.115a.075.075 0 0 0-.031-.026ZM9.02 15.403c-1.182 0-2.157-1.089-2.157-2.423 0-1.334.946-2.423 2.157-2.423 1.223 0 2.186 1.102 2.157 2.423 0 1.334-.946 2.423-2.157 2.423Zm5.958 0c-1.182 0-2.157-1.089-2.157-2.423 0-1.334.946-2.423 2.157-2.423 1.223 0 2.186 1.102 2.157 2.423 0 1.334-.946 2.423-2.157 2.423Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="pl-3 group-hover:pl-4 transition-all duration-300">
                    Join Our Discord
                  </p>
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:ml-3 transition-all duration-300" />
                </button>
              </a>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center mb-8 md:hidden">
            <div className="space-y-4 text-center">
              <Image
                src="/images/NPLCoder.png"
                alt="NPL Coder LMS Logo"
                width={80}
                height={80}
                className="object-cover mx-auto"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                NPLCoder LMS
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="hidden md:block space-y-4">
              <Image
                src="/images/NPLCoder.png"
                alt="NPL Coder LMS Logo"
                width={80}
                height={80}
                className="object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                NPLCoder LMS
              </h3>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Navigate
              </h4>
              <ul className="space-y-2">
                {quickLinks.map(({ href, text }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Contact Us
              </h4>
              <ul className="space-y-2">
                {contactInfo.map((info) => (
                  <li key={info} className="text-gray-700 dark:text-gray-300">
                    {info}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 text-center md:text-left mt-6 md:mt-0">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Follow Us
              </h4>
              <div className="flex gap-4 justify-center md:justify-start">
                {socialIcons.map(({ icon: Icon, platform }) => (
                  <SocialIcon key={platform} icon={Icon} href={platform} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-800">
          <div className="container mx-auto px-4 py-6 text-center flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-300">
              Made with
              <Heart className="w-5 h-5 text-[#DC143C] fill-current inline-block mx-1" />
              by Aashish Karki and Safal Poudel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
