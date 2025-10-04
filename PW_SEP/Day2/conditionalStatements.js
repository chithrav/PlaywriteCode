function getBrowser() {
    if (browserName=="chrome") {
        console.log("supported browser is Chrome");
        
    } else if (browserName=="edge") {
        console.log("Supported browser is edge");
        } else {
            console.log("It is not a supported browser");
            
        }  
}
let browserName="firefox"
getBrowser()

function numbervalue(number) {
    if (number>0)
    {
        console.log("its a positive value"); // if condition checks each and every conditions in the statements
        
    }
    else if(number===0)
    {
        console.log("its a neutral value");
    }
    else if(number<0)
    {
        console.log("its a negative value");
    }
        
    else
    {
        console.log("check your input");
        
    }
}
numbervalue(-2)

// get a browser version using swtich case

let browser="edge";
function getVersion(){
    switch (browser) {
        case "chrome":
        console.log("140");
            break;
        case "firefox":
            console.log("141");
            break;
        case "edge":
            console.log("142");
            break;
        default:
            console.log("invalid browser");
            break;
    }
}
getVersion()

let childname="nilan";
function studentname() {
    switch (childname) {
        case "nilan":
            console.log("Student name is Nilan");
            break;
        case "nirai":
            console.log("student name is Nirai");
            break;    
        default:
            console.log("invalid input");
            break;
    }
    
}
studentname()