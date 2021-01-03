'use strict'
/* Example let's follow along */
const aairlines = {
    airline: 'American Airlines',
    code: 'AA',
    bookings: [],
    // book:function(){

    // }
    book(flightNum, passName) {
        console.log(`${passName} booked a seat on ${this.airline} fligth ${this.code}${flightNum}.`);
        this.bookings.push({ flight: `${this.code}${flightNum}`, passName });
    },
};

aairlines.book(345, 'Mike');
aairlines.book(222, 'Peter');

console.log(aairlines);

const southwest = {
    airline: 'SouthWest',
    code: 'SW',
    bookings: [],
    // we do not want to repeat line 10 all over again!
    //let's try to do it a different way.
};

 // this will not work because we already learned about 'this' keyword.
const book = aairlines.book;
// book(23, 'Steve');


/*****************  Call method ********************/

// let's try to tell JS explicity we want to point to the main object.
book.call(southwest, 23, 'Steve'); // this keyword is set to southwest!!
console.log(southwest);

/* Let's try to do it again  */

book.call(aairlines, 798, 'Beverly');
console.log(aairlines);

const qatarairways = {
    airline: 'Qatar Airways',
    code: 'QA',
    bookings: [],
    
};

book.call(qatarairways, 500, 'Beverly');
console.log(qatarairways);

/*****************  Apply method ********************/

// Aplpy method does not receive a list of arguments after this keyword!
// instead it takes an array of the arguments

const flighData = [130, 'James'];

// explanation ===> book.apply(this keyword pointing to, array of arguments);
book.apply(qatarairways, flighData); 
console.log(qatarairways);

// another way to get the same result as apply!
// spread operator!

// book.call(qatarairways, ...flighData); //uncomment after checking above

/*****************  Bind method ********************/
