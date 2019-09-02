import $ from 'jquery';
import SayHello from './components/sayhello';


$(document).ready(function() {

    new SayHello;

    $(document).on('mousemove', function(e) {
        console.log(e.pageX, e.pageY);
    });

});
