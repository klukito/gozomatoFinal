import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import RestaurantCard from './restaurant-card'
import DropdownHeader from './dropdown-header'
import SearchBar from './search-bar'
import SearchButton from './search-button'
import { Heading } from '@chakra-ui/core';
import ApiCall from 'components/examples/api-call'

const Main = () => {
  const [cityQuery, setQuery] = useState();
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    ApiCall().then(setQuery);
  }, []);
  

  return (
    <div>

      <div className={styles.main}>
      <DropdownHeader/>
      <Heading>Go Zomato</Heading>
      </div>

      <div className={styles.main}>

          <SearchBar className="flex items-center"
            value={cityQuery}
            placeholder="Enter here"
            onChange={e => setQuery(e.target.value)} 
          />
          <SearchButton 
            className={styles.center}
            text="Search" 
            onClick={e => setRestaurants(e.target.value)} 
          />    
      </div>
      <div>
          Restaurants nearby:
          <div>
            {restaurants.map(e => (
              <RestaurantCard key={e.id} data={e} />
            ))}
          </div>
      </div>


    </div>
  );
};

export default Main;
