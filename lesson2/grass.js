class Grass {
  constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 3;
        
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
    
    bazmanal(){
        
        this.direction = random(this.yntrelVandak(0));
        if(this.direction){
            var newGrass = new Grass(this.direction[0],this.direction[1],this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);

            matrix[this.direction[1]][this.direction[0]] = this.index;

            
        }
    }
}
