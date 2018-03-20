class Xotaker extends KendaniEak {
   

 utel() {
    
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;

            this.x = norVandak[0];
            this.y = norVandak[1];
     
            console.log("keraxot");
            this.energy++;
        }
        
    }

sharjvel() {
     
        var norVandak = random(this.yntrelVandak(0));
       
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;

            this.x = norVandak[0];
            this.y = norVandak[1];
          
            this.energy--;
            
        }
        else {
            this.utel();
        }
        
    }

   
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotakerArr.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
        }

        
    }

    mernel() {

        console.log("mera");
        matrix[this.y][this.x] = 0;
        

    }
   
}
