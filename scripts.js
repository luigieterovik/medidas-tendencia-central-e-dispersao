const button = document.getElementsByClassName('buttonCalcular')[0]
const inputMedia = document.getElementById('inputResultadosMedia')
const inputMediana = document.getElementById('inputResultadosMediana')
const inputVariancia = document.getElementById('inputResultadosVariancia')
const inputDesvioPadrao = document.getElementById('inputResultadosDesvioPadrao')
const inputModa = document.getElementById('inputResultadosModa')

const script = () => {
    const numeros = [] // Array números textarea

    const quantidade = [] // Array quantidade de números

    const textareaNumeros = document.getElementById('textareaNumeros').value

    const textareaQuantidade = document.getElementById('textareaQuantidade').value

    textareaNumeros.split(",").forEach(number => {
        numeros.push(parseFloat(number))
    })

    textareaQuantidade.split(",").forEach(number => {
        quantidade.push(parseFloat(number))
    })

    const numerosRepeticao = [] // Novo array para o caso de quantidade

    const tamanhoArray = numeros.length
    const tamanhoArrayNumerosRepeticao = quantidade.length

    let repete = false

    for (let i = 0; i < tamanhoArrayNumerosRepeticao; i++) {
        if (quantidade[i] > 1) {
            repete = true

            break
        }
    }

    if (repete === true) {
        let somador = 0

        for (let i = 0; i < tamanhoArrayNumerosRepeticao; i++) {
            somador += quantidade[i]
        }

        let comparador = 0

        for (let i = 0; i < somador; i++) {
            for (let j = 0; j < quantidade[i]; j++) {
                numerosRepeticao[comparador] = numeros[i]

                comparador++
            }
        }
    }

    const tamanhoArrayNovo = numerosRepeticao.length


    const media = () => {
        if (repete === false) {
            let soma = 0

            for (i = 0; i < tamanhoArray; i++) {
                soma += numeros[i]
            }

            let mediaFinal = soma / tamanhoArray

            return mediaFinal
        }

        else {
            let soma = 0

            for (i = 0; i < tamanhoArrayNovo; i++) {
                soma += numerosRepeticao[i]
            }

            let mediaFinal = soma / tamanhoArrayNovo

            return mediaFinal
        }

    }

    console.log("Média aritmética: " + media())
    inputMedia.value = media()


    const mediana = () => {
        if (repete === false) {
            const ordenado = numeros.sort(function (a, b) {
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

        else {
            const ordenado = numerosRepeticao.sort(function (a, b) {
                return a - b;
            })

            if (tamanhoArrayNovo % 2 === 0) {
                const numeroMeio1 = (tamanhoArrayNovo / 2) - 1
                const numeroMeio2 = numeroMeio1 + 1
                const mediana = (ordenado[numeroMeio1] + ordenado[numeroMeio2]) / 2

                return mediana
            }

            else {
                const numeroMeio = (tamanhoArrayNovo / 2) - 1
                const numeroMeioArredondado = Math.ceil(numeroMeio)

                const mediana = ordenado[numeroMeioArredondado]

                return mediana
            }
        }
    }

    console.log("Mediana: " + mediana())
    inputMediana.value = mediana()


    const variancia = () => {
        if (repete === false) {
            let soma = 0

            for (let i = 0; i < tamanhoArray; i++) {
                soma += (numeros[i] - media()) ** 2
            }

            const variancia = soma / tamanhoArray

            return variancia
        }

        else {
            let soma = 0

            for (let i = 0; i < tamanhoArrayNovo; i++) {
                soma += (numerosRepeticao[i] - media()) ** 2
            }

            const variancia = soma / tamanhoArrayNovo

            return variancia
        }

    }

    console.log("Variância: " + variancia())
    inputVariancia.value = variancia()


    const desvioPadrao = Math.sqrt(variancia())

    console.log("Desvio-padrão: " + desvioPadrao)
    inputDesvioPadrao.value = desvioPadrao


    const moda = () => {
        if (repete === false) {

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

        else {

            const getOccurrences = (array, value) => array.reduce((acc, item) => value === item ? acc + 1 : acc, 0)

            const quantidadeNumerosRepetidos = []

            for (i = 0; i < 1000; i++) {
                quantidadeNumerosRepetidos[i] = getOccurrences(numerosRepeticao, i)
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
    }

    if (moda() === -1) {
        console.log("Amodal")
        inputModa.value = "Amodal"
    }

    else {
        console.log("Moda: " + moda())
        inputModa.value = moda()
    }
}

button.addEventListener('click', script)

document.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
      script()
    }
  })
