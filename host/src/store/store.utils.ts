const buildTimestampKey = (key: string) => `${key}_timestamp`;

export const setItemToStorage = <T>(key: string, item: T) => {
  localStorage.setItem(key, JSON.stringify(item));

  const now = new Date().getTime().toString();
  const timestapKey = buildTimestampKey(key);
  localStorage.setItem(timestapKey, now);
};

export const getItemFromStorage = <T>(key: string): T | null => {
  const storedItem = localStorage.getItem(key);
  const storedTimestamp = localStorage.getItem(buildTimestampKey(key));

  if (!storedItem || !storedTimestamp) {
    return null;
  }

  const currentTime = new Date().getTime();
  const timestamp = parseInt(storedTimestamp, 10);
  const aDay = 24 * 60 * 60 * 1000;
  if (timestamp - currentTime < aDay) {
    return JSON.parse(storedItem);
  }

  // Remove the item and its timestamp if older than 24 hours
  localStorage.removeItem(key);
  localStorage.removeItem(buildTimestampKey(key));

  return null;
};
