import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  timeout: 5000,
  headers: { "Accept-Version": "v1" },
});

const CallApi = () => {
  let data;
  instance
    .get("")
    .then((response) => {
      data = response;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally();

  if (data) {
    return data;
  }
  return error;
};

export default CallApi;
