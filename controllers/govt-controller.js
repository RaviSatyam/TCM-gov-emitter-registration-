const govt= require("../models/Govt");

const registerGovt=async(req,res)=>{
    const isGovernment=await govt.findOne({isGovernment:true});
    console.log(isGovernment);
    if(isGovernment){
        return res.status(400).json({message:"Government already exist"});
    }
    try{
        const government=await govt.create(req.body);
       return res.status(200).json({message:"Government registered successfully"});
    } catch(error){
        console.log(error);
        return res.status(500).json({message:"Registration failed"});
    }
    
};

const getGovtDetails=async(req,res)=>{
    try{
        const govtDetails=await govt.find(req.query);
        return res.status(200).json(govtDetails);

    }catch(error){
        console.log(error);
        return res.status(404).json({message:"Government details not found !"})
    }
}

module.exports={registerGovt,getGovtDetails};