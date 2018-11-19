let library = [
 { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
 { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
 { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of TheHunger Games', readingStatus: false }
 ];


for(i = 0; i < library.length; i++){

	if(library[i].readingStatus === true){
	console.log(" already read "+library[i].title+" "+library[i].author+'<br>');

	document.getElementById('display').innerHTML += `already read ${library[i].title} by ${library[i].author} <br>`;
	} else {
	document.getElementById('display').innerHTML += `you still need to read ${library[i].title} by ${library[i].author}<br>`;
	}
}