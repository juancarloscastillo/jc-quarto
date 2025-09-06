function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'es', // Idioma original de tu sitio
    includedLanguages: 'en', // Idiomas a los que quieres traducir
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false,
    multilanguagePage: true
  }, 'google_translate_element');
}