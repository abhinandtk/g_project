import React, {  useRef, useState } from 'react';
import Router from 'next/router';
import { Labels } from '~/public/static/data/my-constants/Labels';
import constants from '~/public/static/data/my-constants/Constants';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import SearchAutoComplete from './SearchAutoComplete';


const SearchHeader = () => {
    const inputEl = useRef(null);
    const [keyword, setKeyword] = useState([]);
    const [suggest,setSuggest] = useState([]);
    const [suggestActive,setSuggestActive] = useState(false);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    function handleSubmit(e) {
        e.preventDefault();
        keyword.length !== 0 && Router.push(`/shop?search=${keyword}`)
    }

    const handleChange = (e) => {
        
        const query = e.target.value
        setKeyword(query)
        if (keyword.length >1){

            Axios.post(apis.searchtags,{
                search:keyword,
            })
            .then((res) => {
                setSuggest(res.data)
               
                console.log(res.data)
            })
            setSuggestActive(true)
        }
        else{
            setSuggestActive(false) 
        }
    }



    const handleClickSuggest = (e) =>{
    setSuggest([])
    setKeyword(e.target.innerText);
    setSuggestActive(true)
    e.preventDefault();
    Router.push(`/shop?search=${e.target.innerText}`)

    }

        
        
    

    const labels = Labels(constants.English)

    const SearchAutoComplete = () => {
        return (
          <ul className="suggestions">
                  {suggest.map((suggestion, index) => {
                    return (
                      <li
                      //   className={index === suggestionIndex ? "active" : ""}
                        key={index}
                        onClick={handleClickSuggest}
                      >
                        <i className="icon-magnifier mr-4" ></i>{suggestion.tags}
                      </li>
                    );
                  })}
                </ul>
        )
      }
   
    return (
        <form
            className="ps-form--quick-search"
            method="get"
            action="/"
            onSubmit={handleSubmit}
            style={{width:"50%",borderBottom:"1px solid white",color:'white',float:"right"}}>

            <>
            <div className="ps-form__input">
                <input
                    ref={inputEl}
                    className="form-control"
                    type="text"
                    value={keyword}
                    placeholder={labels["I'm Shopping for..."]}
                    onChange={handleChange}
                    style={{width:"100%"}}
                />
               
            </div>
            <button onClick={handleSubmit} >
                <i className="icon-magnifier"></i>
            </button></><br></br>
        {suggestActive && <SearchAutoComplete />  }         
        </form>
    );
};

export default SearchHeader;
