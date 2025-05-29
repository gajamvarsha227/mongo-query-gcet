db.createCollection("products");

db.products.insertMany([
  {
    name: "Apple",
    description: "Fresh and juicy red apple.",
    imgUrl: "file:///C:/Users/Hp/Desktop/Images1/apple.jpg",
    price: 1.5
  },
  {
    name: "Banana",
    description: "Ripe yellow bananas full of energy.",
    imgUrl: "file:///C:/Users/Hp/Downloads/Images/banana.jpeg",
    price: 0.75
  },
  {
    name: "Orange",
    description: "Citrus fruit rich in Vitamin C.",
    imgUrl: "file:///C:/Users/Hp/Downloads/Images/orange.jpeg",
    price: 1.2
  }
]);