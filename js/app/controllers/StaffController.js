function StaffController() {
	this.name = 'Bill Gates';
	this.phone = 'Founder';
	this.email = 'bill@microsoft.com';

}


angular
	.module('app')
	.controller('StaffController', StaffController);
