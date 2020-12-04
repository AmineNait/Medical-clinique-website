import doctorsSVG from '../../images/doctors.svg'
import medicalCareSVG from '../../images/medical-care.svg'
import medicineSVG from '../../images/medicine.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'Pandemie Covid-19',
    headline: 'Faites vous testez dans nos laboratoire',
    description: 'Test Covid-19 et resultat dans la journee gratuitement.',
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
    topLine: 'Discover Top line',
    headline: 'Discover Title',
    description: 'Discover description Discover description Discover description Discover description Discover description ',
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
    topLine: 'Joins Us',
    headline: 'Creating an acount is extremly easy',
    description: 'Get everything ready and set up in 5 minutes. All you need to do is fill the form with your information.',
    buttonLabel: 'Enregistrez-vous',
    imgStart: true,
    img: medicineSVG,
    alt: 'Medicine',
    dark: false,
    primary: false,
    darkText: true
}