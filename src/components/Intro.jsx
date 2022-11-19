import React from 'react'
import styled from 'styled-components'
import Woman from "../img/woman.png"
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    height: calc( 100vh - 50px );
    display: flex;
    padding: 20px;
    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
    }
`

const Image = styled.img`
    width: 100%;
`

const Title = styled.h1`
    font-size: 60px;
    width: 60%;
    @media only screen and (max-width: 480px) {
        width: 100%;
        font-size: 50px;
    }
`

const Desc = styled.p`
width: 60%;
font-size: 20px;
margin-top: 20px;
`
const Info = styled.div`
    width: 60%;
    margin-top: 50Px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
        flex-direction: column;
    }
`

const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
    @media only screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
`

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`

const Phone = styled.span`
    color: pink;
    font-weight: bold;
`

const ContactText = styled.span`
    color: grey;
    margin-top: 5px;
`

const Right = styled.div`
    width: 40%;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`

const intro = () => {
  return (
    <Container>
        <Left>
            <Title>Adventures in the Creative Age</Title>
            <Desc>Created using React styled components</Desc>
            <Info>
                <Button>Start a Project</Button>
                <Contact>
                    <Phone>Call us (404)786-6140</Phone>
                    <ContactText>For any Questions or Concerns</ContactText>
                </Contact>
            </Info>
        </Left>
        <Right>
            <Image src={Woman}></Image>
        </Right>
        <AnimatedShapes />
    </Container>
  )
}

export default intro