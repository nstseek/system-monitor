type DefaultHttpRequest<T> = {
  isLoading: boolean;
  error: string | null;
  data: T | null;
};

type SystemInfo = {
  cpuinfo: string;
  meminfo: string;
  date: string;
  uptime: string;
  version: string;
  loadavg: string;
  lsproc: string;
  modules: string;
};

type SystemInfoRequest = DefaultHttpRequest<SystemInfo>;
