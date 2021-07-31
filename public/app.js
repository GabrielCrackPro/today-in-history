const mainContaier = document.querySelector(".main-container");
const todayContainer = document.querySelector(".today-container");
const API_URL = "http://history.muffinlabs.com/date";

const getData = async (url) => {
  let data = await fetch(url).then((response) => response.json());
  return data;
};
window.onload = async () => {
  let data = await getData(API_URL);
  todayContainer.innerHTML = `Today is ${data.date}`;
  mainContaier.innerHTML = `
  <div class="card mt-2">
  <div class="card-body">
  <h3 class="text-center card-header bg-primary text-white" id="events">Events</h3>
  <div class="events-container"></div>
  <h3 class="text-center card-header bg-primary text-white" id="births">Births</h3> 
  <div class="births-container"></div>
  <h3 class="text-center card-header bg-primary text-white" id="deaths">Deaths</h3> 
  <div class="deaths-container"></div>
  </div>
  </div>
  `;
  const eventsContainer = document.querySelector(".events-container");
  const birthsContainer = document.querySelector(".births-container");
  const deathsContainer = document.querySelector(".deaths-container");

  data.data.Events.forEach((event) => {
    eventsContainer.innerHTML += `
    <h3>${event.year}</h3> 
    <p class="border-bottom border-3">${event.html}</p>
    `;
  });
  data.data.Births.forEach((birth) => {
    birthsContainer.innerHTML += `
      <h3>${birth.year}</h3>
      <p class="border-bottom border-3">${birth.html}</p>
      `;
  });
  data.data.Deaths.forEach((death) => {
    deathsContainer.innerHTML += `
      <h3>${death.year}</h3>
      <p class="border-bottom border-3">${death.html}</p>
      `;
  });
};
