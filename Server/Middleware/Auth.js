import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    next();
  } catch (error) {}
};

export default auth;
