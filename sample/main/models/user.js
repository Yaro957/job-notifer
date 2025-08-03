const mongoose=require('mongoose')


const userSchema=new mongoose.Schema(
    {
        usermail:{
            type:String,
            required:true,
            unique:true
        },
        branch:{
            type:String,
            enum:['All','computer Science','Information Technology','Mechanical','Electrical','Civil','Electronics & Telecommunication']
        }
    }
);
module.exports=mongoose.model('User',userSchema);