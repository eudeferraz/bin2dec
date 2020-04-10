function convert(){
  const binary = document.getElementById("b_Input").value

  binary.split('').map((char) => {
    if(char !== '1' && char !== '0') return alert('Please enter a valid binary')
  })
  
  const decimal = parseInt(binary, 2)
  document.getElementById("d_Output").value = decimal
  return true
}