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
  }

  insert(key, value) {
    this.data[key] = value
  }

  find(key) {
    const current = this.data[key]
    if(!current) {
      return 'this key is not here'
    } 
    return 'this key is here'
  }

  //  Не совсем понятен данный метод setAll, что именно он должен делать?
  // Сделала так)) но прекрасно вижу сложность  - O(n)
  setAll(value) {
    const array = value.split(' ')
    for (let i = 0; i < array.length; i++) {
      this.data[i] = array[i]
    }
    return this.data
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

const dataStructureforSetAll = new DataStructure();
console.log(dataStructureforSetAll.setAll('My name is Bogdan'));