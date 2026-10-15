import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
const footerData = [
  {
    title: "Company",
    links: [
      { name: "Features", url: "/" },
      { name: "Pricing", url: "/" },
      { name: "Affiliate Program", url: "/" },
      { name: "Press Kit", url: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Account", url: "/" },
      { name: "Help", url: "/" },
      { name: "Contact Us", url: "/" },
      { name: "Customer Support", url: "/" },
    ],
  },
  {
    title: "Legals",
    links: [
      { name: "Terms & Conditions", url: "/" },
      { name: "Privacy Policy", url: "/" },
      { name: "Licensing", url: "/" },
    ],
  },
];

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-800 border-t border-gray-700">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-400">
                  &copy; Copyright {new Date().getFullYear()}. All Rights
                  Reserved by Me.
                </p>
              </div>
            </div>
          </div>
          {footerData.map((column, index) => (
            <div key={index} className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                  {column.title}
                </h3>
                <ul>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-4">
                      <Link
                        className="text-base font-medium text-gray-200 hover:text-gray-700 transition-colors"
                        to={link.url}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
