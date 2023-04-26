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
const checkEmitterExistance=async(req,res)=>{
    const {accountId}=req.params;
    const emitter=await Emitter.findOne({accountId:accountId});
    console.log(emitter);
    if(emitter){
        try{
            return res.status(200).json({message:"This account ID already exist !"});
        } catch(error){
            return res.status(500).json({message:error});
        }
    }
    return res.status(404).json({message:"This user does not exist !"})
}

module.exports={registerEmitter,getAllEmitters,checkEmitterExistance};