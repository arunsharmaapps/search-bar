import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./index.css";

export const searchData = [
  {
    id: 1,
    type: "person",
    name: "Randall Johnsson",
    status: "Active now",
    avatar: "https://i.pravatar.cc/50?img=1",
  },
  {
    id: 2,
    type: "file",
    name: "Random Michal Folder",
    details: "12 Files",
    updated: "12m ago",
  },
  {
    id: 3,
    type: "file",
    name: "crative_file_frandkies.jpg",
    details: "in Photos/Assets",
    updated: "12m ago",
  },
  {
    id: 4,
    type: "person",
    name: "Kristinge Karand",
    status: "Active 2d ago",
    avatar: "https://i.pravatar.cc/50?img=2",
  },
  {
    id: 5,
    type: "file",
    name: "files_krande_michelle.avi",
    details: "in Videos",
    updated: "12m ago",
  },
];

export function fetchSearchResults(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = searchData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      resolve(results);
    }, 1000);
  });
}

export default function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const handleSearch = async (value) => {
    setSearch(value);

    if (!value) {
      setResults([]);
      return;
    }

    setLoading(true);
    const res = await fetchSearchResults(value);
    setResults(res);
    setLoading(false);
  };

  const filteredResults =
    activeTab === "all" ? results : results.filter((r) => r.type === activeTab);

  return (
    <div className="search-container">
      <div className="search-container__box">
        <div>
          {loading ? (
            <AiOutlineLoading3Quarters
              className="search-container__icon search-container__icon--spin"
              size={20}
            />
          ) : (
            <FaSearch className="search-container__icon" size={20} />
          )}
          <input
            className={
              search
                ? "search-container__input-grow search-container__input"
                : "search-container__input"
            }
            placeholder="Search Something..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            className="search-container__button"
            onClick={() => setSearch("")}
          >
            Clear
          </button>
        </div>

        {search && !loading && (
          <div className={`dropdown-wrapper ${results.length ? "open" : ""}`}>
            <div className="dropdown">
              <div className="tabs">
                <button
                  className={activeTab === "all" ? "active" : ""}
                  onClick={() => setActiveTab("all")}
                >
                  All ({results.length})
                </button>
                <button
                  className={activeTab === "file" ? "active" : ""}
                  onClick={() => setActiveTab("file")}
                >
                  Files ({results.filter((r) => r.type === "file").length})
                </button>
                <button
                  className={activeTab === "person" ? "active" : ""}
                  onClick={() => setActiveTab("person")}
                >
                  People ({results.filter((r) => r.type === "person").length})
                </button>
              </div>
              <ul>
                {filteredResults.map((item) => (
                  <li key={item.id}>
                    {item.type === "person" ? (
                      <div className="person__info">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          width="30"
                          style={{ borderRadius: "50%" }}
                        />
                        <div className="person__details">
                          <span>{item.name}</span>
                          <span className="person__status">{item.status}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="person__info">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                          alt="file"
                          width="30"
                          style={{ borderRadius: "4px" }}
                        />
                        <div className="person__details">
                          <span>{item.name}</span>
                          <span className="person__status">{item.details}</span>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
