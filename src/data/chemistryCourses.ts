import { Course } from '../types';

export const chemistryCourses: Course[] = [
  // Semestre I
  {
    id: 'MA1001',
    name: 'Introducción al Cálculo',
    credits: 6,
    prerequisites: [],
    semester: 1,
    color: 'bg-common',
  },
  {
    id: 'MA1101',
    name: 'Introducción al Álgebra',
    credits: 6,
    prerequisites: [],
    semester: 1,
    color: 'bg-common'
  },
  {
    id: 'FI1000',
    name: 'Introducción a la Física Clásica',
    credits: 6,
    prerequisites: [],
    semester: 1,
    color: 'bg-common'
  },
  {
    id: 'CC1000',
    name: 'Herramientas Computacionales',
    credits: 3,
    prerequisites: [],
    semester: 1,
    color: 'bg-common'
  },
  {
    id: 'CD1100',
    name: 'Desafíos de Innovación',
    credits: 6,
    prerequisites: [],
    semester: 1,
    color: 'bg-common'
  },
  {
    id: 'BT1211',
    name: 'Aplicaciones de la Biología a la Ingeniería',
    credits: 3,
    prerequisites: [],
    semester: 1,
    color: 'bg-common'
  },
  // Semestre II
  {
    id: 'MA1002',
    name: 'Cálculo Diferencial e Integral',
    credits: 6,
    prerequisites: ['MA1001'],
    semester: 2,
    color: 'bg-common'
  },
  {
    id: 'MA1102',
    name: 'Álgebra Lineal',
    credits: 6,
    prerequisites: ['MA1101'],
    semester: 2,
    color: 'bg-common'
  },
  {
    id: 'FI1100',
    name: 'Introducción a la Física Moderna',
    credits: 6,
    prerequisites: ['FI1000', 'MA1101', 'MA1001'],
    semester: 2,
    color: 'bg-common'
  },
  {
    id: 'CC1002',
    name: 'Introducción a la Programación',
    credits: 6,
    prerequisites: [],
    semester: 2,
    color: 'bg-common'
  },
  {
    id: 'CD1201',
    name: 'Proyecto de Innovación de Ingeniería y Ciencias',
    credits: 3,
    prerequisites: [],
    semester: 2,
    color: 'bg-common'
  },
  {
    id: '_EH1',
    name: 'Formación Integral DR/EH/FG/EI/FT',
    credits: 3,
    prerequisites: [],
    semester: 2,
    color: 'bg-holistic'
  },
  // Semestre III
  {
    id: 'MA2001',
    name: 'Cálculo en Varias Variables',
    credits: 6,
    prerequisites: ['MA1002', 'MA1102'],
    semester: 3,
    color: 'bg-common'
  },
  {
    id: 'MA2601',
    name: 'Ecuaciones Diferenciales Ordinarias',
    credits: 6,
    prerequisites: ['MA1002', 'MA1102'],
    semester: 3,
    color: 'bg-common'
  },
  {
    id: 'FI2001',
    name: 'Mecánica',
    credits: 6,
    prerequisites: ['FI1100', 'MA1102', 'MA1002'],
    semester: 3,
    color: 'bg-common'
  },
  {
    id: 'FI2003',
    name: 'Métodos Experimentales',
    credits: 6,
    prerequisites: ['FI1100', 'MA1002'],
    semester: 3,
    color: 'bg-common'
  },
  {
    id: 'IQ2211',
    name: 'Química',
    credits: 6,
    prerequisites: [],
    semester: 3,
    color: 'bg-common'
  },
  // Semestre IV
  {
    id: 'MA2002',
    name: 'Cálculo Avanzado y Aplicaciones',
    credits: 6,
    prerequisites: ['MA2001', 'MA2601'],
    semester: 4,
    color: 'bg-common'
  },
  {
    id: 'IN2201',
    name: 'Economía',
    credits: 6,
    prerequisites: ['MA2001'],
    semester: 4,
    color: 'bg-common'
  },
  {
    id: 'FI2002',
    name: 'Electromagnetismo',
    credits: 6,
    prerequisites: ['MA2001', 'MA2601','FI2001'],
    semester: 4,
    color: 'bg-common'
  },
  {
    id: 'FI2004/IQ2212',
    name: 'Termodinámica / Termodinámica Química',
    credits: 6,
    prerequisites: ['IQ2211', 'FI2001', 'MA2001'],
    semester: 4,
    color: 'bg-common'
  },
  {
    id: 'CD2201',
    name: 'Módulo Interdisplicinario',
    prerequisites: ['CD1201'],
    credits: 3,
    semester: 4,
    color: 'bg-common'
  },
  {
    id: '_EH2',
    name: 'Formación Integral DR/EH/FG/EI/FT',
    credits: 3,
    prerequisites: [],
    semester: 4,
    color: 'bg-holistic'
  },
  // Semestre V
  {
    id: 'MA3403',
    name: 'Probabilidades y Estadística',
    credits: 6,
    prerequisites: ['MA2001'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'IQ3214',
    name: 'Química Inorgánica',
    credits: 6,
    prerequisites: ['FI2004Q'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'IQ3213',
    name: 'Química Orgánica',
    credits: 6,
    prerequisites: ['IQ2211'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'IQ3311',
    name: 'Análisis de Procesos',
    credits: 6,
    prerequisites: ['MA2601', 'FI2004/IQ2212'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'IQ3211',
    name: 'Termodinámica Aplicada',
    credits: 6,
    prerequisites: ['MA2601', 'FI2004/IQ2212'],
    semester: 5,
    color: 'bg-common'
  },
  // Semestre VI
  {
    id: 'IQ3311',
    name: 'Modelamiento y Optimización para Ingeniería de Procesos',
    credits: 6,
    prerequisites: ['IQ3311'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'IQ3215',
    name: 'Ciencia de los Materiales',
    credits: 6,
    prerequisites: ['FI2004/IQ2212'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'IQ3212',
    name: 'Fisicoquímica',
    credits: 6,
    prerequisites: ['FI2002', 'IQ3214'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'IQ3312',
    name: 'Fenómenos de Transporte',
    credits: 6,
    prerequisites: ['MA2002', 'FI2001', 'CD2201'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'IQ3711',
    name: 'Sustentabilidad en Ingeniería',
    credits: 6,
    prerequisites: ['IQ3311', 'CD2201', 'IN2201'],
    semester: 6,
    color: 'bg-common'
  },
  // Semestre VII
  {
    id: 'IQ4112',
    name: 'Métodos Matemáticos para Procesos',
    credits: 6,
    prerequisites: ['MA3403'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'IQ4313',
    name: 'Operaciones de Transferencia de Calor',
    credits: 6,
    prerequisites: ['IQ3312', 'IQ3111'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'ME4262',
    name: 'Evaluación de Proyectos de Ingeniería',
    credits: 6,
    prerequisites: ['IN2201'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'IQ4712',
    name: 'Innovación en Ingeniería y Ciencias',
    credits: 6,
    prerequisites: ['IQ3711'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: '_Electivo1',
    name: 'Electivo',
    credits: 6,
    prerequisites: [],
    semester: 7,
    color: 'bg-elective'
  },
  {
    id: '_EH3',
    name: 'Formación Integral EH/FG',
    credits: 3,
    prerequisites: [],
    semester: 7,
    color: 'bg-elective'
  },
  {
    id: 'IQ4911',
    name: 'Práctica Profesional I',
    credits: 7,
    prerequisites: ['IQ3311'],
    semester: 7,
    color: 'bg-internship'
  },
  // Semestre VIII
  {
    id: 'IQ4315',
    name: 'Operaciones de Transferencia de Masa y Separación',
    credits: 6,
    prerequisites: ['IQ3312'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'IQ4314',
    name: 'Diseño de Reactores',
    credits: 6,
    prerequisites: ['IQ3211', 'IQ3311', 'IQ3312'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'IQ4316',
    name: 'Operaciones Mecánicas',
    credits: 6,
    prerequisites: ['IQ3312'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'IQ4713',
    name: 'Taller de Diseño e Innovación en Proyectos',
    credits: 6,
    prerequisites: ['ME4262', 'IQ4712'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: '_Electivo2',
    name: 'Electivo',
    credits: 3,
    prerequisites: [],
    semester: 8,
    color: 'bg-elective'
  },
  {
    id: '_EH4',
    name: 'Formación Integral EH/FG',
    credits: 3,
    prerequisites: [],
    semester: 8,
    color: 'bg-elective'
  },
  {
    id: 'EI1090',
    name: 'Examen de Suficiencia en Inglés I',
    credits: 0,
    prerequisites: [],
    semester: 8,
    color: 'bg-english'
  },
  // Semestre IX
  {
    id: 'IQ5317',
    name: 'Reactores Avanzados',
    credits: 6,
    prerequisites: ['IQ4112', 'IQ4314'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'IQ5811',
    name: 'Laboratorio de Ingeniería de Procesos',
    credits: 6,
    prerequisites: ['IQ3214', 'IQ3215', 'IQ4313', 'IQ4315', 'IQ4316'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'IQ5714',
    name: 'Taller de Implementación de Proyectos',
    credits: 6,
    prerequisites: ['IQ4713'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: '_Especialización1',
    name: 'Especialización',
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: 'bg-speciality_elective'
  },
  {
    id: '_Especialización2',
    name: 'Especialización',
    credits: 6,
    prerequisites: [],
    semester: 9,
    color: 'bg-speciality_elective'
  },
  {
    id: 'IQ5912',
    name: 'Práctica Profesional II',
    credits: 14,
    prerequisites: ['IQ4911'],
    semester: 9,
    color: 'bg-internship'
  },
  // Semestre X
  {
    id: 'IQ6907',
    name: 'Trabajo de Habilitación Profesional I',
    credits: 3,
    prerequisites: ['IQ5912', 'IQ5811'],
    semester: 10,
    color: 'bg-thesis'
  },
  {
    id: 'IQ5113',
    name: 'Dinámica y Control de Procesos',
    credits: 6,
    prerequisites: ['IQ4112', 'IQ4315'],
    semester: 10,
    color: 'bg-common'
  },
  {
    id: 'IN4273',
    name: 'Gestión de Operaciones',
    credits: 6,
    prerequisites: ['MA3403'],
    semester: 10,
    color: 'bg-common'
  },
  {
    id: 'IQ5715',
    name: 'Taller de Proyectos en Ingeniería o Ciencias',
    credits: 6,
    prerequisites: ['IQ4314', 'IQ5811', 'IQ5714'],
    semester: 10,
    color: 'bg-common'
  },
  {
    id: '_Especialización3',
    name: 'Especialización',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective'
  },
  // Semestre XI
  {
    id: 'IQ6919',
    name: 'Trabajo de Habilitación Profesional II',
    credits: 21,
    prerequisites: ['IQ5317', 'IQ5113', 'IQ6907'],
    semester: 11,
    color: 'bg-thesis'
  },
  {
    id: '_Especialización4',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 11,
    color: 'bg-speciality_elective'
  },
  {
    id: '_Especialización5',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 11,
    color: 'bg-speciality_elective'
  },
  {
    id: 'EI2090',
    name: 'Examen de Suficiencia en Inglés II',
    credits: 0,
    prerequisites: [],
    semester: 11,
    color: 'bg-english'
  }
];