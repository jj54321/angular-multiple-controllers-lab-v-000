function ContactController() {
	this.name = 'Bill Gates';
	this.phone = 'Founder';
	this.email = 'bill@microsoft.com';

  var vm = this;

  this.changeName = function () {
    vm.name = 'Something else!';
  }
}


angular
	.module('app')
	.controller('ContactController', ContactController);
