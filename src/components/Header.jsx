import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-black text-2xl">devfinder</h2>
      <img src={logo} alt="" className="w-10 rounded-lg"/>
    </div>
  );
};

export default Header;
