import connectDB from "@/utils/connctDB";
import Customer from "@/models/Customer";

export default async function handler(req, res){
    try{ // Connected to DB
        await connectDB();
    } catch(err){
        console.log(err)
        res.status(500).json({status: "failed", message: "Error in connection to DB"})
        return;
    }

    try {
        if(req.method === "POST"){
            const data = req.body.data;
            if(!data.name || !data.lastName || !data.email){
                return res.status(400).json({status: "failed", message: "Invalid Data"});
            }
            
            const customer = await Customer.create(data);
            return res.status(201).json({status: "success", message: "Data Created", data: customer})
        }

    } catch (err) {
            console.log(err.message);
            res.status(500).json({status: "failed", message: "Error in Creating Data to DB"})
    }
}