// list of pubs with associated hyperlinks
const names = [
    { name: 'PYG', link: 'https://goo.gl/maps/21zWP7ZK7Rqmn5kF6' },
    { name: 'THE LONG HAUL', link: 'https://goo.gl/maps/3R3pHFJqwfR2eBgH6' },
    { name: 'DEVITTS', link: 'https://goo.gl/maps/Jmyrcm62GjnS4TsK9' },
    { name: 'GROGANS', link: 'https://goo.gl/maps/emtvwoQftMa8r6m17' },
    { name: 'NO NAME', link: 'https://goo.gl/maps/uJejbs9qJqRZbNKz6' },
    { name: 'CASSIDYS', link: 'https://goo.gl/maps/rtJN7Hi7N1y8ioKV8' },
    { name: 'MARYS BAR', link: 'https://goo.gl/maps/eCmThjCTtqQjVau49' },
    { name: 'WHELANS', link: 'https://goo.gl/maps/ZDjDLsX1xnLqFk3P6' },
    { name: 'P MACS', link: 'https://goo.gl/maps/VwCyfiqpeWcUNrvK7' },
    { name: 'TAPPED', link: 'https://goo.gl/maps/XGagPobWsUWXoZH6A' },
    { name: '4 DAME LANE', link: 'https://goo.gl/maps/mvN6jMD5rXSffhsQ8' },
    { name: 'THE WOOL SHED', link: 'https://goo.gl/maps/t3sov5XTJtZMS4jE6' },
    { name: 'SIN E', link: 'https://goo.gl/maps/vvcHKfdNimswsR5t8' },
    { name: 'FLANNERYS', link: 'https://goo.gl/maps/rnCNfPHpLcpcV6o36' },
    { name: 'STAGS HEAD', link: 'https://goo.gl/maps/AkZgizjsmxcsQXjW9' },
    { name: 'KEHOES PUB', link: 'https://goo.gl/maps/Gqq3awQDAhDeDsqd7' },
    { name: 'HOGANS', link: 'https://goo.gl/maps/yDVMHgVoGpisuK5e6' },
    { name: 'DOYLES', link: 'https://goo.gl/maps/hT3ntGK9gqxZAWzp8' },
    { name: 'SINNOTS BAR', link: 'https://goo.gl/maps/Yz2JL8iMvoUre2Qx9' },
    { name: 'THE CELT', link: 'https://goo.gl/maps/gJsQou8HNRm5uYUA6' },
    { name: 'SILVER PENNY', link: 'https://goo.gl/maps/oDqHqqpH5qxhXEecA' },
    { name: 'BLEEDING HORSE', link: 'https://goo.gl/maps/UQ2fmp7ofzGrRkJ5A' },
    { name: 'THE CAMDEN', link: 'https://goo.gl/maps/Wnj931UWRts2zWNCA' }
    
  ];

  function selectRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];

    const selectedNameElement = document.getElementById('selectedName');
    selectedNameElement.innerHTML = `<a href="${selectedName.link}">${selectedName.name}</a>`;
  }



  window.onload = function() {
    var popup = document.getElementById("popup");
    popup.style.visibility = "visible";
  }


  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.visibility = "hidden";
  }

// Contact page submit button JS

const form = document.querySelector('form')
const submitBtn = document.querySelector('form button')
const progressbar = document.querySelector('.progressbar')
const bar = document.querySelector('.progressbar .bar')
const submitted = document.querySelector('.submitted')

form.addEventListener('submit', e => {
	e.preventDefault()
	
	form.style.animation = 'linear .3s push'
	
	setTimeout(() => {
		submitBtn.style.scale = '1'
	}, 300)
	
	setTimeout(() => {
		submitBtn.style.animation = 'ease .5s scaleWidth'
	}, 900)
	
	setTimeout(() => {
		progressbar.style.bottom = '0px'
	}, 1200)
	
	setTimeout(() => {
		submitBtn.style.width = '100%'
		bar.style.animation = 'ease .7s scaleBar'
	}, 1390)
	
	setTimeout(() => {
		bar.style.width = '100%'
		submitted.style.top = '0'
	}, 2090)
})
  