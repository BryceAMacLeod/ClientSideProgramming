(() => {
    var deck;
    var cards;

    // getting a random deck of cards
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(reponse => reponse.json())
    .then(data => deck = data);


    // using the deck from the previous api call to Draw 5 cards
    setTimeout(function(){
        // getting a random 5 cards
        fetch('https://deckofcardsapi.com/api/deck/'+ deck.deck_id + '/draw/?count=5')
        
        //fetch('http://pokerhand-tester.herokuapp.com/royalflush')
        
        //fetch('http://pokerhand-tester.herokuapp.com/straightflush')
        
        //fetch('http://pokerhand-tester.herokuapp.com/fourofakind')
        
        //fetch('http://pokerhand-tester.herokuapp.com/fullhouse')
        
        //fetch('http://pokerhand-tester.herokuapp.com/flush')
        
        //fetch('http://pokerhand-tester.herokuapp.com/straight')
        
        //fetch('http://pokerhand-tester.herokuapp.com/threeofakind')
        
        //fetch('http://pokerhand-tester.herokuapp.com/twopair')

        //fetch('http://pokerhand-tester.herokuapp.com/onepair')

        //fetch('http://pokerhand-tester.herokuapp.com/highcard')
        .then(response => response.json())
        .then(data => cards = data.cards);
    }, 300); // delaying the function to make sure a deck has been retrieved

    setTimeout(function(){
        // displaying the cards on the page
        for(let i = 0; i < cards.length; i++) {
            let img = document.createElement('img');
            img.src = cards[i].image;
            document.write(cards[i].value + " of " + cards[i].suit);
            document.body.appendChild(img);
            document.write("<br>")
        } 
        // checking the cards for highest winning poker hand
        var hand = checkHand(cards);

        console.log(hand);
        switch(true) {
            case (hand.isFlush && hand.isStraight && hand[0].value === 14):
                document.write("Royal Flush");
                break;
            case (hand.isFlush && hand.isStraight):
                document.write("Straight Flush");
                break;
            case (hand.fourKind === 1):
                document.write("Four of a kind");
                break;
            case (hand.threeKind === 1 && hand.pairs === 1):
                document.write("Full House");
                break;
            case hand.isFlush:
                document.write("Flush");
                break;
            case hand.isStraight:
                document.write("Straight");
                break;
            case (hand.threeKind === 1):
                document.write("Three Of A Kind");
                break;
            case hand.pairs === 2:
                document.write("Two Pair");
                break;
            case (hand.pairs === 1):
                document.write("One Pair");
                break;
            default:
                document.write("High Card");
        }    
    }, 600)
    

    function checkHand(hand) {
        // converting the value variable to a numeric value
        hand.forEach(card => ConvertFaceValue(card));
        // sorting the cards in descending order
        hand.sort((a, b) => {
            return (b.value - a.value);
        });
        // checking the suit of a card
        hand.isFlush = checkFlush(hand);
        // checking if there is a straight
        hand.isStraight = checkStraight(hand);
    
        checkPairs(hand);
        return hand;
    }
    
    function ConvertFaceValue(card) {
        let values = {
            "2" : 2,
            "3" : 3,
            "4" : 4,
            "5" : 5,
            "6" : 6,
            "7" : 7,
            "8" : 8,
            "9" : 9,
            "10" : 10,
            "JACK" : 11,
            "QUEEN" : 12,
            "KING" : 13,
            "ACE" : 14
        }
        card.value = values[card.value];
        return card.value;
    }
    
    function checkStraight(sortedHand) {
        for(let i = sortedHand.length - 1; i > 0; i--) {
            // hand is sorted in descending order
            // checking if sequential
            if(sortedHand[i].value === (sortedHand[i-1].value - 1)) {
                continue;
            }
            else {
                // if at any point the next card is not sequential
                return false;
            }
        }
        return true;
    }
    
    function checkFlush(sortedHand) {
        const suit = sortedHand[0].suit;
        return sortedHand.every(card => card.suit === suit);
    }
    
    function checkPairs(sortedHand) {
        let pairs = 0;
        let pairValue = 0;
        let threeKind = 0;
        let fourKind = 0;
    
        // looping through the cards, except the last one
        for(let i = 0; i < sortedHand.length-1; i++) {
            // looping through the remaining cards
            for(let j = i+1; j < sortedHand.length; j++) {
            
                // if the cards are different and there is a match, and hasn't already been recorded
                if(sortedHand[i].value === sortedHand[j].value && sortedHand[i].value != pairValue){
                    // remembering what pairs have been made
                    pairValue = sortedHand[i].value;
                    // looping over the other cards to look for three and four of a kind
                    for(let k = j+1; k < sortedHand.length; k++) {
                        if(k === i || k === j) {
                            continue;
                        }
                        else if (sortedHand[i].value === sortedHand[k].value) {
                            if(threeKind != 0) {
                                fourKind++;
                                threeKind = 0;
                            }
                            else {
                                threeKind++;
                            }
                        }
                    }
    
                    if(!threeKind && !fourKind) {
                        pairs++;
                    }
                }
            }
        }
    
        sortedHand.pairs = pairs;
        sortedHand.threeKind = threeKind;
        sortedHand.fourKind = fourKind;
    }

})();

