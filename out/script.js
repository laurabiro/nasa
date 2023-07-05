"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const dateInput = document.getElementById("date-input");
const button = document.getElementById("button");
const titleEl = document.getElementById("title");
const explanationEl = document.getElementById("explanation");
const imageEl = document.getElementById("image");
const creditEl = document.getElementById("credit");
imageEl.classList.remove("border");
let getData = () => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield fetch(`https://api.nasa.gov/planetary/apod?date=${dateInput.value}&api_key=dGcaNs8FVDw69iD4KPrOSYxOfgUAy3KrvTuoBfA8`);
    let data = yield response.json();
    console.log(data);
    let renderData = (data) => {
        if (data.title !== undefined) {
            titleEl.innerHTML = data.title;
        }
        else {
            titleEl.innerHTML = "No picture for this day";
        }
        if (data.explanation !== undefined) {
            explanationEl.innerHTML = data.explanation;
        }
        else {
            explanationEl.innerHTML = "Choose another date or press back";
        }
        imageEl.src = data.url;
        imageEl.classList.add("border");
        if (data.copyright !== undefined) {
            creditEl.innerText = data.copyright;
        }
        else {
            creditEl.innerText = "";
        }
    };
    /* renderData(data) */
    button.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        let response = yield fetch(`https://api.nasa.gov/planetary/apod?date=${dateInput.value}&api_key=dGcaNs8FVDw69iD4KPrOSYxOfgUAy3KrvTuoBfA8`);
        let data = yield response.json();
        renderData(data);
    }));
});
getData();
