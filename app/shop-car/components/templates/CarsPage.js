import Card from "../modules/Card"
import style from "./CarsPage.module.css"

function CarsPage({data}) {
  return (
    <div className={style.container}>
      {data.map(item => <Card key={item.id} {...item}/>)}
    </div>
  )
}

export default CarsPage
