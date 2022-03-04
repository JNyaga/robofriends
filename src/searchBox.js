import React from "react";
//nB the Searchbox fxn takes props hence you need to unpack
//with {} as shown below

const SearchBox = ({searchfield, searchChange}) => {
    return (
    <div className= 'pa2'>
        <input className= 'pa3 ba b--green bg-lightest-blue' 
        type = 'search'
        placeholder = 'search robots' 
        onChange= {searchChange}
        />
    </div>
   
    );
}


export default SearchBox;