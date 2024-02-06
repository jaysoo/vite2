async function main() {
  const { resolveConfig } = await import('vite');
  console.log('>>> resolveConfig', resolveConfig);
}

await main();
