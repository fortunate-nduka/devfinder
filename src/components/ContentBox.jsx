import logo from "../assets/logo.png";
import { MdLocationOn } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const ContentBox = () => {
  return (
    <div className="bg-card px-5 py-7 rounded-lg">
      <div className="flex items-center">
        <figure className="w-14 mr-5">
          <img src={logo} alt="" className="w-full" />
        </figure>
        <div className="">
          <h1 className="font-semibold text-lg">The Octocat</h1>
          <p className="text-blue-500 text-sm ">@octocat</p>
          <p className="">Joined 26 Jan 2011</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        rerum dolore incidunt quis nobis impedit laudantium enim omnis velit
        hic!
      </p>
      <div className="bg-body">
        <div className="">
          <h3>Repos</h3>
          <h2>8</h2>
        </div>
        <div className="">
          <h3>Followers</h3>
          <h2>9999</h2>
          <div className="">
            <h3>Following</h3>
            <h2>200</h2>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <MdLocationOn />
          <span>San Francisco</span>
        </div>
        <div className="">
          <FiLink />
          <span>San Francisco</span>
          <div className="">
            <FaTwitter />
            <span>San Francisco</span>
          </div>
          <div className="">
            <BsLinkedin />
            <span>San Francisco</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
