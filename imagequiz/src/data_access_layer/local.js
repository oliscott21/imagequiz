import flowers from "../data/flowers.js"

let local_stor = {
    customers : [],
    getFlowers: () => {
      return flowers;
    }
}

export default local_stor;
