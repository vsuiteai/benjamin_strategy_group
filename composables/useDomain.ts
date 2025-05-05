// composables/useDomain.ts
export const useDomain = () => {
  const url = useRequestURL();
  return `${url.protocol}//${url.host}`;
};
