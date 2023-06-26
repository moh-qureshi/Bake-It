import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <AboutStyled>
        <div className='container'>
            <div className='article section-one'>
                <img src="/images/homeimage_one.png" alt="image_one" className="article-image home-image-one"/>
                <div className='text-section'>
                  <h1>Enjoy Baked Goods Without The Hard Work</h1>
                  <p>Sit back and relax as we bring a variety of sweet dishes and and a wide assortment of cakes and treats to you. Say goodbye to the tiresome baking and the messy kitchen as you order your delicously baked goods to come straight to your doorstep.</p>
                  <p>You'll be spoilt for choice when you see the amount of bakers in your area, so take a look at the options on offer and discover exciting new tastes and treats available to you!</p>
                </div>
            </div>
            <div className='article section-two'>
                <img src="/images/homeimage_two.png" alt="image_two" className="article-image home-image-two"/>
                <div className='text-section'>
                  <h1>Variety Of Baked Goods To Choose From</h1>
                  <p>With 1000's of baking business on BakeIt, we make it easy for you to choose whatever you are craving. Whether you're in the mood for some succulent chocolate chip cookies, got a craving for some soft gooey brownies or need a refreshing smoothie - we've got it all!</p>
                  <p>For people who suffer from various allergies, we have a huge list of dairy free, nut free and gluten free options to choose from. You could also take a look at our vegetarian, halal and kosher options - so you have no excuses for not satisying your taste buds!</p>
                </div>
            </div>
            <div className='article section-three'>
                <img src="/images/homeimage_three.png" alt="image_three" className="article-image home-image-three"/>
                <div className='text-section'>
                  <h1>Support Your Local Businesses</h1>
                  <p>We cover the whole of the UK - so no matter where you are, we'll have a huge list of nearby bakery businesses in your area. So you can feel good about supporting your local community and helping a small business thrive and grow.</p>
                  <p>Received excellent service from a baker - then why not leave a review to let other people know how great they are! If you are feeling really generous you could even leave the business a nice little tip!</p>
                  <p>We at BakeIt are passionate about giving new businesses to thrive and prosper, so please also check out our new bakers section to see the new bakers in your area. Who knows - they might even become your new favourite bakery to order from! </p>
                </div>
            </div>
        </div>
    </AboutStyled>
  )
}

const AboutStyled = styled.div`
.container{
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
}
.article{
  text-align: left;
  background-color: white; 
  margin: 30px;
  padding: 20px;
  box-shadow: 0px 1px 12px -1px rgba(0,0,0,0.75);
}


.home-image-one, .home-image-three{
  float: left;
  height: 40vh;
  margin: 10px;
}
.home-image-two{
  float: right;
  height: 40vh;
  margin: 10px;
}
h1{
  font-size: 1.75em;
  font-weight: bold;
  margin-bottom: 20px;
}
@media (max-width: 1200px){
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .article{
    width: 950px;
  }
  h1{
    font-size: 2em;
  }
  p{
    font-size: 1.3em;
  }
}
@media (max-width: 1024px){
  .article-image{
    height: 40vh;
  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .article{
    width: 800px;
  }
  h1{
    font-size: 1.8em
  }
  p{
    font-size: 1.2em;
  }
}
@media (max-width: 992px){
  .article-image{
    height: 30vh;
  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .article{
    width: 750px;
  }
  h1{
    font-size: 1.6em;
  }
  p{
    font-size: 1.1em;
  }
}
@media (max-width: 768px){
  .article-image{
    height: 35vh;
  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .article{
    width: 600px;
  }
  h1{
    font-size: 1.3em;
  }
  p{
    font-size: 0.9em;
  }
}
@media (max-width: 600px){
  .article-image{
    height: 8vh;
  }
  .container{
    display: flex;
    flex-direction: row;
  }
  .article{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 170px;
    height: 410px;
    margin: 5px;
    padding: 10px;
  }
  h1{
    font-size: 0.7em;
  }
  p{
    font-size: 0.5em;
  }
  @media (max-width: 425px){
    .article-image{
      height: 7vh;
    }
    .article{
      width: 130px;
      height: 350px;
    }
    h1{
      font-size: 0.6em;
    }
    p{
      font-size: 0.4em;
    }
  }
  @media (max-width: 375px){
    .article-image{
      height: 5vh;
    }
    .article{
      height: 350px;
    }
    h1{
      font-size: 0.5em;
    }
    p{
      font-size: 0.37em;
    }
  }
  @media (max-width: 320px){
    .article{
      height: 320px;
    }
    h1{
      font-size: 0.45em;
    }
    p{
      font-size: 0.30em;
    }
  }
`

export default About