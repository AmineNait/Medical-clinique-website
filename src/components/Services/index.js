import React from 'react'
import doctorSVG from '../../images/doctor.svg'
import appointmentSVG from '../../images/appointment.svg'
import medicalResearchSVG from '../../images/medical-research.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard to='/serviceinfo'>
                    <ServicesIcon src={doctorSVG} alt='Doctor'/>
                    <ServicesH2>Doctor</ServicesH2>
                    <ServicesP>we help you increase your health</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={appointmentSVG} alt='Appointment'/>
                    <ServicesH2>Appointment</ServicesH2>
                    <ServicesP>you can acces all services</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={medicalResearchSVG} alt='Medical Research'/>
                    <ServicesH2>Medical Research</ServicesH2>
                    <ServicesP>Unlock our special membership card</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
