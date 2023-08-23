;(function () {
  const maleStudents = document.querySelector('#male-students')
  const femaleStudents = document.querySelector('#female-students')
  const totalStudents = document.querySelector('#total-students')
  const getStudentsUrl = 'http://localhost:3000/api/getStudents'

  const getStudents = async () => {
    try {
      const response = await fetch(getStudentsUrl)
      const students = await response.json()
      console.log(students)
      return students
    } catch (error) {
      console.log(error)
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
