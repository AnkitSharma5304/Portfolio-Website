import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="w-full c-space">
      <div className="mb-6 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex flex-col items-center justify-between gap-5 pb-8 text-sm text-neutral-400 sm:flex-row">
        <div className="flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex gap-3">
          {mySocials.map((social, index) => (
            <a href={social.href} key={index} target="_blank" rel="noopener noreferrer">
              <img src={social.icon} className="w-5 h-5 hover:opacity-70 transition-opacity" alt={social.name} />
            </a>
          ))}
        </div>
        <p>© 2025 Ankit Sharma. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
