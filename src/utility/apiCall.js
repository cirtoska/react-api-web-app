import axios from "axios";

const apiClient = axios.create({
  // headers: {
  //     'dsadkasjuhdkas': "dskajhdkasjhdkjashdkjhsad"
  // }
});

apiClient.interceptors.request.use(
  (config) => {
    console.log(config);
    if (!config.url.endsWith("/login")) {
      let token = JSON.parse(localStorage.getItem("token"));
      config.headers["Authorizationtion"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => {
    console.log(response);

    return response;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 400) {
      console.log("asdkjhakdjhaskdjhaskjdh");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
