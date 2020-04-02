## Accelerated Chemistry Question Generator
A tool to generate practice questions for Accelerated Chemistry at Stevenson High School.

## Contributing
#### Question Types
There are three steps involved in making a new question type.

1. Add an ```<option>``` element inside the ```<select>``` element. Set the ```value``` to the shortform version of the name. This is what will be used to identify the question type.
2. Make a ```class``` for your question type in ```question.js```. It needs to have a ```text``` property which will be displayed as the question. It also needs to have an ```answer``` property for the answer to the question.
3. Add a field to the ```QUESTION_TYPES``` variable. The key should be the ```value``` property from step one, and the value should be the class.

#### Styles
I have no idea what I'm doing when it comes to HTML and CSS, so feel free to add whatever styles or to modify the HTML. Don't change the ```id``` property for anything because that's used in the Javascript for the actual functionality.  
