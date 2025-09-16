import Categories from "../components/modules/Categories.js";
import SearchBar from "../components/modules/SearchBar.js";
import CarsPage from "../components/templates/CarsPage.js";
import carsData from "../data/carsData.js";
import AllButton from "../components/modules/AllButton.js";

function Index() {
  const threeCars = carsData.slice(0,3)
  return (
    <>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={threeCars} />
    </>
  );
}
export default Index;
