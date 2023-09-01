;(function () {
  const maleStudents = document.querySelector('#male-students')
  const femaleStudents = document.querySelector('#female-students')
  const totalStudents = document.querySelector('#total-students')
  const getStudentsUrl = window.API_URLS.apiUrl + 'getStudents'

  const getStudents = async () => {
    try {
      const response = await fetch(getStudentsUrl)
      const students = await response.json()
      return students
    } catch (error) {
      alert('Une erreur est survenue')
    }
  }

  getStudents().then((students) => {
    totalStudents.innerHTML = students.length
    femaleStudents.innerHTML = students.filter(
      (student) => student.gender === 'Feminin'
    ).length
    maleStudents.innerHTML = students.filter(
      (student) => student.gender === 'Masculin'
    ).length
  })
})()
