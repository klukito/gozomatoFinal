import React from 'react';
import styles from './styles.module.css'
import Input from '@chakra-ui/core'

const SearchBar = (data) => {
    const {value, placeholder, onChange} = data;
    
    return (
        
        <div className="relative">
            <form>
            <label>
                Your desired city: 
    
            <Input className={styles.searchBar}
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChange} 
                    data-testid="input"
                    size="lg"
                    />
            </label>
            </form>
        </div>
    );
};   


export default SearchBar

