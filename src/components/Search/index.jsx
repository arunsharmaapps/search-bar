import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import Tabs from "./Tabs";

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
    }, 500);
  });
}

export default function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    if (!search) {
      setResults([]);
      return;
    }

    const handler = setTimeout(async () => {
      setLoading(true);
      const res = await fetchSearchResults(search);
      setResults(res);
      setLoading(false);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  const filteredResults =
    activeTab === "all" ? results : results.filter((r) => r.type === activeTab);

  return (
    <div className="search-container">
      <div
        className="search-container__box"
        role="search"
        aria-label="Search items"
      >
        <SearchInput search={search} setSearch={setSearch} loading={loading} />
        {filteredResults?.length > 0 && (
          <>
            <Tabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              results={results}
            />
            <SearchResults results={filteredResults} />
          </>
        )}
      </div>
    </div>
  );
}
