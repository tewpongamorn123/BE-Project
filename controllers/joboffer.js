const Joboffer = require('../models/Joboffer');

exports.getJoboffers = async (req, res, next) => {
    try {
        const Joboffers = await Joboffer.find();
        res.status(200).json({success: true, data: Joboffers});
    } catch (err) {
        res.status(400).json({success: false, message: err.message});
    }
};

exports.getJoboffer = async (req, res, next) => {
    try {
        const Joboffer = await Joboffer.findById(req.params.id);
        if (!Joboffer) {
            return res.status(400).json({success: false, message: 'Joboffer does not exist'});
        }
        res.status(200).json({success: true, data: Joboffer});
    } catch (err) {
        res.status(400).json({success: false, message: err.message});
    }
};

exports.createJoboffer = async (req, res, next) => {
    try {
        const Joboffer = await Joboffer.create(req.body);
        res.status(201).json({success: true, data: Joboffer});
    } catch (err) {
        res.status(400).json({success: false, message: err.message});
    }
};

exports.editJoboffer = async (req, res, next) => {
    try {
        const Joboffer = await Joboffer.findByIdAndUpdate
        (req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({success: true, data: Joboffer});
    } catch (err) {
        res.status(400).json({success: false, message: err.message});
    }
};

exports.deleteJoboffer = async (req, res, next) => {
    try {
        await Joboffer.findByIdAndDelete(req.params.id);
        res.status(200).json({success: true, data: {}});
    } catch (err) {
        res.status(400).json({success: false, message: err.message});
    }
};
