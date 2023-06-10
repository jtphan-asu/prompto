//Create API endpoints that our frontend can call on

import { connectToDB } from "@utils/database";
import Prompt from '@models/prompt';
import { notFound } from "next/navigation";

//GET (read) API endpoint
export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator');

        if(!prompt) return new Response(
            "Prompt not found", { status: 404 }) 
        
        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error){
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}

//PATCH (update) API endpoint
export const PATCH = async(request, { params }) => {
    const { prompt, tag } = await request.json();

    try{
        //First connect to Database
        await connectToDB();

        //Find prompt by ID
        const existingPrompt = await Prompt.findById(params.id);

        //Prompt not found
        if(!existingPrompt){
            return new Response("Prompt not found", { status:404})
        }

        //Update prompt from request to current prompt selected by ID
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        //Save to database
        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), {status:200})
    } catch(error){
        return new Response("Failed to update prompt", {status:500})
    }
}

//DELETE (delete) API endpoint
export const DELETE = async(request, {params}) => {

    //Gather prompt and tag from JSON request
    const [ prompt, tag ] = await request.JSON();

    try{
        //First connect to database
        await connectToDB();

        await Prompt.findByIdAndRemove(params.id);

        //Save to database
     

        return new Response("Successfully deleted prompt", {status:200});

        

    } catch(error){
        return new Response("Failed to delete prompt", {status:500});
    }
}

