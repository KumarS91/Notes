const chalk = require('chalk');
const yargs = require('yargs');
const { addNote, removeNote, listNotes, readNote } = require('./notes');


//Setting yargs command to add Note
yargs.command({
	command: 'add',
	describe: 'For adding Notes',
	builder: {
		title: {
			describe: "Title of the note ",
			demandOption: true,
			type: "string",
		},
		body: {
			describe: 'Body of the note',
			demandOption: true,
			type: 'string',
		}
	},
	handler({ title, body }) {
		addNote(title, body);
	}
})

//Setting yargs command to remove Note
yargs.command({
	command: 'remove',
	describe: 'For removing Notes',
	builder: {
		title: {
			describe: "Title of the note to remove",
			demandOption: true,
			type: 'string',
		}
	},
	handler({ title }) {
		removeNote(title);
	}
})

//Setting yargs command to read a Note
yargs.command({
	command: 'read',
	describe: 'For reading Notes',
	builder: {
		title: {
			describe: 'Note you wanna search',
			demandOption: true,
			type: 'string',
		}
	},
	handler({ title }) {
		readNote(title);
	}
})

//Setting yargs command to list Notes
yargs.command({
	command: 'list',
	describe: 'To list Notes',
	handler() {
		listNotes();
	}
})


// to parse the argv. we can use yargs.argv
yargs.parse();
// console.log(yargs.argv);
