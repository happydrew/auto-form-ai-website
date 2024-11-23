"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { span } from "framer-motion/client";
import { PlusIcon } from "lucide-react";
import { RoughNotation } from "react-rough-notation";

// update rough notation highlight
function triggerResizeEvent() {
  const event = new Event("resize");
  window.dispatchEvent(event);
}

const FAQS_EN = [
  {
    "title": "What exactly does AutoFormAI do?",
    "content": "AutoFormAI automates the process of filling out web forms with just one click, saving you time and reducing the repetitive task of manual data entry."
  },
  {
    "title": "Can I use AutoFormAI with complex forms like Google Forms or Salesforce?",
    "content": "Yes, AutoFormAI supports not only standard HTML forms but also complex and custom forms on platforms such as Google Forms, Salesforce, and Oracle."
  },
  {
    "title": "Do I need any technical skills to use AutoFormAI?",
    "content": "No, AutoFormAI is designed to be completely user-friendly with zero configuration. You can start using it immediately without any coding or setup."
  },
  {
    "title": "Is my personal information safe with AutoFormAI?",
    "content": "Absolutely. All your data is stored locally on your device, ensuring maximum privacy and security. Your information is never sent to external servers."
  },
  {
    "title": "What types of data sources can I use for my information library?",
    "content": "AutoFormAI can integrate data from various sources, including text files, emails, documents, or notes, without needing specific formatting. Its AI-powered system extracts and matches data seamlessly."
  },
  {
    "title": "How is AutoFormAI different from other auto-fill tools?",
    "content": "Unlike many other tools that require manual setup and configuration, AutoFormAI offers true plug-and-play functionality. It intelligently recognizes form elements and fills them out with precision, saving time and reducing errors."
  },
  {
    "title": "Is there any cost associated with using AutoFormAI?",
    "content": "AutoFormAI operates on a pay-as-you-go model, which provides flexibility and cost-effectiveness. You only pay for what you use, without any long-term subscription commitments."
  },
  {
    "title": "Can AutoFormAI help with repetitive business tasks like client data entry?",
    "content": "Yes, AutoFormAI is perfect for professionals who deal with high-volume form submissions. It automates data entry, reducing workload and allowing you to focus on more strategic activities."
  },
  {
    "title": "Does AutoFormAI work with different web browsers?",
    "content": "Currently, AutoFormAI is available as a Chrome extension. Support for other popular browsers like Edge and Firefox is in our development roadmap. If you have specific requirements or need support for a different browser, please contact us at autoformai.floxai@gmail.com."
  },
  {
    "title": "Can I get support if I need help with custom forms?",
    "content": "Yes, for any custom requirements or additional support, please contact us at autoformai.floxai@gmail.com."
  }
];

const FAQ = ({
  id
}: {
  id: string;
}) => {

  return (
    <section
      id={id}
      className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12"
    >
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center text-white text-4xl sm:text-6xl font-sans font-bold">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            FAQs
          </RoughNotation>
        </h2>
        <p className="text-lg leading-7 text-[#71717a]">Here are some of the most frequently asked questions.</p>
      </div>
      <Accordion
        fullWidth
        keepContentMounted
        className="gap-3"
        itemClasses={{
          base: "px-6 !bg-[#f4f4f5] !shadow-none hover:!bg-[#ededed] rounded-2xl dark:!bg-[#252526] dark:!text-white dark:hover:!bg-[#1e1e1e]",
          title: "text-left font-medium mb-2",
          trigger: "py-6 focus:outline-none flex justify-between items-center",
          content: "pt-0 pb-6 text-base text-gray-500 dark:text-gray-400",
        }}
        items={FAQS_EN}
        selectionMode="multiple"
        variant="splitted"
        onSelectionChange={triggerResizeEvent}
      >
        {FAQS_EN?.map((item) => (
          <AccordionItem
            key={item.title}
            indicator={<PlusIcon className="text-gray-500" />}
            title={item.title}
            HeadingComponent="h3"
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
