"use client";

import { getCities } from "@/lib/endpoints";
import { useEffect, useState } from "react";

export function useCities() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCities = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getCities({
          body: JSON.stringify({ country: "United Kingdom" }),
        });

        if (isMounted) {
          setCities(result.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setError(
            err instanceof Error
              ? err.message
              : "An unknown error occurred while loading the cities.",
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCities();

    return () => {
      isMounted = false;
    };
  }, []);

  return { cities, loading, error };
}
