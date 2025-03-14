import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="px-6 border-2 md:px-20 py-24 border-red-500">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Unleash the Power of{" "}
              <span className="text-primary"> PriceWise</span>
            </h1>
            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more
            </p>
            Searchbar
          </div>
          HeroCarousel
        </div>
        <section className="trending-section">
          <h2 className="section-text">Trending</h2>
        </section>
      </section>
    </>
  );
}
