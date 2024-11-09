// can change.
const separator = "=>" // separator, use to define the split of each element.
const header = "dcj" // header, this is use for this library to detect which class name is dynamic.

// can't change because it will make this library unable to work.
const header_pos = 0
const elements_pos = 1
const header_element = 3

// get unique class 
function get_unique_class_list(){
	let all_classes = [];
	let all_elements = document.querySelectorAll('*');

	for (let i = 0; i < all_elements.length; i++) {
		let classes = all_elements[i].className.toString().split(/\s+/);
		for (let j = 0; j < classes.length; j++) {
			let cls = classes[j];
			if (cls && all_classes.indexOf(cls) === -1) all_classes.push(cls);
		}
	}
	return all_classes;
}

// change class name into list
function decode_class_name(class_name){
	return class_name.toString().split(separator);
}

// check class is exist or not
function check_class_is_exist(class_name){
	let get_element_by_class = document.getElementsByClassName(class_name);
	return (get_element_by_class.length >= 1 ? true: false);
}

// auto router function
function router_function(class_name){
	if(check_class_is_exist(class_name)){
		let class_elements = document.getElementsByClassName(class_name);
		let css_atr_list = []
		for(let i = 0; i<class_elements.length;i++){
			css_atr_list = decode_class_name(class_name);
			if(css_atr_list[header_pos] == header){
				console.log(css_atr_list.length, css_atr_list);
				if(css_atr_list.length > header_element){
					CssMultipleInput(class_elements[i], css_atr_list)
				}
				else{
					CssSingleInput(class_elements[i], css_atr_list)
				}
			}
		}
	}
}

// main function
function main(){
	// main function
	let class_lists = get_unique_class_list();
	for(let i = 0; i < class_lists.length; i++){
		router_function(class_lists[i]);
	}
}

// core 1 (single input)
function CssSingleInput(class_element, list_data){
	class_element.style[list_data[elements_pos]] = list_data[elements_pos+1];
}

// core 2 (multiple input)
function CssMultipleInput(class_element, list_data){
	let data_string = "";
	for(let i = 0; i < list_data.length; i++){
		if(i > header_pos){
			if(i+1 < list_data.length){
				data_string += list_data[i+1];
			}
			if(i+1 < list_data.length - 1){
				data_string += " "
			}
		}
	}
	// console.log(data_string);
	class_element.style[list_data[elements_pos]] = data_string;
}

main(); // main function
