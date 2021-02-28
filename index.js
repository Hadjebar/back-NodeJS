var rect = {
    perimetre: (x,y) => 2 * (x+y),
    area: (x,y) =>  (x*y)
}

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    if (l >= 0 && b >=0 ) {
        console.log("Perimetre = " + rect.perimetre(l,b));
        console.log("area = " + rect.area(l,b));
    } 
}

solveRect(4,6);
solveRect(1,3)