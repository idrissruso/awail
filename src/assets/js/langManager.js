import { getCurrentLanguage, setCurrentLanguage } from './language.js'

function updateElementTranslation(idKey) {
  const language = getCurrentLanguage()
  try {
    fetch(`${language}.json`)
      .then((response) => response.json())
      .then((translations) => {
        const translation = translations[idKey]
        document.getElementById(idKey).textContent = translation
      })
  } catch (error) {
    console.error(document.getElementById(idKey))
  }
}

export const switchLang = (id) => {
  const languageSelect = document.getElementById('language-select')
  languageSelect.addEventListener('change', (event) => {
    const newLanguage = event.target.value
    setCurrentLanguage(newLanguage)
    updateElementTranslation(id)
  })
}
