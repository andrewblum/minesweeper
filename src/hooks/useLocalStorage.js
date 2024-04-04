import { useCallback, useEffect, useSyncExternalStore } from "react";

const dispatchStorageEvent = (key, newValue) => {
  window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
};

const getItem = (key) => localStorage.getItem(key);

const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  dispatchStorageEvent(key, value);
};

const removeItem = (key) => {
  localStorage.removeItem(key);
  dispatchStorageEvent(key, null);
};

export const clearStorage = () => {
  localStorage.clear();
  dispatchStorageEvent(null, null);
};

const subscribe = (callback) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

export default function useLocalStorage(key, initialValue) {
  const getSnapshot = () => getItem(key);
  const store = useSyncExternalStore(subscribe, getSnapshot);
  const setState = useCallback(
    (arg) => {
      try {
        const nextState =
          typeof arg === "function" ? arg(JSON.parse(store)) : arg;

        if (nextState === undefined || nextState === null) {
          removeItem(key);
        } else {
          setItem(key, nextState);
        }
      } catch (error) {
        console.warn(error);
      }
    },
    [key, store]
  );

  useEffect(() => {
    if (
      getItem(key) === null &&
      initialValue !== null &&
      initialValue !== undefined
    ) {
      setItem(key, initialValue);
    }
  }, [key, initialValue]);

  return [store ? JSON.parse(store) : initialValue, setState];
}
