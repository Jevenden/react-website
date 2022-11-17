import React from 'react'
import styled from 'styled-components'
import How from "../img/how.png"
import MiniCard from './MiniCard'
import Play from "../img/play.png"

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    width: 50%;
`

const Image = styled.img`
    height: 50%;
    margin-top: 13%;
`

const Right = styled.div`
    width: 50%;
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    
`
const Desc = styled.p`
font-size: 20px;
margin-top: 20px;
color: #555;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
`

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`

const Service = () => {
  return (
    <Container>
        <Left>
            <Image src={How}/>
        </Left>
        <Right>
            <Wrapper>
            <Title>Simple processes to start</Title>
            <Desc>Our platform provides a simple way to start your business. You can create your own website and start selling your products online.</Desc>
        <CardContainer>
            <MiniCard/>
            <MiniCard/>
            <MiniCard/>
        </CardContainer> 
        <Button><Icon src={Play}/>Learn More</Button>
        </Wrapper>
        </Right>
    </Container>
  )
}

export default Service