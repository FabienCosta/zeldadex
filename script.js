const getfetch = async () => {
  const response = await fetch('https://zelda.fanapis.com/api/characters');
    const data = await response.json();
    console.log(data.data)
    console.log(data.data[7]);
    console.log(data.data[7].appearances);
}
getfetch();




// const main = document.querySelector('main');
// console.log(main);
// const card = document.createElement('div');
// card.classList.add('main_card');
// main.append(card);

// for (let i = 0; i < getfetch.length; i++) {
//   const card = document.createElement('div');
//   card.classList.add('main_card');
//   main.append(card);

// }