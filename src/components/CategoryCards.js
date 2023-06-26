import React from 'react'
import { Button, Card } from 'react-bootstrap'
import styled from 'styled-components'

const CategoryCards = () => {
  return (
    <CategoryCardsStyled>
        <div className='container'>
        <Card className='categoryCard'>
            <Card.Img variant='top' src='./images/cookiecard.png' className='categoryCard-img'/> 
            <Card.Body className='categoryCard-body'>
                <Card.Title className='categoryCard-title'>Cookies</Card.Title>
                <Card.Text className='categoryCard-text'>Explore our wide range of biscuits and cookies available near you</Card.Text>
            </Card.Body>
            <Card.Footer className='categoryCard-footer'>
                <Button className='categoryCard-btn'>View Cookies</Button>    
            </Card.Footer> 
        </Card>
        <Card className='categoryCard'>
            <Card.Img variant='top' src='./images/cakecard.png' className='categoryCard-img'/> 
            <Card.Body className='categoryCard-body'>
                <Card.Title className='categoryCard-title'>Cakes</Card.Title>
                <Card.Text className='categoryCard-text'>Explore our vast range of flavourful cakes available near you</Card.Text>
            </Card.Body>
            <Card.Footer className='categoryCard-footer'>
                <Button className='categoryCard-btn'>View Cakes</Button>    
            </Card.Footer> 
        </Card>
        <Card className='categoryCard'>
            <Card.Img variant='top' src='./images/browniecard.png' className='categoryCard-img'/> 
            <Card.Body className='categoryCard-body'>
                <Card.Title className='categoryCard-title'>Brownies</Card.Title>
                <Card.Text className='categoryCard-text'>Explore our wide range of soft gooey brownies available near you</Card.Text>
            </Card.Body>
            <Card.Footer className='categoryCard-footer'>
                <Button className='categoryCard-btn'>View Brownies</Button>    
            </Card.Footer> 
        </Card>
        <Card className='categoryCard'>
            <Card.Img variant='top' src='./images/donutcard.png' className='categoryCard-img'/> 
            <Card.Body className='categoryCard-body'>
                <Card.Title className='categoryCard-title'>Donuts</Card.Title>
                <Card.Text className='categoryCard-text'>Explore our wide range of sugary donuts available near you</Card.Text>
            </Card.Body>
            <Card.Footer className='categoryCard-footer'>
                <Button className='categoryCard-btn'>View Donuts</Button>    
            </Card.Footer> 
        </Card>
        <Card className='categoryCard'>
            <Card.Img variant='top' src='./images/strawberrycard.png' className='categoryCard-img'/> 
            <Card.Body className='categoryCard-body'>
                <Card.Title className='categoryCard-title'>Choco Dips</Card.Title>
                <Card.Text className='categoryCard-text'>See our wide range of chocolate dips available near you</Card.Text>
            </Card.Body>
            <Card.Footer className='categoryCard-footer'>
                <Button className='categoryCard-btn'>View Choco Dips</Button>    
            </Card.Footer> 
        </Card>
        </div>
    </CategoryCardsStyled>
  )
}

const CategoryCardsStyled = styled.div`
.container{
    display: flex;
}
.categoryCard{
    display: flex;
    align-items: center;
    text-align: center;
    width: 30vw;
    margin: 0 10px;
    background: linear-gradient(151deg, rgba(255,255,255,1) 3%, rgba(255,238,238,1) 15%, rgba(251,104,104,1) 68%, rgba(255,0,0,1) 100%);
    border: none;
    box-shadow: 0px 1px 12px -1px rgba(0,0,0,0.75);
}
.categoryCard-img{
    height: 15vh;
    width: 10vw;
}
.categoryCard-title{
    font-weight: bold;
}
.categoryCard-btn{
    background-color: darkred;
    border: none;
}
.categoryCard-footer{
    border: none;
}
.categoryCard-btn:hover{
    background-color: crimson;
}
@media (max-width: 768px){
    .categoryCard-img{
        height: 10vh;
        width: 8vw;
    }
    .categoryCard-title{
        font-size: 1em;
    }
    .categoryCard-text{
        font-size: 0.9em;
    }
    .categoryCard-btn{
        font-size: 0.53em;
    }
}
@media (max-width: 600px){
    .categoryCard{
        margin: 0 2px;
    }
    .categoryCard-img{
        height: 8vh;
        width: 8vw;
    }
    .categoryCard-title{
        font-size: 0.8em;
    }
    .categoryCard-text{
        font-size: 0.5em;
    }
    .categoryCard-btn{
        font-size: 0.5em;
    }
}
@media (max-width: 425px){
    .categoryCard-img{
        height: 6vh;
        width: 8vw;
    }
    .categoryCard-title{
        font-size: 0.5em;
    }
    .categoryCard-text{
        font-size: 0.4em;
    }
    .categoryCard-btn{
        font-size: 0.5em;
    }
}
@media (max-width: 375px){
    .categoryCard-title{
        font-size: 0.5em;
    }
    .categoryCard-text{
        font-size: 0.37em;
    }
    .categoryCard-btn{
        font-size: 0.4em;
    }
}
@media (max-width: 320px){
    .categoryCard-img{
        height: 4vh;
        width: 7vw;
    }
    .categoryCard-title{
        font-size: 0.45em;
    }
    .categoryCard-text{
        font-size: 0.3em;
    }
    .categoryCard-btn{
        font-size: 0.45em;
    }
}
`
export default CategoryCards