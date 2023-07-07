---
date: 28 February 2023
author: Nathan Foss
link: https://codesandbox.io/s/autumn-river-8oyrki-forked-fvh7hr
---

### CFHC Junior Software Engineer Coding Interview

![Coding interview](/images/portfolio/junior-interview.png)

#### Overview

At Coding For Hermit Crabs(CFHC), we needed a way to test the coding skills of incoming junior software engineers on their fundamental programming knowledge and React skills. I was tasked with creating our in-house app which we then used to conduct all of our coding interviews. I ended up using React, Semantic-UI/Fomantic-UI, JavaScript, HTML and CSS. Normally, one would create a react app and install all of the required dependencies using an IDE like VSCode. But this project was unique in that our team needed to be able to test an engineer immediately when they joined our zoom meeting by sharing a link instead of having the engineer install a react app, which would take up a significant portion of their limited 60 minute time for the interview. I chose to use an online code sandbox because this allows anyone to edit the live react app project even if they don't have node or an IDE installed on their machine. It also made it easier to make updates to the interview in future iterations because you don't need to worry about deprecated dependencies or windows/mac incompatibility. 

Here were the assignment requirements given to me by Senior Software Engineer KayLa Thomas, the Founder and Director of CFHC:

1.) Given a list of numbers, create a function that returns the first number divisible by 7 that appears.

Test Cases:
- [24, 50, 12, 7, 18, 14, 21, 82]
- [5, 48, 8, 20, 7, 22]
- [78, 3, 8, 33, 32, 90, 63]

2.) Below is a to-do-list app. At the moment, it allows a user to add a list item. Please add a functionality that allows users to check a checkbox next to each to-do item, and cross out the to-do item it is next to to mark it as "complete". Users should also be able yo toggle that to-do item to be complete or incomplete by clicking the checkbox again. 

3.) You're given two lists of n amount of numbers. All of those numbers are the exact same, except the second list has one additional number the other does not. How do you identify the value of that second number? For example:

- [5, 65, 4, 8, 12, 13, 27]

- [5, 65, 4, 8, 13, 27]
