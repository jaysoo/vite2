export async function waitRandom(
  lowerBound: number,
  upperBound: number
): Promise<void> {
  const range = upperBound - lowerBound;
  const delta = Math.random() * range;

  return new Promise((res) => {
    setTimeout(() => res(), delta);
  });
}
