const Navbar = () => {
  return (
    <nav className="px-4 w-full shadow ">
      <div className="container flex items-center  justify-between h-[5rem] mx-auto">
        <div>
          <img
            src="https://www.shutterstock.com/image-vector/clothing-store-logo-design-inspiration-600nw-2104754999.jpg"
            alt="logo"
            className="w-[120px] h-auto object-contain"
          />
        </div>
        <ul className="flex gap-8 items-center">
          <li className="font-medium text-xl">
            <a href="#">Home</a>
          </li>
          <li className="font-medium text-xl">
            <a href="#">About</a>
          </li>
          <li className="font-medium text-xl">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
