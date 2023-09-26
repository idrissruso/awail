;(function () {
  let currentLanguage = 'ar'

  function setCurrentLanguage(lang) {
    currentLanguage = lang
  }

  function getCurrentLanguage() {
    return currentLanguage
  }

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

  const switchLang = (id) => {
    const languageSelect = document.getElementById('language-select')
    const currentLanguage = languageSelect.value
    setCurrentLanguage(currentLanguage)
    updateElementTranslation(id)
    languageSelect.addEventListener('change', (event) => {
      const newLanguage = event.target.value
      setCurrentLanguage(newLanguage)
      updateElementTranslation(id)
    })
  }

  // In langManager.js
  window.switchLang = function (id) {
    switchLang(id)
  }
})()
