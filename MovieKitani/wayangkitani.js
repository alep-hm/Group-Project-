/*Here is your key: 371376f6

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=371376f6

Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=210e48fb-638b-4b61-b7b4-53c9c9fe9f5e
If you did not make this request, please disregard this email.
*/

const searchTitle = document.getElementsByClassName("titleSearch");
searchTitle.addEventListener("keypress", event);

function event(evt){
	if (evt.KeyCode == 13){
	console.log(searchTitle)
	}
}