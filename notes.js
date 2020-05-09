const fs = require('fs');
const chalk = require('chalk');

//Function for adding notes
const addNote = (title, body) => {
	const notes = loadNotes();
	console.log("lll", notes)
	const duplicateNotes = notes.find(note => note.title === title);
	if (!duplicateNotes) {
		notes.push({
			title: title,
			body: body
		});
		saveNote(notes);
		console.log(chalk.green.inverse.bold("Note added successfully!!"));
	} else {
		console.log(chalk.red.inverse.bold("Note already added!!"));
	}

}

const removeNote = (title) => {
	const notes = loadNotes();
	const notesToKeep = notes.filter(note => note.title !== title);
	if (notes.length > notesToKeep.length) {
		saveNote(notesToKeep)
		console.log(chalk.green.inverse.bold("note removed--", title));
	} else {
		console.log(chalk.red.inverse.bold("No notes found!"));

	}

}

const listNotes = () => {
	const notes = loadNotes();
	if (notes.length > 0) {
		console.log(chalk.blue.bold.inverse('Your Notes...'));
		notes.forEach(note => console.log(chalk.yellow.bold.inverse(note.title)));
	} else {
		console.log(chalk.red.bold.inverse("You don't have notes yet"));
	}
}


const readNote = (title) => {
	const notes = loadNotes();
	const noteToDisplay = notes.find(note => note.title === title);
	if (noteToDisplay)
		console.log(chalk.green.bold.inverse(`The note you searched is ${noteToDisplay.title}-${noteToDisplay.body}`))
	else
		console.log(chalk.red.inverse.bold('There is no note matches your search!'))
}


const saveNote = (notes) => {
	const stringifyNotes = JSON.stringify(notes);
	fs.writeFileSync('notes.json', stringifyNotes);
}

//Function for load notes
const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json');
		const data = JSON.parse(dataBuffer);
		return data;
	} catch (e) {
		return [];
	}

}


module.exports = {
	addNote,
	removeNote,
	listNotes,
	readNote,
}



