export const getData = async (value: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?name=${value}`);
  if (!response.ok) return;
  const data = await response.json();
  return data.results;
};
