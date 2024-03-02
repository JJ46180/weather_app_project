import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    units: "metric",
    lang: "kr",
    appid: "929c694e80f4257a9edb1f3861bd6622",
  },
});

export const getWeather = () => {
  const lat = 35.20804797277507;
  const lon = 128.6187790666679;
  return instance.get(`weather?lat=${lat}&lon=${lon}`);
};
