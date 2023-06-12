const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
	async createUser({ body }, res) {
		try{
			const user = await User.create(body);
		if (!user) {
			return res.status(400).json({ message: 'Wrong credentials!' });
		}
		const token = signToken(user);
		res.json({ token, user });
		}
		catch(e){
			console.log(e)
		}
		
	},
}