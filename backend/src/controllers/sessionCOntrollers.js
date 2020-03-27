const conn = require('../database/dbconnect');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await conn('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong){
            return response.status(400).json({ error: 'No ONG found with this Id' });
        }

        return response.json(ong);
    }
}