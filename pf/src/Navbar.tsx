import { usePage } from "./PageContext";

const Navbar = () => {
  const { selectedPage, setSelectedPage } = usePage();

  const handlePageChange = (page: string) => {
    setSelectedPage(page);
  };
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full bg-black h-[50px] items-center flex-row p-4 text-white font-semibold gap-4 justify-center text-lg montserrat animate-slide scroll-smooth">
        <a href="#home">
          <span
            className={`hover:cursor-pointer rounded-lg px-3 transition-all duration-300 ${
              selectedPage == "home" ? "bg-white/60 text-black" : ""
            }`}
            onClick={() => handlePageChange("home")}
          >
            Home
          </span>
        </a>
        <a href="#exp">
          <span
            className={`hover:cursor-pointer rounded-lg px-3 transition-all duration-300 ${
              selectedPage == "exp" ? "bg-white/60 text-black" : ""
            }`}
            onClick={() => handlePageChange("exp")}
          >
            Experience
          </span>
        </a>
        <a href="#proj">
          <span
            className={`hover:cursor-pointer rounded-lg px-3 transition-all duration-300 ${
              selectedPage == "proj" ? "bg-white/60 text-black" : ""
            }`}
            onClick={() => handlePageChange("proj")}
          >
            Projects
          </span>
        </a>
      </div>
      <div className="flex w-full bg-red-900 h-[250px] text-9xl justify-center items-center montserrat ">
        HEERAJETH
      </div>
    </div>
  );
};

export default Navbar;
