//This is my project called Prompto built with Next.js and TypeScript
//Next.js is a framework build on React to create Web applications
//You can build user interfaces using React components
// Author: Jonathan Phan
// Github: https://github.com/jtphan-asu
// Email: jonathan.tan.phan@gmail.com


***Project Creation***
//Terminal command
npx create-next-app@latest ./

//Install dependencies from npx
	- react
	- react-dom
	- next
	- tailwindcss
	- postcss
	- autoprefixer

//Sample JSON practice
{
	'Title': "Prompto",
	'Version': 1,
	'isAdmin': True,
	'Collection': [
		'Knife1',
		'Knife2'
	],
	'KnifeObject': {
		'Model': "Benchmade 945 bk-1",
		'Color': "5/8/23"
	}

}

***Create app***
create layout.jsx and page.jsx

.jsx is Javascript XML which makes it easier to add HTML to react

//Inside tailwin.config.js add paths to the files that will use Tailwind CSS class names
