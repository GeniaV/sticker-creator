const API_URL = "http://localhost:3000";

const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getDataFromExcelTable = async (formData: FormData) => {
  const res = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });
  return checkResponse(res);
};

