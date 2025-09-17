export default function SearchResults({ results }) {
  return (
    <div
      className={`dropdown-wrapper ${results?.length ? "open" : ""}`}
      role="listbox"
      aria-label="Search results"
    >
      <div className="dropdown">
        <ul>
          {results?.length ? (
            results.map((item) => (
              <li key={item.id} role="option">
                {item.type === "person" ? (
                  <div className="person__info">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      width="30"
                      style={{ borderRadius: "8px" }}
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
            ))
          ) : (
            <li role="option" className="no-results">
              No results found
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
