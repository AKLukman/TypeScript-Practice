type NoobDeveloper = {
  name: string;
};
// type JuniorLveleldeveloper = {
//   name: string;
//   expertise: string;
//   experiance: number;
// };

type JuniorLveleldeveloper = NoobDeveloper & {
  expertise: string;
  experiance: number;
};

enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}

type NextLevel = JuniorLveleldeveloper & {
  leaderShipExperiance: number;
  level: Level;
};

// Union

const newDeveloper: NoobDeveloper | JuniorLveleldeveloper = {
  name: "Rahim",
};

// Intersection
const juniorDeveloper: JuniorLveleldeveloper = {
  name: "Karim",
  expertise: "JavaScript",
  experiance: 2,
};

const nextLevelDeveloper: NextLevel = {
  name: "Lukman",
  experiance: 2,
  expertise: "TypeScript",
  leaderShipExperiance: 1,
  level: Level.mid,
};
