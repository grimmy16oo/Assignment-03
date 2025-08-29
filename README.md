
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 
getElementById: Selects a single element by its ID. Returns the element or null if not found.
getElementsByClassName: Selects all elements with a specific class. Returns a live HTMLCollection.
querySelector: Selects the first element matching a CSS selector. Returns the element or null if not found.
querySelectorAll: Selects all elements matching a CSS selector. Returns a static NodeList.

2. How do you create and insert a new element into the DOM?
document.createElement(tagName) method is used to create a new element.We insert it using methods like appendChild.

3. What is Event Bubbling and how does it work? 
Event Bubbling: When an event occurs on a DOM element, it first triggers on the target element, then bubbles up through its parent elements, all the way to the document root.

4. What is Event Delegation in JavaScript? Why is it useful? 
Event Delegation: Attach a single event listener to a parent element instead of each child element. The event bubbles up, and you check which child triggered it. Why useful? Handles dynamically added elements Reduces memory usage Simplifies code

5. What is the difference between preventDefault() and stopPropagation() methods? 
preventDefault(): Stops the browser's default behavior associated with an event. 
stopPropagation(): Stops the event from bubbling up (or capturing down) the DOM tree.
