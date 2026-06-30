import "../../styles/filterChips.css";

function FilterChips({ activeFilter, setActiveFilter }) {

  const filters = [
    "All",
    "Trending",
    "Best Seller",
    "Free Delivery",
    "Pure Veg"
  ];

  return (

    <section className="container filter-section">

      {filters.map((filter) => (

        <button
          key={filter}
          className={
            activeFilter === filter
              ? "filter-chip active"
              : "filter-chip"
          }
          onClick={() =>
            setActiveFilter(filter)
          }
        >

          {filter}

        </button>

      ))}

    </section>

  );

}

export default FilterChips;