var operands=[0];
var operator=[];
function display(item,name)
{
	if (Number.isString(form.displayresult.value)==true)
	{
		form.displayresult.value=parseInt(form.displayresult.value);
	}
	if ((name=="number")&& (Number.isInteger(form.displayresult.value)==true) )
	{
		form.displayresult.value=parseInt(form.displayresult.value*10+parseInt(item));
	}
	

}
	
	
