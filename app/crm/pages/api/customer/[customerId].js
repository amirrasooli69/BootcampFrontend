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

    if(req.method === "GET"){
        const id = req.query.customerId;
        try {
            const customer = await Customer.findOne({_id: id});
            res.status(200).json({status: "success", data: customer})
        } catch (err) {
            console.log(err.message);
            res.status(500).json({status: "faild", message: "Error in Receving data from DB"})
        }
    }
}