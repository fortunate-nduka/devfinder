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
          <p className="text-blue-500 text-sm my-1">@octocat</p>
          <p className="">Joined 26 Jan 2011</p>
        </div>
      </div>
      <p className="my-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        rerum dolore incidunt quis nobis impedit laudantium enim omnis velit
        hic!
      </p>
      <div className="bg-body px-2 py-3 rounded-lg flex justify-between items-center text-center mb-4">
        <div className="">
          <h3>Repos</h3>
          <h2 className="text-white font-bold text-base">8</h2>
        </div>
        <div className="">
          <h3>Followers</h3>
          <h2 className="text-white font-bold text-base">9999</h2>
        </div>
        <div className="">
          <h3>Following</h3>
          <h2 className="text-white font-bold text-base">200</h2>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex item-center">
          <MdLocationOn className="text-base mr-3" />
          <span>San Francisco</span>
        </div>
        <div className="flex item-center">
          <FiLink className="text-base mr-3" />
          <span>https://github.blog</span>
        </div>
        <div className="flex item-center">
          <FaTwitter className="text-base mr-3" />
          <span>@iamFortunate</span>
        </div>
        <div className="flex item-center">
          <BsLinkedin className="text-base mr-3" />
          <span>Fortunate Ogodu</span>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
