try {
    console.log(tmp); 
    console.log('after error');   
} catch(e) {
    console.error('Error in catch', e);
    throw Error('custom error');
} finally {
    console.log('finally');
}

console.log('dfdfd');
