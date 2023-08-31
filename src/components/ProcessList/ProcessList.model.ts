export const parseProcessList = (commandOutput: string) => {
  const lines = commandOutput.split("\n");
  return lines.filter(Boolean).filter((val) => !isNaN(Number(val)));
};
