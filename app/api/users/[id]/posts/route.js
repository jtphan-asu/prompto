import { connectToDB } from "@utils/database";
import Prompt from '@models/prompt';


//API Route in Next.js
export const GET = async (request, { params }) => {
    

    try {
        //Connect to DB everytime because this is a lambda function
        await connectToDB();
        
        const prompts = await Prompt.find({ 
            creator: params.id }).populate("creator")
        
            //Save to database
        await newPrompt.save();

        //Return new response
        return new Response(JSON.stringify(prompts), {
            status: 200
        })
    } catch(error){
        return new Response("Failed to fetch prompts created by user", { status: 500});
    }
}