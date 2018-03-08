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
