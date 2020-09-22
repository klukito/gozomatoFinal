import React from 'react';
import styles from './styles.module.css'


const SearchBar = (data) => {
    const {value, placeholder, onChange} = data;
    
    return (
        
        <div className="relative">
            <form>
            <label>
                Your desired city: 
    
            <input className={styles.searchBar}
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

