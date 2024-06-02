import { FaArrowAltCircleUp } from "react-icons/fa";

export default function UpButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/*<!-- Component: Left sided basic fab button --> */}
      <div className="fixed bottom-8 right-8 z-[500] md:hidden">
        <div className="group flex flex-col-reverse gap-2">
          <button
            onClick={scrollToTop}
            className="group relative z-50 inline-flex h-12 items-center justify-center gap-2 self-center whitespace-nowrap rounded bg-gray-950 px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-gray-600 focus:bg-gray-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-900 disabled:bg-sky-900 disabled:shadow-none"
          >
            <span className="relative transition duration-300 only:-mx-6 group-hover:scale-[1.1]">
              <span className="sr-only">Button description</span>
              <FaArrowAltCircleUp className="text-xl" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
