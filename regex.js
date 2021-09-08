var reg=new RegExp('[a-z]','g')
var ig=/[a-z]/g
  var a='nani123';
// do{
//   var zz1=ig.exec(a)
//   if(zz1!=null){
//       console.log(zz1[0]);
//   }
// }while(zz1!==null)
console.log(ig.test(reg))
console.log(a.replace(ig,'11'))
