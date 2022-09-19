const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const frase = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Numero: ${order.address.number}, AP: ${order.address.apartment}`;
    console.log(frase);
  
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const frase2 = `Olá ${order.order.delivery.deliveryPerson = 'Luiz Silva'}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} e de ${order.payment = 'R$ 50,00'}`
    // Adicione abaixo as informações necessárias.
  console.log(frase2);
  };
  
  orderModifier(order);