
class vehicle {
        constructor(make , model ) {
            this.make = make;
            this.model = model ;
        }

        drive( ) {
            console.log(`${this.make} ${this.model}`)
        }
 


}

class Car  extends vehicle {
     constructor(make,model,year) {
        super(make , model) ;
        this.year = year ;
     }

     displayDetail () {
        console.log(`${this.make} ${this.model} ${this.year}`)
     }
}

const myCar = new Car('TOYOTA','Corolla',2022)
myCar.displayDetail();