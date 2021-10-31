import dbConnect from "../../../utils/dbConnect";
import Store from "../../../models/Store";
import Email from "../../../pages/api/stores/email"

dbConnect()

export default async (req, res) => {
    const { method } = req

    switch(method) {
        case 'GET':
            try {
                const stores = await Store.find({})

                if(!stores) {
                    res.status(400).json({ message: 'Failed to get stores.' })
                }

                res.status(200).json({ data: stores })
            } catch (error) {
                res.status(500).json({ message: error })
            }
            break;
        case 'POST':
            try {
                const store = await Store.create(req.body)

                if(!store) {
                    return res.status(400).json({ message: 'Store already existed. You cannot add a store with the same name.' })
                }
                
                try {
                    await new Email(store).sendMagicLink()

                    return res.status(200).json({
                        success: true,
                        message: 'Check your email.'
                    })
                } catch {
                    return res.status(500).json({
                        success: false,
                        message: 'Error sending email. Please try again.'
                    })
                }

                res.status(201).json({ data: store })
            } catch (error) {
                res.status(500).json({ message: error })
            }
            break;
        default:
            res.status(400).json({ message: 'Request method not provided.' })
            break;
    }        
}