const STORAGE_KEY = "best-time";

export const getPersistedHighscore = () => {
  const highscore = localStorage.getItem(STORAGE_KEY);
  if (highscore !== null) {
    return +highscore;
  }

  return null;
};

export const updatePersistedHighscore = (newTime) => {
  const oldBestTime = localStorage.getItem(STORAGE_KEY);

  if (oldBestTime === null || newTime < +oldBestTime) {
    localStorage.setItem(STORAGE_KEY, newTime.toString());
    return newTime;
  }

  return oldBestTime;
};
