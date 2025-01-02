import User from "../models/User.js";

let response = {
    status: false,
    message: "",
    data: [],
};


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        response = {
            status: true,
            message: "Data fetched successfully",
            data: users,
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
};

export const createUser = async (req, res) => {
    try{
        const {name, birth_of_date, email, phone_number, npwp, password, min_investment, max_investment, location, industry, is_representative} = req.body;
        const user = await User.create({
            name: name,
            birth_of_date: birth_of_date,
            email: email,
            phone_number: phone_number,
            npwp: npwp,
            password: password,
            min_investment: min_investment,
            max_investment: max_investment,
            location: location,
            industry: industry,
            is_representative: is_representative,
        });
        if(user){
            response = {
                status: true,
                message: "User created successfully",
                data: user,
            }
            res.status(201).json(response);
        }
        else{
            response = {
                status: false,
                message: "Failed to create user",
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

export const getUserById = async (req, res) => {
    try{
        const user = await User.findOne({
            where: {
                investment_user_id: req.params.id,
            }
        });
        if(user){
            response = {
                status: true,
                message: "Data fetched successfully",
                data: user,
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

export const signIn = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({
            where: {
                email: email,
                password: password,
            }
        });
        if(user){
            response = {
                status: true,
                message: "Sign in successfully",
                data: user,
            }
            res.status(200).json(response);
        }
        else{
            response = {
                status: false,
                message: "Failed to sign in",
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

