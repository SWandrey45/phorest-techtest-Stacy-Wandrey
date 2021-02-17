# phorest-techtest-Stacy-Wandrey
My tech test for the phorest grad programme! Woo hoo!

To begin this project, I decided to first plan my initial ideas for the tech stack. I knew several things from reading the project instructions: one being that I would need to access the API and return a json file that could be filtered to the specifications entered by the user. This I 
# Tech-Stack 
-Flask 
-JavaScript 
-HTML
-CSS 
-Jasmine 
I needed to pick out: 
a web framework - would I use django or flask? I have experience with using both but which would be appropriate with this project? 
a language to type in - what would I use to make the HTML/CSS Dynamic? Javascript? React? why? 
I need to use bootstrap, it's an easy way to make the application look professional quickly! 
what would my mock ups look like? Should I optimise my style for mobile use? YES!! most people use their phones anyways and I have used my own phone for booking salon appointments and I hated their UI because it was not meant for mobile use, styling for multiple screens was something i want to maintian. 
a colour pallet - since this web app would be representing phorest, I decided to use the main colours of purple and white. then this application could seamlessly be added into the software :) 
## We started too complicated :
My initial gut instinct was that I needed to create a flask back-end to make calls to the API and Post the voucher requests back to the API. therefore I started by making a flask application! After several failed attempts of connecting to the API and then struggling to return it to the JavaScript front end side of the application 

Why you made certain decisions over others, what did you take the time to learn? 

# Automated tests
 
In order to set up tests, I had to do some research on the best way to handle testing my particular tech stack. As it stands I did not use a backend to connect to the API, so the application is made with two ajax called within two JavaScript functions.  so I started looking for the best way to handle the testing of my functions. There are several well known testing frameworks that go along with testing JavaScript like Mocha, Chai, Jasmine and Ava. 

After reading through the benefits and non-benefits of each, I decided to go with Jasmine as the testing framework, 
# Nice UI
I stole the colours directly from the Phorest website so that the web app I made would be cohesive and on-brand with Phorest's image. 
### responsive for mobile 
based on a bad expeirience so I wanted to implement this change 
# Clean code
I mean just look at it! 
# Deploy code / give instructions on how to set up environments
You should see the app deployed here: 


## Problems
curl request was bogus. 
Sending user input (which can contain unknown characters), POST is more robust and secure than GET.
the dates needed to be put into a special format. This took longer than I would like to admit because modifying dates is a little tricky, 

I wanted to do something clever where when the voucher was created it would display the clients name and ID on it as well. However it would only return the last client that had been returned in the for loop of the searchClient() function. If I had more time I would work out this bug because I believe it's important that the vouchers are ultra personalized, which makes them harder to duplicate by other people. I would also improve upon the UI because I believe the way it handles the voucher creation is a little messy, and perhaps a neater way to display the data is possible. Maybe it would even be good to email it directly to the client if they have an email listed! 

## A place to grow and improve the lives of others
As my background experience suggests, I like people and I like helping others. I love that computer science gives me the tools to help others in a direct way, and hold the power of making the world a better place, even with small changes. 
Thank you very much for the opportunity to inteview and create this tech test! I hope it shows you what I am capable of and my passion for software engineering. I am happy to answer any questions about my project and I hope you find that it meets your expectations! 

Working at Phorest would be more than just a job, I am looking for a place to thrive and I believe the graduate programme will help me to become the best I can be! :) 
