const divSortedNumber = document.getElementById("sortedNumber");
const divAllSortedNumber = document.getElementById("allSortedNumbers");

const allNumbers = [];

const sortedNumbers = [];

const columnsDefinitions = [
  {
    min: 1,
    max: 15,
    column: "B"
  },
  {
    min: 16,
    max: 30,
    column: "I"
  },
  {
    min: 31,
    max: 45,
    column: "N"
  },
  {
    min: 46,
    max: 60,
    column: "G"
  },
  {
    min: 61,
    max: 75,
    column: "O"
  },
];

columnsDefinitions.map(c => {
  let start = c.min;
  let end = c.max;

  for (let i = start; i <= end; i++) {
    allNumbers.push(i);
  }
});

const sortear = () => {
  
  if (allNumbers.length > 0) {
    const choosedNumberIndex = Math.floor(Math.random() * allNumbers.length);
  
    const choosedNumber = allNumbers[choosedNumberIndex];

    allNumbers.splice(choosedNumberIndex, 1);
  
    const column = columnsDefinitions.find(c => c.min <= choosedNumber && c.max >= choosedNumber).column;

    sortedNumbers.push({ column, choosedNumber });

    let html = `<p>Número Sorteado:</p> <p>${column} - ${choosedNumber}</p>`;

    carregarLista()
    
    divSortedNumber.innerHTML = html;
  } else { 
    divSortedNumber.innerHTML = `Não há números para serem sorteados.`;
  }
}

const carregarLista = () => {
  let html = ""
  columnsDefinitions.map(i => {
    const coluna = i.column;
    const numerosParaColuna = sortedNumbers.filter(item => item.column === coluna).sort((a, b) => a.choosedNumber - b.choosedNumber);
    html += "<div class='items'>";
    html += `<h2 id="${coluna}">${coluna}</h2>`
    numerosParaColuna.map(a => {
      html += `<p id="${a.choosedNumber}">${a.choosedNumber}</p>`
    })
    html += "</div>";
  })
  divAllSortedNumber.innerHTML = html

}
