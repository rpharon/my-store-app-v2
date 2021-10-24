import dbConnect from '../../../utils/dbConnect'
import Store from '../../../models/Store'

dbConnect()

export default async (req, res) => {
    const { 
        query: { id },
        method 
    } = req
    
    switch(method) {
        case 'GET':
            try {
                const store = await Store.findById(id)

                if(!store) {
                    return res.status(400).json({ message: 'Store does not exist.' })
                }

                res.status(200).json({ data: store })
            } catch (error) {
                res.status(400).json({ message: 'Store does not exist.' })
            }
            break;
        case 'PATCH':
            try {
                const store = await Store.findOneAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })

                if(!store) {
                    return res.status(400).json({ message: 'Failed to update this store. Make sure that store name does not exist.' })
                }

                res.status(200).json({ message: 'Store updated.', data: store })
            } catch (error) {
                res.status(500).json({ message: error })
            }
            break;
        case 'DELETE':
            try {
                //const store = await Store.deleteOne({ _id: id })
                const store = await Store.findByIdAndDelete(id)

                if(!store) {
                    return res.status(400).json({ message: 'This store does not exist anymore from the system.' })
                }

                res.status(200).json({ message: 'Store is deleted.' })
            } catch (error) {
                res.status(500).json({ message: error })
            }
            break;
        default:
            res.status(200).json({ message: 'Request method not provided.' })
            break;
    }
}