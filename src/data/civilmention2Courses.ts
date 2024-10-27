import { Course } from '../types';

export const civilmention2Courses: Course[] = [
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
    id: 'CI3111',
    name: 'Mecánica Estructural',
    credits: 6,
    prerequisites: ['FI2001'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'CI3141',
    name: 'Análisis de Sistemas de Transporte',
    credits: 6,
    prerequisites: ['IN2201', 'MA2002'],
    semester: 5,
    color: 'bg-common'
  },
  {
    id: 'CI3162',
    name: 'Mecánica de Fluidos',
    credits: 6,
    prerequisites: ['FI2003', 'FI2004/IQ2212', 'MA2002'],
    semester: 5,
    color: 'bg-common'
  },
  // Semestre VI
  {
    id: 'GL3101/CI3242/CI3251',
    name: 'Formación Especializada de Licenciatura',
    credits: 6,
    prerequisites: ['MA2002'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'CI3262',
    name: 'Ingeniería Hidráulica',
    credits: 6,
    prerequisites: ['CI3162'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'CI3211',
    name: 'Ingeniería Estructural',
    credits: 6,
    prerequisites: ['CI3111'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'CI3261',
    name: 'Ingeniería Ambiental',
    credits: 6,
    prerequisites: ['CI3162'],
    semester: 6,
    color: 'bg-common'
  },
  {
    id: 'CI3252',
    name: 'Topografía',
    credits: 6,
    prerequisites: ['MA2002', 'FI2003'],
    semester: 6,
    color: 'bg-common'
  },
  // Semestre VII
  {
    id: 'CI4152',
    name: 'Evaluación de Proyectos',
    credits: 6,
    prerequisites: ['IN2201', 'MA3403'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'CI4121',
    name: 'Ingeniería Geotécnica',
    credits: 6,
    prerequisites: ['CI3111', 'CI3162'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'CI4165',
    name: 'Calidad de Agua',
    credits: 6,
    prerequisites: ['CI3261'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'CI4164',
    name: 'Hidráulica',
    credits: 6,
    prerequisites: ['CI3262'],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: '_Electivo1',
    name: 'Electivo',
    credits: 6,
    prerequisites: [],
    semester: 7,
    color: 'bg-common'
  },
  {
    id: 'CI4151',
    name: 'Práctica I Topografía',
    credits: 7,
    prerequisites: ['CI3111', 'CI3141', 'CI3162'],
    semester: 7,
    color: 'bg-common'
  },
  // Semestre VIII
  {
    id: 'CI4231',
    name: 'Construcción',
    credits: 6,
    prerequisites: ['CI3252', 'CI4152'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'CI4251',
    name: 'Planificación y Gestión de Proyectos',
    credits: 6,
    prerequisites: ['CI4152'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'CI4261',
    name: 'Hidrología',
    credits: 6,
    prerequisites: ['CI4164', 'MA3403'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: 'CI4262',
    name: 'Hidráulica de Aguas Subterráneas y Aprovechamiento',
    credits: 6,
    prerequisites: ['CI4121', 'CI3262'],
    semester: 8,
    color: 'bg-common'
  },
  {
    id: '_FormacionIntegral1',
    name: 'Formación Integral EH/FG',
    credits: 3,
    prerequisites: [],
    semester: 8,
    color: 'bg-holistic'
  },
  {
    id: '_FormacionIntegral2',
    name: 'Formación Integral EH/FG',
    credits: 3,
    prerequisites: [],
    semester: 8,
    color: 'bg-holistic'
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
    id: 'CI5161',
    name: 'Hidráulica Aplicada al Diseño de Obras',
    credits: 6,
    prerequisites: ['CI4261'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'CI5162',
    name: 'Diseño de Sistemas de Tratamiento de Aguas',
    credits: 6,
    prerequisites: ['CI4165'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'CI5163',
    name: 'Análisis de Sistemas Ambientales',
    credits: 6,
    prerequisites: ['MA3701/IN3171', 'CI3261'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'CI5164',
    name: 'Procesos de Transporte en Sistemas Acuáticos',
    credits: 6,
    prerequisites: ['CI4262', 'CI4165'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'CI5165',
    name: 'Diseño Hidroambiental',
    credits: 6,
    prerequisites: ['CI4165', 'CI4261'],
    semester: 9,
    color: 'bg-common'
  },
  {
    id: 'CI5151',
    name: 'Práctica II',
    credits: 14,
    prerequisites: ['CI3262', 'CI4151'],
    semester: 9,
    color: 'bg-internship'
  },
  // Semestre X
  {
    id: 'CI6907',
    name: 'Taller de Habilitación Profesional (CR270)',
    credits: 3,
    prerequisites: ['CR270'],
    semester: 10,
    color: 'bg-thesis'
  },
  {
    id: 'CI5621',
    name: 'Proyecto de Sistemas Hidráulicos Sanitarios y Ambientales',
    credits: 6,
    prerequisites: ['CI4231', 'CI4251'],
    semester: 10,
    color: 'bg-common'
  },
  {
    id: 'CI5262',
    name: 'Proyecto Integrado de Recursos Hídricos',
    credits: 6,
    prerequisites: ['CI4261', 'CI4251'],
    semester: 10,
    color: 'bg-common'
  },
  {
    id: '_Electivo1',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective'
  },
  {
    id: '_Electivo2',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective'
  },
  {
    id: '_Electivo3',
    name: 'Electivo de Especialidad',
    credits: 6,
    prerequisites: [],
    semester: 10,
    color: 'bg-speciality_elective'
  },
  // Semestre XI
  {
    id: 'CI6191',
    name: 'Actividad de Habilitación Profesional (+CR300)',
    credits: 27,
    prerequisites: ['CI6907'],
    semester: 11,
    color: 'bg-thesis'
  },
  {
    id: '_FormacionIntegral3',
    name: 'Formación Integral de Especialidad',
    credits: 3,
    prerequisites: [],
    semester: 11,
    color: 'bg-holistic'
  },
  {
    id: 'EI2090',
    name: 'Examen de Suficiencia en Inglés II',
    credits: 0,
    prerequisites: [],
    semester: 11,
    color: 'bg-english'
  },
  {
    id: 'CI6161',
    name: 'Práctica III',
    credits: 14,
    prerequisites: [],
    semester: 11,
    color: 'bg-internship'
  }
];