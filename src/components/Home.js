import React from 'react'
import Header from './Header'
import PostcodeSearch from './PostcodeSearch'
import About from './About'
import styled from 'styled-components'
import CategoryCards from './CategoryCards'

export const Home = () => {
  return (
    <HomeStyled>
        <Header />
        <PostcodeSearch />
        <About />
        <CategoryCards />
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
background-color: rgb(228,228,228);
`