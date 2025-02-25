export default {
    '**/*.{ts,tsx}': (stagedFiles) => [
      'tsc --noEmit',
      `eslint ${stagedFiles.join(' --file ')}`,
    //   `prettier --write ${stagedFiles.join(' ')} --ignore-unknown`
    ]
  };