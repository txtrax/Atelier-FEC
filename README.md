# Atelier-FEC

## Overview
This is a Front-End-Capstone project created by Theresa Tran, Pan Liu, Peter Phan, and Jennifer Lin during Hack Reactor. Using tools, such as React and Node.js, each member built out key components of the project while showcasing their front-end skills.

## Table of Contents
1. Background
2. Contributor
3. Tech Stack


## Background
With the goal of building a dynamic retail application and consolidate our front-end knowledge, this project was built from scratch. The results is an application that allows users to browse the details of the desired product as well as view provided related products and comparisons, questions that have been previously asked and answered, and the product's ratings and reviews.

## Contributor

### Overview

Contributor: Theresa Tran

[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com.in/caleb-kim0510/)](https://www.linkedin.com/in/theresatee) &emsp; [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/txtrax)

The **Overview** component, created by Theresa Tran, provides pertinent information about the product as well as allows the user to add the product to their cart. 

Key Features include: 

 - a main carousel that displays the main image
 - a thumbnail carousel that contains other images included with the product
 - product information that dynamically rerenders when a different style of the product is selected
 - an add-to-cart section that allows the user to view information that they added to their bag

### Related Products & Outfits

Contributor: Pan Liu

[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com.in/caleb-kim0510/)](https://www.linkedin.com/in/pan-liu-us/) &emsp; [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/pan-liu-us)

The **Related Products & Outfits** component, created by Pan Liu, makes it easy for users to continue shopping, and drive conversions for the company by positioning recommended products based on the current product they are viewing, as well as enabling users to personalize and group their chosen products as an outfit.

Key Features include: 

- a scrollable related products carousel 
  - each card includes information of product category, product name, price/sales price and star rating which will be hidden if the product has no review
  - clicking the card navigates to the detail page for that product 
  - clicking on :star: icon triggers a comparison modal window
- a scrollable outfits carousel 
  - clicking on :heavy_plus_sign: card adds current product to outfit lists, an product can only be added once
  - clicking on :x: icon on each card removes the product from the list
  - the outfit list persist per user even if they exit the website and return later

### Questions & Answers

Contributor: Peter Phan

[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com.in/caleb-kim0510/)](https://www.linkedin.com/in/peter-phan-3a1467173/) &emsp; [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/peterhphan)

The **Questions & Answers** component, created by Peter Phan, allows the users to view the a list of questions asked about the specific product. 

Key Features include:

 - users can search for questions
 - users could add their own questions or answers
 - users are allow to vote for questions/answers helpfulness

### Ratings & Reviews

Contributor: Jennifer Lin

[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com.in/caleb-kim0510/)](https://www.linkedin.com/in/fylin/) &emsp; [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/JennyMipha)

The **Ratings & Reviews** component, created by Jennifer Lin, allows more insight on the satisfaction of previous consumers. 

Features included here gives users the ability to:

 - submit a review
 - view rating breakdown
 - view product characteristics
 - sort reviews by latest, helpfulness, and relevance
 - filter reviews with ratings
 

## Tech Stack

### Dependencies
npm

### Version
ES6

### Linting
Airbnb ESLint

## Front End

### Compilation & Loading & Transpile
Webpack
Babel with Webpack

### Front-End MVC
ReactJS
axios
cors
dotenv
moment
prop-types
react-dom
react-icons
react-is
react-scroll
react-star-ratings
react-stars

### Data Store
Redux

### CSS Framework
Styled-Components

## Server

### MVC
ExpressJS
NodeJS

## Testing Suite
Jest
