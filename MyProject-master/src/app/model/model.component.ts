
export class Item {
  itemId;
  itemName;
  itemType;
  price;

  constructor(name, type, id) {
    this.itemName = name;
    this.itemId = id;
    this.itemType = type;
  }

}
