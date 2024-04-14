# Tax Calculator
## Description
The Tax Calculator is a web application designed to help individuals estimate their income tax based on their gross annual income, extra income, age group, and applicable deductions. It provides users with a simple interface to input their financial details and receive an estimate of their tax liability.

## Features
* Input fields for gross annual income, extra income, age group, and total applicable deductions.
* Tooltip icons for providing explanations of each input field.
* Input validation to ensure that only numerical values are entered.
* Support for different age groups to calculate tax rates accordingly.
* Modal pop-up displaying the calculated tax result.
![Screenshot 2024-04-12 135610](https://github.com/Srishtysengar/Income-tax-Calculator/assets/109545642/2f866d1f-66fc-4443-a01d-b35d45c1ce48)
  
## Usage

* Open the index.html file in a web browser.
* Fill in the required information:
  1. Gross annual income: Enter your total salary before any deductions.
  2. Extra income: Enter any additional income earned from other sources.
  3. Age group: Select your age group from the dropdown menu.
  4. Total applicable deductions: Enter the total amount deducted from your gross income.
  5. Click the "Submit" button to calculate your tax.

## Test Cases
### Test Case 1: Valid Inputs
* Enter a gross annual income of Rs. 10,50,000.
* Enter extra income of Rs. 1,00,000.
* Select the age group as "Between 40 and 60".
* Enter total applicable deductions of Rs. 5,000.
* Click the "Submit" button.
Expected Result: The tax calculator should display the total income after the tax deduction in a modal pop-up.
![Screenshot 2024-04-12 135948](https://github.com/Srishtysengar/Income-tax-Calculator/assets/109545642/acef4e05-0582-4e12-b789-0ecc2fff0821)


### Test Case 2: Invalid Inputs
#### Case 1
* Enter a gross annual income of Rs. 10,50,000.
* Leave the extra income field blank.
* Select the age group as "Below 40".
* Enter total applicable deductions of $10,000.
* Click the "Submit" button.
* Expected Result: In this condition when any one of the field is left empty the it will show an error as "please fill out this feild" .
![Screenshot 2024-04-12 135735](https://github.com/Srishtysengar/Income-tax-Calculator/assets/109545642/3d4a576f-b93e-4dc4-af65-359975ab9591)

![Screenshot 2024-04-12 135845](https://github.com/Srishtysengar/Income-tax-Calculator/assets/109545642/5f5ad311-1490-4362-9b31-0c6c6edb9161)



#### Case 2
* Enter a gross annual income of "abc" (non-numeric).
*  Enter extra income of Rs. 1,00,000.
* Select the age group as "Below 40".
* Enter total applicable deductions of $10,000.
* Click the "Submit" button.
* Expected Result: In this condition when  any one of the field is non numeric then it will show error in the tooltip.
![Screenshot 2024-04-12 140149](https://github.com/Srishtysengar/Income-tax-Calculator/assets/109545642/7727931a-de94-45b2-817a-d0466cd9882d)

![Screenshot 2024-04-12 140215](https://github.com/Srishtysengar/Income-tax-Calculator/assets/109545642/982f1346-df13-4edc-a143-b2014446a1ac)


## Technologies Used
* HTML
* CSS (Bootstrap)
* JavaScript (jQuery)
  
## Credits
This project was created by Srishty Sengar.

