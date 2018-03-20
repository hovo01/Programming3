class Doctor extends KendaniEak {
   
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
