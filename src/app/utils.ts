export const formatPrice = (input?: string): string => {
  if (input === null || input === undefined) return "NaN";
  const num = parseFloat(
    [
      input.slice(0, input.length - 18),
      ".",
      input.slice(input.length - 18),
    ].join("")
  );
  return num.toFixed(2) + " WEI";
};
