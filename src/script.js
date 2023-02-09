"use strict";

const date__now = document.querySelector(".date_now");
const dateNamaz = document.querySelector(".date_namaz");
const regionCity = document.getElementById('regionHtml');
const SelectRegion = document.querySelector('.selectedRegion')
const morning = document.querySelector('#morning');
const sun = document.querySelector('#sun');
const noon = document.querySelector('#noon');
const asr = document.querySelector('#afternoon');
const evening = document.querySelector('#evening');
const night = document.querySelector('#night');

setInterval(() => {
  let today = new Date();
  let Hours;
  let Minut;
  let Second;
  if (today.getHours() < 10) Hours = "0" + today.getHours();
  else Hours = today.getHours();
  if (today.getMinutes() < 10) Minut = "0" + today.getMinutes();
  else Minut = today.getMinutes();
  if (today.getSeconds() < 10) Second = "0" + today.getSeconds();
  else Second = today.getSeconds();

  date__now.textContent = `${Hours}:${Minut}:${Second}`;
  let date = (
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate()
  ).split("-");
  dateNamaz.textContent = `${+date[2]}-${month[+date[1]]} ${+date[0]}-yil`;
}, 1000);

let baseURL = 'https://islomapi.uz/api/present/day?region';
async function setTimePray(region){
    const response = await fetch(`${baseURL}=${region}`);
    const result = await response.json()
    morning.textContent = result.times.tong_saharlik;
    sun.textContent = result.times.quyosh;
    noon.textContent = result.times.peshin;
    asr.textContent = result.times.asr;
    evening.textContent = result.times.shom_iftor;
    night.textContent = result.times.hufton
}


SelectRegion.addEventListener('click',(e) => {
    regionCity.innerHTML = ``
    regionCity.textContent = `${e.target.value} shahri`
    setTimePray(e.target.value);
})

