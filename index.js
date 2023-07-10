const resultText = document.querySelector(".text");
const form = document.querySelector('.form')
form.addEventListener('submit', onSubmit)
 
function onSubmit(e) {
    e.preventDefault()
    const {
      elements: { text },
  } = e.currentTarget;
  if (!text.value) {
    resultText.innerHTML = "Please enter some text";
    return 
  }
    const result = findUniqueSymbol(text.value);
    resultText.innerHTML = `The result is: <span class="result">${result}</span>`;
}

function findUniqueSymbol(text) {
  const uniqueSymbols = [];
  text.split(" ").map((item) => {
    if (item.length === 1) {
      uniqueSymbols.push(item);
      return;
    }

    const firstSymbol = item.slice(0, 1);
    const wordWithoutfirstSymbol = item.slice(1, item.length);

    const isSymbolUnique = !wordWithoutfirstSymbol.includes(firstSymbol);
    if (isSymbolUnique) {
      uniqueSymbols.push(firstSymbol);
      return;
    }
  });

  const symbolCounts = {};
  let firstUniqueSymbol = null;

  for (let symbol of uniqueSymbols) {
    if (symbolCounts[symbol] === undefined) {
      symbolCounts[symbol] = 1;
    } else {
      symbolCounts[symbol]++;
    }
  }

  for (let symbol of uniqueSymbols) {
    if (symbolCounts[symbol] === 1) {
      firstUniqueSymbol = symbol;
      break;
    }
  }
  return firstUniqueSymbol;
}



