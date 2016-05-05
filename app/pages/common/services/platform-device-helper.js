/**
 * Created by lja on 2016-5-5.
 */

exports.platformDeviceHelper = {
	call: function (tel) {
		window.location.href = 'tel:' + tel;
	},
	mail: function (mail) {
		window.location.href = 'mailto:' + mail;
	}
};