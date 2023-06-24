import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const PostcodeSearch = () => {
  return (
    <PostcodeSearchStyled>
        <div className='container'>
            <p>Find Bakers Near You</p>
            <div className='search-section'>
                <input type='text' placeholder='Enter Postcode...' className='search-input'/>
                <Button className='search-btn'>Search</Button>
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
`

export default PostcodeSearch