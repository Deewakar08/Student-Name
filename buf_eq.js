let name1 = new Buffer.alloc(16,"Deewakar Tembe");
let name2 = new Buffer.alloc(10,"Deewakar");
console.log(name1.toString());
console.log(name2.toString());

if(Buffer.from(name1).equals(name2))
    console.log(name1+"and"+name2+"are equal");
else if(Buffer.from(name1).equals(name2)==0)
    console.log(name1+"and"+name2+"are  not equal");
