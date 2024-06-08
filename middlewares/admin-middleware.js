const adminMiddleware = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      throw new Error("You don't have access");
    }
    next();
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
module.exports = adminMiddleware;
