Basically I had 2 problems:

1. the class that hides an element using `display: none` must be placed carefully in the right place to not affect the UI.
2. when switching to/from Mobile/Desktop I wanted to Add/Remove Event Listeners accordingly.

As I came up with this solution, the 2 problems are solved! now, I reached the wanted eXperience;

1. to care less about the CSS cascade.
2. to optimize the runtime by removing unwanted Event Listeners.

I think the first problem could be solved using only CSS, but I didn't give it enough thinking time honestly. hehe!
The second one was a real concern, so I'm glad it's resolved.
