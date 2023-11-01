import jobs from "../models/Jobs.js"

export const createJob = async(req, res, next) => {            
    const newJob = new jobs.job({
        name: req.body.name,
        userId: req.body.userId,
        status: req.body.status,
        type: req.body.type,
        description: req.body.description
    });                    

    const subJobItems = req.body.subJobs;          

    subJobItems.forEach((item) => {
        const newSubJob = new jobs.subJob({
            job: newJob._id,
            name: item.name,
            status: item.status,
            type: item.type,
            description: item.description,
        });
        
        newSubJob.save();
        newJob.subJobs.push(newSubJob._id)
    })                

    try {
        const savedJob = await newJob.save()    
        res.status(200).json(savedJob);
    } catch (err) {
        next(err);
    }    
}

export const updateJob = async(req, res, next) => {
    try {
        const updatedJob = await jobs.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true}
        );
        res.status(200).json(updatedJob);
    } catch (err) {
        next(err);
    }
}

export const deleteJob = async (req, res, next) => {
    try {
        const deletedJob = await jobs.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedJob);
    } catch (err) {
        next(err);
    }
}

export const getJob = async(req, res, next) => {
    try {
        const jobByID = await jobs.job.findById(req.params.id);
        res.status(200).json(jobByID);
    } catch (err) {
        next(err);
    }
}

export const getAllJobs = async(req, res, next) => {
    try {
        const allJobs = await jobs.job.find();
        res.status(200).json(allJobs);
    } catch (err) {
        next(err);
    }
}

export const getJobsByUser = async (req, res, next) => {
    try {        
        const userJobs = await jobs.job.find({ userId: req.params.id})
        res.status(200).json(userJobs);
    } catch (err) {
        next(err);
    }
}