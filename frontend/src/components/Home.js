import React from 'react' 
import Hello from './Hello' 
import Greet from './Greet' 
import Message from './Message' 
import Counter from './Counter' 
import ProductList from './ProductList' 
import DataFetch from './DataFetch' 
import Contact from './Contact'
import UserCard from './UserCard'
import Counter1 from './Counter1'
import Toggle from './Toggle'
import DynamicContent from './DynamicContent'
const Home = () => { 
  return ( 
    <div> 
      <DynamicContent/>
      <Toggle/>
      <Counter1/>
      
      <h1>Welcome to the Home Page</h1>
      <UserCard/>
    
      
      
      <Contact/>
      <DataFetch/> 
      <ProductList/>}
 
     <Message/> 
        <Hello name = 'Raju' id='23' > 
          <p>this is fron section 11</p> 
          </Hello> 
        <Hello name = 'Ramesh' id='24'/> 
        <button>submit</button> 
        <Hello/> 
        <Hello name = 'vaishnavi' id='25'/> 
        <Greet name ='ravi' id='26'/> 
        <Greet name ='Janu' id='27'/> 
        <Greet name ='Charitha' id='28'/> 
        <Greet name ='Divya' id='29 '/>
    </div> 
  ) 
} 
 
export default Home