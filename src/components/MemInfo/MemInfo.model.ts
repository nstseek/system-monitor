export const parseMemInfo = (commandOutput: string) => {
  const lines = commandOutput.replace(/\t/g, "").split("\n");

  return lines.filter(Boolean).map((line) => line.split(": "));
};
