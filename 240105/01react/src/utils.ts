export const makeImagePath = (id: string | undefined, format?: string) => {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
};
