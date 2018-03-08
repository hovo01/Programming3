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
