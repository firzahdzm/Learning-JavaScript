class animal {
    constructor(name,age,isMammal){
        this.name = name
        this.age = age 
        this.isMammal = isMammal
    }
}

class rabbit extends animal {
    constructor(name,age,isMammal){
        super(name,age,true)
    }
    eat(){
        return `kelinci bernama ${this.name} sedang makan`
    }
}

class eagle extends animal {
    constructor(name,age,isMammal){
    super(name,age,false)
    }
    fly(){
        return `elang bernama ${this.name} sedang terbang`
    }
}

myRabbit = new rabbit("wowko",8)
myEagle = new eagle("hehe",20)

console.log(myRabbit.eat())
console.log(myEagle.fly())
