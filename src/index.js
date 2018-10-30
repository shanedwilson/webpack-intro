import $ from 'jquery';
import 'bootstrap';

import './index.scss';

$('#click-button').on('click', () => {
  $('#text-div').append('<p>Hello World!</p>');
});
