import React from "react";
import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import { getCountriesName } from "../../redux/actions/index";
import './search.css'
export default function Search(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    useEffect(() => {
        dispatch(getCountriesName(name))
    }, [dispatch, name])
    const handleChange = (e) => {
        setName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            dispatch(getCountriesName(name));
        }
    };
    return(
        <form  >
            <input className="search_bar"
            type="text"
            placeholder="Search your countrie.."
            autoComplete="off"
            value={name} 
            onChange={(e) => handleChange(e)}
        />
    </form>
    )
}