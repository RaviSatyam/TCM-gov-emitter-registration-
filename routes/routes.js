const express=require("express");
const router=express.Router();

const {registerEmitter,getAllEmitters,checkEmitterExistance}=require("../controllers/emitter-controller.js");
const {registerGovt,getGovtDetails}=require("../controllers/govt-controller.js");
// routes for emitter
router.route("/addEmitter").post(registerEmitter);
router.route("/getAllEmitter").get(getAllEmitters);
router.route("/checkEmitterExistance/:accountId").get(checkEmitterExistance);

// routes for government
router.route("/addGovt").post(registerGovt);
router.route("/getGovtDetails").get(getGovtDetails);

module.exports=router;