import API_ENDPOINT from "./api";

export async function getSpacesServices() {
  const response = await API_ENDPOINT.get("/data.json");
  return response.data;
}