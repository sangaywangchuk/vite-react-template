
export default {
    '*/**/*.{ts,tsx}': (stagedFiles) => [
      'yarn tsc --noEmit',
    //   `yarn eslint ${stagedFiles.join(' --file ')}`,
    //   `prettier --write ${stagedFiles.join(' ')} --ignore-unknown`
    ]
  };