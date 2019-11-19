const express=require('express');
const signupRouter=express.Router();
function router(nav){
    signupRouter.route('/')
    .get((req,res)=>{
        res.render(
            'signupp',
            {
                nav,
                title:'SignUp'
            }
        )
    } )
    return signupRouter;
}
module.exports=router;