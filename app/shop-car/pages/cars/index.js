import Categories from "../../components/modules/Categories.js";
import SearchBar from "../../components/modules/SearchBar.js";
import CarsPage from "../../components/templates/CarsPage.js";
import carsData from "../../data/carsData.js";
function Details() {
  return (
    <div>
      <Categories />
      <SearchBar />
      <CarsPage data={carsData} />
    </div>
  );
}

export default Details;
