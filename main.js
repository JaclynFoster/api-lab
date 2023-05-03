const residentBtn = document.querySelector("#resident-btn")

residentBtn.addEventListener("click", () => {
   getPlanet()
    console.log("Button Clicked")
})

const baseUrl = "https://swapi.dev/api/"

const getPlanet = () => { axios.get(`${baseUrl}/planets/?search=Alderaan`)
    .then((results) => {
        let residentArr = results.data.results[0].residents
        console.log(results.data)
        console.log(residentArr)
        for(let i = 0; i < residentArr.length; i++) {
            getRequest(residentArr[i])
            //  ['https://swapi.dev/api/people/5/', 'https://swapi.dev/api/people/68/',
            // 'https://swapi.dev/api/people/81/']
        }
       
}).catch(error => {
    console.log("error", error)
})
}

const getRequest = (url) => {
axios.get(`${url}`)
.then(resp => {
    console.log(resp.data)
    console.log(url)
    let residentName = document.createElement("h2")
    let body = document.querySelector("body")
    residentName.textContent = resp.data.name
    body.appendChild(residentName)
})
.catch(error => {
    console.log("error", error)
})
}