import {
    InfoH1, 
    InfoH2, 
    Container, 
    StyledJumbotron, 
    StyledCol,
    StyledImage
} from './ServiceInfoElements'
import { Row } from 'react-bootstrap'
import Person1_JPG from '../../images/person-1.jpg'
import Person2_JPG from '../../images/person-2.jpg'
import Person3_JPG from '../../images/person-3.jpg'


const ServiceInfo = () => {
    return (
        <Container>
            <StyledJumbotron>
                <InfoH1>Titre principal</InfoH1>
                <InfoH2>Titre secondaire</InfoH2>
            </StyledJumbotron>
            <Row className="show-grid text-center">
                <StyledCol xs={12} sm={4}>
                    <StyledImage src={Person1_JPG} roundedCircle alt="doctor profile"/>
                    <h3>Francky</h3>
                    <p>That's a doctor, a real doctor. a really really best doctor of doctors</p>
                </StyledCol>
                <StyledCol xs={12} sm={4} >
                    <StyledImage src={Person2_JPG} roundedCircle alt="doctor profile"/>
                    <h3>Martina</h3>
                    <p>That's a doctor, a real doctor. a really really best doctor of doctors</p>
                </StyledCol>
                <StyledCol xs={12} sm={4}>
                    <StyledImage src={Person3_JPG} roundedCircle alt="doctor profile"/>
                    <h3>Bob</h3>
                    <p>That's a doctor, a real doctor. a really really best doctor of doctors</p>
                </StyledCol>
            </Row>           
            <Row className="show-grid text-center">
                <StyledCol xs={12} sm={4}>
                    <StyledImage src={Person1_JPG} roundedCircle alt="doctor profile"/>
                    <h3>Francky</h3>
                    <p>That's a doctor, a real doctor. a really really best doctor of doctors</p>
                </StyledCol>
                <StyledCol xs={12} sm={4}>
                    <StyledImage src={Person2_JPG} roundedCircle alt="doctor profile"/>
                    <h3>Martina</h3>
                    <p>That's a doctor, a real doctor. a really really best doctor of doctors</p>
                </StyledCol>
                <StyledCol xs={12} sm={4}>
                    <StyledImage src={Person3_JPG} roundedCircle alt="doctor profile"/>
                    <h3>Bob</h3>
                    <p>That's a doctor, a real doctor. a really really best doctor of doctors</p>
                </StyledCol>
            </Row>           
        </Container>

    )
}

export default ServiceInfo