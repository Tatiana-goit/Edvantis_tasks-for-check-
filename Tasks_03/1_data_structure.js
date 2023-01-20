// Написати структуру данних котра містить n елементів, і реалізувати наступні методи
// insert(key, value)
// find(key)
// setAll(value)
// deleteAll()
// delete(key)
// складність всіх методів має дорівнювати O(1)

class DataStructure {
  constructor() {
    this.data = {}
    this.cloud = ''
    this.keys = {}
  }

  insert(key, value) {
    this.keys[key] = true;
    this.data[key] = value
  }

  find(key) {
    if (!this.keys[key]) {
      return `key = ${this.cloud}`
    }
    const current = this.data[key]
    if(!current) {
      return `this key ${key} is not here`
    } 
    return `key = ${key} data = ${current}`
  }

  setAll(value) {
    this.cloud = value
    this.keys = {}
    return `Set all "${value}"`;
  }

  deleteAll() {
    return  this.data = {}
  }

  delete(key){
    const current = this.data[key]
    if(!current) {
      return 'no such key to delete'
    } 
    delete this.data[key]
    return `removal ${current} was successful`
  }
}


const dataStructure = new DataStructure();
dataStructure.insert(0, 'My');
dataStructure.insert(1, 'name');
dataStructure.insert(2, 'is');
dataStructure.insert(3, 'Tatiana');
console.log('data', dataStructure.data);

console.log('find', dataStructure.find('3'));

console.log('delete', dataStructure.delete(3));
console.log('data', dataStructure.data);
// console.log('deleteAll', dataStructure.deleteAll());

console.log(dataStructure.setAll('new info'));

console.log(dataStructure.find('1'));
dataStructure.insert(3, 'New');
console.log('data', dataStructure.data);
console.log('find', dataStructure.find('2'));
console.log('find', dataStructure.find('3'));
dataStructure.insert(4, '!');
console.log('find', dataStructure.find('1'));
console.log('find', dataStructure.find('4'));