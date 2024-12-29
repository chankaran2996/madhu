import Tasks from "../models/modelTask.js";

export const getTask = async (req,res) =>{
    console.log("called")
    const data = await Tasks.find();
    res.status(200).json(data)
}

export const testTask = async (req,res) => {
    console.log("call",req.body);
    const {TaskID,AssignedBy,AssignedTo,CommenceDate,CustomerName,FinishedDate ,
    ProjectComments,ProjectName,ProjectStatus,TaskName,TaskPriority} = req.body;
        const posting = await Tasks.create({TaskID,AssignedBy,AssignedTo,CommenceDate,CustomerName,FinishedDate ,
            ProjectComments,ProjectName,ProjectStatus,TaskName,TaskPriority});
        if(posting){
            res.status(201).json({mes:"created",posting})
        }else{
            res.status(500).json({mes:"not created"})
        }

}

export const createTask = async (req,res) => {
    const {AssignedTo,CommenceDate,
    ProjectComments,ProjectName,TaskPriority} = req.body;
    const AssignedBy = 500;
    const ProjectStatus = 1;
    const TaskID = Math.floor((Math.random() * 1000) + 0)
        const posting = await Tasks.create({TaskID,AssignedBy,AssignedTo,CommenceDate,
            ProjectComments,ProjectName,ProjectStatus,TaskPriority});
        if(posting){
            res.status(201).json({mes:"created",posting})
        }else{
            res.status(500).json({mes:"not created"})
        }

}