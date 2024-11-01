import Image from "next/image";

const Makers = [
  {
    image: "/assets/users/1.png",
  },
  {
    image: "/assets/users/2.png",
  },
  {
    image: "/assets/users/3.png",
  },
  {
    image: "/assets/users/4.png",
  },
  {
    image: "/assets/users/5.png",
  },
];

const SocialProof = () => {
  return (
    <section className="flex flex-col items-center justify-start gap-20 pt-20">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          {Makers.map((user, index) => {
            return (
              <Image
                key={index}
                src={user.image}
                alt="User"
                height={40}
                width={40}
                className="rounded-full -m-[5px] border border-white"
              />
            );
          })}
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-400">
          <span className="text-primary font-semibold text-base">1000+</span>{" "}
          users trust our product
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
