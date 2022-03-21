import flowers from "../data/flowers.js"
import data from "../data/data.js"
let local_stor = {
    customers : [],
    getFlowers: () => {
      return flowers;
    },
    getQuiz: (name) => {
      let quiz = data.find(x => x.name.toLowerCase() === name.toLowerCase());
      return quiz;
    }
}

export default local_stor;
