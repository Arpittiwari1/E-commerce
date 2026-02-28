import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // IMPORTANT for HTTP-only cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor (production-grade error handling)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Global error handling logic
    if (error.response) {
      // Example: Unauthorized handling
      if (error.response.status === 401) {
        console.warn("Unauthorized access - possibly invalid session");
      }
    }
    return Promise.reject(error);
  }
);

export default api;