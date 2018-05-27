module.exports = {
  objects: [],
  addObject(obj){
    this.objects.push(obj);
  },
  search(query){
    return {
      hits: this.objects
    };
  }
};
