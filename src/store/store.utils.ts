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

  if (storedItem && storedTimestamp) {
    const currentTime = new Date().getTime();
    const storedTime = parseInt(storedTimestamp);

    const aDay = 24 * 60 * 60 * 1000;
    if (currentTime - storedTime < aDay) {
      return JSON.parse(storedItem);
    } else {
      localStorage.removeItem(key);

      const timestapKey = buildTimestampKey(key);
      localStorage.removeItem(timestapKey);
    }
  }

  return null;
};
