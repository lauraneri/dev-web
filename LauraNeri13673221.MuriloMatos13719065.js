const cidades = [];

/*1*/
cidades.push({ name: "João Pessoa",  population: 40350, temperature: 23, weatherDescription: "sunny"});
cidades.push({ name: "São Paulo", population: 1000000, temperature: 27, weatherDescription: "cloudy"});
cidades.push({ name: "Rio de Janeiro", population: 2280, temperature: 27, weatherDescription: "cloudy"});
cidades.push({ name: "Belo Horizonte", population: 10000, temperature: 27, weatherDescription: "cloudy"});
cidades.push({ name: "Manaus", population: 70100, temperature: 27, weatherDescription: "cloudy"});

/*ordena cidades com maiores populações para cidades com menores populações */

/*2*/
function sortCities(cities, criterion) {
  const sortedCities = [...cities];

  sortedCities.sort((a, b) => {
    switch (criterion) {
      case 'name':
        return a.name.localeCompare(b.name);
      
      case 'population':
        return a.population - b.population;
      
      case 'temperature':
        return a.temperature - b.temperature;
      
      case 'name-desc':
        return b.name.localeCompare(a.name);
      
      case 'population-desc':
        return b.population - a.population;
      
      case 'temperature-desc':
        return b.temperature - a.temperature;
      
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return sortedCities;
}

// 3
function filterCities(cities, filterType, filterValue) {
    const filteredCities = [...cities];
  
    switch (filterType) {
      case 'populationGreaterThan':
        return filteredCities.filter(city => city.population > filterValue);
  
      case 'populationLessThan':
        return filteredCities.filter(city => city.population < filterValue);
  
      case 'weatherEquals':
        return filteredCities.filter(city => city.weatherDescription.toLowerCase() === filterValue.toLowerCase());
  
      case 'temperatureGreaterThan':
        return filteredCities.filter(city => city.temperature > filterValue);
  
      case 'temperatureLessThan':
        return filteredCities.filter(city => city.temperature < filterValue);
      
      default:
        return filteredCities;
    }
  }

/*4*/
cidades_ordenadas = sortCities(cidades, "population");
cidades_ordenadas = sortCities(cidades, "name");
cidades_ordenadas = sortCities(cidades, "temperature");

// 5
function processCities(cities, filterType, filterValue, sortCriterion) {
    // primeiro filtra, depois ordena e retorna o array resultante
    const filtered = filterCities(cities, filterType, filterValue);
    const sorted = sortCities(filtered, sortCriterion);
    return sorted;
}

// 6

// exemplo 1
console.log("--- Teste 1 ---");
const resultado1 = processCities(cidades, 'populationGreaterThan', 10000, 'population');
console.log("1) Filtro: população > 10.000, Ordenação: por população crescente");
console.log(resultado1);

// ex 2
console.log("--- Teste 2 ---");
const resultado2 = processCities(cidades, 'weatherEquals', 'cloudy', 'name');
console.log("2) Filtro: clima 'cloudy', Ordenação: por nome (A-Z)");
console.log(resultado2);

// ex 3
console.log("--- Teste 3 ---");
const resultado6 = processCities(cidades, 'temperatureLessThan', 28, 'population-desc');
console.log("3) Filtro: temperatura < 28, Ordenação: por população (desc)");
console.log(resultado6);

// ex 4: sem filtros, ordenação padrão
console.log("--- Teste 4 ---");
const resultado7 = processCities(cidades, '', 0, 'temperature');
console.log("4) Filtro: nenhum, Ordenação: por temperatura (crescente)");
console.log(resultado7);

// ex 5: filtro que não encontra correspondências
console.log("--- Teste 5 ---");
const resultado8 = processCities(cidades, 'weatherEquals', 'neve', 'name');
console.log("5) Filtro: clima 'neve' (sem correspondências), Ordenação: por nome");
console.log(resultado8);

console.log(cidades_ordenadas)