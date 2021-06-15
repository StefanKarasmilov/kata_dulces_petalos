import React from "react";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://dulces-petalos.herokuapp.com/api"
})

export default apiClient;
