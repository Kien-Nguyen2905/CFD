import { useState } from "react";
export const useMutation = (promise) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const execute = async (...payload) => {
    try {
      setLoading(true);
      const res = await promise(...payload);
      setData(res || []);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    execute,
    data,
    loading,
    error,
  };
};