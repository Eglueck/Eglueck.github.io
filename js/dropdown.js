let links = document.querySelectorAll('#list li')
links.forEach((el) => {
  el.addEventListener('click', (event) => {
    let val = event.target.innerText
    document.getElementById('dropdownMenuLink').innerHTML = `${val}<span class="caret"></span>`
    console.log(val)
    
  })
})

