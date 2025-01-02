import Business from "../models/Business.js";
import Owner from "../models/Owner.js";

let response = {
    status: false,
    message: "",
    data: [],
}


export const getAllBusiness = async (req, res) => {
    try {
        const business = await Business.findAll({
            include: {
                model: Owner,
                as: 'owner',
                attributes: {
                    exclude: [
                        'password',
                    ]
                }
            },
            attributes: {
                exclude: [
                    'business_logo',
                    'video_pitch_deck',
                    'business_proposal',
                ]
            }
        });
        response = {
            status: true,
            message: "Business fetched successfully",
            data: business,
        }
        res.status(200).json(response);
    } catch (error) {
        response = {
            status: false,
            message: error.message,
            data: [],
        }
        res.status(500).json(response);
    }
}

export const getBusinessById = async (req, res) => {
    try {
        const business = await Business.findOne({
            where: {
                business_id: req.params.id,
            },
            include: {
                model: Owner,
                as: 'owner',
                attributes: {
                    exclude: [
                        'password',
                    ]
                }
            },
            attributes: {
                exclude: [
                    'business_logo',
                    'video_pitch_deck',
                    'business_proposal',
                ]
            }
        });
        if(business){
            response = {
                status: true,
                message: "Data fetched successfully",
                data: business,
            }
            res.status(200).json(response);
        }
        else{
            response = {
                status: false,
                message: "Data not found",
                data: [],
            }
            res.status(404).json(response);
        }
    } catch (error) {
        response = {
            status: false,
            message: error.message,
            data: [],
        }
        res.status(500).json(response);
    }
}

export const getBusinessLogo = async (req, res) => {
    try {
        const business = await Business.findOne({
            where: {
                business_id: req.params.id,
            },
            attributes: ['business_logo']
        });
        if(business){
            response = {
                status: true,
                message: "Data fetched successfully",
                data: business,
            }
            res.status(200).json(response);
        }
        else{
            response = {
                status: false,
                message: "Data not found",
                data: [],
            }
            res.status(404).json(response);
        }
    } catch (error) {
        response = {
            status: false,
            message: error.message,
            data: [],
        }
        res.status(500).json(response);
    }
}

export const getVideoPitchDeck = async (req, res) => {
    try {
        const business = await Business.findOne({
            where: {
                business_id: req.params.id,
            },
            attributes: ['video_pitch_deck']
        });
        if(business){
            response = {
                status: true,
                message: "Data fetched successfully",
                data: business,
            }
            res.status(200).json(response);
        }
        else{
            response = {
                status: false,
                message: "Data not found",
                data: [],
            }
            res.status(404).json(response);
        }
    } catch (error) {
        response = {
            status: false,
            message: error.message,
            data: [],
        }
        res.status(500).json(response);
    }
}
