// var waypoint = new Waypoint({
//     element: document.getElementById('basic-waypoint'),
//     handler: function() {
//       notify('Basic waypoint triggered')
//     }
//   })

$(document).ready(function(){
    $('.col-lg-3-BottomImage4').waypoint(function(direction){
        $('.col-lg-3-BottomImage4').addClass('animated animate__backInLeft');
    },{
        offset: '400px'
    })
});