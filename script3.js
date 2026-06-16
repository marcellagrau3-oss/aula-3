let quantidadeDeProdutos // entrada - input
let preçoDeUnidade // entrada - input
let valorTotal // saída - output

quantidadeDeProdutos = prompt("Informe a quantidade de produtos");
preçoDeUnidade = prompt("Informe o preço por unidade");

quantidadeDeProdutos = parseFloat(quantidadeDeProdutos);
preçoDeUnidade = parseFloat(preçoDeUnidade);

valorTotal = parseFloat(quantidadeDeProdutos) * parseFloat(preçoDeUnidade);

alert("O valor totalizado é de R$" + valorTotal);