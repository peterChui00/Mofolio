export const setItem = <T>(key: string, value: T): void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

export const getItem = <T>(key: string): T | undefined => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const removeItem = (key: string): void => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
