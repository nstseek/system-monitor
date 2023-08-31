import React, { ReactNode, useEffect, useState } from "react";
import { SystemContext } from "./SystemContext";

const pollingInterval = 1000;

export const SystemContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<SystemInfo | null>(null);

  const [shouldFetchData, setShouldFetchData] = useState(true);

  useEffect(() => {
    const fetchFunction = async () => {
      setIsLoading(true);
      setShouldFetchData(false);
      try {
        const data: Omit<SystemInfo, "lastUpdatedAt"> = await fetch(
          process.env.NODE_ENV === "development"
            ? "http://localhost:8000/api/data"
            : "/api/data"
        ).then((request) => request.json());
        setData({ ...data, lastUpdatedAt: new Date() });
      } catch (err) {
        setError(String(err));
      } finally {
        setIsLoading(false);
      }
    };

    if (shouldFetchData) {
      fetchFunction();
    }
  }, [setData, setIsLoading, setError, shouldFetchData, setShouldFetchData]);

  useEffect(() => {
    const scheduleFetch = () => {
      setShouldFetchData(true);
      setTimeout(() => scheduleFetch(), pollingInterval);
    };

    setTimeout(() => scheduleFetch(), pollingInterval);
  }, [setShouldFetchData]);

  return (
    <SystemContext.Provider value={{ isLoading, error, data }}>
      {children}
    </SystemContext.Provider>
  );
};
