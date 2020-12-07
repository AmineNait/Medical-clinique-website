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
                <InfoH1>Notre équipe</InfoH1>
                <InfoH2>Apprenez-en plus</InfoH2>
            </StyledJumbotron>
            <Row className="show-grid text-center">
                <StyledCol xs={12} sm={4}>
                    <StyledImage src={Person1_JPG} roundedCircle alt="doctor profile"/>
                    <h3>Dr Francky</h3>
                    <p>Médecin de famille</p>
                </StyledCol>
                <StyledCol xs={12} sm={4} >
                    <StyledImage src={Person2_JPG} roundedCircle alt="doctor profile"/>
                    <h3>Dr Martina</h3>
                    <p>Gynécologue</p>
                </StyledCol>
                <StyledCol xs={12} sm={4}>
                    <StyledImage src={Person3_JPG} roundedCircle alt="doctor profile"/>
                    <h3>Dr Bob</h3>
                    <p>Psychiatre</p>
                </StyledCol>
            </Row>           
            <Row className="show-grid text-center">
                <StyledCol xs={12} sm={4}>
                    <StyledImage src={Person1_JPG} roundedCircle alt="doctor profile"/>
                    <h3>Dr Joseph</h3>
                    <p>Médecin de famille</p>
                </StyledCol>
                <StyledCol xs={12} sm={4}>
                    <StyledImage src={Person2_JPG} roundedCircle alt="doctor profile"/>
                    <h3>Dr Sarah</h3>
                    <p>Neurologue</p>
                </StyledCol>
                <StyledCol xs={12} sm={4}>
                    <StyledImage src={Person3_JPG} roundedCircle alt="doctor profile"/>
                    <h3>André</h3>
                    <p>Infirmier</p>
                </StyledCol>
            </Row>           
        </Container>

    )
}

export default ServiceInfo