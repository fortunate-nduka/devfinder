import {BsSearch} from "react-icons/bs";
import rocket from '../assets/rocket.svg'

const Form = () => {
  return (
    <form className="bg-card py-3 px-3 rounded-lg flex items-center justify-between mt-20 mb-10">
      <div className="flex items-center">
        <BsSearch className="relative z-10 ml-2" />
        <input
          type="text"
          className="py-2 -ml-4 pl-8 basis-[70%] bg-transparent outline-none border-none tracking-wide"
          placeholder="Enter Github Username"
        />
      </div>
      <button className="bg-button basis-[30%] py-2 text-white rounded-md font-inter mr-2 flex items-center justify-center">
        Go <img src={rocket} alt="" className="ml-2" />
      </button>
    </form>
  );
};

export default Form;
