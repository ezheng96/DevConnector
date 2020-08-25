const p1 = new Promise((resolve, reject) => {
  resolve('p1 resolved');
});

const p2 = new Promise((resolve, reject) => {
  resolve('p2 resolved');
});

const p3 = new Promise((resolve, reject) => {
  resolve('p3 resolved');
});

//these are all running at the same time
Promise.all([p1, p2, p3])
  .then((messages) => {
    console.log(messages);
  })
  .catch((messages) => {
    console.log(messages);
  });

Promise.race([p1, p2, p3])
  .then((messages) => {
    console.log(messages);
  })
  .catch((messages) => {
    console.log(messages);
  });
