import { Template } from 'meteor/templating';

import './main.html';
//import '../imports/ui/body.js';



Template.body.helpers({
    tasks: [
        { text: 'This is task 1' },
        { text: 'This is task 2' },
        { text: 'This is task 3' },
    ],
});
