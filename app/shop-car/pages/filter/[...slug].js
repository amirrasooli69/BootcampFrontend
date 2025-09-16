import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";

function FilterCar() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filterCars = carsData.filter((car) => min < car.price && car.price < max);
  if(!filterCars.length) return <h3>Not Found</h3>
  return <CarsList data={filterCars} />;
}
export default FilterCar;
