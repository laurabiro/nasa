const dateInput = document.getElementById("date-input") as HTMLInputElement
const button = document.getElementById("button") as HTMLButtonElement
const titleEl = document.getElementById("title") as HTMLElement
const explanationEl = document.getElementById("explanation") as HTMLElement
const imageEl = document.getElementById("image") as HTMLImageElement
const creditEl = document.getElementById("credit") as HTMLParagraphElement

let getData = async () => {
    let response = await fetch(`https://api.nasa.gov/planetary/apod?date=${dateInput.value}&api_key=dGcaNs8FVDw69iD4KPrOSYxOfgUAy3KrvTuoBfA8`)
    let data = await response.json()
    console.log(data)
    
    let renderData = (data:any) => {
        getData()
        if(data.title !== undefined){
            titleEl.innerHTML = data.title
        }else{
            titleEl.innerHTML = "No picture for this day"
        }
        if(data.explanation !== undefined){
            explanationEl.innerHTML = data.explanation
        }else{
            explanationEl.innerHTML = "Choose another date or press back"
        }
        imageEl.src = data.url
        if(data.copyright !== undefined){
            creditEl.innerText = data.copyright
        }else{
            creditEl.innerText = ""
        }
    }
    
    button.addEventListener("click", async () => {
        renderData(data)
    })
}

getData()






