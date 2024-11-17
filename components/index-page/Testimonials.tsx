/* eslint-disable react/no-unescaped-entities */
import { TwitterIcon } from '@components/icons';
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const TestimonialsData = [
  {
    user: {
      name: "Alex P.",
      username: "Independent Developer",
      image: "/assets/users/6.jpg",
    },
    content:
      "Submitting my apps to directory sites used to be a repetitive task that ate up valuable time. AutoFormAI has simplified the process by auto-filling forms accurately. Now, I can focus on building and launching my products without the administrative hassle.",
  },
  {
    user: {
      name: "Mike W.",
      username: "Sales Executive",
      image: "/assets/users/1.jpg",
    },
    content:
      "Recording customer details into Salesforce was always a time drain. With AutoFormAI, I can now input client information swiftly and correctly, freeing up more time to engage with clients and close more deals. It’s been a huge productivity booster for our sales team.",
  },
  {
    user: {
      name: "James L.",
      username: "Job Seeker",
      image: "/assets/users/2.jpg",
    },
    content:
      "AutoFormAI has transformed how I handle job applications and online forms. I used to dread filling out endless fields, but now it’s all done with a single click. It’s like having a personal assistant who never tires, saving me hours each week."
  },
  {
    user: {
      name: "Emma S.",
      username: "Freelance Designer",
      image: "/assets/users/5.jpg",
    },
    content:
      "As a freelancer juggling client forms and contracts, AutoFormAI has been a game-changer. I can pull data from my stored library and complete forms instantly, without the hassle of copy-pasting. It streamlines my work and gives me more time for creative projects."
  },
  {
    user: {
      name: "Dr. Mark H.",
      username: "Healthcare Professional",
      image: "/assets/users/4.jpg",
    },
    content:
      "Managing patient intake forms used to be time-consuming and stressful. With AutoFormAI, I can now complete complex medical forms quickly and accurately. This tool has allowed me to focus more on patient care and less on paperwork."
  },
  {
    user: {
      name: "Rachel T.",
      username: "Operations Manager",
      image: "/assets/users/3.jpg",
    },
    content:
      "AutoFormAI has been invaluable for my team. From onboarding new clients to filling out compliance documents, it’s quick, reliable, and makes our workflow much more efficient. We’ve seen a significant reduction in manual errors, and I can’t imagine going back to the old way of doing things."
  }
];

const Testimonials = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center pt-16 gap-12 max-w-[88%]"
    >
      <div className="flex flex-col text-center max-w-xl gap-4">
        <h2 className="text-center text-white text-4xl sm:text-6xl font-sans font-bold">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            Testimonials
          </RoughNotation>
        </h2>
        <p className="text-lg leading-7 text-[#71717a]">
          {/* Don't take our word for it. Here's what they have to say. */}
          If you use AutoFormAI and recommend it on your Twitter,{" "}
          <Link
            href="https://x.com/fumblydrew"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary underline"
          >
            please let me know
          </Link>
          . I will display your tweet and recommendation here.
        </p>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 overflow-hidden relative transition-all">
        {TestimonialsData.map((testimonial, index) => (
          <div className="mb-4 z-0 break-inside-avoid-column" key={index}>
            <div className="border border-slate/10 rounded-lg p-4 flex flex-col items-start gap-3 h-fit">
              <div className="flex items-start justify-between w-full">
                <div className="flex items-start gap-2">
                  <Image
                    src={testimonial.user.image}
                    alt="maker"
                    height={40}
                    width={40}
                    className="w-12 h-12 rounded-full object-cover object-top"
                  />
                  <div className="flex flex-col items-start">
                    <p className="font-bold">{testimonial.user.name}</p>
                    <p className="dark:text-zinc-400">
                      @{testimonial.user.username}
                    </p>
                  </div>
                </div>
                <Link
                  href={`https://twitter.com/${testimonial.user.username}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <TwitterIcon className="w-8 h-8" />
                </Link>
              </div>
              <p className="dark:text-zinc-200 text-[14px]">
                {testimonial.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
