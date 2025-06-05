 export const validateLoginOrRegister = (req, res, next) => {
	const data = req.body;

	if(!data){
		res.json({
			success: false,
			msg: 'что-то не так с данными'
		})
	}

	next();
 }