import React from 'react'
import { 
    FormH1,
    FormButton,
    FormLabel,
    FormInput,
    FormWrap,
    FormTextArea,
    FormContent,
    Container,
    Form,
    StyledJumbotron
} from './RendezvousElements'

const Rendezvous = () => {
    return (
        <Container>
            <FormWrap>
            <StyledJumbotron />
            <FormContent>
                <Form action='#'>
                    <FormH1>Prendre rendez-vous</FormH1>
                    <FormLabel htmlFor='for'>Nom</FormLabel>
                    <FormInput type='text' required />
                    <FormLabel htmlFor='for'>Courrier électronique</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Numéro Téléphone</FormLabel>
                    <FormInput type='tel' required />
                    <FormLabel htmlFor='for'>Votre message</FormLabel>
                    <FormTextArea rows="4" cols="50" />
                    <FormButton type='submit'>Envoyer</FormButton>
                </Form>
            </FormContent>
            </FormWrap>
        </Container>

    )
}

export default Rendezvous
