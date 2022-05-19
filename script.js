console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
  setTheme('purple')
}else{
  setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for ( let i of themeDots){
	i.addEventListener('click', function(){
		let mode = this.dataset.mode
		setTheme(mode)
	})
}


function setTheme(mode) {
  if (mode == 'blue') {
    document.getElementById('style-theme').href = 'default.css';
  } else if (mode == 'light') {
    document.getElementById('style-theme').href = 'white.css';
  } else if (mode == 'purple') {
    document.getElementById('style-theme').href = 'purple.css';
  } else if (mode == 'green') {
    document.getElementById('style-theme').href = 'green.css';
  }

  localStorage.setItem('theme', mode)
}


