import axios from "axios";

const auditApi = axios.create({
  baseURL: "http://localhost:8000"
});

export default auditApi;