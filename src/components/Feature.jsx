import React from 'react'
import styled from 'styled-components'
import App from "../img/app.png"
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    display: flex;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
        padding: 30px 20px;
    }
`

const Left = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px) {
        display: none;
    }
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
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`

const Title1 = styled.span`
font-size: 70px;
margin-left: 50px;
@media only screen and (max-width: 480px) {
        font-size: 45px;
    }
`

const Title2 = styled.span`
font-size: 70px;
margin-left: 30px;
@media only screen and (max-width: 480px) {
        font-size: 45px;
    }
`

const SubTitle = styled.span`
font-size: 24px;
font-style: italic;
color: #333;
margin-top: 30px;
margin-left: 20px;
`

const Desc = styled.span`
font-size: 20px;
color: #777;
margin-top: 30px;
margin-left: 10px;
`

const Desc2 = styled.span`
font-size: 20px;
color: #777;
margin-top: 30px;
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
`

const Feature = () => {
  return (
    <Container>
        <Left><Image src={App}/></Left>
        <Right>
            <Title1>
                <b>good</b> design<br/>
            </Title1>
            <Title2>
                <b>good</b> business
            </Title2>
            <SubTitle>We know that good design means good business.</SubTitle>
            <Desc>Luke loves poop</Desc>
            <Desc2>It's his favorite thing</Desc2>
            <Button>Learn More</Button>
        </Right>
        <AnimatedShapes/>
    </Container>
  )
}

export default Feature