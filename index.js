var rect=require('./rectangle');
function SolveRect(l,b){
    console.log("Solving for rectangle with l="+l+"and b="+b);
    if(l<=0 || b<=0){
        console.log("Rectangle dimensions should be greater than zero: l="+l+", and b="+b);
    }
    else{
        console.log("the area of the rectangle is "+rect.area(l,b));
        console.log("the perimeter of the rectangle is "+rect.perimeter(l,b));
    }
}
SolveRect(2,4);
SolveRect(3,5);
SolveRect(0,5);
SolveRect(-3,5);
