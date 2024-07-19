import React, {useEffect} from "react"
import {BiChevronDown} from "react-icons/bi";
import {AiOutlineSearch} from "react-icons-ai";

const Selector =() => {
const [selected,setSelected] = useState("");
const [inputvalue,setInputValue] =useState () => {
const [open,setopen]
  useEffect() => {

    .then((res)) => res.json()
    .then((data)) => {}
  } 


  return (
    <>

    <div className="w-72 font-medium h-80">
      <div className="bg-white w-full p-2 flex items-center justify-center rounded">
    {selected ? selected?.length > 30 
   ?selected?. substring(0,25) }
   :selected
   : "Select"}
    <Bichevrondown size={20}/>
    </div>
    <ul className="bg-white flex items-center px-2 mt-2 overflow-y-auto max-h-60">
      <div className="flex items-center px-2 sticky top-0 bg-white">
    <AiOutlineSearch size={18} className="Text-gray-700" />
      <input
         type="text" placeholder="Enter name" 
         value={inputValue}
        className="placeholder:text-gray-700 p-2 outline-none"
        onChange={(e) => setInputValue(e.target.value.toLowerCase)}
        />
      <li className="p-2 text-sm hover:bg-sky-600 hover: text-white">
        Sample
      <li className="p-2 text-sm hover:bg-sky-600 hover: text-white">
        Sample
      <li className="p-2 text-sm hover:bg-sky-600 hover: text-white">
        Sample
    </div>
    </>
  );
};

export default FilterGroup
  


  


