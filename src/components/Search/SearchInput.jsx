import { FaSearch } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function SearchInput({ search, setSearch, loading }) {
  return (
    <div className="search-input-wrapper">
      {loading ? (
        <AiOutlineLoading3Quarters
          className="search-container__icon search-container__icon--spin"
          size={20}
          aria-hidden="true"
        />
      ) : (
        <FaSearch
          className="search-container__icon"
          size={20}
          aria-hidden="true"
        />
      )}
      <input
        className={
          search
            ? "search-container__input-grow search-container__input"
            : "search-container__input"
        }
        placeholder="Search Something..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search input"
      />
      <button
        className="search-container__button"
        onClick={() => setSearch("")}
        aria-label="Clear search"
      >
        Clear
      </button>
    </div>
  );
}
