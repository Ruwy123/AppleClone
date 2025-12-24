import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="container mx-auto py-7 max-lg:px-5">
      <div className="flex-between">
        <p className=" text-sm font-medium">
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 033523434634
        </p>
        <img src="/logo.svg" alt="logo" />
      </div>
      <hr className="my-7 text-[#424245]" />
      <div className="flex flex-col lg:flex-row lg:items-center justify-between max-lg:mt-5 gap-5 text-sm;">
        <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
        <ul className="lg:divide-x flex flex-col lg:flex-row gap-2.5">
          {footerLinks.map(({ label, link }) => (
            <li
              className="cursor-pointer hover:text-blue-500 transition-all duration-300 ease-in-out"
              key={label}
            >
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
