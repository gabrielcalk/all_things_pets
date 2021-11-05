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
        "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABR1BMVEX////7uhPxZyL8///7twD+//37uAD5///8uRH9/O37ugD7vCX+/v/6zWL8tgD6zGr89+n8txX8/Pb846YAAAD8sw36wjb835z97cf97M/70Xv7xj/2xDX3vA/7ylT847X8x0778d/71oPvXACCgYH09PTxWADvYRD81XnNzc2xsbHg4ODX19cwLy/Dw8P/+PL528eioaF5eHhcW1v77eb339XsaCD1zrz3uJ/yk2nzZCPvg1bxm3XveDzycDj52pCTk5NHR0coJiZUUlPxqILtZAn4waj50sT4uJj4i1fyqpHuekX01r70nn/vkWnufUr3wZ/2pYfzlXD83NL0iWL1dUXzcB76xrj0pXrqjlvwlxnxeRnzo0nyuKf1jRn34Yz83az4rir2kwD612L6xnTtYCnvqmf29tn5pxTz6rv4zEdsamsZFxjorW+FAAATCUlEQVR4nO1b+VvbSJqWXSrJhyzsMj4I2GDLtow5bMAXviAcxoGkmSSkyex098xOby/tkP//5/2+KkkYQ8Bkkyb7bL15YmSpqlRvfXdJVhQJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJif8DIPCP/1GoAZ9UEd8RlBhUIUSpNwj58gA/PFj96F3vaHRZqzNKEJS6lyhjOiHVj8fHH6lBHxrkhwapWSXLtu2mf/ChNzxp1JknL6Lr9da7ge23B+wHYkipYSgzT4dSqjd2/UDR77c7NvwdXLxpt+pVUF5aH/YGFl7o1ojy4+gp1QlynBGE6qCI9cvRq4G/eWxbFtAsWZbV7522d5uWH2EP6Y9DDzA8qhN9VoYk2mjUq5QASzDIRq1WO7L9g/YZ8AR5dvwCzdc/FEPyrvSqFUX1m4FmtVlC/Wyev201uGbqu7b9hrwu+T00Ox2rp3//ec8Own4q2YNRg83i4UkDLA2NECTm/9AdtWrNjt3NvbX8E7Ct0Q8lQ6pXd+2OZV8Mq483Niipt0bdQROVEv5bfvCpdhM+bvjZ5y3Kvv+8nwT6tuQHv3jcq4FFshlmxxonrb99PAMf4/ffll7J/7Z2W0Up02fR/+8Kg+qvuZuwS4NRnTyurRgywAUTog9vKIK6Ni/aDXBCU6Hn5PTZJUoJI/ULGziCk/DvntQx86IPhkjdgOsGZX3BDp2o/QHDfz0ahFBxIzOq0H7pcvZ4+/2gk1YXgzXAGhy9Z+RRxQKO5Mh2GaJRlkqgtYOz7seG7kkNVq9fGhH9CSH3+8BAvWvtQgyH2XYs61W7/rg7ZDknAoJ6vj0dtX8dIn4dtkdRV2YGYe2mfdEeVvVnEeNN7mgQA8uC6mXPLtkdIFmyfrqsQgaDNidawbFBILemPN9Wcq3Ti6YtnOdRFC5PmC/ESVgyiolcqw8BtGOVRsqzyJBOLSxUQ3q1dtq1MaxDbn1xEuXVg5i2ga4FONYbraNXA5unpkiwX9Pv5kSEMEb0WheUt7vbH3Rz0/7nL0G9ezKhiiBDiq5dV4r1Vq+LyYtt9XeHNXAfHI3a+5PRbvfD4BgMFuTcxCAIKlgn9/hK/fLsw5seDNF9TfVivao/iz9tlKzajcuERdaZN1vaGH48b/o7QlSD/oD7EozyUxHw3f1T11E7bX+39ayRon5sn1UnCnQS7TUbIlyDTeqQz328yVWa/vtgj/T7PZJeewsZ6y5o6vMlcFSp9julv+nC0OAj+tayOscNvk1BWGPY61sTAuvcy9C/236PFTCm7cYkF0MnVb99oT9nrQ9z2oUpdnePhifv3zfevxlY3PG/ab0eXXxAT3I/pykh2v5+d9SoUzKdCxmsV+o9q45CqtaEsICFesmyufcQsVtY2xdkdgeY7Fl2H2RZn8pHdXZSf9YqitQH9h8Q+3jGxTcljnliwst2y7KmfcqXCGKux9eluduG6IIqTrnCQh3yvNmaPiz5S3V+WEWIiNDAuv2k1bq8bLUGM1Fs/nzMVwVlaVlnR60oeJcfogKmtWZzqBtiP5A4ULjPETiaSYj+GiFGvXW628RtDBSmv99rNdxa8zmFSGk9p7uHmJpBRuOlJqBgbXfbBapd2/6yWQ6G4GZ0nVUxT+gjTYiEzbN3rXqRgco+Y7RQMBH7YrJIhlbTTat7w/bfm9YXKVqDXo1BQgeKQOuN4bvzAS6JXTo+6w0b7FYt9dcCUm23pDHgL0zvclirKzw2KtWjkvCmttWLKrpO6m1IUvz+zh1Zckdl9Y9AWbGax87RVrvX5C7Lsvy94XuFZxA5qDufq9gHM9SDl+/QUVjWz/1Xr16dHXMbhIK42xBrAP/f98DG7qY24gy40o81GMepnAmpnwx7x1aJO+dXo5Ncr2SV3j9edX4nVGvvBlgZooQ6wuY6Qv+G3pa9QVGQ51MxpIM7b44sLXuw+7qKpg06Yegg+Gr99Wi3z0NPE0JQs/4NZBhkHtB7PJJS4Kxp9X2vL1g1kSKSBJbHIK/zNsx3IjOHQaO1v/s7IgaC8OxBq9podwcdvofKK/3BbgsdD1B09vVpvd468sPyNQeN/zU9QHlxxUUkn7p6eOuAMsJqp2clUceK2N/5A6beP7/ojVoNeisRoyQPo2az4f/4By4BqF+zB+UjVFzR2ugVxIqOY7j2xbABEvSWBjLfS1iC0uibBMlIwuciYJqJueiDjqxx2nToWdabXxKIFFGEsyGoApNaRZUlDYaN+XyZxJ+nvd3TyypUuQbk1rjHT0/au8c88ANPq9QfnbgMYSBGWk2raee+CcMQzCAQMH0BzlJbit5WVAIzAmVDArW3fZF+lqz+aYuRuRB0MJe/ODRVMu7ihULB+1qQxvBNU7AEITd3IVCCLBmKmdR7dqn27RiGVlYWBUUzPzVNvdU9Ozs7/+lNl9uefew/H9VhEkSZUx9mSK5UTz/Uhfub4NOa9rsPPM3tdI793XajCqvJGu0aqX+bNFww1NIsOFZRjloSZWiI3SQDjyCsdXiqzf3CxRDoYdamewwdxaTT+k3GJqpHAEaNmXHc8aCKk5VR52GhgY/qIJg22hd9Xn3ZJeusV2v8ZJW6uMXDGxt8ZHHIP/jTS+rseYFdPLxTyxn6zDR0SaLJxEJRPgbfROL/Gj1nF9f/4e0JEybHty5chtRg4uH1VO1KUqjGiQwqhxqBZlSktDg9tERd53N1ymm98etPwM9u8n2QUr+h3yS+4tBw7iNO4mNJkRIbyoNFs5AhZ5g10d1oUV7rBuPlpUwok4mkrnTyFlb3599++efenvKvSCYTjoxxmi5DFtzLA17kprJmkocBM+Ye8tRWKL16gc3yQRQIPyqnsVV6L5IJhTKf8ssU7XKAUeWP366uXmQyoaU8zEZJ8457jF6Vebcg+jNjOZ/NACJ74+kdwC8yXDEDaJLIkKaSmhmLBWKmqYbKuQt/55dAxqep4YgZArUztfikDNMqwDTZFEOxZOaY++kk0xdMzVTN2BVcqmoadEnkDJbLaia4uVjMF9KSYxBW9D9/A6P49+9hvt5mBvLUeMKExskgSSfwTmoUksfxoor9QP81bfHqUS11GKoxhyFJaWhCsLTcv0bO/fZ/hZB+zEzw6JJYnGCo7GFQMD9ND83QrgO+qzCqaThHgovurZQodg34mMGSsGI+FQjD90QorRMWTvzc8f/x75ApPF/aIHE8TCSjJM1dVyhKSTqD9wxpvJGajM7K0JUh45MyF5fnND7J/y69S6nc14Y/xfBvIMwmZBjB5VDvONVcDCavLbIkN0SYaRZXx8QAOk7AOTOr6ynQFJ+ZTKcjGtxHy+oGC4f+hCLFTiY5HTWODAPTDCNwKmOupMc405i6NxvDrAnxKyMY8uVbINGwcPXDYkrjkggqfEEDcOAxvEJv6YvdUZU0tgzl6SIut5oipIwroUUgBuRDcCtzj5EXKDs1q5C4kCqFe8cyf/6jc150ljlO72GoYGwLqHGFlHFw7cVMDNmiiYdhj6GGDPn6LxAiGC7qdPkOw2XUbu3TncI1lRDMVvgkyoQsc1lPKrjLEMbnDMOU60/Gl0jrjPf7EkP1yQwJ490D5hz1ZJgmOSdcE50z1JJEGavTDCPcoaSmwjNV8iYI14yTLJ/ECiE5nFbIB+Ov8IW7ovcyBHPnE/r0LRkGInNzaGCquohZm2CYWNDjqpuQcIaBJQUkNsVQNA4tTDlSwiJ8hmOljDL2hQnXiEBAq9IoN00fxMf7ZQiJLDDMfkOGSA0ymkx4bsxQFCyshjQtsWBkYo8zTPN4l516a4sqQsO1NJgYN5oqCeKcY+oyyfEui4Te2OH3ZhgDjxbwlZfHDB9GKwwD7N5ePGv6HmWYTmmo3PnprU6D0/D5gmSBx1lzTPh0AmpKTztdHIZm5OtkCG5ZfzEjw0AIIrBPNdXwHq/RGWT447JPEHxEhqhxMW06syaGsOuwQnLcN6lxoGHy6eh5zZdB7yYY+tSVhYW89hUMywsLkVllGL9ayHNlMvd0TARze4uqKrLmOwwDk/FQ2+OfyenNAaIIOou6I0w1T9gCbxshfFq+K5chRESVL+bTGKJtmTw8qzP5UiKyNl8GK7l0mGuWeo8dpjVIQExPhuonHsbvMDRI2aFjRMMhroq6fsWluahze4RExNFSsE0VszhNzUAWP7sMYXjeSzUflyFPpV7weGhCYU2XYMxALJQPrqhTDEl6JQuIuDJUhdberf8oD2e+zNLSUownRhlKqxlQikCGYQ5gZlHSjgyzDn5/CkNIdiOi20pqBhnCofDqqoj4uEBgyMlpGRoUDdXA7N7xNLx0NvemA34wyXlBTh2LoZoGfFGDcs8XyiEJc89lCGmOWxXpwacwhGyC6jfvDczCkBuim9MEQgsKucNwAo6nEYY4N/0OQw7rQpHE8s+YmlZEDm2m8XtimSheTsNoMMfBnqKl4Lyo6DZb5v21DHk8DCSjU5V2OsFlCDWOpgmG4EzHeAsTnVUAckJlImuLq6FQSHuaHYp4iP1my0u/lmEQQ6lPHU/tYHFx+ZLLgBSPOdoerDjeQuURNIkebSKnMdFzP5mh/gI9/ky+9OsZKot4SZ0yRJ2bXCCLgsoJhnNQWeMtNIx95hz/WcJflbUJhi84w8RTGcLyZzDw3X4TnSxhLFXLyJBxrwqKbPA6IzRnuq7p6xkGnCRi1qxNTVNn7yyg5tzMW10wdFG9PswwjQyn60Miqjt0JwaPDuhDiY5bN75PMeeKEy20CYZf1FITFmg8JcPU7Ax9MOBY40doH259qOtJ7XEtzfG4oI5vjRsMYKhQF3ho4ckjLzPjPFInsHQiN1oamYGhuhTUx+YthmbKICKxmiFry2QyGOTh5qg9Tn2YjWfvVk93GRLUOsicbmnpGLeJAuErvlWYEsMsEyIcrw/DPrfDsokZzRJjwmzD5F4t5d21clzsWuMuxqIagyKyrPByJaBObWPfJ0ORgGISzKi7T+PTTCfte4ThnonVSWbiATEVpLQVTA+YN0VCgmJkKLQZl+FCCDdpA7C+GDeh7LhPhsvi2YoW0lyGRjzBVyrD08qMmn6IodBNflvI8F4E+WYv35SCefwevqWl6v0M0ygun5mbqBAdA5tDGsxIiy2xLJAVuRzuHRG+cR33oQrGQhghQ2VmwOpqwDiRNlyGCmUhTSw/t+cAMKQ0j5uJMSwNAmoo/tB+aTkT9rCytyDeaNEXsgGIo+Eyi/jgfACWKMXbfWITqjiH12JxZgSTYX5kuCHRoCSCp3xYqMCATOXfslGql338VtoyLycpJbl8MgalhRkIz6UxGWRL/HqasiweBCBvIWlsEgqnxrxzJoo7+em5cCYDgogl81cPPi9jwWjQwc3vJyiUAel0Ogo6A+ejQea1I7e68l6M6c4AN4kbNcSoTPzah4rrUQqr4cC7FdEZ3it9FeRvKFDRNsqI0xSGMAzeBBqIUwYuJSUsJ/o99vxm4qdynpZRhu+qG0S8mSCe0lB8pG6wydXCFYFJG86TY8OLiHCGugNNtscXhp2bGl5TKh5o4HvueJaPAfeZGAKO+RvEbi8+Cv6WkeBz1YefyyjicQ53EbdeFORDUcX1HYbivsrDE3lxdvb3Xu4oEZ244j7lmmx986Dpdt/bj6ipe+bhh/1rhX1osFqoeGeKhS1v9OJ+AbDqft/aUpTNwrozYgWvFZxeW3i8vXrP+Ntbd04aom/FcN9eUTa3172r6/tFZd2b0Bq/y5rTcUv0E9828fRmofgwxfX5eZjWzvy1d2b/5fyaN7+D/dXV/fmiM/7hjlI42HQvbh+srq6639ZX9w8qm15HD8D68/r0SUPZ3lldrcxvunMrvjzY8aa5eWBUDvaLhjvBCtym6LZz+vFRii9fwuWtx2Q4X9hRVudfbnsnPq9ve3crbmytr++/dBnuHG4crHkDFg62trZupFbZKN5lomzOb+wrd1+A2D6sVAoba+75/Q3jhu7mwTV+8Rjub225UoM1Xl/f2nCXrLhxfbD/ID3OcO1g87qy48lw+2Bzf96VDAxRKGy414ydz1sb295sCxuVSuVGPvcwxJNbh4X5tTvLvH24WakcuMu/9rmweeiuIyxKYXvD0wYQUqXizsc4fFko7HgtleJ84dF3xNbni1ufN5RDl8XqZ1CKa3eMIurkqqelOzvK+sa1Oz5MY21t3bvBvQxB/pvz83cvbO9A18/u9AqHoO6fXXvdPCgaOy/dpVuf34SmnpZuo1A8Q1Hm9x/hB80Pi8XrilJwW+6j61i7dpxLEX3H2rVzN2MfWq3vuDPZut7Z2Tm8MZ/texgWCzvXlf39O1e2oOv1ljvvHZxyxe2/CgfFgvttbQfv4hiDAV6QFLcrnuAOK4qEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISExP8L/A/wrleUX+U4EgAAAABJRU5ErkJggg=="
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
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYGBcaGyIeGxobGx4dIBobICAaGh0dGx0bICwkGx0pIBsgJTYmKS8wMzMzGiI5PjkyPSwyMzABCwsLEA4QHhISHTIpIiIyMjIyMjIyMDIyMjAyMjIyMjIyMjIyMjIyMjIyMDIyMjIyMjIwMjIyMjIyMjIyMjIyOv/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAECBwj/xABLEAABAgMEBgYHAwkHAwUAAAABAhEAAyEEEjFBBQYiUWFxEzKBkaGxI0JyssHR8FJi4QcVFjNzgpKiwhQkQ1OTs9I0NfElY3SD4v/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACsRAAICAQMDAwQCAwEAAAAAAAABAhEDEiExBEFRBRMUImFxoZGxMlKBQv/aAAwDAQACEQMRAD8A9YtXUVh1eAiPRjFGWJzfdwjq1hkLVnd3xzopby+05v5COXV9f/C//JeujcO6MujcIwRt41sk1dG4d0aujhGlLAjAqFrSHRtSRu8B8Y4U2DeD/hHRMQz5YUkpJLEEUJBD7iMDxiHkGkbWtKQ6mSN5ITAvRyQqYZiAFIN5lhRUDUYZHDwjEatWUVVLvnfMJX7xi/KloQAhISlIwSmgHYKYxnKV0xrYnDcO4RstHF4ZA9g+cYFPk3M/KFrYUbI3JHcI6J4CI67h3Ex0SePgIFJio2U8PARxTNu0xrow9a8yTHaEjIdwbzgSbAjLPh3J+MbSHqUkc2HlErb37T8o4UtIxKQOP4w9AWchtyfOOJZJS7Mcww4b40vSMpPrg8q+UUrRp6QgOTTi39REP2pBqRfKHcEDtV8BG0ShiAnsT8YXjrdKwQh+QP8AxMcfpBapn6qQog53Veb/AAilhByGhMobuWA8o2JSfsp84Vb+kV+pcHEpT8jGhYp6j6S0ykcAorPcTGixCsaJk1CestI7h5xuTMQrq1w/CF2x6CkoWlZmTpiklwEhQSTxDMe+DYn3BsylcSopT3kqitG4WQTdKoC1ITLUVJxcADsJNYGTtZCFXBKZTtmfICBVu0ksTJj0JVW6QqmTHlEdn0yUliL3tAeYi/biTbL1u01NBKCQhW64M/aeKJt61A3pijSjKAD8QGozxq32vpVJJAcBvqv08RBEv73FgPCsPShbkskkYMd5p4kxds2kbPKTWYh8SEkKI7EPApRl/e7h/wAo0oSyKE/w/jFWKggrWmzZCceIkzGPLZjIodEj7R/hjILYaUegWg7DHNs95AyjqWgigYDcHjc7qirVTm2Yju6OfeY4ZQd7GqexwSW/8COkqG+NhIGAbuEYWG7vg0sLOCefgI5SfpyYim22WmhmJHc/iYrzNNyE4zPh4gNAoMLL91T08vnGXcXPKreUBJ2tlnTgX7R84p/pjecS5SlHgCfgItYhahnKKjc244uG+Mbu738B5QqL0zbl9SyrbeU3feMVjN0gs1SiX7a0p8EkGKWILHVk8O0vERtCE+uOxoUho22rLqnoSPuIUs95SfOLH6NKV+snWhXalA8VfCK9tC1MOztKykByonvHiWED52tEhJZ0vzf3QqKsrVyzpLlCVH780qPckRbRJkSqtJl8bn9SzD9uIblJetSl0lS1r9lCj4kiODbtILoiQsDeopT5h/GJbTrRZkUVauxK5aR/ICYFWjXmxD7cz/UX53RDqKGoyfARTYrcazJsqX7Sio+ZER/mOas7dsB/ZyyfdgKfyhyx+qsyuxKEfFRitO17tq+pZru4lS/6QkQakjaPS5JcRY1StV5XrCfNO9RCR/MQYtytCSEYSJQP31lZ7mMIMzWHSszDo5fJCSe+YVGK0z84TP1lrWBuCiPBAEJ5Ebw9OzPsepJuyxRUuWPuS7viotFG1aw2WW/SWvs6RA8JYePL1auFVZk0qPF1e8YllatShipR7h8IPcOiHpU3yxztGu2j0mnpDwQuZ4rYQOnflNlppKkL/kQO5lGKmiNUpc1QATs3gFEqO4mg5A94jm2aFRKmFAlovZU3hwC+dQ8Gp8lw6DHrcXLdK6GDU3WyZbZ6pa5QQhKCpwtSiS6QHwDV3QH1wtltRa1y5E0iWzgCXLdOFLxS+MW9XtLTbOlSZsiWhYJAKUgFafVJIUaP5QGsmlFT7RPWcAQBzdbnv8AIJSpGXT9IsmS6en7itpO0WxBCpkyYCrMlJJbsih+crQC/TLfs+UNGtpBEvt+EKSxWI1M7Z9JjTrSWk6atQ/xldoT8o7GsFr/zf5ExQjDD1Mn4mLwEP0htX+Yk/uD5xInWW0jOX/B+MC41C1yE+jxeAt+lNp/9vuPzjIExkPXIj4eLwe8/n6asAIs008kKbvLRitI20g+iSj2loHmSYUV/lGlerJmTDxvH3ioeESStdbWsPKsl1JwJUB4JSnzjSktzxoQlkdR3GBarav8AxJSfZWpR7pYiFehrSqqpp7JavOZdhfXp/Sa/sJ7f/wBRDNTb19eelPJP4QtUToj0OV9hlOgE4rnTORXLR7pUY1+abEnrqSfaWtXupSPGFQ6HnL69qWeQ/GM/RlJ60yYrtaE5o1Xp2TvQ2ido6XiZIb7iD/uKUYjXrlYpdEzFNuQbo7paBC0nVmQMQo81H4Rck6AlUuyX7FHzhe4ar03/AGkkWZ2v8j1ZS1+0FK99fwiJOv8AM/wrKey6kfypfxiYaMCATcCQGegGMTosCilKgzEgAPWpYOMg4aDWaroMK3lIHTNb9IL6slCed8+amisvSGkpmM1Ev2UpHixMGpdjcA3gASoYYKSLzHmM4sosEu8E31HZCqJAxKUjEn7XhE6i/j9NDm3/ACKq7Jal/rLXNPAKV8CIh/R1BquYtR4n5vDXOlIShKmJcMC/rC8lXY4B7Y3ZEJUgJKQ6r9cwUpCksefnCtmyjghHUo7C1K0BJHqk8z8ouydFSnCUy0lTsBdcv2wwXRthh6Iqu0yCT37QCoppKuml3i5dFQXfBi+9oDSGWLvTFKlZVNjKSU3bpAchmpv5R2LEWBKkgEAiu8kDAYuD3GCwSlS6KLKlFKQRUk36U4pd4rrlBUqUQ7gpvcUqUq6ewuP3oRPypOlwRStGJvKSZgdLAsknaKrrVbPPjEU+zJTLC9okilQwUCUqGFaDxgskkTZqlJABIGDMCtQCq4HN+DwItJuyUpKk7KlvtCmAflQ1gJx5ck5q34/rcF2gqKkMKPWrNg3MYxJZJC1zFBKSaBmOVMRlXPjEU2cxSGe8e4b+OPjBrQGkEySpSswABnmT5DvilR3Zm4wcoK2uwf0bo8y5VxRZSlBRIDlgUU4ZjteKGm9CLUpU1JvEts+tQM75mgi5ItxnpKkzLgSlXSBqpdyhQPrMzQKGsBSshyqWGCS21sgVGdSM98aNxo8XCs/uuceVyqAKqFoDaCDLne18VQ2/2eSA5U6qEurF+thgRA/RkiVKVNKkglayUs5upBVdJBocQWjGz2Pfuqi9hc1nP6vt+ELs1MMOtBqjkfOF9RhkZHuyuYyOpgaI3gMHI3BDRWjhOK3UUhKXoHqXZ9wpUwOieRa1IQtKaX2BObAu3I5xUavcibk4vTyMA1XBc3yKn1XwJGOcZAFWlFuSVAklzsoxNd0ZGlw8HJpzeRhSqGXRp9Ejl8TCuIZrBSWj2RFZuEcfou+WX4C+hrPfmpBDpxVR6McYtaflKCkquXRdANKPWj72bui7om3IEtMpIHSFJxo5xCSd5fwjjSGlgAuSq6ohJqML1WDbxSu8GM6Wk9F5Mks9qPHb7eRfSqC1juhCSUpc3iKBy1934MPKArxYRa+qyRQKFXredz4nwjJnd1GKU19ISUCkLTS6lKkjB6XQRvxL9sYJxBQApX6qoyGw4bzil+clu7JwY0dybrqL5m6O6I125ZILhwGDAYMBWlSwZ4KOePT5HykWROvSl3gbwa6r+EKSe8GJLPaLqJeyWZSiRiyVFgMsWLwJ6Utdcs7s9H3tESpisHPjBR0PpdSa7Xf6oNzpgl9KlWCisjmACnvBIiOy2pMtaVXk0kgGr1dLjmwNICdGs4JJ7I2myr+ye1odD+JGqcvyXbUtNxCUqvXSrf1SQxryjqXaUpl3WVeF5jRgFAJPF2B74qizKGNIwpAz+u2CjT2oOOm73svL0htXgnFyoE0JKbp5Bn7SYqm1KvhdHBBFKBmAHIMIhv4ACpw4ng0dJlrLtLUWxoot4QCUMUP6JlW9bghTEFwwAYs1KUoT3xEq0r+0rBsTgMByiOalaU3lBKUYFalJCQXZiSWBfI1iJa2BJXLGYAVeerUKAoY5O8ITyYIeP0ddKVYuTnnUUiK1y1KQUpoS1SHwILMd7N2wNny1pnh1EImSxMJF5V0h0k3XG5yKYcYtptEpLgzFqIqCmWwOLjbWCDTEw6M/m4apsn/s6dkqCXR1SSKZYPEhbePrlAvSempclMtYkzVpV1nWkBIdqKSkuTiHpGfpDK6OWtNnJC13RemG8NkqclIAIpgw5wUS/UMUVe/8BZK8WUQDQgPUccHjm8nee8fB4Q52vdoIATKs6FA9YIJJY4XVqKRuNHMVZuu1sKryJiZYZriEISgvmUkEFXE1GTRehnO/VoL/ABiz0cA0uoVXChqOFMImNlmKIFxKdxVR86Oa9keQz9PWpYUFWmcQokqT0i2JO9Lt2NlHo1uOwnhLHuwnGiH6s5cR/ZX1mlELSDdZKa3iEZkuHy4cICJlpV1QT+7eHhChPBcXsWjgTCMCRyh6TKXXyu6Q6nRc1YNyWFtjccqTzS7jtEDptjmJN1UtaTuKSPOFtE1SS6SUneCx7xFyw2ha5qb61KYKa8oltlW8w9Bm+tb7BPozgxftjFyyMQRzDecMF8/aYcjvwjLx3qerBuPEcoycivk/b9i40ZDCpn9fvHzjINSH8leP2SiGayJNxB+6PLjCdb9MzZYSkSLMm8MQJiy1CHvLZKmzArG1az2tI6shgGpLBZmAIvEm9HRkaktjg9Oy/Fk5SV2h2TMukEEgjDKsQzVm7MmAKUEAqURk1dpsHNIQ7XrJbSgm8ZaSWKkJCQTzah4iuMPGqenEzLJaJc2eVz1EgoWraKLqRsDMVLtmqMmq3PTl6nqT0qn5MkWhSzSWsgFqBRxqMBgRV4u9FMAOwQ2N5ww3l2pxwjen5RMuzqSbt6UApqXmZISfusDTeRCZaFkpqXYEdzjuhV3Jfqcq4Q1TZwQ9+ZKRS8ypksOn7QdVU8RFeZpmzJxtUjBwywXH7oLGuBrjSPHkoHCNdHxEWoIzl6nlfCR7RJ0zZlS+lE9JluzhEwsaUULoIxyBivO1osyC16YpixAl4fe2l1HDHlCXosNYVftfiiK9s6y+2FRlLr8z7/oaJ35QZIBuSpiiCwvKQhKhvLBRScaVyrlFO0flBUX6OzpH2SuYon94JSkHsaEUivafOOujG+KpGT6vK+56PovWeZNWAZUoAguNs13gqW6cMBBM6VmBiChJGYSgE8CyajgYT9Xki8GL7Jyhkbn3DCOfI2nsOGWclu2Q6X0vO6Oa01QBKQQlTCpALBLAODlAC1WyYsuuYtV1wLyiWD4BzQQR0x+rXj1kY80boDTs+Z84if8AiiXL6irpGWQhLjEuG3EcMDSGibpCQEJULiUIGylxeo4CQhnduTPASVa9q8urIugADIMKZxmr8qYubdYrCSq9iaXVCr8RGuNpoJT2S8HoFmsyJ+jrPa1AdIAEAijXVTAQwoRUDshety+jHSAFgQWGNMRDRY5pl6LRLmIUg9IsJKszfmKKVfYIAJrkOyE3TdoSZa0JVWlQ5Y9bEYUB743UdjPVcjeldLoVKmIShZKkEMUsA4xJfLGkDEH+72X2z7i/lAJU+ZvVBkzCLPZyXKgtZbMuFt4KHhE6Sm/ppIWCB9CObo4RpeXKNINYoyZtaBWPUtKYcpY90x5eo0PKPT9M4H9n/SYmRUDzCbLNHxaOOjiUoYs4PKOYY5ckSktFvRI9KOSvdVFZQi5ogelHJXumDsKxzP7zdmLxpQO5V5ixfJ+B5RGstUu3tcY4UsMxuvvJ4xzGx1MWHOx4xkRdMnciMgGVZ1imEfqjeZLG8mhGOdXEcKl2g0UgkZjZ7KgwfUVbk4bz8t0QC1AsAZZJyv8Ac3CL1sx0IWLatQT0arySC5QXbCh7S5iGapSZhKesk3gfvABvlDFpOzS0rC5wXUAICACos7kA0arAkM7xcOjZAkkTJW0ph0iTedSglYul3e6wJFHXFqaonQ72H3TyCqx2E5mSgfvFCD8YRdIJuuGY3S/OsTo07ap8pKCUXZdEgBim6AlLkVJKUtnV+UD9IaQlknbUt3vbLMpV6hplUZ5b4cpp7BprkRkqpGXoI2zRktKL6J6FU6pBSrdQV47sOIcWRFJprYQ3aPP9w5zh76Ir2p3V2xNo8f8Ap6f2w99EatKhtUgAX5aSTQPj8YmTJzMcpqTdHdFwhhWAQa1eG2/3TDASOHcT2QtaBA/tFMejV5iGdX1tZxzZeTfHwCtMH0a/bl5N6yImsugLQxPRHbSQkFSQasQoglwljzi1JsyZkwJUCpPSIJAJPVuKxGVILaT05NExcoFJSSbiiKjEOT62LjdTdEytpJEydSAmitW1JmyzMUEpZd43gGopKVJxP3sMsIi0jIlIT6Eh2KlJNSo1S4u4HbJyqkcItWrSilG8nZ2iVPUAAEJAwdn8zAC12lyFXa3TyfIhsGeDGmnyVoveyJWmJgllHSKYvelrJIBN5JKAoG6SlRDuesqlYoJXdBBql9rHqVHaWLdkPtp1dMzRcq0sy0gi6m6Qu9MJvqet7JgagDdCMUkLKCNk1ukE1ArUF8R5R26kkJbkdxJpVwWBYMBkGdiXIw3wTMhSkyr4uit0FnWNvIUBwLD7MUulUkJ2rvIAN3Y0eLq7amYJOLoUt6Udll+TGIU9XYctgFbLNtkrdzm2OT0zimZYBofCC2lFou4nhjTeOUCJRClVOHjFpqjGV2dFFDHpOnfX9j+kx51PmAsBWtTxj0XWGnSex/TGcionnRsxLKTtVagNKAvGhZV43FYVLHDGLdhWSQwYO78aRZtUlLXwFBbkF3IOziNwhhLdggSziQYt6FlvPSDmD40ioiWoqdvowS0HLInoJb6IimmiU0OP5rkqWxUsk0bAYnhFaTZrIpZlJCyoO7viKl6xelWlQvUAZSq40BgNo8varzgg9JUbwCWccFCM6Rs00tzdosiAosD3mMiS19c9nkIyJEE542ezfwMJlmn9FMlTCSBdTVIBUKB7t6gNceMOlqGz2cdxhCtQ2UewPdTDgrQnyHLRbiwWvoySdlKryqZUNCXqSc4pz7cShKCVlnD3sBQi62Bx74CzJ6jR6RLZ1MKhw+DkeUNYxaqPRdM6vT5cmV0aiqVNSFhISxSopQsgMKJ3EHEHfAlIXKmS+mCiiXtlISl1E1re6zOQ5ejgYx6lPkJFlsrBnlpJ53ED4R55rbRS/wBn8DBKCsNVo87t6TfK1AC+okMAAa1YDq44RUKt0MylJUkVIYMzeMcz5iAQWowGGbmLTJpluwD+4S/2w/3ERFaRjF9KwqxSiMDOHhMT8ooWzBUJgAErIOMSptZGGO+KgxrBDR0l5iaZufOKomwxq6om0kHDoj5o+cNxSePcIFaKSHJu+qcRxFKQUUkDd/CY5snJtj4K0zSi7OFql4qUhDnEBRQCzc4DG1KBEwmoLjvenjFrTPU/+xGTZogZa0+jJ3Q1FWvuRLllmzWwqJSo1IfLx4RascuWpbsCWc92HYYX1O4PDvwgjoOaemKXoUktuoPjG0sCjuiIzfB6poi0qmaMlIP+Sg9WlVqSNrAnZNOFcYStc7LdkhSUpSoKSHAApVwIf9Af9ns3GWjzJhJ1/LWdOI9IMOSobWw06Z52UKWdtRO56wSmulEoq2UXVgBTBztkKDYdZgMaPHFmehYkUw3dkXbQF3ZQU124spzLEHGn08K9irsA2hBWEu1XwiOTY7qheTfD4Oz9scLmnDdBLRMq+oVdTUS9TnlhhDuiXuT6VsyCZSkoCAQHApUtuhs1kNZvsf0xVXZRMQy2ceYIwibWY1nez/SImTsqIlWJ9t8QknHluglpEMU3KAio7IFWZTAgbi74wcnSxcKityEPlmIYNAGfQmLegg89AyJHvJijaFkqIHjF7QDi0y3zUkdt5PyimzKMWP1jQOszVPbXPfCnq+oG0OM7570kmGaTcuKZTq2qOKFzwcVgfozRaZakrDgsrZxGBfwiTe2QWzrns8hGR1bBtnDLyEZEDCFvpLNPVO/cd8Jlt0j6OXKWm8EJ2aBN28ATtDaVWHPSlJavZPlHnukF7QS+AHkIcOCXydjSAZuhldqXPec45sk1KAStAWNx86ERVTLOYPcY7R1Fco1smR9G2xb2eQMGlpH8qI821x68z2B7ph91o0h0FnsvVBWlKAVEgXikM5AOJDfER59rbMvX1b5aT3pfOFISAHRpp84p2yVtMkHI0PFe+Bv5ymD7Pd+MbTpGYK0wAw3Od/EwUFsapSGsUoFw84mv7SJLdPlzHTLs6EA0da1qJO/Zugd0R2dZXY7OSzmaf9wj4RPpTQtolzJiDKmm6SLyZailVaKSQKg4wJCYn2qyoCyEFRTiCoAFtxajgxb0UPSA84uTdDz+hK1ylJKSSXDG7iTdxAD5xDLsUzEMkbyG7t8Nk07GnRSxeUHqE72zEEjzH8XOFzViWekmPMv7GABptJ3wzEHj3DCsc2RfUdGPgB6aGwP2qc3zRA+0pHRkH6wglpwbCP2gx7IozJiUglaLyAwIfHCu+LUW6oiTpsFTJzANiMO2LeriwZvG4o+QMdJt9kI2pQHC8RF7RIs5UTKQUquKq7hqPnHRJtxMo7M9J0TaynQ0kISCtFnQoB3dV0qAKUupsMqvSEHWC2rn2XrEpMwELuFFPSOggnrJKWPApepMelaBlJTouyKAAUqTKBOZZFH3s8L2s2jkzkJQpaZYCnckB6GgfE1iWUebJmXQAl6AYChgjal7Mgkf4ayRwpTuiZeiEpJuLdt4GW4nGOLfLPoUux6JVed3dziB7i8haL5NxLNm7A8KxPZlovS1qKE3VOWWyqHAJPDjFAqODjFo5Wp9zxppJsakaelmYkBwCsA0BdyBkaVavCL+siy00kMblR+6KQmaPlLVMlbCjtowST6wfsh01qJvTm3U/hEZyVGkGJNmSCCcFEMGNOFGwgxapwEtQapSPAU84GWaT6MzFEMlW1vejDxjoz74A4MYbQNg+TMvKJaCuhlAWiUSP8RPvAd/GBCkmWaNXtgpq2q/apQIwWk9t5PzhNblQmlFodLJQLvEgEqZ0hjU4HGJLLPvKCTdJCVuR2M37qhFGbMKpYBqAtWA4nGLWi5SkgKuC6QoBVb2XWy9UQlvuipRqKb7g63n0isMvIRkS20C+ccsuAjIKIsv6RkqXLKQGKk5jBxnCYqUAXzo57IedKzLkmYsLJuoNK4tSEpKadkOOxJW6QM/xruiDR8pSphSlJUa0AenKNLUkOCmrmsGtUQ9oPsK80xaCXB7fpKWyJYUAdgFm9lnfOkeW68nbnfsx7oj1XTywm45YBOJpHlGvCnVO9ge6IJEo82MbjRHCCq9EAYLL8oAGCxf9FZP2iv9xUOekNdZi5XVUAlwAnMCghPsqQLLYknDpFPyvrcwz6wKlCTMFjChL6NQS5JJNXNd5gQmKE3WKaVgSwErU6QCxooEErdxUExWnaWF66UnZLEvxypQRWs9lWucEpoopZJJCasTjHFosky8pxXNzV+NIGh9w/qoXmTTQ7I4+twhlujcO41xhZ1PkKRMmuQdlLEFnqYaFc/5o55r6jWL2AmnOpL/AGkbTotMyXU3QrN8TSI9OrBEtiD6QnF98UbSZipZCVkYEbmBAbw8I2x8GU+QVPs0vpeiDsCQ75gEnEVBIgroKQgLWUu/RqxAGaYCJs0175UCrF3zblBfV9My/MK1OOiVnm6YqSBM9f0faky9D2VTvcs8oqCan9WFYb4TNYbcZkuWq5dKZiqEpVS4q6oFJIIIPeDizw5aNsI/NlnSshaFyZIuFIYJ6FIKT9py5r9poR9cpQstnlS7PLAClkb8A4JJqWoA+ApAxA2bZyWU93N3avxiHTRAXKo4EpTiqX6lN6Y5l6AmzZKpptKFFP6xKlFISO3JhuirpQsiT/8AGPkiJoeqyhKtlbsuzykkesp14VxXnEk3S9rSQ11A3plpA7C0U7AiUtklS+kV1WAuv944nsitbZqktLJUwejluwGK3JTXAwStIW0TZQXOLKWlwGwKgDlBXWtNZ/L4CE3RU1Sp8pyT6SXnlfEOmtiQ0/KmPYmIlZpGuwm6LBUFy6FO0TR8gOG4RXSgImKRi1XwycRuxXk7QBALsrD6/GIK3r2PF/OKH+Dm04tF3VuZctCFGrEH+ZEQ2y1IUgJDuGegYEO7HGojNCD0o7PeTB2J7noiVyBToFVwriTU+tEybagC6iUoUwfB+2KCE4OOW1hSMuHCr0c3oy1M1I5pcksfCMju7wPfGQWyaR1rItrKofap4EwsJW4CQkklLvkOHPhDDrDOSUy5ZSSFAuKp3QNRKu3XSAMmU/wjS4rll4sM8rSirbKUnRxJWVIVQA7gAWqd5cs0S2CwTS6ahF4M1AVgULjgGPODUgOTMKHGCUiuOy5c0r9VidEwCWpK1hF4UcVSca/Zo1I5Hnep0dXUyxY3HBJK1y1xvz/A5/lAKyZIQlKwEmhKWKqpSS9Lu/Oowjz/AFpJCZgViJaAeYSgHCILFbVIe5MIS7uAGarEA5ndEunVCYo12CACWqaCr4F40WZW7NcvQyeiEKad0+L/ACJJLqAH1nBIzwosk17ePziaVo+Wkqe8BQBw1cWcir4tugfOsRC7qnY4EEfXZG0JpukcmbosmOOt01dbb0Md/wDu1j9pR/mWYsWi0TbqkAqCWYgYMfPGKNlnS1S5UshZMt2YipJJr3wXTN+6v+X5xpt5OPcX1yVoY3VXsXY0zFeyLiUKmTAFG4WdyDhkKA1goJj1Imc9n5xIiYRlM7h84VryPfwd2BUqSVXpodV2jKwqcw0WDaJaipRmpZzQTKgJAJ2W5mAGmgpakqSgmlbxAO5hAzppicU4Zk0vNdNXo48Yhq2FvuH7dOlTA6Zigq6pbpJqA7Yeq9HEQJkyxfeZMwQc1VmBJSmu8uYXzalM1Gu3Ox73fGlaQXi/rBXaBdHgTFE0HjIlHZEyaanBArk9TvfuglI0b0SJigokGWqimcVG6mW+F7QdodZvE0TQpFQxCaeXfDEbQnoyj0pBDElNa51h/kaTPVbJTR9kG6VKb/TEJeucsq6EAgbZcnIXYeSkJsVmSHYIQA+NEAVhL1tUhpd+8xKsEk5JxbnDExAn6Im5BF1X2VqwfMk1ixpmTtS5YOFnuv8A6Yggjokpu3lsMHlmnhEE6XKmLSpUxYuouN0ZqNmvhCdD3B+jNX5iVoUUjAsXxcFs6UrHVp1ZWpTkFRqSQQH8aQWQsAMmesN9wx0i0AAg2glzmk04fW+HYtIH0dobo5spSkKAMxIBJo4IOXKDGtxDT3+urGJmJdBXOSQhQVUEYGB+sVvRMMxKVBlHHhSJluVHYAItF9CUpSxDO6nBZwGGVPKJZSkhF0sVOcgXfCuVQIgkSAit9J747U1NpEJlFIyySwAx4RPYEFM0AjdhgzpjCn7yI7QwXfcYVAPL5QAxxQGbq144U+u+MCMtmjVfGNIO5SS5rTCnPh4xsNg6aN2+MZlkamP2e+Mjq+PuxkIZW0o61pJqUpAcjNniK0gXUoI3qBFK0G1nXnlHFsnXpii+fHl8IspmL6MKSQ8tgzB9o5PiXD8niMqb3R04MlRSut+LrtyVP7SZSBfJIOLAgguwZTAAc2zgWq0zJsx0liXa6SAng7MBR+MHrZ0kxD3LwoFCj3nIHaWwG+KFhUsSwmXS8SCzOXLZnHARnDZXW5lHotcdbmrdvfnYis6Z2w6g4R6MMlt9SrHnUY745stvBSlMxV4hSqvkBRgBgS5O9hxgrb9GKUejmAlCHdSpgqtgT6rJYgppxxiGdq6EshwVrJ6NIcAoSCokkF1Puoa0pGlKtzLH7qcW90uz4B9p0oWACEqAPWKbxGDMcjs+cC7TMK3VXEgPQtvIgzP0dLlJTsuu6VHaNU4VQUm4XBatXPYHtSVFQZwCaVem7CLgknsbZpT37JvhcElgThl2w1WZNHc94whQVeSb2QP1hDdYVlSEliHDswxi2cyLYkjB1d4+UdGXhU05RiVO3/HvjpIG6jfZ5QqKsH6SQlg5IL7h8IHTEoYiuWWV48cyYJ6TmskMBnlw4wKVMFT1CHN4ZXV5cXq8OJlLkHWmzoq1DeOVHZ25cYHqHl9GCs9FS9Ntxx2W7M+6Bs5DAPjdw7YtEoI6ut0iqlymlHreBhsQk/PZNMYUNX1+mHI8N8OKD279rGIktzWPB6napyOhkoCgVJQklOYF1nIyhP1qwls3rZE/Z3QQWbsuSRQlLnibkp335wK1hmP0ZD+t/S8XJfSTHkBlBfFPcce+NoGDkeNI7Bwx4YY1jFHe/HDGkZUaWRjmnHDtb8Y4Wl3qnvxz+ETEni/Zg8aCuJphTgYKCyra0ejWNmqSce3dCqt2wHfDjaD6Nfsl6cIT1fVIpIGQ14d8cEHcO+JD9UjhX1SGIjVjhGgKikbUI6l9YUzGXGAB0SpqBTvjs4UjL2AvBgzFsYxStxVXGnDlyjQVxLBmpw5RIHHTHeO4xkdXj9r+X8IyEBMvUua7hSu1I/5wW1d0AuTPlqmqlFDv6SgcAswKi5y7THpIsi6UThxippKwgpDy0qILhzR+0iG7AGztCS0JUpMpBmJSohSTUzK4B2dzhyhX0Vo1KZ92ZJStKlJSK55Eb8MofAgFLTA5d9kANh98uaRUkaJlrTJv3yuUXSQbrqAZ2q8TTHqPMdI6PMuZNQUqSpRIc1xc1fHLDfAeZPQFlW0JooFGt4kKCnUqiWCjlizNHo+mtVZ06ZMIlKKVKobyEk/exhY0l+Ti2lXopYukVCpiA3jWDS2GTJKS03sLVq0iCPV2nOzRi5SAWooXd7kvjlAtcx1AOGSH4fXyhsP5LtJf5cr/AFR8oe9H6KtiJUuWqxythCUuJqCDdAS7XeEVpoHklJJSd1weOWRaX9Xug5Z5woxHeY9Tl6AmK/WWOSOLoV/THEzVFJP/AE0gcbo+AEVq+wq+55uieOH8RphSJU2jcRv62W6HqdqQFf4Uockr+CxFVeoWDIRTjMH9ZhWKhG0iXl9+b5GBMxBN4AOSJjf6kOmsOglWVASUhV4KIFS5AZq4PClbUzClYCSKLZhib2yeZDmBGUuSpaEVLF9tz93Z+j2wNtCafu48XgnOlqvKoWMwHmLgB7IGz0EfwnzpFoET6EURPQ3H+qHBMznw2YVNXrKuZaZUtDBSyQCcAyVKyrgIfFaq2oYKlH95Q8xCk0aRCVjtcxd1My6yUtshgMEv2hIeINYZdwoBIqFY1wKYhsE1QWtC2oaMchdHbW9GtKonTSkS5aliWDeKWzLhwTwOG6Kk9hLkHiYN6a/jWMKx92nHHCI12W0jGTNH7j790RKVMTihYbfLV8ozoqy0V+zzvcTHSeVThtYUgeq1JFCR2paNC2I3or4Uh0Oy1alHo1+yXrwhTUecGrZahcX1cCKZwumZAkKzsnnHCjziMzBHCl8IdCs7J5x1KUbycesPMRWKjujcp7yX+0POHQWPbZspqvX8Y6A33my7v/MVBMBLsGDuysYkC+B4bWFOcQ0OyXa+93RkQdJvd86xuCkOz3NKzSpwGcWEqO+MjI0RmbvHfGXjvjIyADV4743eO+MjIGBl4745KjvjIyJAivneY6vHfGRkMDRUd8bKjvjcZCGIf5Szsp/YzfNEeW21ZZdT1ZnvCMjISIkQWlRvLr/iJ9wQMn4diveEZGRYIP6gf9zsvtr/ANuZHu5jIyJkaRPKFn+9L5K98Qx6sdaf7SPJUZGQpcFR5DjxFfO8xqMjCXJozidEa7OgiqEnmBGRkMQLt2j5LH0Uv+BPyhQ0rZJYwloHJI+UbjI2gTIXp6A5oIprjIyNDNnKo0nEcxGRkIA6gVETLxP1lGRkJgRvG4yMhDP/2Q=="
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
