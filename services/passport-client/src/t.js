import get from 'lodash/get'
import React from 'react'
import template from 'lodash/template'
import ReactMarkdown from 'react-markdown'

const translations = {
    en: {
        SignInForm: {
            title: 'Sign in',
            buttonLabel: 'Sign in',
            toContinueToApplication: 'to continue to **${companyName}**',
            emailPlaceholder: 'you@domain.com',
            toContinueDescription: 'To continue, ${applicationTitle} will share your name, email address, and profile picture with ${companyName}. Before using this app, you can review ${companyName}\'s [privacy policy](${privacyPolicyUrl}) and [terms of service](${termsOfServiceUrl}).',
            privacyPolicy: 'privacy policy',
            termsOfService: 'terms of service',
        },
        VerifyingSession: {
            title: 'Awaiting confirmation',
            description: 'We sent an email to **${email}**.\n\nVerify that the code provided in the mail matches the code:',
            loadingText: 'Waiting for your confirmation'
        },
        Activate: {
            title: 'Verifying',
            confirmedTitle: 'Email Address Confirmed',
            confirmedDescription: 'You have been correctly authenticated. You may now close this window and head to the page where you signed in.'
        }
    },
    nl: {
        SignInForm: {
            title: 'Log in',
            buttonLabel: 'Log in',
            toContinueToApplication: 'om door te gaan naar **${companyName}**',
            emailPlaceholder: 'Jouw e-mailadres',
            toContinueDescription: 'Zodra je inlogt, zal ${applicationTitle} je naam, e-mailadres en profiel foto delen met ${companyName}. Voordat je deze app gaat gebruiken, kun je ${companyName}\'s [privacy policy](${privacyPolicyUrl}) en [terms of service](${termsOfServiceUrl}) bekijken.',
            privacyPolicy: 'privacy policy',
            termsOfService: 'terms of service',
        },
        VerifyingSession: {
            title: 'Wachten op bevestiging',
            description: 'We hebben zojuist een mail verstuurd naar **${email}**.\n\nCheck of de code in de mail overeen komt met de volgende code:',
            loadingText: 'Aan het wachten op je bevestiging'
        },
        Activate: {
            title: 'Aan het bevestigen',
            alreadyVerifiedTitle: 'Je bent reeds ingelogd bij',
            confirmedTitle: 'Je bent nu ingelogd bij',
            confirmedDescription: 'Ga terug naar je oorspronkelijke pagina. Je kunt dit venster nu sluiten.',
            loginExpiredTitle: 'Magic link verlopen',
            loginExpiredDescription: 'Vraag opnieuw een magic link aan'
        },
        'Uh oh! Something went wrong': 'Oh Oh! Er is iets fout gegaan',
        'We couldn\'t find the resource you\'re looking for.': 'We kunnen de bron die u zoekt niet vinden.'
    }
}

export default (key, { markdown, bindings } = { markdown: false, bindings: null }) => {

    let value = get(translations.nl, key) || 'translation_missing'

    if (bindings) {
        value = template(value)(bindings)
    }

    if (!markdown) {
        return value
    }

    return (
        <ReactMarkdown
            source={value}
        />
    )
}