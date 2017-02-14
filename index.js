function User(name){
	this.name = name;
	this.life = 100;
	this.giveLife = function giveLife(targetUser){
		targetUser.life +=1;
		console.log(this.name + " gave life to " +targetUser.name);
	}
}

var Bucky = new User("Bucky");
var Wendy = new User("Wendy");

Bucky.giveLife(Wendy);
console.log(Bucky.life)
console.log(Wendy.life)