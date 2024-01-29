
import { FaWindows, FaPlaystation, FaXbox, FaLinux, FaApple, FaInternetExplorer } from "react-icons/fa6";
import { BsNintendoSwitch, BsAndroid2 } from "react-icons/bs";
const Platforms = ({ parentPlatforms }) => {
  const mapIcons = {
    'pc': <FaWindows />,
    'playstation': <FaPlaystation />,
    'xbox': <FaXbox />,
    'nintendo': <BsNintendoSwitch />,
    'ios': <FaApple />,
    'android': <BsAndroid2 />,
    'linux': <FaLinux />,
    'macos': <FaApple />,
    'web': <FaInternetExplorer />,
  }
  return (
    <div>
      <ul className="flex flex-wrap space-x-1 text-gray-600">
        { parentPlatforms.map((platform, index) => (
          <li key={index}>
            <span className="text-sm">{mapIcons[platform.platform.slug]}  </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Platforms;
