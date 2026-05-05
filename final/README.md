# My Decision Making App

## Project Title
Meal Decision Helper

## Description
This app helps users decide what meal to make or buy based on a few quick inputs. The user enters their budget, how much time they have, and their meal preference. Using those inputs, the app will generate a simple meal suggestion that fits the user’s situation.

## Input Types Used
- Number input for Budget ($) to keep the meal within what the user can afford
- Number input for Time Available (minutes) to choose a meal that fits the user’s schedule
- Radio buttons for Meal Preference (healthy, balanced, or comfort) to match what the user is in the mood for
- Checkbox for “Need it to be quick?” to help prioritize faster meal options

These inputs matter because most meal decisions depend on money, time, and what the user wants to eat.

## Color Palette
A clean dark theme with a bright accent color for buttons and highlights.

#0D1B2A - Main background  
#1B263B - Container and section background  
#E0E1DD - Primary text color  
#4CAF50 - Submit button and highlights  
#F5CB5C - Headings and accent elements

## Features

- Form-based meal decision inputs
- Automatic decision calculation
- Saved decision history
- Edit existing entries
- Delete entries
- Local Storage persistence

## Step 5 Planning

**What new input will you add?**

I will add a checkbox input asking the user if they are trying to eat healthy. This will allow the user to indicate whether health is a priority for the current meal decision.

**How will this change your logic?**

The decision.js logic will read the value of this new checkbox input. If the user selects that they want a healthy option, the decision logic will prioritize healthier choices when generating the result. For example, if the budget and time would normally suggest takeout, the logic may instead recommend cooking at home or choosing a healthier meal option if the healthy checkbox is selected.

## Step 6 Planning: Validation

### 1. Meal Budget
- **Required state:** Yes, this field is required.
- **Boundary rules:** The value must be a number and cannot be less than 0.
- **Error message:** Please enter a meal budget of 0 or more.

### 2. Time Available
- **Required state:** Yes, this field is required.
- **Boundary rules:** The value must be a number and cannot be less than 0.
- **Error message:** Please enter a time available amount of 0 minutes or more.

### 3. Meal Preference
- **Required state:** Yes, the user must select a meal preference.
- **Boundary rules:** The value cannot be blank and must match one of the dropdown options.
- **Error message:** Please select a meal preference.

### 4. Need Quick
- **Required state:** No, this checkbox is optional.
- **Boundary rules:** No boundary rule is needed because it is just true or false.
- **Error message:** No error message needed because this input is optional.

### 5. Trying to Eat Healthy
- **Required state:** No, this checkbox is optional.
- **Boundary rules:** No boundary rule is needed because it is just true or false.
- **Error message:** No error message needed because this input is optional.