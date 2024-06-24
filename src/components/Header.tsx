import { Link } from "react-router-dom";
import { navigation } from "../constants/navigation";

const Header = () => {
  return (
    <>
      {navigation.map((nav) => (
        <Link to={nav.route}>{nav.name}</Link>
      ))}
    </>
  );
};

export default Header;
