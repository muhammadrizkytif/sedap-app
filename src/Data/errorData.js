// src/data/errorData.js
export const errorDetails = {
    '404': {
        code: '404',
        title: 'Page Not Found',
        description: 'Oops! Looks like the page you were trying to reach does not exist.',
        animationUrl: 'URL_404_ANDA_YANG_BERFUNGSI_ATAU_TIDAK',
    },
    '400': { 
        code: '400',
        title: 'Bad Request',
        description: 'Something was wrong with the request sent to the server.',
        animationUrl: 'https://assets10.lottiefiles.com/packages/lf20_aaesnvcw.json', 
    },
    '401': {
        code: '401',
        title: 'Unauthorized',
        description: 'Authentication is needed. Please log in to continue.',
        animationUrl: 'https://assets10.lottiefiles.com/packages/lf20_aaesnvcw.json', 
    },
    '403': {
        code: '403',
        title: 'Forbidden',
        description: 'You do not have the necessary permissions to view this page.',
        animationUrl: 'https://assets10.lottiefiles.com/packages/lf20_aaesnvcw.json', 
    },
};