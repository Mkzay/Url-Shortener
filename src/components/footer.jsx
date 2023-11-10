export default function Footer() {
  return (
    <div className="w-full bg-black">
      <div className="w-full bg-DarkViolet bg-[url('./bg-boost-mobile.svg')] bg-no-repeat bg-cover bg-center py-20 px-5 flex items-center justify-center flex-col gap-5 md:bg-[url('./bg-boost-desktop.svg')]">
        <h1 className="text-white text-2xl font-bold md:text-3xl">
          Boost your links today
        </h1>
        <button className="bg-Cyan rounded-3xl p-3 w-7/12 text-white font-bold md:w-3/12 lg:w-2/12">
          Get Started
        </button>
      </div>

      <div className="flex items-center justify-center flex-col gap-10 bg-VeryDarkViolet py-14 lg:flex-row lg:justify-between lg:items-start lg:px-28">
        <div>
          <h1 className="text-4xl text-white font-bold">Shortly</h1>
        </div>
        <div className="flex flex-col gap-10 text-white md:flex-row md:gap-14 lg:gap-20">
          <ul className="flex items-center flex-col gap-3 md:items-start">
            <li>
              <a className="font-bold">Features</a>
            </li>
            <li>
              <a className="text-GrayishViolet">Link Shortening</a>
            </li>
            <li>
              <a className="text-GrayishViolet">Branded Links</a>
            </li>
            <li>
              <a className="text-GrayishViolet">Analytics</a>
            </li>
          </ul>

          <ul className="flex items-center flex-col gap-3 md:items-start">
            <li>
              <a className="font-bold">Resources</a>
            </li>
            <li>
              <a className="text-GrayishViolet">Blogs</a>
            </li>
            <li>
              <a className="text-GrayishViolet">Developers</a>
            </li>
            <li>
              <a className="text-GrayishViolet">Support</a>
            </li>
          </ul>

          <ul className="flex items-center flex-col gap-3 md:items-start">
            <li>
              <a className="font-bold">Company</a>
            </li>
            <li>
              <a className="text-GrayishViolet">About</a>
            </li>
            <li>
              <a className="text-GrayishViolet">Our Team</a>
            </li>
            <li>
              <a className="text-GrayishViolet">Career</a>
            </li>
            <li>
              <a className="text-GrayishViolet">Contact</a>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-7 md:items-start">
            <a>
              <img src="./icon-facebook.svg" />
            </a>
            <a>
              <img src="./icon-pinterest.svg" />
            </a>
            <a>
              <img src="./icon-twitter.svg" />
            </a>
            <a>
              <img src="./icon-instagram.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
