








class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [];
        


    }

    stanalNorKordinatnerGsh() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatnerGsh();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvel() {

        var norVandak = random(this.yntrelVandak(0));
        var norVandakxt = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;

            this.x = norVandak[0];
            this.y = norVandak[1];
         
            this.energy--;
        }
        else if (norVandakxt) {
            matrix[this.y][this.x] = 1;
            matrix[norVandakxt[1]][norVandakxt[0]] = 3;

            this.x = norVandakxt[0];
            this.y = norVandakxt[1];
         
            this.energy--;
            console.log(this.energy);
        }
      
    }

    utel() {
 
        var norVandak = random(this.yntrelVandak(2));
        var norVandakdo = random(this.yntrelVandak(5));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;

            this.x = norVandak[0];
            this.y = norVandak[1];
         
console.log("kera");
            this.energy++;
        }
        
        if (norVandakdo) {
            matrix[this.y][this.x] = 0;
            matrix[norVandakdo[1]][norVandakdo[0]] = 3;

            this.x = norVandakdo[0];
            this.y = norVandakdo[1];
         

            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var norGishatich = new Gishatich(norVandak[0], norVandak[1]);
            GishatichArr.push(norGishatich);
            matrix[norVandak[1]][norVandak[0]] = 3;
        }

      
    }

    mernel() {

       
        matrix[this.y][this.x] = 0;
 
    }

}


class Virus {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
     
       

    }

    stanalNorKordinatnervirus() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatnervirus();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvel() {
        
        var norVandak = random(this.yntrelVandak(0));
        
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;

            this.x = norVandak[0];
            this.y = norVandak[1];
    
        }
        
       
    }

    utel() {
        var norVandakxot = random(this.yntrelVandak(1));
        var norVandak = random(this.yntrelVandak(2));
        var norVandakvir = random(this.yntrelVandak(3));
        if (norVandak) {
            matrix[this.y][this.x] = 4;
            matrix[norVandak[1]][norVandak[0]] = 4;

            this.x = norVandak[0];
            this.y = norVandak[1];
       

            var norvir = new Virus(norVandak[0], norVandak[1]);
            virusarr.push(norvir);
            
        }
        if (norVandakxot) {
            matrix[this.y][this.x] = 4;
           

            this.x = norVandakxot[0];
            this.y = norVandakxot[1];
       

            var norvir = new Virus(norVandakxot[0], norVandakxot[1]);
            virusarr.push(norvir);
            matrix[norVandakxot[1]][norVandakxot[0]] = 4;
        }
        if (norVandakvir) {
            matrix[this.y][this.x] = 4;
            matrix[norVandakvir[1]][norVandakvir[0]] = 4;

            this.x = norVandakvir[0];
            this.y = norVandakvir[1];
            

            var norvir = new Virus(norVandakvir[0], norVandakvir[1]);
            virusarr.push(norvir);
           
        }
        
        else {
            this.sharjvel();
        }
    }

}



class Doctor {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [];
       
       

    }

    stanalNorKordinatnerHnt() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatnerHnt();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjveldoc() {
        
        var norVandak = random(this.yntrelVandak(0));
        var norVandakxot = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;

            this.x = norVandak[0];
            this.y = norVandak[1];
        
            this.energy--;
        }
        else if (norVandakxot) {
            matrix[this.y][this.x] = 1;
            matrix[norVandakxot[1]][norVandakxot[0]] = 5;

            this.x = norVandakxot[0];
            this.y = norVandakxot[1];
            
            this.energy--;
        }
       // console.log(this.energy);
    }

    bujel() {

        var norVandak = random(this.yntrelVandak(4));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 0;   
            virusarr.splice(norVandak, 1);
            this.energy++;
        }
       
        else {
            this.sharjveldoc();
        }
    }
        
    mernel() {

       
        matrix[this.y][this.x] = 0;
 
    }  
}
