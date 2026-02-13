const productsData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    name: "Hoodie",
    price: 40,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    name: "T-Shirt",
    price: 20,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
    name: "Sneakers",
    price: 75,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    name: "Jeans",
    price: 55,
  },
{
  id: 5,
  image: "data:image/jpeg;base64,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",
  name: "Cap",
  price: 15,
},
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a",
    name: "Jacket",
    price: 90,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    name: "Backpack",
    price: 60,
  },

  {
    id: 8,
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
    name: "Watch",
    price: 120,
  },
  {
    id: 9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9gOi43TplGQIxEqpNkq6BqTGZ8SpoawwmA&s",
    name: "Sunglasses",
    price: 35,
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    name: "Sweater",
    price: 50,
  },
  {
    id: 11,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNsZtCnLdzHhXQE6F33XkFnPOciEi6-JrwQ&s",
    name: "Boots",
    price: 85,
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10",
    name: "Belt",
    price: 25,
  },
];

export default productsData;