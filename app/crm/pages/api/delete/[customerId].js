import Customer from "@/models/Customer";
import connectDB from "@/utils/connctDB";

export default async function handler(req, res){
    try{ // Connected to DB
        await connectDB();
    } catch(err){
        console.log(err)
        res.status(500).json({status: "failed", message: "Error in connection to DB"})
        return;
    }

    const id = req.query.customerId;
    try {
        if(req.method === "DELETE"){
            await Customer.deleteOne({_id: id});
            res.status(200).json({status: "success", message: "deleted data"})
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({status: "faild",message: "Error in deleteing data"})
    }
}