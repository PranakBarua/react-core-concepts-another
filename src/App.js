import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  const players=['Rubel','Sakiv','Tamim','Mushfiq','Liton','Mustafiz'];
  const products=[
    {name:"PhotoShop",price:"$60.00"},
    {name:"Illustrator",price:"$6.00"},
    {name:"Pdf Reader",price:"$45.50"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>my first react app</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
           {
             players.map(player=><li>{player}</li>)
           }
           {
             products.map(product=><li>{product.name}</li>)
           }
        </ul>
        {
          products.map(pro=><Product product={pro}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

        <Person name={players[0]} performance="Bowler"></Person>
        <Person name={players[1]} performance="All-rounder"></Person>
        <Person name={players[2]} performance="Batsman"></Person>
        <Person name={players[3]} performance="Keeper"></Person>
        <Person name={players[4]} performance="Batsman"></Person>
        <Person name={players[5]} performance="Bowler"></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return (
    <div>
      <h1>Users : {users.length}</h1>
     <ul>
       {
         users.map(user=><li>{user.email}</li>)
       }
     </ul>
    </div>
  )
}



function Counter(){
  const [count,setCount]=useState(0);
  //const handleIncrease=()=>setCount(count+1);
  return(
    <div>
      <h1>Count : {count} </h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'2px solid pink',
    borderRadius:'5px',
    margin:'10px',
    padding:'10px',
    height:'300px',
    width:'250px',
    backgroundColor:'gray',
    float:'left'
  }
  const buttonStyle={
    border:'none',
    borderRadius:'5px',
    padding:'5px 10px',
    color:'white',
    backgroundColor:'deepPink'
  }
  const {name,price}=props.product;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>Price : {price}</h5>
      <button style={buttonStyle}>Buy now</button>
    </div>
  )
}


function Person(props){
  var personStyle={border:'2px solid gray',margin:'10px',padding:'10px 60px',width:'500px'}
  return (
    <div style={personStyle}>
      <h1>Name : {props.name}</h1>
      <p>Performance : {props.performance}</p>
    </div>
  )
  
}

export default App;
