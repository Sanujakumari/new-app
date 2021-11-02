import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import {  CardActions } from '@mui/material';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function App(){
  const cakes=[{
    name:"White Forest Cake",
    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp313tCQ5uA0tYIfr8q9WiULaoDCFy0xLusw&usqp=CAU",
    rate:"900 Rs",
    weight : "1 kg"
  },
  {
    name:"Red Velvet",
    pic:"https://www.cakexpo.com/wp-content/uploads/2020/09/FB_IMG_1591701666488.jpg",
    rate:"1000",
    weight:"1.5",
  },
  {
    name:"KitKat Cake",
    pic:"https://www.recipegirl.com/wp-content/uploads/2015/01/Kit-Kat-Cake-1-500x375.jpg",
    rate:"850",
    weight:"1",
  },
  {
    name:"Chocolate Cake",
    pic:"https://cakepalacia.com/wp-content/uploads/2020/01/IMG-20200115-WA0016.jpg",
    rate:"1050",
    weight:"1",
  },
  {
    name:"Princess Cake",
    pic:"https://imgcdn.floweraura.com/sweet-as-princess-cake-9931360ca.jpg",
    rate:"1200",
    weight:"1",
  },
  {
    name:"Princess Cake",
    pic:"https://i.pinimg.com/originals/fb/e4/62/fbe462ad1425297469939cdb8986d163.jpg",
    rate:"2050",
    weight:"2",
  },
  {
    name:"Barbie Cake",
    pic:"https://www.kcbakers.com/wp-content/uploads/2017/10/barbi-cake-01-baby-girl-cake.jpg",
    rate:"1.5",
    weight:"1700",
  },
  {
    name:"Spiderman Cake",
    pic:"https://www.orderyourchoice.com/118017-large_default/spiderman-cake.jpg",
    rate:"3500",
    weight:"2.5",
  }
]
  return(
    <div className="App">
      <div className="cakehouse">
        <Cart />
      <CakeHouse />   
</div>
{cakes.map((cake,index)=>(
  <CakeShop
  key={index}
    name={cake.name}
     pic={cake.pic} 
     rate={cake.rate} 
     weight={cake.weight} />

))}
    </div>
    )
}

    function CakeShop({name,pic,rate,weight}){
    return(


<card>

<div className="cakehouse">

<CardContent>
<div className="cake-container" >

  <h3 className="cake-name">{name}</h3>
  <img className="cake-image" src={pic} />
  <h4 className="cake-rate"> ₹ {rate}</h4>
  <p className="cake-weight">{weight} kg</p>
  <Button  className="addtocart" 
  variant="contained" 
   startIcon={<AddShoppingCartIcon />}
   >Add to cart</Button>

  </div>
  </CardContent>
  
</div>
</card>
   )

}
function CakeHouse(){
  return (
< div className= "cakeshop">
    <img className="home" src="https://m.thebestcakeshop.com/i/15421017_1329325120442136_7088109154185282648_n_1.jpg" />
  </div>
  )

}
function Cart(){
  return(
    <div className="cart">
      <Button className="cart" startIcon={<ShoppingCartSharpIcon />} variant="contained">Cart</Button>

    {/* <h3>Cart</h3> */}
    </div>
  )
}
export default App;

