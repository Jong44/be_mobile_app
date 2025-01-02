import Investment from "../models/Investment.js";

let response = {
    status: false,
    message: "",
    data: [],
}

export const getInvestments = async (req, res) => {
    try {
        const investments = await Investment.findAll();
        if(investments){
            response = {
                status: true,
                message: "Data fetched successfully",
                data: investments,
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

export const createInvestment = async (req, res) => {
    try {
        const { investment_user_id,bussinessowner_id,business_id,investment_name, amount } = req.body;
        let filename = "";
        if(req.file){
            filename = new Date().toISOString().replace(/:/g, '-') + req.file.originalname.replace(/\s/g, '');
        }
        const payload = {
            investment_user_id,
            bussinessowner_id,
            business_id,
            investment_name,
            amount,
            contract: filename != "" ? `uploads/${filename}` : null,
            status: "Need To Review",
        }
        const investment = await Investment.create(payload);
        if(investment){
            response = {
                status: true,
                message: "Data created successfully",
                data: investment,
            }
            res.status(201).json(response);
        }
        else{
            response = {
                status: false,
                message: "Data not created",
                data: [],
            }
            res.status(400).json(response);
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

export const getInvestmentById = async (req, res) => {
    try {
        const investment = await Investment.findOne({
            where: {
                investment_id: req.params.id,
            }
        });
        if(investment){
            response = {
                status: true,
                message: "Data fetched successfully",
                data: investment,
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

export const updateInvestment = async (req, res) => {
    try {
        const investment = await Investment.update(req.body, {
            where: {
                investment_id: req.params.id,
            }
        });
        if(investment){
            response = {
                status: true,
                message: "Data updated successfully",
                data: investment,
            }
            res.status(200).json(response);
        }
        else{
            response = {
                status: false,
                message: "Data not updated",
                data: [],
            }
            res.status(400).json(response);
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

export const deleteInvestment = async (req, res) => {
    try {
        const investment = await Investment.destroy({
            where: {
                investment_id: req.params.id,
            }
        });
        if(investment){
            response = {
                status: true,
                message: "Data deleted successfully",
                data: investment,
            }
            res.status(200).json(response);
        }
        else{
            response = {
                status: false,
                message: "Data not deleted",
                data: [],
            }
            res.status(400).json(response);
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
