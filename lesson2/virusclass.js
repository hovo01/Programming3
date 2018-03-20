class Virus extends KendaniEak {
   
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
