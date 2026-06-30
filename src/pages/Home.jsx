import { useState } from "react";
import Trending from "../components/home/Trending";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import CategoryFilter from "../components/home/CategoryFilter";
import FilterChips from "../components/home/FilterChips";
import SortBar from "../components/home/SortBar";
import Featured from "../components/home/Featured";
import CategorySection from "../components/home/CategorySection";
import Footer from "../components/layout/Footer";
function Home() {

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("default");

  const [activeFilter, setActiveFilter] =
    useState("All");

  return (
    <>
      <Navbar />

      <Hero />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <FilterChips
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <SortBar
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <Featured />
      <Trending />

      <CategorySection
        selectedCategory={selectedCategory}
        sortBy={sortBy}
        activeFilter={activeFilter}
      />
      <Footer />

    </>
  );
}

export default Home;