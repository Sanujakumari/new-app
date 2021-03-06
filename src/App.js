import logo from "./logo.svg";
import "./App.css";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import { CardActions } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import TextField from "@mui/material/TextField";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useParams, useHistory } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
function App() {
  const INITIAL_MOVIES = [
    {
      name: "Ferrero Rocher Cake",
      pic: "https://static.halfcute.com/blog/wp-content/uploads/2021/05/27200135/Ferrero-Rocher-Cake.jpg",
      rate: "2200 Rs",
      weight: "1 kg",
      details:
        "If you are a Ferrero Rocher lover, then the Ferrero rocher cake is a must-have for you. The yummy nuts infused with chocolatey fun, Ferrero Rocher cake is a delicious dessert to savour at a birthday party or any other occasion. Find the most delicious Ferrero Rocher cakes and treat yourself with some yumminess.",
    },
    {
      name: "Red Velvet",
      pic: "https://www.cakexpo.com/wp-content/uploads/2020/09/FB_IMG_1591701666488.jpg",
      rate: "1000",
      weight: "1.5",
      details:
        "Red velvet cakes are the most beautiful cakes that catch your eye very effortlessly. Whenever one sees a red velvet cake, they won’t be able to resist the desire to eat some. Well, don’t leave your craving disappointed and make yourself the happiest with the delicious collection of red velvet cakes. ",
    },
    {
      name: "KitKat Cake",
      pic: "https://www.recipegirl.com/wp-content/uploads/2015/01/Kit-Kat-Cake-1-500x375.jpg",
      rate: "850",
      weight: "1",
      details:
        "KitKat is one of the most loved chocolate flavours in India that has come a long way. Check out some of the toothsome KitKat cake that will be a perfect surprise for a KitKat lover. Planning to celebrate your friend’s birthday who loves chocolates, then get this delicious KitKat cake.",
    },
    {
      name: "Chocolate Cake",
      pic: "https://cakepalacia.com/wp-content/uploads/2020/01/IMG-20200115-WA0016.jpg",
      rate: "1050",
      weight: "1",
      details:
        "Chocolate cakes are universally loved. Everyone has a nostalgic connection with a chocolate cake. You probably would have cut a lot of these yummy cakes on your birthdays, growing up. If you want to relive those beautiful memories, then get yourself a delicious chocolate cake",
    },
    {
      name: "Princess Cake",
      pic: "https://imgcdn.floweraura.com/sweet-as-princess-cake-9931360ca.jpg",
      rate: "1200",
      weight: "1",
      details:
        "For the little princess in your life whom you dote on, this cake makes the perfect celebration statement. Delight your princess with this special cake and give her the most beautiful surprise on her birthday. Note: This cake is available in 6 flavors namely Chocolate, Butterscotch, Vanilla, Strawberry, Black forest and Pineapple. Also,the crown may vary in color and shape as per availability.",
    },
    {
      name: "Princess Cake",
      pic: "https://i.pinimg.com/originals/fb/e4/62/fbe462ad1425297469939cdb8986d163.jpg",
      rate: "2050",
      weight: "2",
      details:
        "This royally colored cake is oozing with perfect sweet flavours. A mushy fondant cake designed with 2 tiers is a perfect treat for your little girl's birthday. Available in flavors Chocolate, Vanilla, Strawberry, Black Forest, Pineapple and Butterscotch, this dessert is sure to top the char of every girl's 'Favourite Cakes'.",
    },
    {
      name: "Barbie Cake",
      pic: "https://www.kcbakers.com/wp-content/uploads/2017/10/barbi-cake-01-baby-girl-cake.jpg",
      rate: "2500",
      weight: "2",
      details:
        "These red swirls look quite magical, don't they? They taste quite magical too. This absolutely delicious Red Rose Dress Barbie Cream Cake in 2 Kg is a treat from the heaven above. Make the little ones as well as everyone else in the party go gaga over this deliciousness. ",
    },
    {
      name: "Spiderman Cake",
      pic: "https://www.orderyourchoice.com/118017-large_default/spiderman-cake.jpg",
      rate: "3500",
      weight: "2.5",
      details:
        "Your friendly neighbourhood superhero Spiderman is here to mark your special day on the Spider-man Fondant 2 Kg Cake. Remember what uncle Ben said- with a Spiderman Fondant 2 Kg Cake comes great taste! Make it your sole responsibility to treat spider-man fans to this delicious cake",
    },
  ];
  const [cakes, setCakes] = useState(INITIAL_MOVIES);
  const [cartcount,setCartcount]=useState(0);
  const history = useHistory();

  const handleClick=()=>{
    setCartcount(cartcount+1)
  }
  return (
    
    
    <div className="App">
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">CAKES</Button>
        <Cart cartcount={cartcount} style={{marginLeft:"auto"}} />

          {/* <Button  style={{marginLeft:"auto"}}  onClick={()=>history.push("/cartdetails")} color="inherit">CART</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
      <div className="cakehouse">
        {/* <Cart cartcount={cartcount} /> */}
        
        <Switch>
          <Route exact path="/">
          <CakeHouse handleClick={handleClick} cakes={cakes}/>
            </Route>
         <Route exact path="/cakes/:id">
          <CakeDetails cakes={cakes} />
        </Route>
        {/* <Route exact path="/cart/:id">
          <CakeDetails cakes={cakes} />
        </Route> */}
       
        <Route exact path="/cartdetails" >
          <CartDetails cakes={cakes} />
        </Route>

        </Switch>
      </div>
      
    </div>
  );
}
function CakeShop({ name, pic, rate, weight, id,handleClick }) {
  const history = useHistory();
  const [addcart, setAddcart] = useState(0);
  const [cart, setCart] = useState(0);
  return (
    <card>
      <div className="cakehouse">
        <CardContent>
          <div className="cake-container">
            <h3 className="cake-name">{name}</h3>
            <img className="cake-image" src={pic} />
            <div className="icon">
              <IconButton
                onClick={() => history.push("/cakes/" + id)}
                color="primary"
                aria-label={"showbutton"}
              >
                <InfoIcon />
              </IconButton>
              <h4 className="cake-rate"> ₹ {rate}</h4>
            </div>
            <p className="cake-weight">{weight} kg</p>
            <AddtoCart id={id} handleClick={handleClick} />
          </div>
        </CardContent>
      </div>
    </card>
  );
}
function AddtoCart({id,handleClick}) {
  const history = useHistory();

  return (
    <Button
      className="addtocart"
      variant="contained"
      onClick={handleClick}
      color="primary"
      aria-label="upload picture"
    >
      Add to cart
    </Button>
    
  );
}
function CakeHouse({cakes,handleClick}) {
  return (
    <div className="cakeshop">
      <img
        className="home"
        src="https://m.thebestcakeshop.com/i/15421017_1329325120442136_7088109154185282648_n_1.jpg"
      />
             <div className="cake-list">

      {cakes.map((cake, index) => (
        <CakeShop
          key={index}
          name={cake.name}
          pic={cake.pic}
          rate={cake.rate}
          weight={cake.weight}
          details={cake.details}
          id={index}
          handleClick={handleClick}
        />
      ))}
    </div>
    </div>
  );
}

