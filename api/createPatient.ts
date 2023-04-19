import { BASE_URL } from "../config/urls.config";

export const createPatient = async (paramsObj: any) => {
  const response = await fetch(`${BASE_URL}/patients`, {
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
