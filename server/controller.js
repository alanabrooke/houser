module.exports = {
    getHouses: async (req, res) => {
        const houses = await req.app.get('db').get_all_houses()
        console.log(houses)
        return res.status(200).send( houses )
    },

    addHouse: async (req, res) => {
        const { property_name, address, city, state, zip } = req.body
        req.app.get('db').new_house([property_name, address, city, state, zip])
        return res.sendStatus(200)
    },

    deleteHouse: async (req, res) => {
        const { id } = req.params
        req.app.get('db').delete_house(id)
        res.sendStatus(200)
    }
}