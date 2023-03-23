// DIGITE OS NÚMEROS AQUI, COM VÍRGULA ENTRE ELES.

const numeros = [
    
    2,7,3

] 

const tamanhoArray = numeros.length

const media = () => {
    let soma = 0

    for (i = 0; i < tamanhoArray; i++) {
        soma += numeros[i]
    }

    let mediaFinal = soma / tamanhoArray

    return mediaFinal
}

console.log("Média aritmética: " + media())


const mediana = () => {
	  const ordenado = numeros.sort(function(a, b) {
  return a - b;
})

    if (tamanhoArray % 2 === 0) {
    	const numeroMeio1 = (tamanhoArray / 2) - 1
    	const numeroMeio2 = numeroMeio1 + 1
    	const mediana = (ordenado[numeroMeio1] + ordenado[numeroMeio2]) / 2
    	
    	return mediana
    }
    
    else {
    	const numeroMeio = (tamanhoArray / 2) - 1
    	const numeroMeioArredondado = Math.ceil(numeroMeio)
    	
    	const mediana = ordenado[numeroMeioArredondado]
    	
    	return mediana
    }
}

console.log("Mediana: " + mediana())


const varianca = () => {
    let soma = 0

    for (let i = 0; i < tamanhoArray; i++) {
        soma += (numeros[i] - media()) ** 2
    }

    const varianca = soma / tamanhoArray

    return varianca
}   

console.log("Variança: " + varianca())


const desvioPadrao = Math.sqrt(varianca())

console.log("Desvio-padrão: " + desvioPadrao)


const moda = () => {
    const getOccurrences = (array, value) => array.reduce((acc, item) => value === item ? acc + 1 : acc, 0)

    const quantidadeNumerosRepetidos = []

    for (i = 0; i < 1000; i++) {
        quantidadeNumerosRepetidos[i] = getOccurrences(numeros, i)
    }

    const maiorNumero = Math.max(...quantidadeNumerosRepetidos)

    const indexQuantidadeNumerosRepetidos = quantidadeNumerosRepetidos.findIndex(index => index === maiorNumero)

    const maioresNumerosRepetidosFiltrados = quantidadeNumerosRepetidos.filter(number => number === maiorNumero)

    if (maioresNumerosRepetidosFiltrados.length === 1) {
        const moda = indexQuantidadeNumerosRepetidos

        return moda
    }

    else {
        return -1
    }
}

if (moda() === -1) {
    console.log("Amodal")
}

else {
    console.log("Moda: " + moda())
}

