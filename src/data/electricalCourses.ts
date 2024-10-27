import { Course } from '../types';

export const electricalCourses: Course[] = [
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
  id: 'EL3101',
  name: 'Análisis y Diseño de Circuitos Eléctricos',
  credits: 6,
  prerequisites: ['MA2002', 'FI2002'],
  semester: 5,
  color: 'bg-common'
},
{
  id: 'EL3102',
  name: 'Sistemas Digitales',
  credits: 6,
  prerequisites: ['CD2201', 'FI2002'],
  semester: 5,
  color: 'bg-common'
},
{
  id: 'EL3103',
  name: 'Electromagnetismo Aplicado',
  credits: 6,
  prerequisites: ['FI2002'],
  semester: 5,
  color: 'bg-common'
},
{
  id: 'EL3104',
  name: 'Probabilidad y Procesos Estocásticos',
  credits: 6,
  prerequisites: ['MA2001'],
  semester: 5,
  color: 'bg-common'
},
{
  id: 'EL3105',
  name: 'Seminario de Ingeniería Eléctrica e Innovación Tecnológica',
  credits: 6,
  prerequisites: ['CD2201'],
  semester: 5,
  color: 'bg-common'
},
// Semestre VI
{
  id: 'EL3201',
  name: 'Laboratorio de Ingeniería Eléctrica',
  credits: 6,
  prerequisites: ['EL3101', 'EL3103'],
  semester: 6,
  color: 'bg-common'
},
{
  id: 'EL3202',
  name: 'Circuitos Eléctricos Análogos',
  credits: 6,
  prerequisites: ['EL3101'],
  semester: 6,
  color: 'bg-common'
},
{
  id: 'EL3203',
  name: 'Análisis de Señales',
  credits: 6,
  prerequisites: ['EL3101'],
  semester: 6,
  color: 'bg-common'
},
{
  id: 'EL3204',
  name: 'Análisis de Sistemas Dinámicos y Estimación',
  credits: 6,
  prerequisites: ['EL3104'],
  semester: 6,
  color: 'bg-common'
},
{
  id: '_FormacionIntegral1',
  name: 'Formación Integral EH/FG',
  credits: 3,
  prerequisites: [],
  semester: 6,
  color: 'bg-holistic'
},
{
  id: '_FormacionIntegral2',
  name: 'Formación Integral EH/FG',
  credits: 3,
  prerequisites: [],
  semester: 6,
  color: 'bg-holistic'
},
// Semestre VII
{
  id: 'EL4111',
  name: 'Conversión de Energía y Sistemas Eléctricos',
  credits: 6,
  prerequisites: ['EL3101'],
  semester: 7,
  color: 'bg-common'
},
{
  id: 'EL4112',
  name: 'Principios de Comunicaciones',
  credits: 6,
  prerequisites: ['EL3203', 'EL3104'],
  semester: 7,
  color: 'bg-common'
},
{
  id: 'EL4113',
  name: 'Fundamentos de Control de Sistemas',
  credits: 6,
  prerequisites: ['EL3203', 'EL3204'],
  semester: 7,
  color: 'bg-common'
},
{
  id: 'EL4114',
  name: 'Optimización',
  credits: 6,
  prerequisites: ['EL3104'],
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
  id: 'EL4115',
  name: 'Práctica Profesional I',
  credits: 7,
  prerequisites: ['EL3101', 'EL3102', 'EL3105'],
  semester: 7,
  color: 'bg-internship'
},
// Semestre VIII
{
  id: '_Nucleo1',
  name: 'Núcleo Línea de Especialización',
  credits: 6,
  prerequisites: [],
  semester: 8,
  color: 'bg-common'
},
{
  id: '_Nucleo2',
  name: 'Laboratorio de Línea de Especialización',
  credits: 6,
  prerequisites: [],
  semester: 8,
  color: 'bg-common'
},
{
  id: 'EL4203',
  name: 'Programación Avanzada',
  credits: 6,
  prerequisites: ['EL3102', 'EL4114'],
  semester: 8,
  color: 'bg-common'
},
{
  id: 'EL4204',
  name: 'Formulación y Evaluación de Proyectos',
  credits: 6,
  prerequisites: ['EL4204'],
  semester: 8,
  color: 'bg-common'
},
{
  id: '_Electivo2',
  name: 'Electivo',
  credits: 6,
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
  id: 'EL6101',
  name: 'Taller de Proyectos Tecnológicos',
  credits: 12,
  prerequisites: ['EL4203'],
  semester: 9,
  color: 'bg-common'
},
{
  id: '_ElectivoEspecializacion1',
  name: 'Electivo de Línea de Especialización',
  credits: 6,
  prerequisites: [],
  semester: 9,
  color: 'bg-speciality_elective'
},
{
  id: '_ElectivoEspecializacion2',
  name: 'Electivo de Línea de Especialización',
  credits: 6,
  prerequisites: [],
  semester: 9,
  color: 'bg-speciality_elective'
},
{
  id: '_ElectivoEspecializacion3',
  name: 'Electivo de Línea de Especialización',
  credits: 6,
  prerequisites: [],
  semester: 9,
  color: 'bg-speciality_elective'
},
{
  id: 'EL5115',
  name: 'Práctica Profesional II',
  credits: 14,
  prerequisites: ['EL4204', 'EL4111', 'EL4112', 'EL4113'],
  semester: 9,
  color: 'bg-internship'
},

// Semestre X
{
  id: 'EL6201',
  name: 'Taller de Emprendimiento e Innovación',
  credits: 6,
  prerequisites: ['EL6101'],
  semester: 10,
  color: 'bg-common'
},
{
  id: 'EL6908',
  name: 'Introducción al Trabajo de Título',
  credits: 6,
  prerequisites: ['EL5115'],
  semester: 10,
  color: 'bg-thesis'
},
{
  id: '_ElectivoEspecializacion4',
  name: 'Electivo de Línea de Especialización',
  credits: 6,
  prerequisites: [],
  semester: 10,
  color: 'bg-speciality_elective'
},
{
  id: '_ElectivoEspecializacion5',
  name: 'Electivo de Línea de Especialización',
  credits: 6,
  prerequisites: [],
  semester: 10,
  color: 'bg-speciality_elective'
},
{
  id: '_ElectivoEspecializacion6',
  name: 'Electivo de Línea de Especialización',
  credits: 6,
  prerequisites: [],
  semester: 10,
  color: 'bg-speciality_elective'
},
// Semestre XI
{
  id: 'EL6301',
  name: 'Taller de Desempeño Profesional',
  credits: 3,
  prerequisites: ['EL6101'],
  semester: 11,
  color: 'bg-common'
},
{
  id: 'EL6919',
  name: 'Trabajo de Título',
  credits: 27,
  prerequisites: ['EL6908'],
  semester: 11,
  color: 'bg-thesis'
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