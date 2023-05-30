import { connectToDB } from "@utils/database";
import Prompt from '@models/prompt';


//API Route in Next.js
export const POST = async (req, res) => {
    const { userId, prompt, tag } = await req.json();

    try {
        //Connect to DB everytime because this is a lambda function
        await connectToDB();
        const newPrompt = new Prompt( {
            creator: userId,
            prompt,
            tag 
        })
        //Save to database
        await newPrompt.save();

        //Return new response
        return new Response(JSON.stringify(newPrompt), {
            status: 201
        })
    } catch(error){
        return new Response("Failed to create a new prompt", { status: 500});
    }
}