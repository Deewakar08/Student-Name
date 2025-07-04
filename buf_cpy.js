let b2 = new Buffer.alloc(16,"Pune");
console.log("b2-"+b2);
let name1 = new Buffer.alloc(10,"University");
name1.copy(b2);
console.log("b2 -"+b2);
console.log("name 1 -"+name1);
//b2.copy(name1)
console.log("Copied: "+b2.toString());