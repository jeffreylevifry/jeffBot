function specialQueries(message){

    switch (message){
    case "turtle":
    case "turtles":
    case "Turtle":
    case "Turtles": 

        return ["","images/turtles_behance_header.png"];
        
    case "mothmane":
    case "Mothmane":    

        return [undefined,"images/mothmane.png"];
     
    
    default :
        return null;
    
}

}