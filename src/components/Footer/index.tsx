import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/logo/logo-2.svg"
                  alt="logo"
                  className="w-full dark:hidden"
                  width={140}
                  height={30}
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  className="hidden w-full dark:block"
                  width={140}
                  height={30}
                />
              </Link>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                고품질의 솔루션과 서비스를 제공하는 전문적인 회사입니다. 
                항상 고객의 성공을 위해 최선을 다하고 있습니다.
              </p>
              <div className="flex items-center">
                <Link
                  href="/"
                  aria-label="social-link"
                  className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L14.3 2.05296C11.2394 2.05296 8.75 4.48486 8.75 7.42705V10.4939H6.5V13.7183H8.75V19.947H12.1V13.7183H14.3L16.5 10.4939H12.1Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link
                  href="/"
                  aria-label="social-link"
                  className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.33 2H14.67C17.236 2 19.33 4.094 19.33 6.66V15.34C19.33 17.906 17.236 20 14.67 20H7.33C4.764 20 2.67 17.906 2.67 15.34V6.66C2.67 4.094 4.764 2 7.33 2Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.5 11C16.5 14.038 14.038 16.5 11 16.5C7.962 16.5 5.5 14.038 5.5 11C5.5 7.962 7.962 5.5 11 5.5C14.038 5.5 16.5 7.962 16.5 11ZM11 14C12.657 14 14 12.657 14 11C14 9.343 12.657 8 11 8C9.343 8 8 9.343 8 11C8 12.657 9.343 14 11 14Z"
                      fill="white"
                    />
                    <circle cx="17.5" cy="4.5" r="1.5" fill="white" />
                  </svg>
                </Link>
                <Link
                  href="/"
                  aria-label="social-link"
                  className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5821 5.54289C20.8121 5.88478 19.9821 6.11478 19.1121 6.21478C19.9821 5.72289 20.6521 4.93478 20.9721 3.98289C20.1421 4.43478 19.2321 4.75478 18.2621 4.90289C17.4821 4.11478 16.3821 3.61478 15.1821 3.61478C12.8521 3.61478 11.0021 5.43478 11.0021 7.65478C11.0021 7.99289 11.0421 8.31478 11.1121 8.62289C7.69208 8.48289 4.65208 6.85478 2.68208 4.41478C2.31208 5.04289 2.10208 5.72289 2.10208 6.45478C2.10208 7.78289 2.78208 8.96289 3.84208 9.65478C3.21208 9.63478 2.62208 9.45478 2.11208 9.14289V9.18289C2.11208 11.1529 3.54208 12.8029 5.39208 13.2029C5.04208 13.2929 4.66208 13.3429 4.27208 13.3429C4.00208 13.3429 3.73208 13.3129 3.47208 13.2629C4.01208 14.8929 5.52208 16.0729 7.31208 16.1029C5.89208 17.1929 4.13208 17.8429 2.22208 17.8429C1.87208 17.8429 1.53208 17.8229 1.19208 17.7829C3.00208 18.9429 5.13208 19.6129 7.42208 19.6129C15.1721 19.6129 19.4221 13.4129 19.4221 8.14289C19.4221 7.95478 19.4221 7.77478 19.4121 7.59478C20.2521 7.03478 20.9721 6.32289 21.5821 5.54289Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                Useful Links
              </h2>
              <ul>
                <li>
                  <Link
                    href="/about"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                Terms
              </h2>
              <ul>
                <li>
                  <a
                    href="#"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    TOS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                Support & Help
              </h2>
              <ul>
                <li>
                  <a
                    href="#"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Open Support Ticket
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            Built with Next.js and TailwindCSS ♡ by{" "}
            <a
              href="https://nextjstemplates.com"
              rel="nofollow noopner"
              target="_blank"
              className="hover:text-primary"
            >
              NextJS Templates
            </a>
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-14 z-[-1]">
        <svg
          width="55"
          height="99"
          viewBox="0 0 55 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
          <mask
            id="mask0_94:899"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="99"
            height="99"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#4A6CF7" />
          </mask>
          <g mask="url(#mask0_94:899)">
            <circle
              opacity="0.8"
              cx="49.5"
              cy="49.5"
              r="49.5"
              fill="url(#paint0_radial_94:899)"
            />
            <g opacity="0.8" filter="url(#filter0_f_94:899)">
              <circle cx="53.8676" cy="26.2061" r="4.56879" fill="white" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_94:899"
              x="44.4888"
              y="16.8273"
              width="18.7578"
              height="18.7578"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2.25"
                result="effect1_foregroundBlur_94:899"
              />
            </filter>
            <radialGradient
              id="paint0_radial_94:899"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
            >
              <stop stopOpacity="0.47" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-24 left-0 z-[-1]">
        <svg
          width="79"
          height="94"
          viewBox="0 0 79 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-41"
            y="26.9426"
            width="66.6667"
            height="66.6667"
            transform="rotate(-22.9007 -41 26.9426)"
            fill="url(#paint0_linear_94:889)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_94:889"
              x1="-41"
              y1="21.8359"
              x2="36.9671"
              y2="59.8368"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;