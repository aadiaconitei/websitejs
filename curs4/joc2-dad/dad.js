var correctCards = 0;
$("html").click(function(){
    $('#message').fadeOut();;
  });
$(init);

function init() {
    
    // Hide the success message
    $('#successMessage').hide();
    $('#successMessage').css({
        left: '580px',
        top: '250px',
        width: 0,
        height: 0
    });

    // Reset the game
    correctCards = 0;
    $('#cardPile').html('');
    $('#cardSlots').html('');

    // Create the pile of shuffled cards
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    var text = ['PHP',
        'Java',
        'JavaScript',
        'HTML',
        'SQL',
        "C",
        'C++',
        'Python',
        'Pascal',
        'Ruby',
        'Fortan',
        'Cobol',
        'Visual Basic',
        'Perl',
        'R',
        'C#',
        'CSS',
        'Go',
        'Assembly',
        'Swift',
        'Kotlin',
        'TypeScript',
        'Objective-C',
        'MATLAB',
    ];

    numbers.sort(function () { return Math.random() - .5 });

    for (var i = 0; i < text.length; i++) {
        $('<div>' + text[numbers[i] - 1] + '</div>').data('number', numbers[i]).attr('id', 'card' + numbers[i]).appendTo('#cardPile').draggable({
            containment: '#content',
            stack: '#cardPile div',
            cursor: 'move',
            revert: true,
           

        });
    }
    
    
    // Create the card slots
    var words = ['1995', '1995', '1995', '1993',
    '1979',
    "1972",
    '1983',
    '1989',
    '1970',
    '1995',
    '1957',
    '1959',
    '1964',
    '1987',
    '1993',
    '2000',
    '1996',
    '2009',
    '1949',
    '2014',
    '2011',
    '2013',
    '1984',
    '1984',];
    for (var i = 1; i <= 24; i++) {
        $('<div>' + words[i - 1] + '</div>').data('number', i).appendTo('#cardSlots').droppable({
            accept: '#cardPile div',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
    }

}
function animateMessage(){
    $('#message').animate( 
        {
          left: '30%',
          top: '40%',
          width: '500px',
          height: '200px',
          display: 'block'
        });
         
         }
function handleCardDrop(event, ui) {

    //Grab the slot number and card number
    var slotNumber = $(this).data('number');
    var cardNumber = ui.draggable.data('number');

    //If the cards was dropped to the correct slot,
    //change the card colour, position it directly
    //on top of the slot and prevent it being dragged again
    if (slotNumber === cardNumber) {
        ui.draggable.addClass('correct');
        ui.draggable.draggable('disable');
        $(this).droppable('disable');
        ui.draggable.position({
            of: $(this), my: 'left top', at: 'left top'
        });
        //This prevents the card from being
        //pulled back to its initial position
        //once it has been dropped
        ui.draggable.draggable('option', 'revert', false);
        correctCards++; //increment keep track correct cards
        animateMessage();
        if(slotNumber==1){
            $('#message').show().html(' PHP cel mai tare limbaj de programare. A fost desemnat limbajul anului 2004. <br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/300px-PHP-logo.svg.png" style="max-width:150px">');
            } 
    }

    //If all the cards have been placed correctly then
    //display a message and reset the cards for
    //another go
    if (correctCards === 24) {
        $('#successMessage').show();
        $('#successMessage').animate({
            left: '380px',
            top: '200px',
            width: '400px',
            height: '100px',
            opacity: 1
        });
    }



}
