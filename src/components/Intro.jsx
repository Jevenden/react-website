import React from 'react'
import styled from 'styled-components'
import Woman from "../img/woman.png"

const Container = styled.div`
    height: calc( 100vh - 50px );
    display: flex;
    padding: 20px;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    width: 100%;
`

const Title = styled.h1`
    font-size: 60px;
    width: 60%;
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
`

const intro = () => {
  return (
    <Container>
        <Left>
            <Title>Adventures in the Creative Age</Title>
            <Desc>Luke loves poop</Desc>
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
    </Container>
  )
}

export default intro