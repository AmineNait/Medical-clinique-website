import styled from 'styled-components'
import { 
    Jumbotron, 
    Col,
    Image
} from 'react-bootstrap'

export const Container = styled.div`
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,        
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 51, 51, 1) 100%
    );
`
export const StyledJumbotron = styled(Jumbotron)`
  padding-top: 70px;
  margin-bottom: 4em;
  background-color: black;
  text-align: center;
`
export const StyledCol = styled(Col)`
    margin-bottom: 2em;
`

export const InfoH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const InfoH2 = styled.h2`
    color: #fff;
    font-size: 32px;
    text-align: center;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const StyledImage = styled(Image)`
    width: 50%;
`

