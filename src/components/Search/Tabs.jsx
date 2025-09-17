export default function Tabs({ activeTab, setActiveTab, results }) {
  return (
    <div className="tabs" role="tablist">
      <button
        className={activeTab === "all" ? "active" : ""}
        onClick={() => setActiveTab("all")}
        role="tab"
        aria-selected={activeTab === "all"}
      >
        All ({results?.length})
      </button>
      <button
        className={activeTab === "file" ? "active" : ""}
        onClick={() => setActiveTab("file")}
        role="tab"
        aria-selected={activeTab === "file"}
      >
        Files ({results.filter((r) => r.type === "file")?.length})
      </button>
      <button
        className={activeTab === "person" ? "active" : ""}
        onClick={() => setActiveTab("person")}
        role="tab"
        aria-selected={activeTab === "person"}
      >
        People ({results.filter((r) => r.type === "person")?.length})
      </button>
    </div>
  );
}
