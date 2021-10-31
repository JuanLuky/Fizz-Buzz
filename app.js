 // Divisivel por 3 ==> Fizz
// Divisivel por 5 ==> Buzz
// Divisivel por 3 e 5 ==> FizzBuzz
// Não divisivel por 3 e 5 ==> entrada
// Não é um numero ==> "Digite um numero"


function FizzBuzz() {
    const exibir = document.querySelector('h4')
    const input = document.querySelector('.query')
    const result = input.value
    
    if(typeof result !== 'number') {
        exibir.innerHTML = 'Não é um numero'
    }
    if(result % 3 === 0 && result % 5 === 0) {
       exibir.innerHTML = 'FizzBuzz'
    }
    else if(result % 3 === 0) {
        exibir.innerHTML = 'Fizz'
    }
    else if(result % 5 === 0) {
        exibir.innerHTML = 'Buzz'
    } else {
        exibir.innerHTML = result
    }
    console.log(result)
} 