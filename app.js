const chalk = require('chalk');
const yargs = require('yargs');


//Setting yargs command to add Note
yargs.command({
	command: 'add',
	describe: 'For adding Notes',
	handler: function () {
		console.log('Notes added!')
	}
})

//Setting yargs command to remove Note
yargs.command({
	command: 'remove',
	describe: 'For removing Notes',
	handler: function () {
		console.log('Notes removed!')
	}
})

//Setting yargs command to read a Note
yargs.command({
	command: 'read',
	describe: 'For reading Notes',
	handler: function () {
		console.log('Read a particular note!')
	}
})

//Setting yargs command to list Notes
yargs.command({
	command: 'list',
	describe: 'To list Notes',
	handler: function () {
		console.log('List all notes!')
	}
})


console.log(yargs.argv);
