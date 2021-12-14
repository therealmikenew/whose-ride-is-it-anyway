const db = require('../db')
const Park = require('../models/park')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const parks = [
        { name: 'Rocky Point Amusement Park',
        hours: 'Monday: 9AM - 7PM Tuesday: 9AM - 7PM Wednesday: 9AM - 7PM Thursday: 9AM - 7PM Friday: 9AM - 7PM Saturday/Sunday: Noon - Sunset',
        location: 'Warwick, Rhode Island, United States',
        attractionsNumber: '24', water: 'YES (1)',
        image: 'https://seewesterly.com/wp-content/uploads/2020/10/925ea884126cbf9b104adad695eb12e8-800.jpg',
        deaths:12, likes:742, id:100 },

        { name: 'Busch Gardens Williamsburg',
        hours: 'Monday: 2 AM-9 PM Tuesday: 2 AM-9 PM Wednesday: 2 AM-9 PM Thursday: 2 AM-9 PM Friday: 2 AM-10 PM Saturday/Sunday: Noon- 10 PM',
        location: 'James City County, Virginia, United States',
        attractionsNumber: '54', water: 'YES (3)',
        image: 'https://images.squarespace-cdn.com/content/v1/58c4813137c581a0d28f60fa/1537120687361-91J39OSYZQ6S2759TWA9/Busch+Gardens+williamsburg%2C+va+theme+park+roller+coaster',
        deaths:8, likes:53, id:101  },

        { name: 'Lake Winnepesaukah',
        hours: 'Dawn- Dusk. Closed on Mondays.',
        location: 'Rossville, Georgia, United States',
        attractionsNumber: '38', water: 'YES (4)',
        image: 'https://i0.wp.com/amusementtoday.com/wp-content/uploads/2012/10/Lake-Winnepesaukah.jpg?ssl=1',
        deaths:46, likes:3, id:102  },

        { name: 'DollyWood’s Splash Country',
        hours: 'Monday: 9 AM-7 PM Tuesday: 9 AM-7 PM Wednesday: 9 AM-7 PM Thursday: 9 AM-7 PM Friday: 9 AM-10 PM Saturday/Sunday: Noon- 10 PM',
        location: 'Pigeon Forge, Tennessee, United States',
        attractionsNumber: '16', water: 'YES (16)',
        image: "https://www.pigeonforgetnguide.com/wp-content/uploads/2012/05/dollywood-splash-country-coupons-discounts.jpg",
        deaths:2, likes:538, id:103  },

        { name: 'Six Flags Over Texas',
        hours: 'Monday:7 AM-7 PM Tuesday: 7 AM-7 PM Wednesday: 7 AM-7 PM Thursday: 7 AM-7 PM Friday: 7 AM-10 PM Saturday/Sunday: 7 AM- 10 PM',
        location: 'Arlington, Texas, United States',
        attractionsNumber: '45', water: 'YES (3)',
        image: 'https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/c0fVlfOTNt41NxHAYyOt6RV5vRM=/1660x0/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/NOYWC6EU6K7UYKPNYAR4U4D3CU.jpg',
        deaths:11, likes:47, id:104  },

        { name: 'Hersheypark',
        hours: 'Monday: 10 AM-7 PM Tuesday: 10 AM-7 PM Wednesday: 10 AM-7 PM Thursday: 10 AM-7 PM Friday: 10 AM-10 PM Saturday/Sunday: 9 AM- 10 PM',
        location: 'Hershey, Pennsylvania, United States',
        attractionsNumber: '76', water: 'YES (2)',
        image: 'https://www.abc27.com/wp-content/uploads/sites/55/2021/04/Hersheypark.jpg',
        deaths:36, likes:7, id:105  },

        { name: 'Cedar Point',
        hours: 'Monday: 10 AM- 5 PM Tuesday: 10 AM- 5 PM Wednesday: 10 AM- 5 PM Thursday: 10 AM- 5 PM Friday: 9 AM- 9 PM Saturday/Sunday: 9 am - 9 PM',
        location: 'Sandusky, Ohio, United States',
        attractionsNumber: '72', water: 'YES (3)',
        image: 'https://nothingbutnostalgia.com/wp-content/uploads/2015/11/Cedar-Point-Entrance.jpg',
        deaths:6, likes:52, id:106  },

        { name: 'Silver Dollar City',
        hours: 'Monday: 9 AM-7 PM Tuesday: 9 AM-7 PM Wednesday: 9 AM-7 PM Thursday: 9 AM-7 PM Friday: 9 AM-8 PM Saturday/Sunday: 7 AM- 7 PM',
        location: 'Branson, Missouri, United States',
        attractionsNumber: '31', water: 'YES (4)',
        image: 'https://cloudfront-us-east-1.images.arcpublishing.com/gray/PH5YOBQNRFCMPKZZ2KROLTQ5UY.jpg',
        deaths:5, likes:44, id:107  },

        { name: 'Sesame Place',
        hours: 'Monday: 9 AM-7 PM Tuesday: 9 AM-7 PM Wednesday: 9 AM-7 PM Thursday: 9 AM-7 PM Friday: 9 AM-10 PM Saturday/Sunday: Noon- 10 PM',
        location: 'Middletown Township, Pennsylvania, United States',
        attractionsNumber: '27', water: 'YES (9)',
        image: 'https://beentheredonethatwithkids.com/wp-content/uploads/2019/07/Sesame-Place-Sign-1-1024x1024.jpeg',
        deaths:18, likes:18, id:108  },

    ]

    await Park.insertMany(parks)
    console.log("Created some parks!")
}
const run = async () => {
    await main()
    db.close()
}

run()
