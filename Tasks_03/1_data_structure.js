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



// // Linked List
// //  [value, next] -> [value, next] -> [walue, next]
// class Node {
//   constructor(data, next = null) {
//     this.data = data
//     this.next = next
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null
//     this.tail = null
//   }

//   insert(data) {
//     const node = new Node(data)

//     if (this.tail) {
//       this.tail.next = node
//     }

//     if (!this.head) {
//       this.head = node
//     }

//     this.tail = node
//   }

//   // O(1)
//   insertBefore(data) {
//     const node = new Node(data, this.head)

//     this.head = node

//     if(!this.tail) {
//       this.tail = node
//     }
//   }

//   // O(1)
//   insertAfter(after, data) {
//     const found = this.find(after)

//     if (!found ){
//       return
//     }

//     found.next= new Node (data, found.next)
//   }

//   // O(n)
//   find (data) {
//     if(!this.head) {
//       return
//     }

//     let current = this.head
//     while (current) {
//       if (current.data === data) {
//         return current
//       }
//       current = current.next
//     }
//   }

//   // O(n)
//   toArray () {
//     const output = []
//     let current = this.head

//     while(current) {
//       output.push(current)
//       current = current.next
//     }

//     return output
//   }

//   // O(n)
//   delete(data) {
//     if (!this.head) {
//       return
//     }

//     while (this.head && this.head.data ===data) {
//       this.head = this.head.next
//     }

//     let current = this.head
//     while (current.next) {
//       if (current.next.data === data) {
//         current.next = current.next.next
//       } else  {
//         current = current.next
//       }
//     }

//     if (this.tail.data ===data) {
//       this.tail = current
//     }
//   }
// }

// const list = new LinkedList();
// list.insert('My');
// list.insert('name');
// list.insertBefore('Hi, ');
// list.insert('Tatiana');
// list.insert('!');

// console.log(list.toArray());
// console.log(list.find('Tatiana'));
// list.insertAfter('name', 'is');
// console.log(list.toArray());
// list.delete('!')
// console.log(list.toArray());