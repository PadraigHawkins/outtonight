// list of pubs with associated hyperlinks
const names = [
    { name: 'PYG', link: 'https://goo.gl/maps/21zWP7ZK7Rqmn5kF6' },
    { name: 'THE LONG HAUL', link: 'https://goo.gl/maps/3R3pHFJqwfR2eBgH6' },
    { name: 'DEVITTS', link: 'https://goo.gl/maps/Jmyrcm62GjnS4TsK9' },
    { name: 'GROGANS', link: 'https://goo.gl/maps/emtvwoQftMa8r6m17' },
    { name: 'THE CAMDEN', link: 'https://goo.gl/maps/Wnj931UWRts2zWNCA' }
  ];

  function selectRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];

    const selectedNameElement = document.getElementById('selectedName');
    selectedNameElement.innerHTML = `<a href="${selectedName.link}">${selectedName.name}</a>`;
  }