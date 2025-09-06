import CarsPage from "../../components/templates/CarsPage.js"
import carsData from "../../data/carsData.js"
function Details() {
  return (
    <div>
        <CarsPage data={carsData} />
    </div>
  )
}

export default Details
