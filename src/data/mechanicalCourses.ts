import { Course } from '../types';

export const mechanicalCourses: Course[] = [
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
    id: 'MA3701/IN3171',
    name: 'Optimización / Modelamiento y Optimización',
    credits: 6,
    prerequisites: ['MA2002'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'ME3110',
    name: 'Ciencia de los Materiales',
    credits: 6,
    prerequisites: ['FI2004/IQ2212'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'ME3140',
    name: 'Mecánica de Fluidos',
    credits: 6,
    prerequisites: ['MA2002','FI2003','FI2004/IQ2212'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'ME3120',
    name: 'Dibujo Mecánico',
    credits: 3,
    prerequisites: ['CD2201'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'ME3130',
    name: 'Mecánica Estática',
    credits: 3,
    prerequisites: ['FI2001'],
    semester: 5,
    color: 'bg-common'
  },
  // Semestre VI
  {
    id: 'ME3250',
    name: 'Cinemática y Dinámica de Mecanismos',
    credits: 6,
    prerequisites: ['MA2601','FI2001'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'ME3210',
    name: 'Materiales para la Ingeniería',
    credits: 6,
    prerequisites: ['ME3110'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'ME3240',
    name: 'Termotecnia',
    credits: 6,
    prerequisites: ['ME3140'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'ME3230',
    name: 'Mecánica de Sólidos',
    credits: 6,
    prerequisites: ['ME3130','MA2002'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'ME3220',
    name: 'Taller Mecánico',
    credits: 3,
    prerequisites: [],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: '_EH3',
    name: 'Formación Integral EH/FG',
    credits: 3,
    prerequisites: [],
    semester: 6,
    color: 'bg-holistic'
  },
  // Semestre VII
  {
    id: 'ME4160',
    name: 'Gestión de Activos Físicos',
    credits: 6,
    prerequisites: ['MA3701/IN3171', 'ME3130'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'ME4110',
    name: 'Procesos de Manufactura',
    credits: 6,
    prerequisites: ['ME3210'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'ME4140',
    name: 'Transferencia de Calor',
    credits: 6,
    prerequisites: ['ME3240'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'ME4150',
    name: 'Automatización y Control',
    credits: 6,
    prerequisites: ['ME3250'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'ME4130',
    name: 'Vibraciones Mecánicas',
    credits: 6,
    prerequisites: ['ME3230'],
    semester: 7,
    color: 'bg-common'
  },
  // Semestre VIII
  {
    id: 'ME4262',
    name: 'Evaluación de Proyectos en Ingeniería',
    credits: 6,
    prerequisites: ['IN2201'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'ME4250',
    name: 'Mecatrónica',
    credits: 3,
    prerequisites: ['FI2001', 'ME4110'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'ME4240',
    name: 'Máquinas',
    credits: 6,
    prerequisites: ['ME4140'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'ME4230',
    name: 'Elementos de Máquinas',
    credits: 6,
    prerequisites: ['ME3230'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'ME4220',
    name: 'Planos de Ingeniería',
    credits: 3,
    prerequisites: ['ME3220','ME4150'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: '_EH4',
    name: 'Formación Integral EH/FG',
    credits: 3,
    prerequisites: [],
    semester: 8,
    color: 'bg-holistic'
  },
  {
    id: '_FI1',
    name: 'Formación Integral de Especialidad',
    credits: 3,
    prerequisites: [],
    semester: 8,
    color: 'bg-holistic'
  },
  // Semestre IX
  {
    id: 'IN4273',
    name: 'Gestión de Operaciones',
    credits: 6,
    prerequisites: ['MA3701/IN3171'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'ME5110',
    name: 'Proyecto en Materiales y Manufactura',
    credits: 6,
    prerequisites: ['ME4262','ME4110'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'ME5140',
    name: 'Ingeniería en Termofluidos',
    credits: 6,
    prerequisites: ['ME4240','ME4262'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'ME5150',
    name: 'Robótica',
    credits: 6,
    prerequisites: ['ME4150'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'ME5120',
    name: 'Diseño de Sistemas Mecánicos',
    credits: 6,
    prerequisites: ['ME4130','ME4220','ME4230'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'ME4901',
    name: 'Práctica Profesional I (cumplir UNO de los requisito)',
    credits: 7,
    prerequisites: ['ME4110','ME4130','ME4140','ME4150','ME4160'],
    semester: 9,
    color: 'bg-internship'
  },
  {
    id: 'EI1090',
    name: 'Examen de Suficiencia en Inglés I',
    credits: 0,
    prerequisites: [],
    semester: 9,
    color: 'bg-english'
  },
  // Semestre X
  {
    id: 'ME5210',
    name: 'Manufactura Avanzada',
    credits: 6,
    prerequisites: ['IN4273','ME4110'],
    semester: 10,
    color: 'bg-common'
  },
  {
    id: 'ME6908',
    name: 'Introducción al Trabajo de Titulo (CR270)',
    credits: 3,
    prerequisites: [],
    semester: 10,
    color: 'bg-thesis'
  },
  {
    id: 'ME5220',
    name: 'Proyecto en Ingeniería Mecánica',
    credits: 6,
    prerequisites: ['ME5120','ME5140'],
    semester: 10,
    color: 'bg-common'
  },
  {
    id: 'ME5240',
    name: 'Laboratorio de Energía',
    credits: 3,
    prerequisites: ['ME4240'],
    semester: 10,
    color: 'bg-common'
  },
  {
    id: '_Especialización1',
    name: 'Especialización',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective'
  },
  {
    id: '_Especialización2',
    name: 'Especialización',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective'
  },
  // Semestre XI
  {
    id: 'ME6909',
    name: 'Trabajo de Título',
    credits: 21,
    prerequisites: ['ME6908'],
    semester: 11,
    color: 'bg-thesis'
  },
  {
    id: '_Especialización3',
    name: 'Especialización',
    credits: 6,
    prerequisites: [],
    semester: 11,
    color: 'bg-speciality_elective'
  },
  {
    id: '_FI2',
    name: 'Formación Integral de Especialidad',
    credits: 3,
    prerequisites: [],
    semester: 11,
    color: 'bg-holistic'
  },
  {
    id: 'ME5902',
    name: 'Práctica Profesional II',
    credits: 14,
    prerequisites: [],
    semester: 11,
    color: 'bg-internship'
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