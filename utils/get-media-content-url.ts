export const getMediaContentUrl = (path: string) => {
  if (!path) return '';

  return `https://${process.env.NEXT_PUBLIC_MEDIA_DOMAIN}/paintings/${path}`;
};
