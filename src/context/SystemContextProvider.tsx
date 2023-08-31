import React, { ReactNode, useEffect, useState } from "react";
import { SystemContext } from "./SystemContext";

export const SystemContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<SystemInfo | null>(null);

  useEffect(() => {
    (async () => {
      if (!isLoading && !error && !data) {
        setIsLoading(true);
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
      }
    })();
  }, [isLoading, error, data, setIsLoading, setError, setData]);

  return (
    <SystemContext.Provider value={{ isLoading, error, data }}>
      {children}
    </SystemContext.Provider>
  );
};
