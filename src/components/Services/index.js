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
            <ServicesH1>Nos Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard to='/serviceinfo'>
                    <ServicesIcon src={doctorSVG} alt='Doctor'/>
                    <ServicesH2>Notre équipe</ServicesH2>
                    <ServicesP>Nous vous aidons à rester en santé</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={appointmentSVG} alt='Appointment'/>
                    <ServicesH2>Rendez-vous</ServicesH2>
                    <ServicesP>Accédez à tous nos services</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={medicalResearchSVG} alt='Medical Research'/>
                    <ServicesH2>Recherche médicale</ServicesH2>
                    <ServicesP>Découvrez sur quoi nous travaillons</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
