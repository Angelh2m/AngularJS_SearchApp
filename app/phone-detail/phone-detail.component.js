'use strict';

angular.module('phoneDetail').component('phoneDetail', {

    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
     
    function PhoneDetailController($routeParams, Phone) {
        var self = this;

        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]

  });


// Register `phoneDetail` component, along with its associated controller and template
// angular.module('phoneDetail')
//   .component('phoneDetail', {
//     templateUrl: 'phone-detail/phone-detail.template.html',
//     // USE HTTP and THE ROUTE PARAMS to make a http call
//     controller: ['$http', '$routeParams',

//       function PhoneDetailController($http, $routeParams) {
        
//         var self = this;

//         self.setImage = function setImage(imageUrl) {
//             self.mainImageUrl = imageUrl;
//             console.log('Yo clicked!', self.mainImageUrl = imageUrl);
//         };
          

//         $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
//           self.phone = response.data;
//           // console.log(self.phone.images[0]);
//           self.setImage(self.phone.images[0]);
//         });

//       }
//     ]
//   });

  