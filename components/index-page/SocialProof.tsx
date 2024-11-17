
const Makers = [
  {
    image: "/assets/users/1.jpg",
  },
  {
    image: "/assets/users/2.jpg",
  },
  {
    image: "/assets/users/3.jpg",
  },
  {
    image: "/assets/users/4.jpg",
  },
  {
    image: "/assets/users/5.jpg",
  },
];

const SocialProof = () => {
  return (
    <section className="flex flex-col items-center justify-start pt-10">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          {Makers.map((user, index) => {
            return (
              <img
                key={index}
                src={user.image}
                alt="User"
                className="rounded-full -m-[5px] border border-white w-[40px] h-[40px] object-cover"
              />
            );
          })}
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-400 mt-3">
          <span className="text-blue-500 font-semibold text-base">200+</span>{" "}
          users trust our product
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
