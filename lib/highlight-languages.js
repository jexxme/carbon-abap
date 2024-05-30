import { LANGUAGES } from './constants';

// Import the custom SAP ABAP language module
import abap from 'highlightjs-sap-abap';

// Register the custom SAP ABAP language with Highlight.js
const customLanguages = {
  abap
};

export default LANGUAGES.filter(l => l.highlight)
  .map(l => l.short || l.mode)
  .map(lang => {
    // Check if the language is a custom language
    if (customLanguages[lang]) {
      return [lang, customLanguages[lang]];
    }
    // Default behavior for built-in languages
    return [lang, require(`highlight.js/lib/languages/${lang}`)];
  });
