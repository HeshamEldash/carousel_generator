let api;

if (import.meta.env.apiEndpointEnv) {
  api = import.meta.env.VITE_API_URL;
} else {
  api = "http://127.0.0.1:5000/";
}

export default api;