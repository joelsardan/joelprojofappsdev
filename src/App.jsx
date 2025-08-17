
import ProductCard from './component/ProductCard';


function App () {


const productData = [
  {
  id: 1,
  image: "/public/image/images1.jpg",
  productName: "IG",
  price:  10000,
  description: "Indio Gigante originated from Brazil"
  
},
  {
  id: 2,
  image: "public/image/images2.jpg",
  productName: "IG",
  price:  3500,
  description: "Dense and close-fitting."
  
},
  {
  id: 3,
  image: "public/image/images3.jpg",
  productName: "IG",
  price:  3600,
  description: "Long muscular-legs",
},
  {
  id: 4,
  image: "public/image/images4.jpg",
  productName: "IG",
  price:  3700,
  description: "Despite their size, they’re known to be gentle and easy to handle." 
  
},
  {
  id: 5,
  image: "public/image/images5.jpg",
  productName: "IG",
  price:  3800,
  description: "Prominent breast and elongated neck."
  
},
  {
  id: 6,
  image: "public/image/images6.png",
  productName: "IG",
  price:  3900,
  description: "Tall upright stance." 
  
},

]
  




  return(
    <div className="container">
    {productData.map((product) => (

       <ProductCard
        key={product.id}
        image={product.image}
        productName={product.productName}
        price={product.price}
        description={product.description}
       />
       
      
    ))}
      </div> 
  )
}

export default App;