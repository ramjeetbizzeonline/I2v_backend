var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport( {
	service: 'Gmail',
    auth: {
        user: 'digitalm@milestone101.com',
		pass: 'fvrfwaobcqafucdb'
    }
});

module.exports = {
	sendMail: async (data,cb)=> {
		console.log("=========data===",data.to)
		var message = {
			from: 'Milestone Team <contact@milestone101.com>',
			to: data.to,
			subject: data.subject
		};

		if(data.text) message.text = data.text;
		if(data.html) message.html=data.html;
		// if(data.link) message.attachments = [
		// 	{   // use URL as an attachment
		// 		filename: 'Report.pdf',
		// 		path: data.link
		// 	}
		// ]

		
		transport.sendMail(message, function(error){
			if(error){
				console.log("send mail error--",error)
				cb(error);
			}else{
				cb(null, {status:1})
			}
		});
	},
	// sendMailByAdmin: async (data,cb)=> {
	// 	var message = {
	// 		from: 'Offer Check Team <test@applify.co>',
	// 		bcc: data.bcc,
	// 		subject: data.subject
	// 	};
		
	// 	if(data.text) message.text = data.text;
	// 	if(data.html) message.html=data.html;
	// 	transport.sendMail(message, function(error){
	// 		if(error){
	// 			cb(error);
	// 		}else{
	// 			cb(null, {status:1})
	// 		}
	// 	});
	// }
}