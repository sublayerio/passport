const translations = {
    "Stay signed in": "Blijf ingelogd",
    "Check your email": "Ga naar je inbox",
    "We emailed a magic link to": "We hebben een magic link verstuurd naar",
    "Click the link to log in or sign up": "Klik op de knop om in te loggen",
    "Don't close this tab": "Sluit deze pagina niet",
    "Come back to this tab after you click your magic link.":
      "Kom terug naar deze pagina zodra je op de knop in de email hebt geklikt",
    Email: "E-mailadres",
    Password: "Wachtwoord",
    Continue: "Doorgaan",
    "Change password": "Wachtwoord wijzigen",
    "Old password": "Huidige wachtwoord",
    "New password": "Nieuwe wachtwoord",
    Cancel: "Annuleren",
    "Create your account": "Maak je account aan",
    "Forgot your password?": "Wachtwoord vergeten?",
    "Use single sign-on (SSO) instead": "Inloggen zonder wachtwoord",
    "Use your password instead": "Inloggen met wachtwoord",
    "Enter the email address associated with your account and we'll send you a link to reset your password.":
      "Vul het e-mailadres in en we versturen je een link om je wachtwoord te resetten.",
    "Don't have an account?": "Heb je nog geen account?",
    "Continue with SSO": "Doorgaan",
    "Sign up": "Aanmelden",
    "Sign in to your account": "Inloggen",
    "Already have an account?": "Heb je al een account?",
    "Sign in": "Log in",
    "Full name": "Naam",
    "Confirm password": "Bevestig wachtwoord",
    "Create your account": "Maak je account aan",
    "Go back to your original tab.": "Ga terug naar je oorspronkelijke pagina.",
    "You can now close this window.": "Je kunt dit venster nu sluiten.",
    "You're logged into": "Je bent nu ingelogd bij",
    "Uh oh! Something went wrong": "Oh Oh! Er is iets fout gegaan",
    "We couldn't find the resource you're looking for.":
      "We kunnen de bron die u zoekt niet vinden.",
    "Thanks, check your email for instructions to reset your password.":
      "Bedankts, controleer je inbox voor instructies om je wachtwoord te resetten.",
    "Didn't get the email? Check your spam folder or":
      "Geen email ontvangen? Controleer je spambox of",
    resend: "opnieuw versturen",
    "Incorrect email or password.": "Onjuist e-mailadres of wachtwoord.",
    "We couldn’t find that email. Please try again.":
      "We konden dit e-mailadres niet vinden.\nProbeer het a.u.b. opnieuw."
  };
  
  export default key => {
    const translation = translations[key];
    return translation ? translation : key;
  };
  