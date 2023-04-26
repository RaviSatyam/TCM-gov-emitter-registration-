const Emitter= require("../models/Emitters");

const registerEmitter=async(req,res)=>{
    try{
     const emitter= await Emitter.create(req.body);
     return res.status(200).json(emitter);
    } catch(error){
        console.log(error);
        return res.status(500).json({message:"Registration failed !"})
    }

    // const {name, accountId, description, email} = req.body;

    // const emitter = new Emitter({
    //     name,
    //     accountId,
    //     description,
    //     email
    // })

    // try{
    //      await emitter.save();
    // }catch (err) {
    //     console.log(err);
    // }
    // return res.status(200).json({ message: "Details added successfully" });
};
const getAllEmitters=async(req,res)=>{
    try{
     const emitterList=await Emitter.find(req.query);
     return res.status(200).json(emitterList);
    } catch(error){
        console.log(error.message);
       return res.status(500).json({message:error.message})
    }
};

module.exports={registerEmitter,getAllEmitters};