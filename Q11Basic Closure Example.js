function outerFunction() {
    let message = "Hello from closure!"

    function innerFunction() {
        console.log(message)
    }

    return innerFunction
}

const storedFunction = outerFunction();

storedFunction()
