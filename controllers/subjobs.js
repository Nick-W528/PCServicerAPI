import jobs from "../models/Jobs.js"

export const getSubJobsByJobId = async (req, res, next) => {
    try {
        const subJobs = await jobs.subJob.find({ job: req.params.id })
        res.status(200).json(subJobs);
    } catch (err) {
        next(err);
    }
}

export const updateSubJob = async (req, res, next) => {
    try {
        const updatedSubJob = await jobs.subJob.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedSubJob)
    } catch (err) {
        next(err);
    }
}