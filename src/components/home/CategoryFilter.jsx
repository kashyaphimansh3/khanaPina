import categories from "../../data/categories";
import "../../styles/categoryFilter.css";

function CategoryFilter({
    selectedCategory,
    setSelectedCategory
}) {

    return (

        <section className="container category-section">

            <h2>Browse Categories</h2>

            <div className="category-list">

                {categories.map((category) => (

                    <button
                        key={category.id}
                        className={
                            selectedCategory === category.name
                                ? "category-btn active"
                                : "category-btn"
                        }
                        onClick={() =>
                            setSelectedCategory(category.name)
                        }
                    >

                        <span className="emoji">

                            {category.icon}

                        </span>

                        <span>

                            {category.name}

                        </span>

                    </button>

                ))}

            </div>

        </section>

    );

}

export default CategoryFilter;