export default function Body() {
  return (
    <div className="bg-Gray w-full pb-20 pt-28 md:pt-36 flex items-center justify-center flex-col gap-14 md:pb-44">
      <div className="flex items-center flex-col gap-5 text-center p-5 md:p-10">
        <h1 className="text-3xl text-VeryDarkViolet font-bold md:text-4xl">
          Advanced Statistics
        </h1>
        <p className="text-lg text-center text-GrayishViolet font-bold md:w-7/12 md:font-medium">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col gap-20 lg:flex-row md:gap-10 md:px-10 relative">
        <div className="flex items-center justify-center flex-col text-center bg-white w-11/12 rounded-lg px-5 pt-0 pb-10 md:w-9/12 md:text-left md:items-start">
          <span className="bg-DarkViolet p-5 rounded-full relative -top-8">
            <img src="./icon-brand-recognition.svg" />
          </span>
          <h2 className="text-VeryDarkViolet text-xl font-bold pb-5">
            Brand Recognition
          </h2>
          <p className="text-Gray text-lg font-medium">
            Boost your brand recognition with each click. Generic links
            don&apos;t mean a thing. Branded links help instill confidence in
            your content.
          </p>
        </div>

        <div className="bg-Cyan absolute h-12 top-[308px] w-2 lg:w-[38px] lg:h-2 lg:right-[64.7%] lg:top-40 z-50"></div>

        <div className="flex items-center justify-center flex-col text-center bg-white w-11/12 rounded-lg px-5 pt-0 pb-10 md:w-9/12 md:text-left md:items-start md:relative md:top-12">
          <span className="bg-DarkViolet p-5 rounded-full relative -top-8">
            <img src="./icon-detailed-records.svg" />
          </span>
          <h2 className="text-VeryDarkViolet text-xl font-bold pb-5">
            Detailed Records
          </h2>
          <p className="text-Gray text-lg font-medium">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className="bg-Cyan absolute h-12 top-[696px] w-2  z-50 lg:w-[38px] lg:h-2 lg:right-[32.3%] lg:top-40"></div>

        <div className="flex items-center justify-center flex-col text-center bg-white w-11/12 rounded-lg px-5 pt-0 pb-10 md:w-9/12 md:text-left md:items-start md:relative md:top-24">
          <span className="bg-DarkViolet p-5 rounded-full relative -top-8">
            <img src="./icon-fully-customizable.svg" />
          </span>
          <h2 className="text-VeryDarkViolet text-xl font-bold pb-5">
            Fully Customizable
          </h2>
          <p className="text-Gray text-lg font-medium">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
