const som = document.querySelector("#som")
const usd = document.querySelector("#usd")
const eur = document.querySelector("#eur")

const converter = (element, targetElement, element2, targetElement2, element3, targetElement3, current) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest()
        xhr.open("GET", "../data/converter.json")
        xhr.setRequestHeader("Content-type", "application/json")
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse(xhr.response)

            switch (current) {
                case "som":
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    targetElement3.value = (element.value / data.eur).toFixed(2)
                    break
                case "usd":
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    targetElement3.value = (element.value / data.eur * data.usd).toFixed(2)
                    break
                case "eur":
                    targetElement2.value = (element.value * data.eur / data.usd).toFixed(2)
                    targetElement3.value = (element.value * data.eur).toFixed(2)
            }
        }
    }
}

converter(som, usd, "som", usd, "som", eur, "som")
converter(usd, som, "usd", som, "usd", eur, "usd")
converter(eur, som, "eur", usd, "eur", som, "eur")