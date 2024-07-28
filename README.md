# Explore the Universe of TEMPUS
![alt text](/assets/documentation/image.png)

Explore the universe of TEMPUS is a website where people can learn more about the novel THE AGE OF NEW ERA: Edward Teslenstein - TEMPUS - The Gravity Speed Engine. The visitors will be able to explore an interactive map where they can discover key characters, notions and locations of the novel, and then check their knowledge with the quiz. The lucky knowing-all contestant will have a chance to win an e-book or an audiobook code!

The website can be accessed here [Explore the TEMPUS Universe](https://cptvalleyberg84.github.io/universe-of-tempus/)

![alt text](/assets/documentation/image-1.png)

# Intro

**Project Description**

A website dedicated to discovering a science-fiction novel - THE AGE OF NEW ERA. Website will serve as a platform to learn more of what the novel is about. Of course it will merely mindly put me on the track, but according to me - the less you know - the more you will enjoy - so just give it a shot and you might find interest in the whole story. Over the years of trying to market the novel - I found out that it is very difficult for me to talk about it, so I figured this project could be a perfect solution. On one hand it's an innovative approach to book marketing, on the other hand - it's fun and games, and you can WIN a code for a free audiobook or e-book! Isn't that cool?

**Purpose**

The main purpose of this website is to create an engaging website which will possibly raise interest about the novel.

**User Demographic**

The Target Audience:
+ science fiction fans
+ puzzle games lovers
+ book readers
+ individuals looking for inspirational content

# Features

+ **Header**
    + positioned at the top of the page
    + contains the title and the subtitle of the novel
    
    ![alt text](/assets/documentation/image-13.png)

+ **Content Sections**
    + The World of TEMPUS Section
    
    ![alt text](/assets/documentation/image-14.png)

    + Introduction to the webspace
        + Short Instruction
        + Instructions Button
            + After clicking the button dialog box appears with more detailed instructions about the website and a button to "Begin the Adventure!" which will close the dialog box. When this dialog is displayed - it will make the rest of the website a bit darker.
    
      ![alt text](/assets/documentation/image-15.png) 

    + Explore the Interactive Map Section
    
    ![alt text](/assets/documentation/image-16.png)

    + This section contains an image-map with 9 floating points on specific locations of the map.
        + User clicks on chosen floating point:
            + hovering over the floating point will change the dot to light green color
        
    ![alt text](/assets/documentation/image-17.png)

    + clicking on the dot will change the color of the dot to red, and will display information with the book quote about the chosen location and will automatically scroll to the description box - when necessary.
        
    ![alt text](/assets/documentation/image-18.png)
    
    + User clicking on any other place on the map - and not the floating dots will close the description window and show: "click on a location to learn more" box under the map.
    
    ![alt text](/assets/documentation/image-19.png)

    + The Quiz Box
    
    ![alt text](/assets/documentation/image-20.png)

    + Contains text inviting for the Quiz
        + Contains the START QUIZ Button
            + After pressing the button Quiz Starts and the first question appears
                + the quiz box is now filled with new elements, starting at the top:
                    + question of the quiz
                    + Sci-fi vibe image related to the novel to some point
                    + 4 answers to choose from
                    
    ![alt text](/assets/documentation/image-21.png)

    + and a question number of number of all questions - which is 12 = to easy find yourself how far in the quiz are you right now.
        + The answer buttons while hovering with mouse will change mouse to pointer, the border will turn green, and the background color of -on-hovered answer will become a bit darker so the user will see feedback from the webpage that it's ready to be clicked.
                    
    ![alt text](/assets/documentation/image-22.png)

    + after user will made his choice - then it's time to click and the fun begins:
        + if the user will choose the correct answer - the answer will slightly become larger, and filler with green color to mark that it's the correct answer, all the other answers will turn red and become slightly smaller.

        ![alt text](/assets/documentation/image-23.png)

        + but if the user will choose the wrong answer - all answers will light up, but the wrong answer that the user chose will display an additional red outline - so the user can distinct and have it marked where did he click, also the correct answer will be shown with the green background - and slightly enlarged, comparing to now a bit smaller wrong answers.

        ![alt text](/assets/documentation/image-24.png)

        + The button NEXT QUESTION will appear.
        
        ![alt text](/assets/documentation/image-25.png)
        
        + After clicking the NEXT QUESTION button, the quiz box will reset, displaying the next, completely randomly chosen question,
            + the answers will be of standard background
            + the question number in the right down corned will update the question number
            + the NEXT QUESTION will disappear until the user will choose his next answer, where the loop will continue until the last question of the quiz.

            ![alt text](/assets/documentation/image-26.png)

        + The LAST QUESTION - 12 of 12
            
            ![alt text](/assets/documentation/image-27.png)
            
            + the last question is not much different of all the other questions with one exception
                + after the user will make his choice there will be a new button appearing instead of the NEXT QUESTION BUTTON.
                + The button FINISH THE QUIZ will appear.
                
                ![alt text](/assets/documentation/image-28.png)
                
                + After clicking on the FINISH THE QUIZ Button - the SCORE BOARD will appear.
        
        + The SCORE BOARD
            + The cover of the book will display
            + The message QUIZ COMPLETE will show, showing the number of questions the user got Correct
            + additional customized message which will depend on the amount of questions the user got Correct:
                ![alt text](/assets/documentation/image-29.png)
                + There will be 4 different messages:
                    + below 4 questions right a different message
                    + 4 or above questions right a different message
                    + 8 or above questions right a different message
                    + 12 questions right a different message and a chance to win a free audiobook and e-book
            + a RESTART button will appear - so the user can choose to go through the quiz once more.
                + clicking the RESTART button will restart the quiz and show the 1st, randomly chosen question.
                + the fun can start again.
+ **The Footer**
    + Footer displays 3 icons to social media related to the novel, that needs to be used to contact the author if You got the pass after getting all the 12 questions of the quiz right, and you are ready to receive your novel, the footer icons also highlight on hover.
        + the facebook icon and link
        + the youtube icon and link 
        + and the instagram icon and link

        ![alt text](/assets/documentation/image-11.png)

        ![alt text](/assets/documentation/image-12.png)

    + the small copyright 2024 Edward Teslenstain text hiding-like, under the Footer

    ![alt text](/assets/documentation/image-10.png)

+ **Miscellaneous**

    + Additionally, all anchor links are Accessible Rich Internet Applications (ARIA) with aria-labels to enhance accessibility, especially important as my novel is also available in audiobook format.

## Features Left to Implement
At the beginning I thought it would be fun to also have the progress reader function, but it felt over-scoped and I think I should implement it in the later stages of publishing this website.
I also thought it would be good to connect it with more information about where users can get the novel, but also - it is just a fun game page, so that's not the place for it - but maybe later.
Make the green dot hover - to stay green until the user will click the next dot. (on mobile it works, on desktop not.)

# Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) used as the foundation of the site.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/css) used to add the styles and layout of the site.
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) used to arrange items symmetrically on the pages.
- [Balsamiq](https://balsamiq.com/) used to make wireframe prototypes for the website.
- [GitHub](https://github.com/) used to host the code of the website and deploy the website.
- [GitPod](https://www.gitpod.io/) used to write the code.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) used as foundation of interactive sections
- [tinify](https://tinypng.com/) used for resizing the images on the website
- [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) used for editing bing created images
- [Bing Image Creator](https://www.bing.com/images/create#) used for creating the images for map and quiz
- [PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) used to create and edit the picture with the Stanczyk in Space representing the main character of the novel

# Design

## **Color Palette**
+ I used very subtle coloring making it easy to identify the parts of the website.
    + The Header and the Footer of the site is in the same dark color with light colored text and icons
    + for the background I have used the logo from the book cover with edited out author name and the title of the book, which together builds a great background texture.
    + the sections have slightly transparent white background with nice framing around the sections.

## **Typography**
+ For the text font I used the same font as users will be able to find inside the novel paper book or e-book version to keep them familiarized with the style
    + Font is Libre Caslon Text, Serif

## **Design Inspiration**
+ The design of the site meets the needs of the functionality of the website. It's supposed to be easy to understand what is on the website, easy to find and clear for visibility. The website has a header and a footer, and the main section is built of 2 correspondent interactive javascript elements.

# Manual Testing

+ **QA**
    + Manual testing has been conducted to ensure the website functions as intended across different browsers and devices. Key aspects tested included:
        - footer links
        - interactive parts functionality
        - responsiveness 
        - and layout integrity

    - website was sent to members of family and friends and tested in different browsers, phones and computers.

+ **Compatibility**
    + To confirm functionality in different environments, the website was tested on:
        - Desktop
            - Firefox 
            - Ms Edge Browser
            - Opera Developer
        - Mobile Android
            - Chrome
            - Edge
            - Firefox
        - Iphone iOS
            - Safari
    + No issues reported with the deployed website during the testing.

+ Sample compatibility pictures:
    - [Edge](/assets/documentation/image-7.png)
    - [Opera](/assets/documentation/image-8.png)
    - [Firefox](/assets/documentation/image-9.png)

+ The website responsiveness was also checked with [Am I Responsive?](https://ui.dev/amiresponsive).

    Below, a sample gif showcasing responsiveness of 4 different screens and website features.
    
    ![Am I Responsive?](/assets/documentation/am-i-responsive.gif)

+ **Validator Testing**

    - No errors were returned when passing through the official [W3C HTML Validator](https://validator.w3.org/) 

    [HTML Validation screenshot](/assets/documentation/image-6.png)

    - No errors were returned when passing through the official [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) 

    [CSS Validation screenshot](/assets/documentation/image-5.png)

+ **JSHINT**

    - No errors were returned when passing through the official []()

    ![JSHINT Validation screenshot](/assets/documentation/image-4.png)

+ **Google Pagespeed Insights report**

    - According to Google PageSpeed Insights report on the index page is of excellent performance and is perfectly accessible and readable with great SEO.

        - Home Page Insights:

            - [PageSpeed Insights Home Page Desktop](/assets/documentation/image-2.png)

            - [PageSpeed Insights Home Page Mobile](/assets/documentation/image-3.png)

+ **Bugs**
    + No significant bugs have been identified. Minor adjustments were made to improve performance and user experience. 

## Issues:

### Map Section: 
Floating points were all over the place for most part of project building. The Map was not responsive due to overflow, width control, and relative positioning issues within the container of the dots.

The green dot on hover for some reason stays green until you will choose the next dot, but only on small screens, not the big screens. When I change the inspector to emulation of mobiles - regarding the size it stays green - but when I click the PC emulation it disappears -  it also works like this on a few phones - it remains a mystery why it happens this way. I liked that the green dot stayed on the screen until the next click on location happens. Hence I rather play on the phone now. I put this in features to implement later.

### Quiz Section: 
Multiple issues with logic and button visibility problems. Complex JavaScript made it difficult to understand how to put everything together. Buttons were hidden when they should not be, or were non-functional due to CSS issues. I systematically debugged the code by checking each variable and logic flow. I tried to ensure that all necessary elements were visible and functional by addressing sometimes i.e., too many times just the display:none setting I've put into code. The solution involved reviewing the code from top to bottom and following each variable's usage to identify the errors.

I also had problems with consistent quiz question height. The problem was that the height for each question was resetting and the screen seemed to jump up and down when it was happening. To deal with this I attempted to use a placeholder image and various JS solutions to maintain consistent height mainly by controlling the display with scroll to the view option. It took a while to understand what works best for applying to scroll to what. It was what it was.

The restart button story. The restart button functionality initially was set to reload on location. But it seemed a good exercise to try and make it work without reloading the page. It was possibly the most difficult thing I had to do. I tried many different solutions and nothing worked. The button was not appearing, or clicking didn't do anything and was throwing errors in the console. For debugging I went to the tutors, and they somehow taught me how to deal with such things. The issue was one line that was emptying the whole HTML code about the quiz. When I was pointed to this, I finally, but slowly figured out what to do. First I tried to recreate the HTML but it only created more complications. Finally I understood that I needed to add a button and hide it, and then it was necessary for each instance of the quiz to remove it at a certain point. I am pretty happy I managed to solve it and am very thankful to tutors that didn't just tell me what to do. Thanks! (also included in the special thanks section).

The responsive quiz section story. Building responsive design, especially with the menu met with few difficulties, but all were solved after applying a media query in the Javascript. At the beginning I was using the wrong approach, and the code was not live in changes, only when it started it was starting in a good way, while stretching the window didn't seem to have any function. Finally I found out how to build a responsive function which handled it pretty well, but then the issue was which lines to put where to make it work properly. In the end it was best to make it a part of the Start Quiz function.

# Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - [Explore the Universe of TEMPUS](https://cptvalleyberg84.github.io/universe-of-tempus/)

# Credits:

## Tempus Interactive Map Section:

1. [Make a SVG world map to tell the time of every country | html, css & javascript](https://www.youtube.com/watch?v=WtoyIiOp5Aw)

1. [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

2. [Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#using_this_for_object_references)

3. [CSS Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

4. [Javascript Document: createElement() method](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

5. [Element: classList property (to link javascript with CSS)](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

6. [Event: target property](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)

7. [Element: click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)

8. [Element: innerHTML property](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
### Pulsing dot from the Map:

1. [pulsating dot: Vincent Ramos](https://codepen.io/vram1980/pen/oNvWdO)

2. [Blinking dots: a quick intro to CSS animation](https://dev.to/ekafyi/blinking-dots-a-quick-look-at-css-animation-31gf)

3. [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)

4. [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

### Images:
1. [Tempus Map Image was generated with bing image creator](https://www.bing.com/images/create#)

2. [Image was edited with Samsung 21 Photo Editor](https://galaxystore.samsung.com/prepost/000005441272?appId=com.sec.android.mimage.photoretouching)

## The QUIZ Section:

1. [Build A Quiz App With JavaScript](https://www.youtube.com/watch?v=riDzcEQbX6k)

2. [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

3. [miro board](https://miro.com)

4. [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

5. [Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

6. [Element: scrollIntoView() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

7. [Learn CSS position in 5 minutes](https://www.youtube.com/watch?v=Pp7UXS3P6jY)

8. [dialog = the easiest way to make a popup modal](https://www.youtube.com/watch?v=TAB_v6yBXIE)

9. [How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners Tutorial](https://www.youtube.com/watch?v=f4fB9Xg2JEY)

10. [Build A Quiz App With JavaScript | Quiz Website using HTML CSS & JavaScript](https://www.youtube.com/watch?v=LJ4PZ8JnRCg)

11. [How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript](https://www.youtube.com/watch?v=PBcqGxrr9g8)

12. [Window: resize event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event)

13. [How to move a text in HTML ?(marquee)](https://www.geeksforgeeks.org/create-the-marquee-text-effect-using-javascript/)

### Images:
1. [Quiz Images were generated with bing image creator](https://www.bing.com/images/create#)

2. [Images were edited with Adobe Photoshop 2024](https://www.adobe.com/products/photoshop.html)

3. [Some images also where created with PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint)

### Miscellaneous:

1. [Real Favicon Generator](https://realfavicongenerator.net/)

16. [Am I Responsive?](https://ui.dev/amiresponsive)

17. [gifcap](https://gifcap.dev/)

18. [PageSpeed Insights](https://pagespeed.web.dev/)


# Special Thanks

Thank you to the Code Institute Javascript Essentials course - it was greatly full of theory. Practice comes hard! Javascript is not easy to begin with.

Would love to say thank you to the CI Tutor team for the help with confusion about the RESTART Button, their guidance finally led me to a solution after I struggled for about 2 days.

Big **THANK YOU** to my amazing Mentor Juliia_Konn for guidance and additional tips and tricks!

###### End of Project