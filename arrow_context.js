/**
	1，箭头函数的this 指向定义是的环境
	2，定义时的环境 以 function为作用于 而不是object
*/

~~function(){

	var obj = {
		t:1,
		f:function(){
			console.log(this);
			console.log(this.t)
		}
	}

	var obj2 = {
		t:1,
		f:() => {
			console.log(this);
			console.log(this.t)
		}
	}

	t= 2;

	obj.f()  //1
	var test = obj.f;
	test();  //2

	obj2.f() //2
	var test = obj2.f;
	test();  //2
}();