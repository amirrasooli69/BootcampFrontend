import { useRouter } from "next/router"

function Articels() {
  const router = useRouter();
  if(!router.query.slug) return router.query.slug || [] ; 
  const {slug} = router.query;
  console.log(slug)
  return (
    <div>
      <h1>welcome to my Articels {slug}</h1>
    </div>
  )
}

export default Articels
