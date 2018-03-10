 var q0=[0,4];
var q1=[0,10];
var q2=[0,8];
var q3=[0,5];
var q4=[0,4];
var q5=[0,6];
var matrix=[];

   


for(var a = 0; a<50; a++){
    matrix.push([]);
     for(var b = 0; b<50; b++){
        matrix[a].push(Math.floor(Math.random()* Math.floor(6)));
         
         
    
console.log(matrix);


     }
}


var GishatichArr = [];
var doctorarr = [];
var virusarr = [];
var xotakerArr = [];
var side = 4;
var grassArr = [];
function setup() {
    frameRate(30);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y ,1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y,1);
                xotakerArr.push(xt);
            }

            else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y);
                GishatichArr.push(gsh);
            }
            else if (matrix[y][x] == 4) {
                var zmb = new Virus(x, y);
                virusarr.push(zmb);
            }
            else if (matrix[y][x] == 5) {
                var doc = new Doctor(x, y);
                doctorarr.push(doc);
            }
        }

    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var u in xotakerArr) {
        xotakerArr[u].utel();
        grassArr.splice(u, 1);
             
        if (xotakerArr[u].energy >= 6) {
            xotakerArr[u].bazmanal();
        }
        if (xotakerArr[u].energy <= -6) {
            xotakerArr[u].mernel();
            xotakerArr.splice(u, 1);
            break;
        }
    }

    for (var g in GishatichArr) {
        GishatichArr[g].utel();
        xotakerArr.splice(g, 1);

        if (GishatichArr[g].energy >= 6) {
            GishatichArr[g].bazmanal();
        }
        if (GishatichArr[g].energy <= -6) {

            GishatichArr[g].mernel();
            GishatichArr.splice(g,1);
        }
    }
   

    /////sadaasd


    for (var t in virusarr) {
        virusarr[t].utel();
                
        for (var k in grassArr) {
            if (grassArr[k].x == virusarr[t].x && grassArr[k].y == virusarr[t].y) {
                grassArr.splice(k, 1);
                break;
            }
        }
         for (var e in GishatichArr) {
            if (GishatichArr[e].x == virusarr[t].x && GishatichArr[e].y == virusarr[t].y) {
                GishatichArr.splice(e, 1);
                break;
            }
        }
        for (var s in xotakerArr) {
            if (xotakerArr[s].x == virusarr[t].x && xotakerArr[s].y == virusarr[t].y) {
                xotakerArr.splice(s, 1);
                break;
            }
        }
           
    }

    for (var l in doctorarr) {
        doctorarr[l].bujel();
        if(doctorarr[l].energy<=-2){
            doctorarr[l].mernel();
        }
        
    }
    
    
}
