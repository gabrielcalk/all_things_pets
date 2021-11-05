const Locations = require('../models/locations')

// Parks
// Bakeries
// Restaurants
// Veterinarians
// Boarding
// Grooming/Training
// Hotel
// Retail
// Rescue
// Home Services
// Campgrounds
// Dog Beaches


// Parks

const parks = [
    {
        "type": "Park",
        "name": "Bear Creek Nature Trail",
        "address": "1535 Winter Springs Blvd, Winter Springs, FL, US, 32708",
        "phoneNumber": "(407) 327-1800",
        "website": "https://www.winterspringsfl.org/parksrec/page/bear-creek-nature-trail",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmIHW85GFf4PEWoA4zFPEDbDqkUEfYrPl4Ew&usqp=CAU"
    },
    {
        "type": "Park",
        "name": "Mead Botanical Gardens",
        "address": "1300 S Denning Dr, Winter Park, FL 32789, Winter Park, FL, US, 32789",
        "phoneNumber": "(407) 622-6323",
        "website": "https://www.meadgarden.org/visit/",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6oGzerNN_EdyWTSa1aQORsppHhx5dkQUGg&usqp=CAU"
    },
    {
        "type": "Park",
        "name": "Sunset Paddle at The Waterfront",
        "address": "The Waterfront, Orlando, FL, US",
        "phoneNumber": "(XXX) XXX-XXXX",
        "website": "https://www.airbnb.com/experiences/375034?irgwc=1&irclid=TQgQVbSebxyLRlb3ilUIIQtdUkG0ueShUTZ0xA0&ircid=5503&sharedid=&iratid=12347&c=.pi73.pk5503_15874&af=15874&iradid=730658",
        "image": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/29/67/51.jpg"
    },
    {
        "type": "Park",
        "name": "Loch Haven Park",
        "address": "777 E Princeton St, Orlando, FL, US, 32803",
        "phoneNumber": "(407) 246-2283",
        "website": "https://www.orlando.gov/Parks-the-Environment/Directory/Loch-Haven-Park",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUE96Afpl-ErVKabKUMuLleLd6Bv8pit4myw&usqp=CAU"
    },
    {
        "type": "Park",
        "name": "Summerport Dog Park",
        "address": "14491 Bridgewater Crossings Blvd, Windermere, FL, US, 34786",
        "phoneNumber": "(407) 656-3299",
        "website": "https://www.orangecountyfl.net/CultureParks/Parks.aspx?m=dtlvw&d=107#.YYKniL3MJnm",
        "image": "https://www.orlandosentinel.com/resizer/YRR9VzJCCfNfVE8b8BCwi7_UDew=/415x311/top/www.trbimg.com/img-5bbb7e25/turbine/os-1539014177-7yxn5k6peb-snap-image"
    },
    {
        "type": "Park",
        "name": "The Paddling Center at Shingle Creek",
        "address": "4266 W Vine St, Kissimmee, FL, US, 34741-4502",
        "phoneNumber": "(407) 343-7740",
        "website": "https://www.paddlingcenter.com/",
        "image": "https://photos.bringfido.com/attractions/8/3/3/15338/15338_34919.jpg"
    },
    {
        "type": "Park",
        "name": "Hound Ground Dog Park",
        "address": "1126 E State Rd 434, Winter Springs, FL, US, 32708",
        "phoneNumber": "(407) 327-5968",
        "website": "https://www.facebook.com/pages/Hound-Ground-Dog-Park/196369897041140",
        "image": "https://www.orlandosentinel.com/resizer/WAvxMCBj0IQJ0hDG-OtU3vcaDJQ=/415x233/top/www.trbimg.com/img-5bbe63e7/turbine/os-1539204067-k3xist7w4e-snap-image"
    },
    {
        "type": "Park",
        "name": "Cross Seminole Trail",
        "address": "Seminole County, Florida",
        "phoneNumber": "(407) 971-5560",
        "website": "https://www.traillink.com/trail/cross-seminole-trail/",
        "image": "https://www.bikeorlando.net/images/seminole-county/cross-sem/cross-seminole-00.jpg"
    },
    {
        "type": "Park",
        "name": "Mount Dora Dog Park",
        "address": "1200 N Unser St, Mount Dora, FL, US, 32757",
        "phoneNumber": "(352) 735-7183",
        "website": "https://ci.mount-dora.fl.us/Facilities/Facility/Details/10",
        "image": "https://ci.mount-dora.fl.us/PhotoGallery/11/Dog%20Park%20Sign%20-%20for%20web.jpg"
    },
    {
        "type": "Park",
        "name": "Buena Vista Watersports",
        "address": "13245 Lake Bryan Dr, Orlando, FL, US, 32821",
        "phoneNumber": "(407) 239-6939",
        "website": "https://www.bvwatersports.com/",
        "image": "https://www.bvwatersports.com/wp-content/uploads/2020/04/dog-225x300.jpg"
    },
    {
        "type": "Park",
        "name": "Doctor's Dog Park",
        "address": "21 N Highland Ave, Apopka, FL, US, 32703",
        "phoneNumber": "(407) 703-1784",
        "website": "http://www.apopka.net/Facilities/Facility/Details/Doctors-Dog-Park-7",
        "image": "https://www.apopka.net/ImageRepository/Path?filePath=%2Fdocuments%5CIntranet%5C21%2Fdog-park-1.jpg"
    },
    {
        "type": "Park",
        "name": "Lake Eola Park",
        "address": "512 E Washington St, Orlando, FL, US, 32801",
        "phoneNumber": "(407) 246-4484",
        "website": "https://www.orlando.gov/Parks-the-Environment/Directory/Lake-Eola-Park?",
        "image": "https://ak.jogurucdn.com/media/image/p25/place-2016-03-14-7-Lakeeolapark03d496c76b8bd060c6286476c74d83f1.jpg"
    },
    {
        "type": "Park",
        "name": "Lake Baldwin Park",
        "address": "2000 S Lakemont Ave, Winter Park, FL, US, 32789",
        "phoneNumber": "(407) 599-3334",
        "website": "https://cityofwinterpark.org/departments/parks-recreation/parks-playgrounds/parks/lake-baldwin-park/",
        "image": "https://www.bikeorlando.net/images/orange-county/baldwin/baldwin-park-1-01.JPG"
    },
    {
        "type": "Park",
        "name": "Park of the Americas",
        "address": "201 Andes Ave, Orlando, FL, US, 32807",
        "phoneNumber": "(407) 246-4484",
        "website": "https://www.orlando.gov/Parks-the-Environment/Directory/Park-of-the-Americas",
        "image": "https://lh5.googleusercontent.com/p/AF1QipM9Q8yrkvqQkCIzLmCeN2IDLSRoQFZzzV-5AYzq"
    },
    {
        "type": "Park",
        "name": "Shingle Creek Regional Park",
        "address": "925 S Bass Rd, Kissimmee, FL, US, 34746",
        "phoneNumber": "(407) 518-2501",
        "website": "https://www.osceola.org/agencies-departments/parks/parks-facilities/shingle-creek-bass-road.stml",
        "image": "https://www.osceola.org/core/fileparse.php/2609/urlt/0032102-082214_ShingleCreekSteffeeLanding.jpg"
    },
    {
        "type": "Park",
        "name": "Barber Dog Park",
        "address": "3701 Gatlin Ave, Orlando, FL, US, 32812",
        "phoneNumber": "(407) 836-6200",
        "website": "https://www.orangecountyfl.net/CultureParks/Parks.aspx?m=dtlvw&d=2#.YYKwF73MJnk",
        "image": "https://www.orlandosentinel.com/resizer/klRajkWA80l6jCGjLldkG9-TnN4=/415x233/top/www.trbimg.com/img-5c4f5fe5/turbine/os-1548705757-fytcv1dpjy-snap-image"
    },
    {
        "type": "Park",
        "name": "Constitution Green",
        "address": "300 S Summerlin Ave, Orlando, FL, US, 32801",
        "phoneNumber": "(407) 246-2121",
        "website": "https://www.orlando.gov/Parks-the-Environment/Directory/Constitution-Green",
        "image": "https://static.wixstatic.com/media/6910a6_5ac538dc0ab341cdab8ffb2e98892008~mv2.jpg/v1/fit/w_320%2Ch_480%2Cal_c%2Cq_80/file.jpg"
    },
    {
        "type": "Park",
        "name": "Center Lake Park Dog Park",
        "address": "299 Center Lake Lane, Oviedo, FL, US, 32765",
        "phoneNumber": "(407) 971-5590",
        "website": "https://www.cityofoviedo.net/Facilities/Facility/Details/Center-Lake-Park-1",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/h0IEAttaFyEd44QtUfuK0Q/o.jpg"
    },
    {
        "type": "Park",
        "name": "Minnehaha Park",
        "address": "1011 E Horatio Ave, Maitland, FL, US, 32751",
        "phoneNumber": "(407) 539-0042",
        "website": "https://maitland.recdesk.com/Community/Facility/Detail?facilityId=13",
        "image": "https://fastly.4sqi.net/img/general/200x200/208078162_0GQg8vdzwRRIM0RXdVmZxbO7on2Nb4Zrv1CvbH_2qr0.jpg"
    },
    {
        "type": "Park",
        "name": "Seminole Wekiva Trail",
        "address": " Altamonte Springs, FL, US, 32714",
        "phoneNumber": "(407) 665-2001",
        "website": "https://www.traillink.com/trail/seminole-wekiva-trail/",
        "image": "https://www.bikeorlando.net/images/seminole-county/sem-wekiva/seminole-wekiva-00.JPG"
    },
    {
        "type": "Park",
        "name": "Winter Springs Dog Park",
        "address": "900 Hicks Ave., Winter Springs, FL 32708",
        "phoneNumber": "(407) 327-6597",
        "website": "https://www.winterspringsfl.org/parksrec/page/dog-park",
        "image": "https://u.realgeeks.media/orlandohomesnorth/winter-springs-hound-ground.jpg"
    },
    {
        "type": "Park",
        "name": "Paw Park of Historic Sanford",
        "address": "427 S French Ave, Sanford, FL, US, 32771",
        "phoneNumber": "(407) 330-5688",
        "website": "https://www.pawparksanford.org/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/ZgmmQ9K3zARt6KRK_VMxfA/348s.jpg"
    },
    {
        "type": "Park",
        "name": "Longwood Arbor Dog Park",
        "address": "1405 N Grant St, Longwood, FL, US, 32750",
        "phoneNumber": "(407) 260-3484",
        "website": "https://www.longwoodfl.org/Facilities/Facility/Details/Arbor-Dog-Park-3",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/dNhJlyZ9zzkLZXAD5K5Vdg/348s.jpg"
    },
    {
        "type": "Park",
        "name": "Dr. Phillips Dog Park",
        "address": "8249 Buenavista Woods Blvd, Orlando, FL, US, 32836",
        "phoneNumber": "(407) 254-9038",
        "website": "https://www.orangecountyfl.net/CultureParks/Parks.aspx?m=dtlvw&d=66#.YYLCT73MJnl",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/0c/1c/70/7c/dogs-park-we-enjoyed.jpg"
    },
    {
        "type": "Park",
        "name": "Practice Makes Pawfect",
        "address": "20351 Northcliff St, Orlando, FL, US, 32833",
        "phoneNumber": "(407) 568-3588",
        "website": "https://practicemakespawfect.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/FGFM6EN21rDBssjH1vE4Sg/348s.jpg"
    },

    //Bakeries


    {
        "type": "Bakery",
        "name": "Woof Gang Bakery Winter Garden",
        "address": "18 E Plant St, Winter Garden, FL, US, 34787",
        "phoneNumber": "(407) 347-3802",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Bark Avenue Bakery",
        "address": "7728 W Sand Lake Rd, Orlando, FL, US, 32819",
        "phoneNumber": "(407) 345-9999",
        "website": "https://barkavenuebakery.com/",
        "image": "data:image/png;base64,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"
    },
    {
        "type": "Bakery",
        "name": "Pookie's Pet Nutrition & Bow Wow Bakery",
        "address": "1500 W Fairbanks Ave, Winter Park, FL, US, 32789",
        "phoneNumber": "(407) 622-7387",
        "website": "https://www.facebook.com/events/d41d8cd9/meet-our-pugs-pookies-bow-wow-bakery/1010601439056050/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/gpwAaQBe2PLYBF6pcqmzPg/348s.jpg"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery & Grooming",
        "address": "1210 International Parkway South, Lake Mary, FL, US, 32746",
        "phoneNumber": "(407) 878-7884",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Piglet's Pantry-Dog Bakery",
        "address": "400 N Donnelly St, Mt Dora, FL 32757",
        "phoneNumber": "(352) 735-9779",
        "website": "https://pigletspantry.com/",
        "image": "data:image/jpeg;base64,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"
    },
    {
        "type": "Bakery",
        "name": "The Purple Pooch Bakery Boutique Groomer",
        "address": "3912 Town Center Blvd, Orlando, FL 32837",
        "phoneNumber": "(407) 715-6794",
        "website": "https://www.thepurplepoochbakery.com/",
        "image": "https://www.thepurplepoochbakery.com/images/grooming01.jpg"
    },
    {
        "type": "Bakery",
        "name": "Bone Appetit a doggie bakery",
        "address": "888 Wesson Dr, Casselberry, FL 32707",
        "phoneNumber": "(407) 339-2663",
        "website": "https://www.adoggiebakery.com/",
        "image": "https://www.browncounty.com/wp-content/uploads/2018/07/BA-Sign.jpg"
    },
    {
        "type": "Bakery",
        "name": "Rick's Dog Deli",
        "address": "2404 Coolidge Ave, Orlando, FL 32804",
        "phoneNumber": "(407) 505-2839",
        "website": "https://ricksdogdeli.com/",
        "image": "data:image/jpeg;base64,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"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery & Grooming Orlando",
        "address": "5054 Dr Phillips Blvd, Orlando, FL 32819",
        "phoneNumber": "(407) 292-9663",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery & Grooming Conway",
        "address": "4574 E Michigan St, Orlando, FL 32812",
        "phoneNumber": "(407) 823-9098",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery & Grooming SoDo",
        "address": "3123 S Orange Ave Suite 104 Suite 104, Orlando, FL 32806",
        "phoneNumber": "(407) 648-9663",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery Dr. Phillips",
        "address": "7600 Dr Phillips Blvd Suite 8, Orlando, FL 32819",
        "phoneNumber": "(407) 363-5550",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery & Grooming Lake Nona",
        "address": "13832 Narcoossee Rd Suite 103-B, Orlando, FL 32832",
        "phoneNumber": "(407) 403-5491",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery Winter Park",
        "address": "918 N Orange Ave, Winter Park, FL 32789",
        "phoneNumber": "(407) 647-9663",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery Waterford Lakes",
        "address": "308 N Alafaya Trail, Orlando, FL 32828",
        "phoneNumber": "(407) 219-4805",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery & Grooming Landstar",
        "address": "13807 Landstar Blvd #106, Orlando, FL 32824",
        "phoneNumber": "(407) 734-5682",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery & Grooming Downtown Winter Park",
        "address": "180 E Morse Blvd, Winter Park, FL 32789",
        "phoneNumber": "(407) 790-7480",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery & Grooming Longwood",
        "address": "2401 W State Rd 434 #129, Longwood, FL 32779",
        "phoneNumber": "(407) 725-7297",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery & Grooming Celebration",
        "address": "671 Front St #120, Celebration, FL 34747",
        "phoneNumber": "(321) 939-2253",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery & Grooming Windermere",
        "address": "13524 Summerport Village Pkwy, Windermere, FL 34786",
        "phoneNumber": "(407) 877-3000",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery & Grooming Lake Mary",
        "address": "1210 S International Pkwy Ste 118, Lake Mary, FL 32746",
        "phoneNumber": "(407) 878-7884",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery & Grooming Lakeside Village",
        "address": "7848 Winter Garden Vineland Rd Unit 116, Windermere, FL 34786",
        "phoneNumber": "(407) 614-3477",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery & Grooming Hamlin",
        "address": "14416 Shoreside Way Suite 120, Winter Garden, FL 34787",
        "phoneNumber": "(407) 347-9263",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Woof Gang Bakery & Grooming Apopka",
        "address": "1511 Rock Springs Rd, Apopka, FL 32712",
        "phoneNumber": "(407) 703-2275",
        "website": "https://woofgangbakery.com/",
        "image": "https://ik.imagekit.io/0ofixtqpt/653750/woof-gang-bakery-grooming-orlando-florida.png"
    },
    {
        "type": "Bakery",
        "name": "Eola Pets",
        "address": "420 E Church St. 110, Orlando, Florida 32801",
        "phoneNumber": "(407) 917-7384",
        "website": "https://www.eolapets.com/",
        "image": "https://static.wixstatic.com/media/8ab9ea_1ecf92656a314ffdb8f8907d60b4f6ff~mv2.jpg/v1/fill/w_640,h_558,al_c,q_80,usm_0.66_1.00_0.01/8ab9ea_1ecf92656a314ffdb8f8907d60b4f6ff~mv2.webp"
    },

    // Restaurants

    {
        "type": "Restaurant",
        "name": "The Cellar Door",
        "address": "109 E 4th Ave, Mount Dora, FL, US, 32778",
        "phoneNumber": "(352) 735-5594",
        "website": "https://www.facebook.com/thecellardoorwinebar/",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/16/eb/25/2f/very-comfortable-staff.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Relax Grill",
        "address": "211 Eola Pkwy, Orlando, FL, US, 32801",
        "phoneNumber": "(407) 425-8440",
        "website": "https://relaxgrill.com/",
        "image": "https://www.orlandothings.com/wp-content/uploads/relax-grill.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Brick House Tavern",
        "address": "8440 International Dr, Orlando, FL, US, 32819",
        "phoneNumber": "(407) 355-0321",
        "website": "https://www.brickhousetavernandtap.com/",
        "image": "https://media.bringfido.com/images/thumbs/brick-house_.JPG"
    },
    {
        "type": "Restaurant",
        "name": "Ellipsis Brewing",
        "address": "7500 TPC Blvd, #8, Orlando, FL, US, 32822",
        "phoneNumber": "(407) 250-5848",
        "website": "https://www.facebook.com/ellipsisbrewing",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/5BVTYGwHWkFq--2KX1yi0Q/l.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Bar Louie",
        "address": "4100 N Alafaya Trail, Orlando, FL, US, 32826",
        "phoneNumber": "(407) 428-2980",
        "website": "https://www.barlouie.com/locations",
        "image": "https://images1.loopnet.com/i2/bzEQe7bnx2aXL4ZoKWPtFdvH19zBcuFPN2HtDKbpOV4/112/image.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Bar Louie",
        "address": "7015 S Semoran Blvd, Orlando, FL 32822",
        "phoneNumber": "(407)813-2500",
        "website": "https://www.barlouie.com/locations",
        "image": "https://images1.loopnet.com/i2/bzEQe7bnx2aXL4ZoKWPtFdvH19zBcuFPN2HtDKbpOV4/112/image.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Bar Louie",
        "address": "460 Orlando Ave, Winter Park, FL 32789",
        "phoneNumber": "(407) 794-9500",
        "website": "https://www.barlouie.com/locations",
        "image": "https://images1.loopnet.com/i2/bzEQe7bnx2aXL4ZoKWPtFdvH19zBcuFPN2HtDKbpOV4/112/image.jpg"
    },
    {
        "type": "Restaurant",
        "name": "White Wolf Cafe",
        "address": "1829 N Orange Ave, Orlando, FL, US, 32804-6414",
        "phoneNumber": "(407) 895-9911",
        "website": "https://www.whitewolfcafe.com/",
        "image": "https://fastly.4sqi.net/img/general/200x200/GXR591TDl8ioQEBSroDmq9Uv7JeKeEOIVsAvBR8Bp5U.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Smokey Bones Bar & Fire Grill",
        "address": "303 N Alafaya Trail, Orlando, FL, US, 32826",
        "phoneNumber": "(407) 249-2009",
        "website": "https://smokeybones.com/",
        "image": "https://www.orlandosentinel.com/resizer/z5vLEyjTZvgVbfMXOueRbIIi37w=/fit-in/415x276/smart/filters:fill(black)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/6YCO2LWX4FEFRN3VJRZISC6OA4.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Cafe Tu Tu Tango",
        "address": "8625 International Dr, Orlando, FL, US, 32819-9334",
        "phoneNumber": "(407) 248-2222",
        "website": "https://www.cafetututango.com/",
        "image": "https://lh3.googleusercontent.com/proxy/k88y6Qk8ah2UZIVAMS09n5KmV6j-PPpF8ZYNXlcAeoE_TUMQv215c8Wr2ptgcL_vAJmc8TTb-bn5RNo3GAzZF7Qj4clYlILh5LKBQ_eATqhdSPYSVjb0MSCHEtqtKw"
    },
    {
        "type": "Restaurant",
        "name": "Santiago's Bodega",
        "address": "802 Virginia Dr, Orlando, FL, US, 32803-2530",
        "phoneNumber": "(407) 412-6979",
        "website": "https://santiagosbodega.com/",
        "image": "https://b.zmtcdn.com/data/reviews_photos/0b2/39b8b3efe3e0060f34a4af0c558f00b2.jpg?fit=around|300:273&crop=300:273 "
    },
    {
        "type": "Restaurant",
        "name": "Santiago's Bodega",
        "address": "185 Spring Centre S Blvd #1080, Altamonte Springs, FL 32714",
        "phoneNumber": "(407) 960-2605",
        "website": "https://santiagosbodega.com/",
        "image": "https://www.scottjosephorlando.com/images/stories/Santiago_patio.jpg"
    },
    {
        "type": "Restaurant",
        "name": "RockPit Brewing",
        "address": "10 W Illiana St, Orlando, FL, US, 32806",
        "phoneNumber": "(407) 826-1773",
        "website": "https://rockpitbrewing.com/",
        "image": "https://www.experimentalbrew.com/sites/default/files/podcastimages/rockpit.jpg"
    },
    {
        "type": "Restaurant",
        "name": "The Hammered Lamb",
        "address": "1235 N Orange Ave, Orlando, FL, US, 32804-6411",
        "phoneNumber": "(407) 704-3200",
        "website": "https://www.thehammeredlamb.com/",
        "image": "https://photos.bringfido.com/restaurants/9/8/4/21489/21489_61759.jpg?size=tile&density=1x"
    },
    {
        "type": "Restaurant",
        "name": "Dragonfly Robata Grill & Sushi",
        "address": "7972 Via Dellagio Way, Orlando, FL, US, 32819",
        "phoneNumber": "(407) 370-3359",
        "website": "http://www.dragonflyrestaurants.com/orlando-florida/",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/12/c5/d8/85/20180427-200909-largejpg.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Vines Grille & Wine Bar",
        "address": "7533 W Sand Lake Rd, Orlando, FL, US, 32819-5109",
        "phoneNumber": "(407) 351-1227",
        "website": "https://vinesgrille.com/",
        "image": "https://photos.bringfido.com/restaurants/6/9/8/21896/21896_60953.jpg?size=tile&density=1x"
    },
    {
        "type": "Restaurant",
        "name": "Castle Church Brewing",
        "address": "6820 Hoffner Ave, Orlando, FL, US, 32822",
        "phoneNumber": "(407) 635-9410",
        "website": "https://www.castlechurchbrewing.com/",
        "image": "https://lower48beercom.files.wordpress.com/2019/02/1ced3b67-ab78-4e90-a7aa-9a4b70ac554f.jpeg?w=489&h=358"
    },
    {
        "type": "Restaurant",
        "name": "Boxi Park Lake Nona",
        "address": "6877 Tavistock Lakes Blvd, Orlando, FL, US, 32827",
        "phoneNumber": "(407) 536-9666",
        "website": "https://boxiparklakenona.com/",
        "image": "https://myareanetwork-photos.s3.amazonaws.com/bizlist_photos/t/306283_1560959585.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Houndstooth Kitchen & Eatery",
        "address": "160 Independence Ln, Maitland, FL, US, 32751",
        "phoneNumber": "(321) 972-9925",
        "website": "https://www.houndstootheats.com/",
        "image": "https://www.orlandosentinel.com/resizer/W9WL1o-0jsXaxvFLQANn54BYfI4=/415x418/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/H7SL3TVCWVEY5EN56HFMKTUZFI.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Oviedo Brewing Company",
        "address": "1280 Oviedo Mall Blvd #1095, Oviedo, FL, US, 32765",
        "phoneNumber": "(407) 542-8248",
        "website": "https://www.oviedobrewingco.com/",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/19/83/0d/bf/great-atmosphere-inside.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Fifth Avenue Streatery",
        "address": "846 E 5th Ave, Mount Dora, FL, US, 32757",
        "phoneNumber": "(352) 720-3328",
        "website": "https://www.fifthavenuestreatery.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/CLPSov1N-LCTk7_rE0E67Q/l.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Salsas Cocina Mex Titusville",
        "address": "2510 S Washington Ave Unit 110, Titusville, FL, US, 32780",
        "phoneNumber": "(321) 225-4073",
        "website": "http://salsascocinamexicana.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/oLr7GIpndyAgK6CXBSZwqw/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Lake House Bar & Grill",
        "address": "315 N Highland St, Mount Dora, FL, US, 32757",
        "phoneNumber": "(352) 735-7433",
        "website": "https://www.facebook.com/LakehouseMtDora/",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/14/2f/c9/e1/photo2jpg.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Victorio's Oyster Bar & Grille Apopka",
        "address": "464 South Hunt Club Boulevard, Apopka, FL, US, 32703",
        "phoneNumber": "(407) 682-2555",
        "website": "http://www.victoriosoysterbar.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/w6Lp-rsdlpXTgenA_bhCzQ/l.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Victorio's Oyster Bar & Grille Oviedo",
        "address": "1500 Alafaya Trail #1056, Oviedo, FL 32765",
        "phoneNumber": "(407) 366-7330",
        "website": "http://www.victoriosoysterbar.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/w6Lp-rsdlpXTgenA_bhCzQ/l.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Victorio's Oyster Bar & Grille Longwood",
        "address": "300 Dog Track Rd, Longwood, FL 32750",
        "phoneNumber": "(407) 834-9800",
        "website": "http://www.victoriosoysterbar.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/w6Lp-rsdlpXTgenA_bhCzQ/l.jpg"
    },
    {
        "type": "Restaurant",
        "name": "The Old Jailhouse",
        "address": "113 S Palmetto Ave, Sanford, FL 32771",
        "phoneNumber": "(407) 548-6964",
        "website": "https://theoldjailhousesanford.com/menus",
        "image": "https://pbs.twimg.com/profile_images/1208492540820885507/NAvEh9O0_400x400.jpg"
    },
    {
        "type": "Restaurant",
        "name": "The COOP: A Southern Affair",
        "address": "610 W Morse Blvd, Winter Park, FL 32789",
        "phoneNumber": "(407) 843-2667",
        "website": "http://asouthernaffair.com/menu/",
        "image": "http://www.orlandodatenightguide.com/wp-content/uploads/2014/04/The-COOP-Patio-Orlando-Date-Night-Guide-300x300.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee Heathrow",
        "address": "4720 International Parkway, Sanford, FL 32771",
        "phoneNumber": "(407) 688-3808",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee Altamonte Springs",
        "address": "478 N State Rd 434, Altamonte Springs, FL, US, 32714",
        "phoneNumber": "(407) 571-9160",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee Winter Park",
        "address": "1282 N Orange Avenue, Winter Park, FL 32789",
        "phoneNumber": "(407) 951-7931",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee Downtown Orlando",
        "address": "390 N Orange Ave., Orlando, FL 32801",
        "phoneNumber": "(407) 930-1700",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee Farmhouse",
        "address": "1282 N Orange Avenue, Winter Park, FL 32789",
        "phoneNumber": "(407) 951-7931",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee Hourglass District",
        "address": "2401 Curry Ford Rd., Orlando, FL 32806",
        "phoneNumber": "(407) 930-7308",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee Lee Road",
        "address": "805 Lee Road, Orlando, FL 32810",
        "phoneNumber": "(407) 755-2235",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee University",
        "address": "12001 Collegiate Way, Orlando, FL 32817",
        "phoneNumber": "(407) 663-8699",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee College Park",
        "address": "3405 Edgewater Drive, Orlando, FL 32804",
        "phoneNumber": "(407) 951-7931",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee Milkhouse",
        "address": "201 N. Bumby Ave, Orlando, FL 32803",
        "phoneNumber": "(407) 237-0575",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee Sand Lake",
        "address": "7610 W Sand Lake Rd, Orlando, FL 32819",
        "phoneNumber": "(407) 412-6704",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee Mount Dora",
        "address": "3224 State Road 44, Mount Dora, FL 32757",
        "phoneNumber": "(352) 720-5914",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee @ The Axe Trap",
        "address": "2600 Lee Road, Winter Park, FL 32789",
        "phoneNumber": "(321) 422-0522",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee Winter Park on Howel Branch",
        "address": "2451 Howell Market Lane, Winter Park, FL 32792",
        "phoneNumber": "(407) 571-9413",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee SODO North",
        "address": "1101 S. Orange Ave, Orlando, FL 32806",
        "phoneNumber": "(407) 930-1328",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee Horizon West",
        "address": "14393 Bridgewater Crossings Blvd, Suite 100, Windermere, FL 34786",
        "phoneNumber": "(407) 347-8293",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee Clermont",
        "address": "2608 S Hwy 27 S 200, Clermont, FL 34711",
        "phoneNumber": "(352) 708-4620",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Foxtail Coffee Lake Nona",
        "address": "7004 Tavistock Lakes Blvd. #116, Orlando, FL 32827",
        "phoneNumber": "(407) 733-2841",
        "website": "https://www.foxtailcoffee.com/",
        "image": "https://www.orlandosentinel.com/resizer/Wbyli_8KAqhEll-Yh3FHG6_8TUA=/415x233/top/www.trbimg.com/img-5b6325e1/turbine/os-1533224413-yibfwd4vqh-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Rock & Brews",
        "address": "6897 S Semoran Blvd, Orlando, FL, US, 32822",
        "phoneNumber": "(407) 512-9383",
        "website": "https://www.rockandbrews.com/",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/1a/97/1e/2c/rock-brews.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Twistee Treat",
        "address": "6310b International Dr, Orlando, FL, US, 32819-8214",
        "phoneNumber": "(407) 730-9843",
        "website": "https://twisteetreat.com/",
        "image": "https://img.geocaching.com/waymarking/display/f52afe96-4008-4eed-bbf9-859f311235c9.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Shula's 347 Grill",
        "address": "2974 International Pkwy, Lake Mary, FL 32746",
        "phoneNumber": "(407) 531-3567",
        "website": "https://www.shulas347lakemary.com/",
        "image": "https://b.zmtcdn.com/data/reviews_photos/c0e/f90655daa3fcc3f6b5073f559f8f9c0e.jpg?fit=around|300:273&crop=300:273;*,*"
    },
    {
        "type": "Restaurant",
        "name": "TerraMia Brick Oven Pizza and Trattoria Lake Mary",
        "address": "7025 Co Rd 46A, Lake Mary, FL 32746",
        "phoneNumber": "(407) 333-1233",
        "website": "http://terramialakemary.com/",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/02/24/33/ea/front-of-restaurant.jpg"
    },
    {
        "type": "Restaurant",
        "name": "TerraMia Brick Oven Pizza and Trattoria Altamonte",
        "address": "1150 Douglas Ave #1050, Altamonte Springs, FL 32714",
        "phoneNumber": "(407) 774-8466",
        "website": "https://www.terramiaaltamonte.com/",
        "image": "https://images.otstatic.com/prod/23688119/1/huge.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice Windermere",
        "address": "4750 The Grove Dr, Windermere, FL, US, 34786-8425",
        "phoneNumber": "(407) 217-7800",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice Hunters Creek",
        "address": "3988 Town Center Blvd, Orlando, FL 32837",
        "phoneNumber": "(407) 988-3967",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice Lake Mary",
        "address": "4355 W Lake Mary Blvd, Lake Mary, FL 32746",
        "phoneNumber": "(407) 302-9881",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice Maitland",
        "address": "433 Orlando Ave S, Maitland, FL 32751",
        "phoneNumber": "(407) 599-9991",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice Longwood",
        "address": "2491 W State Rd 434, Longwood, FL 32779",
        "phoneNumber": "(352) 197-2991",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice Oviedo",
        "address": "1024 Lockwood Blvd, Oviedo, FL 32765",
        "phoneNumber": "(407) 542-0505",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice Waterford Lakes",
        "address": "877 N Alafaya Trail N, Orlando, FL 32828",
        "phoneNumber": "(407) 277-7769",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice Winter Springs",
        "address": "1000 Willa Springs Dr, Winter Springs, FL 32708",
        "phoneNumber": "(407) 388-3788",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice Winter Park",
        "address": "6864 Aloma Ave, Winter Park, FL 32792",
        "phoneNumber": "(407) 679-2665",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice South Orange",
        "address": "3150 S Orange Ave S, Orlando, FL 32806",
        "phoneNumber": "(407) 757-0427",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice Casselberry",
        "address": "80 Golden Days Dr, Casselberry, FL 32707",
        "phoneNumber": "(407) 571-9252",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice College Park",
        "address": "2213 Edgewater Dr, Orlando, FL 32804",
        "phoneNumber": "(407) 730-4130",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice  Lee Vista",
        "address": "6017 S Goldenrod Rd Suite E, Orlando, FL 32822",
        "phoneNumber": "(407) 674-6493",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice  Orange City",
        "address": "902 Saxon Blvd Suite 103, Orange City, FL 32763",
        "phoneNumber": "(386) 218-0089",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice Deltona",
        "address": "605 Courtland Blvd Ste. 101, Deltona, FL 32738",
        "phoneNumber": "(407) 878-1090",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice Lake Nona",
        "address": "9971 Tagore Pl Suite 8, Orlando, FL 32827",
        "phoneNumber": "(407) 313-0782",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice South Deland",
        "address": "2369 S Woodland Blvd, DeLand, FL 32720",
        "phoneNumber": "(386) 624-6305",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice Mount Dora",
        "address": "3220 FL-44, Mt Dora, FL 32757",
        "phoneNumber": "(352) 729-2219",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice Horizon West",
        "address": "6536 Old Brick Rd Suite 140, Windermere, FL 34786",
        "phoneNumber": "(407) 612-5556",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jeremiah's Italian Ice Otwon West",
        "address": "3988 Town Center Blvd, Orlando, FL 32837",
        "phoneNumber": "(407) 988-3967",
        "website": "https://jeremiahsice.com/",
        "image": "https://www.restaurantnewsrelease.com/wp-content/uploads/2020/05/Jeremiahs-Italian-Ice-Awards-One-Hundred-Stores-in-Under-12-Months-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Another Broken Egg Lake Mary",
        "address": "920 International Pkwy, Lake Mary, FL 32746",
        "phoneNumber": "(321) 363-0548",
        "website": "https://anotherbrokenegg.com/location/lake-mary",
        "image": "https://www.bossiernow.com/wp-content/uploads/2021/01/AnotherBrokenEggInterior.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Another Broken Egg Oviedo",
        "address": "1079 Alafaya Trail Suite 1223, Oviedo, FL 32765",
        "phoneNumber": "(321) 765-7083",
        "website": "http://anotherbrokenegg.com/location/oviedo",
        "image": "https://www.bossiernow.com/wp-content/uploads/2021/01/AnotherBrokenEggInterior.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Another Broken Egg Winter Park",
        "address": "410 N Orlando Ave Ste N100A Ste N100A, Winter Park, FL 32789",
        "phoneNumber": "(407) 790-7868",
        "website": "https://anotherbrokenegg.com/location/winter-park",
        "image": "https://www.bossiernow.com/wp-content/uploads/2021/01/AnotherBrokenEggInterior.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Another Broken Egg Orlando",
        "address": "6324 S Semoran Blvd #1001, Orlando, FL 32822",
        "phoneNumber": "(321) 300-0907",
        "website": "https://anotherbrokenegg.com/location/orlando-fl",
        "image": "https://www.bossiernow.com/wp-content/uploads/2021/01/AnotherBrokenEggInterior.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Friendly Confines Lake Mary",
        "address": "7025 Co Rd 46A, Lake Mary, FL 32746",
        "phoneNumber": "(321) 257-0536",
        "website": "https://myfriendlyconfines.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/KceRfeaOyxQRXn293DOVJg/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Tin & Taco College Park",
        "address": "2429 Edgewater Dr, Orlando, FL 32804",
        "phoneNumber": "(407) 704-2263",
        "website": "https://tinandtaco.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/DSkXeAStajtm3el6LuF36g/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Tin & Taco Downtown Orlando",
        "address": "40 W Washington St, Orlando, FL 32801",
        "phoneNumber": "(407) 425-4340",
        "website": "https://tinandtaco.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/DSkXeAStajtm3el6LuF36g/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Tin & Taco Waterford Lakes",
        "address": "861 N Alafaya Trail, Orlando, FL 32828",
        "phoneNumber": "(407) 730-8479",
        "website": "https://tinandtaco.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/DSkXeAStajtm3el6LuF36g/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Tin & Taco Winter Park",
        "address": "223 W Fairbanks Ave, Winter Park, FL 32789",
        "phoneNumber": "(321) 316-4936",
        "website": "https://tinandtaco.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/DSkXeAStajtm3el6LuF36g/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Tin & Taco SoDo",
        "address": "419 East Michigan St, Orlando, FL 32806",
        "phoneNumber": "(407) 734-5988",
        "website": "https://tinandtaco.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/DSkXeAStajtm3el6LuF36g/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Tin & Taco Lake Mary",
        "address": "1117 International Pkwy suite 1701, Lake Mary, FL 32746",
        "phoneNumber": "(407) 878-1795",
        "website": "https://tinandtaco.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/DSkXeAStajtm3el6LuF36g/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Jax 5th Ave Deli & Ale House",
        "address": "951 Greenwood Blvd, Lake Mary, FL 32746",
        "phoneNumber": "(407) 323-3354",
        "website": "https://www.jaxlakemary.com/",
        "image": "https://content.jdmagicbox.com/us/jdcatalogue/new_york/90/0138699990/catalogue/96b70cd8f29fd3285cbe8f4c03aa8e12.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Hollerbach's Willow Tree Cafe German Restaurant",
        "address": "201-205 E 1st St, Sanford, FL 32771",
        "phoneNumber": "(407) 321-2204",
        "website": "https://www.hollerbachs.com/",
        "image": "https://www.orlandosentinel.com/resizer/k4zyRe4L06FA11khIiaWU1T0daI=/415x233/top/www.trbimg.com/img-5c634630/turbine/os-1550009899-97pwp9onpr-snap-image"
    },
    {
        "type": "Restaurant",
        "name": "Wop's Hops Brewing Company",
        "address": "419 Sanford Ave, Sanford, FL 32771",
        "phoneNumber": "(407) 878-7819",
        "website": "https://wopshopsbrewing.com/",
        "image": "https://lh5.googleusercontent.com/p/AF1QipPbnfJoNudUlbkzcj8IJipw9IqelACHtMH9rFxA=w400-h300-k-no"
    },
    {
        "type": "Restaurant",
        "name": "The Breezeway Restaurant & Bar",
        "address": "112 E 1st St, Sanford, FL 32771",
        "phoneNumber": "(407) 878-1284",
        "website": "https://breezewayrestaurantandbar.com/",
        "image": "https://sanford365.s3.amazonaws.com/2016/01/20171715/breezeway-2-300x225.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Fuel BBQ",
        "address": "120 S Park Ave, Sanford, FL 32771",
        "phoneNumber": "(407) 328-4848",
        "website": "https://www.facebook.com/FuelBBQSanfordFL/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/nXjiccD915FywJpAVaTHDQ/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "The Sanford Brewing Company",
        "address": "400 Sanford Ave, Sanford, FL 32771",
        "phoneNumber": "(407) 732-6419",
        "website": "https://www.sanfordbrewing.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/oW61ZLQSCyNKkZajf1v32g/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "4 Rivers Smokehouse BBQ Longwood",
        "address": "1869 W State Rd 434, Longwood, FL 32750",
        "phoneNumber": "(844) 474-8377",
        "website": "https://www.4rsmokehouse.com/lake-mary-longwood",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/17/60/be/e6/photo1jpg.jpg"
    },
    {
        "type": "Restaurant",
        "name": "4 Rivers Smokehouse BBQ Winter Park ",
        "address": "1600 West Fairbanks AvenueWinter Park FL 32789",
        "phoneNumber": "(844) 474-8378",
        "website": "https://www.4rsmokehouse.com/winter-park-orlando/",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/17/60/be/e6/photo1jpg.jpg"
    },
    {
        "type": "Restaurant",
        "name": "4 Rivers Smokehouse BBQ Downtown Orlando",
        "address": "400 S Orange AveOrlando FL 32801",
        "phoneNumber": "(844) 474-8379",
        "website": "https://www.4rsmokehouse.com/locations/downtown-orlando/",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/17/60/be/e6/photo1jpg.jpg"
    },
    {
        "type": "Restaurant",
        "name": "4 Rivers Smokehouse BBQ UCF",
        "address": "11764 University BlvdOrlando FL 32817",
        "phoneNumber": "(844) 474-8380",
        "website": "https://www.4rsmokehouse.com/UCF-east-orlando",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/17/60/be/e6/photo1jpg.jpg"
    },
    {
        "type": "Restaurant",
        "name": "4 Rivers Smokehouse BBQ Winter Garden",
        "address": "1047 South Dillard StreetWinter Garden FL 34787",
        "phoneNumber": "(844) 474-8381",
        "website": "https://www.4rsmokehouse.com/windermere-winter-garden",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/17/60/be/e6/photo1jpg.jpg"
    },
    {
        "type": "Restaurant",
        "name": "4 Rivers Smokehouse BBQ Kissimmee",
        "address": "874 W Osceola PkwyKissimmee FL 34741",
        "phoneNumber": "(844) 474-8382",
        "website": "https://www.4rsmokehouse.com/disney-kissimmee",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/17/60/be/e6/photo1jpg.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Shake Shack WInter Park",
        "address": "119 N Orlando Ave, Winter Park, FL 32789",
        "phoneNumber": "(321) 203-5130",
        "website": "https://shakeshack.com/location/winter-park",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/sWAG5OrcvuyDrjx07rGzAw/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Shake Shack I-drive",
        "address": "8359 International Dr, Orlando, FL 32819",
        "phoneNumber": "(407) 205-0362",
        "website": "https://shakeshack.com/location/i-drive-orlando-fl",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/sWAG5OrcvuyDrjx07rGzAw/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Shake Shack Millenia",
        "address": "4068 Conroy Rd, Orlando, FL 32839",
        "phoneNumber": "(407) 627-1101",
        "website": "https://shakeshack.com/location/mall-at-millenia-fl",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/sWAG5OrcvuyDrjx07rGzAw/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Shake Shack Vineland",
        "address": "8200 Vineland Ave Suite 1169, Orlando, FL 32821",
        "phoneNumber": "(407) 887-7037",
        "website": "https://shakeshack.com/location/orlando-vineland-outlets-fl",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/sWAG5OrcvuyDrjx07rGzAw/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "The Briar PatchRestaurant",
        "address": "252 N Park Ave #3814, Winter Park, FL 32789",
        "phoneNumber": "(407) 628-8651",
        "website": "http://www.thebriarpatchrestaurant.com/briarpatch-menu/",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/19/fd/c9/8f/20191110-100051-largejpg.jpg"
    },
    {
        "type": "Restaurant",
        "name": "The Ravenous Pig",
        "address": "565 W Fairbanks Ave, Winter Park, FL 32789",
        "phoneNumber": "(407) 628-2333",
        "website": "http://www.theravenouspig.com/general-store",
        "image": "https://photos.bringfido.com/restaurants/5511/ravpig.jpg?size=tile&density=1x"
    },
    {
        "type": "Restaurant",
        "name": "Dexter's of Lake Mary",
        "address": "1145 Townpark Ave #1201, Lake Mary, FL 32746",
        "phoneNumber": "(407) 805-3090",
        "website": "https://www.dexterslakemaryfl.com/eat",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/12/eb/ab/b2/photo2jpg.jpg"
    },
    {
        "type": "Restaurant",
        "name": "310 Park South",
        "address": "310 S Park Ave, Winter Park, FL 32789",
        "phoneNumber": "(407) 647-7277",
        "website": "https://310restaurant.com/our-menus/lunchdinner-menu/",
        "image": "https://www.orlandosentinel.com/resizer/ym9aAi2vvrffVs_pEMW9f80aXKE=/415x233/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/B7AHGC2CQNH53CT2XBO3EWSSQM.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Armando's",
        "address": "463 West New England Ave Winter Park, FL 32789",
        "phoneNumber": "(407) 951-8930",
        "website": "http://www.armandosorlando.com/",
        "image": "https://289799-893107-raikfcquaxqncofqfm.stackpathdns.com/images/stories/Armandos_sidewalk_bar.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Cocina 214",
        "address": "151 E Welbourne Ave, Winter Park, FL 32789",
        "phoneNumber": "(407) 790-7997",
        "website": "https://cocina214.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/Z_NknbrmjBS0OVROtl0Tsg/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Pepe's Cantina",
        "address": "433 W New England Ave A, Winter Park, FL 32789",
        "phoneNumber": "(321) 972-4881",
        "website": "https://www.pepescantina.com/pepes-menu",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/WejcUP1GcSZ6tdSfbglkMg/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Maxine's on Shine",
        "address": "337 Shine Ave, Orlando, FL 32803",
        "phoneNumber": "(407) 674-6841",
        "website": "https://maxinesonshine.com/",
        "image": "http://hotspotsorlando.com/wp-content/uploads/2018/09/208_Maxines-on-Shine.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Hawkers Asian Street Fare",
        "address": "1103 N Mills Ave, Orlando, FL 32803",
        "phoneNumber": "(407) 237-0606",
        "website": "https://eathawkers.com/",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkKWUuaAlPnM72cTfR2j96m4AEOHWgn_343w&usqp=CAU"
    },
    {
        "type": "Restaurant",
        "name": "Avenue Gastrobar",
        "address": "13 S Orange Ave, Orlando, FL 32801",
        "phoneNumber": "(407) 839-5039",
        "website": "http://www.avenuegastrobar.com/beer-menu/",
        "image": "https://b.zmtcdn.com/data/reviews_photos/f27/a5065ae38e5c157d4ea8c2870c70ef27.jpg?fit=around|300:273&crop=300:273;*,*"
    },
    {
        "type": "Restaurant",
        "name": "903 Mills Market",
        "address": "903 S Mills Ave, Orlando, FL 32806",
        "phoneNumber": "(407) 898-4392",
        "website": "https://903millsmarketcafe.com/",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCa_JkTrE0e3xgTHwfUELy7Uk2JoCwmN_9w&usqp=CAU"
    },
    {
        "type": "Restaurant",
        "name": "Bloodhound Brew",
        "address": "5801 Conroy Rd, Orlando, FL 32835",
        "phoneNumber": "(407) 578-5711",
        "website": "https://www.bloodhoundbrew.com/",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/0a/33/fc/03/front-entrance.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Pig Floyd's Urban Barbakoa",
        "address": "1326 N Mills Ave, Orlando, FL 32803",
        "phoneNumber": "(407) 203-0866",
        "website": "https://www.pigfloyds.com/",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/0a/cb/11/d5/pig-floyds-doing-what.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Lazy Moon Pizza - Downtown",
        "address": "1011 E Colonial Dr Suite 101, Orlando, FL 32803",
        "phoneNumber": "(407) 412-6222",
        "website": "https://www.lazymoonpizza.com/",
        "image": "https://www.orlandomagazine.com/content/uploads/data-import/e39b49d4/challengepizza.jpg"
    },
    {
        "type": "Restaurant",
        "name": "World of Beer - Downtown Orlando",
        "address": "431 E Central Blvd Ste B, Orlando, FL 32801",
        "phoneNumber": "(407) 270-5541",
        "website": "https://worldofbeer.com/locations/downtown-orlando/",
        "image": "https://fastly.4sqi.net/img/general/200x200/568207036_pANj6dyqRAyweikSdg-jlYfRLMpehgVY8kb7KAS6TFg.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Anthony's Thorton Park",
        "address": "100 N Summerlin Ave, Orlando, FL 32801",
        "phoneNumber": "(407) 648-0009",
        "website": "https://www.anthonyspizza.com/menu",
        "image": "https://i2.ypcdn.com/blob/04d6313a2a5d1cf034232282c25f8d4cf9aeac9e_400x260_crop.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Blu on the Avenue",
        "address": "326 S Park Ave, Winter Park, FL 32789",
        "phoneNumber": "(407) 960-3778",
        "website": "http://bluontheavenue.com/",
        "image": "https://fastly.4sqi.net/img/general/200x200/28396045_CD1WeRTl7pEEmdrmf_ljGiQi1P3AmOHanCW2_NFI_KM.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Burger Fi Winter Garden",
        "address": "360 W Plant St #101 Winter Garden, FL 34787",
        "phoneNumber": "(407) 554-3210",
        "website": "https://www.burgerfi.com/",
        "image": "https://www.restaurantnews.com/wp-content/uploads/2021/07/BurgerFi-Ramps-Up-Number-of-Restaurants-Under-Construction-and-Expands-Points-of-Distribution-to-RedeFine-the-Way-the-World-Eats-Burgers-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Burger Fi Windermere Village",
        "address": "5845 Winter Garden Vineland Road Windermere, FL 34786",
        "phoneNumber": "(407) 614-3476",
        "website": "https://www.burgerfi.com/",
        "image": "https://www.restaurantnews.com/wp-content/uploads/2021/07/BurgerFi-Ramps-Up-Number-of-Restaurants-Under-Construction-and-Expands-Points-of-Distribution-to-RedeFine-the-Way-the-World-Eats-Burgers-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Burger Fi Windermere at The Grove",
        "address": "4750 The Grove Drive, Suite 104 Windermere, FL 34786",
        "phoneNumber": "(407) 217-7612",
        "website": "https://www.burgerfi.com/",
        "image": "https://www.restaurantnews.com/wp-content/uploads/2021/07/BurgerFi-Ramps-Up-Number-of-Restaurants-Under-Construction-and-Expands-Points-of-Distribution-to-RedeFine-the-Way-the-World-Eats-Burgers-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Burger Fi Kissimmee - Margaritaville",
        "address": "3298 Margaritaville Blvd Kissimmee , FL 34747",
        "phoneNumber": "(321) 888-3434",
        "website": "https://www.burgerfi.com/",
        "image": "https://www.restaurantnews.com/wp-content/uploads/2021/07/BurgerFi-Ramps-Up-Number-of-Restaurants-Under-Construction-and-Expands-Points-of-Distribution-to-RedeFine-the-Way-the-World-Eats-Burgers-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Burger Fi Kissimmee - The Crosslands",
        "address": "765 West Osceola Parkway Kissimmee, FL 34741",
        "phoneNumber": "(407) 933-5557",
        "website": "https://www.burgerfi.com/",
        "image": "https://www.restaurantnews.com/wp-content/uploads/2021/07/BurgerFi-Ramps-Up-Number-of-Restaurants-Under-Construction-and-Expands-Points-of-Distribution-to-RedeFine-the-Way-the-World-Eats-Burgers-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Burger Fi Lake Nona",
        "address": "13048 Narcoossee Rd Suite 1 Orlando, FL 32832",
        "phoneNumber": "(407) 286-0242",
        "website": "https://www.burgerfi.com/",
        "image": "https://www.restaurantnews.com/wp-content/uploads/2021/07/BurgerFi-Ramps-Up-Number-of-Restaurants-Under-Construction-and-Expands-Points-of-Distribution-to-RedeFine-the-Way-the-World-Eats-Burgers-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Burger Fi Sand Lake Rd",
        "address": "7548 West Sand Lake Rd Orlando, FL 32836",
        "phoneNumber": "(407) 318-9227",
        "website": "https://www.burgerfi.com/",
        "image": "https://www.restaurantnews.com/wp-content/uploads/2021/07/BurgerFi-Ramps-Up-Number-of-Restaurants-Under-Construction-and-Expands-Points-of-Distribution-to-RedeFine-the-Way-the-World-Eats-Burgers-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Burger Fi Oviedo",
        "address": "23 W Mitchell Hammock Rd #1101 Oviedo, FL 32765",
        "phoneNumber": "(407) 604-5001",
        "website": "https://www.burgerfi.com/",
        "image": "https://www.restaurantnews.com/wp-content/uploads/2021/07/BurgerFi-Ramps-Up-Number-of-Restaurants-Under-Construction-and-Expands-Points-of-Distribution-to-RedeFine-the-Way-the-World-Eats-Burgers-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Burger Fi UCF",
        "address": "4100 North Alafaya Trail, Suite 125 Orlando, FL 32816",
        "phoneNumber": "(407) 282-4010",
        "website": "https://www.burgerfi.com/",
        "image": "https://www.restaurantnews.com/wp-content/uploads/2021/07/BurgerFi-Ramps-Up-Number-of-Restaurants-Under-Construction-and-Expands-Points-of-Distribution-to-RedeFine-the-Way-the-World-Eats-Burgers-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Burger Fi Winter Park",
        "address": "538 South Park Ave Winter Park, FL 32789",
        "phoneNumber": "(407) 622-2010",
        "website": "https://www.burgerfi.com/",
        "image": "https://www.restaurantnews.com/wp-content/uploads/2021/07/BurgerFi-Ramps-Up-Number-of-Restaurants-Under-Construction-and-Expands-Points-of-Distribution-to-RedeFine-the-Way-the-World-Eats-Burgers-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Burger Fi Lake Mary",
        "address": "3801 W. Lake Mary Blvd Lake Mary, FL 32746",
        "phoneNumber": "(407) 545-6488",
        "website": "https://www.burgerfi.com/",
        "image": "https://www.restaurantnews.com/wp-content/uploads/2021/07/BurgerFi-Ramps-Up-Number-of-Restaurants-Under-Construction-and-Expands-Points-of-Distribution-to-RedeFine-the-Way-the-World-Eats-Burgers-feature.jpg"
    },
    {
        "type": "Restaurant",
        "name": "The Porch South Orange",
        "address": "4757 S Orange Ave, Orlando, FL 32806",
        "phoneNumber": "(407) 203-2707",
        "website": "https://www.theporchsouthorange.com/menu/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/N5krXSB26dkS79MCBH3YSA/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "The Porch Winter Park",
        "address": "643 N Orange Ave, Winter Park, FL 32789",
        "phoneNumber": "(407) 571-9101",
        "website": "https://www.theporchwinterpark.com/menus/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/N5krXSB26dkS79MCBH3YSA/348s.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Liam Fitzpatrick's Irish Resaurant & Pub",
        "address": "Market Promenade Ave, Lake Mary, FL 32746",
        "phoneNumber": "(407) 936-3782",
        "website": "https://www.liamfitzpatricks.com/",
        "image": "https://pbs.twimg.com/profile_images/3227769899/38678f1f2a3ce58f123bc7a3a77c090a.jpeg"
    },
    {
        "type": "Restaurant",
        "name": "Graffiti Junktion  Lake Mary",
        "address": "950 Market Promenade Ave. #1200, Lake Mary, FL 32746",
        "phoneNumber": "(407) 732-6943",
        "website": "https://graffitijunktion.com/",
        "image": "https://fastly.4sqi.net/img/general/600x600/B-Xwgf3WFhUWeLsDsG750iM_L30fQcOtVWr3VlFS5ZQ.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Graffiti Junktion Nona",
        "address": "9344 Narcoossee Rd., Orlando, FL 32827",
        "phoneNumber": "(407) 203-1232",
        "website": "https://graffitijunktion.com/",
        "image": "https://fastly.4sqi.net/img/general/600x600/B-Xwgf3WFhUWeLsDsG750iM_L30fQcOtVWr3VlFS5ZQ.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Graffiti Junktion Curry Fod",
        "address": "4544 Curry Ford Rd., Orlando, FL 32812",
        "phoneNumber": "(407) 277-2883",
        "website": "https://graffitijunktion.com/",
        "image": "https://fastly.4sqi.net/img/general/600x600/B-Xwgf3WFhUWeLsDsG750iM_L30fQcOtVWr3VlFS5ZQ.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Graffiti Junktion College Park",
        "address": "2401 Edgewater Dr., Orlando, FL 32804",
        "phoneNumber": "(407) 377-1961",
        "website": "https://graffitijunktion.com/",
        "image": "https://fastly.4sqi.net/img/general/600x600/B-Xwgf3WFhUWeLsDsG750iM_L30fQcOtVWr3VlFS5ZQ.jpg"
    },
    {
        "type": "Restaurant",
        "name": "Graffiti Junktion  Clermont",
        "address": "2400 S HWY 27, Clermont, FL 34711",
        "phoneNumber": "(352) 432-9331",
        "website": "https://graffitijunktion.com/",
        "image": "https://fastly.4sqi.net/img/general/600x600/B-Xwgf3WFhUWeLsDsG750iM_L30fQcOtVWr3VlFS5ZQ.jpg"
    },
    {
        "type": "Restaurant",
        "name": "The Vineyard Wine Company",
        "address": "1140 Townpark Ave #1260, Lake Mary, FL 32746",
        "phoneNumber": "(407) 833-9463",
        "website": "https://www.thevineyardwinecompany.com/",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/0d/6e/d1/7c/pic-of-interior-place.jpg"
    },
    {
        "type": "Restaurant",
        "name": "F&D Cantina",
        "address": "1125 Townpark Ave, Lake Mary, FL 32746",
        "phoneNumber": "(407) 915-7012",
        "website": "https://www.fdcantinalakemary.com/menu",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/12/58/98/e7/photo1jpg.jpg"
    },
    {
        "type": "Restaurant",
        "name": "F&D Kitchen",
        "address": "1541 International Pkwy, Lake Mary, FL 32746",
        "phoneNumber": "(407) 915-5687",
        "website": "https://www.fdkitchenbar.com/",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/08/9c/24/8d/f-d-kitchen-and-bar.jpg"
    },

    // Veterinarians


    {
        "type": "Veterinarian",
        "name": "The Cat Hospital of Orlando",
        "address": "266 E Altamonte Dr, Altamonte Springs, FL, US, 32701",
        "phoneNumber": "(407) 831-9810",
        "website": "https://www.cathospitaloforlando.com/index.cfm",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/JqvPXU5nuoB8sWX5p2CAeQ/l.jpg"
    },
    {
        "type": "Veterinarian",
        "name": "Animal Medical Clinic of Orlando",
        "address": "1404 S. Bumby Ave., Orlando, FL, US, 32806",
        "phoneNumber": "(407) 898-6261",
        "website": "https://www.amcoforlando.com/",
        "image": "https://images-topvet.azureedge.net/images/24252b62-cf78-4(407) 878d-13400e6fa8bf-small"
    },
    {
        "type": "Veterinarian",
        "name": "Rocky's Retreat Canine Health & Fitness Center",
        "address": "2826 Shader Rd., Orlando, FL, US, 32808",
        "phoneNumber": "(407) 295-3888",
        "website": "https://rockysretreat.com/",
        "image": "https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto:low/remote_media/logos/orlando_fl_dog-boarding_24.jpg"
    },
    {
        "type": "Veterinarian",
        "name": "Vineland Animal Hospital",
        "address": "11402 S. Apopka Vineland Road, Orlando, FL, US, 32836",
        "phoneNumber": "(407) 233-3386",
        "website": "https://vinelandanimalhospital.com/",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWEhUYGBgaGBgYHRoaGBgYGBgYGBgaGRoYGBgcIS4lHB4rHxgaJzgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjEhJCE0NDQ0NDQ0NDQ0NDQ0NDQ0NDY0MTQ0NDQ0MT80NDQxNDQ0NDQxNDQ0NDQ0NDE0NDQ0P//AABEIANoA5wMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgECAwQFB//EAD0QAAIBAgMFBQUHAgYDAQAAAAECAAMRBCExBRJBUWEGInGBkTJSobHBE0JicoLR8JLhFCMzU6KyJHPxFf/EABoBAQACAwEAAAAAAAAAAAAAAAACAwEEBgX/xAAoEQACAgEEAQMDBQAAAAAAAAAAAQIRAwQSITEFIkFRE2GxIzJxgaH/2gAMAwEAAhEDEQA/APP4iJvnpiIiAIiIAiIgCIiAIiJhgROrg+zuJqgFKTAHi9kHxz+E3j2Lxdr2pHpvm/xW3xmvLVYYunJDa/gjkTc2hsytQ/1abIL2DEXU/qFxeacuhOM1cXYaEREmBERAEREAREQBERAEREAREQBERAETpbI2LUxB7vdQGzOdBbUKOLdJNNm7Do0bFV3n99s28uC+Ui5UZUWyEYXZGIqZpScj3iN1fVrfCdBOyWIOpQfqJPwFpO73lj1VX2mUeJA+cjuZLaiEP2SxA0KH9RHzE1l7OYne3WTd/EWG76j5Wk7/AP0KX+7T/rX95Q1A2akEHiCCPIiNzG1ED2hsGrSXfNmUalb5dSDnbrOVPUGUHI6HI+B1+EgOxtnLVqNvE/ZU83I9pgW3ERPxObAecSyKEXKXsYcaZdsTYVXEnuDdQGzOw7oPJfeboPOeg7J2BQw4BRN5/wDcexa/TgvlNzB0txAu6q2Fgi5Kg90Hj1PGbN5zGr1+TLJpOl8F0YJC8TDia4RHdtEVmP6Re0uoOSilsiVUkDQEi5A9Z59OtxMvcAghgCDqCAQfEHWRLbfY1Hu+FsjZkofYb8p+4fhJdLKlRUUs5AVQWJOQAAuSZdp9RkxSuL/ojKKfZ45WoujFKilWBsVIsQfCY56djsDhsfS30YEi4WoAQwK6qwOo6HxE8+2psurh3K1Vtnkw9huRVvoc502l1sc3plw17FEo10aURE3yIiIgCIiAIiIAiIgCIiAJ1uz+yDiHO9cIvtEZXPBAeZ16TlKpJAGZJAA5k2AHqZ6XsrBCjSRBwHePvOc2Prf0kZOjMVybVNFQBUAVQLAAWAHC3KaO1trph1u+bH2UHtHqeQ6zLtLHLRps7Z20HvMdFnm+KxL1HZ6huzHPp0HISMY2TcqOjj+0GIq37+4vuod31bUzktnrn4m59YiTorspadnYm2zQBRl3kJvYGxUnUrfUHlOPEULoku0+0++hSihW4ILsRcAj7oF851+yGC3VUW9kCq/53G6i/op525veQ3ZuE+1qonAm7Hki95z/AEgz0Tsy2/RNS1vtXd7clvuIvkiLPK8pk246RZjVvk7N5SUi85g2Tndoz/4tf/1sPWdQmc3b672GrLzpv8r/AEmzgcSKlNHH30VvMjP4zYa/RT+5H3Nm8w4zDrUR0f2XUqbZGxHA85lvKSiLadozRo7F2UmGp7iMzXYsWa1yTloNMpvugYFWAYHUEAg+IMpEm8knLdfJjaji43sphXzCFDzpnd/4m4mlT7F4dPaeo/iwW39IkoErL4a3OuFJmNsbujzjtVselh9w0iRvFgVJ3tLd4HXjI9Ov2n2h9tiHIPcQlE8AbE+JIPwnJU2IPWdVpVL6S3u2a8q3cHdwezkCj7QB2430HQCbtPY9Ene3b34EndHlNOliARcS7E7Ramh3SN46XF7czabTQ4OouBpcKaf0zFV2VRbVAPC6mRl9o1W1qN5ZD0EyUNrVkPt7w5NmD56iQMWjdxmwCM6TX/C2vk2k4zoVJDAgjIg5ESX7Ox61VuMmGq8vDmJZtTZy1Vvo40b6HmIDREYl1RCCQwsQbEciOETNmDp9mcPv4lL6Ldz+kZfEieg3kK7GD/Nc8k+bD9pMxK5dlkeiHdssWWqJTB7qLvHqzaegt6yOTf26+9iap/GR6ACaEmuit9iIiZAiJv7E2a2Jqqgvu6ufdQam/MnIePSQyZI44uUukYSt0dfYuBKYTEYkjvNTZE6LozDxJt+nrJT2YYf4WjbglvQkTcq4VGpmlayFNyw4Lawt4fSRnsxjDh3fB4g7rByUY6He4X5G1weZInN5cj1MJNdp3X2NlR2tEvvF5SUnl0y419q1AtCqzaBH/wCpA+c0+yikYSkG90keBYkfCcfbWNOMcYXDG6Ag1Kg9kAcjyHxPgZK6SKihVyVQFA5ACwm1kX08KjLtu/4K48ysyRLZW81CwuvKXlLxeDBdNHbOPFCg9S+YWy/na4X45+U3CeP89Z572v2yK7hKZuiE5jR30JHMDQes3dDppZcq44XZCckokcH85+crETrqNUvSoy+ySJazEm5JMpEyBERANnAYo03Vhpex6qbAyZSBmTXBPvU0J4op+EwZicTtFhrMrj7wsfEafD5Ss3e0QvRJ5Mp9cvrEBow9jHtVcc0+TD95MpA+y1XdxKfiVk+G8P8AqJO7yMuycejzzbybuJqjm9/6gDNCSHtjhrVEe2TpY/mT+1vSR6SRW+xETvbI7M1atmqXppzPtt+VeHiZXlz48Ubk6Ci5cI0dk7Keu3uoD3nt8FHE/KTzZdCnQG7TQKDqdWNveMy4bZdOmgSmu6BnfUk82PGa7AqbNkf5pNJajDrIuHRcoODs64aaG1dkUsStqi94CyuLBl6X4joZZQxRXqOU36VZW0Plx9J42bSZdNLdHr5LVJSXJwKWycbT7tLFqycBUUsQOGecvqbExFXLE4olOKUk3FPiePmJ37ysoeqn9r+aM7Ua2AwFOgm5SQKOPNj+I6mbUpEolKU3cuWZSroream0NpUqC71VwvIas35V1M4/aHtKtG6UrPV4k5qnjbVunrIJXrO7F6jFmOrHU/sOgnp6TxksvqnwiqeVLhEwxHbdb2p0CeruF+CgznYjtliG9hUTwUsfUyvY3DUa71MPXQNvpvo2jqVNm3W4ZMD5GSDaHYmkyKKLFHVQLnNahHFwNG6j0m246TBk2Sjz8sr3SkiDYzader/qVXYct6y/0rYes1Jt7Q2dVoNu1kKHgTmrdVYZGak9bF9Pb+nVfYrbb7EREtAiIgCIiAUMmeAW1JB+BflIeibxCjiQPXL6ybKLAAcBb0gzE5+3mtRbxX5xMPaN7Iq82+Qv9REBnDwtbcdH911b0Nz8p6UCDpoc/WeXmTzs7it+gl/aTuHy0PmpEjJGYsy7dwX21FlA7y99fzLw8xlI1s/sxXqWLj7NebDvW6J+9pNLzYpPcTQ1ubJihugWRipPk5+y9g0KFiq77++9iR+UaL6TrXlsTmcmWeR3J2bCil0XXllRAwswv8x4SsSMJyhLdF0zLVnMxGFZMxmOfEeMwK/IztzUxGCVs17p+HpPb03k1JbMy/sqlj+DFS2gR7Qv85u0sQreyfLjOLWpMh7w8+HrLN6bOTx+DOt0HX8EVOUeyRXkY7T9oDTvRonv2s7+5f7q/it6TcG0mpqWJuqgnPPTOeeu5YlmNySSSdSSbmU6Xxbhk3ZOUuhPLa4KXv8Ay+cy4XCvUYJTQu50A5czyHXSYGM9Y7M7LXD0FFu+4DOeJYi+7fkAQJu6zVLTQ4Vt9FMY7mc3sz2V/wAOy1arXqAGyr7C3Fjc6sbE8hJTKROWz5pZpbpO2XKKSpFmIoI6lKiK6nVWAIPlIF2p7KiiprYe5QZuhNyg94E6r46T0AStueY66EHUect02rnhmmnx8GJRTR4jE7varYn+GqXQf5T5ofdPFD1HDoehnCnXYcqyQUo9MoaoRESwCIiAdHYdDeqg8E73nmFknnP2NhtymLjvN3j05D0m/BOPCI92jq3dR7q5+LH+wic/G1t93fgWy8BkPhaIIMwzu9k8ZuVShPdcZdHXT1F5wpVHKkFTYggg8iMwYYR6dKq1jeamzsYKtNXHEZj3WGo9bzZlM4KScZdMtT9zbV7y6alN7GbIacvrNLLDL7Po2YyTRdEpeJpE6KystvAMAuYA5HOaFfZynNDun1X+03rxeX4dRkxO4OiMopkK7Ub1NUQkd4ljY3uq5Z+fykZnY7V4jfxLjggVB5KC3xJHlOPOt08pTxqUu2aUv3G/sTANXrogFxvBn6IrAtf5ec9O21SqvRdcO245Asb7uV8wG4Ei+c4XYAJ9i5W2/vkPz3QO55ZSVXnPeR1DedKv2lsI+k19mU3WkiVW33VQGbW7cc+PjNq8tvE8yUnJtv3J0XSssvK3kQam1dnriKT0n0YZHirDNWHLOeRVqTI7I4sysVPiCQZ7TPO+3uB3K61AMqi5n8aWDeo3TPa8RqHGTxvp/kqyR9yLxEToyoTf2ThN97kd1cz1PBfr5TUoUmdgq6n+XPSSrCYcU0CDhqeZ4mDKRsTS2tiNymbat3R56mbsjO2sVvvuj2Uy/Uc2MEmzn2iIggIiIB2eze0fs33GPccgdFfQE9DkPSTSeZSZdndp/aJuOe+g46svBvEZAyLRKL9jty+nUt4THEpy4Y5YuMlwWJ0zcvE1qdS3hM4M5jVaSWGXPXybMZqSLrxeUi80yZdeVll5So1lJ6H5SUFckjD6PL8bU36jufvO5/5GYZQGVnbY1UUjzn2dPYG1mw1UOPYayuOa31HUZmen4bFpUG9TdXH4SD6jUcNRPHYQ2NwSDzGR9RNDWePjnluun+ScZuJ7TKzzjYHaarTdUquXpkhTvG7JfLeDcQOIPCeizntVpJaeVS9y6MlJF0S3elbzVJ0VmntXZqYimadTQ5hhqjDRh+025WShOUJKUXTRho8o2vsOthiftFul8nW5Q58fdPQzmopJAUXJyAHHwns7uoUliAts76W6yHYxaJqF6VJE4XUbpa+pI0HlOn8frJ5uJLr3NeUKZztm4EU1ubFzqeX4RN2UhnABLGwGZPSeqKo1Nq4v7NDb2muB05nyEjEz47FGo5Y6aAchMEwQk7EREAREQBMuGrsjh0NmU3H7EcRMUQD0PZ+NWsgdfAj3W4ibN5Adk7RNB97VDYMvMcx+ISc0qquoZDdSLgjiJFomnZllyORLLxeVZMcckdslaJJtco21a+kTVDWmdKl/Gc7q/HyxPdDlfg2ITvsvhxcEdD8ovF5oRdNMsfKPKd22XLL0ibm1qG5XqJydreDd4fAiac7TFJSgpL3R50lyIiJYCjGwvyznslJ95VYfeVW9QDPHJ6h2Zr7+GpG+YTcPih3Z4nmYXFS+GW4e6OtK3lsTnqNguvMWJxKou85sPiegHGaWP2siZJZm8e6PE8+kj2Irs7bzkk/IcgOAnq6PxksvqnwiuUqNnH7Reqc8lGYX6tzM1JSJ0mPFDHHbFUipuys4e2sZc7inIHvdTy8pu7Uxm4tge+dOg96RyWMi2IiJgiIiIAiIgCIiAJ2NgbW+ybcqHuMf6GP3vA8ROPEBHpIMreRXs9tjdtSqHu6IxPs3+6eklMi1RNOyt4BlIkaRkypU5zMDNS8qGtpPM1PjYz9UOH/hbDLXZGe2eF3XSoNHG4fzJp8PlI3J/tnDfbUWS3eFmX8w0HS4JEgleg6G1RCh5MLeh0PlNvRKcMe2faKctXaMcRE2yAk67A4m9KonFHDDwcfupkQw2znfMDdHM5eg4zu7Loth977N2u4AY6ZAm1vUzX1en+vicUSg6dkzxWOSn7bZ8FGben7zh43arvkvcXkNT4mc9jzz6/zWUlGm8Ziw8vllsptl0S2VnpUQKzFia4RSzacBzPACXswAuTYDO/KRzH4s1Gy9keyPr5wzDZgr1i7Fm1Pw5ATHESJAREQBERAEREAREQBERAEkuwNs3tSqtnojHj+Fjz5GRqICdHpMpI9sLbO9anVOeiuePRuvWSGQomnYlZSAYfCsyVlroGFmAYciLiZ9wGae0sSKKFypYAi4FgQDxzmnDW4pT2cpljg0rObjeztJ7mn3G6HuE+B08pEkFnG9wYb3kc/rJHX7UC3+XTO9zYiw62GZkZJvmeOc3kUSr2JapvmM/wBpfTQsbKCTyAv/APJEVcjQkeBIkw7BUsqzniUS/gCx+YlOqz/QxOaV0Sh6nRu0dju2bWQdcz6CaWIpFHZDmQbSV1qyopZjYD+WHWRPEVS7sx4kmaXj9TmzycpLgsnFR4LIlLznbVx24NxD3jqfdH7z1iu6NbauN3juLoPaPM8vCcyLRI2V2IiIMiIiAIiIAiIgCIiAIiIAiIgCSPYm29KdY9Fc/BXPyMjkRQTo9HvKBwdCD5yIYDarbop1DdeBOo5KeYnTViDcZGYUSaZ3ke0YukKlN0P3lZfC41+R8pp4fGBsmyPwM2gbTR1GijkanHhotU2lT6POiCMjqMj4jIykku0+zxZmekw7xJKNlmdd1voZoUuz9cmzBVHElr+gGZm7G65KGjV2Zs96z7q5KM2bgo+pPKTbZ9JcPT3EY7oJYk2JJOpPppMeDwqUU3VyAzJOrHiTNPFYkufw8ufUxKEZqpK0Sj6S/G41qhzOQ0H1PWaspMeJrhF3m8hzPISUIRgqiqRlu+WYsfi9xcvaOg+p6SPuxJucyc5fXql2LNqfh0ExzLZW3YiImAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCdTZ+0NEqHwb6GcuJkWSmZKddl0PlwnBwW0Cnde5X4r/addHBFwbiZ7JpnRTH+8vof3mT/HrbQ/zrOZKxtQsy4jEF9chymKIJtmfGZ6Ba9QKCWNgJH8ZiS7XOnAch+8y4/F75sPYGnU8SZpyLZBsRETAEREAREQBERAEREAREQBERAEREAREQBERAEREATNhsUyHu6cRwP95hiBZIMNilcZHPiOP95nvI7hT3h+YfOSEyaJIqDORtPF7xKKchr1PLwnVqeyfAyMjSJCRWIiQIiIiAIiIAiIgCIiAIiIB//9k="
    },
    {
        "type": "Veterinarian",
        "name": "Conway Veterinary Hospital",
        "address": "4752 Hoffner Ave, Orlando, FL, US, 32812",
        "phoneNumber": "(407) 851-4752",
        "website": "http://www.conwayvet.net/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/ZxsyIx28EYTS3U3Kx4Uxvg/l.jpg"
    },
    {
        "type": "Veterinarian",
        "name": "John Young Parkway Animal Hospital",
        "address": "4020 N John Young Parkway, Orlando, FL, US, 32804",
        "phoneNumber": "(407) 295-4482",
        "website": "https://jypah.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/g4IYH0t99Tyh8NyvZmfL4A/348s.jpg"
    },
    {
        "type": "Veterinarian",
        "name": "Kirkman Road Veterinary Clinic, Inc.",
        "address": "38 S. Kirkman Rd., Orlando, FL, US, 32811",
        "phoneNumber": "(407) 297-7528",
        "website": "https://www.kirkmanroadveterinaryclinic.com/",
        "image": "https://fastly.4sqi.net/img/general/200x200/87388367_MnrhA5VEZHpthXLol8Afp4yzKW-Is29_ms92Az6w7CI.jpg"
    },
    {
        "type": "Veterinarian",
        "name": "Salazar Veterinary Hospital",
        "address": "111 Gatlin Ave, Orlando, FL, US, 32806",
        "phoneNumber": "(407) 214-0869",
        "website": "https://www.salazarveterinaryhospital.com/",
        "image": "data:image/png;base64,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"
    },
    {
        "type": "Veterinarian",
        "name": "Towne Center Animal Hospital",
        "address": "129 Bellagio Circle, Sanford, FL, US, 32771",
        "phoneNumber": "(407) 915-5730",
        "website": "https://www.townecenteranimalhospital.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/_2nko0jCXOqchQruciTWwg/348s.jpg"
    },
    {
        "type": "Veterinarian",
        "name": "Avalon Family Vet",
        "address": "3520 Avalon Park East Blvd, Orlando, FL, US, 32828",
        "phoneNumber": "(407) 275-3430",
        "website": "https://avalonfamilyvet.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/cor7ZsoN91ulwZIhUKVCww/348s.jpg"
    },
    {
        "type": "Veterinarian",
        "name": "BluePearl Pet Hospital",
        "address": "9905 S US Hwy 17-92, Maitland, FL, US, 32751",
        "phoneNumber": "(407) 644-1287",
        "website": "https://bluepearlvet.com/hospital/maitland-fl/",
        "image": "https://scontent.ftpa1-1.fna.fbcdn.net/v/t39.30808-6/251476063_124596816658998_1445212071161162308_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=WflXUCJcvOAAX-uUrKy&_nc_ht=scontent.ftpa1-1.fna&oh=18329fbce30bdb167287f7fd32f797b1&oe=61896BA5"
    },
    {
        "type": "Veterinarian",
        "name": "Dip'n Dogs Canine Hydrotherapy",
        "address": "Inquire for Address, Orlando, FL, US, 32792",
        "phoneNumber": "(407) 227-0030",
        "website": "https://dipndogs.com/",
        "image": "data:image/jpeg;base64,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"
    },
    {
        "type": "Veterinarian",
        "name": "River Oaks Animal Hospital",
        "address": "800 Miami Springs Drive, Longwood, FL, US, 32779",
        "phoneNumber": "(407) 774-1515",
        "website": "https://centralfloridavets.com/",
        "image": "data:image/png;base64,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"
    },
    {
        "type": "Veterinarian",
        "name": "Royal Pets Market & Resort",
        "address": "2316 E. Semoran Blvd., Apopka, FL, US, 32703",
        "phoneNumber": "(321) 248-7494",
        "website": "https://www.royalpetsmarket.com/home",
        "image": "data:image/jpeg;base64,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"
    },
    {
        "type": "Veterinarian",
        "name": "MetroWest Veterinary Clinic",
        "address": "2413 S. Hiawassee Rd, Orlando, FL, US, 32835",
        "phoneNumber": "(407) 295-2744",
        "website": "https://metrowestvetclinic.com/",
        "image": "https://images-topvet.azureedge.net/images/fae91868-ccd2-409a-a178-e8d8660f2779"
    },
    {
        "type": "Veterinarian",
        "name": "Veterinary Emergency Clinic of Central Florida",
        "address": "16369 West Colonial Drive, Winter Garden, FL, US, 34787",
        "phoneNumber": "(407) 644-4449",
        "website": "http://www.veconline.com/",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhISEhIQFRUWFhYYFRAWERwXFxgVFRoXFxYXFxUYHiggGB0mHxcVITEhJSkrLjEuGB81ODQsNyg5LisBCgoKDg0OGxAQGy0lHSUtLS0tLS0tLi0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcFCAECAwT/xABLEAACAQMCAwQGAg0KBQUAAAABAgMABBEFEgYhMQcTQVEUImFxk7EyVBUWFyMkMzRScoGRstEINUJTc3SCg6HTYmSSwdI2RGOz8P/EABoBAQACAwEAAAAAAAAAAAAAAAABAgMEBQb/xAA4EQACAQICBgcGBQUBAAAAAAAAAQIDEQRREhQhMUGRBRNSU2FxsTNygZKh0SIyNMHSQoKy8PHh/9oADAMBAAIRAxEAPwC8aUpQClKUApSlAKUpQClKUApSoxx3rclnbd7Fs3bwDuXcMEHPIEc+VQ3YvTpupJRW9knpVJjtcufKL4J/3K7jtbuPKL4J/wBys+r1+7lyJ0afeQ+ZF00ql/utT+UXwT/uVwe1u48ovgn/AHKjV6/dy5f+jQp95D5kXTSqTPa5c+UPwT/uVaHCWpSXNtHNIF3NnO0YHInHIk4qk4Tg0pxavmS6X4XOMotKydmnv/4ZylKVUxClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUAqE9rY/AD/aJ8nqbVDO1YfgP+Yvyaqy3fFeqNjC+2Xx9Ga+ha7ha5UV6AV7KW88upbDzxXG2vbFdSKqLng61sf2dj8Ag9x+da6kfKtjOz4fgMHuPzri9Lfmp/3fsdno/wDT1Peh6TJJSlK5ZnFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpUe42v5ILOaWJtrrjDe9gD19hqG7K5elB1JqC4tLnsJDSteB2lalz++/KvRe0rUf6z5fwrb1HE9j6r7lOsw3er5Z/xNg6h3amPwL/MX5NVYDtKv/6z5fwr59T40urlO7mIZc5xkdf1D21V4HEv+jiuKz8y9LE4WnNSdVbL8JZe6Rha71wBU/uezmRdP9K3P34G9oMDAj64xjO4CvRVa0KbWk97sjzlOnKS2cEQGuDUk4G4d9OuRG2RGo3SMPLwUHwJqwu1Dh2JbBWhjVe4YYCj+i2FbJ8fOsNTFQhUjT4v6X3GSFCUoOfBFMgfKtiuAfyGD3H5mtdqk1jx3eQII4mCqOi5B+YrU6Rw9WrKDpq9r32rwz8jodH16UKc4VJWu4tbG92lknmbDUrX5u0nUP6z5V1btK1D+s+Vc/UcT2PqvubnW4bvV8s/4mwdK16TtI1EkDvflV4cN3DyW0DucsyAs3maw1aVSlJRqK1/J+hk0YSp9ZCakr23NePFIytKUqhjFKUoBSlKAUpSgFKUoBSlKAUpSgFRjtG/IJ/8H761J6jPaJ+QT/4P31qk/wAr8jYwnt4e8vU1xA5n3mvRVrjxPvr0WvYnmJMAVzigrnNClzN3HDl3biKaaBxGSrbx6w28jzK52/rrYJL6Foe+3oYiud+fV2455r4eF5lnsbZjhg0KBgeYyAAwI9+arix4eDaxJaKzm2jJkaHe2wDkdhGcdTXCqT1m6nscLvzX3OpCLoWcdulbn9jrwBdm0up5TDP6NLkCcROVUBiVJ5fR59akXH3FdvJbNawN3002FVEBbGSOZP8A2qfd0MbcDbjG3HLHliq40Xh6O01lsrhJEZ4MjkCfpKD5jn+2qqrCrN1JLale2ds/Il0504qCex7PK5E5uze6jtpLiV402Lu7nq2B1yRyFQvFX92nXix6fMCQC+1VGeZJYZx+rNUCK6WBrTrQcp5mniacaclGORwVrzZa9a6tW8ayZ1iHMe+tmOEvyO2/s1rWmH6S1stwp+R239mvyrg9K+1h5P1O9gf0s/eX+LMxSlK5xkFKUoBSlKAUpSgFKUoBSlKAUpSgFRntE/IJ/wDB++tSaox2jfkE/wDg/fWqz/K/JmxhPbw95eprp4n316Ka8Q3M++u6tXsDzEkeopXANc1JSxK+DNY1LcLWyc4Yk7SoZVz1bJHqirf4U4cWzVizmSeU5mnY82PkPICoJ2T6xZW8cwlkWOVmGWbllBnABqa3PH2nJ/7hW/RBNcLGucqjhCNlxst/xOnhtCMVKUlfgr7iUVj9W0uO4TZIDy5q6kq6N4MrDmDXy6XxRZ3AzFPGf+EnaR+o19d3rFvEN0k0SjzLiue4yjK1nc3HKMo71YojjyxuoLjuriaWVQN0Tu5IKHlnB6HwNRmpn2mcSxXs6CHmkQI7z84k88eyoXmvTYdydJaSsziVktNqO45rqa5JroxrMUSOYT6w99bL8Kfkdt/Zr8q1nhPMe+tmOEj+B239mtcPpX2sPJ+p3cD+ll7y/wAWZilKVzTIKUpQClKUApSlAKUpQClKUApSlAKj/GunyXFpLFEMu2MDOOhBPyqQUqGrqxenN05qa4NPltNfh2X3/wCYv7a9F7Mb/wDNWr9pW1ruJ7f0j/EjRw/cx5z/AJFDDsxvvzUr5NW4GubaPvJdoXOOnjzP/athKhvamfwL/MX5NVXjcSv68uEc14F6VDDVJqDpRV77nLL3ihaV1U12Feoe88utwxSua4NQDk1K7DgC6njWWPaVPQ9KiWflWxXAP5DB7j8zXK6Sr1aTgqcrXvwXhmmdjo6lSlTnOpBSs4pXb46WTWRVJ7ML781K8m7ML/8ANWr+pXO1zE94+Ufsbuhhu5jzn/IoBezK/BztWrq4ctWitoI3GGVAGHkaytKxVKlSrLSqSvby/ZIs5w0NCEFFXvsu/Di2KUpVDGKUpQClKUApSlAKUpQClKUApSlAKUpQClKUAqGdqv5F/mJ8nqZ1Cu1g/gJ/tE+TVWW74r1RsYX2q+PoyhENdxXihruDXsnvPLJbD0rgmuua4JqAkGPyrYzs+/IYPcfnWuDGtjezv8hg9x+dcTpZfip/3fsdro/9PU96HpMk1KUrlmcUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFR/i/QjeQCFZAnrhslc8hnljI86kFKhq5enNwkpR3oqYdj/wDzCfDb/wAq7fciH1hPhn+NWvSs3X1u8lzYvDu4fJH7FU/chH1hPhn+NcHsgH1hPhn+NWvSnX1u3LmxeHdw+SP2KlPY/wD8wnw2/wDKrC4a0o21ukJcOVz6wGBzOemazFKxylObvKTfm7k9Z+FxUYpPbsilu3bhSlKgxilKUApSlAKUpQClKUApSlAVt2rDVLaGS9s711jTbvte5jO1eSl1cqSeZyQfDPlUX7IOJ9R1G6dbjUHxEqyej9xH99TOHG4KCoGU6c/WFXTeWySo8UihkdWR1PQqwKsD7wTWrUDSaFrHrbiIJcH/AOSBx18MkowPlkeygLw7Wru7trQ3dreNAYtoMPdI4lLuqgZYEgjJ6e2vq4X0vUzZH0q/f0mZY2DdxGfRz9IoAAA5I5HPQ5x51jNflXU9UsrRCHtrVRezsDlWZhi2XI/S3Y8VY1Y1Aa/6DxlrFxqg01r/AG/fpojMttEfxIc5ClfHZ5+NTfW7bWrSS1eO+a7ia4iSeMWcausbsAW9QH1ccifDOaqnQYZn4jkWCVYpTd3eyVo+8C474nKZG7IyOvjVu8E2V1aXWrT6hKrK3o7C8IEcTIiSZIBOECgqD8zQHrxlcak+oWdpYz9wkkUjzSmFZAoQgZ9YdeYAGfGq/wC0fi/V9Lu1tl1AygxLJva1iXmzOuMBT+b/AK1fMbAgEYIPMEdCDWuP8of+dE/usf78tAWDr32atPQ5lvzcRSTwJMnokasqyMMkbQcr4efOvPti1nUdOVLq2vNsckgj9HNuh2nYW3ByCTnaeR86s6x/Fx/oL8hVW/yj/wCb7f8AvS//AFS0B9HA51XULGO7OqmNnLjZ6FEyjaxUc+R8Kz3AkuovFeRX7nvo5njjuO5CqybV2ugwA4ySf9Krfh3RdSn0ODuJ1eEyg+hLABIVWfLfft3PBG7GByFXil3GXaIOhkVQzRhhuCtkKSvUA4OD7KAo/XeLNXtdUTTTfhg0sCCb0aMHbMVGSuMZG7p7KynH3EGsaO8EhvIrqGQsNr2yocqASrbPMHkQfCox2l7/ALZI+62d53tns3527/ve3djnjOM4p2oXt3JfW1vrBWO3U7g9qpIKPyaRd+SSMDIPTBwPOAXjw/qvp1lFcR5iM0WQcBijnIPI8mwR49apzVuMdZg1T7GC+Rj30UYmNtGOUoUhiuOoDjI8xV3aFZQw28MVvjuVRRHg5BTGQd3jnOc+OaoDiv8A9Vj+9Wn7kNAXJxJZ36WJMF9ieFXdpmt0xMFDHaV6J7x5VV/AHbFP6R3WpSK0UmAs2xV7pvAttAyh8T4dauziD8luf7GX9xqpzVOzoX+kWN1bKBdJbR5ToJkA+j+mPA+PQ+YkEz7V76+tbQ3tndiNY9geHuUcOJHVQwdgcEbhy6YzUp4btriO3QXVx38p9ZpRGEHMA7Qq+A58+ta3Qcby/Yu50q4DH8WIGI9ZDHKjNE2fABTjy6e7ZfUL9La2eeQ4SKIu3uRc8vM0BWPH/aZJZ6rbW8bjuItvpagA7u86jOCRsXawwRknBq24nBAIIIIBBHQg9DWsHGK2c9jBeC5ge+klkkuYgx3FZzlVwf6sBVx7TVy9jHEHpemxqxzJb/eXz1wo+9n/AKcDPmDQEQ7WOJ9V0uePur7dHP3johtowYwG5JnB3ABgMnnyr6db1LWbbTIdUTUVkVo4Xkge0jXb320DawHPBcdcVif5Sv42w/Qm/eSsdxzfaqmkWMMq23ocsUAEkQYsdqq0aS7uh5A8hgletAWr2WcZHU7VpJEVJon2SBfonIyrKD0B58vMGq57R9a1zSpkX095IZATHN6PEOY+kjDZyIyD7Qf2WP2UafZxafG1kzukpLu7kd4ZOQYOByUrjGB5eOcnKcc8NR6jZyWz4DH1opCM7JVztb/Ug+xjQEf7IdWnvbBp57wzSszKV7tF7hlJAHqgbsrsbn51HtBOsXOpXVsmqM1tauqyXXo8XrOQCYlXbjcDuU8+WPaBVacEa9fafdTWkCjvZybYxM2AtwW7tHzz9ZWJ9h51sjwjw+ljapbodxGWkkPWSVubux8ST/oAPCgM1/8AutK7UoBVLfyhuGt0cOoIOaYim/QY5jb9TFl/xr5VanEeri0tpbhkLiMAlAcE5IHU++q9l7YrdgVaylYHqpdCD7wRWalh6tVXhG5SVSMXZsyXYjw+bbT1nk/G3W2Qk8yIgNsC58tvrAeG6pxqkkyxO1uiSSgepG77FJyOrgHHLJ6VWy9s9uOQtJQByx3icvZXf7tEH1Sb4i1l1DEdhlOvp5kZ0vs91qDUfsiI7NpO9klMZnO3Mu8MucZxhzUk4103XtQtzbCGygjYjvNlyWZwOYXJUYGRzHjXcds0H1Sb4i1x92iD6rN8RaajiOwxrFPMsu2jKxovLKqB15ZAx1qlOPez/V9TuvSWis4sIsaoLgt6qliCSV5n1j4VIPu02/1WX4i0PbRB9Vm+ItNQxHYY6+nmTvht7owgXcUMUi4XEUpkUqAMNkqNpJzy59OvOoT2s8NajqQS3githDG4kErTkOzbWUgrtwoG4+fhXmvbNAelpN8RaHtmg+qTfEWo1HEdljWKeZzwbpuuafaparbWEgQsVdrllPrEtggLz6mvt4F0HUobrULy+7hpbhUEapJ6uU3YTp6qgbR418P3Z4Pqs3xFp92e3+qy/FWp1DEdhjWKeZHde4C1m61EaiY7JXV4nWMTkqO527QTtyfo86mnHfCE2rWCLKkMV5GdyYkLoD0ZN+AdrDHhyIHXFY77ssH1Wb4i0PbLB9Vm+ItRqOI7LGsU8z7uzjS9WsYDbXKW0kaIxgYTncG/oxH1fodefh7ahmqdn+sz6l9ku7s1k72OQR9+So7oKFGduTyUc6kp7ZYPqk3xFp92WD6rN8VanUcR2WNYpZkn4gOpS2OyGC2FzKrJIrTkpGGVgWVtvrnpy5dfGvLs6sb+2tktb2O3AhRUikilLFlGeTKQMEDaM551HfuywfVZviLQdskP1Sb4i1Go4js+g1inmfN2q9lxvHF3ZKgnLDvYiwVZP+ME8gw8fP39cz2j6Tqd1FHa2iW3cERtMZJSGco2e6xjATkuT49Pfjz2zQfVZviLT7s0H1Wb4i1OoYjsMaxTzJNxHp9xcadJELW2M8sex4TLiNNwIJWQLk7eRHIVAezfgnV9LuS+21eGXasyd+c7Qch19X6SgtgeOT7xmB2ywfVZviLT7s1v9Wl+ItRqOI7DHX08zG9p/BWqarOhWK0SOHvFjPfks6swwzDb6pIUcvDzNSjTOHJ7jTG07UIoU2xJFHJFIXzsUbZSCo2sCFOPHn4ViR2ywfVZviLXH3Zrf6rL8RaajiOwwq9PM+Hs24R1jSpWQi0ktpHXvF78grggGVBt+lt8PHA6Yqztc1iGzha4uH2RJjc+0tjcQo5KCTzI8Kr8ds0H1Wb4i11btmtzyNpKfZ3iVOo4jsMdfTzKZTWohrAvct3Pp/f528+67/vM7fPb4VtTourw3kKXFu++J87X2lc7SVPJgCOYI5iq5+7BbfUZP+pP4VNuC+Ikv7czJE0QDsmwkH6IU55fpVjqYarTWlNWRaNWEnZMkNK4pWuZCL9p3813n6C/vpWt9bH9p/8ANd5+gv76Vrdmu70V7KXn+yNDF/mXkW7w/PK2gtIk0EUqSBEuZdiKiCVAFLlT4ErzHjWHt9YmXVbaGQxyNA0kEkwRR38frP6y4wOg5jyrHWfFtsunHT3t52RiGeQTqG37lfK+pyGVHI5rpZcTWcTWuy0m227SvzuFLySSALl32dAM8hjwoqEk53he7lbYuKzvfwtuIlUTSs9yJFxnoCXzWN/bALDdKoncDlEEUu0jeAwiup9qKPGvftB1LZpmny2iiBZCCoCLu2ou6MEkHnyB99Q2Dixo7KewiVxBJJuUtIC6REgyRZ24O4jr/wATdc19uv8AFdrdWltaejXCJb7Qji4XcVA2sD6mMkf61McPUUoKSvGL8N3jfl8A6kbNrj9yf8WrPm0Nvc28H3iSWSMqm+Uxqr4WMr6w5EHBGAaw/ZZqbXM2oFljCsvfLFhSqSSFs7WIzjp7OVR7iXi+zvu4E1pcgQgqoS5UblO3IYlM/wBEcxg176Xx5bwT3U62kg79UjEYmUKkcahQANnXqc1hWGn1Lhofi+Ged9vx3E9bHTTv/tj7+JVK6PE1+I5LuR/vE8aqfVyG9aWMbT6m738uuK78WR/YmzsorTaks+WluAis7lQhwCwOAS/7BUd0viqGO1msZoJJrdmLQgzASRDr9LbgnPMHHifA1xNxTFc20NtfRTOYM91cQyKH24xtdXG08gOfsFZVh6iaTi3FSba4NNbLLwyKupF7U9tj7NTmvQbGaS0e3eKQq9x3CokjTOuGIxjcRkHl1PKpnxvNPBdNLDPbJFDbrK1kQheUiQq2Y9uQhBA3g8iByqCazxjFcLYwm3kSG0I2gXAZ3CKqrlimAfVGevU178QcXWV7cx3M1pcbkCrsW5UKwViwDDZnqT0NUeHqScXKG5O+58dm9/XhcacUmk8jL8Ca5B6Pcreoht5LgRgFQVi9IEjkFsZ25HXwznkOnGraRcaXDqAjbdbvGjQSlFYgvIiOpbH0tjY9owajWo8RW0sN0no8qvPN3wYTLtRlyEULt+iATnz9ldRxfI2nyafKC65TupN3NFRgxRs9Ry5eXSsrw09LSUdjkrxeWzavFbeZXrI2s3w2P9iU8Sw/YrT7RbXaks/Oa5CgucKGwGYHAy37B7ajy8XuvokyxIJo3k79xCoS4RtnJsDG7C88ew+NdftrintIrS+ilcQ/ibiGQLIoAwFYOCrDHLPsHlmsfq+txS28NtDB3SQu7BjLvZ94UEv6o9bIzy5dBjlVqVB7qkLu7u/B/V+VvETmt8XwXMsbiR41kttZikXuO4Ki32jLyNnu4wMcgSzFieY7v21V297q4XvGG+aVFZ9oABdguQo5ADy9lSDUeLLeTT47BbeZRGQySmdSd4ycsNvMeseQxUSV8EEHBBBBHUEcwRV8LRlBO6s9yvlwKVpqTVvN+ZY/aFetpskFpZbYUWIOxCKxkZmZcuWB3fROfPNccH6wJ9UtO7iWJHthHNCIlCM8YlYsgx0yRz68qwuscV298sTXsExnjXb3sEyqsi9cOrqdvPxGepr0sOM4Uu7e6Nqy+jwCGKGOf1QBvG5iy5Pqv+0VgWHl1VnB6Vnd7Nre7jt+JkdRad9LZf6GP4+uGbULrcRhJCiDAAVV6AYHvqY8Y6lKuj6fMrASSsneSCNcthHYZ5eaqeXlUcbiiy9Jnu/RJ2llEmA1wpRGkUqWVdntPXNNZ4striyt7L0e4VICux+/UsQoKnd6mOYY/rxV3TlJ004bI2vuy88yNKK03ff9yYXtnbavF6ONsd/DDDIH2hQ/exxyNyXqmWwfEHB9+Kk1G7S/0iGb1WMcYmjMac2eWSN92BzyI15j3jrUS1biBGuYrq0WW3kRUHOUP+KRY0xyHIqoBBzmslqHGiT39tfSwPmGNB3SSABpUZmDZIPqZbp15Vjjhaqila6s9my6bTXJvcWdWL28b80S59KS912aGcK0NtGrpDtAU5EXIgDmNzEnPkKiT8Yyi+bvkjktlnZRZ9yhVURiqbBjO8YBznmffXS744I1D7IW0TRuw2yxSSBkdQFXAwAV5KD48wP1+P2xWKXQvY7OYy953hhe4XuVcnczLhdzc8kA4AOOXLFWhh5JfjhdaKSWT4+V3turiU09z4kVlI3NgEDJwD1AyeWKvPsP/m9/7xJ+7HVG3c+93fGNzM2M5xuJOM+PWrx7D/5vf+8Sfux1PSSth/ihhvaFiUpSuCdA+a9tI5kaOVFdG+kjDII68x+qsT9punfU7X4QrP0qVKS3OwaTMD9p+n/UrX4K/wAK85eGdMTAa1slz0DRoM+7PWpFVRcIW0V3ca0dTSOSaOVk2TAN3VuNxTuw30V5Ahh1wDk9anrJ5vmNFZE9l4X01cbrSzXPTMaD511h4Z0x87LWybHXbGhx+yqcuJppuFne5BbZcqLWSTm/dbkAIY8+plX3DHSrZ4M0URGWdre1heTYi+jfi3gQAxsQMAtlnG7AOAPKnWTzfNjRjkdNd07SLNBJc29mgZgqjuAzOx6KiKpZj7ADXy2UejSypALSJJXBKwy2LROQBuJCyIOWPHpnl1qPdpGY9a0eeYgWwbaHb6Cy7iTk9AT97P8Ah9lTTVdTtPTbCF8Pcu0xh2sMxr3TF2YA/RIXA688eVNOeb5saMcjn7X9K+r2H/Sleg4X00nb6JZ7h1Xu0yP1VWGk6ZA95rSvBYNbLcjv3kwrxQbZC7Q4HIgjOQQc86zPF2kSXF96ZpsgS7htIJ4lAA79HeUMsgPM5RUAz54OOoac83zY0Y5E1PDemc/way9X6X3tOXv8q4Xh3SyQBbWJJ6AImT7hUR7PIbbUlvZ5rVYy13E0sBUD77DEmVcY9Zd5c4bxY555r5+zfQrSa41MmGLMGo74WVQCmwkqFI6LywR0NOsnm+Y0Y5E2XhzSycC2sSfABEJ/ZXq3CmngZNnaAeZiX+FUlrNooOuGO3t+7S8izcqPvtqm85khRV5jrnDDrVhcfXBubCKytZJZmng3mWJO9ZoYlBDMAwwJH2Lk+bdadZPN8xoxyJRLwxpq43WtmuemY0HzrsnCunMARZ2hB6ERKR8qrLi/XE1DhoTuEaaNoUfIG5JldUcj80suT7mNWnpt9bIYLSMxq/c70hQchEmxSQF5KMsoA/hTTnm+bGjHIj/Ea6LY7PSraCMPyVhZM6k/m7kQgN7Dzrtp8WjTSGFbSJXCd4VmsHg9QELuBmjUHmwHKsB/KFf8CtACAfS0I/VHLzx4is7eaZKLLUmvZIbkMkxgk2ABYTEhCY/o/fEzgE8wD7mnPN82NGORmYuFtObmtpZkeYiQ8/1CuH4Z00MFNrZhj0UxoCfcOpqN9ml/DBpFiAY1km3LGmOck7NJgEDqfVGSfAczUT4dghn0bVLq7Eb3itcl5pMGaOVFBiVWPrJhvogY58qac83zY0Y5FoS8M6Yv0rWyX3xoPnXP2r6bt3eiWe387ukxj39KqziMyzadoEt1Gj3DXUS5l+k8ZJ2iRiCcMAhbkfPFZ3s/ij36zBMqRMXYPpfIwRx7D68ecBlfPM7R0HLmKdZPN82NFZEz+13S8Z9GscdM7ExnyzXeHhjTXGUtbNh5rGh+Qqnra2i+1GVtke/vg27aN2/0hEznru2EjPly6VINTjW31DQ/seqJJMqi6jhAVXgAj3PKq8jhTIQSP6PsppzzfNjRjkWF9qenZx6HaZ647pc4/ZXb7T9P+pWvwV/hVb6lxI8Wr22okyeiTNJZF2j2xCJW9R1kJw26QO+cclXxq5FOadZPNjRWRgvtN076na/CFZHTdNht12QRRxJknYihRk9TgePIV9tKhyk97Ysjilc0qCRSlKAVidT4cs7lg9xbW8rAYDSRKxx5ZI6eystSgMbf6JbTokc0EMiJzRHjDKpxj1VIwOXKvqtLVIkWONFRFACoowqgeAA6CvopQHy39jFOhjmjjkQ9UdQyn3g18em8P2luAILaCLDFhsiVSGI2k5A64JHurLUoCPvwZppJJsbMk5JJt05knJzy586++DRrdJe/WCES7QnfCMB9gAAXd1xgDl7KyNKA+SKyjXvCsaKZDukIUDe2AuWx1OABk+VfNpmgWluWNvbQQlhtYxxKhKjoDgcxWUpQGIteG7OIuY7W2QyKVkKwqN6tzKtgcwfbS14asom3R2tsjbSm5YlU7G6rkDofKsvSosDBDhDTwuwWVptzu29wmNwGAcY645V9GmcO2lsxe3treFiMFo4lUkeRIHSsrSpBi9T0G1uSrXFvBKyghWkiVyAeoBI5CvRtItzD6MYYu4wF7jYO72jmBs6YzWQpQGFteFbCJ1kjs7VHU5V1gUMp8wQOVd7vhuzllE0lrbPICD3jQqWyOhyRzIrL0oDGanoNrclTcW8ExUEKZI1fAPUDI5dK4uNCtZHLvbwM5Tuy5iUsYyMFCcZK45Y6VlKUBhRwtY92YvRLXuywcxdyuwuBtDbcYzjlmvWx4ftIA4htreMOMOEiVdwPIhsDmPZWVpQGFk4XsWjSFrS2MSFikRhUopb6RVcYBPjWUhiVFCqAFUAKoGAABgADyAr2pQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAf/Z"
    },
    {
        "type": "Veterinarian",
        "name": "24/7 Animal Hospital of Orlando",
        "address": "8742 White Road, Orlando, FL, US, 32818",
        "phoneNumber": "(407) 298-3805",
        "website": "https://pet911vet.com/",
        "image": "https://s3-media0.fl.yelpcdn.com/bphoto/iv8XP72o_2igdxArxc6pag/l.jpg"
    },
    {
        "type": "Veterinarian",
        "name": "Integrative Animal Hospital of Central Florida",
        "address": "255 Orange Blvd., Sanford, FL, US, 32771",
        "phoneNumber": "(407) 833-8868",
        "website": "https://www.iahcf.com/",
        "image": "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/767cfa4643a5db309423b4137b078914"
    },
    {
        "type": "Veterinarian",
        "name": "Animal Hospital at Baldwin Park",
        "address": "946 Lake Baldwin Ln, Orlando, FL, US, 32814",
        "phoneNumber": "(407) 897-8555",
        "website": "https://www.animalhospitalatbaldwinpark.com/",
        "image": "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/767cfa4643a5db309423b4137b078914"
    },
    {
        "type": "Veterinarian",
        "name": "Reunion Veterinary Hospital",
        "address": "7950 Lake Wilson Rd, Davenport, FL, US, 33896",
        "phoneNumber": "(863) 588-4200",
        "website": "https://reunioncelebrationvet.com/",
        "image": "https://images-platform.99static.com/6ZH9Ck_7CLFoGvukRBIUwDmXunQ=/500x500/top/smart/99designs-contests-attachments/33/33887/attachment_33887999"
    },
    {
        "type": "Veterinarian",
        "name": "Bear Lake Veterinary Clinic",
        "address": "3030 East Semoran Blvd, Suite 274, Apopka, FL, US, 32703",
        "phoneNumber": "(407) 801-2727",
        "website": "https://www.bearlakevet.com/",
        "image": "data:image/jpeg;base64,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"
    },
    {
        "type": "Veterinarian",
        "name": "Pet Paradise Animal Hospital",
        "address": "1224 E Semoran Blvd, Apopka, FL, US, 32703",
        "phoneNumber": "(407) 315-1235",
        "website": "https://www.petparadiseah.com/",
        "image": "data:image/png;base64,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"
    },
    {
        "type": "Veterinarian",
        "name": "Dr. Phillips Animal Hospital",
        "address": "7600 Dr Phillips Blvd, Orlando, FL 32819",
        "phoneNumber": "(407) 352-2579",
        "website": "http://www.drphillipsanimalhospital.com/",
        "image": "https://fastly.4sqi.net/img/general/200x200/3984934_ECFeNJODfPd9H8_IVr-WRx6LGpiFDs97YgtyhW5oouo.jpg"
    },
    {
        "type": "Veterinarian",
        "name": "Underhill Animal Hospital",
        "address": "4900 Lake Underhill Rd, Orlando, FL 32807",
        "phoneNumber": "(407) 277-0927",
        "website": "https://www.underhillanimalhospital.com/",
        "image": "https://i3.ypcdn.com/blob/725902af464670786582515dc6582b3c42a5653a"
    },
    {
        "type": "Veterinarian",
        "name": "Oviedo Veterinary Care and Emergency",
        "address": "3011 W State Rd 426, Oviedo, FL 32765",
        "phoneNumber": "(689) 689-6100",
        "website": "https://oviedovetcare.com/",
        "image": "https://pbs.twimg.com/profile_images/913070918326349824/tLMRB3rn_400x400.jpg"
    },
    {
        "type": "Veterinarian",
        "name": "Downtown Pet Hospital",
        "address": "110 Weber St, Orlando, FL 32803",
        "phoneNumber": "(407) 872-2228",
        "website": "https://www.downtownpethospital.com/",
        "image": "https://m.downtownpethospital.com/images/woman_and_cat.jpg"
    },
    {
        "type": "Veterinarian",
        "name": "SODO Veterinary Hospital",
        "address": "1751 S Orange Ave, Orlando, FL 32806",
        "phoneNumber": "(407) 841-3407",
        "website": "https://sodovet.com/",
        "image": "data:image/png;base64,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"
    },

    // Boarding