

// Select color input
console.log($("#colorPicker").val());
// Select size input
console.log($("#inputHeight").val());
console.log($("#inputWeight").val());
// When size is submitted by the user, call makeGrid()
$("input[type='submit']").on("click",function(event) {

	event.preventDefault();
	
	const height = $("#inputHeight").val();
	const width = $("#inputWeight").val();

	$("#pixelCanvas").empty();
	makeGrid(height,width);
});

function makeGrid(N,M) {


// Your code goes here!
	
	for (let i = 0; i<N; i++) {

	$("#pixelCanvas").append($("<tr></tr>"));

	for (let j = 0; j<M; j++) {

	$("tr").last().append($("<td></td>"));
		}
	}

// color square when clicked function
	$("#pixelCanvas").on("click", "td", function() {


	$(this).css("background-color", $("#colorPicker").val());

	});
}
