import BeerCard from './BeerCard';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
function App() {
  const [beerData,setBeerData]=useState([]);
  const [filteredBeers, setFilteredBeers] = useState(beerData);

  const handleSearch = (searchTerm) => {
    console.log(searchTerm)
    const filtered = beerData.filter(beer =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBeers(filtered);
  };
  useEffect(()=>{
    async function getBeerData(){
   try{
       const response=await axios.get("https://api.punkapi.com/v2/beers");
      setBeerData(response.data)
   }
   catch(error){
    console.log(error)
   }
    }
    getBeerData()
  },[])
  return (
    <div className="app">
      <header className='header'>
        <div className='header-container'>
        <div className='div-left'>
          <h1 style={{color:"whitesmoke"}}>Crafty Brews</h1>
        </div>
        <div className='div-right'>
            <SearchBar handleSearch={handleSearch}/>
        </div>
        </div>
      </header>
      <div className='beer-data'>
     
      {
         filteredBeers.length>0?(filteredBeers.map((beer)=><BeerCard key={beer.id} beer={beer}/>)):( 
          beerData.map((beer)=><BeerCard key={beer.id} beer={beer}/>)
           )
      }
    </div>
    </div>
  );
}

export default App;
