import axios from "axios";
import Swal from "sweetalert2";

const fetchApi = async (
  options = {
    uriPath: "",
    method: "",
    data: {},
    headers: { Authorization: false },
  }
) => {
  let headers = {};
  if (options.headers?.Authorization) {
    headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
  }

  try {
    const response = await axios({
      url: options.uriPath,
      method: options.method,
      data: options.data,
      headers,
    });

    return response.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.response?.data?.message || "something wrong!",
      timer: 2500,
    }).then(() => {
      if (error.response?.status === 403) {
        window.location = "/login";
      }
    });
  }
};

export default fetchApi;

/**

NOTE: will be deleted if it is no longer needed

HOW TO USE:
import fetchApi from "...";

EXAMPLE :

--> GET without Authorization
const response = await fetchApi({
    uriPath: "/games/landing",
    method: "get",
});


--> POST without Authorization
const response = await fetchApi({
    uriPath: "/users/login",
    method: "post",
    data: { email: email, password: password },
});

--> GET with Authorization
const response = await fetchApi({
    uriPath: "/users/bio/1",
    method: "get",
    headers: {
        Authorization: true,
    },
});

--> POST with Authorization
const response = await fetchApi({
    uriPath: "/users/bio/1",
    method: "post",
    data: {
        id: 1,
        playedAt: "2022-12-03T10:15:30+01:00"
    },
    headers: {
        Authorization: true,
    },
});
 */
