Theme: Business Class
autoscale: true
text: Roboto, #006cab
text-strong: Roboto Bold, #006dae
text-emphasis: Roboto Light Italic
header: Roboto, #006CAB
header-strong: Roboto Strong,#005DAE
header-emphasis: Reklame Script, #53585F  
code: Fira Code Medium, #EE783F, #8B3D90, #2E59A2, #DF393F, #1EA8D9
background-color: #FFFFFF  
table-separator-color: #DDDEE0
footer: **#Hackamon2018** [MONASH.EDU/STUDENTS/HACKAMON](https://monash.edu/students/hackamon) **|** 14th APRIL 2018 | Copyright Ⓒ Eric Jiang 2018
slidenumbers: false

# Getting Started at Hackathons

## Track 1: Gitting Started

![original](assets/background.png)

---

# Hi, I'm **Eric Jiang** 👋 <br/><br/>

* Currently, the Project Lead for [monPlan](monplan.apps.monash.edu)
* Co-founded GeckoDM and MARIE.js
* Co-founded and Pitched FutureYou to Marketing
* ![](assets/twitter.png) [@lorderikir](https://twitter.com/lorderikir)
* ![](assets/website.png) https://lorderikir.me
* ![](assets/email.png) eric.jiang@monash.edu
* github.com/lorderikir

  ![original](assets/background.png)

---

So, I love coding 👨‍💻 and I love working in teams 👪

_But what if there was a way that I good remember how the code look liked throughout its stage, for example if something went wrong and I want to go back to a previous version?_

![original](assets/background.png)

---

# First of all, what is git?

![inline](https://i.redd.it/05b6u19pseoz.png)

![original](assets/background.png)

---

# Git

> Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people
> -- Git SCM Website

![original](assets/background.png)

---

# How Git Works

![inline](https://tudip.com/wp-content/uploads/2017/12/GitWorkflow.png)

![original](assets/background.png)

---

# Some Basic Commands

| Command      | Description                            |
| ------------ | -------------------------------------- |
| `git clone`  | Clones a repository locally            |
| `git add`    | Stages changes to file(s) for a commit |
| `git commit` | Creates a commit (set of changes)      |
| `git push`   | Push changes to the hosted repo        |

![original](assets/background.png)

---

# Using Git within teams

Well, working with teams 👪 may be hard. There are generally two ways you can work off a repository.

* Using Branches
* Using Forks

## ![original](assets/background.png)

---

# Option 1: Use Branches 🌳 for Versioning Control

1.  Make a branch with the feature name or your own username
2.  Every time you commit and push up
3.  Make a Pull Request
4.  Merge the pull request

One of the best workflows is known as _GitFlow_

![original](assets/background.png)

---

# GitFlow - Used with monPlan Git Workflow

![inline](https://i.imgur.com/c5L8RFE.png)

* **master**: branch is the key branch, everytime for release
* **develop**: _unstable_, most of the PRs should go here
* **'feature/\*'**, **'fix/\***, etc.: are 'for purpose' branches, these branches are for development
* **deploy** (not shown), is for **manual** deployments to prod

_This slide has been adapted from my [CI-CD talk](https://github.com/lorderikir/cicd-techtalk)_

![original](assets/background.png)

---

# So we know that development is done incrementally

![original](assets/background.png)

---

# Imagine we using Git within our practices

And one of my team mates, Nicholas has found a bug within one of our buttons.

![original](assets/background.png)

---

# So, he creates a new branch to fix the bug

```shell
# we create a new branch
git branch fix/contact-button
# we make the new branch the new working branch
git checkout fix/contact-button
```

![inline](https://i.imgur.com/mi3zwm9.png)

![original](assets/background.png)

---

# He fixes the code and stages the change in commits

![inline](https://i.imgur.com/bhhrRZv.png)

```
git add .
git commit -m "new commit"
git push
```

![original](assets/background.png)

---

# He then makes a PR into my develop or master branch

![inline](https://i.imgur.com/gJXFPgQ.png)

![original](assets/background.png)

---

# We then Review and Discuss the Changes and Merge the Changes

![inline](https://i.imgur.com/gkdnQuT.png)

![original](assets/background.png)

---

![inline](https://i.imgur.com/hGVCsFv.png)

![original](assets/background.png)

---

# This would also work for...

* Upgrades to the codebase
* Refactoring our legacy code
* Upgrading frameworks to newer versions

_Unfortunately we won't go into fixing merge conflicts in this talk_

![original](assets/background.png)

---

# Why is using GitFlow important?

* We seperate production code and our 'work-in-progress' (WIP) code.
* We have a clearer understanding of what each developer is working on
* We can branch off WIP branches and merge changes in
* Relatively easier (not always) to fix merge conflicts
* Some CI/CD tools only run off branches (not PRs)
* We can set our CI/CD to deployment so that it can deploy off branches (i.e. `develop` to _dev_, `master` to _staging_ or _qat_ and `deploy` to _prod_)

![original](assets/background.png)

---

# Option 2: Using Forks 🍴 for Versioning Control

The best way to image a fork, is image a copy of the main repository that you own that you can _pull_, _merge_ and apply changes to.

(We won't go into much detail here.)

![original](assets/background.png)

---

# Questions? <br/><br/> 🤔 🎤 📣

![original](assets/background.png)

---

# Goodbye 👋<br/><br/> Track 2: Firebase + ReactJS for Hacks coming soon

![original](assets/background.png)
