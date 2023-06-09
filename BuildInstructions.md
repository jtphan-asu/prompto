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
Wrap 
***page.jsx***
//page.jsx is what will Render our Home page

Build out Home page using section and use differemt elements such as span and p tags.  Also include a hidden option break tag for larger devices

import Feed.jsx into page.jsx
Call Feed in section of return function

*** Create Feed.jsx for feed components ***
Fetch data from posts and display on PromptCard

Create GET request api route using Next.js to fetch all prompts

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

setToggleDropdown to true by using previous state and not altering current version of state to avoid unexpected issues

Finish Mobile Navigation using toggleDropdown

Add session and implement user image from session

Finish signIn and signOut from OAuth

*** Create Profile.jsx for Navigation bar components ***
	Create Profile page.jsx using rafce command


*** Create PromptCard.jsx for Prompt Card components ***

Create function to handle the copy to clipboard operation

Return promptCard which has user logo. username. email. and post information.

Also include icons to copy prompt on promptCard

*** Create Provider.jsx for Provider components ***
import SessionProvider from 'next-auth/react and return a SessionProvider using session from browser capabilities (place "use client" at top of file)

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

Create API call for createPrompt function as POST request.

*****api/prompt/new/route.js*****
Create API route using Next.js
	Async function for POST request
	await req.json();
	Create new prompt
	Connect to DB
	Save to DB
	Return new response

***** Inside app/api/[...nextauth]/route.js *****

Create Google Cloud API with OAuth 2.0 Web Application

Create clientID and clientSecret in .env file

Set up next.js authentication in route.js

***** Create user.js for database model*****

User schema for database

Change .env to include Nextauth url and secret

run command openssl rand -base64 32 to generate secret

*****next.config.js*****

add config for experimental and images, webpack

***profile/page.jsx
Use session user id data to fetch and display posts to the profile page

fetch data from API endpoint in 

//fetch from api endpoint
      const response = await fetch(`/api/users/$
      {session?.user.id}/posts`);

Link to components/Profile.jsx