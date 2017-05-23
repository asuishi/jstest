// concat是数组深拷贝
// 但数组里的对象没有深拷贝


var a = [1,'a',{c:3},[4,5]];
b= [].concat(a);

b[0] = 3;  //  
b[2]['c'] = 4  // 对象浅拷贝

b[3] = [6,7];  // 数组深拷贝


console.log(a);
console.log(b);