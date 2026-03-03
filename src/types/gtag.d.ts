interface Window {
  gtag: (
    command: string,
    ...args: (string | Record<string, string | number | undefined>)[]
  ) => void;
}
