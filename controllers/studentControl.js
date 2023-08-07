import StudentModel from "../models/student.js"

class studentControll {

    static CreateDoc =async (req,res)=>{
        // console.log(req.body);
        try {
            const {name,age,fees}=req.body;
            const doc = new StudentModel({
                name:name,
                age:age,
                fees:fees
            })
            //saving document
            const result = await doc.save()
            console.log(result);
            res.redirect("/student")
        } catch (error) {
            console.log(error);
        }
        
    }
    static getAllDoc =async (req,res)=>{
        try {
            const result = await StudentModel.find()
            // console.log(result);
            res.render("index", {result})
        } catch (error) {
            console.log(error);
        }
        
    }
    static editDocById =async (req,res)=>{
        // console.log(req.params.id);
        try {
            const result = await StudentModel.findById(req.params.id)
            res.render("edit",{data:result})
        } catch (error) {
            console.log(error);
        }
        res.render("edit")
    }
    static updateDocById =async (req,res)=>{
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            // console.log(result);
        } catch (error) {
            console.log(error);
        }
        res.redirect("/student")
    }
    static deleteDocById =async (req,res)=>{
        // console.log(req.params.id);
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
        } catch (error) {
            console.log(error);
        }
        res.redirect("/student");
    }
}

export default studentControll