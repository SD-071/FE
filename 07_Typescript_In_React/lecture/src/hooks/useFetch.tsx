import { useState, useEffect } from 'react';
import z from 'zod';

const useFetch = <T extends z.ZodType>(url: string, schema: T) => {
  const [data, setData] = useState<z.infer<typeof schema>>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw Error('Failed to fetch');
        }
        const d = await res.json();

        const { data, error, success } = schema.safeParse(d);

        if (!success) {
          throw new Error(z.prettifyError(error));
        }
        setData(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name !== 'AbortError') {
            setError(err.message);
          }
        }
      }
    };
    fetchData();

    return () => controller.abort();
  }, [url, schema]);

  return { data, error, loading };
};

export default useFetch;
