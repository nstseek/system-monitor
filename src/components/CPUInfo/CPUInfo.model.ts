export const parseCpuInfo = (commandOutput: string) => {
  const lines = commandOutput.replace(/\t/g, "").split("\n");

  return lines.filter(Boolean).map((line) => line.split(": "));
};