function CakeDetails({ cakes }) {
  const { id } = useParams();
  const cake = cakes[id];
  console.log(id);
  console.log(cakes);
  const history = useHistory();
  return (
    <div>
      <div className="cake-detail-container">
        <div className="cake-specs">
        <img className="cake-image" src={cake.pic} />

          <h3 className="cake-name">{cake.name}</h3>
          <p className="cake-details">{cake.details} </p>
        </div>
        <Button
          variant="contained"
          onClick={() => history.goBack()}
          startIcon={<ArrowBackIosIcon />}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}
function Cart({cartcount}) {
  // const [cart, setCart] = useState(0);
  const history = useHistory();

  return (
    <div className="cart">
      <Button
        className="cart"
        onClick={() => history.push("/cartdetails" )}
        startIcon={<ShoppingCartSharpIcon />}
        variant="contained"
        style={{marginLeft:"50rem"}}
      >
        Cart {cartcount}
      </Button>
    </div>
  );
}
function CartDetails() {
  const history = useHistory();

  return (
    <div className="cartdetails">
            <TextField  label="Enter your name" variant="filled" /> <br />

            <TextField  label="Enter your address" variant="filled" /><br />
            <TextField  label="Enter your location" variant="filled" /><br />
            <TextField  label="Enter your number" variant="filled" /><br />
      <Button variant="contained">Buy Now</Button><br />
      <Button
        variant="contained"
        onClick={() => history.goBack()}
        startIcon={<ArrowBackIosIcon />}
      >
        BACK
      </Button>
    </div>
  );
}
export default App;
