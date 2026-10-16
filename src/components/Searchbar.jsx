import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import "../styles/searchbarstyles.css";
const Searchbar = () => {
  return (
    <div className="searchbar-container">
      <input className="searchbar" type="text" placeholder="Search..." />
      <MagnifyingGlassIcon className={"search-icon"} size={20} />
    </div>
  );
};

export default Searchbar;
