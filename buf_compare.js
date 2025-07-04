const buf1 = new Buffer.alloc(16,"Deewakar Tembe");
const buf2 = new Buffer.alloc(10,"Deewakar");
const result = buf1.compare(buf2);

if(result===0)
    console.log(buf1+"and"+buf2+"are equal")
else if(result ===-1)
   console.log(buf1+"is smaller than"+buf2)
else
    console.log(buf1+"is larger than"+buf2);