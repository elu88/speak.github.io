const quizData = [
    { word: "Hello", correctAnswer: "ሰላም", options: ["ሰላም", "ሃፕፕይ", "ጥሩ"] },
      { word: "Dough", correctAnswer: "ሊጥ", options: ["ወይን", "ሊጥ", "ዳቦ"] },
      { word: "To call", correctAnswer: "መደወል", options: ["መቁረጥ", "ሳንቲም", "መደወል"] },
      { word: "Bye", correctAnswer: "ቻው", options: ["ቻው", "ኮፍያ", "ቲማቲም"] },
      { word: "House", correctAnswer: "ቤት", options: ["ዓይን", "ቤት", "መጽሐፍ"] },
      { word: "Clothes", correctAnswer: "ልብሶች", options: ["ልብሶች", "ሰሃን", "ምግብ"] },
      { word: "Heart", options: ["ሕጻን", "ሶስት", "ልብ"], correctAnswer: "ልብ" },
      { word: "Minute", options: ["ደቂቃ", "ለስላሳ", "ጊዜ"], correctAnswer: "ደቂቃ" },
      { word: "Eye", options: ["ዓይን", "ረጅም", "መልህቅ"], correctAnswer: "ዓይን" },
      { word: "Nail", options: ["ቦርሳ", "ቀሚስ", "ጥፍር"], correctAnswer: "ጥፍር" },
      { word: "Strong", options: ["ጠንካራ", "አልጋ", "ሞክር"], correctAnswer: "ጠንካራ" },
      { word: "Question", options: ["ጥያቄ", "አፍንጫ", "መልስ"], correctAnswer: "ጥያቄ" },
      { word: "Money", options: ["ገንዘብ", "እግር", "አዲስ"], correctAnswer: "ገንዘብ" },
      { word: "Pencil", options: ["እርሳስ", "ጻፍ", "ብእር"], correctAnswer: "እርሳስ" },
      { word: "Pen", options: ["ብእር", "ወንበር", "ሱሪ"], correctAnswer: "ብእር" },
      { word: "Moon", options: ["ጨረቃ", "ወርሒ", "ፀሐይ"], correctAnswer: "ጨረቃ" },
      { word: "Sun", options: ["ቢጫ", "ፀሐይ", "ሰማያዊ"], correctAnswer: "ፀሐይ" },
      { word: "Night", options: ["ለሊት", "ምግብ", "ክፈት"], correctAnswer: "ለሊት" },
      { word: "Day", options: ["ቀን", "ቀዝቃዛ", "ቀይ"], correctAnswer: "ቀን" },
      { word: "Onion", options: ["ሽንኩርት", "ረፍዷል", "ትልቅ"], correctAnswer: "ሽንኩርት" },
      { word: "Floor", options: ["መሬት", "ሰማይ", "ቦታ"], correctAnswer: "መሬት" },
      { word: "Car", options: ["መኪና", "ምግብ", "መጽሐፍ"], correctAnswer: "መኪና" },
      { word: "Dog", options: ["ውሻ", "እሁድ", "ትንሽ"], correctAnswer: "ውሻ" },
      { word: "Cat", options: ["ድመት", "ልብሶች", "አሳ"], correctAnswer: "ድመት" }, 
    { word: "Food", options: ["ብርድ ልብስ", "ስልክ", "ምግብ"], correctAnswer: "ምግብ" },
  { word: "Milk", options: ["ወተት", "ሳምንት", "አይጥ"], correctAnswer: "ወተት" },
  { word: "Water", options: ["ውሃ", "ጫማ", "ዶሮ"], correctAnswer: "ውሃ" },
  { word: "Flower", options: ["አበባ", "ቆንጆ", "እዚህ"], correctAnswer: "አበባ" },
  { word: "Shoe", options: ["ብርሃን", "ትራስ", "ጫማ"], correctAnswer: "ጫማ" },
  { word: "Chair", options: ["ሣር", "ወንበር", "በር"], correctAnswer: "ወንበር" },
  { word: "Mother", options: ["እናት", "ወረቀት", "እህት"], correctAnswer: "እናት" },
  { word: "Father", options: ["እግር", "ፀጉር", "አባት"], correctAnswer: "አባት" },
  { word: "Child", options: ["አፍ", "ልጅ", "እግር"], correctAnswer: "ልጅ" },
  { word: "Boy", options: ["ወንድ", "ካልሲ", "ስልክ"], correctAnswer: "ወንድ" },
  { word: "Girl", options: ["መጽሐፍ", "እርሳስ", "ሴት"], correctAnswer: "ሴት" },
  { word: "Time", options: ["ቤት", "መኪና", "ጊዜ"], correctAnswer: "ጊዜ" },
  { word: "Brother", options: ["ጆሮ", "ወንድም", "ጫማ"], correctAnswer: "ወንድም" },
  { word: "Sister", options: ["ወደ መሬት", "ወንድም", "እህት"], correctAnswer: "እህት" },
  { word: "Elder", options: ["ታላቅ", "ማንበብ", "ወደ ላይ"], correctAnswer: "ታላቅ" },
  { word: "Above", options: ["በላይ", "መጮህ", "ድምፅ"], correctAnswer: "በላይ" },
  { word: "Afraid", options: ["መፍራት", "መሮጥ", "ቆንጆ"], correctAnswer: "መፍራት" },
  { word: "After", options: ["በኋላ", "ማንኪያ", "ትራስ"],  correctAnswer: "በኋላ" },
  { word: "Again", options: ["እንደገና", "መስኮት", "ፀሐይ"],  correctAnswer: "እንደገና" },
  { word: "Age", options: ["ዕድሜ", "መጫወት", "ዓይን"], correctAnswer: "ዕድሜ" },
  { word: "Before", options: ["ከዚህ በፊት", "እጅ", "አፍንጫ"], correctAnswer: "ከዚህ በፊት" },
  { word: "Always", options: ["ሁልጊዜ", "ጥፍር", "ቲማቲም"], correctAnswer: "ሁልጊዜ" },
  { word: "Another", options: ["ሌላ", "ፊት", "ሰባት"], correctAnswer: "ሌላ" },
  { word: "Answer", options: ["መልስ", "ሰባት", "ጥርሶች"], correctAnswer: "መልስ" },
  { word: "Any", options: ["ማንኛውም", "በር", "ጻፍ"], correctAnswer: "ማንኛውም" },
  { word: "Anyone", options: ["ማንም", "ሳቅ", "ተመሳሳይ"], correctAnswer: "ማንም" },
  { word: "Anything", options: ["ማንኛውንም ነገር", "ተከተል", "መጣል"], correctAnswer: "ማንኛውንም ነገር" },
  { word: "Apple", options: ["ፖም", "ጊዜ", "መጠጣት"], correctAnswer: "ፖም" },
  { word: "Aunt", options: ["አክስት", "ቀዝቃዛ", "ትኩስ"], correctAnswer: "አክስት" },
  { word: "Baby", options: ["ሕፃን", "አህያ", "ቀሚስ"], correctAnswer: "ሕፃን" },
  { word: "Bad", options: ["መጥፎ", "ልብሶች", "እሳት"], correctAnswer: "መጥፎ" },
  { word: "Bag", options: ["ቦርሳ", "ጥርስ", "ንፁህ"], correctAnswer: "ቦርሳ" },
  { word: "Ball", options: ["ኳስ", "አበባ", "አዲስ"], correctAnswer: "ኳስ" },
  { word: "Bank", options: ["ባንክ", "ዶሮ", "መንካት"], correctAnswer: "ባንክ" },
  { word: "Beautiful", options: ["ቆንጆ", "ገላ መታጠብ", "ሰው"], correctAnswer: "ቆንጆ" },
  { word: "Bed", options: ["አልጋ", "ሺንታቤት", "መብላት"], correctAnswer: "አልጋ" },
  { word: "Bedroom", options: ["መኝታ ቤት", "ሻንጣ", "አሳይ"], correctAnswer: "መኝታ ቤት" },
  { word: "Behind", options: ["ከኋላ", "አስራ ስድስት", "ስምት"], correctAnswer: "ከኋላ" },
  { word: "Below", options: ["በታች", "ጓደኛ", "ሰኞ"], correctAnswer: "በታች" },
  { word: "Better", options: ["የተሻለ", "ማክሰኞ", "እሁድ"], correctAnswer: "የተሻለ" },
  { word: "Big", options: ["ትልቅ", "ትንሽ", "ደስተኛ"], correctAnswer: "ትልቅ" },
  { word: "Black", options: ["ጥቁር", "እስክሪብቶ", "መቆረጫ"], correctAnswer: "ጥቁር" },
  { word: "Blood", options: ["ደም", "ሳሙና", "ሸሚዝ"], correctAnswer: "ደም" },
  { word: "Blue", options: ["ሰማያዊ", "ሱሪ", "ዛፍ"], correctAnswer: "ሰማያዊ" },
  { word: "Bone", options: ["አጥንት", "መንገድ", "ካሜራ"], correctAnswer: "አጥንት" },
   { word: "Book", options: ["መጽሐፍ", "ቦርሳ", "ኳስ"], correctAnswer: "መጽሐፍ" },
  { word: "Both", options: ["ሁለቱም", "ቁልፍ", "ዳቦ"], correctAnswer: "ሁለቱም" },
  { word: "Good", options: ["ጥሩ", "ወተት", "ሩዝ"], correctAnswer: "ጥሩ" },
  { word: "Bread", options: ["ዳቦ", "እንቁላል", "ስጋ"], correctAnswer: "ዳቦ" },
  { word: "Break", options: ["መስበር", "ስካር", "ቡና"], correctAnswer: "መስበር" },
  { word: "Breakfast", options: ["ቁርስ", "ሻይ", "ክፍል"], correctAnswer: "ቁርስ" },
  { word: "Breathe", options: ["መተንፈስ", "መጥረጊያ", "ምግብ ቤት"], correctAnswer: "መተንፈስ" },
  { word: "Car", options: ["መኪና", "መራመድ", "መማር"], correctAnswer: "መኪና" },
   { word: "Children", options: ["ልጆች", "ግዛ", "ቀይ", "ቡኒ"], correctAnswer: "ልጆች" },
  { word: "Chocolate", options: ["ቸኮሌት", "አረንጓዴ", "ጥቁር"], correctAnswer: "ቸኮሌት" },
  { word: "Choice", options: ["ምርጫ", "ኮምፒውተር", "መነጽር"], correctAnswer: "ምርጫ" },
  { word: "Circle", options: ["ክብ", "መክፈት", "መዝጋት"], correctAnswer: "ክብ" },
  { word: "City", options: ["ከተማ", "ዋና", "ብላ"], correctAnswer: "ከተማ" },
  { word: "Clean", options: ["ንጹህ", "መንዳት", "ማልቀስ"], correctAnswer: "ንጹህ" },
  { word: "Coffee", options: ["ቡና", "መርሳ", "መንካት"], correctAnswer: "ቡና" },
  { word: "Coin", options: ["ሳንቲም", "ከረሜላ", "ብረት"], correctAnswer: "ሳንቲም" },
  { word: "Continue", options: ["ቀጥል", "ቦታ", "ማስተካከል"], correctAnswer: "ቀጥል" },
  { word: "Cry", options: ["ማልቀስ", "መጥላት", "መኸድ"], correctAnswer: "ማልቀስ" },
  { word: "Daughter", options: ["ሴት ልጅ", "ትቶ መሄድ", "ሰላም"], correctAnswer: "ሴት ልጅ" },
  { word: "Decrease", options: ["ቀንስ", "መስማት", "ሰማያዊ"], correctAnswer: "ቀንስ" },
  { word: "Dream", options: ["ህልም", "ቅዳሜ", "ፒዛ"], correctAnswer: "ህልም" },
  { word: "Drive", options: ["መንዳት", "ዘፈን", "ማጠብ"], correctAnswer: "መንዳት" },
   { word: "Dry", options: ["ደረቅ", "ማድረግ", "ልጅ"], correctAnswer: "ደረቅ" },
  { word: "Ear", options: ["ጆሮ", "ነገ", "ሰዓት"], correctAnswer: "ጆሮ" },
  { word: "Easy", options: ["ቀላል", "ደቂቃ", "ዛሬ"], correctAnswer: "ቀላል" },
  { word: "Education", options: ["ትምህርት", "ማታ", "አመት"], correctAnswer: "ትምህርት" },
  { word: "Egg", options: ["እንቁላል", "ወር", "ሳምንት"], correctAnswer: "እንቁላል" },
  { word: "Equal", options: ["እኩል", "ቀን", "ሌሊት"], correctAnswer: "እኩል" },
  { word: "Entrance", options: ["መግቢያ", "ጥዋት", "አልጋ"], correctAnswer: "መግቢያ" },
  { word: "Face", options: ["ፊት", "ላም", "ሳር"], correctAnswer: "ፊት" },
  { word: "False", options: ["ውሸት", "ነፋስ", "ዝናብ"], correctAnswer: "ውሸት" },
  { word: "Family", options: ["ቤተሰብ", "በረዶ", "ባቡር"], correctAnswer: "ቤተሰብ" },
   { word: "Fast", options: ["ፈጣን", "ከባድ", "ቀላል"], correctAnswer: "ፈጣን" },
  { word: "Fear", options: ["ፍርሃት", "መስራት", "የእኔ"], correctAnswer: "ፍርሃት" },
  { word: "Fever", options: ["ትኩሳት", "ገጠመ", "ቢራቢሮ"], correctAnswer: "ትኩሳት" },
  { word: "Finish", options: ["ጨርስ", "መጫወት", "ቋንቋ"], correctAnswer: "ጨርስ" },
  { word: "Flour", options: ["ዱቄት", "ታሪክ", "መምጣት"], correctAnswer: "ዱቄት" },
  { word: "Forest", options: ["ጫካ", "መደበቅ", "የጆሮ ጌጥ"], correctAnswer: "ጫካ" },
  { word: "Friend", options: ["ጓደኛ", "ዋንጫ", "ስዕል"], correctAnswer: "ጓደኛ" },
  { word: "Game", options: ["ጨዋታ", "ግራ", "ቀኝ"], correctAnswer: "ጨዋታ" },
  { word: "Gift", options: ["ስጦታ", "ተመለስ", "ወደፊት"], correctAnswer: "ስጦታ" },
  { word: "Green", options: ["አረንጓዴ", "ፈጣን", "ቀስቢል"], correctAnswer: "አረንጓዴ" },
  { word: "Hair", options: ["ፀጉር", "ሙሉ", "አላለቀም"], correctAnswer: "ፀጉር" },
  { word: "Half", options: ["ግማሽ", "ጥያቄ", "መልስ"], correctAnswer: "ግማሽ" },
  { word: "Hand", options: ["እጅ", "ቆሻሻ", "መስመር"], correctAnswer: "እጅ" },
  { word: "Happy", options: ["ደስተኛ", "መግፋት", "መጎተት"], correctAnswer: "ደስተኛ" },
  { word: "Hard", options: ["ከባድ", "ለመቆየት", "ስም"], correctAnswer: "ከባድ" },
  { word: "Hat", options: ["ኮፍያ", "ማጠፍ", "መጨመር"], correctAnswer: "ኮፍያ" },
  { word: "High", options: ["ከፍተኛ", "ውሸት", "እውነት"], correctAnswer: "ከፍተኛ" },
  { word: "Increase", options: ["መጨመር", "ማግኘት", "ደረጃዎች"], correctAnswer: "መጨመር" },
  { word: "Inside", options: ["ውስጥ", "ተገኝቷል", "ብር"], correctAnswer: "ውስጥ"},
  { word: "Knife", options: ["ቢላዋ", "አካባቢ", "ማውራት"], correctAnswer: "ቢላዋ" },
  { word: "Know", options: ["ማወቅ", "ጀበና", "ምሳ"], correctAnswer: "ማወቅ" },
  { word: "Lady", options: ["እመቤት", "እራት", "ሃያ ሰባት"], correctAnswer: "እመቤት" },
  { word: "Laugh", options: ["ሳቅ", "ለመፈለግ", "የልደት ቀን"], correctAnswer: "ሳቅ" },
  { word: "Life", options: ["ሕይወት", "መቁሰል", "ዘይት"], correctAnswer: "ሕይወት" },
  { word: "Light", options: ["ብርሃን", "ምንጣፍ", "ማስቀመጥ"], correctAnswer: "ብርሃን" },
  {word: "Love", options: ["ፍቅር", "መሸጥ", "አይጥ"], correctAnswer: "ፍቅር" },
  { word: "Monkey", options: ["ዝንጀሮ", "መቀስቀስ", "ሐምራዊ"], correctAnswer: "ዝንጀሮ" },
  { word: "Song", options: ["ዘፈን", "ለመክፈት", "አንድ ላየ"], correctAnswer: "ዘፈን" },
        { word: "ጥርስ", correctAnswer: "Tooth", options: ["Tooth", "Dog", "Sun"] },
      { word: "ድመት", correctAnswer: "Cat", options: ["Cat", "Log", "Chair"] },
      { word: "ኮከብ", correctAnswer: "Star", options: ["Star", "Tree", "Dates"] },
      { word: "ወንዝ", correctAnswer: "River", options: ["River", "Carpet", "Door"] },
      { word: "ወፍ", correctAnswer: "Bird", options: ["Couch", "Egg", "Bird"] },
      { word: "ሎሚ", correctAnswer: "Lemon", options: ["Lemon", "TV", "Room"] },
      { word: "አይጥ", options: ["Rat", "Bug", "Bat"], correctAnswer: "Rat" },
      { word: "ሜዳ", options: ["Field", "Soccer", "Food"], correctAnswer: "Field" },
      { word: "ዳቦ", options: ["Bread", "Time", "House"], correctAnswer: "Bread" },
      { word: "ትላንት", options: ["Yesterday", "Tomorrow", "Today"], correctAnswer: "Yesterday" },
      { word: "ቀይ", options: ["Red", "Fat", "Big"], correctAnswer: "Red" },
      { word: "ትራስ", options: ["Pillow", "Loud", "Small"], correctAnswer: "Pillow" },
      { word: "ሽቶ", options: ["Perfume", "Childish", "Sneaky"], correctAnswer: "Perfume" },
      { word: "ቀለም", options: ["Paint", "Clouds", "Trees"], correctAnswer: "Paint" },
      { word: "ጥፍር ቀለም", options: ["Nail Polish", "Chips", "Soda"], correctAnswer: "Nail Polish" },
      { word: "ማንበብ", options: ["To read", "To speed", "To jump"], correctAnswer: "To read" }, 
      { word: "መተኛት", options: ["To sleep", "To hide", "To win"], correctAnswer: "To sleep" },
      { word: "ውሃ", options: ["Water", "Fingers", "Ring"], correctAnswer: "Water" },
      { word: "አፍ", options: ["Mouth", "Cheese", "Apples"], correctAnswer: "Mouth" },
      { word: "ዓይኖች", options: ["Eyes", "Nose", "Pink"], correctAnswer: "Eyes" },
      { word: "ከንፈር", options: ["Paper", "Heart", "Lip"], correctAnswer: "Lip" },
      { word: "ሱሪ", options: ["Pants", "Papers", "Newspaper"], correctAnswer: "Pants" },
      { word: "መቆም", options: ["Ruler", "Math", "To stand"], correctAnswer: "To stand" },
      { word: "ሹራብ", options: ["Books", "Memories", "Sweater"], correctAnswer: "Sweater" }, 
    { word: "ሸሚዝ", options: ["History", "Games", "Shirt"], correctAnswer: "Shirt" },
  { word: "መናገር", options: ["To speak", "Subject", "School"], correctAnswer: "To speak" },
  { word: "መምጣት", options: ["Dog", "Cat", "To come"], correctAnswer: "To come" },
  { word: "ጫማዎች", options: ["Driving", "To drive", "Shoes"], correctAnswer: "Shoes" },
  { word: "በር", options: ["Tea", "TV", "Door"], correctAnswer: "Door" },
  { word: "መስኮት", options: ["Tests", "Remote", "Window"], correctAnswer: "Window" },
  { word: "ስልክ", options: ["Airplane", "Phone", "Computer"], correctAnswer: "Phone" },
  { word: "እጆች", options: ["Volume", "Hands", "Wifi"], correctAnswer: "Hands" },
  { word: "እግር", options: ["Vaseline", "Colors", "Leg"], correctAnswer: "Leg" },
  { word: "ትኩስ", options: ["Brown", "Hot", "Light"], correctAnswer: "Hot" },
  { word: "ቀዝቃዛ", options: ["Cold", "Winter", "Summer"], correctAnswer: "Cold" },
  { word: "አበባ", options: ["Busy", "Flower", "Twelve"], correctAnswer: "Flower" },
  { word: "ነጭ", options: ["Tired", "White", "Scarf"], correctAnswer: "White" },
  { word: "ምግብ", options: ["Shelf", "Food", "Sweating"], correctAnswer: "Food" },
  { word: "መሳቢያ", options: ["Drawer", "Science", "Mom"], correctAnswer: "Drawer" },
  { word: "መሄድ", options: ["To watch", "To dance", "To leave"], correctAnswer: "To leave" },
  { word: "ሆድ", options: ["Stomach", "Arm", "Bleeding"], correctAnswer: "Stomach" },
  { word: "ብርቱካን", options: ["Balloons", "Orange", "Party"],  correctAnswer: "Orange" },
  { word: "ቢጫ", options: ["Trip", "Yellow", "Vacation"],  correctAnswer: "Yellow" },
  { word: "ሰማያዊ", options: ["Happy", "Blue", "Excitement"], correctAnswer: "Blue" },
  { word: "ጥቁር", options: ["Hours", "Sunset", "Black"], correctAnswer: "Black" },
  { word: "ቢራቢሮ", options: ["Ankle", "Pens", "Butterfly"], correctAnswer: "Butterfly" },
  { word: "ቤት", options: ["House", "Horse", "Cousin"], correctAnswer: "House" },
  { word: "አጎት", options: ["Sister", "Uncle", "Sibling"], correctAnswer: "Uncle" },
  { word: "አጭር", options: ["Parents", "Sun", "Short"], correctAnswer: "Short" },
  { word: "ረጅም", options: ["Plants", "Birthday", "Tall"], correctAnswer: "Tall" },
  { word: "አመት", options: ["Year", "Watch", "Charger"], correctAnswer: "Year" },
  { word: "ወር", options: ["Cabinet", "Plates", "Month"], correctAnswer: "Month" },
  { word: "ሰዎች", options: ["Pottery", "Dorms", "People"], correctAnswer: "People" },
  { word: "የትኛው", options: ["Stop", "Which", "Rainy"], correctAnswer: "Which" },
  { word: "አዎ", options: ["Yes", "Leave", "Go"], correctAnswer: "Yes" },
  { word: "አመሰግናለሁ", options: ["Thank you", "You’re welcome", "Hurry"], correctAnswer: "Thank you" },
  { word: "ችግር የለውም", options: ["No problem", "Always", "Another"], correctAnswer: "No problem" },
  { word: "እሺ", options: ["Before", "Skinny", "Okay"], correctAnswer: "Okay" },
  { word: "ባይ", options: ["Love", "Bye", "Interests"], correctAnswer: "Bye" },
  { word: "መስማት", options: ["Dog", "To listen", "To get dressed"], correctAnswer: "To listen" },
  { word: "መብላት", options: ["To cry", "To scream", "To eat"], correctAnswer: "To eat" },
  { word: "መጠጣት", options: ["To wake up", "To drink", "To vaccinate"], correctAnswer: "To Drink" },
  { word: "ወርቅ", options: ["Ticket", "Silver", "Gold"], correctAnswer: "Gold" },
  { word: "ደም", options: ["Blood", "Brain", "Thinking"], correctAnswer: "Blood" },
  { word: "ጊዜ", options: ["Homework", "Family", "Time"], correctAnswer: "Time" },
  { word: "ሀብታም", options: ["Homework", "Family", "Rich"], correctAnswer: "Rich" },
  { word: "ቀላል", options: ["Homework", "Family", "Easy"], correctAnswer: "Easy" },
  { word: "ክፊት", options: ["Cover", "Open", "Time"], correctAnswer: "Open" },
  { word: "መታጠቢያ ቤት", options: ["Homework", "Bathroom", "Time"], correctAnswer: "Bathroom" },
  { word: "ዓሳ", options: ["Fish", "Pan", "Time"], correctAnswer: "Fish" },
  { word: "እሳት", options: ["Bookshelf", "Fire", "Oil"], correctAnswer: "Fire" },
  
  ];
  
  let currentQuestion = 0;
  
  // Function to load the current question and its options
  function loadQuestion() {
      const currentData = quizData[currentQuestion];
      document.getElementById('word').textContent = currentData.word;
  
      const optionsContainer = document.getElementById('options');
      optionsContainer.innerHTML = ''; // Clear previous options
  
      // Shuffle answer options if available
      let answerOptions = currentData.options ? currentData.options.slice() : currentData.answers.slice();
      shuffleArray(answerOptions);
  
      // Create and append option elements
      answerOptions.forEach((optionValue) => {
          const optionLabel = document.createElement('label');
          optionLabel.classList.add('option');
          
          const input = document.createElement('input');
          input.type = 'radio';
          input.name = 'answer';
          input.value = optionValue;
          
          const answerBox = document.createElement('div');
          answerBox.classList.add('answer-box');
          answerBox.textContent = optionValue;
          
          optionLabel.appendChild(input);
          optionLabel.appendChild(answerBox);
          optionsContainer.appendChild(optionLabel);
      });
  
      // Clear previous result message and adjust button visibility
      document.getElementById('result').textContent = '';
      document.getElementById('submitBtn').style.display = 'block';
      document.getElementById('nextBtn').style.display = 'none';
  }
  
  // Event listener for the submit button
  document.getElementById('submitBtn').addEventListener('click', function() {
      const selectedAnswer = document.querySelector('input[name="answer"]:checked');
      const resultMessage = document.getElementById('result');
      const currentData = quizData[currentQuestion];
  
      if (selectedAnswer) {
          if (selectedAnswer.value === currentData.correctAnswer) {
              resultMessage.style.color = 'green';
              resultMessage.textContent = 'Correct!';
          } else {
              resultMessage.style.color = 'red';
              resultMessage.textContent = 'Wrong! Correct answer is: ' + currentData.correctAnswer;
          }
          // Disable all answer inputs after submitting
          document.querySelectorAll('input[name="answer"]').forEach(input => input.disabled = true);
          document.getElementById('submitBtn').style.display = 'none';
          document.getElementById('nextBtn').style.display = 'block';
      } else {
          resultMessage.style.color = 'red';
          resultMessage.textContent = 'Please select an answer.';
      }
  });
  
  // Event listener for the next button
  document.getElementById('nextBtn').addEventListener('click', function() {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
          loadQuestion();
      } else {
          alert("Quiz completed!");
          // Optionally, reset the quiz or navigate to a different page
      }
  });
  
  // Load the first question when the page loads
  window.onload = loadQuestion;
  
  // Function to shuffle an array using Fisher-Yates (Knuth) shuffle algorithm
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }
  
  // Shuffle the quizData array before starting the quiz
  shuffleArray(quizData);
  