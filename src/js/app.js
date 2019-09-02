import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import SayHello from './components/sayhello';

svg4everybody();

$(document).ready(function() {

    new SayHello;

    $(document).on('mousemove', function(e) {
        console.log(e.pageX, e.pageY);
    });

});
