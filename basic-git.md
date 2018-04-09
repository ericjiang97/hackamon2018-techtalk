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

* Currently, the Project Lead for monPlan - [monplan.apps.monash.edu](monplan.apps.monash.edu)
* Co-founded FutureYou, GeckoDM and MARIE.js
* ![](assets/twitter.png) [@lorderikir](https://twitter.com/lorderikir)
* ![](assets/website.png) https://lorderikir.me
* ![](assets/email.png) eric.jiang@monash.edu
* github.com/lorderikir

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

# Advanced Git

Well, working with teams 👪 may be hard. There is generally two ways you can work off a branch.

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

# Option 2: Using Forks 🍴 for Versioning Control

The best way to image a fork, is image a copy of the main repository that you own that you can _pull_, _merge_ and apply changes to.

![original](assets/background.png)
