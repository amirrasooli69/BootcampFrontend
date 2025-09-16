import styels from "./Card.module.css";
import Location from "../icons/Location"
import Link from "next/link";

function Card(props) {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    price,
    image,
  } = props;
  return <Link href={`/cars/${id}`}>
  <div className={styels.container}>
    <img src={image} className={styels.image}/>
    <h4 className={styels.title}>{`${name} ${model}`}</h4>
    <p className={styels.detail}>{`${year} . ${distance} km`}</p>
    <div className={styels.footer}>
        <p className={styels.price}>$ {price}</p>
        <div className={styels.location}>
            <p>{location}</p>
            <Location />
        </div>
    </div>
  </div>
  </Link>;
}

export default Card;
