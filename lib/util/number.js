const getRandomNumber = (gteq, lteq) => {
  return Number(Math.floor(lteq * Math.random()) + gteq);
};

export default getRandomNumber;
