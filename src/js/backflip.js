// Chose your color for the array
colors = new Array('#2388e5', '#3994e8', '#50a1ea','#67aded', '#7eb9f0');
// call function with tic = 0 value
	function changeBackground(tic){
		//check array length 
		tic %= colors.length;
		//set background color
		document.getElementById('customid').style.background = colors[tic]
		//set time 
		setTimeout("changeBackground("+(tic+1)+")", 2000);
	}
