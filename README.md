# phorest-techtest-Stacy-Wandrey
Hello and welcome to my tech test for the Phorest Software Engineer Graduate Programme! Woo hoo! Thanks so much for giving me the opportunity to undergo this tech test, I truly found it enjoyable. I learned a lot and tried new things. 

To begin this project, I decided to first plan my initial ideas for the tech stack. I knew several things from reading the project instructions: one being that I would need to access the API and return a json file that could be filtered to the specifications entered by the user. I was initially drawn to this tech stack:  
-Flask 
-JavaScript 
-HTML
-Bootstrap
-CSS 
-Jasmine (for testing) 

## I started too complicated 
My initial gut instinct was that I needed to create a flask back-end to make calls to the API and Post the voucher requests back to the API. Therefore, I started by making a flask application! After several failed attempts of connecting to the API and then struggling to return it to the JavaScript front end side of the application, I decided there had to be a better way and looked into if JavaScript had a way of connecting to an API. So, I took the time to learn how to make an ajax request and then how to use basic authorisation with the request. Ajax was also great because it is a much simpler way of directly returning the json object to the JavaScript file, so it was easier to manipulate. I also realized I didn’t need to set up my own backend with flask at all. But it was the basis for my main view, so I kept it. 

Why you made certain decisions over others, what did you take the time to learn? 

## Automated tests
 
In order to set up tests, I had to do some research on the best way to handle testing my particular tech stack. Since the API request are done only with JavaScript, I started looking for the best way to test vanilla JavaScript. There are several well-known testing frameworks that go along with testing JavaScript like Mocha, Chai, Jasmine and Ava. After reading through the benefits and disadvantages of each, I decided to go with Jasmine as the testing framework, since it sounded very complete and easy to set up. My goal was to test the ajax connections and their responses. I did write a basic test in Jasmine – something I have never done before – but my test of the searchClient() function failed. If I had more time I would figure out why it failed and how to optimise my tests! 

## Nice UI
The colours of my web app are taken directly from Phorest’s website so that the web app I made would be cohesive with Phorest's image. I wanted the application to seamlessly be added into the website, so I tried my best to quickly create something “on brand”.  I believe I have achieved this, although if I had more time I would have better handled the voucher creation card. I think it looks a little clunky as it is, and there are definitely many different ways to make it more responsive to the user.  

#### responsive for mobile 
I also wanted to make my application responsive for mobile environments. So, you can adjust the browser and still be able to enjoy the functionality of the application at any screen size. I decided to do this based on a bad experience I had with an online booking that I made on my phone. The inputs were so tiny and the font was hard to read! I wanted to implement this change and hope it is seen in my scrolling design.  

### Clean code
I mean just look at it! I have commented explanations for functions and code blocks and practiced good spacing for tired eyes. 

### Deploy code 
You should see the app deployed here: 

## Problems
The curl request that I coped from the Phorest API was missing a character in the BranchID. This means every time I tried to do a post request it would fail. After some quick debugging and going over the request VERY CAREFULLY, I noticed the missing w!  
The dates for creating the voucher needed to be put into a special format to be readable by the API. This took longer than I would like to admit because modifying dates is a little tricky, but I found my solution on W3Schools and that helped a lot! 

I also wanted to do something clever where when the voucher was created it would display the clients name and ID on it as well. However it would only return the last client that had been returned in the for loop of the searchClient() function. If I had more time I would work out this bug because I believe it's important that the vouchers are ultra-personalized, which makes them harder to duplicate. 

I would also improve upon the UI because I believe the way it handles the voucher creation is a little messy. Maybe it would even be good to email it directly to the client if they have an email listed! 

# A place to grow and improve the lives of others
As my background experience suggests, I like people and I like helping others. I love that computer science gives me the tools to help others in a direct way, and with Phorest that impact would be on a global scale.  

Thank you all again for the opportunity to interview and create this tech test! I hope it shows you what I am capable of and my passion for software engineering. I am happy to answer any questions about my project and I hope you find that it meets your expectations. 

Working at Phorest would be more than just a job, I am looking for a place to thrive and grow. I believe the graduate programme will help me to become the best I can be! :)
