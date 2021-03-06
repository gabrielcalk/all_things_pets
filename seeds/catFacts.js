const catFacts = [
    {"fact" : "Cats have 230 bones, while humans only have 206."},
    {"fact" : "Cats are nearsighted, but their peripheral vision and night vision are much better than that of humans."},
    {"fact" : "Cats can jump up to six times their length."},
    {"fact" : "Cats have nearly twice the amount of neurons in their cerebral cortex as dogs."},
    {"fact" : "Cats have the largest eyes relative to their head size of any mammal."},
    {"fact" : "Cats make very little noise when they walk around. The thick, soft pads on their paws allow them to sneak up on their prey — or you!"},
    {"fact" : "Cats walk like camels and giraffes: They move both of their right feet first, then move both of their left feet. No other animals walk this way."},
    {"fact" : "Some cats are ambidextrous, but 40 percent are either left- or right-pawed."},
    {"fact" : "There are cats who have more than 18 toes. These extra-digit felines are referred to as being 'polydactyl'."},
    {"fact" : "A cat with a question-mark-shaped tail is asking, “Want to play?”"},
    {"fact" : "According to Wilde, a slow blink is a “kitty kiss.” This movement shows contentment and trust."},
    {"fact" : "Cats have a unique “vocabulary” with their owner — each cat has a different set of vocalizations, purrs and behaviors."},
    {"fact" : "Cats have up to 100 different vocalizations — dogs only have 10."},
    {"fact" : "Cats mark you as their territory when they rub their faces and bodies against you, as they have scent glands in those areas."},
    {"fact" : "Hissing is defensive, not aggressive, says Wilde. 'It’s an expression of fear, stress or discomfort of a threatened cat communicating ‘stay away,'' she says."},
    {"fact" : "If your cat approaches you with a straight, almost vibrating tail, this means that she is extremely happy to see you."},
    {"fact" : "Kneading — which some people refer to as 'making biscuits' — is a sign of contentment and happiness. Cats knead their mothers when they are nursing to stimulate the let-down of milk."},
    {"fact" : "When a cat flops over and exposes his belly, it’s not always an invitation for a belly rub. A cat does this when he’s relaxed and showing trust."},
    {"fact" : "When cats hit you with retracted claws, they’re playing, not attacking."},
    {"fact" : "When dogs wag their tails, they may be expressing happiness. But this isn’t the case for cats! When your cat wags her tail, it’s her way of warning you that you are getting on her last nerve."},
    {"fact" : "Your cat drapes its tail over another cat, your dog, or you as a symbol of friendship."},
    {"fact" : "Cats are very fussy about their water bowls; some prefer to ignore their bowls entirely in favor of drinking from the sink faucet."},
    {"fact" : "Cats groom other cats — and sometimes people — in a ritual called allogrooming."},
    {"fact" : "Cats like to sleep on things that smell like their owners, such as their pillows and dirty laundry (ick!)."},
    {"fact" : "Cats often attack your ankles when they’re bored."},
    {"fact" : "Certain cats go crazy for foods you wouldn’t expect, like olives, potato chips, and the hops in beer."},
    {"fact" : "For some reason, cats really dislike citrus scents."},
    {"fact" : "If you can’t find your cat, you should look in a box or a bag, as these are some of their favorite hiding spots!"},
    {"fact" : "When cats climb a tree, they can't go back down it head first. This is because their claws are facing the same way, instead, they have to go back down backward."},
    {"fact" : "A group of cats is called a “clowder.”"},
    {"fact" : "According to a Hebrew legend, God created cats after Noah prayed for help in protecting the food stores on the Ark from being eaten by rats. In return, God made a lion sneeze and out came a pair of cats. "},
    {"fact" : "Cats are actually more popular in the United States than dogs are. There are around 88 million pet cats versus 75 million pet dogs."},
    {"fact" : "Cat's can't taste sweetness. Scientists believe it's due to a genetic mutation that affects key taste receptors. "},
    {"fact" : "In Japan, cats are thought to have the power to turn into super spirits when they die. This may stem from the Buddist believe that cats are temporary resting places for powerful and very spiritual people. "},
    {"fact" : "Europe introduced cats into the Americas as a form of pest control in the 1750s."},
    {"fact" : "There are up to 70 million feral cats in the United States alone. A good reason to spay and neuter your pets! "},
    {"fact" : "In Holland’s embassy in Moscow, Russia, the staff noticed that the two Siamese cats kept meowing and clawing at the walls of the building. Their owners finally investigated, thinking they would find mice. Instead, they discovered microphones hidden by Russian spies. The cats heard the microphones when they turned on. Instead of alerting the Russians that they found said microphones, they simply staged conversations about delays in work orders and suddenly problems were fixed much quicker! "},
    {"fact" : "Cats only meow as a way to communicate with humans. "},
    {"fact" : "Cats can recognize your voice. So yes, they are just ignoring you. "},
    {"fact" : "The oldest cat video dates back to 1894 and is called 'Boxing Cats'"},
    {"fact" : "Cats and humans have nearly identical sections of the brain that control emotions.  "},
    {"fact" : "When a family cat died in ancient Egypt, family members would shave off their eyebrows as a sign of mourning. "},
    {"fact" : "Cats can move both ears separately and about 180 degrees around."},
    {"fact" : "While cats are seen as having a lower social IQ then dogs, they can solve much more difficult cognitive problems. When they feel like it of course."},
    {"fact" : "It was illegal to kill cats in Ancient Egypt. Not only were cats seen as an icon for Bast, the Goddess of Protection, but they were also very effective in keeping rats at bay. It was seen as a civil dis-service to kill them and often resulted in the death penalty. "},
    {"fact" : "Abraham Lincoln kept three cats in the white house. After the civil war was over, Lincoln found 3 kittens whose mother had died and took them in as his own. "},
    {"fact" : "Cat's, as well as other animals' noses,  have their own unique print, much like a humans fingerprint."},
    {"fact" : "When cats don't cover their poop, it is seen as a sign of aggression, meaning they don't fear you."},
    {"fact" : "Cats use their whiskers to determine if they can fit through a small space. The bigger the cat, the longer the whiskers will likely be."},
    {"fact" : "The Egyptian Mau is one of, if not the oldest domesticated cat breed. "},
    {"fact" : "When cats bring you a dead bird or a mouse, it's not a sign of affection but instead to let you know you suck at hunting. Maybe it's a sign of affection, making sure you don't starve but still! "},
    {"fact" : "Only 86% of U.S. Cats are spayed or neutered."},
    {"fact" : "Around only 24% of cats who enter a shelter end up getting adopted. (Spay and neuter your pets!) "},
    {"fact" : "In just 10 years one female cat could produce around 49,000 kittens. Another reason to spay and neuter your pets and help support Trap-Neuter-Release programs. "},
    {"fact" : "Cats spend nearly 1/3rd of their lives cleaning themselves. "},
    {"fact" : "They also spend nearly 1/3rd of their lives sleeping."},
    {"fact" : "Blacks cats are often seen as bad luck in North American whereas, in the Uk and Australia, they are seen as good luck. "},
    {"fact" : "A Cat's spine is so flexible because it's made up of 53 loosely fitting vertebrae. Humans only have 34. "},
    {"fact" : "A Cat's jaw can't move sideways. "},
    {"fact" : "When cats walk their back paws step almost exactly in the same place as the front paws did beforehand, this keeps noise to a minimum and limits visible tracks."},
    {"fact" : "Ever wonder why catnip lulls felines into a trance? The herb contains several chemical compounds, including one called nepetalactone, which a cat detects with receptors in its nose and mouth."},
    {"fact" : "More than half of the world’s felines don’t respond to catnip. Scientists still don’t know quite why some kitties go crazy for the aromatic herb and others don’t, but they have figured out that catnip sensitivity is hereditary. If a kitten has one catnip-sensitive parent, there’s a one-in-two chance that it will also grow up to crave the plant. And if both parents react to 'nip, the odds increase to at least three in four."},
    {"fact" : "The oldest cat ever lived for 38 years. Creme Puff of Austin, TX was born in August of 1967 and passed away in August of 2005. He still holds the Guinness World Record for oldest cat ever. "},
    {"fact" : "The musical Cats is based on a collection of T.S. Eliot poems called 'Old Possum’s Book of Practical Cats.'"},
    {"fact" : "A train station in Southeastern Japan is presided over by an adorable 'stationmaster': a 6-year-old calico cat named Nitama."},
    {"fact" : "Polydactyl cats refer to cats with 6 toes on their front paws."},
    {"fact" : "Approximately 200 feral cats roam the grounds of Disneyland, where they help control the amusement park’s rodent population. They’re all spayed or neutered, and park staffers provide them with medical care and extra food. "},
    {"fact" : "The Hungarian word for 'quotation marks,' macskaköröm, literally translates to 'cat claws.'"},
    {"fact" : "Cats can drink seawater! Their kidneys are able to filter salt out of water, something humans can't do."},
    {"fact" : "Contrary to public belief, adult cats shouldn't be given milk as most are lactose intolerant. After a kitten is weaned, the lactase enzyme, which is used to break down lactose,  starts to disappear. Giving your cat milk can cause an upset stomach and other tummy troubles. "},
    {"fact" : "Cats have both short term and long term memory. This means that they can remember, short term, up to 16 hours ago. Cats have both short term and long term memory. This means that they can remember, short term, up to 16 hours ago. "},
    {"fact" : "Scientist suggest that a cat's purr is a method of self-healing! "},
    {"fact" : "Cats make about 100 different sounds. Dogs make only about 10."},
    {"fact" : "There are 473 taste buds on a cat's tongue!"},
    {"fact" : "The technical term for a cat’s hairball is a 'bezoar.'"},
    {"fact" : "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down."},
    {"fact" : "There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds."},
    {"fact" : "Approximately 24 cat skins can make a coat"},
    {"fact" : "While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more"},
    {"fact" : "During the time of the Spanish Inquisition, Pope Innocent VIII condemned cats as evil and thousands of cats were burned. Unfortunately, the widespread killing of cats led to an explosion of the rat population, which exacerbated the effects of the Black Death.["},
    {"fact" : "The first cat in space was a French cat named Felicette (a.k.a. “Astrocat”) In 1963, France blasted the cat into outer space. Electrodes implanted in her brains sent neurological signals back to Earth. She survived the trip."},
    {"fact" : "Approximately 40,000 people are bitten by cats in the U.S. annually."},
    {"fact" : "A cat’s hearing is better than a dog’s. And a cat can hear high-frequency sounds up to two octaves higher than a human."},
    {"fact" : "A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance."},
    {"fact" : "A cat usually has about 12 whiskers on each side of its face."},
    {"fact" : "Perhaps the most famous comic cat is the Cheshire Cat in Lewis Carroll’s Alice in Wonderland. With the ability to disappear, this mysterious character embodies the magic and sorcery historically associated with cats."},
    {"fact" : "In the original Italian version of Cinderella, the benevolent fairy godmother figure was a cat."},
    {"fact" : "The little tufts of hair in a cat’s ear that help keep out dirt direct sounds into the ear, and insulate the ears are called 'ear furnishings.'"},
    {"fact" : "The ability of a cat to find its way home is called “psi-traveling.” Experts think cats either use the angle of the sunlight to find their way or that cats have magnetized cells in their brains that act as compasses."},
    {"fact" : "Cats hate the water because their fur does not insulate well when it’s wet. The Turkish Van, however, is one cat that likes swimming. Bred in central Asia, its coat has a unique texture that makes it water resistant."},
    {"fact" : "Researchers believe the word “tabby” comes from Attabiyah, a neighborhood in Baghdad, Iraq. Tabbies got their name because their striped coats resembled the famous wavy patterns in the silk produced in this city."},
    {"fact" : "Some Siamese cats appear cross-eyed because the nerves from the left side of the brain go to mostly the right eye and the nerves from the right side of the brain go mostly to the left eye. This causes some double vision, which the cat tries to correct by “crossing” its eyes."},
    {"fact" : "Some cats have survived falls of over 65 feet (20 meters), due largely to their “righting reflex.” The eyes and balance organs in the inner ear tell it where it is in space so the cat can land on its feet. Even cats without a tail have this ability.["},
    {"fact" : "The smallest pedigreed cat is a Singapura, which can weigh just 4 lbs (1.8 kg), or about five large cans of cat food. The largest pedigreed cats are Maine Coon cats, which can weigh 25 lbs (11.3 kg), or nearly twice as much as an average cat weighs."},
    {"fact" : "The most popular pedigreed cat is the Persian cat, followed by the Main Coon cat and the Siamese cat."},
    {"fact" : "Many Egyptians worshipped the goddess Bast, who had a woman’s body and a cat’s head."},
    {"fact" : "The biggest wildcat today is the Siberian Tiger. It can be more than 12 feet (3.6 m) long (about the size of a small car) and weigh up to 700 pounds (317 kg)."},
    {"fact" : "Most cats give birth to a litter of between one and nine kittens. The largest known litter ever produced was 19 kittens, of which 15 survived.["},
    {"fact" : "Researchers are unsure exactly how a cat purrs. Most veterinarians believe that a cat purrs by vibrating vocal folds deep in the throat. To do this, a muscle in the larynx opens and closes the air passage about 25 times per second."},
    {"fact" : "The group of words associated with cat (catt, cath, chat, katze) stem from the Latin catus, meaning domestic cat, as opposed to feles, or wild cat."},
    {"fact" : "The first commercially cloned pet was a cat named 'Little Nicky.' He cost his owner $50,000, making him one of the most expensive cats ever."},
    {"fact" : "The claws on the cat’s back paws aren’t as sharp as the claws on the front paws because the claws in the back don’t retract and, consequently, become worn."},
    {"fact" : "The most expensive cat was an Asian Leopard cat (ALC)-Domestic Shorthair (DSH) hybrid named Zeus. Zeus, who is 90% ALC and 10% DSH, has an asking price of £100,000 ($154,000)."},
    {"fact" : "The most traveled cat is Hamlet, who escaped from his carrier while on a flight. He hid for seven weeks behind a panel on the airplane. By the time he was discovered, he had traveled nearly 373,000 miles (600,000 km)."},
    {"fact" : "Rome has more homeless cats per square mile than any other city in the world."},
    {"fact" : "The richest cat is Blackie who was left £15 million by his owner, Ben Rea."},
    {"fact" : "The oldest cat to give birth was Kitty who, at the age of 30, gave birth to two kittens. During her life, she gave birth to 218 kittens."},
    {"fact" : "There are up to 60 million feral cats in the United States alone."},
    {"fact" : "In the 1930s, two Russian biologists discovered that color change in Siamese kittens depend on their body temperature. Siamese cats carry albino genes that work only when the body temperature is above 98° F. If these kittens are left in a very warm room, their points won’t darken and they will stay a creamy white."},
    {"fact" : "In contrast to dogs, cats have not undergone major changes during their domestication process."},
    {"fact" : "A female cat is called a queen or a molly."},
    {"fact" : "Cats are extremely sensitive to vibrations. Cats are said to detect earthquake tremors 10 or 15 minutes before humans can."},
    {"fact" : "The largest cat breed is the Ragdoll. Male Ragdolls weigh between 12 and 20 lbs (5.4-9.0 k). Females weigh between 10 and 15 lbs (4.5-6.8 k)."},
    {"fact" : "A cat called Dusty has the known record for the most kittens. She had more than 420 kittens in her lifetime."},
    {"fact" : "Cats don’t have sweat glands over their bodies like humans do. Instead, they sweat only through their paws."},
    {"fact" : "Grown cats have 30 teeth. Kittens have about 26 temporary teeth, which they lose when they are about 6 months old."},
    {"fact" : "In just seven years, a single pair of cats and their offspring could produce a staggering total of 420,000 kittens."},
    {"fact" : "A cat’s heart beats nearly twice as fast as a human heart, at 110 to 140 beats a minute."},
    {"fact" : "A 2007 Gallup poll revealed that both men and women were equally likely to own a cat. So no more crazy cat lady rumours!"},
    {"fact" : "Foods that should not be given to cats include onions, garlic, green tomatoes, raw potatoes, chocolate, grapes, and raisins. Though milk is not toxic, it can cause an upset stomach and gas. Tylenol and aspirin are extremely toxic to cats, as are many common houseplants. Feeding cats dog food or canned tuna that’s for human consumption can cause malnutrition."},
    {"fact" : "If they have ample water, cats can tolerate temperatures up to 133 °F."},
    {"fact" : "Cats have 32 muscles that control the outer ear (humans have only 6). A cat can independently rotate its ears 180 degrees."},
    {"fact" : "The normal body temperature of a cat is between 100.5 ° and 102.5 °F. A cat is sick if its temperature goes below 100 ° or above 103 °F."},
    {"fact" : "The first cartoon cat was Felix the Cat in 1919. In 1940, Tom and Jerry starred in the first theatrical cartoon “Puss Gets the Boot.” "},
    {"fact" : "The first cat show was organized in 1871 in London. Cat shows later became a worldwide craze."},
    {"fact" : "A commemorative tower was built in Scotland for a cat named Towser, who caught nearly 30,000 mice in her lifetime"},
    {"fact" : "The tiniest cat on record is Mr. Pebbles, a 2-year-old cat that weighed 3 lbs (1.3 k) and was 6.1 inches (15.5 cm) high."},
    {"fact" : "Approximately 1/3 of cat owners think their pets are able to read their minds."},
    {"fact" : "The heaviest cat on record is Himmy, a Tabby from Queensland, Australia. He weighed nearly 47 pounds (21 kg). He died at the age of 10."},
    {"fact" : "Cats have about 130,000 hairs per square inch (20,155 hairs per square centimeter)."},
    {"fact" : "One reason that kittens sleep so much is because a growth hormone is released only during sleep."},
    {"fact" : "Most cats had short hair until about 100 years ago, when it became fashionable to own cats and experiment with breeding."},
    {"fact" : "A cat lover is called an Ailurophilia (Greek: cat+lover)."},
    {"fact" : "All cats have claws, and all except the cheetah sheath them when at rest."},
    {"fact" : "The world’s rarest coffee, Kopi Luwak, comes from Indonesia where a wildcat known as the luwak lives. The cat eats coffee berries and the coffee beans inside pass through the stomach. The beans are harvested from the cat’s dung heaps and then cleaned and roasted. Kopi Luwak sells for about $500 for a 450 g (1 lb) bag."},
    {"fact" : "Isaac Newton invented the cat flap. Newton was experimenting in a pitch-black room. Spithead, one of his cats, kept opening the door and wrecking his experiment. The cat flap kept both Newton and Spithead happy."},
    {"fact" : "Every year, nearly four million cats are eaten in Asia"},
	{"fact" : "On average, cats spend 2/3 of every day sleeping"},
	{"fact" : "Unlike dogs, cats do not have a sweet tooth"},
    {"fact" : 	"When a cat chases its prey, it keeps its head level"},
	{"fact" : "The technical term for a cat's hairball is a bezoar"},
	{"fact" : "A group of cats is called a clowder"},
	{"fact" : "Female cats tend to be right pawed, while male cats are more often left pawed"},
	{"fact" : "A cat cannot climb head first down a tree because its claws are curved the wrong way"},
	{"fact" : "Cats make about 100 different sounds"},
    {"fact" : "A cat's brain is biologically more similar to a human brain than it is to a dog's"},
	{"fact" : "There are more than 500 million domestic cats in the world"},
	{"fact" : "Approximately 24 cat skins can make a coat"},
    {"fact" : 	"During the Middle Ages, cats were associated with witchcraft"},
	{"fact" : "Cats are the most popular pet in North American Cats are North America's most popular pets"},
	{"fact" : "Approximately 40,000 people are bitten by cats in the U.S."},
	{"fact" : "A cat's hearing is better than a dog's"},
	{"fact" : "A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance"},
	{"fact" : "A cat can jump up to five times its own height in a single bound"},
	{"fact" : "Some cats have survived falls of over 20 meters"},
	{"fact" : "Researchers are unsure exactly how a cat purrs"},
	{"fact" : "When a family cat died in ancient Egypt, family members would mourn by shaving off their eyebrows"},
	{"fact" : "In 1888, more than 300,000 mummified cats were found an Egyptian cemetery"},
    {"fact" : 	"Most cats give birth to a litter of between one and nine kittens"},
	{"fact" : "Smuggling a cat out of ancient Egypt was punishable by death"},
    {"fact" : 	"The earliest ancestor of the modern cat lived about 30 million years ago"},
    {"fact" : 	"The biggest wildcat today is the Siberian Tiger"},
	{"fact" : "The smallest wildcat today is the Black-footed cat"},
	{"fact" : "Many Egyptians worshipped the goddess Bast, who had a woman's body and a cat's head"},
	{"fact" : "Mohammed loved cats and reportedly his favorite cat, Muezza, was a tabby"},
    {"fact" : 	"The smallest pedigreed cat is a Singapura, which can weigh just 4 lbs"},
	{"fact" : "Cats hate the water because their fur does not insulate well when it's wet"},
    {"fact" : 	"The Egyptian Mau is probably the oldest breed of cat"},
	{"fact" : "A cat usually has about 12 whiskers on each side of its face"},
    {"fact" : "A cat's eyesight is both better and worse than humans"},
    {"fact" : 	"A cat's jaw can't move sideways, so a cat can't chew large chunks of food"},
	{"fact" : "A cat almost never meows at another cat, mostly just humans"},
	{"fact" : "A cat's back is extremely flexible because it has up to 53 loosely fitting vertebrae"},
    {"fact" : 	"Many cat owners think their cats can read their minds"},
	{"fact" : "Two members of the cat family are distinct from all others: the clouded leopard and the cheetah"},
	{"fact" : "In Japan, cats are thought to have the power to turn into super spirits when they die"},
	{"fact" : "Most cats had short hair until about 100 years ago, when it became fashionable to own cats and experiment with breeding"},
	{"fact" : "Cats have 32 muscles that control the outer ear"},
	{"fact" : "Cats have about 20,155 hairs per square centimeter"},
	{"fact" : "The first cat show was organized in 1871 in London"},
	{"fact" : "Foods that should not be given to cats include onions, garlic, green tomatoes, raw potatoes, chocolate, grapes, and raisins"},
	{"fact" : "A cat's heart beats nearly twice as fast as a human heart"},
	{"fact" : "Cats spend nearly 1/3 of their waking hours cleaning themselves"},
	{"fact" : "Grown cats have 30 teeth"},
	{"fact" : "The largest cat breed by mean weight is the Savannah, at 10kg"},
	{"fact" : "Cats are extremely sensitive to vibrations"},
	{"fact" : "The cat who holds the record for the longest non-fatal fall is Andy"},
	{"fact" : "The richest cat is Blackie who was left £15 million by his owner, Ben Rea"},
	{"fact" : "Around the world, cats take a break to nap —a catnap— 425 million times a day"},
	{"fact" : "In homes with more than one cat, it is best to have cats of the opposite sex. They tend to be better housemates."},
	{"fact" : "Cats are unable to detect sweetness in anything they taste"},
	{"fact" : "Perhaps the oldest cat breed on record is the Egyptian Mau, which is also the Egyptian language's word for cat"},
	{"fact" : "In one litter of kittens, there could be multiple father cats"},
	{"fact" : "Teeth of cats are sharper when they're kittens. After six months, they lose their needle-sharp milk teeth"},
    {"fact" : "Collectively, kittens yawn about 200 million time per hour"},
	{"fact" : "According to the International Species Information Service, there are only three Marbled Cats still in existence worldwide.  One lives in the United States."},
	{"fact" : "Cats show affection and mark their territory by rubbing on people. Glands on their face, tail and paws release a scent to make its mark"},
	{"fact" : "Maine Coons are the most massive breed of house cats. They can weigh up to around 24 pounds"},
	{"fact" : "If you killed a cat in the ages of Pharaoh, you could've been put to death"},
	{"fact" : "Most cats will eat 7 to 20 small meals a day. This interesting fact is brought to you by Nature's Recipe®"},
	{"fact" : "Most cats don't have eyelashes"},
	{"fact" : "Call them wide-eyes: cats are the mammals with the largest eyes"},
	{"fact" : "Cats who eat too much tuna can become addicted, which can actually cause a Vitamin E deficiency"},
	{"fact" : "Cats can pick up on your tone of voice, so sweet-talking to your cat has more of an impact than you think"},
	{"fact" : "Some cats can survive falls from as high up as 65 feet or more"},
    {"fact" : 	"Genetically, cats' brains are more similar to that of a human than a dog's brain"},
	{"fact" : "If your cat's eyes are closed, it's not necessarily because it's tired. A sign of closed eyes means your cat is happy or pleased"},
	{"fact" : "Cats CAN be lefties and righties, just like us. More than forty percent of them are, leaving some ambidextrous"},
	{"fact" : "Cats have the skillset that makes them able to learn how to use a toilet"},
	{"fact" : "Each side of a cat's face has about 12 whiskers"},
	{"fact" : "Landing on all fours is something typical to cats thanks to the help of their eyes and special balance organs in their inner ear. These tools help them straighten themselves in the air and land upright on the ground."},
	{"fact" : "Eating grass rids a cats' system of any fur and helps with digestion"},
	{"fact" : "Cats have 24 more bones than humans"},
	{"fact" : "Black cats aren't an omen of ill fortune in all cultures. In the UK and Australia, spotting a black cat is good luck"},
    {"fact" : 	"The Maine Coon is appropriately the official State cat of its namesake state"},
	{"fact" : "The world's most fertile cat, whose name was Dusty, gave birth to 420 kittens in her lifetime"},
	{"fact" : "Sometimes called the Canadian Hairless, the Sphynx is the first cat breed that has lasted this long—the breed has been around since 1966"},
    {"fact" : 	"Sir Isaac Newton, among his many achievements, invented the cat flap door"},
	{"fact" : "In North America, cats are a more popular pet than dogs. Nearly 73 million cats and 63 million dogs are kept as household pets"},
	{"fact" : "Today, cats are living twice as long as they did just 50 years ago"},
    {"fact" : 	"Outdoor cats' lifespan averages at about 3 to 5 years; indoor cats have lives that last 16 years or more"},
	{"fact" : "Cats have the cognitive ability to sense a human's feelings and overall mood"},
    {"fact" : 	"Cats prefer their food at room temperature—not too hot, not too cold"},
    {"fact" : 	"Bobtails are known to have notably short tails -- about half or a third the size of the average cat"},
	{"fact" : "A fingerprint is to a human as a nose is to a cat"},
    {"fact" : 	"Cats have over 100 sounds in their vocal repertoire, while dogs only have 10"},
    {"fact" : 	"Cats came to the Americas from Europe as pest controllers in the 1750s"},
    {"fact" : 	"According to the Association for Pet Obesity Prevention (APOP), about 50 million of our cats are overweight"},
    {"fact" : 	"Cats use their whiskers to measure openings, indicate mood and general navigation"},
    {"fact" : 	"Blue-eyed cats have a high tendency to be deaf, but not all cats with blue eyes are deaf",},
    {"fact" : 	"Ancient Egyptians first adored cats for their finesse in killing rodents—as far back as 4,000 years ago"},
    {"fact" : 	"The color of York Chocolates becomes richer with age. Kittens are born with a lighter coat than the adults"},
    {"fact" : 	"Because of widespread cat smuggling in ancient Egypt, the exportation of cats was a crime punishable by death"},
    {"fact" : 	"Cats actually have dreams, just like us. They start dreaming when they reach a week old"},
    {"fact" : 	"It is important to include fat in your cat's diet because they're unable to make the nutrient in their bodies on their own"},
    {"fact" : 	"A cat's field of vision does not cover the area right under its nose"},
    {"fact" : 	"Talk about Facetime: Cats greet one another by rubbing their noses together"},
    {"fact" : 	"Cats sleep 16 hours of any given day"},
    {"fact" : 	"Although it is known to be the tailless cat, the Manx can be born with a stub or a short tail"},
    {"fact" : 	"A Selkirk slowly loses its naturally-born curly coat, but it grows again when the cat is around 8 months"},
    {"fact" : 	"A cat's heart beats almost double the rate of a human heart, from 110 to 140 beats per minute"},
    {"fact" : 	"Ragdoll cats live up to their name: they will literally go limp, with relaxed muscles, when lifted by a human"},
    {"fact" : 	"Unlike most other cats, the Turkish Van breed has a water-resistant coat and enjoys being in water"},
    {"fact" : 	"Webbed feet on a cat? The Peterbald's got 'em! They make it easy for the cat to get a good grip on things with skill"},
    {"fact" : 	"Despite appearing like a wild cat, the Ocicat does not have an ounce of wild blood"},
    {"fact" : 	"Cat's back claws aren't as sharp as the claws on their front paws"},
    {"fact" : 	"A group of kittens is called a kindle, and clowder is a term that refers to a group of adult cats"},
    {"fact" : 	"A third of cats' time spent awake is usually spent cleaning themselves"},
    {"fact" : 	"A female cat is also known to be called a queen or a molly"},
    {"fact" : 	"Want to call a hairball by its scientific name? Next time, say the word bezoar"},
	{"fact" : "Cats have a 5 toes on their front paws and 4 on each back paw"},
	{"fact" : "In multi-pet households, cats are able to get along especially well with dogs if they're introduced when the cat is under 6 months old and the dog is under one year old"},
    {"fact" : 	"Twenty-five percent of cat owners use a blow drier on their cats after bathing"},
    {"fact" : 	"Rather than nine months, cats' pregnancies last about nine weeks"},
    {"fact" : 	"It has been said that the Ukrainian Levkoy has the appearance of a dog, due to the angles of its face"},
	{"fact" : "A cat can reach up to five times its own height per jump"},
	{"fact" : "Cats have a strong aversion to anything citrus"},
	{"fact" : "Cats would rather starve themselves than eat something they don't like. This means they will refuse an unpalatable -- but nutritionally complete -- food for a prolonged period"},
	{"fact" : "The Snow Leopard, a variety of the California Spangled Cat, always has blue eyes"},
	{"fact" : "The two outer layers of a cat's hair are called, respectively, the guard hair and the awn hair"},
	{"fact" : "When a household cat died in ancient Egypt, its owners showed their grief by shaving their eyebrows"},
	{"fact" : "Caution during Christmas: poinsettias may be festive, but they’re poisonous to cats"},
	{"fact" : "Most kittens are born with blue eyes, which then turn color with age"},
    {"fact" : 	"A cat's meow is usually not directed at another cat, but at a human. To communicate with other cats, they will usually hiss, purr and spit."},
	{"fact" : "According to the Guinness World Records, the largest domestic cat litter totaled at 19 kittens, four of them stillborn"},
	{"fact" : "As temperatures rise, so do the number of cats. Cats are known to breed in warm weather, which leads many animal advocates worried about the plight of cats under Global Warming."},
	{"fact" : "Cats' rough tongues enable them to clean themselves efficiently and to lick clean an animal bone"},
	{"fact" : "Most cat litters contain four to six kittens"},
	{"fact" : "A Japanese cat figurine called Maneki-Neko is believed to bring good luck"},
	{"fact" : "One of Muhammad's companions was nicknamed Abu Hurairah, or Father of the Kitten, because he loved cats"},
	{"fact" : "Elvis Presley’s Chinese name is Mao Wong, or Cat King"},
]