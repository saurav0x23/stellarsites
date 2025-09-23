import React from "react";
import CardNav from "./ui/CardNav";
import logo from "@/public/logo.png";

const Navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "/about" },
        { label: "Careers", ariaLabel: "About Careers", href: "/careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Featured",
          ariaLabel: "Featured Projects",
          href: "/projects",
        },
        {
          label: "Case Studies",
          ariaLabel: "Project Case Studies",
          href: "/case-studies",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Email",
          ariaLabel: "Email us",
          href: "mailto:BtBZD@example.com",
        },
        {
          label: "Twitter",
          ariaLabel: "Twitter",
          href: "https://twitter.com/BtBZD",
        },
        {
          label: "LinkedIn",
          ariaLabel: "LinkedIn",
          href: "https://linkedin.com/company/BtBZD",
        },
      ],
    },
  ];


  return <CardNav items={items} logo={logo} />;
};

export default Navbar;
