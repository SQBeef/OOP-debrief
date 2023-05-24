console.log('loaded');

// Class representing a basketball team
class bBallTeam {
  constructor(coaches, players, trainer, teamName) {
    this.coaches = coaches; // Array of coaches
    this.players = players; // Array of players
    this.trainer = trainer; // Trainer instance
    this.teamName = teamName; // Name of the team
    this.stats = {
      seasonRecord: "", // Season record of the team
      allTimeRecord: "", // All-time record of the team
      playoffWins: 0, // Number of playoff wins of the team
      championships: 0 // Number of championships won by the team
    };
  }

  // Determine the starting lineup and benched players
  determineStarters() {
    console.log("Determining the starting lineup for the " + this.teamName + "...");
    const starters = this.players.slice(0, 5); // First five players as starters
    const benchedPlayers = this.players.slice(5); // Remaining players as benched
    console.log("Starting Lineup:");
    starters.forEach((player, index) => {
      console.log("Player " + (index + 1) + ": " + player.firstName + " " + player.lastName);
    });
    console.log("Benched Players:");
    benchedPlayers.forEach((player, index) => {
      console.log("Player " + (index + 1) + ": " + player.firstName + " " + player.lastName);
    });
  }

  // Introduction for the basketball team
  teamIntro() {
    console.log("Ladies and gentlemen, get ready to witness the basketball magic of the " + this.teamName + "!");
  }

  // Broadcast the intros of the team, coaches, players, and trainer
  broadcastIntro() {
    console.log("***** " + this.teamName + " Team Introduction *****");
    this.teamIntro();
    console.log("*************************");
    console.log("And now, let's meet the key personalities behind this amazing team...");
    console.log("*************************");
    console.log("Head Coach Introduction:");
    this.coaches[0].coachIntro();
    console.log("*************************");
    console.log("First Assistant Coach Introduction:");
    this.coaches[1].coachIntro();
    console.log("*************************");
    console.log("Ladies and gentlemen, it's time to meet the stars of the court, the unstoppable starting lineup!");
    console.log("*************************");
    this.players.slice(0, 5).forEach((player, index) => {
      console.log("Player " + (index + 1) + " Introduction:");
      player.playerIntro();
      console.log("*************************");
    });
    console.log("And last but not least, let's welcome the person who keeps the team in top shape...");
    console.log("*************************");
    console.log("First Trainer Introduction:");
    this.trainer.trainerIntro();
    console.log("*************************");
  }
}

// Class representing a player
class Player {
  constructor(firstName, lastName, position, age, college) {
    this.firstName = firstName; // First name of the player
    this.lastName = lastName; // Last name of the player
    this.position = position; // Position of the player
    this.age = age; // Age of the player
    this.college = college; // College attended by the player
    this.stats = {
      PPG: 0, // Points per game
      BPG: 0, // Blocks per game
          RPG: 0, // Rebounds per game
      APG: 0, // Assists per game
      SPG: 0 // Steals per game
    };
  }

  // Introduction for the player
  playerIntro() {
    console.log("Player: " + this.firstName + " " + this.lastName);
    console.log("Position: " + this.position);
    console.log("Age: " + this.age);
    console.log("College: " + this.college);
    console.log("Player Stats: ", this.stats);
  }
}

// Class representing a coach
class Coach {
  constructor(firstName, lastName, role, college) {
    this.firstName = firstName; // First name of the coach
    this.lastName = lastName; // Last name of the coach
    this.role = role; // Role of the coach (e.g., head coach, assistant coach)
    this.college = college; // College attended by the coach
    this.stats = {
      seasonRecord: "", // Season record of the coach
      allTimeRecord: "", // All-time record of the coach
      playoffWins: 0 // Number of playoff wins of the coach
    };
  }

  // Introduction for the coach
  coachIntro() {
    console.log("Coach: " + this.firstName + " " + this.lastName);
    console.log("Role: " + this.role);
    console.log("College: " + this.college);
    console.log("Coach Stats: ", this.stats);
  }
}

// Class representing a trainer
class Trainer {
  constructor(firstName, lastName, specialization, college) {
    this.firstName = firstName; // First name of the trainer
    this.lastName = lastName; // Last name of the trainer
    this.specialization = specialization; // Specialization of the trainer (e.g., medical, athletic training)
    this.college = college; // College attended by the trainer
    this.stats = {
      seasonRecord: "", // Season record of the trainer
      allTimeRecord: "", // All-time record of the trainer
      playoffWins: 0 // Number of playoff wins of the trainer
    };
  }

  // Introduction for the trainer
  trainerIntro() {
    console.log("Trainer: " + this.firstName + " " + this.lastName);
    console.log("Specialization: " + this.specialization);
    console.log("College: " + this.college);
    console.log("Trainer Stats: ", this.stats);
  }
}

// Example usage for the 2002 Los Angeles Lakers
const teamName = "Los Angeles Lakers";

const headCoach = new Coach("Phil", "Jackson", "Head Coach", "University of North Dakota");
const assistantCoaches = [
  new Coach("Jim", "Cleamons", "Assistant Coach", "Ohio State University"),
  new Coach("Frank", "Hamblen", "Assistant Coach", "Syracuse University")
];

const players = [
  new Player("Kobe", "Bryant", "Guard", 24, "Lower Merion High School"),
  new Player("Shaquille", "O'Neal", "Center", 30, "Louisiana State University"),
  new Player("Robert", "Horry", "Forward", 32, "University of Alabama"),
  new Player("Derek", "Fisher", "Guard", 28, "University of Arkansas at Little Rock"),
  new Player("Rick", "Fox", "Forward", 33, "University of North Carolina"),
  new Player("Devean", "George", "Forward", 25 , "Augsburg College"),
  new Player("Derrick", "Fisher", "Guard", 29, "University of Arkansas at Little Rock"),
  new Player("Mark", "Madsen", "Forward", 27, "Stanford University"),
  new Player("Brian", "Shaw", "Guard", 36, "University of California, Santa Barbara"),
  new Player("Slava", "Medvedenko", "Forward", 25, "Ukrainian Academy of Sports")
];

const trainer = new Trainer("Gary", "Vitti", "Athletic Training", "California State University, Long Beach");

const lakers2002 = new bBallTeam([headCoach, ...assistantCoaches], players, trainer, teamName);

lakers2002.stats.seasonRecord = "58-24";
lakers2002.stats.allTimeRecord = "2000-2022: 1188-694";
lakers2002.stats.playoffWins = 120;
lakers2002.stats.championships = 3;

lakers2002.broadcastIntro();



