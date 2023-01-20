// Написати структуру данних котра містить n елементів, і реалізувати наступні методи
// insert(key, value)
// find(key)
// setAll(value)
// deleteAll()
// delete(key)
// складність всіх методів має дорівнювати O(1)


// Задание сделала со 2 попытки как поняла, используя {} в 13 строке. Если не верно, то можно подробнее)
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
      return this.cloud;
    }
    const current = this.data[key]
    if(!current) {
      return 'this key is not here'
    } 
    return 'this key is here'
  }

  //  Не совсем понятен данный метод setAll, что именно он должен делать?
  // Сделала так)) но прекрасно вижу сложность  - O(n)
  setAll(value) {
    this.cloud = value
    this.keys = {}
    return `All values settled to - ${value}`;
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
    return 'removal was successful'
  }

}


const dataStructure = new DataStructure();
dataStructure.insert(0, 'My');
dataStructure.insert(1, 'name');
dataStructure.insert(2, 'is');
dataStructure.insert(3, 'Tatiana');
console.log(dataStructure.data);

console.log(dataStructure.find('3'));
console.log(dataStructure.find('5'));

console.log(dataStructure.delete(3));
console.log(dataStructure.data);
console.log(dataStructure.deleteAll());

console.log(dataStructure.setAll('My name is Bogdan'));