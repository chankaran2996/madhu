import Tasks from "../models/modelTask.js";

export const getTask = async (req,res) =>{
    console.log("called")
    const data = await Tasks.find();
    res.status(200).json(data)
}