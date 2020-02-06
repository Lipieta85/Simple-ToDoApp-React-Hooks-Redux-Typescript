import axios from 'axios';

const instance = axios.create({});

instance.interceptors.response.use(
    function(response) {
        //   if (response.data.token) {
        //       localStorage.removeItem("token");
        //       localStorage.setItem("token", response.data.token);

        //       const token = localStorage.getItem("token");
        //       instance.defaults.headers.common["Authorization"] = token;
        //   }
        return response;
    },
    function(error) {
        if (error.response.status === 401) {
            window.location.replace(`http://localhost:3000/NotFound`);
        }
        // if (error.response.status === 404) {
        //     window.location.assign(`/NotFound`)
        // }
        return Promise.reject(error);
    },
);

export default instance;
