const uppercases = document.getElementById('uppercases')
const lowercases = document.getElementById('lowercases')
const numbers = document.getElementById('numbers')
const specials = document.getElementById('specials')
const buttonNewPassword = document.getElementById('button-new-password')
const quantity = document.getElementById('quantity')
const characters = document.getElementById('characters')
const passwordInput = document.getElementById('password-input')
const copy = document.getElementById('copy')

function generateNewPassword() {
  copy.disabled = false
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz'
  const numberChars = '0123456789'
  const specialChars = '!@#$%ˆ&*()_+'

  let validChars = ''
  if (uppercases.checked) validChars += upperChars
  if (lowercases.checked) validChars += lowerChars
  if (numbers.checked) validChars += numberChars
  if (specials.checked) validChars += specialChars

  let password = ''
  for (let i = 0; i < parseInt(quantity.value); i++) {
    password += validChars.charAt(Math.floor(Math.random() * validChars.length))
  }
  passwordInput.value = password
}

function verifyIfHasAnyCheckboxChecked() {
  if (lowercases.checked || uppercases.checked || numbers.checked || specials.checked) {
    buttonNewPassword.disabled = false
  } else {
    buttonNewPassword.disabled = true
  }
}

buttonNewPassword.addEventListener('click', generateNewPassword)
quantity.addEventListener('change', () => {
  characters.innerHTML = quantity.value
})
uppercases.addEventListener('change', verifyIfHasAnyCheckboxChecked)
lowercases.addEventListener('change', verifyIfHasAnyCheckboxChecked)
numbers.addEventListener('change', verifyIfHasAnyCheckboxChecked)
specials.addEventListener('change', verifyIfHasAnyCheckboxChecked)
copy.addEventListener('click', () => {
  navigator.clipboard.writeText(passwordInput.value)
  copy.innerHTML = `<i class="icon-ok" style="color:green"></i>`
  setTimeout(() => {
    copy.innerHTML = `<i class="icon-copy"></i>`
  }, 800)
})