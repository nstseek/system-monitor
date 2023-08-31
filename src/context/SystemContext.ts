import { createContext } from "react";

export const SystemContext = createContext<SystemInfoRequest>({
  isLoading: false,
  error: null,
  data: null,
});
