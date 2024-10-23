export function toRoman(num: number): string {
  const romanNumerals = [
    { value: 11, numeral: 'XI' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 8, numeral: 'VIII' },
    { value: 7, numeral: 'VII' },
    { value: 6, numeral: 'VI' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 3, numeral: 'III' },
    { value: 2, numeral: 'II' },
    { value: 1, numeral: 'I' }
  ];
  
  return romanNumerals.find(r => r.value === num)?.numeral || '';
}