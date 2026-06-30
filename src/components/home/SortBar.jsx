import "../../styles/sortBar.css";

function SortBar({ sortBy, setSortBy }) {
  return (
    <section className="container sort-section">

      <div className="sort-left">
        <h3>Sort By</h3>
      </div>

      <div className="sort-right">

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Recommended</option>

          <option value="rating">
            Rating (High to Low)
          </option>

          <option value="lowPrice">
            Price (Low to High)
          </option>

          <option value="highPrice">
            Price (High to Low)
          </option>

          <option value="delivery">
            Fast Delivery
          </option>

        </select>

      </div>

    </section>
  );
}

export default SortBar;