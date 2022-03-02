import { TranslationLanguages } from "translations/types"
        
/**
 * Translation of layout component Layout
 * @componentRef components/layout/Layout.tsx
 */
const translation: TranslationLanguages = {
    fr: {
        'menu': {
            'home': "Accueil",
            'contact': "Contact",
        },
        'footer': {
            'bottom': {
                'copyright': 'Made with ❤️ by :author ©:year',
                'terms-and-services': "Termes et services",
                'privacy-policy': "Politique de confidentialité",
                'manage-cookies': "Gestion des cookies",
            },
        },
        'header': {
            'change-language': 'Changer la langue',
        },
        'language': {
            'fr': "Français",
            'en': "English",
        }
    },
    en: {
        'menu': {
            'home': "Home",
            'contact': "Contact us",
        },
        'footer': {
            'bottom': {
                'copyright': 'Made with ❤️ by :author ©:year',
                'terms-and-services': "Terms and services",
                'privacy-policy': "Privacy policy",
                'manage-cookies': "Manage cookies",
            },
        },
        'header': {
            'change-language': 'Change language',
        },
        'language': {
            'fr': "Français",
            'en': "English",
        }
    }
}

export default translation