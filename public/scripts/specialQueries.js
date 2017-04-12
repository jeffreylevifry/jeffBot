function specialQueries(messageIn) {
    
    var message = messageIn.toLowerCase();

    switch (message) {
        case "turtle":
        case "turtles":

            return ["", "images/turtles_behance_header.png"];


        case "a":
            return["yes the letter A, great.", undefined]
        case "1":

            return ["", "images/test1.png"];
            
        case "test":

            return ["", "images/test2.png"];

        case "fuck":

            return ["", "images/test3.png"];
            
        
        case "main menu":

            return ["I can tell you all about Jeff Fry. What would you like to know more about? (Design or Development)", ""];
            
            
/////////////////////////////////////////////////
///////////////DESIGN///////////////////////////
////////////////////////////////////////////////
            
        case "design":
            
            return ["Jeff has eight years experience as an in-house graphic designer for ARC Document Solutions. He also has a large body of freelance work including an illustration portfolio. Which would you like to know more about? (Corporate or Illustration)", ""];
            
  //////////////corporate///////////////          
 
        case "corporate":

            return ["Jeff has created many marketing materials for a corporate environment. What would you like to view a sample of (Book, Storefront, Poster, Brochure or back to Development)", ""];
            

        case "book":

            return ["You can view an in-depth presentation of the development of this book at https://www.behance.net/gallery/38431391/Samples-and-Capabilities-Catalog. What would you like to view a sample of? (Book, Storefront, Poster, Brochure) Or would you like to view a different category? (Illustration or Development)" , "images/book.png"];

        case "storefront":

            return ["What would you like to view a sample of? (Book, Storefront, Poster, Brochure) Or would you like to view a different category? (Illustration or Development)", "images/storefront.jpg"];

        case "poster":

            return ["What would you like to view a sample of? (Book, Storefront, Poster, Brochure) Or would you like to view a different category? (Illustration or Development)", "images/poster.png"];
            
        case "brochure":

            return ["What would you like to view a sample of? (Book, Storefront, Poster, Brochure) Or would you like to view a different category? (Illustration or Development)", "images/brochure.png"];
            

            
/////////////////freelance
            
        case "freelance":

            return ["Freelance samples will be available soon", ""];
            
            
//////////////illustration
            
        case "illustration":

            return ["View Jeff's full illustation portfolio at peterdragontail.com", "images/peterdragontail.png"];
            
            
            
/////////////development
            
            
        case "development":

            return ["Jeff has created webpages using Bootstrap and Wordpress as well as applications in React and a full featured Android app called Qwestr. Which would you like to see a sample of? (Bootstrap, Wordpress, Javascript, React or Android)", ""];
            
            
        case "bootstrap":

            return ["Jeff's current portfolio site, jeffreylevifry.com, is developed using Bootstrap. Would you like to view more development work (Bootstrap, Wordpress, Javascript, React or Android) or Design work?", "images/jlf.png"];
            
            
        case "wordpress":

            return ["Would you like to view more development work (Bootstrap, Wordpress, Javascript, React or Android) or Design work?", "images/wordpress.png"];
            
            
        case "react":

            return ["I'm a React application :) You can also view pixelatedfieldguide.com for another example. View Jeff's proces presentation on developing that site here: https://www.behance.net/gallery/49097709/Pixelated-Field-Guide.  Would you like to view more development work (Bootstrap, Wordpress, Javascript, React or Android) or Design work?", "images/turtles.png"];
            
            
        case "android":

            return ["Qwestr is a full featured Android application focused on gamifying completion of real life tasks. Learn more at Qwestr.com! Would you like to view more development work (Bootstrap, Wordpress, Javascript, React or Android) or Design work?", "images/qwestr.jpg"];
        
        case "javascript":
            

            return ["Would you like to view more development work (Bootstrap, Wordpress, Javascript, React or Android) or Design work?", "images/weather.png"];
            
            
        default:
            return null;

    }

}
