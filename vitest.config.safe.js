import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    reporters: ['basic'],
    // Minimal configuration to avoid any potential issues
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true
      }
    },
    fileParallelism: false,
    isolate: true,
    coverage: {
      enabled: false
    },
    // Don't write junit for the safe test to avoid any file I/O issues
    outputFile: undefined
  }
});