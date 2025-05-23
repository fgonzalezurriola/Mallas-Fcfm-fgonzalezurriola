import { Course } from "../types";

export const biotechCourses: Course[] = [
  // Semestre I
  {
    id: "MA1001",
    name: "Introducción al Cálculo",
    credits: 6,
    prerequisites: [],
    semester: 1,
    color: "bg-common",
  },
  {
    id: "MA1101",
    name: "Introducción al Álgebra",
    credits: 6,
    prerequisites: [],
    semester: 1,
    color: "bg-common",
  },
  {
    id: "FI1000",
    name: "Introducción a la Física Clásica",
    credits: 6,
    prerequisites: [],
    semester: 1,
    color: "bg-common",
  },
  {
    id: "CC1000",
    name: "Herramientas Computacionales",
    credits: 3,
    prerequisites: [],
    semester: 1,
    color: "bg-common",
  },
  {
    id: "CD1100",
    name: "Desafíos de Innovación",
    credits: 6,
    prerequisites: [],
    semester: 1,
    color: "bg-common",
  },
  {
    id: "BT1211",
    name: "Aplicaciones de la Biología a la Ingeniería",
    credits: 3,
    prerequisites: [],
    semester: 1,
    color: "bg-common",
  },
  // Semestre II
  {
    id: "MA1002",
    name: "Cálculo Diferencial e Integral",
    credits: 6,
    prerequisites: ["MA1001"],
    semester: 2,
    color: "bg-common",
  },
  {
    id: "MA1102",
    name: "Álgebra Lineal",
    credits: 6,
    prerequisites: ["MA1101"],
    semester: 2,
    color: "bg-common",
  },
  {
    id: "FI1100",
    name: "Introducción a la Física Moderna",
    credits: 6,
    prerequisites: ["FI1000", "MA1101", "MA1001"],
    semester: 2,
    color: "bg-common",
  },
  {
    id: "CC1002",
    name: "Introducción a la Programación",
    credits: 6,
    prerequisites: [],
    semester: 2,
    color: "bg-common",
  },
  {
    id: "CD1201",
    name: "Proyecto de Innovación de Ingeniería y Ciencias",
    credits: 3,
    prerequisites: [],
    semester: 2,
    color: "bg-common",
  },
  {
    id: "_EH1",
    name: "Formación Integral DR/EH/FG/EI/FT",
    credits: 3,
    prerequisites: [],
    semester: 2,
    color: "bg-holistic",
  },
  // Semestre III
  {
    id: "MA2001",
    name: "Cálculo en Varias Variables",
    credits: 6,
    prerequisites: ["MA1002", "MA1102"],
    semester: 3,
    color: "bg-common",
  },
  {
    id: "MA2601",
    name: "Ecuaciones Diferenciales Ordinarias",
    credits: 6,
    prerequisites: ["MA1002", "MA1102"],
    semester: 3,
    color: "bg-common",
  },
  {
    id: "FI2001",
    name: "Mecánica",
    credits: 6,
    prerequisites: ["FI1100", "MA1102", "MA1002"],
    semester: 3,
    color: "bg-common",
  },
  {
    id: "FI2003",
    name: "Métodos Experimentales",
    credits: 6,
    prerequisites: ["FI1100", "MA1002"],
    semester: 3,
    color: "bg-common",
  },
  {
    id: "IQ2211",
    name: "Química",
    credits: 6,
    prerequisites: [],
    semester: 3,
    color: "bg-common",
  },
  // Semestre IV
  {
    id: "MA2002",
    name: "Cálculo Avanzado y Aplicaciones",
    credits: 6,
    prerequisites: ["MA2001", "MA2601"],
    semester: 4,
    color: "bg-common",
  },
  {
    id: "IN2201",
    name: "Economía",
    credits: 6,
    prerequisites: ["MA2001"],
    semester: 4,
    color: "bg-common",
  },
  {
    id: "FI2002",
    name: "Electromagnetismo",
    credits: 6,
    prerequisites: ["MA2001", "MA2601", "FI2001"],
    semester: 4,
    color: "bg-common",
  },
  {
    id: "FI2004/IQ2212",
    name: "Termodinámica / Termodinámica Química",
    credits: 6,
    prerequisites: ["IQ2211", "FI2001", "MA2001"],
    semester: 4,
    color: "bg-common",
  },
  {
    id: "CD2201",
    name: "Módulo Interdisplicinario",
    prerequisites: ["CD1201"],
    credits: 3,
    semester: 4,
    color: "bg-common",
  },
  {
    id: "_EH2",
    name: "Formación Integral DR/EH/FG/EI/FT",
    credits: 3,
    prerequisites: [],
    semester: 4,
    color: "bg-holistic",
  },
  // Semestre V
  {
    id: "BIO5001",
    name: "Probabilidades y Estadística",
    credits: 6,
    prerequisites: ["MA2001"],
    semester: 5,
    color: "bg-common",
  },
  {
    id: "BT3111",
    name: "Biología y Metabolismo Celular",
    credits: 6,
    prerequisites: ["IQ2211", "CD2201", "FI2003"],
    semester: 5,
    color: "bg-common",
  },
  {
    id: "BT3210",
    name: "Química Orgánica",
    credits: 6,
    prerequisites: ["IQ2211"],
    semester: 5,
    color: "bg-common",
  },
  {
    id: "IQ3311",
    name: "Análisis de Procesos",
    credits: 6,
    prerequisites: ["MA2601", "FI2004/IQ2212"],
    semester: 5,
    color: "bg-common",
  },
  {
    id: "IQ3211",
    name: "Termodinámica Aplicada",
    credits: 6,
    prerequisites: ["FI2004/IQ2212"],
    semester: 5,
    color: "bg-common",
  },
  // Semestre VI
  {
    id: "IQ3111",
    name: "Modelamiento y Optimización para Ingeniería de Procesos",
    credits: 6,
    prerequisites: ["IQ3311"],
    semester: 6,
    color: "bg-common",
  },
  {
    id: "BT3112",
    name: "Biología y Metabolismo de Microorganismos",
    credits: 6,
    prerequisites: ["BT3111", "BT3210"],
    semester: 6,
    color: "bg-common",
  },
  {
    id: "BT3113",
    name: "Biología Molecular",
    credits: 6,
    prerequisites: ["BT3111", "BT3210"],
    semester: 6,
    color: "bg-common",
  },
  {
    id: "IQ3312",
    name: "Fenómenos de Transporte",
    credits: 6,
    prerequisites: ["MA2002", "FI2001", "CD2201"],
    semester: 6,
    color: "bg-common",
  },
  {
    id: "BT3711",
    name: "Bioética, Legislación e Innovación",
    credits: 3,
    prerequisites: ["BT3111", "CD2201", "IN2201"],
    semester: 6,
    color: "bg-common",
  },
  {
    id: "_FormacionIntegral1",
    name: "Formación Integral EH/FG",
    credits: 3,
    prerequisites: [],
    semester: 6,
    color: "bg-holistic",
  },
  // Semestre VII
  {
    id: "IQ4112",
    name: "Métodos Matemáticos para Procesos",
    credits: 6,
    prerequisites: ["IQ4101"],
    semester: 7,
    color: "bg-common",
  },
  {
    id: "IN4273",
    name: "Gestión de Operaciones (* ver ucampus)",
    credits: 6,
    prerequisites: ["IQ3111", "MA3403"],
    semester: 7,
    color: "bg-common",
  },
  {
    id: "BT4114",
    name: "Biotecnología Molecular (Un requisito)",
    credits: 6,
    prerequisites: ["BT3113", "BT4103"],
    semester: 7,
    color: "bg-common",
  },
  {
    id: "ME4262/IN3301",
    name: "Evaluación de Proyectos en Ingeniería",
    credits: 6,
    prerequisites: ["IN2201"],
    semester: 7,
    color: "bg-common",
  },
  {
    id: "_Electivo1",
    name: "Electivo",
    credits: 6,
    prerequisites: [],
    semester: 7,
    color: "bg-elective",
  },
  {
    id: "BT4911",
    name: "Práctica Profesional I",
    credits: 7,
    prerequisites: ["IQ3311", "IQ4910"],
    semester: 7,
    color: "bg-internship",
  },
  // Semestre VIII
  {
    id: "BT4315",
    name: "Operaciones de Transferencia de Masa y Separación",
    credits: 6,
    prerequisites: ["IQ3312"],
    semester: 8,
    color: "bg-common",
  },
  {
    id: "IQ4314",
    name: "Diseño de Reactores",
    credits: 6,
    prerequisites: ["IQ3211", "IQ3311", "IQ3312"],
    semester: 8,
    color: "bg-common",
  },
  {
    id: "BT4712",
    name: "Biotecnología en Agricultura, Salud, Ambiente e Industria",
    credits: 6,
    prerequisites: ["BT3112", "BT4114", "BT3711"],
    semester: 8,
    color: "bg-common",
  },
  {
    id: "BT4713",
    name: "Taller de Diseño e Innovación en Proyectos",
    credits: 6,
    prerequisites: ["BT3711", "IQ3312", "IQ3111"],
    semester: 8,
    color: "bg-common",
  },
  {
    id: "_Electivo2",
    name: "Electivo",
    credits: 3,
    prerequisites: [],
    semester: 8,
    color: "bg-elective",
  },
  {
    id: "_FormacionIntegral2",
    name: "Formación Integral",
    credits: 3,
    prerequisites: [],
    semester: 8,
    color: "bg-holistic",
  },
  {
    id: "EI1090",
    name: "Examen de Suficiencia en Inglés I",
    credits: 0,
    prerequisites: [],
    semester: 8,
    color: "bg-english",
  },
  // Semestre IX
  {
    id: "BT5311",
    name: "Ingeniería de Enzimas y Proteínas (ver ucampus)",
    credits: 6,
    prerequisites: ["BT4104", "BT4114", "BT3112", "BT3102"],
    semester: 9,
    color: "bg-common",
  },
  {
    id: "BT5312",
    name: "Ingeniería Metabólica y Biorreactores [req. (IQ4314 ó BT4315)]",
    credits: 6,
    prerequisites: ["BT4201", "IQ4314", "BT4315"],
    semester: 9,
    color: "bg-common",
  },
  {
    id: "BT5714",
    name: "Taller de Implementación de Proyectos",
    credits: 6,
    prerequisites: ["BT4713", "IN3301", "IQ4112"],
    semester: 9,
    color: "bg-common",
  },
  {
    id: "_ElectivoEspecialidad1",
    name: "Electivos de Especialidad",
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: "bg-speciality_elective",
  },
  {
    id: "_ElectivoEspecialidad2",
    name: "Electivos de Especialidad",
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: "bg-speciality_elective",
  },
  {
    id: "BT5901",
    name: "Práctica Profesional II",
    credits: 14,
    prerequisites: ["BT4901", "BT4103"],
    semester: 9,
    color: "bg-internship",
  },
  // Semestre X
  {
    id: "IQ5113",
    name: "Dinámica y Control de Procesos (* ver ucampus)",
    credits: 6,
    prerequisites: [
      "IQ4112",
      "IQ4315",
      "IQ4112",
      "IQ4101",
      "FI3104",
      "IQ4305",
      "IQ4314",
    ],
    semester: 10,
    color: "bg-common",
  },
  {
    id: "BT5316",
    name: "Procesos de Separación en Biotecnología (* ver ucampus)",
    credits: 6,
    prerequisites: ["IQ4314", "IQ3202", "IQ3312"],
    semester: 10,
    color: "bg-common",
  },
  {
    id: "BT5715",
    name: "Taller de Proyectos en Ingeniería o Ciencias",
    credits: 9,
    prerequisites: ["BT5714", "BT5312"],
    semester: 10,
    color: "bg-common",
  },
  {
    id: "_ElectivoEspecialidad3",
    name: "Electivo de Especialidad",
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: "bg-speciality_elective",
  },
  {
    id: "BT6906",
    name: "Introducción al Trabajo de Título (* ver ucampus)",
    credits: 3,
    prerequisites: ["IN4273", "BT5912", "BT5311", "BT5714"],
    semester: 10,
    color: "bg-thesis",
  },

  // Semestre XI
  {
    id: "IQ6920",
    name: "Trabajo de Título (* ver ucampus)",
    credits: 24,
    prerequisites: ["IN4273", "IQ5113", "IQ6906", "IQ5715"],
    semester: 11,
    color: "bg-thesis",
  },
  {
    id: "_ElectivoEspecialidad4",
    name: "Electivo de Especialidad",
    credits: 6,
    prerequisites: [],
    semester: 11,
    color: "bg-speciality_elective",
  },
  {
    id: "EI2090",
    name: "Examen de Suficiencia en Inglés II",
    credits: 0,
    prerequisites: [],
    semester: 11,
    color: "bg-english",
  },
];
