import axios from "axios";

const instance = axios.create({
  //baseURL: "https://api.unsplash.com/",
  timeout: 5000,
  headers: { "Accept-Version": "v1" },
});

async function CallApi(setData, setError) {
  try {
    const response = await instance.get(
      "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&&fm=jpg&w=400&fit=max"
    );
    setData(response.config.url);
  } catch (erro) {
    setError(erro);
  }
}

export default CallApi;
