import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-UM68w2ddFu3TcGHAb97BvMkR"
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return <div></div>;
}

export default HomePage;
