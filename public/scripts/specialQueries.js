function specialQueries(message) {

    switch (message) {
        case "turtle":
        case "turtles":
        case "Turtle":
        case "Turtles":

            return ["", "images/turtles_behance_header.png"];

        case "mothmane":
        case "Mothmane":

            return [undefined, "images/mothmane.png"];

        case "a":
        case "1":

            return [undefined, "images/test1.png"];
            
        case "test":

            return [undefined, "images/test2.png"];

        case "fuck":

            return [undefined, "images/test3.png"];


        default:
            return null;

    }

}
