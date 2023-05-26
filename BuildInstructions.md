//This is my project called Prompto built with Next.js
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

***JSON Practice***
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

//Inside tailwind.config.js add paths to the files that will use Tailwind CSS class names

***layout.jsx***
This file is to have a parent template for layout such that other pages may inherit

Contains Metadata and contains RootLayout HTML

** Run npm run dev to test web application**

***page.jsx***
//page.jsx is what will Render our Home page

Build out Home page using section and use differemt elements such as span and p tags.  Also include a hidden option break tag for larger devices

import Feed.jsx into page.jsx
Call Feed in section of return function

*** Create Feed.jsx for feed components ***

*** Create Form.jsx for form components ***

Create Form which includes textArea with post.prompt data and input field with value=post.tag
Cancel button exits form and returns to home page

*** Create Navbar.jsx for Navigation bar components ***
Uses next.js for
	Link
	Image
Use useState, useEffect from react
	Because we are using hooks(client side), call Use client;
Use 'next-auth/react'
	signIn, signOut, useSession, getProviders
use nav with tailwind css

run npm install next-auth to install next-auth packages

//Work on Navbar.jsx 

Include Client side Links to other directories if user is signed in (signIn,create-prompt, profile).

Include fetching provider functionality

Work on mobile layout for navbar. Fetch providers and map into buttons.

*** Create Profile.jsx for Navigation bar components ***

*** Create PromptCard.jsx for Prompt Card components ***

*** Create Provider.jsx for Provider components ***


*** SETUP DATABASE: Create database.js ***

connect to mongoose

Set up async method to connect to database

Execute inside Try block

//Fetch mongo db URI from process.env variable
await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

set up MongoDB atlas and create env variable

*****Create Post page*****

app/create-prompt

Create a page that returns a form
	form has post and createPrompt function

