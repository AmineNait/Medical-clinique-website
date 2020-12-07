import doctorsSVG from '../../images/doctors.svg'
import medicalCareSVG from '../../images/medical-care.svg'
import medicineSVG from '../../images/medicine.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'Pandémie Covid-19',
    headline: 'Faites vous testez dans nos laboratoires',
    description: 'Test Covid-19 et résultat dans la journée.',
    buttonLabel: 'Enregistrez-vous',
    imgStart: true,
    img: doctorsSVG,
    alt: 'Doctors',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Apprenez-en plus',
    headline: 'Nouvelles',
    description: 'Découvrez les réponses à vos questions avec la foire aux questions. Découvrez des nouvelles concernant la santé globale.',
    buttonLabel: 'Savoir plus',
    imgStart: false,
    img: medicalCareSVG,
    alt: 'Medical care',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Rejoignez-nous',
    headline: 'Créer un compte est facile avec nous',
    description: 'Tout ce dont vous avez besoin est de compléter le formulaire en nous fournissant vos informations.',
    buttonLabel: 'Enregistrez-vous',
    imgStart: true,
    img: medicineSVG,
    alt: 'Medicine',
    dark: false,
    primary: false,
    darkText: true
}