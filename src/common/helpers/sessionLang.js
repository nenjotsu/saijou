export const saveLangToSessionStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('lang', serializedState);
  } catch (err) {
    return err;
  }
  return undefined;
};

export const loadLangFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem('lang');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
