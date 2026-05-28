// E-board members — swap initials for portrait image paths in /public/img/ when ready
export const MEMBERS = [
  // Executive
  { id: 1,  name: "Tyson Jordan",       role: "President",                                       roman: "I",     category: "executive",  initials: "TJ", classification: "Junior",    major: "Civil Engineering",        image: "/img/members/IMG_1570.jpg" },
  { id: 2,  name: "Toboris Simpkins",   role: "Co-President",                                    roman: "II",    category: "executive",  initials: "TS", classification: "Junior",    major: "Kinesiology",               image: "/img/members/IMG_1571.jpg" },
  { id: 3,  name: "David Boyd",         role: "Vice President",                                  roman: "III",   category: "executive",  initials: "DB", classification: "Junior",    major: "Information Technology",    image: "/img/members/IMG_1572.jpg" },
  { id: 4,  name: "Xavier Johnson",     role: "Chief of Staff",                                  roman: "IV",    category: "executive",  initials: "XJ", classification: "Senior",    major: "Construction Management",   image: "/img/members/IMG_1574.jpg" },
  { id: 5,  name: "Rodercik B. Loftin", role: "Secretary",                                       roman: "V",     category: "executive",  initials: "RL", classification: "Junior",    major: "Psychology",                image: "/img/members/IMG_1573.jpg" },
  { id: 6,  name: "Tariq Harris",       role: "Treasurer",                                       roman: "VI",    category: "executive",  initials: "TH", classification: "Senior",    major: "Civil Engineering",         image: "/img/members/IMG_1575.jpg" },
  // Operations
  { id: 7,  name: "Isaiah Griggs",      role: "Social Media Chair",                              roman: "VII",   category: "operations", initials: "IG", classification: "Senior",    major: "Computer Engineering",      image: "/img/members/IMG_1577.jpg" },
  { id: 8,  name: "Miles Johnson",      role: "Social Media Chair",                              roman: "VIII",  category: "operations", initials: "MJ", classification: "Sophomore", major: "Computer Science",          image: "/img/members/IMG_1578.jpg" },
  { id: 9,  name: "Cameron Love",       role: "Membership Engagement",                           roman: "IX",    category: "operations", initials: "CL", classification: "Sophomore", major: "Computer Science",          image: "/img/members/IMG_1589.jpg" },
  { id: 10, name: "Micah Merriweather", role: "Event Coordinator",                               roman: "X",     category: "operations", initials: "MM", classification: "Junior",    major: "Computer Engineering",      image: "/img/members/IMG_1576.jpg" },
  { id: 11, name: "Jordan Lee",         role: "Freshman Event Coordinator",                      roman: "XIX",   category: "operations", initials: "JL", classification: "Sophomore", major: "Computer Engineering",      image: "/img/members/IMG_1587.jpg" },
  // Committees
  { id: 12, name: "Justin Owens",       role: "Leadership & Professionalism Committee Lead",     roman: "XI",    category: "committees", initials: "JO", classification: "Junior",    major: "Criminal Justice",          image: "/img/members/IMG_1580.jpg" },
  { id: 13, name: "Hakeem Cole",        role: "Leadership & Professionalism Committee Co-Lead",  roman: "XII",   category: "committees", initials: "HC", classification: "Sophomore", major: "Electrical Engineering",    image: "/img/members/IMG_1581.jpg" },
  { id: 14, name: "Arrington Ward Jr.", role: "Business & Finance Committee Lead",               roman: "XIII",  category: "committees", initials: "AW", classification: "Sophomore", major: "Business Administration",   image: "/img/members/IMG_1582.jpg" },
  { id: 15, name: "Preston Wrights",    role: "Business & Finance Committee Co-Lead",            roman: "XIV",   category: "committees", initials: "PW", classification: "Sophomore", major: "Computer Science",          image: "/img/members/IMG_1588.jpg" },
  { id: 16, name: "Jordan Hickman",     role: "STEM Committee Lead",                             roman: "XV",    category: "committees", initials: "JH", classification: "Junior",    major: "Civil Engineering",         image: "/img/members/IMG_1583.jpg" },
  { id: 17, name: "Darius Corbett",     role: "STEM Committee Co-Lead",                          roman: "XVI",   category: "committees", initials: "DC", classification: "Senior",    major: "Biology/Pre-Law",           image: "/img/members/IMG_1584.jpg" },
  { id: 18, name: "Brayden Ward",       role: "Community Service Committee Lead",                roman: "XVII",  category: "committees", initials: "BW", classification: "Junior",    major: "Mechanical Engineering",    image: "/img/members/IMG_1585.jpg" },
  { id: 19, name: "Joshua Meadows",     role: "Community Service Committee Co-Lead",             roman: "XVIII", category: "committees", initials: "JM", classification: "Junior",    major: "Civil Engineering",         image: "/img/members/IMG_1586.jpg" },
];

export const MEMBER_FILTERS = [
  { id: "all",        label: "All · 19" },
  { id: "executive",  label: "Executive" },
  { id: "operations", label: "Operations" },
  { id: "committees", label: "Committees" },
];
