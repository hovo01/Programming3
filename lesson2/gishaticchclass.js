class Gishatich extends KendaniEak {
   
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
