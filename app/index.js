const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const GenerationEngine = require('./generation/engine');

const app = express();
app.use(helmet());

const engine = new GenerationEngine();
engine.start();

app.get('/dragon/new', (req, res) => {
    res.json({
        dragon: engine
            .generation
            .newDragon()
    })
});

// const PORT = 6000;

module.exports = app;

// setTimeout(() => engine.stop(), 20000); const Generation =
// require('./generation'); const generation = new Generation();
// console.log('generation', generation); const gooby = generation.newDragon();
// console.log('gooby', gooby); setTimeout(() => { // simulate expiration const
// mimar = generation.newDragon(); console.log('mimar', mimar); }, 5000); const
// Dragon = require('./dragon'); const fooey = new Dragon({     birthdate: new
// Date().toLocaleDateString(), nickname: 'fooey' }); const baloo = new Dragon({
//     nickname: 'baloo', birthdate: new Date().toLocaleDateString(),   traits:
// [         { traitType: 'backgroundColor',             traitValue: 'green' }
// ] }); const minar = new Dragon(); setTimeout(() => { const gooby = new
// Dragon(); console.log('Gooby', gooby); }, 3000); console.log('fooey', fooey);
// console.log('baloo', baloo); console.log('minar', minar);