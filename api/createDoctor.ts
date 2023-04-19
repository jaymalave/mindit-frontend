import { BASE_URL } from "../config/urls.config";

export const createDoctor = async (paramsObj: any) => {
  const response = await fetch(`${BASE_URL}/doctors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paramsObj),
  });
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data;
};
