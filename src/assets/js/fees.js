;(function () {
  const tbody = document.querySelector('#payment__table-body')
  const paymentModal = document.querySelector('.payment')
  const paymentCancelBtn = document.querySelector('.payment__close-btn')
  const paymentModalContent = document.querySelector('.payment__container')
  const table = document.querySelector('table')
  const addFeeForm = document.querySelector('.payment__new-payment')
  const getFeesUrl = 'http://localhost:3000/api/getStudentFees/'
  const createFeeUrl = 'http://localhost:3000/api/createFee'
  let studentId

  table.addEventListener('click', (e) => {
    if (e.target.classList.contains('payment-btn')) {
      paymentModal.classList.add('paymentShown')
      paymentModal.classList.toggle('paymentHidden')
      paymentModalContent.classList.add('payment__container--show')
      studentId = e.target.dataset.student
      getStudentFees(studentId)
    }
  })

  paymentCancelBtn.addEventListener('click', () => {
    paymentModal.classList.remove('paymentShown')
    paymentModal.classList.toggle('paymentHidden')
    paymentModalContent.classList.remove('payment__container--show')
  })

  const getStudentFees = async (studentId) => {
    try {
      const response = await fetch(`${getFeesUrl}${studentId}`)
      const data = await response.json()
      displayFees(data)
    } catch (err) {
      alert(err)
      tbody.innerHTML = `<p class="payment__history__error">Une erreur est survenue</p>`
    }
  }

  function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    return new Date(date).toLocaleDateString(undefined, options)
  }

  const displayFees = (data) => {
    tbody.innerHTML = ''
    data.forEach((fee) => {
      const tr = `<tr class="payment__history__row">
              <td class="payment__history__cell">${formatDate(
                fee.payment_date
              )}</td>
              <td class="payment__history__cell">${fee.amount}</td>
              <td class="payment__history__cell">${fee.month}</td>
            </tr>`
      tbody.insertAdjacentHTML('beforeend', tr)
    })
  }
  function getDataFromForm(formElement) {
    const formData = new FormData(formElement)
    const data = {}

    for (const [key, value] of formData.entries()) {
      data[key] = value
    }

    return data
  }
  addFeeForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = getDataFromForm(addFeeForm)
    const fee = {
      student: studentId,
      amount: data['payment-amount'],
      month: data['payment-month'],
      payment_date: data['payment-date'],
    }
    try {
      const response = await fetch(createFeeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fee), // Use the 'fee' object here
      })
      if (response.ok) {
        alert('Paiement effectué avec succès')
        getStudentFees(studentId)
      }
    } catch (err) {
      alert(err)
    }
  })
})()
