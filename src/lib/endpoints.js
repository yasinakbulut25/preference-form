import { apiFetch } from "./apiFetch";

export const getCities = (params) =>
  apiFetch("https://countriesnow.space/api/v0.1/countries/cities", {
    method: "POST",
    ...params,
  });
