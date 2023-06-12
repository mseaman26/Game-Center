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
	async getAllUsers(req, res) {
		try {
		  // Using model in route to find all documents that are instances of that model
		  const result = await User.find({});
		  res.status(200).json(result);
		} catch (err) {
		  console.log('Uh Oh, something went wrong');
		  res.status(500).json({ message: 'something went wrong' });
		}
	  }
}