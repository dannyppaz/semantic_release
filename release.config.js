module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer", // analyzes your commit messages to determine the next semantic version.
    "@semantic-release/release-notes-generator", // generates release notes based on the commit messages since the last release.
    "@semantic-release/changelog", // creates and updates a CHANGELOG.md file based on the release notes generated.
    [
      "@semantic-release/npm",
      {
        tarballDir: "release",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: "release/*.tgz",
      },
    ],
    "@semantic-release/git",
  ],
  preset: "angular",
};
