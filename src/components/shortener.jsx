export default function Shortener() {
  return (
    <div className="w-full flex items-center justify-center -mb-16 z-50">
      <div className="bg-DarkViolet p-6 w-10/12 rounded-xl bg-[url('./bg-shorten-mobile.svg')] bg-no-repeat bg-auto bg-right-top md:bg-[url('./bg-shorten-desktop.svg')] md:w-11/12 lg:w-10/12 md:px-10 md:py-10">
        <form className="flex items-center justify-center flex-col gap-3 md:flex-row">
          <input
            className="w-full p-3 rounded-xl md:w-9/12"
            type="text"
            placeholder="Shorten a link here"
          />
          <button className="bg-Cyan p-3 w-full text-white font-bold rounded-xl md:w-3/12 hover:transition-color hover:duration-500 hover:ease-in hover:brightness-200">
            Shorten it!
          </button>
        </form>
      </div>
    </div>
  );
}
