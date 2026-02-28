export interface Participant {
  id: string;
  name: string;
  tableNumber: number;
  treeType: string;
  className: string;
  photoUrl: string;
  averageScore: number;
  rank: number;
}

export interface CriteriaScore {
  criteriaName: string;
  weight: number;
  score: number;
  isPrimary?: boolean;
}

export const mockClasses = [
  { id: "a", name: "Kelas A - Bonsai Besar", participantCount: 52 },
  { id: "b", name: "Kelas B - Bonsai Sedang", participantCount: 68 },
  { id: "c", name: "Kelas C - Bonsai Kecil", participantCount: 45 },
  { id: "d", name: "Kelas D - Suiseki", participantCount: 35 },
];

export const mockCriteria: CriteriaScore[] = [
  { criteriaName: "Bentuk Keseluruhan", weight: 25, score: 0, isPrimary: true },
  { criteriaName: "Akar (Nebari)", weight: 15, score: 0 },
  { criteriaName: "Batang (Trunk)", weight: 15, score: 0 },
  { criteriaName: "Cabang & Ranting", weight: 15, score: 0 },
  { criteriaName: "Daun & Ramification", weight: 10, score: 0 },
  { criteriaName: "Pot & Keserasian", weight: 10, score: 0 },
  { criteriaName: "Kesan Umum", weight: 10, score: 0 },
];

const treeTypes = ["Serut", "Beringin", "Asam Jawa", "Bougainvillea", "Cemara", "Sancang", "Anting Putri", "Kemuning"];

export const generateParticipants = (className: string, count: number): Participant[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `${className}-${i + 1}`,
    name: `Peserta ${i + 1}`,
    tableNumber: i + 1,
    treeType: treeTypes[Math.floor(Math.random() * treeTypes.length)],
    className,
    photoUrl: "/placeholder.svg",
    averageScore: Math.round((70 + Math.random() * 25) * 100) / 100,
    rank: 0,
  }))
    .sort((a, b) => b.averageScore - a.averageScore)
    .map((p, i) => ({ ...p, rank: i + 1 }));

export const mockParticipantsA = generateParticipants("Kelas A - Bonsai Besar", 52);
