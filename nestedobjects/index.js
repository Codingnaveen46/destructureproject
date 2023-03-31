function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
  }
  
  console.log(extractNameAndStreet({ name: 'John Doe', address: { street: '123 Main St.' } }));
