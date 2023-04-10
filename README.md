# sauceDemo_UI
1. Provide the manual test case(s) covering the flow

# Test Plan

# Overview

This is a test plan for the sauce lab demo test for the Ultra recruitment submission. This test aims at testing the flow for the eCommerce demo application to cover the end-to-end user journey of the application. The test that would be carried out is a Functional e2e test that will check the different features that will interact with this application. These features range from:
Login
Cart management
Sorting
Checkout

These tests will cover possible scenarios that could come up when the user interacts with these features; the possible scenarios that could come up for the various features are listed below:

# Login
Test login with valid credentials that is the correct username and password combination	

Test that the user is unable to log in with the wrong username and password combination 

Test that the user is unable to log in with a valid password but an invalid username combination

Test that the user is unable to log in with an empty username but a valid password field

Test that the user is unable to log in with an empty password but the valid username

# Cart Management
Test that the logged-in user can add items to the cart

Test that the logged-in user can remove items from the cart

Test that the logged-in user can view items in the cart


# Sorting
Test that the logged-in user can sort items based on defined criterias


# Checkout
Test that a user with the item in their cart can check out the item




# CI/CD
Enable the testing of the provided functionality as part of a CI/CD pipeline
Within the test I have structured it in a way that the test is flexible to:

Handle two environment(staging and production) using the baseURL in the config

I created an integration branch which would handle the staging test and main branch will handle production

I created github actions that will run anytime any contributor makes changes to the code, this will help in making sure new code modifications don't affect the successful working of other parts

After the introduction of the environment handling with I choose what functions that will run in what environment





# Instructions
Provide execution instructions and enough information explaining the final solution:

Clone the repository

Run the npm install command that will install the packages in the package.lock file

Run the 'npx cypress run' command to execute the test in command mode

Run the 'npx cypress open' command to initiate and pull up a browser





# Approach and Recommendation
Describe the chosen testing approach and anything you could improve about the technical task
This is a functional end to end test that aims at regressing through features and making sure key functionality work as expected. As for what we could have done to improve the technical task I would suggest that we:

Add more API test

Test with some of the users provided on sauceLab's dummy test page
