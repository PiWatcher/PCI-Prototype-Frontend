
// page imports
import React, { useContext } from 'react';
import { Dropdown } from 'semantic-ui-react';

// contexts
import { DataContext } from '../contexts/DataContext';
import 'semantic-ui-css/semantic.min.css'


const SearchBar = () => {

   // consumes data from DataContext
   const { buildingList, building, setBuilding, setRoom } = useContext(DataContext);


   // pulls selection text from dropdown and passes it back to context
   const handleSelectChange = (e, { value }) => {
      setBuilding(value);
      setRoom('');
   }

   // returns searchbar component
   return (
      <Dropdown className="dropdown"
         onChange={handleSelectChange}
         placeholder={building === "" ? "Select a building" : building}
         fluid
         search
         selection
         options={buildingList}
         selectOnBlur={false}
      />
   );
}

export default SearchBar;