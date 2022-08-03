export const breakCamelCase = (s: string): string => {
  return s.replaceAll(/([A-Z])/g, ' $1');
}

export const normalizeText = (s: string): string => {
  const str = s.toLocaleLowerCase();
  return str.at(0)?.toUpperCase() + str.slice(1);
}

export const beautifyText = (s: string): string => {
  const str = breakCamelCase(s);
  return normalizeText(str);
}