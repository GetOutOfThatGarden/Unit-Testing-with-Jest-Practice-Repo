# Unit-Testing-with-Jest-Practice-Repo

In this repo I'm practicing how to run unit tests using the Jest library

This was a fun one. I used this explainer by Web Dev Simplified to get started wit unit testing: https://www.youtube.com/watch?v=FgnxcUQ5vho

Jest is the installation that I'll be using to run unit testing here. Jest is a javascript testing framework with a library of tools at it's disposal. On its' website, https://jestjs.io/, it says it works with Babel, React, Node, Vue and more.

I started this project creating a remote repo in Github and cloning it to the project folder on my local computer. I wrote some basic javascript called additon.js to add two numbers together and return it. The purpose of this learning project is to focus on how unit testin works, so I made the js simple.

I installed jest by running 'npm i --save-dev jest' in the console in the project directory. The '--save-dev' flag is used to install jest as a dev-dependency, which is used only for development, not for production. I still need to figure out the difference between the two.

I then went to the scripts section in package.json and added:
"scripts": {
"test": "jest"
},

This allows for the test script to be ran in the terminal.

The addition.js file includes a 'module.exports = sum;' function that will allow for the testing module to access the original 'sum' function.

To create a testing module, you first need to name it after the original module, and prepend the word '.test' before the file extension. So in this case I called it 'addition.test.js'.

The first line on code in additon.test.js requires in the sum function from addition.js.

Secondly we run the test function, which is built into the Jest library.

test(string, function)

The test function has two paramaters. The first is a string which I wrote down the purpose of the original function. This string is used a label when the test is ran in the console. The second parameter is a function that tests the original code.

Within this function we can use some specific tools, which are unique to Jest.

I wrote the code 'expect(sum(1,2)).toBe(3)'.

Which translates to expect the function sum, with the arguments passed to it to be '1' and '2', to result in 3.

Supposedly this 'expect' tool saves a lot of frustration.

Now when I run 'npm run test' in the console. It gives me a passed or failed result. However, It does not provide a lot of detail. To fix this, I needed to go into package.json.

There, I needed to adjust the jest script again, by adding '--coverage'.

"scripts": {
"test": "jest --coverage"
},

This '--coverage' flag makes the console display so much more infomation. I creates a 'coverage' folder in the project directory. Within that folder is a html file that allows you to easily see the test results in the nice clarity of a browser, as opposed to the terminal.

From what I understand, this is what unit testing is. The --coverage flag allows you to test all units of the code, so you can pinpoint where the error is.

Another interesting note is that if you want to test something stored by reference, as opposed to something stored by value, then you need to use '.toEqual(example)' instead.

So if you wanted to see if the values of an array are equal to the values of another array, then you will use this tool.

Thanks for reading this README.

Niall Harrignton
