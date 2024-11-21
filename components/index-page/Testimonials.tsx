/* eslint-disable react/no-unescaped-entities */
import { TwitterIcon } from '@components/icons';
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const TestimonialsData = [
  {
    "user": {
      "name": "Alex P.",
      "username": "Independent Developer",
      "image": "/assets/users/6.jpg"
    },
    "content": "Directory submissions used to suck the life out of me—hours wasted copying and pasting the same info over and over. AutoFormAI handles it all in seconds. It's like hiring a super-efficient assistant that never complains. More time for coding, less for tedium."
  },
  {
    "user": {
      "name": "Mike W.",
      "username": "Sales Executive",
      "image": "/assets/users/1.jpg"
    },
    "content": "Updating Salesforce used to feel like quicksand, pulling me away from what matters: selling. With AutoFormAI, everything’s entered flawlessly in seconds. My productivity shot through the roof. Honestly, I don’t know how we managed before."
  },
  {
    "user": {
      "name": "James L.",
      "username": "Job Seeker",
      "image": "/assets/users/2.jpg"
    },
    "content": "Job hunting sucks. AutoFormAI makes it suck less. Click, done. That’s awesome!"
  },
  {
    "user": {
      "name": "Emma S.",
      "username": "Freelance Designer",
      "image": "/assets/users/5.jpg"
    },
    "content": "As a freelancer, I deal with tons of forms: contracts, invoices, client requests—you name it. AutoFormAI made all that frustration disappear. No more manual copy-pasting. It’s fast, efficient, and gives me hours back every week to focus on design. I honestly wish I’d found it sooner!"
  },
  {
    "user": {
      "name": "Dr. Mark H.",
      "username": "Healthcare Professional",
      "image": "/assets/users/4.jpg"
    },
    "content": "Patient paperwork used to pile up on my desk, eating into my time with actual patients. AutoFormAI has been a lifesaver—what used to take hours now gets done in minutes, and I can focus on providing care instead of dealing with forms."
  },
  {
    "user": {
      "name": "Rachel T.",
      "username": "Operations Manager",
      "image": "/assets/users/3.jpg"
    },
    "content": "AutoFormAI streamlined our entire workflow. Compliance forms, client onboarding, tedious admin tasks—it’s all so much faster now. Our team works smarter, not harder. Can’t imagine managing without it anymore."
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
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 overflow-hidden relative transition-all">
        {TestimonialsData.map((testimonial, index) => (
          <div className="mb-4 z-0 break-inside-avoid-column" key={index}>
            <div className="border border-slate/10 dark:border-zinc-700 rounded-lg p-4 flex flex-col items-start gap-3 h-fit">
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
                  {/* <TwitterIcon className="w-8 h-8" /> */}
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
