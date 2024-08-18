


class car {
    constructor (make, model , year) {
      this.make =  make ;
      this.model = model ;
      this.year = year ;
    }
        
         startEngine () {
             console.log(`${this.model} ${this.make} ${this.year}`)
         }
  }
  
  
  const myCar = new car('Toyota' , 'Corocola', 2000)
  myCar.startEngine()