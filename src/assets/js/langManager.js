;(function () {
  let currentLanguage = 'ar'

  function setCurrentLanguage(lang) {
    currentLanguage = lang
  }

  function getCurrentLanguage() {
    return currentLanguage
  }

  function updateElementTranslation(idKey, op) {
    const language = getCurrentLanguage()
    if (op) {
      fetch(`../${language}.json`)
        .then((response) => response.json())
        .then((translations) => {
          const translation = translations[idKey]
          const element = document.getElementById(idKey)
          if (element) {
            element.innerHTML = translation
          }
        })
    } else {
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
  }

  const switchLang = (id, op) => {
    const languageSelect = document.getElementById('language-select')
    const currentLanguage = languageSelect.value
    setCurrentLanguage(currentLanguage)
    updateElementTranslation(id, op)
    languageSelect.addEventListener('change', (event) => {
      const newLanguage = event.target.value
      setCurrentLanguage(newLanguage)
      updateElementTranslation(id, op)
    })
  }

  // In langManager.js
  window.switchLang = function (id, op = false) {
    switchLang(id, op)
  }
})()
