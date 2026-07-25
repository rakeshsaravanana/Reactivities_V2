import axios from "axios";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

const agent = axios.create({
  // To avoid showing url, we used en.development file to have API url.
  baseURL: import.meta.env.VITE_API_URL,
});

agent.interceptors.response.use(async (response) => {
  try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
});
export default agent;
