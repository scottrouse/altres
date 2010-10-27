// $Id$
/**
* 
* This file adds 'even' and 'odd' classes to list items in a table
* of class 'zebra' for easy zebra-striping via css.
* 
*/

$(document).ready(function() {
        $ ('ul.zebra li:even').addClass ('even');
        $ ('ul.zebra li:odd').addClass ('odd');
    });