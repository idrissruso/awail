import { getCurrentLanguage, setCurrentLanguage } from './language.js'

function updateElementTranslation(idKey) {
  const language = getCurrentLanguage()
  fetch(`${language}.json`)
    .then((response) => response.json())
    .then((translations) => {
      const translation = translations[idKey]
      const element = document.getElementById(idKey)
      if (element) {
        element.innerHTML = translation
      }
    })
}

export const switchLang = (id) => {
  const languageSelect = document.getElementById('language-select')
  languageSelect.addEventListener('change', (event) => {
    const newLanguage = event.target.value
    setCurrentLanguage(newLanguage)
    updateElementTranslation(id)
  })
}
