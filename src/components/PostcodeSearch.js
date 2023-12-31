import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const PostcodeSearch = () => {
    const [input, setInput] = useState("")
    const [location, setLocation] = useState("")
  return (
    <PostcodeSearchStyled>
        <div className='container'>
            <p>Find Bakers Near You</p>
            <div className='search-section'>
                <input 
                type='text' 
                placeholder='Enter Postcode...' 
                className='search-input'
                
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                
                <Button 
                className='search-btn'
                type='submit'
                onClick={() =>{
                    const fetchPostcodeData = async() =>{
                        const result = await fetch(`https://api.postcodes.io/postcodes/` + input) 
                        result.json().then(json => {
                            setLocation(json.result.admin_district)
                            setInput("")
                        }).catch((error =>{
                            setInput("Please Check Postcode")
                            const searchbar = document.getElementsByClassName("search-input")[0]
                            searchbar.className="search-input-error"
                            searchbar.onclick = () => {
                                document.getElementsByClassName("search-input-error")[0].className="search-input"
                                setInput("");
                            }
                        }))
                    }
                    fetchPostcodeData();
                }}
                >Search</Button>
            </div>
        </div>
    </PostcodeSearchStyled>
  )
}

const PostcodeSearchStyled = styled.div`
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border-radius: 50px;
    background-color: darkred;
    box-shadow: 0px 1px 12px -1px rgba(0,0,0,0.75);
}
p{
    color: white;
    font-size: 2em;
    font-weight: bold;
}
.search-section{
    display: flex;
}
.search-input{
    padding: 10px;
    width: 50vw;
    margin: 0 10px;
}

.search-input-error{
    padding: 10px;
    width: 50vw;
    margin: 0 10px;
    color: red;
    font-weight: bold;
}
.search-input: focus{
    outline: none;
}
.search-btn{
    font-size: 1.5em;
    background-color: rgba(251,104,104,1);
    border: none;
}
.search-btn: hover{
    background-color: crimson;
}

@media (max-width: 375px){
    .container{
        padding: 15px;
    }
    p{
        font-size: 1.3em;
    }
    .search-input{
        font-size: 0.7em;
    }
    .search-btn{
        font-size: 0.7em;
    }
    .search-input-error{
        font-size: 0.7em;
    }
}
`

export default PostcodeSearch