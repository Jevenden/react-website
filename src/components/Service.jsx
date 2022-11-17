import React from 'react'
import styled from 'styled-components'
import How from "../img/how.png"

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

const Service = () => {
  return (
    <Container>
        <Left>
            <Image src={How}/>
        </Left>
        <Right>
            <Wrapper />
            <Title>Simple processes to start</Title>
            <Desc>Our platform provides a simple way to start your business. You can create your own website and start selling your products online.</Desc>
        </Right>
    </Container>
  )
}

export default Service