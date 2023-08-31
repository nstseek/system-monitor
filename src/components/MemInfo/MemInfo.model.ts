export const parseMemInfo = (commandOutput: string) => {
  const lines = commandOutput.replace(/\t/g, "").split("\n");
  console.log(lines);
  return lines.filter(Boolean).map((line) => line.split(": "));
};
