angular.module('starter.services', [])

.service('myService', function() {
	this.drugs = [
            { id:'med0001', title: 'Ixprim', sub_name: 'Ixprim 37,5 mg/325 mg Comprimé pelliculé ', bar_code: 3585739, flash_code : '' },
            { id:'med0002', title: 'Amoxicilline', sub_name: 'Amoxicilline Mylan 1g 6 comprimés dispersibles', bar_code: 3400935684516 , flash_code: '01034009356845161719020010Y350' },
            { id:'med0003', title: 'Prednisolone', sub_name: 'Prednisolone Mylan 20 mg, 20 comprimés orodispersibles',  bar_code: 3400939103464 , flash_code : '010340093910346417190400111228' },
            { id:'med0004', title: 'Acétylcystéine', sub_name: 'Acétycystéine Mylan 200 mg, 20 sachets-dose de 3g',  bar_code: 3400936463233 , flash_code : '01034009364632331717110010Y1863' },
            { id:'med0005', title: 'Spifen', sub_name: 'Spifen 200 mg boîte de 30 comprimés',  bar_code: 3400936081918 , flash_code : '' },
            { id:'med0006', title: 'Doliprane', sub_name: 'Doliprane 1000 mg boîte de 8 sachets-doses',  bar_code: 3624698 , flash_code : '' },
            { id:'med0007', title: 'Maxilase', sub_name: 'Maxilase Maux de gorge, 30 comprimés enrobés',  bar_code: 3477889 , flash_code : '010340093477889617180201106A011' },            
            { id:'med0008', title: 'Vogalib', sub_name: 'Vogalib 7,5mg sans sucre, édulcoré à l\'aspartam métopimazine',  bar_code: 3400936348288 , flash_code : '01034009363482881718040010N0619' },
            { id:'med0009', title: 'Doliprane', sub_name: 'Doliprane 1000mg, 8 gélules',  bar_code: 0 , flash_code : '010340094153396917190800100553' }
        ];	
});