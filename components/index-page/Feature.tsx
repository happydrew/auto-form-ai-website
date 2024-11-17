import React from "react";
import { RoughNotation } from "react-rough-notation";
import { MagnetIcon } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { FaEarthAsia, FaMobileScreenButton } from "react-icons/fa6";
import { MdCloudUpload } from "react-icons/md";

const FEATURES_EN = [
  {
    title: "One-Click Form Filling",
    content: "Instantly populate entire web forms with a single click, turning repetitive data entry into a seamless and efficient process.",
    icon: BsGithub,
  },
  {
    title: "Zero Configuration, Full Efficiency",
    content: "Start using AutoFormAI immediately without setup or technical expertise. Its automatic recognition of form elements removes the need for manual configuration, making it highly user-friendly.",
    icon: FaMobileScreenButton,
  },
  {
    title: "Reusable Information Library",
    content: "Store your data once and reuse it across multiple forms effortlessly, eliminating the hassle of repeatedly copying and pasting from different sources.",
    icon: FaToolbox,
  },
  {
    title: "Flexible Data Input and AI Matching",
    content: "Import data from any source—text files, emails, or documents—without reformatting. AutoFormAI's AI ensures smart extraction and precise matching of data to form fields.",
    icon: MagnetIcon,
  },
  {
    title: "Supports Complex and Custom Forms",
    content: `Fill out not only standard but also complex and custom forms on platforms like Google Forms and Salesforce. For specific customization needs, contact <a href="mailto:autoformai.floxai@gmail.com" className="text-blue-500 hover:underline mx-1">autoformai.floxai@gmail.com.</a>`,
    icon: MdCloudUpload,
  },
  {
    title: "Secure and Private Data Handling",
    content: "Keep your data safe with local storage, ensuring that sensitive information remains private and never leaves your device.",
    icon: FaEarthAsia,
  },
];

const Feature = ({
  id
}: {
  id: string;
}) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 pt-16"
    >
      <h2 className="text-center text-white text-4xl sm:text-6xl font-sans font-bold tracking-tight">
        <RoughNotation type="highlight" show={true} color="#2563EB">
          Features
        </RoughNotation>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES_EN?.map((feature, index) => (
          <div
            key={feature.title}
            className={`
              flex flex-col items-center text-center px-8 py-6 border-b
              ${index === 0 ? "md:border-r" : ""}
              ${index === 1 ? "lg:border-r" : ""}
              ${index === 2 ? "md:border-r lg:border-r-0" : ""}
              ${index === 3 ? "lg:border-b-0 lg:border-r" : ""}
              ${index === 4 ? "md:border-b-0 md:border-r" : ""}
              ${index === 5 ? "border-b-0 border-r-0" : ""}
            `}
          >
            <div className="p-4 w-16 h-16 dark:text-white rounded-full flex items-center justify-center">
              {feature.icon && typeof feature.icon === "string" ? (
                <span className="text-2xl">{feature.icon}</span>
              ) : (
                React.createElement(feature.icon, { className: "text-2xl" })
              )}
            </div>
            <h2 className={"text-xl font-semibold mb-2"}>{feature.title}</h2>
            <p className="text-slate-700 dark:text-slate-400"
              dangerouslySetInnerHTML={{ __html: feature.content }}>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
