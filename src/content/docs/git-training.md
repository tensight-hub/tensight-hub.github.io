---
title: 'Git Training'
description: 'This document provides an overview of essential Git commands for version control. It covers why Git and GitHub are needed, how to install and configure Git, and basic Git commands for repository management.'
pubDate: 'Jun 20 2024'
active: true
---

This document provides an overview of essential Git commands for version control. Git is a distributed version control system that helps developers track changes in their codebase.

## Table of Contents

1. [Why Do We Need Git and GitHub?](#why-do-we-need-git-and-github)
2. [Installing Git](#installing-git)
3. [Configuring Git](#configuring-git)
4. [Basic Git Commands](#basic-git-commands)
   - [Initializing a Repository](#initializing-a-repository)
   - [Cloning a Repository](#cloning-a-repository)
   - [Adding Files](#adding-files)
   - [Committing Changes](#committing-changes)
   - [Creating a Branch](#creating-a-branch)
   - [Checking Out a Branch](#checking-out-a-branch)
   - [Deleting a Branch](#deleting-a-branch)
   - [Pulling Changes](#pulling-changes)
   - [Pushing Changes](#pushing-changes)
   - [Fetching Changes](#fetching-changes)

## Why Do We Need Git and GitHub ?

### 1. Git

Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Here are some reasons why Git is essential:

- **Version Control**: Git tracks the history of changes, allowing developers to revert to previous versions if needed.
- **Collaboration**: Multiple developers can work on the same project simultaneously without overwriting each other’s changes.
- **Branching and Merging**: Git allows for flexible branching and merging, enabling teams to work on features or bug fixes independently and merge them back into the main project seamlessly.
- **Backup and Restore**: Since Git is distributed, every developer has a local copy of the repository, serving as a backup.

### 2. GitHub

GitHub is a web-based platform that uses Git for version control and adds several additional features to facilitate project management and collaboration:

- **Remote Repositories**: GitHub hosts repositories in the cloud, making it easy to share projects and collaborate with others.
- **Pull Requests**: GitHub’s pull request feature allows developers to review code changes before merging them, improving code quality.
- **Issues and Project Management**: GitHub provides tools to track bugs, enhancements, and project tasks, integrating well with the codebase.
- **Community and Open Source**: GitHub hosts millions of open source projects, enabling developers to contribute to and learn from a vast community.


## Installing Git

To install Git, follow the instructions for your operating system:
- **Windows**: Download from [git-scm.com](https://git-scm.com/).
- **MacOS**: Use Homebrew with `brew install git`.
- **Linux**: Use your package manager, e.g., `sudo apt install git` for Debian-based systems.

## Configuring Git

Set your user name and email address. These will be associated with your commits.

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Check current configuration

```bash
git config --global user.name
git config --global user.email
```

## Basic Git Commands

### 1. Initializing a Repository

To create a new Git repository, navigate to your project directory and run:

```bash
git init
```

### 2. Cloning a Repository

Clone an existing repository to your local machine:

```bash
git clone https://github.com/username/repository.git
```

Replace https://github.com/username/repository.git with the repository URL.

### 3. Creating a Branch

```bash
git branch branch-name
```

### 4. Checking Out a Branch

Switch to an existing branch:

```bash
git checkout branch-name
```

> **💡 Code Tip** : You can create and checkout to a branch using a single command
```bash
git checkout -b branch-name
```

### 5. Deleting a Branch

Delete a local branch after it has been merged or is no longer needed:

```bash
git branch -d branch-name
```

Create a new branch to work on a feature or fix:

TODO : Add branch naming convention doc here

### 6. Adding Files

Add files to the staging area. Use . to add all files:

```bash
git add filename       # Add a specific file
git add .              # Add all files in the directory
```

### 7. Committing Changes

Commit the staged changes with a message describing the update:

```bash
git commit -m "Your commit message"
```

### 8. Pulling Changes

Fetch and merge changes from the remote repository:

```bash
git pull origin branch-name
```

### 9. Pushing Changes

Push your commits to a remote repository:

```bash
git push origin branch-name
```
Replace branch-name with your branch’s name.

### 10. Fetching Changes

Fetch changes from the remote repository without merging:

```bash
git fetch origin
```

#### Next Read : 

- [Understanding git workspace - staging - local - remote](/docs/understanding-git-workspace-staging-local-remote.md)