import React from 'react'

function SearchAutoComplete({suggest}) {
  return (
    <ul className="suggestions">
            {suggest.map((suggestion, index) => {
              return (
                <li
                //   className={index === suggestionIndex ? "active" : ""}
                  key={index}
                //   onClick={handleClick}
                >
                  {suggestion.tags}
                </li>
              );
            })}
          </ul>
  )
}

export default SearchAutoComplete