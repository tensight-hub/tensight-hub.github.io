---
title: 'GitHub Workflow Documentation'
description: "This document outlines our team's GitHub workflow for managing code contributions, reviewing changes, and deploying updates for our Shopify theme."
pubDate: 'Jun 21 2024'
active: true
---

This document outlines our team's GitHub workflow for managing code contributions, reviewing changes, and deploying updates for our Shopify theme. This workflow ensures that all code changes are properly reviewed on a dedicated branch (`merge branch`) before being merged into `main`, which is connected to the live Shopify theme.

## Workflow Steps

</br>

### 1. Repository Setup

- **Create Repository**: Start by creating a new repository on GitHub if the repository does not exists.
- **Clone Repository**: Clone the repository locally to your development environment.

Refer: [GitHub Repo Naming Convention](/docs/github-repo-naming-convention) on how to name your repo.

### 2. Branching Strategy

- **Main Branch**: The `main` branch is connected to the live Shopify theme. No direct changes are made to `main`.
- **Feature Branches**: Developers create feature branches off `main` for new features or bug fixes. Naming convention: `feature-date-dev-new-feature-name`.
- **Merge Branch**: Developers refer to the branch as `merge branch` following the branch naming convention guidelines.

Refer the [Branch Naming Convention Doc](/docs/git-branch-naming-convention) on how to name your branch.

### 3. Development Process

- **Create Feature Branch**: From `main`, create a new branch named `feature-date-dev-new-feature-name`.
- **Work on Feature**: Implement new features or fixes in the feature branch.
- **Commit Changes**: Commit changes with clear and descriptive messages.
- **Push Changes**: Push feature branches to GitHub regularly.

### 4. Pull Requests (PRs)

- **Create Merge Branch**: When ready to create a PR, create a new branch from `main` named according to the branch naming convention guidelines.
- **Create PR to Merge Branch**: Create a pull request from the feature branch to the `merge branch`.
- **Review PR**: Team members review the code, provide feedback, and approve the PR.
- **Merge to Merge Branch**: Once approved, merge changes into `merge branch`.

### 5. Testing on Merge Branch

- **Deploy to Staging**: Test changes on the `merge branch` to ensure everything works as expected in a staging environment.

### 6. Final PR to Main

- **Create PR to Main**: After testing on `merge branch`, create a new pull request from `merge branch` to `main`.
- **Merge to Main**: Merge the PR into `main`.

### 7. Code Reviews

<!-- - **Review Guidelines**: Follow our code review guidelines for constructive feedback. -->
- **Code Quality**: Ensure code quality, readability, and adherence to coding standards.

## Best Practices

- **Branch Hygiene**: Clean up feature branches after merging to maintain a clean repository.
- **Communication**: Keep the team informed of significant changes and deployments.

## Conclusion

This GitHub workflow ensures that our Shopify theme development is systematic, transparent, and reliable. By following these steps and adhering to branch naming conventions, we maintain code quality, minimize errors, and ensure smooth deployments to our live Shopify store.