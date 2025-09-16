import CarsList from "../../components/templates/CarsList"
import carsData from "../../data/carsData"


function Suv() {
    const cars = carsData.filter(car => car.category ==="suv")
  return (
    <CarsList data={cars}/>
  )
}

export default Suv
