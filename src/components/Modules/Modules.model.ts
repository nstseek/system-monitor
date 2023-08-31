export const parseModulesInfo = (commandOutput: string) => {
  const lines = commandOutput.replace(/-/g, "").split("\n");

  return lines.filter(Boolean);
};
