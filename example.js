const mongoose = require('mongoose');
const { Cat } = require('./models/Cat')
const Dog = require('./models/Dog')

mongoose
    .connect('mongodb://localhost/angelDB', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));







let dogs = [
    {
        name: 'Fido',
        peed: true,
        toys: ['tennis ball', 'chew toy', 'frisbee']
    },
    {
        name: 'Beethoven',
        toys: ['grand piano', 'bone']
    },
    {
        name: 'Airbud',
        peed: true,
        toys: ['basketball', 'soccerball']
    },
]

Dog.insertMany(dogs).then(res=>console.log(res)).catch(err => console.log(err))


Cat.remove({}).then(res=>console.log('I removed all teh cats'))



// let kitty = new Cat({
//     name: 'Tom',
//     fur: 'Gray',
//     age: 200,
//     favFood: 'MeowMix'
// })




// Cat
//   .deleteOne({name:"Chester"})
//   .then(newCat => console.log(`A new cat is created: ${newCat}!`))
//   .catch(err => console.log(`Error while creating a new cat: ${err}`));

//db.collection('cats).find({}).then(res => console.log(res))

//Cat.find({},{name:1}).then(res => console.log(res))

///Cat.findById('5eb96134fe5db7342df82298').then(res => console.log(res))



