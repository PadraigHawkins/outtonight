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
    { name: 'THE CAMDEN', link: 'https://goo.gl/maps/Wnj931UWRts2zWNCA' }
    
  ];

  function selectRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];

    const selectedNameElement = document.getElementById('selectedName');
    selectedNameElement.innerHTML = `<a href="${selectedName.link}">${selectedName.name}</a>`;
  }