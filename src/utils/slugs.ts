export const forceHttps = (url: string) => {
  if (!url?.trim() || url.startsWith('/')) {
    return url;
  }

  try {
    const urlObj = new URL(url.includes('://') ? url : `https://${url}`);
    urlObj.protocol = 'https:';

    return urlObj.toString();
  } catch {
    return url;
  }
};