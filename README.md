# Ping-Pong

#### By **Andrew Devlin**

## Description

This  site will take in a number, and output a list of numbers in which numbers divisible by 3, 5, or 15 are replaced with ping, pong and ping-pong.

## Setup/Installation Requirements

* Clone this repository and open index.html up in your browser.
* [Click here to see the site.](https://AndrewDevlin.github.io/Ping-Pong).

##Specifications:

* The input only takes in numbers.

* If any number < 1 is enter an alert will pop up asking for a number > 0.

* Numbers divisible by 3 are replaced with "ping".
 * Input: 9
 * Output: 1, 2, ping, 4, 5, ping, 7, 8, ping

* Numbers divisible by 5 are replaced with "pong".
 * Input: 10
 * Output: 1, 2, 3, 4, pong, 6, 7, 8, 9, pong

* Numbers divisible by 15 are replaced with "ping-pong".
* Input: 15
* Output: 1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, ping-pong

##Process:

1. Create an empty string.
2. Create a loop that adds numbers to the string up to and including the user input number.
3. Check to see if the numbers are multiples of 3, 5, or 15. If they are add ping, pong, or ping-pong to the string instead.
4. Split the string.
5. Create a loop that makes each new string a list item in an unordered list.
6. Remove the previous result before printing the new one.

## Known Bugs

No known bugs

## Support and contact details

Contact Andrew

## Technologies Used

* HTML5
* CSS
* JavaScript
* jQuery
* Bootstrap
* Git
* GitHub

### License

*I am not offering any license on this project*
