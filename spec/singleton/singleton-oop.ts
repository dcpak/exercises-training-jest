export class Singleton {
  private constructor() {
      console.log('created')
  }

  private static dupa: Singleton | null = null

  static getInstance(): Singleton { 
      if (!Singleton.dupa) { 
          Singleton.dupa = new Singleton()
      }
      return Singleton.dupa
  }

  value = "initial"

  doSomeStuff() {
    console.log('some stuff')
  }
}



export class SingletonFactory {
  static produce(){
    // anonymous class
    return class {
      private constructor() {
          console.log('created')
      }
    
      private static dupa: Singleton | null = null
    
      static getInstance(): Singleton {  // TODO
          if (!this.dupa) { 
              this.dupa = new this()
          }
          return this.dupa
      }
    
      value = "initial"
    
      doSomeStuff() {
        console.log('some stuff')
      }
    }
  }
}
