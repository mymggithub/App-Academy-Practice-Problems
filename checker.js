// Language: Javascript
// Author: Mark Garcia
// new js console log argument checker

function con_test_log(func_name, string_arr_test) {
	// These are tests to check that your code is working. After writing
	// your solution, they should all print true.
	largest_str_num = 48;
	output = [];
	bool_test_result = false;
	header = "\nTests for //"+func_name;
	for (var i = 0; i < string_arr_test.length; i++) {
		if(typeof eval(string_arr_test[i]) != "boolean"){
			return false;
		}
		temp_arr = string_arr_test[i].replace("===","==").split("==");
		if(temp_arr.length==2){
			arg_1  = eval(temp_arr[0]);
			arg_2  = eval(temp_arr[1]);
			if(arg_1 instanceof Array && arg_2 instanceof Array){
				// ! boolean integer string function
				bool_test_result = arg_1.toString() == arg_2.toString() && (arg_1.length == arg_2.length) && arg_2.every(function(element, index) {
					return element === arg_2[index];
				});
			}else{
				bool_test_result = arg_1 == arg_2;
			}
		}else{
			bool_test_result = (eval(string_arr_test[i]))
		}
		s = string_arr_test[i].toString() + ": " + bool_test_result;
		largest_str_num = (largest_str_num<s.length)?s.length:largest_str_num;
		output.push(s+"\n"); 
	}
	console.log(
		header + "\n" +
		Array(largest_str_num).join("=") + "\n"+
		output.join("") +
		Array(largest_str_num).join("=")
	);
	return true;
}


con_test_log(["1==1"]);