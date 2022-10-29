export const isValidSHA1 = (hash: string): boolean => {
  return !!String(hash).match('^[a-fA-F0-9]{40}$')
}
