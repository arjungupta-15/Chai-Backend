const asyncHandler = (requestHndle)=>{
 (req,res,next)=>{
    Promise.resolve(requestHndle(req,res,next)).catch((err)=>next(err))
 }
}

export {asyncHandler}

/*
const asyncHandler = (fn )=> async (req,res,next)=>{
    try {
        
    } catch (error) {
        res.status(error.code || 500).json({
            sucess:false,
            message:error.message
        })
        
    }
}
*/