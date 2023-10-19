import localFont from 'next/font/local'

const CPro = localFont( {
    src: [
        {
            path: '/fonts/CeraProThin.otf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '/fonts/CeraProLight.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '/fonts/CeraProRegular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '/fonts/CeraProMedium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '/fonts/CeraProBold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '/fonts/CeraProBlack.otf',
            weight: '900',
            style: 'normal',
        },
    ]
})
export const CeraPro = CPro;

const CCPro = localFont( {
    src: [
        {
            path: '/fonts/CeraCompactPro-Thin.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '/fonts/CeraCompactPro-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '/fonts/CeraCompactPro-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '/fonts/CeraCompactPro-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '/fonts/CeraCompactPro-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '/fonts/CeraCompactPro-Black.ttf',
            weight: '900',
            style: 'normal',
        },
    ]
})
export const CeraCompact = CCPro;

const noBill = localFont( {
    src: [
        {
            path: '/fonts/postnobillscolombo-light.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '/fonts/postnobillscolombo-regular.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '/fonts/postnobillscolombo-medium.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '/fonts/postnobillscolombo-semibold.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '/fonts/postnobillscolombo-bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '/fonts/postnobillscolombo-extrabold.ttf',
            weight: '900',
            style: 'normal',
        },
    ]
})
export const Post = noBill;