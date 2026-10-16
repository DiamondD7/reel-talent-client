import { useState } from "react";
import {
  CheckCircleIcon,
  FadersHorizontalIcon,
  XIcon,
} from "@phosphor-icons/react";

import "../styles/filteringstyles.css";
const FilterModal = ({ filteredItems, setFilteredItems }) => {
  const handleFilterClick = (name) => {
    if (filteredItems.includes(name)) {
      setFilteredItems(filteredItems.filter((item) => item !== name));
      return;
    }
    setFilteredItems([...filteredItems, name]);
  };

  return (
    <div className="filter-modal">
      <ul className="filter-modal-list">
        <li>
          <button
            className={
              filteredItems.includes("Actors")
                ? "filter-button-active"
                : "filter-normal-button"
            }
            onClick={() => handleFilterClick("Actors")}
          >
            Actors{" "}
            {filteredItems.includes("Actors") && (
              <CheckCircleIcon weight="fill" color="#2563EB" />
            )}
          </button>
        </li>
        <li>
          <button
            className={
              filteredItems.includes("Actresses")
                ? "filter-button-active"
                : "filter-normal-button"
            }
            onClick={() => handleFilterClick("Actresses")}
          >
            Actresses
            {filteredItems.includes("Actresses") && (
              <CheckCircleIcon weight="fill" color="#2563EB" />
            )}
          </button>
        </li>
        <li>
          <button
            className={
              filteredItems.includes("Directors")
                ? "filter-button-active"
                : "filter-normal-button"
            }
            onClick={() => handleFilterClick("Directors")}
          >
            Directors
            {filteredItems.includes("Directors") && (
              <CheckCircleIcon weight="fill" color="#2563EB" />
            )}
          </button>
        </li>
        <li>
          <button
            className={
              filteredItems.includes("Producers")
                ? "filter-button-active"
                : "filter-normal-button"
            }
            onClick={() => handleFilterClick("Producers")}
          >
            Producers
            {filteredItems.includes("Producers") && (
              <CheckCircleIcon weight="fill" color="#2563EB" />
            )}
          </button>
        </li>
        <li>
          <button
            className={
              filteredItems.includes("Writers")
                ? "filter-button-active"
                : "filter-normal-button"
            }
            onClick={() => handleFilterClick("Writers")}
          >
            Writers
            {filteredItems.includes("Writers") && (
              <CheckCircleIcon weight="fill" color="#2563EB" />
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

const Filtering = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveFilterClick = (name) => {
    setFilteredItems(filteredItems.filter((item) => item !== name));
  };

  return (
    <>
      <div className="filter-container">
        <button
          className="filter-button"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Filters <FadersHorizontalIcon weight="bold" color="#2563EB" />
        </button>
        {filteredItems.length > 0 &&
          filteredItems.map((item) => (
            <div className="filtered-item">
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {item}
              </p>
              <div
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <button
                  className="-button-empty"
                  onClick={() => handleRemoveFilterClick(item)}
                >
                  <XIcon weight="bold" />
                </button>
              </div>
            </div>
          ))}
      </div>
      {isModalOpen && (
        <FilterModal
          filteredItems={filteredItems}
          setFilteredItems={setFilteredItems}
        />
      )}
    </>
  );
};

export default Filtering;
