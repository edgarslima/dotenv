

module.exports = {

    async index (req, res) {
        try {
            
            const list = [{'id': 1, 'description': 'Alabama'},
                          {'id': 2, 'description': 'Alaska'},
                          {'id': 3, 'description': 'Arizona'},
                          {'id': 4, 'description': 'Arkansas'},
                          {'id': 5, 'description': 'California'}];

            return res.json(list);
        }
        catch (e) {
            console.log('Erro', e)
        }
    }


}