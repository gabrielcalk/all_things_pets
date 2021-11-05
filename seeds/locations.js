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

