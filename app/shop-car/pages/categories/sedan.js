import CarsList from "../../components/templates/CarsList"
import carsData from "../../data/carsData"

function Sedan() {
        const cars = carsData.filter(car => car.category ==="sedan")

  return <CarsList data={cars} />;
}

export default Sedan
