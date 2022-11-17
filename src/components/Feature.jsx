import React from 'react'
import styled from 'styled-components'
import App from "../img/app.png"
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    width: 50%;
`

const Image = styled.img`
    width: 65%;
    padding: 10px;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.span`
font-size: 70px;
margin-left: 30px;
`

const SubTitle = styled.span`
font-size: 24px;
font-style: italic;
color: #333;
margin-top: 30px;
margin-left: 30px;
`

const Desc = styled.span`
font-size: 20px;
color: #777;
margin-top: 30px;
margin-left: 30px;
`

const Button = styled.span`
width: 150px;
border: none;
padding: 15px 20px;
background-color: darkblue;
color: white;
font-size: 20px;
border-radius: 20px;
margin-top: 20px;
cursor: pointer;
margin-left: 30px;
`

const Feature = () => {
  return (
    <Container>
        <Left><Image src={App}/></Left>
        <Right>
            <Title>
                <b>good</b> design<br/>
                <b>good</b> business
            </Title>
            <SubTitle>We know that good design means good business.</SubTitle>
            <Desc>Luke loves poop</Desc>
            <Desc>It's his favorite thing</Desc>
            <Button>Learn More</Button>
        </Right>
        <AnimatedShapes/>
    </Container>
  )
}

export default Feature