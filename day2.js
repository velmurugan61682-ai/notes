
const data = [
  {
    director: "Christopher Nolan",
    movies: [
      { name: "Inception" },
      { name: "Interstellar" },
      { name: "The Dark Knight" }
    ]
  },
  {
    director: "James Cameron",
    movies: [
      { name: "Avatar" },
      { name: "Titanic" },
      { name: "Terminator 2" }
    ]
  },
  {
    director: "Rajamouli",
    movies: [
      { name: "RRR" },
      { name: "Baahubali 1" },
      { name: "Baahubali 2" }
    ]
  }
];

console.log(data[1].movies[2].name);  